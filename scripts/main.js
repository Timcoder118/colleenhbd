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
        this.init();
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
            } else {
                this.showError(`未找到${category}分类的名句`);
            }
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
                this.currentQuote = getRandomQuote();
                this.updateQuoteDisplay();
                this.animateQuoteCard();
                this.showSuccessMessage('已更新名句');
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
