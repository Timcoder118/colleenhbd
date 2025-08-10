// 经典名句数据库
const quotesDatabase = [
    // 道家经典
    {
        text: "道可道，非常道。名可名，非常名。",
        source: "道德经 - 道家经典",
        author: "老子",
        interpretation: "可以用言语表达的道，就不是永恒不变的道。可以用名称命名的名，就不是永恒不变的名。这句话表达了道家对道的本质认识，道是超越语言和概念的终极真理。",
        category: "道家"
    },
    {
        text: "上善若水，水善利万物而不争。",
        source: "道德经 - 道家经典",
        author: "老子",
        interpretation: "最高的善就像水一样，水善于滋润万物而不与万物相争。这句话教导我们要学习水的品质，默默奉献，不争不抢，这是道家处世哲学的核心。",
        category: "道家"
    },
    {
        text: "知人者智，自知者明。胜人者有力，自胜者强。",
        source: "道德经 - 道家经典",
        author: "老子",
        interpretation: "了解别人的人聪明，了解自己的人明智。战胜别人的人有力量，战胜自己的人强大。这句话强调自我认知和自我超越的重要性。",
        category: "道家"
    },
    {
        text: "列子御风而行，泠然善也。",
        source: "列子 - 道家经典",
        author: "列子",
        interpretation: "列子乘风而行，轻盈自在。这句话描述了道家追求自由、无拘无束的精神境界，体现了道家对逍遥自在生活方式的向往。",
        category: "道家"
    },
    {
        text: "天地有大美而不言，四时有明法而不议。",
        source: "列子 - 道家经典",
        author: "列子",
        interpretation: "天地间有伟大的美却从不言说，四季有明确的规律却从不议论。这句话赞美了自然的伟大和规律性，教导我们要学会观察和感悟自然。",
        category: "道家"
    },

    // 佛家经典
    {
        text: "一切有为法，如梦幻泡影，如露亦如电，应作如是观。",
        source: "金刚经 - 佛家经典",
        author: "佛陀",
        interpretation: "一切因缘和合而生的事物，都像梦、幻、泡、影一样虚幻，像露水、闪电一样短暂。我们应该这样观察世界。这句话教导我们要看破世间万物的虚幻本质。",
        category: "佛家"
    },
    {
        text: "色即是空，空即是色。",
        source: "心经 - 佛家经典",
        author: "佛陀",
        interpretation: "物质现象就是空性，空性就是物质现象。这句话表达了佛教中观学派的核心思想，说明现象与本质、有与无的统一性。",
        category: "佛家"
    },
    {
        text: "菩提本无树，明镜亦非台。本来无一物，何处惹尘埃？",
        source: "六祖坛经 - 佛家经典",
        author: "慧能",
        interpretation: "菩提树本来就不存在，明镜台也不是真实的。本来就没有任何事物，哪里会沾染尘埃呢？这句话表达了禅宗\"本来无一物\"的空性思想。",
        category: "佛家"
    },
    {
        text: "心净则国土净，心平则世界平。",
        source: "六祖坛经 - 佛家经典",
        author: "慧能",
        interpretation: "内心清净，世界就清净；内心平和，世界就平和。这句话强调内心修养的重要性，说明外在世界是内心世界的反映。",
        category: "佛家"
    },
    {
        text: "万法归一，一归何处？",
        source: "六祖坛经 - 佛家经典",
        author: "慧能",
        interpretation: "万法归于一心，一心又归于何处？这是禅宗著名的公案，引导修行者思考心的本质和归宿。",
        category: "佛家"
    },

    // 儒家经典
    {
        text: "学而时习之，不亦说乎？",
        source: "论语 - 儒家经典",
        author: "孔子",
        interpretation: "学习知识并且经常复习，不是很快乐吗？这句话强调了学习的重要性和快乐，体现了儒家重视教育的思想。",
        category: "儒家"
    },
    {
        text: "己所不欲，勿施于人。",
        source: "论语 - 儒家经典",
        author: "孔子",
        interpretation: "自己不愿意的事情，不要强加给别人。这是儒家\"恕\"道的核心，教导我们要换位思考，尊重他人，这是处理人际关系的基本原则。",
        category: "儒家"
    },
    {
        text: "和而不同。",
        source: "论语 - 儒家经典",
        author: "孔子",
        interpretation: "和谐相处但保持各自的特色。这句话教导我们在与人交往时要追求和谐，但不要盲目附和，要保持自己的独立性和特色。",
        category: "儒家"
    },
    {
        text: "威武不能屈，富贵不能淫，贫贱不能移。",
        source: "孟子 - 儒家经典",
        author: "孟子",
        interpretation: "威武不能使我屈服，富贵不能使我放纵，贫贱不能使我改变志向。这句话体现了儒家对人格独立和道德操守的重视。",
        category: "儒家"
    },
    {
        text: "生于忧患，死于安乐。",
        source: "孟子 - 儒家经典",
        author: "孟子",
        interpretation: "在忧患中生存，在安乐中死亡。这句话说明忧患意识能激励人奋发向上，而安逸享乐则容易使人懈怠堕落。",
        category: "儒家"
    },
    {
        text: "宠辱不惊，看庭前花开花落。去留无意，望天上云卷云舒。",
        source: "菜根谭 - 儒家经典",
        author: "洪应明",
        interpretation: "受宠或受辱都不惊慌，就像看庭院前的花开花落一样自然。去留都不在意，就像看天上的云卷云舒一样随意。这句话体现了儒家追求内心平静、超然物外的境界。",
        category: "儒家"
    },
    {
        text: "路遥知马力，日久见人心。",
        source: "增广贤文 - 儒家经典",
        author: "佚名",
        interpretation: "路途遥远才能知道马的耐力，时间久了才能看出人的真心。这句话说明真正的品质需要时间和考验才能显现。",
        category: "儒家"
    },
    {
        text: "水至清则无鱼，人至察则无徒。",
        source: "汉书 - 儒家经典",
        author: "班固",
        interpretation: "水太清澈就没有鱼，人太精明就没有朋友。这句话教导我们要有包容心，不要过于苛求完美。",
        category: "儒家"
    },
    {
        text: "良言一句三冬暖，恶语伤人六月寒。",
        source: "增广贤文 - 儒家经典",
        author: "佚名",
        interpretation: "一句好话能让寒冷的冬天变得温暖，一句恶语能让炎热的夏天变得寒冷。这句话强调了语言的力量和说话的重要性。",
        category: "儒家"
    },

    // 处世智慧
    {
        text: "书山有路勤为径，学海无涯苦作舟。",
        source: "古今贤文 - 处世经典",
        author: "佚名",
        interpretation: "书山有路，勤奋是路径；学海无涯，刻苦是舟船。这句话鼓励我们要勤奋学习，刻苦钻研，才能攀登知识的高峰。",
        category: "处世"
    },
    {
        text: "宝剑锋从磨砺出，梅花香自苦寒来。",
        source: "警世贤文 - 处世经典",
        author: "佚名",
        interpretation: "宝剑的锋利是从磨砺中得来的，梅花的香气是从苦寒中得来的。这句话说明成功需要经过艰苦的磨练和考验。",
        category: "处世"
    },
    {
        text: "少壮不努力，老大徒伤悲。",
        source: "长歌行 - 处世经典",
        author: "佚名",
        interpretation: "年轻时不努力，年老时只能徒然悲伤。这句话告诫我们要珍惜青春时光，及时努力，不要等到年老时后悔。",
        category: "处世"
    },
    {
        text: "玉不琢，不成器；人不学，不知道。",
        source: "礼记 - 处世经典",
        author: "佚名",
        interpretation: "玉石不经过雕琢就不能成为器物，人不经过学习就不能明白道理。这句话强调了学习和教育的重要性。",
        category: "处世"
    },

    // 唐诗宋词
    {
        text: "床前明月光，疑是地上霜。举头望明月，低头思故乡。",
        source: "静夜思 - 唐诗",
        author: "李白",
        interpretation: "床前明亮的月光，让人怀疑是地上的白霜。抬头望着明月，低头思念故乡。这首诗表达了游子思乡的深切情感，语言简洁而意境深远。",
        category: "唐诗宋词"
    },
    {
        text: "春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。",
        source: "春晓 - 唐诗",
        author: "孟浩然",
        interpretation: "春天里贪睡不知不觉天已破晓，搅乱我酣眠的是那啁啾的小鸟。昨天夜里风声雨声一直不断，那娇美的春花不知被吹落了多少？这首诗描绘了春天早晨的景象，充满了生机和美感。",
        category: "唐诗宋词"
    },
    {
        text: "千山鸟飞绝，万径人踪灭。孤舟蓑笠翁，独钓寒江雪。",
        source: "江雪 - 唐诗",
        author: "柳宗元",
        interpretation: "群山中看不到飞鸟，所有道路上都没有人的踪迹。只有一条小船上的蓑衣老翁，独自在飘着雪花的寒冷江面上钓鱼。这首诗描绘了一幅寂静、清冷的雪景图，体现了诗人孤独而高洁的情操。",
        category: "唐诗宋词"
    },
    {
        text: "明月几时有？把酒问青天。不知天上宫阙，今夕是何年。",
        source: "水调歌头·明月几时有 - 宋词",
        author: "苏轼",
        interpretation: "明月什么时候出现的？我端着酒杯问青天。不知道天上的神仙宫阙里，现在是什么年代了。这首词表达了词人对明月的向往和对人生的思考，充满了浪漫主义色彩。",
        category: "唐诗宋词"
    },
    {
        text: "寻寻觅觅，冷冷清清，凄凄惨惨戚戚。乍暖还寒时候，最难将息。",
        source: "声声慢·寻寻觅觅 - 宋词",
        author: "李清照",
        interpretation: "苦苦地寻寻觅觅，却只见冷冷清清，怎不让人凄惨悲戚。乍暖还寒的时节，最难保养休息。这首词表达了词人内心的孤独和凄凉，以及对逝去美好时光的怀念。",
        category: "唐诗宋词"
    },
    {
        text: "独上高楼，望尽天涯路。欲寄彩笺兼尺素，山长水阔知何处？",
        source: "蝶恋花·槛菊愁烟兰泣露 - 宋词",
        author: "晏殊",
        interpretation: "独自登上高楼，望尽天涯路。想要寄送彩色的信笺和白色的丝绢，但山长水阔，不知道寄到哪里去？这首词表达了词人对远方亲人的思念之情。",
        category: "唐诗宋词"
    },
    {
        text: "衣带渐宽终不悔，为伊消得人憔悴。",
        source: "蝶恋花·伫倚危楼风细细 - 宋词",
        author: "柳永",
        interpretation: "衣带渐渐宽松了，但我始终不后悔，为了她我情愿消瘦憔悴。这首词表达了词人对爱情的执着和坚贞，即使付出一切也在所不惜。",
        category: "唐诗宋词"
    },
    {
        text: "人生若只如初见，何事秋风悲画扇。等闲变却故人心，却道故人心易变。",
        source: "木兰花·拟古决绝词柬友 - 清词",
        author: "纳兰性德",
        interpretation: "人生如果都像初次相遇那样美好，就不会有秋风吹落画扇的悲伤了。轻易地改变了故人的心，却说是故人的心容易改变。这首词表达了词人对美好初遇的怀念和对人心易变的感慨。",
        category: "唐诗宋词"
    }
];

// 获取今日名句（基于日期）
function getTodayQuote() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    return quotesDatabase[dayOfYear % quotesDatabase.length];
}

// 获取随机名句
function getRandomQuote() {
    return quotesDatabase[Math.floor(Math.random() * quotesDatabase.length)];
}

// 根据分类获取名句
function getQuotesByCategory(category) {
    if (category === 'all') return quotesDatabase;
    return quotesDatabase.filter(quote => quote.category === category);
}

// 搜索名句
function searchQuotes(keyword) {
    if (!keyword) return quotesDatabase;
    const lowerKeyword = keyword.toLowerCase();
    return quotesDatabase.filter(quote => 
        quote.text.toLowerCase().includes(lowerKeyword) ||
        quote.source.toLowerCase().includes(lowerKeyword) ||
        quote.author.toLowerCase().includes(lowerKeyword) ||
        quote.interpretation.toLowerCase().includes(lowerKeyword)
    );
}

console.log('quotes.js 加载完成 - 经典名句数据库已就绪');

