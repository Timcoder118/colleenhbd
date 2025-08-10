// 融合传统国画山水与现代卡通元素的配图系统
// 为每条经典名句创建独特的视觉表达

// 配图生成器主函数
function createIllustration(category, title, text) {
    switch(category) {
        case "道家":
            return createTaoistIllustration(title, text);
        case "佛家":
            return createBuddhistIllustration(title, text);
        case "儒家":
            return createConfucianIllustration(title, text);
        case "处世":
            return createLifeIllustration(title, text);
        case "学习":
            return createStudyIllustration(title, text);
        case "唐诗宋词":
            return createPoetryIllustration(title, text);
        default:
            return createDefaultIllustration(title, text);
    }
}

// 道家配图 - 太极与山水
function createTaoistIllustration(title, text) {
    return `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
            </linearGradient>
            <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#87CEEB;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#E6E6FA;stop-opacity:1" />
            </linearGradient>
        </defs>
        
        <!-- 背景天空 -->
        <rect width="200" height="150" fill="url(#skyGrad)"/>
        
        <!-- 远山 -->
        <path d="M0 100 Q50 80 100 100 Q150 70 200 100 L200 150 L0 150 Z" fill="url(#mountainGrad)" opacity="0.6"/>
        
        <!-- 太极图 -->
        <circle cx="100" cy="75" r="25" fill="none" stroke="#000" stroke-width="2"/>
        <circle cx="100" cy="62.5" r="8" fill="#000"/>
        <circle cx="100" cy="87.5" r="8" fill="#fff"/>
        <path d="M100 50 Q125 75 100 100 Q75 75 100 50" fill="#000"/>
        <path d="M100 50 Q75 75 100 100 Q125 75 100 50" fill="#fff"/>
        
        <!-- 可爱的小道士角色 -->
        <circle cx="160" cy="120" r="15" fill="#FFE4B5"/>
        <circle cx="158" cy="118" r="3" fill="#000"/>
        <circle cx="162" cy="118" r="3" fill="#000"/>
        <path d="M158 125 Q160 128 162 125" fill="none" stroke="#000" stroke-width="1"/>
        <rect x="155" y="135" width="10" height="15" fill="#8B4513" rx="2"/>
        <circle cx="160" cy="110" r="8" fill="#8B4513"/>
        
        <!-- 标题 -->
        <text x="100" y="20" text-anchor="middle" font-family="楷体" font-size="12" fill="#8B4513">${title}</text>
        <text x="100" y="35" text-anchor="middle" font-family="楷体" font-size="8" fill="#654321">${text}</text>
    </svg>`;
}

// 佛家配图 - 莲花与禅意
function createBuddhistIllustration(title, text) {
    return `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="lotusGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#FFB6C1;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#FF69B4;stop-opacity:1" />
            </linearGradient>
            <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#87CEEB;stop-opacity:0.6" />
                <stop offset="100%" style="stop-color:#4682B4;stop-opacity:0.8" />
            </linearGradient>
        </defs>
        
        <!-- 背景 -->
        <rect width="200" height="150" fill="#F0F8FF"/>
        
        <!-- 水面 -->
        <ellipse cx="100" cy="140" rx="80" ry="20" fill="url(#waterGrad)"/>
        
        <!-- 莲花 -->
        <g transform="translate(100, 100)">
            <!-- 花瓣 -->
            <ellipse cx="0" cy="-15" rx="8" ry="20" fill="url(#lotusGrad)" transform="rotate(0)"/>
            <ellipse cx="0" cy="-15" rx="8" ry="20" fill="url(#lotusGrad)" transform="rotate(45)"/>
            <ellipse cx="0" cy="-15" rx="8" ry="20" fill="url(#lotusGrad)" transform="rotate(90)"/>
            <ellipse cx="0" cy="-15" rx="8" ry="20" fill="url(#lotusGrad)" transform="rotate(135)"/>
            <ellipse cx="0" cy="-15" rx="8" ry="20" fill="url(#lotusGrad)" transform="rotate(180)"/>
            <ellipse cx="0" cy="-15" rx="8" ry="20" fill="url(#lotusGrad)" transform="rotate(225)"/>
            <ellipse cx="0" cy="-15" rx="8" ry="20" fill="url(#lotusGrad)" transform="rotate(270)"/>
            <ellipse cx="0" cy="-15" rx="8" ry="20" fill="url(#lotusGrad)" transform="rotate(315)"/>
            
            <!-- 花心 -->
            <circle cx="0" cy="0" r="8" fill="#FFD700"/>
        </g>
        
        <!-- 可爱的小和尚角色 -->
        <circle cx="160" cy="80" r="12" fill="#FFE4B5"/>
        <circle cx="158" cy="78" r="2" fill="#000"/>
        <circle cx="162" cy="78" r="2" fill="#000"/>
        <path d="M158 85 Q160 88 162 85" fill="none" stroke="#000" stroke-width="1"/>
        <circle cx="160" cy="70" r="6" fill="#8B4513"/>
        
        <!-- 标题 -->
        <text x="100" y="20" text-anchor="middle" font-family="楷体" font-size="12" fill="#8B4513">${title}</text>
        <text x="100" y="35" text-anchor="middle" font-family="楷体" font-size="8" fill="#654321">${text}</text>
    </svg>`;
}

