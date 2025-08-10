// AI聊天功能管理
class AIChatManager {
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.isTyping = false;
        this.apiKey = null;
        this.init();
    }

    // 初始化聊天管理器
    init() {
        this.setupEventListeners();
        this.loadApiKey();
        this.addWelcomeMessage();
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
        // 从localStorage加载API密钥
        this.apiKey = localStorage.getItem('deepseek_api_key');
        
        if (!this.apiKey) {
            this.showApiKeyPrompt();
        }
    }

    // 显示API密钥输入提示
    showApiKeyPrompt() {
        const prompt = document.createElement('div');
        prompt.className = 'api-key-prompt';
        prompt.innerHTML = `
            <div class="prompt-content">
                <h4>🔑 需要DeepSeek API密钥</h4>
                <p>请输入您的DeepSeek API密钥以启用AI聊天功能</p>
                <input type="password" id="api-key-input" placeholder="sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx">
                <div class="prompt-buttons">
                    <button id="save-api-key">保存</button>
                    <button id="skip-api-key">稍后设置</button>
                </div>
                <p class="prompt-note">
                    <a href="https://platform.deepseek.com/" target="_blank">获取API密钥</a> | 
                    <a href="#" id="how-to-get-key">如何获取？</a>
                </p>
            </div>
        `;

        // 添加样式
        Object.assign(prompt.style, {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'white',
            padding: '24px',
            borderRadius: '16px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            zIndex: '10001',
            maxWidth: '400px',
            width: '90%'
        });

        document.body.appendChild(prompt);

        // 绑定事件
        document.getElementById('save-api-key').addEventListener('click', () => {
            const input = document.getElementById('api-key-input');
            if (input.value.trim()) {
                this.apiKey = input.value.trim();
                localStorage.setItem('deepseek_api_key', this.apiKey);
                document.body.removeChild(prompt);
                this.showSuccessMessage('API密钥已保存');
            }
        });

        document.getElementById('skip-api-key').addEventListener('click', () => {
            document.body.removeChild(prompt);
        });

        document.getElementById('how-to-get-key').addEventListener('click', (e) => {
            e.preventDefault();
            this.showHowToGetKey();
        });
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
            this.openChat();
        }
    }

    // 打开聊天窗口
    openChat() {
        if (!this.apiKey) {
            this.showApiKeyPrompt();
            return;
        }

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

// 页面加载完成后初始化聊天管理器
document.addEventListener('DOMContentLoaded', () => {
    // 等待主应用初始化完成
    setTimeout(() => {
        window.chatManager = new AIChatManager();
    }, 1000);
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
