// 网站配置文件
// 您可以在这里修改各种设置，无需修改其他代码文件

const CONFIG = {
    // DeepSeek API配置
    deepseek: {
        // 在这里填入您的DeepSeek API密钥
        // 获取地址：https://platform.deepseek.com/
        apiKey: 'sk-4abd5d2f7767414f9e1d4eb2d3ad29ed',
        
        // 是否自动使用预配置的API密钥（设为true则跳过用户输入）
        usePreconfiguredKey: true,
        
        // 如果usePreconfiguredKey为false，是否在页面加载时显示API密钥输入提示
        showPromptOnLoad: false
    },
    
    // 网站基本设置
    site: {
        title: '每日智慧 - 中国古典文化名句',
        description: '每日一句中国古典文化名句，包含道家、佛家、儒家等经典智慧',
        author: '智慧网站团队'
    },
    
    // 功能开关
    features: {
        // 是否启用AI聊天功能
        enableAIChat: true,
        
        // 是否启用搜索功能
        enableSearch: true,
        
        // 是否启用分类筛选
        enableCategories: true,
        
        // 是否启用键盘快捷键
        enableKeyboardShortcuts: true
    },
    
    // 界面设置
    ui: {
        // 主题颜色（支持：'classic', 'modern', 'minimal'）
        theme: 'classic',
        
        // 是否启用动画效果
        enableAnimations: true,
        
        // 是否启用响应式设计
        enableResponsive: true
    }
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else {
    window.CONFIG = CONFIG;
}
