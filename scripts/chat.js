// AI聊天功能管理
class AIChatManager {
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.isTyping = false;
        this.apiKey = null;
        
        // 确保在构造函数中立即加载API密钥
        this.loadApiKey();
        
        this.init();
    }

    // 初始化聊天管理器
    init() {
        this.setupEventListeners();
        // 不再自动添加欢迎消息，等待用户主动使用
    }

    // 设置事件监听器
    setupEventListeners() {
        // 聊天触发按钮
        const chatTrigger = document.getElementById('chat-trigger');
        if (chatTrigger) {
            chatTrigger.addEventListener('click', () => this.toggleChat());
        }

        // 关闭聊天按钮
        const closeChat = document.getElementById('close-chat');
        if (closeChat) {
            closeChat.addEventListener('click', () => this.closeChat());
        }

        // 发送消息按钮
        const sendMessage = document.getElementById('send-message');
        if (sendMessage) {
            sendMessage.addEventListener('click', () => this.sendMessage());
        }

        // 输入框回车键
        const chatInput = document.getElementById('chat-input');
        if (chatInput) {
            chatInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    this.sendMessage();
                }
            });
        }

        // 点击外部关闭聊天窗口
        document.addEventListener('click', (e) => {
            if (this.isOpen && !e.target.closest('.chat-window') && !e.target.closest('.chat-trigger')) {
                this.closeChat();
            }
        });

        // ESC键关闭聊天
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.closeChat();
            }
        });
    }

    // 加载API密钥
    loadApiKey() {
        console.log('🔑 开始加载API密钥...');
        console.log('当前window.CONFIG状态:', {
            exists: !!window.CONFIG,
            deepseek: !!window.CONFIG?.deepseek,
            usePreconfiguredKey: window.CONFIG?.deepseek?.usePreconfiguredKey,
            hasApiKey: !!window.CONFIG?.deepseek?.apiKey
        });
        
        // 首先尝试从配置文件加载预配置的API密钥
        if (window.CONFIG && window.CONFIG.deepseek && window.CONFIG.deepseek.usePreconfiguredKey) {
            this.apiKey = window.CONFIG.deepseek.apiKey;
            console.log('✅ 使用预配置的API密钥');
            console.log('预配置密钥状态:', {
                usePreconfiguredKey: window.CONFIG.deepseek.usePreconfiguredKey,
                hasApiKey: !!this.apiKey,
                apiKeyLength: this.apiKey ? this.apiKey.length : 0,
                apiKeyPrefix: this.apiKey ? this.apiKey.substring(0, 10) + '...' : '无'
            });
        } else {
            console.log('ℹ️ 未启用预配置API密钥，从localStorage读取');
        }
        
        // 如果没有预配置的密钥，则从localStorage加载
        if (!this.apiKey) {
            this.apiKey = localStorage.getItem('deepseek_api_key');
            console.log('📦 从localStorage读取的API密钥:', this.apiKey ? '已存在' : '未找到');
            if (this.apiKey) {
                console.log('localStorage密钥长度:', this.apiKey.length);
            }
        }
        
        // 最终状态检查
        console.log('🔍 API密钥加载完成，最终状态:', {
            hasApiKey: !!this.apiKey,
            apiKeyLength: this.apiKey ? this.apiKey.length : 0,
            apiKeyPrefix: this.apiKey ? this.apiKey.substring(0, 10) + '...' : '无',
            source: this.apiKey === window.CONFIG?.deepseek?.apiKey ? '预配置' : 'localStorage'
        });
        
        // 如果配置了自动显示提示框且没有API密钥，则显示提示
        if (window.CONFIG && window.CONFIG.deepseek && window.CONFIG.deepseek.showPromptOnLoad && !this.apiKey) {
            console.log('📢 配置要求页面加载时显示API密钥提示');
            this.showApiKeyPrompt();
        } else {
            console.log('✅ API密钥加载完成，等待用户主动使用');
        }
        
        // 如果API密钥加载成功，检查并关闭可能已经显示的提示框
        if (this.apiKey) {
            console.log('🔍 检查并关闭可能已显示的API密钥提示框...');
            this.closeApiKeyPromptIfExists();
        }
    }
    
    // 关闭已存在的API密钥提示框
    closeApiKeyPromptIfExists() {
        console.log('🔍 开始强制关闭所有API密钥提示框...');
        
        // 方法1：通过类名查找
        let existingPrompts = document.querySelectorAll('.api-key-prompt');
        console.log(`找到 ${existingPrompts.length} 个通过类名匹配的提示框`);
        
        existingPrompts.forEach((prompt, index) => {
            console.log(`正在关闭第 ${index + 1} 个提示框...`);
            try {
                // 强制设置display为none
                prompt.style.display = 'none';
                prompt.style.visibility = 'hidden';
                prompt.style.opacity = '0';
                
                // 从DOM中移除
                if (prompt.parentNode) {
                    prompt.parentNode.removeChild(prompt);
                }
                console.log(`✅ 第 ${index + 1} 个提示框关闭成功`);
            } catch (error) {
                console.error(`❌ 第 ${index + 1} 个提示框关闭失败:`, error);
            }
        });
        
        // 方法2：通过文本内容查找
        const allDivs = document.querySelectorAll('div');
        let foundByText = 0;
        allDivs.forEach((div, index) => {
            if (div.textContent && div.textContent.includes('需要DeepSeek API密钥')) {
                console.log(`发现包含"需要DeepSeek API密钥"文本的第 ${index + 1} 个div元素`);
                foundByText++;
                try {
                    // 强制隐藏
                    div.style.display = 'none';
                    div.style.visibility = 'hidden';
                    div.style.opacity = '0';
                    
                    // 从DOM中移除
                    if (div.parentNode) {
                        div.parentNode.removeChild(div);
                        console.log(`✅ 通过文本内容找到的提示框已关闭`);
                    }
                } catch (error) {
                    console.error(`❌ 通过文本内容找到的提示框关闭失败:`, error);
                }
            }
        });
        
        // 方法3：通过样式特征查找（固定定位、高z-index的元素）
        const fixedElements = document.querySelectorAll('div[style*="position: fixed"]');
        console.log(`找到 ${fixedElements.length} 个固定定位的元素`);
        
        fixedElements.forEach((element, index) => {
            const style = window.getComputedStyle(element);
            if (style.zIndex && parseInt(style.zIndex) > 10000) {
                console.log(`发现高z-index的固定定位元素，可能是提示框`);
                try {
                    // 强制隐藏
                    element.style.display = 'none';
                    element.style.visibility = 'hidden';
                    element.style.opacity = '0';
                    
                    // 从DOM中移除
                    if (element.parentNode) {
                        element.parentNode.removeChild(element);
                        console.log(`✅ 高z-index固定定位元素已关闭`);
                    }
                } catch (error) {
                    console.error(`❌ 高z-index固定定位元素关闭失败:`, error);
                }
            }
        });
        
        console.log('🔍 强制关闭操作完成');
        
        // 延迟检查：1秒后再次检查是否还有提示框
        setTimeout(() => {
            console.log('🔄 延迟检查：1秒后再次检查提示框状态...');
            const remainingPrompts = document.querySelectorAll('.api-key-prompt');
            const remainingByText = Array.from(document.querySelectorAll('div')).filter(div => 
                div.textContent && div.textContent.includes('需要DeepSeek API密钥')
            );
            
            if (remainingPrompts.length > 0 || remainingByText.length > 0) {
                console.log(`⚠️ 发现仍有 ${remainingPrompts.length} 个类名匹配的提示框和 ${remainingByText.length} 个文本匹配的提示框`);
                console.log('🔄 再次尝试关闭...');
                this.closeApiKeyPromptIfExists();
            } else {
                console.log('✅ 延迟检查完成，所有提示框已成功关闭');
            }
        }, 1000);
    }

    // 显示API密钥输入提示
    showApiKeyPrompt() {
        // 全局阻止提示框显示
        if (window.CONFIG && window.CONFIG.deepseek && window.CONFIG.deepseek.usePreconfiguredKey && window.CONFIG.deepseek.apiKey) {
            console.log('🚫 阻止显示API密钥提示：已配置预配置密钥');
            return;
        }
        
        console.log('📢 显示API密钥输入提示...');
        
        // 检查是否已经存在提示框
        if (document.querySelector('.api-key-prompt')) {
            console.log('⚠️ API密钥提示框已存在，跳过创建');
            return;
        }
        
        // 创建提示框
        const prompt = document.createElement('div');
        prompt.className = 'api-key-prompt';
        prompt.innerHTML = `
            <div class="prompt-content">
                <div class="prompt-header">
                    <span class="key-icon">🔑</span>
                    <h3>需要DeepSeek API密钥</h3>
                </div>
                <p>请输入您的DeepSeek API密钥以启用AI聊天功能</p>
                <input type="text" id="api-key-input" placeholder="sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" value="">
                <div class="prompt-buttons">
                    <button id="save-api-key">保存</button>
                    <button id="set-later">稍后设置</button>
                </div>
                <div class="prompt-links">
                    <a href="https://platform.deepseek.com/" target="_blank">获取API密钥</a>
                    <a href="#" id="how-to-get">如何获取?</a>
                </div>
            </div>
        `;
        
        // 添加样式
        prompt.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
        `;
        
        document.body.appendChild(prompt);
        
        // 绑定事件
        const saveButton = prompt.querySelector('#save-api-key');
        const setLaterButton = prompt.querySelector('#set-later');
        const input = prompt.querySelector('#api-key-input');
        const howToGetLink = prompt.querySelector('#how-to-get');
        
        saveButton.addEventListener('click', () => {
            const key = input.value.trim();
            if (key && key.startsWith('sk-')) {
                this.apiKey = key;
                localStorage.setItem('deepseek_api_key', key);
                this.closeApiKeyPromptIfExists();
                this.showSuccessMessage('API密钥保存成功！');
                console.log('✅ API密钥已保存');
            } else {
                alert('请输入有效的DeepSeek API密钥（以sk-开头）');
            }
        });
        
        setLaterButton.addEventListener('click', () => {
            this.closeApiKeyPromptIfExists();
            console.log('⏰ 用户选择稍后设置API密钥');
        });
        
        howToGetLink.addEventListener('click', (e) => {
            e.preventDefault();
            this.showHowToGetKey();
        });
        
        // 点击背景关闭
        prompt.addEventListener('click', (e) => {
            if (e.target === prompt) {
                this.closeApiKeyPromptIfExists();
            }
        });
        
        // ESC键关闭
        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                this.closeApiKeyPromptIfExists();
                document.removeEventListener('keydown', handleEsc);
            }
        };
        document.addEventListener('keydown', handleEsc);
        
        // 聚焦输入框
        setTimeout(() => input.focus(), 100);
    }

    // 显示如何获取API密钥的说明
    showHowToGetKey() {
        const modal = document.createElement('div');
        modal.className = 'api-key-help';
        modal.innerHTML = `
            <div class="help-content">
                <h4>📋 如何获取DeepSeek API密钥</h4>
                <ol>
                    <li>访问 <a href="https://platform.deepseek.com/" target="_blank">DeepSeek平台</a></li>
                    <li>注册或登录您的账户</li>
                    <li>进入API管理页面</li>
                    <li>创建新的API密钥</li>
                    <li>复制密钥（以sk-开头）</li>
                    <li>粘贴到上面的输入框中</li>
                </ol>
                <button onclick="this.parentElement.parentElement.remove()">知道了</button>
            </div>
        `;

        Object.assign(modal.style, {
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: '10002'
        });

        document.body.appendChild(modal);
    }

    // 切换聊天窗口
    toggleChat() {
        if (this.isOpen) {
            this.closeChat();
        } else {
            // 检查API密钥，如果没有则显示提示
            if (!this.apiKey) {
                console.log('⚠️ 用户点击AI助手，但未设置API密钥');
                console.log('当前API密钥状态:', {
                    hasApiKey: !!this.apiKey,
                    apiKeyValue: this.apiKey ? this.apiKey.substring(0, 10) + '...' : 'null'
                });
                
                // 尝试重新加载API密钥
                console.log('🔄 尝试重新加载API密钥...');
                this.loadApiKey();
                
                // 重新检查
                if (this.apiKey) {
                    console.log('✅ 重新加载成功，打开聊天窗口');
                    this.openChat();
                    return;
                }
                
                console.log('❌ 重新加载失败，显示API密钥提示');
                this.showApiKeyPrompt();
                return;
            }
            this.openChat();
        }
    }

    // 打开聊天窗口
    openChat() {
        this.isOpen = true;
        const chatWindow = document.getElementById('chat-window');
        if (chatWindow) {
            chatWindow.classList.add('active');
        }

        // 聚焦输入框
        const chatInput = document.getElementById('chat-input');
        if (chatInput) {
            setTimeout(() => chatInput.focus(), 300);
        }
    }

    // 关闭聊天窗口
    closeChat() {
        this.isOpen = false;
        const chatWindow = document.getElementById('chat-window');
        if (chatWindow) {
            chatWindow.classList.remove('active');
        }
    }

    // 发送消息
    async sendMessage() {
        const chatInput = document.getElementById('chat-input');
        if (!chatInput || !chatInput.value.trim()) return;

        const message = chatInput.value.trim();
        chatInput.value = '';

        // 添加用户消息
        this.addMessage(message, 'user');

        // 检查API密钥
        if (!this.apiKey) {
            this.addMessage('请先设置DeepSeek API密钥才能使用AI聊天功能。', 'ai');
            return;
        }

        // 显示AI正在输入
        this.showTypingIndicator();

        try {
            // 调用AI API
            const response = await this.callDeepSeekAPI(message);
            this.hideTypingIndicator();
            this.addMessage(response, 'ai');
        } catch (error) {
            console.error('AI响应失败:', error);
            this.hideTypingIndicator();
            this.addMessage('抱歉，我遇到了一些问题。请检查您的API密钥是否正确，或者稍后重试。', 'ai');
        }
    }

    // 调用DeepSeek API
    async callDeepSeekAPI(userMessage) {
        if (!this.apiKey) {
            throw new Error('API密钥未设置');
        }

        // 获取当前名句信息
        const currentQuote = window.wisdomApp ? window.wisdomApp.getCurrentQuoteInfo() : null;
        
        // 构建系统提示
        let systemPrompt = "你是一位精通中国古典文化的AI助手，专门帮助用户理解道家、佛家、儒家等经典著作的智慧。请用简洁、易懂的语言回答用户的问题。";
        
        if (currentQuote) {
            systemPrompt += `\n\n今日名句：${currentQuote.text}\n来源：${currentQuote.source}\n解读：${currentQuote.interpretation}\n\n请基于这个名句来回答用户的问题，帮助用户更深入地理解其中的智慧。`;
        }

        const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.apiKey}`
            },
            body: JSON.stringify({
                model: 'deepseek-chat',
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: userMessage }
                ],
                max_tokens: 1000,
                temperature: 0.7
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`API请求失败: ${errorData.error?.message || response.statusText}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;
    }

    // 添加消息到聊天界面
    addMessage(content, type) {
        const message = {
            id: Date.now(),
            content,
            type,
            timestamp: new Date()
        };

        this.messages.push(message);
        this.displayMessage(message);
        this.scrollToBottom();
    }

    // 显示消息
    displayMessage(message) {
        const chatMessages = document.getElementById('chat-messages');
        if (!chatMessages) return;

        const messageElement = document.createElement('div');
        messageElement.className = `message ${message.type}`;
        messageElement.innerHTML = `
            <div class="message-avatar">${message.type === 'user' ? '我' : 'AI'}</div>
            <div class="message-content">${this.escapeHtml(message.content)}</div>
        `;

        chatMessages.appendChild(messageElement);
    }

    // 显示正在输入指示器
    showTypingIndicator() {
        this.isTyping = true;
        const chatMessages = document.getElementById('chat-messages');
        if (!chatMessages) return;

        const typingElement = document.createElement('div');
        typingElement.className = 'message ai typing-indicator-container';
        typingElement.innerHTML = `
            <div class="message-avatar">AI</div>
            <div class="typing-indicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        `;

        chatMessages.appendChild(typingElement);
        this.scrollToBottom();
    }

    // 隐藏正在输入指示器
    hideTypingIndicator() {
        this.isTyping = false;
        const typingIndicator = document.querySelector('.typing-indicator-container');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    // 滚动到底部
    scrollToBottom() {
        const chatMessages = document.getElementById('chat-messages');
        if (chatMessages) {
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    }

    // 添加欢迎消息
    addWelcomeMessage() {
        const currentQuote = window.wisdomApp ? window.wisdomApp.getCurrentQuoteInfo() : null;
        
        if (currentQuote) {
            const welcomeMessage = `你好！我是你的AI智慧助手。今天我们来聊聊这句经典名句：\n\n"${currentQuote.text}"\n\n来自${currentQuote.source}。\n\n你有什么想了解的吗？我可以帮你：\n• 深入解读这句话的含义\n• 联系现代生活实际\n• 探讨相关的哲学思想\n• 回答你的其他问题`;
            
            this.addMessage(welcomeMessage, 'ai');
        } else {
            this.addMessage('你好！我是你的AI智慧助手，很高兴为你服务。请问有什么可以帮助你的吗？', 'ai');
        }
    }

    // 转义HTML字符
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // 显示成功消息
    showSuccessMessage(message) {
        if (window.wisdomApp && window.wisdomApp.showSuccessMessage) {
            window.wisdomApp.showSuccessMessage(message);
        } else {
            console.log('成功:', message);
        }
    }

    // 清空聊天记录
    clearChat() {
        this.messages = [];
        const chatMessages = document.getElementById('chat-messages');
        if (chatMessages) {
            chatMessages.innerHTML = '';
        }
        this.addWelcomeMessage();
    }

    // 导出聊天记录
    exportChat() {
        if (this.messages.length === 0) return;

        const chatText = this.messages.map(msg => {
            const time = msg.timestamp.toLocaleString('zh-CN');
            return `[${time}] ${msg.type === 'user' ? '我' : 'AI'}: ${msg.content}`;
        }).join('\n\n');

        const blob = new Blob([chatText], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `AI聊天记录_${new Date().toISOString().split('T')[0]}.txt`;
        a.click();
        URL.revokeObjectURL(url);
    }
}

// 等待配置文件和主应用完全加载完成
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM加载完成，准备初始化聊天管理器...');
    console.log('初始window.CONFIG状态:', {
        exists: !!window.CONFIG,
        deepseek: !!window.CONFIG?.deepseek,
        usePreconfiguredKey: window.CONFIG?.deepseek?.usePreconfiguredKey,
        hasApiKey: !!window.CONFIG?.deepseek?.apiKey
    });

    // 全局提示框清理函数
    const globalCleanupPrompts = () => {
        console.log('🧹 全局清理：开始清理所有API密钥提示框...');
        
        // 查找所有可能的提示框
        const allPrompts = [
            ...document.querySelectorAll('.api-key-prompt'),
            ...Array.from(document.querySelectorAll('div')).filter(div => 
                div.textContent && div.textContent.includes('需要DeepSeek API密钥')
            ),
            ...Array.from(document.querySelectorAll('div[style*="position: fixed"]')).filter(div => {
                const style = window.getComputedStyle(div);
                return style.zIndex && parseInt(style.zIndex) > 10000;
            })
        ];
        
        console.log(`🧹 全局清理：找到 ${allPrompts.length} 个可能的提示框`);
        
        allPrompts.forEach((prompt, index) => {
            try {
                // 强制隐藏
                prompt.style.display = 'none';
                prompt.style.visibility = 'hidden';
                prompt.style.opacity = '0';
                prompt.style.pointerEvents = 'none';
                
                // 从DOM中移除
                if (prompt.parentNode) {
                    prompt.parentNode.removeChild(prompt);
                }
                console.log(`🧹 全局清理：第 ${index + 1} 个提示框已清理`);
            } catch (error) {
                console.error(`🧹 全局清理：第 ${index + 1} 个提示框清理失败:`, error);
            }
        });
        
        console.log('🧹 全局清理：完成');
    };

    const initChatManager = () => {
        // 检查配置文件是否已加载
        if (window.CONFIG && window.CONFIG.deepseek) {
            console.log('✅ 配置文件已加载，开始初始化聊天管理器');
            console.log('配置信息:', {
                usePreconfiguredKey: window.CONFIG.deepseek.usePreconfiguredKey,
                hasApiKey: !!window.CONFIG.deepseek.apiKey,
                apiKeyPrefix: window.CONFIG.deepseek.apiKey ? window.CONFIG.deepseek.apiKey.substring(0, 10) + '...' : '无'
            });
            
            try {
                window.chatManager = new AIChatManager();
                console.log('✅ 聊天管理器初始化成功');
                
                // 验证API密钥是否正确加载
                setTimeout(() => {
                    if (window.chatManager && window.chatManager.apiKey) {
                        console.log('✅ API密钥加载成功:', window.chatManager.apiKey.substring(0, 10) + '...');
                        // API密钥加载成功后，立即全局清理提示框
                        globalCleanupPrompts();
                    } else {
                        console.warn('⚠️ API密钥未正确加载');
                        // 尝试强制重新加载
                        console.log('🔄 强制重新加载API密钥...');
                        window.chatManager.loadApiKey();
                    }
                }, 200);
                
            } catch (error) {
                console.error('❌ 聊天管理器初始化失败:', error);
            }
        } else {
            console.log('⏳ 配置文件未加载，等待中...');
            // 如果配置文件还没加载，继续等待
            setTimeout(initChatManager, 100);
        }
    };
    
    // 延迟初始化，确保配置文件加载完成
    setTimeout(initChatManager, 100);
    
    // 备用初始化：如果2秒后仍未初始化成功，强制初始化
    setTimeout(() => {
        if (!window.chatManager) {
            console.warn('⚠️ 备用初始化：强制创建聊天管理器');
            try {
                window.chatManager = new AIChatManager();
                console.log('✅ 备用初始化成功');
                // 备用初始化成功后也清理提示框
                globalCleanupPrompts();
            } catch (error) {
                console.error('❌ 备用初始化失败:', error);
            }
        }
    }, 2000);
    
    // 额外的清理：页面加载完成后3秒再次清理
    setTimeout(() => {
        console.log('🕒 延迟清理：3秒后再次清理提示框...');
        globalCleanupPrompts();
    }, 3000);
});

// 添加聊天相关的快捷键
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + / 打开聊天
    if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        e.preventDefault();
        if (window.chatManager) {
            window.chatManager.openChat();
        }
    }
});

// 添加聊天窗口的拖拽功能
document.addEventListener('DOMContentLoaded', () => {
    const chatWindow = document.getElementById('chat-window');
    const chatHeader = document.querySelector('.chat-header');
    
    if (chatWindow && chatHeader) {
        let isDragging = false;
        let startX, startY, startLeft, startTop;

        chatHeader.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            startLeft = parseInt(chatWindow.style.left) || 0;
            startTop = parseInt(chatWindow.style.top) || 0;
            
            chatHeader.style.cursor = 'grabbing';
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            
            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;
            
            chatWindow.style.left = `${startLeft + deltaX}px`;
            chatWindow.style.top = `${startTop + deltaY}px`;
        });

        document.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                chatHeader.style.cursor = 'grab';
            }
        });
    }
});
