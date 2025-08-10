// 配置文件 - 每日经典智慧网站
// 请根据您的需求修改以下配置

const CONFIG = {
    // DeepSeek API 配置
    DEEPSEEK: {
        // API 基础URL
        BASE_URL: 'https://api.deepseek.com/v1',
        
        // 默认模型
        DEFAULT_MODEL: 'deepseek-chat',
        
        // 最大token数
        MAX_TOKENS: 1000,
        
        // 温度参数 (0.0 - 1.0)
        TEMPERATURE: 0.7,
        
        // 获取API密钥的链接
        API_KEY_URL: 'https://platform.deepseek.com/',
        
        // API密钥存储键名
        STORAGE_KEY: 'deepseek_api_key'
    },

    // 网站配置
    SITE: {
        // 网站标题
        TITLE: '每日经典智慧',
        
        // 网站描述
        DESCRIPTION: '传承千年智慧，点亮今日人生',
        
        // 作者信息
        AUTHOR: '智慧传承者',
        
        // 版本号
        VERSION: '1.0.0'
    },

    // 名句配置
    QUOTES: {
        // 每日更新时间 (小时，24小时制)
        DAILY_UPDATE_HOUR: 0,
        
        // 是否允许手动刷新
        ALLOW_MANUAL_REFRESH: true,
        
        // 刷新按钮显示文本
        REFRESH_BUTTON_TEXT: '换一句',
        
        // 是否显示分类标签
        SHOW_CATEGORIES: true
    },

    // 聊天配置
    CHAT: {
        // 聊天窗口默认位置
        DEFAULT_POSITION: {
            bottom: '100px',
            right: '30px'
        },
        
        // 聊天窗口大小
        WINDOW_SIZE: {
            width: '350px',
            height: '500px'
        },
        
        // 是否启用拖拽功能
        ENABLE_DRAG: true,
        
        // 是否保存聊天记录
        SAVE_HISTORY: true,
        
        // 聊天记录最大条数
        MAX_HISTORY: 100
    },

    // 主题配置
    THEME: {
        // 默认主题
        DEFAULT: 'light',
        
        // 支持的主题
        AVAILABLE: ['light', 'dark', 'auto'],
        
        // 是否跟随系统主题
        FOLLOW_SYSTEM: true
    },

    // 功能开关
    FEATURES: {
        // 是否启用分享功能
        SHARE: true,
        
        // 是否启用复制功能
        COPY: true,
        
        // 是否启用键盘快捷键
        KEYBOARD_SHORTCUTS: true,
        
        // 是否启用动画效果
        ANIMATIONS: true,
        
        // 是否启用响应式设计
        RESPONSIVE: true
    },

    // 快捷键配置
    SHORTCUTS: {
        // 刷新名句
        REFRESH_QUOTE: 'r',
        
        // 打开聊天
        OPEN_CHAT: '/',
        
        // 关闭聊天
        CLOSE_CHAT: 'Escape',
        
        // 搜索
        SEARCH: 'f'
    },

    // 错误处理配置
    ERROR_HANDLING: {
        // 是否显示详细错误信息
        SHOW_DETAILED_ERRORS: false,
        
        // 错误重试次数
        MAX_RETRIES: 3,
        
        // 错误重试延迟 (毫秒)
        RETRY_DELAY: 1000
    },

    // 性能配置
    PERFORMANCE: {
        // 是否启用懒加载
        LAZY_LOADING: true,
        
        // 是否启用缓存
        CACHING: true,
        
        // 缓存过期时间 (毫秒)
        CACHE_EXPIRY: 24 * 60 * 60 * 1000, // 24小时
        
        // 是否启用预加载
        PRELOADING: false
    }
};

// 配置验证函数
function validateConfig() {
    const errors = [];
    
    // 检查必要的配置项
    if (!CONFIG.DEEPSEEK.BASE_URL) {
        errors.push('DeepSeek API 基础URL未配置');
    }
    
    if (!CONFIG.DEEPSEEK.DEFAULT_MODEL) {
        errors.push('DeepSeek 默认模型未配置');
    }
    
    // 检查数值范围
    if (CONFIG.QUOTES.DAILY_UPDATE_HOUR < 0 || CONFIG.QUOTES.DAILY_UPDATE_HOUR > 23) {
        errors.push('每日更新时间必须在0-23之间');
    }
    
    if (CONFIG.DEEPSEEK.TEMPERATURE < 0 || CONFIG.DEEPSEEK.TEMPERATURE > 1) {
        errors.push('温度参数必须在0-1之间');
    }
    
    if (CONFIG.CHAT.MAX_HISTORY < 1) {
        errors.push('聊天记录最大条数必须大于0');
    }
    
    return errors;
}

// 获取配置值
function getConfig(path) {
    return path.split('.').reduce((obj, key) => obj && obj[key], CONFIG);
}

// 设置配置值
function setConfig(path, value) {
    const keys = path.split('.');
    const lastKey = keys.pop();
    const target = keys.reduce((obj, key) => obj[key], CONFIG);
    if (target && target.hasOwnProperty(lastKey)) {
        target[lastKey] = value;
        return true;
    }
    return false;
}

// 重置配置到默认值
function resetConfig() {
    // 这里可以添加重置逻辑
    console.log('配置已重置到默认值');
}

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        CONFIG,
        validateConfig,
        getConfig,
        setConfig,
        resetConfig
    };
}

// 在浏览器环境中，将配置添加到全局对象
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
    window.getConfig = getConfig;
    window.setConfig = setConfig;
    window.resetConfig = resetConfig;
    
    // 配置验证
    const configErrors = validateConfig();
    if (configErrors.length > 0) {
        console.warn('配置验证警告:', configErrors);
    }
}
