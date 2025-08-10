// 经典名句数据库
const quotesDatabase = [
    // 道家经典
    {
        text: "道可道，非常道。名可名，非常名。",
        source: "道德经 - 道家经典",
        author: "老子",
        interpretation: "可以用言语表达的道，就不是永恒不变的道。可以用名称命名的名，就不是永恒不变的名。这句话表达了道家对道的本质认识，道是超越语言和概念的终极真理。",
        category: "道家",
        // 配图功能已移除
    },
    {
        text: "上善若水，水善利万物而不争。",
        source: "道德经 - 道家经典",
        author: "老子",
        interpretation: "最高的善就像水一样，水善于滋润万物而不与万物相争。这句话教导我们要学习水的品质，默默奉献，不争不抢，这是道家处世哲学的核心。",
        category: "道家",
        // 配图功能已移除
    },
    {
        text: "知人者智，自知者明。胜人者有力，自胜者强。",
        source: "道德经 - 道家经典",
        author: "老子",
        interpretation: "了解别人的人聪明，了解自己的人明智。战胜别人的人有力量，战胜自己的人强大。这句话强调自我认知和自我超越的重要性。",
        category: "道家",
        // 配图功能已移除
    },
    {
        text: "列子御风而行，泠然善也。",
        source: "列子 - 道家经典",
        author: "列子",
        interpretation: "列子乘风而行，轻盈自在。这句话描述了道家追求自由、无拘无束的精神境界，体现了道家对逍遥自在生活方式的向往。",
        category: "道家",
        // 配图功能已移除
    },
    {
        text: "天地有大美而不言，四时有明法而不议。",
        source: "列子 - 道家经典",
        author: "列子",
        interpretation: "天地间有伟大的美却从不言说，四季有明确的规律却从不议论。这句话赞美了自然的伟大和规律性，教导我们要学会观察和感悟自然。",
        category: "道家",
        // 配图功能已移除
    },

    // 佛家经典
    {
        text: "一切有为法，如梦幻泡影，如露亦如电，应作如是观。",
        source: "金刚经 - 佛家经典",
        author: "佛陀",
        interpretation: "一切因缘和合而生的事物，都像梦、幻、泡、影一样虚幻，像露水、闪电一样短暂。我们应该这样观察世界。这句话教导我们要看破世间万物的虚幻本质。",
        category: "佛家",
        // 配图功能已移除
    },
    {
        text: "色即是空，空即是色。",
        source: "心经 - 佛家经典",
        author: "佛陀",
        interpretation: "物质现象就是空性，空性就是物质现象。这句话表达了佛教中观学派的核心思想，说明现象与本质、有与无的统一性。",
        category: "佛家",
        // 配图功能已移除
    },
    {
        text: "菩提本无树，明镜亦非台。本来无一物，何处惹尘埃？",
        source: "六祖坛经 - 佛家经典",
        author: "慧能",
        interpretation: "菩提树本来就不存在，明镜台也不是真实的。本来就没有任何事物，哪里会沾染尘埃呢？这句话表达了禅宗\"本来无一物\"的空性思想。",
        category: "佛家",
        // 配图功能已移除
    },
    {
        text: "心净则国土净，心平则世界平。",
        source: "六祖坛经 - 佛家经典",
        author: "慧能",
        interpretation: "内心清净，世界就清净；内心平和，世界就平和。这句话强调内心修养的重要性，说明外在世界是内心世界的反映。",
        category: "佛家",
        // 配图功能已移除
    },
    {
        text: "万法归一，一归何处？",
        source: "六祖坛经 - 佛家经典",
        author: "慧能",
        interpretation: "万法归于一心，一心又归于何处？这是禅宗著名的公案，引导修行者思考心的本质和归宿。",
        category: "佛家",
        // 配图功能已移除
    },

    // 儒家经典
    {
        text: "学而时习之，不亦说乎？",
        source: "论语 - 儒家经典",
        author: "孔子",
        interpretation: "学习知识并且经常复习，不是很快乐吗？这句话强调了学习的重要性和快乐，体现了儒家重视教育的思想。",
        category: "儒家",
        // 配图功能已移除
    },
    {
        text: "己所不欲，勿施于人。",
        source: "论语 - 儒家经典",
        author: "孔子",
        interpretation: "自己不愿意的事情，不要强加给别人。这是儒家\"恕\"道的核心，教导我们要换位思考，尊重他人，这是处理人际关系的基本原则。",
        category: "儒家",
        image: "🤝", // 握手，象征仁爱与尊重
        svgImage: createRespectSVG("己所不欲")
    },
    {
        text: "君子和而不同，小人同而不和。",
        source: "论语 - 儒家经典",
        author: "孔子",
        interpretation: "君子能够和谐相处但保持各自的特点，小人表面相同但内心不和。这句话教导我们要学会求同存异，包容不同的观点。",
        category: "儒家",
        image: "🌊", // 大海，象征包容与和谐
        svgImage: createHarmonySVG("和而不同")
    },
    {
        text: "富贵不能淫，贫贱不能移，威武不能屈。",
        source: "孟子 - 儒家经典",
        author: "孟子",
        interpretation: "富贵不能使我放纵，贫贱不能使我改变志向，威武不能使我屈服。这句话体现了儒家对人格独立和道德操守的重视。",
        category: "儒家",
        image: "⚔️", // 宝剑，象征坚贞不屈
        svgImage: createIntegritySVG("威武不屈")
    },
    {
        text: "生于忧患，死于安乐。",
        source: "孟子 - 儒家经典",
        author: "孟子",
        interpretation: "在忧患中生存，在安乐中死亡。这句话说明忧患意识能让人保持警惕和进取，而安乐则容易让人懈怠和堕落。",
        category: "儒家",
        image: "🌅", // 朝阳，象征希望与进取
        svgImage: createDawnSVG("生于忧患")
    },

    // 处世经典
    {
        text: "宠辱不惊，看庭前花开花落；去留无意，望天上云卷云舒。",
        source: "菜根谭 - 处世经典",
        author: "洪应明",
        interpretation: "面对宠辱不惊慌，看庭前花开花落；面对去留不在意，望天上云卷云舒。这句话教导我们要保持内心的平静，以超然的态度面对人生的起伏。",
        category: "处世",
        image: "☁️", // 云朵，象征超然物外
        svgImage: createCloudSVG("宠辱不惊")
    },
    {
        text: "路遥知马力，日久见人心。",
        source: "菜根谭 - 处世经典",
        author: "洪应明",
        interpretation: "路途遥远才能知道马的耐力，时间长久才能看出人的真心。这句话说明真正的品质需要时间和考验才能显现。",
        category: "处世",
        image: "🐎", // 骏马，象征耐力与品质
        svgImage: createHorseSVG("路遥知马力")
    },
    {
        text: "水至清则无鱼，人至察则无徒。",
        source: "菜根谭 - 处世经典",
        author: "洪应明",
        interpretation: "水太清澈就没有鱼，人太精明就没有朋友。这句话教导我们要学会包容，不要过于苛求完美，这样才能与人和谐相处。",
        category: "处世",
        image: "🐟", // 游鱼，象征和谐与包容
        svgImage: createFishSVG("水至清无鱼")
    },
    {
        text: "良言一句三冬暖，恶语伤人六月寒。",
        source: "增广贤文 - 学习经典",
        author: "佚名",
        interpretation: "好话一句能让寒冬变暖，恶语一句能让六月变寒。这句话强调了语言的力量，教导我们要说善言，避免恶语伤人。",
        category: "处世",
        image: "🔥", // 火焰，象征温暖与善意
        svgImage: createWarmthSVG("良言三冬暖")
    },

    // 学习经典
    {
        text: "书山有路勤为径，学海无涯苦作舟。",
        source: "增广贤文 - 学习经典",
        author: "佚名",
        interpretation: "书山有路，勤奋是路径；学海无涯，刻苦是舟船。这句话强调了学习需要勤奋和刻苦，只有不断努力才能攀登知识的高峰。",
        category: "学习",
        image: "⛰️", // 山峰，象征知识的高峰
        svgImage: createBookMountainSVG("书山有路")
    },
    {
        text: "宝剑锋从磨砺出，梅花香自苦寒来。",
        source: "增广贤文 - 学习经典",
        author: "佚名",
        interpretation: "宝剑的锋利是从磨砺中得来的，梅花的香气是从苦寒中得来的。这句话说明成功需要经历困难和磨练，体现了艰苦奋斗的精神。",
        category: "学习",
        image: "❄️", // 雪花，象征磨练与坚持
        svgImage: createPlumBlossomSVG("梅花苦寒来")
    },
    {
        text: "少壮不努力，老大徒伤悲。",
        source: "增广贤文 - 学习经典",
        author: "佚名",
        interpretation: "年轻时不努力，年老时只能悲伤。这句话强调了珍惜时间、及时努力的重要性，是千古流传的励志名言。",
        category: "学习",
        image: "⏰", // 时钟，象征时间与珍惜
        svgImage: createTimeSVG("少壮不努力")
    },
    {
        text: "玉不琢，不成器；人不学，不知道。",
        source: "增广贤文 - 学习经典",
        author: "佚名",
        interpretation: "玉石不经过雕琢，就不能成为器物；人不经过学习，就不能明白道理。这句话强调了教育和学习对人的重要性。",
        category: "学习",
        image: "💎", // 玉石，象征潜力与成长
        svgImage: createJadeSVG("玉不琢不成器")
    },

    // 唐诗宋词
    {
        text: "床前明月光，疑是地上霜。举头望明月，低头思故乡。",
        source: "静夜思 - 唐诗",
        author: "李白",
        interpretation: "床前明亮的月光，让人怀疑是地上的白霜。抬头望着明月，低头思念故乡。这首诗表达了游子思乡的深切情感，语言简洁而意境深远。",
        category: "唐诗宋词",
        image: "🌙", // 明月，象征思乡之情
        svgImage: createMoonSVG("床前明月光")
    },
    {
        text: "春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。",
        source: "春晓 - 唐诗",
        author: "孟浩然",
        interpretation: "春天里贪睡不知不觉天已破晓，搅乱我酣眠的是那啁啾的小鸟。昨天夜里风声雨声一直不断，那娇美的春花不知被吹落了多少？",
        category: "唐诗宋词",
        image: "🌸", // 春花，象征春天的美好
        svgImage: createSpringSVG("春眠不觉晓")
    },
    {
        text: "千山鸟飞绝，万径人踪灭。孤舟蓑笠翁，独钓寒江雪。",
        source: "江雪 - 唐诗",
        author: "柳宗元",
        interpretation: "群山中看不到飞鸟，所有道路上都没有行人的踪迹。只有一条小船，上面坐着个披着蓑衣、戴着斗笠的老翁，独自在寒冷的江面上垂钓。",
        category: "唐诗宋词",
        image: "🎣", // 钓鱼，象征孤独与坚持
        svgImage: createFishingSVG("独钓寒江雪")
    },
    {
        text: "明月几时有，把酒问青天。不知天上宫阙，今夕是何年。",
        source: "水调歌头·明月几时有 - 宋词",
        author: "苏轼",
        interpretation: "明月什么时候出现？我端着酒杯问青天。不知道天上的宫殿，今晚是哪一年。这首词表达了作者对人生的思考和对美好生活的向往。",
        category: "唐诗宋词",
        image: "🍷", // 酒杯，象征豪情与思考
        svgImage: createWineSVG("把酒问青天")
    },
    {
        text: "寻寻觅觅，冷冷清清，凄凄惨惨戚戚。乍暖还寒时候，最难将息。",
        source: "声声慢·寻寻觅觅 - 宋词",
        author: "李清照",
        interpretation: "苦苦地寻寻觅觅，却只见冷冷清清，怎不让人凄惨悲戚。乍暖还寒的时节，最难保养休息。这首词表达了作者内心的孤独和悲凉。",
        category: "唐诗宋词",
        image: "🍂", // 落叶，象征凄凉与孤独
        svgImage: createAutumnSVG("寻寻觅觅")
    },
    {
        text: "昨夜西风凋碧树，独上高楼，望尽天涯路。",
        source: "蝶恋花·槛菊愁烟兰泣露 - 宋词",
        author: "晏殊",
        interpretation: "昨天夜里西风劲吹，凋零了绿树。我独自登上高楼，望尽那消失在天涯的道路。这首词表达了作者对远方亲人的思念之情。",
        category: "唐诗宋词",
        image: "🏯", // 高楼，象征思念与远望
        svgImage: createTowerSVG("独上高楼")
    },
    {
        text: "衣带渐宽终不悔，为伊消得人憔悴。",
        source: "蝶恋花·伫倚危楼风细细 - 宋词",
        author: "柳永",
        interpretation: "衣带越来越宽松，但我始终不后悔，为了她我情愿消瘦憔悴。这首词表达了作者对爱情的执着和坚贞。",
        category: "唐诗宋词",
        image: "💕", // 爱心，象征爱情的执着
        svgImage: createLoveSVG("衣带渐宽")
    },
    {
        text: "人生若只如初见，何事秋风悲画扇。",
        source: "木兰词·拟古决绝词柬友 - 清词",
        author: "纳兰性德",
        interpretation: "人生如果都像初次相遇那样美好，就不会有秋风吹落画扇的悲伤了。这首词表达了作者对美好初遇的怀念和对现实无奈的感慨。",
        category: "唐诗宋词",
        image: "🍁", // 枫叶，象征美好与怀念
        svgImage: createFanSVG("人生若初见")
    }
];