// 儒家配图 - 书卷与山水
function createConfucianIllustration(title, text) {
    return `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="bookGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#DEB887;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#D2B48C;stop-opacity:1" />
            </linearGradient>
        </defs>
        
        <!-- 背景 -->
        <rect width="200" height="150" fill="#F5F5DC"/>
        
        <!-- 书卷 -->
        <rect x="80" y="60" width="40" height="50" fill="url(#bookGrad)" rx="3"/>
        <rect x="82" y="62" width="36" height="46" fill="#FFF8DC" rx="2"/>
        
        <!-- 书页线条 -->
        <line x1="85" y1="70" x2="115" y2="70" stroke="#8B4513" stroke-width="1"/>
        <line x1="85" y1="75" x2="115" y2="75" stroke="#8B4513" stroke-width="1"/>
        <line x1="85" y1="80" x2="115" y2="80" stroke="#8B4513" stroke-width="1"/>
        <line x1="85" y1="85" x2="115" y2="85" stroke="#8B4513" stroke-width="1"/>
        <line x1="85" y1="90" x2="115" y2="90" stroke="#8B4513" stroke-width="1"/>
        <line x1="85" y1="95" x2="115" y2="95" stroke="#8B4513" stroke-width="1"/>
        
        <!-- 远山 -->
        <path d="M0 120 Q50 100 100 120 Q150 90 200 120 L200 150 L0 150 Z" fill="#8B4513" opacity="0.4"/>
        
        <!-- 可爱的小学者角色 -->
        <circle cx="160" cy="100" r="15" fill="#FFE4B5"/>
        <circle cx="158" cy="98" r="3" fill="#000"/>
        <circle cx="162" cy="98" r="3" fill="#000"/>
        <path d="M158 105 Q160 108 162 105" fill="none" stroke="#000" stroke-width="1"/>
        <rect x="155" y="115" width="10" height="15" fill="#8B4513" rx="2"/>
        <circle cx="160" cy="90" r="8" fill="#8B4513"/>
        
        <!-- 标题 -->
        <text x="100" y="20" text-anchor="middle" font-family="楷体" font-size="12" fill="#8B4513">${title}</text>
        <text x="100" y="35" text-anchor="middle" font-family="楷体" font-size="8" fill="#654321">${text}</text>
    </svg>`;
}

// 处世配图 - 云朵与山水
function createLifeIllustration(title, text) {
    return `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#F0F8FF;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#E6E6FA;stop-opacity:1" />
            </linearGradient>
        </defs>
        
        <!-- 背景天空 -->
        <rect width="200" height="150" fill="#87CEEB"/>
        
        <!-- 云朵 -->
        <ellipse cx="60" cy="40" rx="25" ry="15" fill="url(#cloudGrad)"/>
        <ellipse cx="80" cy="35" rx="20" ry="12" fill="url(#cloudGrad)"/>
        <ellipse cx="100" cy="40" rx="22" ry="14" fill="url(#cloudGrad)"/>
        
        <ellipse cx="140" cy="50" rx="20" ry="12" fill="url(#cloudGrad)"/>
        <ellipse cx="160" cy="45" rx="18" ry="10" fill="url(#cloudGrad)"/>
        <ellipse cx="180" cy="50" rx="15" ry="8" fill="url(#cloudGrad)"/>
        
        <!-- 远山 -->
        <path d="M0 100 Q50 80 100 100 Q150 70 200 100 L200 150 L0 150 Z" fill="#8B4513" opacity="0.5"/>
        
        <!-- 可爱的小云朵角色 -->
        <circle cx="160" cy="120" r="12" fill="#F0F8FF"/>
        <circle cx="158" cy="118" r="2" fill="#000"/>
        <circle cx="162" cy="118" r="2" fill="#000"/>
        <path d="M158 125 Q160 128 162 125" fill="none" stroke="#000" stroke-width="1"/>
        
        <!-- 标题 -->
        <text x="100" y="20" text-anchor="middle" font-family="楷体" font-size="12" fill="#8B4513">${title}</text>
        <text x="100" y="35" text-anchor="middle" font-family="楷体" font-size="8" fill="#654321">${text}</text>
    </svg>`;
}

