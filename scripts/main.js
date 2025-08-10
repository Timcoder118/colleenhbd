// 主要功能逻辑
console.log('main.js 开始加载...');

// 检查 quotes.js 是否正确加载
if (typeof quotesDatabase === 'undefined') {
    console.error('quotes.js 未正确加载，quotesDatabase 未定义');
}

class DailyWisdomApp {
    constructor() {
        console.log('DailyWisdomApp 构造函数被调用');
        this.currentQuote = null;
        this.isLoading = false;
        this.favorites = this.loadFavorites(); // 加载收藏列表
        this.init();
    }

    // 加载收藏列表
    loadFavorites() {
        const saved = localStorage.getItem('daily_wisdom_favorites');
        return saved ? JSON.parse(saved) : [];
    }

    // 保存收藏列表
    saveFavorites() {
        localStorage.setItem('daily_wisdom_favorites', JSON.stringify(this.favorites));
    }

    // 添加收藏
    addToFavorites(quote) {
        if (!this.favorites.find(fav => fav.text === quote.text)) {
            this.favorites.push({
                ...quote,
                addedAt: new Date().toISOString()
            });
            this.saveFavorites();
            this.showToast('已添加到收藏', 'success');
            this.updateFavoriteButton();
        } else {
            this.showToast('已经在收藏中了', 'info');
        }
    }

    // 移除收藏
    removeFromFavorites(quote) {
        this.favorites = this.favorites.filter(fav => fav.text !== quote.text);
        this.saveFavorites();
        this.showToast('已从收藏中移除', 'success');
        this.updateFavoriteButton();
    }

    // 检查是否已收藏
    isFavorite(quote) {
        return this.favorites.find(fav => fav.text === quote.text);
    }

    // 更新收藏按钮状态
    updateFavoriteButton() {
        const favoriteBtn = document.getElementById('favorite-btn');
        if (favoriteBtn && this.currentQuote) {
            const isFav = this.isFavorite(this.currentQuote);
            favoriteBtn.classList.toggle('favorited', isFav);
            favoriteBtn.innerHTML = isFav ? 
                '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>已收藏' :
                '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>收藏';
        }
    }

    // 切换收藏状态
    toggleFavorite() {
        if (!this.currentQuote) return;
        
        if (this.isFavorite(this.currentQuote)) {
            this.removeFromFavorites(this.currentQuote);
        } else {
            this.addToFavorites(this.currentQuote);
        }
    }

    // 分享名句
    shareQuote() {
        if (!this.currentQuote) return;

        const shareText = `${this.currentQuote.text}\n\n——${this.currentQuote.source}\n\n来自：每日经典智慧网站`;
        const shareUrl = window.location.href;

        // 尝试使用原生分享API
        if (navigator.share) {
            navigator.share({
                title: '每日经典智慧',
                text: shareText,
                url: shareUrl
            }).catch(err => {
                console.log('原生分享失败，使用备用方案:', err);
                this.showShareOptions(shareText, shareUrl);
            });
        } else {
            // 备用分享方案
            this.showShareOptions(shareText, shareUrl);
        }
    }