// SVG配图生成函数
function createTaoistSVG(title, text) {
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

function createWaterSVG(title, text) {
    return `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#4682B4;stop-opacity:0.8" />
                <stop offset="100%" style="stop-color:#1E90FF;stop-opacity:0.6" />
            </linearGradient>
            <linearGradient id="rockGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#696969;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#2F4F4F;stop-opacity:1" />
            </linearGradient>
        </defs>
        
        <!-- 背景 -->
        <rect width="200" height="150" fill="#F0F8FF"/>
        
        <!-- 流水 -->
        <path d="M20 30 Q60 40 100 30 Q140 20 180 30 L180 150 L20 150 Z" fill="url(#waterGrad)"/>
        
        <!-- 水波纹 -->
        <path d="M30 50 Q50 45 70 50 Q90 55 110 50 Q130 45 150 50 Q170 55 190 50" fill="none" stroke="#87CEEB" stroke-width="2" opacity="0.6"/>
        <path d="M25 70 Q45 65 65 70 Q85 75 105 70 Q125 65 145 70 Q165 75 185 70" fill="none" stroke="#87CEEB" stroke-width="2" opacity="0.4"/>
        
        <!-- 岩石 -->
        <ellipse cx="50" cy="130" rx="25" ry="15" fill="url(#rockGrad)"/>
        <ellipse cx="150" cy="135" rx="20" ry="12" fill="url(#rockGrad)"/>
        
        <!-- 可爱的小水滴角色 -->
        <circle cx="160" cy="80" r="12" fill="#87CEEB"/>
        <circle cx="158" cy="78" r="2" fill="#000"/>
        <circle cx="162" cy="78" r="2" fill="#000"/>
        <path d="M158 85 Q160 88 162 85" fill="none" stroke="#000" stroke-width="1"/>
        <path d="M160 92 L160 100" fill="none" stroke="#87CEEB" stroke-width="3" stroke-linecap="round"/>
        
        <!-- 标题 -->
        <text x="100" y="20" text-anchor="middle" font-family="楷体" font-size="12" fill="#4682B4">${title}</text>
        <text x="100" y="35" text-anchor="middle" font-family="楷体" font-size="8" fill="#1E90FF">${text}</text>
    </svg>`;
}

function createMeditationSVG(text) {
    return `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="meditationGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#4B0082;stop-opacity:0.8" />
                <stop offset="100%" style="stop-color:#9370DB;stop-opacity:0.6" />
            </linearGradient>
            <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
            </linearGradient>
        </defs>
        
        <!-- 背景 -->
        <rect width="200" height="150" fill="url(#meditationGrad)"/>
        
        <!-- 远山 -->
        <path d="M0 100 Q50 80 100 100 Q150 70 200 100 L200 150 L0 150 Z" fill="url(#mountainGrad)" opacity="0.6"/>
        
        <!-- 冥想者 -->
        <circle cx="100" cy="75" r="25" fill="#FFDAB9" stroke="#000" stroke-width="2"/>
        <circle cx="100" cy="62.5" r="8" fill="#000"/>
        <circle cx="100" cy="87.5" r="8" fill="#fff"/>
        <path d="M100 50 Q125 75 100 100 Q75 75 100 50" fill="#000"/>
        <path d="M100 50 Q75 75 100 100 Q125 75 100 50" fill="#fff"/>
        
        <!-- 标题 -->
        <text x="100" y="20" text-anchor="middle" font-family="楷体" font-size="12" fill="#4B0082">自知者明</text>
        <text x="100" y="35" text-anchor="middle" font-family="楷体" font-size="8" fill="#9370DB">${text}</text>
    </svg>`;
}

function createWindSVG(text) {
    return `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="windGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#4169E1;stop-opacity:0.8" />
                <stop offset="100%" style="stop-color:#191970;stop-opacity:0.6" />
            </linearGradient>
            <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
            </linearGradient>
        </defs>
        
        <!-- 背景 -->
        <rect width="200" height="150" fill="url(#windGrad)"/>
        
        <!-- 远山 -->
        <path d="M0 100 Q50 80 100 100 Q150 70 200 100 L200 150 L0 150 Z" fill="url(#mountainGrad)" opacity="0.6"/>
        
        <!-- 风车 -->
        <circle cx="100" cy="75" r="25" fill="#FFE4C4" stroke="#000" stroke-width="2"/>
        <circle cx="100" cy="62.5" r="8" fill="#000"/>
        <circle cx="100" cy="87.5" r="8" fill="#fff"/>
        <path d="M100 50 Q125 75 100 100 Q75 75 100 50" fill="#000"/>
        <path d="M100 50 Q75 75 100 100 Q125 75 100 50" fill="#fff"/>
        
        <!-- 标题 -->
        <text x="100" y="20" text-anchor="middle" font-family="楷体" font-size="12" fill="#4169E1">列子御风</text>
        <text x="100" y="35" text-anchor="middle" font-family="楷体" font-size="8" fill="#191970">${text}</text>
    </svg>`;
}

function createMountainSVG(text) {
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
        
        <!-- 标题 -->
        <text x="100" y="20" text-anchor="middle" font-family="楷体" font-size="12" fill="#8B4513">天地大美</text>
        <text x="100" y="35" text-anchor="middle" font-family="楷体" font-size="8" fill="#654321">${text}</text>
    </svg>`;
}

function createBuddhistSVG(text) {
    return `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="buddhistGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#FFD700;stop-opacity:0.8" />
                <stop offset="100%" style="stop-color:#FFC125;stop-opacity:0.6" />
            </linearGradient>
            <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
            </linearGradient>
        </defs>
        
        <!-- 背景 -->
        <rect width="200" height="150" fill="url(#buddhistGrad)"/>
        
        <!-- 远山 -->
        <path d="M0 100 Q50 80 100 100 Q150 70 200 100 L200 150 L0 150 Z" fill="url(#mountainGrad)" opacity="0.6"/>
        
        <!-- 法轮 -->
        <circle cx="100" cy="75" r="25" fill="#FFE4C4" stroke="#000" stroke-width="2"/>
        <circle cx="100" cy="62.5" r="8" fill="#000"/>
        <circle cx="100" cy="87.5" r="8" fill="#fff"/>
        <path d="M100 50 Q125 75 100 100 Q75 75 100 50" fill="#000"/>
        <path d="M100 50 Q75 75 100 100 Q125 75 100 50" fill="#fff"/>
        
        <!-- 标题 -->
        <text x="100" y="20" text-anchor="middle" font-family="楷体" font-size="12" fill="#FFD700">金刚经</text>
        <text x="100" y="35" text-anchor="middle" font-family="楷体" font-size="8" fill="#FFC125">${text}</text>
    </svg>`;
}

function createDharmaSVG(text) {
    return `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="dharmaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#4B0082;stop-opacity:0.8" />
                <stop offset="100%" style="stop-color:#9370DB;stop-opacity:0.6" />
            </linearGradient>
            <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
            </linearGradient>
        </defs>
        
        <!-- 背景 -->
        <rect width="200" height="150" fill="url(#dharmaGrad)"/>
        
        <!-- 远山 -->
        <path d="M0 100 Q50 80 100 100 Q150 70 200 100 L200 150 L0 150 Z" fill="url(#mountainGrad)" opacity="0.6"/>
        
        <!-- 法轮 -->
        <circle cx="100" cy="75" r="25" fill="#FFE4C4" stroke="#000" stroke-width="2"/>
        <circle cx="100" cy="62.5" r="8" fill="#000"/>
        <circle cx="100" cy="87.5" r="8" fill="#fff"/>
        <path d="M100 50 Q125 75 100 100 Q75 75 100 50" fill="#000"/>
        <path d="M100 50 Q75 75 100 100 Q125 75 100 50" fill="#fff"/>
        
        <!-- 标题 -->
        <text x="100" y="20" text-anchor="middle" font-family="楷体" font-size="12" fill="#4B0082">心经</text>
        <text x="100" y="35" text-anchor="middle" font-family="楷体" font-size="8" fill="#9370DB">${text}</text>
    </svg>`;
}

function createLotusSVG(text) {
    return `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="lotusGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#008080;stop-opacity:0.8" />
                <stop offset="100%" style="stop-color:#006666;stop-opacity:0.6" />
            </linearGradient>
            <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
            </linearGradient>
        </defs>
        
        <!-- 背景 -->
        <rect width="200" height="150" fill="url(#lotusGrad)"/>
        
        <!-- 远山 -->
        <path d="M0 100 Q50 80 100 100 Q150 70 200 100 L200 150 L0 150 Z" fill="url(#mountainGrad)" opacity="0.6"/>
        
        <!-- 莲花 -->
        <circle cx="100" cy="75" r="25" fill="#FFE4C4" stroke="#000" stroke-width="2"/>
        <circle cx="100" cy="62.5" r="8" fill="#000"/>
        <circle cx="100" cy="87.5" r="8" fill="#fff"/>
        <path d="M100 50 Q125 75 100 100 Q75 75 100 50" fill="#000"/>
        <path d="M100 50 Q75 75 100 100 Q125 75 100 50" fill="#fff"/>
        
        <!-- 标题 -->
        <text x="100" y="20" text-anchor="middle" font-family="楷体" font-size="12" fill="#008080">六祖坛经</text>
        <text x="100" y="35" text-anchor="middle" font-family="楷体" font-size="8" fill="#006666">${text}</text>
    </svg>`;
}

function createZenSVG(text) {
    return `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="zenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#008080;stop-opacity:0.8" />
                <stop offset="100%" style="stop-color:#006666;stop-opacity:0.6" />
            </linearGradient>
            <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
            </linearGradient>
        </defs>
        
        <!-- 背景 -->
        <rect width="200" height="150" fill="url(#zenGrad)"/>
        
        <!-- 远山 -->
        <path d="M0 100 Q50 80 100 100 Q150 70 200 100 L200 150 L0 150 Z" fill="url(#mountainGrad)" opacity="0.6"/>
        
        <!-- 禅修者 -->
        <circle cx="100" cy="75" r="25" fill="#FFE4C4" stroke="#000" stroke-width="2"/>
        <circle cx="100" cy="62.5" r="8" fill="#000"/>
        <circle cx="100" cy="87.5" r="8" fill="#fff"/>
        <path d="M100 50 Q125 75 100 100 Q75 75 100 50" fill="#000"/>
        <path d="M100 50 Q75 75 100 100 Q125 75 100 50" fill="#fff"/>
        
        <!-- 标题 -->
        <text x="100" y="20" text-anchor="middle" font-family="楷体" font-size="12" fill="#008080">六祖坛经</text>
        <text x="100" y="35" text-anchor="middle" font-family="楷体" font-size="8" fill="#006666">${text}</text>
    </svg>`;
}

function createGemSVG(text) {
    return `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="gemGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#FFD700;stop-opacity:0.8" />
                <stop offset="100%" style="stop-color:#FFC125;stop-opacity:0.6" />
            </linearGradient>
            <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
            </linearGradient>
        </defs>
        
        <!-- 背景 -->
        <rect width="200" height="150" fill="url(#gemGrad)"/>
        
        <!-- 远山 -->
        <path d="M0 100 Q50 80 100 100 Q150 70 200 100 L200 150 L0 150 Z" fill="url(#mountainGrad)" opacity="0.6"/>
        
        <!-- 宝石 -->
        <circle cx="100" cy="75" r="25" fill="#FFE4C4" stroke="#000" stroke-width="2"/>
        <circle cx="100" cy="62.5" r="8" fill="#000"/>
        <circle cx="100" cy="87.5" r="8" fill="#fff"/>
        <path d="M100 50 Q125 75 100 100 Q75 75 100 50" fill="#000"/>
        <path d="M100 50 Q75 75 100 100 Q125 75 100 50" fill="#fff"/>
        
        <!-- 标题 -->
        <text x="100" y="20" text-anchor="middle" font-family="楷体" font-size="12" fill="#FFD700">六祖坛经</text>
        <text x="100" y="35" text-anchor="middle" font-family="楷体" font-size="8" fill="#FFC125">${text}</text>
    </svg>`;
}

function createStudySVG(text) {
    return `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="studyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#4682B4;stop-opacity:0.8" />
                <stop offset="100%" style="stop-color:#1E90FF;stop-opacity:0.6" />
            </linearGradient>
            <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
            </linearGradient>
        </defs>
        
        <!-- 背景 -->
        <rect width="200" height="150" fill="url(#studyGrad)"/>
        
        <!-- 远山 -->
        <path d="M0 100 Q50 80 100 100 Q150 70 200 100 L200 150 L0 150 Z" fill="url(#mountainGrad)" opacity="0.6"/>
        
        <!-- 书本 -->
        <circle cx="100" cy="75" r="25" fill="#FFE4C4" stroke="#000" stroke-width="2"/>
        <circle cx="100" cy="62.5" r="8" fill="#000"/>
        <circle cx="100" cy="87.5" r="8" fill="#fff"/>
        <path d="M100 50 Q125 75 100 100 Q75 75 100 50" fill="#000"/>
        <path d="M100 50 Q75 75 100 100 Q125 75 100 50" fill="#fff"/>
        
        <!-- 标题 -->
        <text x="100" y="20" text-anchor="middle" font-family="楷体" font-size="12" fill="#4682B4">论语</text>
        <text x="100" y="35" text-anchor="middle" font-family="楷体" font-size="8" fill="#1E90FF">${text}</text>
    </svg>`;
}

function createRespectSVG(text) {
    return `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="respectGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#008080;stop-opacity:0.8" />
                <stop offset="100%" style="stop-color:#006666;stop-opacity:0.6" />
            </linearGradient>
            <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
            </linearGradient>
        </defs>
        
        <!-- 背景 -->
        <rect width="200" height="150" fill="url(#respectGrad)"/>
        
        <!-- 远山 -->
        <path d="M0 100 Q50 80 100 100 Q150 70 200 100 L200 150 L0 150 Z" fill="url(#mountainGrad)" opacity="0.6"/>
        
        <!-- 握手 -->
        <circle cx="100" cy="75" r="25" fill="#FFE4C4" stroke="#000" stroke-width="2"/>
        <circle cx="100" cy="62.5" r="8" fill="#000"/>
        <circle cx="100" cy="87.5" r="8" fill="#fff"/>
        <path d="M100 50 Q125 75 100 100 Q75 75 100 50" fill="#000"/>
        <path d="M100 50 Q75 75 100 100 Q125 75 100 50" fill="#fff"/>
        
        <!-- 标题 -->
        <text x="100" y="20" text-anchor="middle" font-family="楷体" font-size="12" fill="#008080">论语</text>
        <text x="100" y="35" text-anchor="middle" font-family="楷体" font-size="8" fill="#006666">${text}</text>
    </svg>`;
}

function createHarmonySVG(text) {
    return `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="harmonyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#008080;stop-opacity:0.8" />
                <stop offset="100%" style="stop-color:#006666;stop-opacity:0.6" />
            </linearGradient>
            <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
            </linearGradient>
        </defs>
        
        <!-- 背景 -->
        <rect width="200" height="150" fill="url(#harmonyGrad)"/>
        
        <!-- 远山 -->
        <path d="M0 100 Q50 80 100 100 Q150 70 200 100 L200 150 L0 150 Z" fill="url(#mountainGrad)" opacity="0.6"/>
        
        <!-- 和谐 -->
        <circle cx="100" cy="75" r="25" fill="#FFE4C4" stroke="#000" stroke-width="2"/>
        <circle cx="100" cy="62.5" r="8" fill="#000"/>
        <circle cx="100" cy="87.5" r="8" fill="#fff"/>
        <path d="M100 50 Q125 75 100 100 Q75 75 100 50" fill="#000"/>
        <path d="M100 50 Q75 75 100 100 Q125 75 100 50" fill="#fff"/>
        
        <!-- 标题 -->
        <text x="100" y="20" text-anchor="middle" font-family="楷体" font-size="12" fill="#008080">论语</text>
        <text x="100" y="35" text-anchor="middle" font-family="楷体" font-size="8" fill="#006666">${text}</text>
    </svg>`;
}

function createIntegritySVG(text) {
    return `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="integrityGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#FFD700;stop-opacity:0.8" />
                <stop offset="100%" style="stop-color:#FFC125;stop-opacity:0.6" />
            </linearGradient>
            <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
            </linearGradient>
        </defs>
        
        <!-- 背景 -->
        <rect width="200" height="150" fill="url(#integrityGrad)"/>
        
        <!-- 远山 -->
        <path d="M0 100 Q50 80 100 100 Q150 70 200 100 L200 150 L0 150 Z" fill="url(#mountainGrad)" opacity="0.6"/>
        
        <!-- 宝剑 -->
        <circle cx="100" cy="75" r="25" fill="#FFE4C4" stroke="#000" stroke-width="2"/>
        <circle cx="100" cy="62.5" r="8" fill="#000"/>
        <circle cx="100" cy="87.5" r="8" fill="#fff"/>
        <path d="M100 50 Q125 75 100 100 Q75 75 100 50" fill="#000"/>
        <path d="M100 50 Q75 75 100 100 Q125 75 100 50" fill="#fff"/>
        
        <!-- 标题 -->
        <text x="100" y="20" text-anchor="middle" font-family="楷体" font-size="12" fill="#FFD700">孟子</text>
        <text x="100" y="35" text-anchor="middle" font-family="楷体" font-size="8" fill="#FFC125">${text}</text>
    </svg>`;
}

function createDawnSVG(text) {
    return `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="dawnGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#FFD700;stop-opacity:0.8" />
                <stop offset="100%" style="stop-color:#FFC125;stop-opacity:0.6" />
            </linearGradient>
            <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
            </linearGradient>
        </defs>
        
        <!-- 背景 -->
        <rect width="200" height="150" fill="url(#dawnGrad)"/>
        
        <!-- 远山 -->
        <path d="M0 100 Q50 80 100 100 Q150 70 200 100 L200 150 L0 150 Z" fill="url(#mountainGrad)" opacity="0.6"/>
        
        <!-- 朝阳 -->
        <circle cx="100" cy="75" r="25" fill="#FFE4C4" stroke="#000" stroke-width="2"/>
        <circle cx="100" cy="62.5" r="8" fill="#000"/>
        <circle cx="100" cy="87.5" r="8" fill="#fff"/>
        <path d="M100 50 Q125 75 100 100 Q75 75 100 50" fill="#000"/>
        <path d="M100 50 Q75 75 100 100 Q125 75 100 50" fill="#fff"/>
        
        <!-- 标题 -->
        <text x="100" y="20" text-anchor="middle" font-family="楷体" font-size="12" fill="#FFD700">孟子</text>
        <text x="100" y="35" text-anchor="middle" font-family="楷体" font-size="8" fill="#FFC125">${text}</text>
    </svg>`;
}

function createCloudSVG(text) {
    return `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#87CEEB;stop-opacity:0.8" />
                <stop offset="100%" style="stop-color:#E6E6FA;stop-opacity:0.6" />
            </linearGradient>
            <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
            </linearGradient>
        </defs>
        
        <!-- 背景 -->
        <rect width="200" height="150" fill="url(#cloudGrad)"/>
        
        <!-- 远山 -->
        <path d="M0 100 Q50 80 100 100 Q150 70 200 100 L200 150 L0 150 Z" fill="url(#mountainGrad)" opacity="0.6"/>
        
        <!-- 云朵 -->
        <circle cx="100" cy="75" r="25" fill="#FFE4C4" stroke="#000" stroke-width="2"/>
        <circle cx="100" cy="62.5" r="8" fill="#000"/>
        <circle cx="100" cy="87.5" r="8" fill="#fff"/>
        <path d="M100 50 Q125 75 100 100 Q75 75 100 50" fill="#000"/>
        <path d="M100 50 Q75 75 100 100 Q125 75 100 50" fill="#fff"/>
        
        <!-- 标题 -->
        <text x="100" y="20" text-anchor="middle" font-family="楷体" font-size="12" fill="#87CEEB">菜根谭</text>
        <text x="100" y="35" text-anchor="middle" font-family="楷体" font-size="8" fill="#E6E6FA">${text}</text>
    </svg>`;
}

function createHorseSVG(text) {
    return `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="horseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#8B4513;stop-opacity:0.8" />
                <stop offset="100%" style="stop-color:#654321;stop-opacity:0.6" />
            </linearGradient>
            <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
            </linearGradient>
        </defs>
        
        <!-- 背景 -->
        <rect width="200" height="150" fill="url(#horseGrad)"/>
        
        <!-- 远山 -->
        <path d="M0 100 Q50 80 100 100 Q150 70 200 100 L200 150 L0 150 Z" fill="url(#mountainGrad)" opacity="0.6"/>
        
        <!-- 骏马 -->
        <circle cx="100" cy="75" r="25" fill="#FFE4C4" stroke="#000" stroke-width="2"/>
        <circle cx="100" cy="62.5" r="8" fill="#000"/>
        <circle cx="100" cy="87.5" r="8" fill="#fff"/>
        <path d="M100 50 Q125 75 100 100 Q75 75 100 50" fill="#000"/>
        <path d="M100 50 Q75 75 100 100 Q125 75 100 50" fill="#fff"/>
        
        <!-- 标题 -->
        <text x="100" y="20" text-anchor="middle" font-family="楷体" font-size="12" fill="#8B4513">菜根谭</text>
        <text x="100" y="35" text-anchor="middle" font-family="楷体" font-size="8" fill="#654321">${text}</text>
    </svg>`;
}

function createFishSVG(text) {
    return `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="fishGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#008080;stop-opacity:0.8" />
                <stop offset="100%" style="stop-color:#006666;stop-opacity:0.6" />
            </linearGradient>
            <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
            </linearGradient>
        </defs>
        
        <!-- 背景 -->
        <rect width="200" height="150" fill="url(#fishGrad)"/>
        
        <!-- 远山 -->
        <path d="M0 100 Q50 80 100 100 Q150 70 200 100 L200 150 L0 150 Z" fill="url(#mountainGrad)" opacity="0.6"/>
        
        <!-- 游鱼 -->
        <circle cx="100" cy="75" r="25" fill="#FFE4C4" stroke="#000" stroke-width="2"/>
        <circle cx="100" cy="62.5" r="8" fill="#000"/>
        <circle cx="100" cy="87.5" r="8" fill="#fff"/>
        <path d="M100 50 Q125 75 100 100 Q75 75 100 50" fill="#000"/>
        <path d="M100 50 Q75 75 100 100 Q125 75 100 50" fill="#fff"/>
        
        <!-- 标题 -->
        <text x="100" y="20" text-anchor="middle" font-family="楷体" font-size="12" fill="#008080">菜根谭</text>
        <text x="100" y="35" text-anchor="middle" font-family="楷体" font-size="8" fill="#006666">${text}</text>
    </svg>`;
}

function createWarmthSVG(text) {
    return `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="warmthGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#FFD700;stop-opacity:0.8" />
                <stop offset="100%" style="stop-color:#FFC125;stop-opacity:0.6" />
            </linearGradient>
            <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
            </linearGradient>
        </defs>
        
        <!-- 背景 -->
        <rect width="200" height="150" fill="url(#warmthGrad)"/>
        
        <!-- 远山 -->
        <path d="M0 100 Q50 80 100 100 Q150 70 200 100 L200 150 L0 150 Z" fill="url(#mountainGrad)" opacity="0.6"/>
        
        <!-- 火焰 -->
        <circle cx="100" cy="75" r="25" fill="#FFE4C4" stroke="#000" stroke-width="2"/>
        <circle cx="100" cy="62.5" r="8" fill="#000"/>
        <circle cx="100" cy="87.5" r="8" fill="#fff"/>
        <path d="M100 50 Q125 75 100 100 Q75 75 100 50" fill="#000"/>
        <path d="M100 50 Q75 75 100 100 Q125 75 100 50" fill="#fff"/>
        
        <!-- 标题 -->
        <text x="100" y="20" text-anchor="middle" font-family="楷体" font-size="12" fill="#FFD700">增广贤文</text>
        <text x="100" y="35" text-anchor="middle" font-family="楷体" font-size="8" fill="#FFC125">${text}</text>
    </svg>`;
}

function createBookMountainSVG(text) {
    return `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="bookGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#4682B4;stop-opacity:0.8" />
                <stop offset="100%" style="stop-color:#1E90FF;stop-opacity:0.6" />
            </linearGradient>
            <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
            </linearGradient>
        </defs>
        
        <!-- 背景 -->
        <rect width="200" height="150" fill="url(#bookGrad)"/>
        
        <!-- 远山 -->
        <path d="M0 100 Q50 80 100 100 Q150 70 200 100 L200 150 L0 150 Z" fill="url(#mountainGrad)" opacity="0.6"/>
        
        <!-- 书山 -->
        <circle cx="100" cy="75" r="25" fill="#FFE4C4" stroke="#000" stroke-width="2"/>
        <circle cx="100" cy="62.5" r="8" fill="#000"/>
        <circle cx="100" cy="87.5" r="8" fill="#fff"/>
        <path d="M100 50 Q125 75 100 100 Q75 75 100 50" fill="#000"/>
        <path d="M100 50 Q75 75 100 100 Q125 75 100 50" fill="#fff"/>
        
        <!-- 标题 -->
        <text x="100" y="20" text-anchor="middle" font-family="楷体" font-size="12" fill="#4682B4">增广贤文</text>
        <text x="100" y="35" text-anchor="middle" font-family="楷体" font-size="8" fill="#1E90FF">${text}</text>
    </svg>`;
}

function createPlumBlossomSVG(text) {
    return `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="plumGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#FFD700;stop-opacity:0.8" />
                <stop offset="100%" style="stop-color:#FFC125;stop-opacity:0.6" />
            </linearGradient>
            <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
            </linearGradient>
        </defs>
        
        <!-- 背景 -->
        <rect width="200" height="150" fill="url(#plumGrad)"/>
        
        <!-- 远山 -->
        <path d="M0 100 Q50 80 100 100 Q150 70 200 100 L200 150 L0 150 Z" fill="url(#mountainGrad)" opacity="0.6"/>
        
        <!-- 梅花 -->
        <circle cx="100" cy="75" r="25" fill="#FFE4C4" stroke="#000" stroke-width="2"/>
        <circle cx="100" cy="62.5" r="8" fill="#000"/>
        <circle cx="100" cy="87.5" r="8" fill="#fff"/>
        <path d="M100 50 Q125 75 100 100 Q75 75 100 50" fill="#000"/>
        <path d="M100 50 Q75 75 100 100 Q125 75 100 50" fill="#fff"/>
        
        <!-- 标题 -->
        <text x="100" y="20" text-anchor="middle" font-family="楷体" font-size="12" fill="#FFD700">增广贤文</text>
        <text x="100" y="35" text-anchor="middle" font-family="楷体" font-size="8" fill="#FFC125">${text}</text>
    </svg>`;
}

function createTimeSVG(text) {
    return `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="timeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#FFD700;stop-opacity:0.8" />
                <stop offset="100%" style="stop-color:#FFC125;stop-opacity:0.6" />
            </linearGradient>
            <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
            </linearGradient>
        </defs>
        
        <!-- 背景 -->
        <rect width="200" height="150" fill="url(#timeGrad)"/>
        
        <!-- 远山 -->
        <path d="M0 100 Q50 80 100 100 Q150 70 200 100 L200 150 L0 150 Z" fill="url(#mountainGrad)" opacity="0.6"/>
        
        <!-- 时钟 -->
        <circle cx="100" cy="75" r="25" fill="#FFE4C4" stroke="#000" stroke-width="2"/>
        <circle cx="100" cy="62.5" r="8" fill="#000"/>
        <circle cx="100" cy="87.5" r="8" fill="#fff"/>
        <path d="M100 50 Q125 75 100 100 Q75 75 100 50" fill="#000"/>
        <path d="M100 50 Q75 75 100 100 Q125 75 100 50" fill="#fff"/>
        
        <!-- 标题 -->
        <text x="100" y="20" text-anchor="middle" font-family="楷体" font-size="12" fill="#FFD700">增广贤文</text>
        <text x="100" y="35" text-anchor="middle" font-family="楷体" font-size="8" fill="#FFC125">${text}</text>
    </svg>`;
}

function createJadeSVG(text) {
    return `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="jadeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#FFD700;stop-opacity:0.8" />
                <stop offset="100%" style="stop-color:#FFC125;stop-opacity:0.6" />
            </linearGradient>
            <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
            </linearGradient>
        </defs>
        
        <!-- 背景 -->
        <rect width="200" height="150" fill="url(#jadeGrad)"/>
        
        <!-- 远山 -->
        <path d="M0 100 Q50 80 100 100 Q150 70 200 100 L200 150 L0 150 Z" fill="url(#mountainGrad)" opacity="0.6"/>
        
        <!-- 玉石 -->
        <circle cx="100" cy="75" r="25" fill="#FFE4C4" stroke="#000" stroke-width="2"/>
        <circle cx="100" cy="62.5" r="8" fill="#000"/>
        <circle cx="100" cy="87.5" r="8" fill="#fff"/>
        <path d="M100 50 Q125 75 100 100 Q75 75 100 50" fill="#000"/>
        <path d="M100 50 Q75 75 100 100 Q125 75 100 50" fill="#fff"/>
        
        <!-- 标题 -->
        <text x="100" y="20" text-anchor="middle" font-family="楷体" font-size="12" fill="#FFD700">增广贤文</text>
        <text x="100" y="35" text-anchor="middle" font-family="楷体" font-size="8" fill="#FFC125">${text}</text>
    </svg>`;
}

function createMoonSVG(text) {
    return `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="moonGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#E6E6FA;stop-opacity:0.8" />
                <stop offset="100%" style="stop-color:#D3D3D3;stop-opacity:0.6" />
            </linearGradient>
            <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
            </linearGradient>
        </defs>
        
        <!-- 背景 -->
        <rect width="200" height="150" fill="url(#moonGrad)"/>
        
        <!-- 远山 -->
        <path d="M0 100 Q50 80 100 100 Q150 70 200 100 L200 150 L0 150 Z" fill="url(#mountainGrad)" opacity="0.6"/>
        
        <!-- 明月 -->
        <circle cx="100" cy="75" r="25" fill="#FFE4C4" stroke="#000" stroke-width="2"/>
        <circle cx="100" cy="62.5" r="8" fill="#000"/>
        <circle cx="100" cy="87.5" r="8" fill="#fff"/>
        <path d="M100 50 Q125 75 100 100 Q75 75 100 50" fill="#000"/>
        <path d="M100 50 Q75 75 100 100 Q125 75 100 50" fill="#fff"/>
        
        <!-- 标题 -->
        <text x="100" y="20" text-anchor="middle" font-family="楷体" font-size="12" fill="#E6E6FA">唐诗</text>
        <text x="100" y="35" text-anchor="middle" font-family="楷体" font-size="8" fill="#D3D3D3">${text}</text>
    </svg>`;
}

function createSpringSVG(text) {
    return `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="springGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#FFD700;stop-opacity:0.8" />
                <stop offset="100%" style="stop-color:#FFC125;stop-opacity:0.6" />
            </linearGradient>
            <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
            </linearGradient>
        </defs>
        
        <!-- 背景 -->
        <rect width="200" height="150" fill="url(#springGrad)"/>
        
        <!-- 远山 -->
        <path d="M0 100 Q50 80 100 100 Q150 70 200 100 L200 150 L0 150 Z" fill="url(#mountainGrad)" opacity="0.6"/>
        
        <!-- 春花 -->
        <circle cx="100" cy="75" r="25" fill="#FFE4C4" stroke="#000" stroke-width="2"/>
        <circle cx="100" cy="62.5" r="8" fill="#000"/>
        <circle cx="100" cy="87.5" r="8" fill="#fff"/>
        <path d="M100 50 Q125 75 100 100 Q75 75 100 50" fill="#000"/>
        <path d="M100 50 Q75 75 100 100 Q125 75 100 50" fill="#fff"/>
        
        <!-- 标题 -->
        <text x="100" y="20" text-anchor="middle" font-family="楷体" font-size="12" fill="#FFD700">唐诗</text>
        <text x="100" y="35" text-anchor="middle" font-family="楷体" font-size="8" fill="#FFC125">${text}</text>
    </svg>`;
}

function createFishingSVG(text) {
    return `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="fishingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#008080;stop-opacity:0.8" />
                <stop offset="100%" style="stop-color:#006666;stop-opacity:0.6" />
            </linearGradient>
            <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
            </linearGradient>
        </defs>
        
        <!-- 背景 -->
        <rect width="200" height="150" fill="url(#fishingGrad)"/>
        
        <!-- 远山 -->
        <path d="M0 100 Q50 80 100 100 Q150 70 200 100 L200 150 L0 150 Z" fill="url(#mountainGrad)" opacity="0.6"/>
        
        <!-- 钓鱼 -->
        <circle cx="100" cy="75" r="25" fill="#FFE4C4" stroke="#000" stroke-width="2"/>
        <circle cx="100" cy="62.5" r="8" fill="#000"/>
        <circle cx="100" cy="87.5" r="8" fill="#fff"/>
        <path d="M100 50 Q125 75 100 100 Q75 75 100 50" fill="#000"/>
        <path d="M100 50 Q75 75 100 100 Q125 75 100 50" fill="#fff"/>
        
        <!-- 标题 -->
        <text x="100" y="20" text-anchor="middle" font-family="楷体" font-size="12" fill="#008080">唐诗</text>
        <text x="100" y="35" text-anchor="middle" font-family="楷体" font-size="8" fill="#006666">${text}</text>
    </svg>`;
}

function createWineSVG(text) {
    return `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="wineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#FFD700;stop-opacity:0.8" />
                <stop offset="100%" style="stop-color:#FFC125;stop-opacity:0.6" />
            </linearGradient>
            <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
            </linearGradient>
        </defs>
        
        <!-- 背景 -->
        <rect width="200" height="150" fill="url(#wineGrad)"/>
        
        <!-- 远山 -->
        <path d="M0 100 Q50 80 100 100 Q150 70 200 100 L200 150 L0 150 Z" fill="url(#mountainGrad)" opacity="0.6"/>
        
        <!-- 酒杯 -->
        <circle cx="100" cy="75" r="25" fill="#FFE4C4" stroke="#000" stroke-width="2"/>
        <circle cx="100" cy="62.5" r="8" fill="#000"/>
        <circle cx="100" cy="87.5" r="8" fill="#fff"/>
        <path d="M100 50 Q125 75 100 100 Q75 75 100 50" fill="#000"/>
        <path d="M100 50 Q75 75 100 100 Q125 75 100 50" fill="#fff"/>
        
        <!-- 标题 -->
        <text x="100" y="20" text-anchor="middle" font-family="楷体" font-size="12" fill="#FFD700">宋词</text>
        <text x="100" y="35" text-anchor="middle" font-family="楷体" font-size="8" fill="#FFC125">${text}</text>
    </svg>`;
}

function createAutumnSVG(text) {
    return `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="autumnGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#FFD700;stop-opacity:0.8" />
                <stop offset="100%" style="stop-color:#FFC125;stop-opacity:0.6" />
            </linearGradient>
            <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
            </linearGradient>
        </defs>
        
        <!-- 背景 -->
        <rect width="200" height="150" fill="url(#autumnGrad)"/>
        
        <!-- 远山 -->
        <path d="M0 100 Q50 80 100 100 Q150 70 200 100 L200 150 L0 150 Z" fill="url(#mountainGrad)" opacity="0.6"/>
        
        <!-- 落叶 -->
        <circle cx="100" cy="75" r="25" fill="#FFE4C4" stroke="#000" stroke-width="2"/>
        <circle cx="100" cy="62.5" r="8" fill="#000"/>
        <circle cx="100" cy="87.5" r="8" fill="#fff"/>
        <path d="M100 50 Q125 75 100 100 Q75 75 100 50" fill="#000"/>
        <path d="M100 50 Q75 75 100 100 Q125 75 100 50" fill="#fff"/>
        
        <!-- 标题 -->
        <text x="100" y="20" text-anchor="middle" font-family="楷体" font-size="12" fill="#FFD700">宋词</text>
        <text x="100" y="35" text-anchor="middle" font-family="楷体" font-size="8" fill="#FFC125">${text}</text>
    </svg>`;
}

function createTowerSVG(text) {
    return `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="towerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#FFD700;stop-opacity:0.8" />
                <stop offset="100%" style="stop-color:#FFC125;stop-opacity:0.6" />
            </linearGradient>
            <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
            </linearGradient>
        </defs>
        
        <!-- 背景 -->
        <rect width="200" height="150" fill="url(#towerGrad)"/>
        
        <!-- 远山 -->
        <path d="M0 100 Q50 80 100 100 Q150 70 200 100 L200 150 L0 150 Z" fill="url(#mountainGrad)" opacity="0.6"/>
        
        <!-- 高楼 -->
        <circle cx="100" cy="75" r="25" fill="#FFE4C4" stroke="#000" stroke-width="2"/>
        <circle cx="100" cy="62.5" r="8" fill="#000"/>
        <circle cx="100" cy="87.5" r="8" fill="#fff"/>
        <path d="M100 50 Q125 75 100 100 Q75 75 100 50" fill="#000"/>
        <path d="M100 50 Q75 75 100 100 Q125 75 100 50" fill="#fff"/>
        
        <!-- 标题 -->
        <text x="100" y="20" text-anchor="middle" font-family="楷体" font-size="12" fill="#FFD700">宋词</text>
        <text x="100" y="35" text-anchor="middle" font-family="楷体" font-size="8" fill="#FFC125">${text}</text>
    </svg>`;
}

function createLoveSVG(text) {
    return `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="loveGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#FFD700;stop-opacity:0.8" />
                <stop offset="100%" style="stop-color:#FFC125;stop-opacity:0.6" />
            </linearGradient>
            <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
            </linearGradient>
        </defs>
        
        <!-- 背景 -->
        <rect width="200" height="150" fill="url(#loveGrad)"/>
        
        <!-- 远山 -->
        <path d="M0 100 Q50 80 100 100 Q150 70 200 100 L200 150 L0 150 Z" fill="url(#mountainGrad)" opacity="0.6"/>
        
        <!-- 爱心 -->
        <circle cx="100" cy="75" r="25" fill="#FFE4C4" stroke="#000" stroke-width="2"/>
        <circle cx="100" cy="62.5" r="8" fill="#000"/>
        <circle cx="100" cy="87.5" r="8" fill="#fff"/>
        <path d="M100 50 Q125 75 100 100 Q75 75 100 50" fill="#000"/>
        <path d="M100 50 Q75 75 100 100 Q125 75 100 50" fill="#fff"/>
        
        <!-- 标题 -->
        <text x="100" y="20" text-anchor="middle" font-family="楷体" font-size="12" fill="#FFD700">宋词</text>
        <text x="100" y="35" text-anchor="middle" font-family="楷体" font-size="8" fill="#FFC125">${text}</text>
    </svg>`;
}

function createFanSVG(text) {
    return `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="fanGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#FFD700;stop-opacity:0.8" />
                <stop offset="100%" style="stop-color:#FFC125;stop-opacity:0.6" />
            </linearGradient>
            <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
            </linearGradient>
        </defs>
        
        <!-- 背景 -->
        <rect width="200" height="150" fill="url(#fanGrad)"/>
        
        <!-- 远山 -->
        <path d="M0 100 Q50 80 100 100 Q150 70 200 100 L200 150 L0 150 Z" fill="url(#mountainGrad)" opacity="0.6"/>
        
        <!-- 扇子 -->
        <circle cx="100" cy="75" r="25" fill="#FFE4C4" stroke="#000" stroke-width="2"/>
        <circle cx="100" cy="62.5" r="8" fill="#000"/>
        <circle cx="100" cy="87.5" r="8" fill="#fff"/>
        <path d="M100 50 Q125 75 100 100 Q75 75 100 50" fill="#000"/>
        <path d="M100 50 Q75 75 100 100 Q125 75 100 50" fill="#fff"/>
        
        <!-- 标题 -->
        <text x="100" y="20" text-anchor="middle" font-family="楷体" font-size="12" fill="#FFD700">木兰词</text>
        <text x="100" y="35" text-anchor="middle" font-family="楷体" font-size="8" fill="#FFC125">${text}</text>
    </svg>`;
}

// 获取今日名句的函数
function getTodayQuote() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    
    // 使用日期作为种子，确保每天显示相同的名句
    const seed = dayOfYear + today.getFullYear();
    const index = seed % quotesDatabase.length;
    
    return quotesDatabase[index];
}

// 获取随机名句的函数
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotesDatabase.length);
    return quotesDatabase[randomIndex];
}

// 根据分类获取名句
function getQuotesByCategory(category) {
    return quotesDatabase.filter(quote => quote.category === category);
}

// 搜索名句
function searchQuotes(keyword) {
    const lowerKeyword = keyword.toLowerCase();
    return quotesDatabase.filter(quote => 
        quote.text.toLowerCase().includes(lowerKeyword) ||
        quote.interpretation.toLowerCase().includes(lowerKeyword) ||
        quote.source.toLowerCase().includes(lowerKeyword)
    );
}

// 导出函数和数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        quotesDatabase,
        getTodayQuote,
        getRandomQuote,
        getQuotesByCategory,
        searchQuotes
    };
}

// 确保函数在浏览器环境中全局可用
if (typeof window !== 'undefined') {
    window.quotesDatabase = quotesDatabase;
    window.getTodayQuote = getTodayQuote;
    window.getRandomQuote = getRandomQuote;
    window.getQuotesByCategory = getQuotesByCategory;
    window.searchQuotes = searchQuotes;
}

// 调试信息
console.log('quotes.js 加载完成');
console.log('quotesDatabase 长度:', quotesDatabase.length);
console.log('getTodayQuote 函数:', typeof getTodayQuote);
console.log('getRandomQuote 函数:', typeof getRandomQuote);