// 学习配图 - 书山与知识
function createStudyIllustration(title, text) {
    return `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
            </linearGradient>
        </defs>
        
        <!-- 背景 -->
        <rect width="200" height="150" fill="#F0F8FF"/>
        
        <!-- 书山 -->
        <path d="M20 120 Q60 100 100 120 Q140 80 180 120 L180 150 L20 150 Z" fill="url(#mountainGrad)"/>
        
        <!-- 书本 -->
        <rect x="40" y="110" width="15" height="20" fill="#DEB887" rx="2"/>
        <rect x="60" y="105" width="15" height="20" fill="#D2B48C" rx="2"/>
        <rect x="80" y="100" width="15" height="20" fill="#DEB887" rx="2"/>
        <rect x="100" y="95" width="15" height="20" fill="#D2B48C" rx="2"/>
        <rect x="120" y="90" width="15" height="20" fill="#DEB887" rx="2"/>
        <rect x="140" y="85" width="15" height="20" fill="#D2B48C" rx="2"/>
        
        <!-- 可爱的小学生角色 -->
        <circle cx="160" cy="80" r="15" fill="#FFE4B5"/>
        <circle cx="158" cy="78" r="3" fill="#000"/>
        <circle cx="162" cy="78" r="3" fill="#000"/>
        <path d="M158 85 Q160 88 162 85" fill="none" stroke="#000" stroke-width="1"/>
        <rect x="155" y="95" width="10" height="15" fill="#4169E1" rx="2"/>
        <circle cx="160" cy="70" r="8" fill="#4169E1"/>
        
        <!-- 标题 -->
        <text x="100" y="20" text-anchor="middle" font-family="楷体" font-size="12" fill="#8B4513">${title}</text>
        <text x="100" y="35" text-anchor="middle" font-family="楷体" font-size="8" fill="#654321">${text}</text>
    </svg>`;
}

// 诗词配图 - 诗意与意境
function createPoetryIllustration(title, text) {
    return `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="moonGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#FFA500;stop-opacity:1" />
            </linearGradient>
        </defs>
        
        <!-- 背景夜空 -->
        <rect width="200" height="150" fill="#191970"/>
        
        <!-- 月亮 -->
        <circle cx="160" cy="40" r="20" fill="url(#moonGrad)"/>
        
        <!-- 星星 -->
        <circle cx="40" cy="30" r="2" fill="#FFD700"/>
        <circle cx="80" cy="50" r="1.5" fill="#FFD700"/>
        <circle cx="120" cy="25" r="1" fill="#FFD700"/>
        <circle cx="60" cy="80" r="1.5" fill="#FFD700"/>
        
        <!-- 远山剪影 -->
        <path d="M0 120 Q50 100 100 120 Q150 90 200 120 L200 150 L0 150 Z" fill="#000" opacity="0.7"/>
        
        <!-- 可爱的小诗人角色 -->
        <circle cx="160" cy="120" r="15" fill="#FFE4B5"/>
        <circle cx="158" cy="118" r="3" fill="#000"/>
        <circle cx="162" cy="118" r="3" fill="#000"/>
        <path d="M158 125 Q160 128 162 125" fill="none" stroke="#000" stroke-width="1"/>
        <rect x="155" y="135" width="10" height="15" fill="#8B0000" rx="2"/>
        <circle cx="160" cy="110" r="8" fill="#8B0000"/>
        
        <!-- 标题 -->
        <text x="100" y="20" text-anchor="middle" font-family="楷体" font-size="12" fill="#FFD700">${title}</text>
        <text x="100" y="35" text-anchor="middle" font-family="楷体" font-size="8" fill="#FFA500">${text}</text>
    </svg>`;
}

// 默认配图
function createDefaultIllustration(title, text) {
    return `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="bgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#F0F8FF;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#E6E6FA;stop-opacity:1" />
            </linearGradient>
        </defs>
        
        <!-- 背景 -->
        <rect width="200" height="150" fill="url(#bgGrad)"/>
        
        <!-- 装饰性边框 -->
        <rect x="20" y="20" width="160" height="110" fill="none" stroke="#8B4513" stroke-width="2" rx="10"/>
        
        <!-- 可爱的小角色 -->
        <circle cx="100" cy="80" r="20" fill="#FFE4B5"/>
        <circle cx="95" cy="75" r="3" fill="#000"/>
        <circle cx="105" cy="75" r="3" fill="#000"/>
        <path d="M95 85 Q100 90 105 85" fill="none" stroke="#000" stroke-width="1"/>
        
        <!-- 标题 -->
        <text x="100" y="25" text-anchor="middle" font-family="楷体" font-size="14" fill="#8B4513">${title}</text>
        <text x="100" y="140" text-anchor="middle" font-family="楷体" font-size="10" fill="#654321">${text}</text>
    </svg>`;
}

// 导出函数
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        createIllustration,
        createTaoistIllustration,
        createBuddhistIllustration,
        createConfucianIllustration,
        createLifeIllustration,
        createStudyIllustration,
        createPoetryIllustration,
        createDefaultIllustration
    };
}

// 确保函数在浏览器环境中全局可用
if (typeof window !== 'undefined') {
    window.createIllustration = createIllustration;
    window.createTaoistIllustration = createTaoistIllustration;
    window.createBuddhistIllustration = createBuddhistIllustration;
    window.createConfucianIllustration = createConfucianIllustration;
    window.createLifeIllustration = createLifeIllustration;
    window.createStudyIllustration = createStudyIllustration;
    window.createPoetryIllustration = createPoetryIllustration;
    window.createDefaultIllustration = createDefaultIllustration;
}

console.log('illustrations.js 加载完成 - 融合传统国画山水与现代卡通元素的配图系统');