    // 显示分享选项
    showShareOptions(shareText, shareUrl) {
        const modal = document.createElement('div');
        modal.className = 'share-modal';
        modal.innerHTML = `
            <div class="share-content">
                <div class="share-header">
                    <h3>分享智慧</h3>
                    <button class="close-share">✕</button>
                </div>
                <div class="share-text">
                    <p>${shareText}</p>
                </div>
                <div class="share-actions">
                    <button class="share-action copy-text" data-text="${shareText}">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                        </svg>
                        复制文本
                    </button>
                    <button class="share-action copy-url" data-url="${shareUrl}">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                        </svg>
                        复制链接
                    </button>
                    <a href="https://weibo.com/share?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent('每日经典智慧')}" target="_blank" class="share-action weibo-share">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                            <line x1="9" y1="9" x2="9.01" y2="9"/>
                            <line x1="15" y1="9" x2="15.01" y2="9"/>
                        </svg>
                        微博分享
                    </a>
                    <a href="https://connect.qq.com/widget/shareqq/index.html?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent('每日经典智慧')}&desc=${encodeURIComponent(shareText)}" target="_blank" class="share-action qq-share">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                        </svg>
                        QQ分享
                    </a>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // 绑定事件
        modal.querySelector('.close-share').onclick = () => modal.remove();
        modal.querySelector('.copy-text').onclick = () => {
            this.copyToClipboard(shareText);
            this.showToast('文本已复制到剪贴板', 'success');
        };
        modal.querySelector('.copy-url').onclick = () => {
            this.copyToClipboard(shareUrl);
            this.showToast('链接已复制到剪贴板', 'success');
        };

        // 点击外部关闭
        modal.onclick = (e) => {
            if (e.target === modal) modal.remove();
        };
    }

    // 复制到剪贴板
    copyToClipboard(text) {
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text).then(() => {
                console.log('复制成功');
            }).catch(err => {
                console.error('复制失败:', err);
                this.fallbackCopyToClipboard(text);
            });
        } else {
            this.fallbackCopyToClipboard(text);
        }
    }

    // 备用复制方法
    fallbackCopyToClipboard(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            document.execCommand('copy');
            console.log('备用复制成功');
        } catch (err) {
            console.error('备用复制失败:', err);
        }
        
        document.body.removeChild(textArea);
    }

    // 显示收藏列表
    showFavorites() {
        if (this.favorites.length === 0) {
            this.showToast('还没有收藏任何名句', 'info');
            return;
        }

        // 创建收藏列表弹窗
        const modal = document.createElement('div');
        modal.className = 'favorites-modal';
        modal.innerHTML = `
            <div class="favorites-content">
                <div class="favorites-header">
                    <h3>我的收藏 (${this.favorites.length})</h3>
                    <button class="close-favorites">✕</button>
                </div>
                <div class="favorites-list">
                    ${this.favorites.map((fav, index) => `
                        <div class="favorite-item" data-index="${index}">
                            <div class="favorite-text">${fav.text}</div>
                            <div class="favorite-source">${fav.source}</div>
                            <div class="favorite-actions">
                                <button class="view-favorite" data-index="${index}">查看</button>
                                <button class="remove-favorite" data-index="${index}">删除</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // 绑定事件
        modal.querySelector('.close-favorites').onclick = () => modal.remove();
        modal.querySelectorAll('.view-favorite').forEach(btn => {
            btn.onclick = (e) => {
                const index = parseInt(e.target.dataset.index);
                const quote = this.favorites[index];
                this.displayQuote(quote);
                modal.remove();
            };
        });
        modal.querySelectorAll('.remove-favorite').forEach(btn => {
            btn.onclick = (e) => {
                const index = parseInt(e.target.dataset.index);
                this.favorites.splice(index, 1);
                this.saveFavorites();
                this.showToast('已从收藏中移除', 'success');
                this.showFavorites(); // 刷新列表
            };
        });

        // 点击外部关闭
        modal.onclick = (e) => {
            if (e.target === modal) modal.remove();
        };
    }

    // 初始化应用
    init() {
        console.log('开始初始化应用...');
        this.setupEventListeners();
        this.displayTodayQuote();
        this.updateCurrentDate();
        console.log('应用初始化完成');
    }

    // 设置事件监听器
    setupEventListeners() {
        // 刷新按钮点击事件
        const refreshBtn = document.getElementById('refresh-btn');
        if (refreshBtn) {
            refreshBtn.addEventListener('click', () => this.refreshQuote());
        }

        // 收藏按钮事件
        const favoriteBtn = document.getElementById('favorite-btn');
        if (favoriteBtn) {
            favoriteBtn.addEventListener('click', () => this.toggleFavorite());
        }

        // 收藏列表按钮事件
        const favoritesListBtn = document.getElementById('favorites-list-btn');
        if (favoritesListBtn) {
            favoritesListBtn.addEventListener('click', () => this.showFavorites());
        }

        // 分享按钮事件
        const shareBtn = document.getElementById('share-btn');
        if (shareBtn) {
            shareBtn.addEventListener('click', () => this.shareQuote());
        }

        // 分类筛选按钮事件
        this.setupCategoryFilters();

        // 搜索功能设置
        this.setupSearch();

        // 页面加载完成后的处理
        window.addEventListener('load', () => {
            this.animateQuoteCard();
        });

        // 键盘快捷键支持
        document.addEventListener('keydown', (e) => {
            if (e.key === 'r' || e.key === 'R') {
                this.refreshQuote();
            }
            
            // Ctrl/Cmd + F 聚焦搜索框
            if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
                e.preventDefault();
                const searchInput = document.getElementById('search-input');
                if (searchInput) {
                    searchInput.focus();
                    searchInput.select();
                }
            }

            // Ctrl/Cmd + D 收藏当前名句
            if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
                e.preventDefault();
                this.toggleFavorite();
            }
        });
    }

    // 设置分类筛选器
    setupCategoryFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // 移除所有按钮的active类
                filterButtons.forEach(b => b.classList.remove('active'));
                // 添加当前按钮的active类
                btn.classList.add('active');
                
                // 获取选中的分类
                const category = btn.dataset.category;
                this.filterQuotesByCategory(category);
            });
        });
    }

    // 设置搜索功能
    setupSearch() {
        const searchInput = document.getElementById('search-input');
        const searchBtn = document.getElementById('search-btn');
        
        if (searchInput && searchBtn) {
            // 搜索按钮点击事件
            searchBtn.addEventListener('click', () => this.performSearch());
            
            // 输入框回车事件
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.performSearch();
                }
            });
            
            // 实时搜索（输入时搜索）
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.trim();
                if (query.length >= 2) {
                    this.performSearch(query);
                } else if (query.length === 0) {
                    // 清空搜索时恢复今日名句
                    this.displayTodayQuote();
                    // 重置分类筛选器
                    this.resetCategoryFilter();
                }
            });
        }
    }

    // 执行搜索
    performSearch(query = null) {
        if (!query) {
            query = document.getElementById('search-input')?.value.trim();
        }
        
        if (!query || query.length < 2) {
            this.showError('请输入至少2个字符进行搜索');
            return;
        }
        
        try {
            const searchResults = searchQuotes(query);
            if (searchResults.length > 0) {
                // 从搜索结果中随机选择一个
                const randomIndex = Math.floor(Math.random() * searchResults.length);
                this.currentQuote = searchResults[randomIndex];
                this.updateQuoteDisplay();
                this.animateQuoteCard();
                this.showSuccessMessage(`找到${searchResults.length}条相关名句，已显示其中一条`);
                
                // 重置分类筛选器
                this.resetCategoryFilter();
            } else {
                this.showError(`未找到包含"${query}"的名句`);
            }
        } catch (error) {
            console.error('搜索失败:', error);
            this.showError('搜索失败，请重试');
        }
    }

    // 重置分类筛选器
    resetCategoryFilter() {
        const allBtn = document.querySelector('.filter-btn[data-category="all"]');
        if (allBtn) {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            allBtn.classList.add('active');
        }
    }

    // 根据分类筛选名句
    filterQuotesByCategory(category) {
        if (category === 'all') {
            // 显示所有名句，恢复今日名句
            this.displayTodayQuote();
            this.applyTheme('default');
        } else {
            // 筛选特定分类的名句
            const filteredQuotes = getQuotesByCategory(category);
            if (filteredQuotes.length > 0) {
                // 从筛选结果中随机选择一个
                const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
                this.currentQuote = filteredQuotes[randomIndex];
                this.updateQuoteDisplay();
                this.animateQuoteCard();
                this.showSuccessMessage(`已切换到${category}分类`);
                this.applyTheme(category);
            } else {
                this.showError(`未找到${category}分类的名句`);
            }
        }
    }

    // 应用主题色彩
    applyTheme(category) {
        const root = document.documentElement;
        const quoteCard = document.querySelector('.quote-card');
        
        // 移除所有主题类
        if (quoteCard) {
            quoteCard.classList.remove('theme-dao', 'theme-fo', 'theme-ru', 'theme-chu', 'theme-xue', 'theme-tang');
        }

        // 根据分类应用主题
        switch (category) {
            case '道家':
                if (quoteCard) quoteCard.classList.add('theme-dao');
                root.style.setProperty('--theme-primary', '#8B4513'); // 棕色
                root.style.setProperty('--theme-secondary', '#D2691E'); // 巧克力色
                root.style.setProperty('--theme-accent', '#F4A460'); // 沙褐色
                break;
            case '佛家':
                if (quoteCard) quoteCard.classList.add('theme-fo');
                root.style.setProperty('--theme-primary', '#9932CC'); // 紫色
                root.style.setProperty('--theme-secondary', '#BA55D3'); // 兰花紫
                root.style.setProperty('--theme-accent', '#DDA0DD'); // 梅红色
                break;
            case '儒家':
                if (quoteCard) quoteCard.classList.add('theme-ru');
                root.style.setProperty('--theme-primary', '#8B0000'); // 深红色
                root.style.setProperty('--theme-secondary', '#DC143C'); // 深红色
                root.style.setProperty('--theme-accent', '#FF6347'); // 番茄色
                break;
            case '处世':
                if (quoteCard) quoteCard.classList.add('theme-chu');
                root.style.setProperty('--theme-primary', '#228B22'); // 森林绿
                root.style.setProperty('--theme-secondary', '#32CD32'); // 酸橙绿
                root.style.setProperty('--theme-accent', '#90EE90'); // 浅绿色
                break;
            case '学习':
                if (quoteCard) quoteCard.classList.add('theme-xue');
                root.style.setProperty('--theme-primary', '#1E90FF'); // 道奇蓝
                root.style.setProperty('--theme-secondary', '#4169E1'); // 皇家蓝
                root.style.setProperty('--theme-accent', '#87CEEB'); // 天蓝色
                break;
            case '唐诗宋词':
                if (quoteCard) quoteCard.classList.add('theme-tang');
                root.style.setProperty('--theme-primary', '#DAA520'); // 金黄色
                root.style.setProperty('--theme-secondary', '#FFD700'); // 金色
                root.style.setProperty('--theme-accent', '#F0E68C'); // 卡其色
                break;
            default:
                // 默认主题
                root.style.setProperty('--theme-primary', 'var(--primary-color)');
                root.style.setProperty('--theme-secondary', 'var(--secondary-color)');
                root.style.setProperty('--theme-accent', 'var(--accent-color)');
                break;
        }
    }

    // 显示今日名句
    displayTodayQuote() {
        try {
            this.currentQuote = getTodayQuote();
            this.updateQuoteDisplay();
        } catch (error) {
            console.error('获取今日名句失败:', error);
            this.showError('获取名句失败，请刷新页面重试');
        }
    }

    // 刷新名句
    refreshQuote() {
        if (this.isLoading) return;
        
        this.setLoadingState(true);
        
        // 模拟加载延迟，提供更好的用户体验
        setTimeout(() => {
            try {
                // 检查当前是否在分类模式下
                const activeCategory = document.querySelector('.filter-btn.active');
                if (activeCategory && activeCategory.dataset.category && activeCategory.dataset.category !== 'all') {
                    // 在分类模式下，从该分类中随机选择
                    const category = activeCategory.dataset.category;
                    const filteredQuotes = getQuotesByCategory(category);
                    if (filteredQuotes.length > 0) {
                        const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
                        this.currentQuote = filteredQuotes[randomIndex];
                        this.showSuccessMessage(`已在${category}分类中更新名句`);
                    } else {
                        this.showError(`未找到${category}分类的名句`);
                        return;
                    }
                } else {
                    // 不在分类模式下，从所有名句中随机选择
                    this.currentQuote = getRandomQuote();
                    this.showSuccessMessage('已更新名句');
                }
                
                this.updateQuoteDisplay();
                this.animateQuoteCard();
            } catch (error) {
                console.error('刷新名句失败:', error);
                this.showError('刷新失败，请重试');
            } finally {
                this.setLoadingState(false);
            }
        }, 500);
    }

    // 更新名句显示
    updateQuoteDisplay() {
        if (!this.currentQuote) return;

        // 更新名句文本
        const quoteText = document.getElementById('quote-text');
        if (quoteText) {
            quoteText.textContent = this.currentQuote.text;
        }

        // 更新来源
        const quoteSource = document.getElementById('quote-source');
        if (quoteSource) {
            quoteSource.textContent = this.currentQuote.source;
        }

        // 更新解读
        const quoteInterpretation = document.getElementById('quote-interpretation');
        if (quoteInterpretation) {
            quoteInterpretation.textContent = this.currentQuote.interpretation;
        }

        // 更新收藏按钮状态
        this.updateFavoriteButton();

        // 配图功能已移除，保持界面简洁

        // 更新页面标题
        document.title = `每日经典智慧 - ${this.currentQuote.text.substring(0, 20)}...`;
    }

    // 更新当前日期
    updateCurrentDate() {
        const dateElement = document.getElementById('current-date');
        if (dateElement) {
            const today = new Date();
            const options = { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                weekday: 'long'
            };
            dateElement.textContent = today.toLocaleDateString('zh-CN', options);
        }
    }

    // 设置加载状态
    setLoadingState(loading) {
        this.isLoading = loading;
        const refreshBtn = document.getElementById('refresh-btn');
        const quoteCard = document.querySelector('.quote-card');
        
        if (refreshBtn) {
            refreshBtn.disabled = loading;
        }
        
        if (quoteCard) {
            if (loading) {
                quoteCard.classList.add('loading');
            } else {
                quoteCard.classList.remove('loading');
            }
        }
    }

    // 动画效果
    animateQuoteCard() {
        const quoteCard = document.querySelector('.quote-card');
        if (quoteCard) {
            quoteCard.style.animation = 'none';
            quoteCard.offsetHeight; // 触发重排
            quoteCard.style.animation = 'fadeInUp 0.6s ease-out';
        }
    }

    // 显示成功消息
    showSuccessMessage(message) {
        this.showToast(message, 'success');
    }

    // 显示错误消息
    showError(message) {
        this.showToast(message, 'error');
    }

    // 显示提示消息
    showToast(message, type = 'info') {
        // 创建提示元素
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        
        // 添加样式
        Object.assign(toast.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '12px 20px',
            borderRadius: '8px',
            color: 'white',
            fontSize: '14px',
            fontWeight: '500',
            zIndex: '10000',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease',
            maxWidth: '300px',
            wordWrap: 'break-word'
        });

        // 根据类型设置背景色
        const colors = {
            success: '#34C759',
            error: '#FF3B30',
            info: '#007AFF'
        };
        toast.style.backgroundColor = colors[type] || colors.info;

        // 添加到页面
        document.body.appendChild(toast);

        // 显示动画
        setTimeout(() => {
            toast.style.transform = 'translateX(0)';
        }, 100);

        // 自动隐藏
        setTimeout(() => {
            toast.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        }, 3000);
    }

    // 获取当前名句信息（供聊天功能使用）
    getCurrentQuoteInfo() {
        return this.currentQuote;
    }

    // 分享功能
    shareQuote() {
        if (navigator.share && this.currentQuote) {
            navigator.share({
                title: '每日经典智慧',
                text: `${this.currentQuote.text}\n\n来源：${this.currentQuote.source}\n解读：${this.currentQuote.interpretation}`,
                url: window.location.href
            }).catch(error => {
                console.log('分享失败:', error);
                this.copyToClipboard();
            });
        } else {
            this.copyToClipboard();
        }
    }

    // 复制到剪贴板
    copyToClipboard() {
        if (!this.currentQuote) return;

        const text = `${this.currentQuote.text}\n\n来源：${this.currentQuote.source}\n解读：${this.currentQuote.interpretation}`;
        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                this.showSuccessMessage('已复制到剪贴板');
            }).catch(() => {
                this.fallbackCopyToClipboard(text);
            });
        } else {
            this.fallbackCopyToClipboard(text);
        }
    }

    // 备用复制方法
    fallbackCopyToClipboard(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            document.execCommand('copy');
            this.showSuccessMessage('已复制到剪贴板');
        } catch (error) {
            console.error('复制失败:', error);
            this.showError('复制失败');
        }
        
        document.body.removeChild(textArea);
    }
}

// 页面加载完成后初始化应用
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM 加载完成，开始检查依赖...');
    
    // 检查必要的函数是否存在
    if (typeof getTodayQuote === 'undefined') {
        console.error('quotes.js 文件未正确加载，getTodayQuote 未定义');
        console.log('可用的全局变量:', Object.keys(window).filter(key => key.includes('quote') || key.includes('Quote')));
        return;
    }

    if (typeof quotesDatabase === 'undefined') {
        console.error('quotes.js 文件未正确加载，quotesDatabase 未定义');
        return;
    }

    console.log('所有依赖检查通过，开始初始化应用...');

    try {
        // 初始化应用
        window.wisdomApp = new DailyWisdomApp();
        console.log('应用初始化成功');
        
        // 添加一些额外的交互功能
        addExtraFeatures();
        console.log('额外功能添加完成');
    } catch (error) {
        console.error('应用初始化失败:', error);
    }
});

// 备用初始化方法 - 如果 DOMContentLoaded 没有触发
if (document.readyState === 'loading') {
    console.log('DOM 仍在加载中，等待 DOMContentLoaded 事件...');
} else {
    console.log('DOM 已经加载完成，直接初始化...');
    if (typeof getTodayQuote !== 'undefined' && typeof quotesDatabase !== 'undefined') {
        try {
            window.wisdomApp = new DailyWisdomApp();
            addExtraFeatures();
            console.log('备用初始化成功');
        } catch (error) {
            console.error('备用初始化失败:', error);
        }
    }
}

// 添加额外功能
function addExtraFeatures() {
    // 双击名句卡片可以刷新
    const quoteCard = document.querySelector('.quote-card');
    if (quoteCard) {
        quoteCard.addEventListener('dblclick', () => {
            if (window.wisdomApp) {
                window.wisdomApp.refreshQuote();
            }
        });
    }

    // 添加键盘导航提示
    const helpText = document.createElement('div');
    helpText.innerHTML = '<small style="color: var(--text-secondary); margin-top: 10px;">💡 提示：按 R 键快速刷新，双击卡片也可以刷新</small>';
    
    const refreshBtn = document.getElementById('refresh-btn');
    if (refreshBtn && refreshBtn.parentNode) {
        refreshBtn.parentNode.appendChild(helpText);
    }

    // 添加页面可见性检测，当页面重新可见时更新日期
    document.addEventListener('visibilitychange', () => {
        if (!document.hidden && window.wisdomApp) {
            window.wisdomApp.updateCurrentDate();
        }
    });
}

// 错误处理
window.addEventListener('error', (event) => {
    console.error('页面错误:', event.error);
    if (window.wisdomApp) {
        window.wisdomApp.showError('页面出现错误，请刷新重试');
    }
});

// 未处理的Promise拒绝
window.addEventListener('unhandledrejection', (event) => {
    console.error('未处理的Promise拒绝:', event.reason);
    if (window.wisdomApp) {
        window.wisdomApp.showError('操作失败，请重试');
    }
});
