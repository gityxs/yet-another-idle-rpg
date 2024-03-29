/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Default Save": "默认存档",
    "Delete": "删除",
    "No": "否",
    "Saves": "存档",
    "Options": "选项",
    "Yes": "是",
    "Are you sure?": "你确定吗？",
    "Edit Name": "编辑名称",
    "Info": "信息",
    "Currently:": "当前:",
    "Appearance": "外观",
    "How the game looks.": "游戏看起来如何。",
    "Theme": "主题",
    "Show milestones": "显示里程碑",
    "Show TPS meter at the bottom-left corner of the page.": "在页面左下角显示 TPS。",
    "Show TPS": "显示 TPS",
    "None": "无",
    "Align modifier units": "对齐概览单位",
    "Align numbers to the beginning of the unit in modifier view.": "在概览视图中将数字与单元的开头对齐。",
    "Select which milestones to display based on criterias.": "根据标准选择要显示的里程碑。",
    "All": "全部",
    "Classic": "经典",
    "Configurable": "可配置",
    "Duplicate": "复制",
    "Mute": "静音",
    "Unmute": "播放",
    "ring": "戒指",
    "ring slot": "戒指槽位",
    "Stats": "统计",
    "Tools": "工具",
    "Type:": "类型:",
    "Total cost:": "总计成本:",
    "torso slot": "躯干槽位",
    "Your feet slot": "你的脚部槽位",
    "Your off-hand slot": "你的副手槽位",
    "Your legs slot": "你的腿部槽位",
    "Your torso slot": "你的躯干槽位",
    "Your ring slot": "你的戒指槽位",
    "Your head slot": "你的头部槽位",
    "Your arms slot": "你的手臂槽位",
    "Your amulet slot": "你的护身符槽位",
    "amulet": "护身符",
    "amulet slot": "护身符槽位",
    "weapon": "武器",
    "Strength:": "力量:",
    "sword": "剑",
    "other": "其它",
    "Other": "其它",
    "off-hand": "副手",
    "off-hand slot": "副手槽位",
    "Sort by level": "按等级排序",
    "Sort by name": "按名称排序",
    "Sort by value": "按价值排序",
    "Stale bread": "不太新鲜的面包",
    "torso": "躯干",
    "Village": "村庄",
    "Your agility. It affects your evasion chance": "你的敏捷性。 会影响你的闪避几率",
    "Your chance for critical attack": "你的暴击几率",
    "Your defense. Based on worn equipment, lowers damage taken": "你的防御。 根据磨损的装备，降低受到的伤害",
    "= Skills =": "= 技能 =",
    "= Quests =": "= 任务 =",
    "= Data =": "= 数据 =",
    "= Bestiary =": "= 动物寓言 =",
    "[weapon]": "[武器]",
    "[use]": "[使用]",
    "[legs]": "[腿部]",
    "[take off]": "[卸下]",
    "Your strength. It affects power of physical attacks": "你的力量。 影响物理攻击力",
    "Your magic power. It affects damage of magic attacks": "你的魔法力。 影响魔法攻击的伤害",
    "Your intuition. It's necessary for magic, while also providing slight bonus to hit chance and evasion": "你的直觉。 它对于魔法来说是必需的，同时也为命中率和闪避提供了轻微的奖励",
    "Your dexterity. It affects your chance to hit target": "你的灵巧。 它会影响你击中目标的机会",
    "Usable": "可用",
    "usable": "可用",
    "Slot:": "槽位:",
    "Ability to see in darkness": "在黑暗中看得见的能力",
    "arms": "手臂",
    "head slot": "头部槽位",
    "arms slot": "手臂槽位",
    "Area / Combat": "区域 / 战斗",
    "Cancel": "取消",
    "Character": "角色",
    "iron sword": "铁剑",
    "leather pants": "皮裤",
    "Data": "数据",
    "equipment": "装备",
    "Equipment": "装备",
    "head": "头部",
    "Intuition": "直觉",
    "legs slot": "腿部槽位",
    "legs": "腿部",
    "Loot": "战利品",
    "Levels and unlocks": "等级和解锁",
    "Exit": "退出",
    "feet slot": "脚步槽位",
    "feet": "脚部",
    "Magic:": "魔法:",
    "Prices:": "价格:",
    "Quests": "任务",
    "Talk to the village elder": "与村长交谈",
    "Return to last bed upon defeat": "失败后返回上一张床",
    "Remember message log filters": "记住消息日志过滤器",
    "Reduces darkness penalty (except for 'pure darkness') by 70%": "减少 70% 的黑暗惩罚（“纯粹黑暗”除外）",
    "Evasion points, a total value of everything that contributes to the evasion chance, except for some situational skills and modifiers": "躲避点数，所有有助于躲避几率的总价值，除了一些情境技能和修饰符之外",
    "Dexterity:": "灵巧：",
    "Damage of your critical attacks": "你的暴击造成的伤害",
    "Crit rate:": "暴击率:",
    "Combat": "战斗",
    "Medium-sized village surrounded by many fields, some of them infested by rats. Other than that, there's nothing interesting around.": "中等规模的村庄，周围有许多田地，其中一些田地里老鼠出没。 除此之外，周围没有什么有趣的事情。",
    "Base hero xp gain:": "基础英雄经验增益：",
    "Base skill xp gain:": "基础技能经验增益：",
    "Crit mult:": "暴击乘数:",
    "Big piece of an old bread, still edible": "一大块旧面包，还能吃",
    "Bestiary": "动物寓言",
    "normal stance": "正常立场",
    "Defense:": "防御:",
    "Events": "事件",
    "Force uniform size of text in action box": "强制操作框中的文本大小统一",
    "Hard reset the game": "硬重置",
    "Accept": "同意",
    "Active effects:": "当前效果：",
    "Agility:": "敏捷:",
    "all": "全部",
    "Attack speed. Directly affects the attack frequency": "攻击速度。 直接影响攻击频率",
    "Attack power. Based on weapon statistics, strength and/or magic": "攻击力。 基于武器属性、力量和/或魔法",
    "Increases stamina regeneration by +1 for 60 ticks": "60 秒内耐力再生增加 +1",
    "No active effects": "无",
    "Reduces darkness penalty (except for 'pure darkness') by 80%": "黑暗惩罚（“纯粹黑暗”除外）减少 80%",
    "Atk power:": "攻击力：",
    "EP :": "闪避点数：",
    "AP:": "攻击点数：",
    "We don't have anything to spare, but you can talk with our trader. He should be somewhere nearby. If you need money, try selling him some rat remains. Fangs, tails or pelts, he will buy them all. I have no idea what he does with this stuff...": "我们没有多余的东西，但你可以和我们的商人谈谈。 他应该就在附近的某个地方。 如果你需要钱，可以尝试卖给他一些老鼠残骸。 獠牙、尾巴、毛皮，他都会买下来。 我不知道他用这些东西做什么...",
    "Oh yes, quite a big one. Not literally, no, though they are much larger than normal rats... They are a nasty vermin that's really hard to get rid of. And with their numbers they can be seriously life-threatening. Only in a group though, single wolf rat is not much of a threat": "哦，是的，相当大的一个。 不是字面意义上的，不，尽管它们比普通老鼠大得多……它们是一种令人讨厌的害虫，很难摆脱。 由于数量众多，它们可能会严重危及生命。 不过，只有在群体中，单个狼鼠才不会构成太大的威胁",
    "What you need is to recover, to get some rest and maybe also training, as you seem rather frail... Well, you know what? Killing a few wolf rats could be a good exercise. You could help us clear some field of them, how about that?": "你需要的是恢复、休息，也许还需要训练，因为你看起来很虚弱……好吧，你知道吗？ 杀死几只狼鼠可能是一个很好的练习。 你可以帮我们清理一些区域，怎么样？",
    "\"Are there other ways to make money?\"": "“还有其他赚钱的方法吗？”",
    "\"Are wolf rats a big issue?\"": "“狼鼠是个大问题吗？”",
    "\"But I need to leave\"": "“但我需要离开”",
    "\"Can I leave the village?\"": "“我可以离开村子吗？”",
    "\"Great... Thank you for help, but I will leave now.\"": "“太好了……谢谢你的帮助，但我现在就走了。”",
    "\"Hello?\"": "\“你好？\”",
    "\"I don't remember how I got here, what happened?\"": "“我不记得我是怎么来到这里的，发生了什么？”",
    "\"Is there any way I could get a weapon and proper clothes?\"": "“我有什么办法可以获得武器和合适的衣服吗？”",
    "\"Who are you?\"": "\“你是谁？\”",
    "Available from 6 to 20": "6 至 20 可用",
    "Enter the Infested field": "进入被感染的田野",
    "Go back": "返回",
    "Go for a run around the village": "绕村子跑一圈",
    "Hello. Glad to see you got better": "你好。 很高兴看到你好起来",
    "I'm the unofficial leader of this village. If you have any questions, come to me": "我是这个村子的非正式领导。 如果您有任何疑问，请来找我",
    "Nearby lands are dangerous and you are still too weak to leave. Do you plan on getting ambushed again?": "附近的土地很危险，而你仍然太虚弱，无法离开。 你还打算再次遭到伏击吗？",
    "Pays 1": "支付 1",
    "per every 2 h worked": "每工作 2 小时",
    "Some of our people found you unconscious in the forest, with nothing but pants. Must have been bandits.": "我们的一些人发现你在森林里昏迷不醒，除了裤子什么也没有。 一定是土匪。",
    "Trade with village trader": "与乡村商人进行贸易",
    "Try to carry some bags of grain": "尝试搬运几袋粮食",
    "Unlocked activity \"plowing the fields\" in location \"Village\"": "解锁地点“村庄”的活动“耕田”",
    "Unlocked activity \"running\" in location \"Village\"": "在位置“村庄”解锁活动“跑步”",
    "Unlocked activity \"weightlifting\" in location \"Village\"": "在地点“村庄”解锁活动“举重”",
    "Unlocked location Infested field": "解锁地点 被感染的田野",
    "We talked about this, you are still too weak": "我们谈过这个了，你还是太弱了",
    "Work on the fields": "田间劳作",
    "You can now trade with village trader": "您现在可以与村庄商人进行交易",
    "You could help us with some fieldwork. I'm afraid it won't pay too well.": "你可以帮助我们进行一些实地考察。 恐怕报酬不会太高。",
    "Finish running": "完成跑步",
    "Finish weightlifting": "完成举重",
    "Getting 1 xp per in-game minute to Running": "跑步时每分钟获得 1 经验",
    "Getting 1 xp per in-game minute to Farming": "耕田每分钟获得 1 经验",
    "Getting 1 xp per in-game minute to Weightlifting": "举重每分钟获得 1 经验",
    "[off-hand]": "[副手]",
    "[torso]": "[躯干]",
    "[shield]": "[盾牌]",
    "[Book]": "[书籍]",
    "axe": "斧子",
    "battle hammer": "战锤",
    "spear": "矛",
    "Increases health regeneration by +1 for 120 ticks": "120 秒内生命恢复 +1",
    "Increases stamina regeneration by +1 for 120 ticks": "120 秒内耐力恢复 +1",
    "shield": "盾牌",
    "\"ABC for kids\"": "“儿童ABC”",
    "\"Old combat manual\"": "《旧作战手册》",
    "ABC for kids": "儿童ABC",
    "Fresh bread": "新鲜的面包",
    "Freshly baked bread, delicious": "新鲜出炉的面包，好吃",
    "hammer": "锤子",
    "leather vest": "皮背心",
    "Not very potent, but can still make body heal noticeably faster": "不是很有效，但仍然可以使身体愈合得明显更快",
    "nothing": "没有什么",
    "Old book about combat, worn and outdated, but might still contain something useful": "关于战斗的旧书，破旧过时，但可能仍然包含一些有用的东西",
    "Old combat manual": "旧的战斗手册",
    "The simplest book on the market": "市面上最简单的书",
    "Weak healing powder": "弱治愈粉",
    "[ Entering Village ]": "[ 进入村庄 ]",
    "[ Entering Infested field ]": "[ 进入被感染的田野 ]",
    "A completely open area where attack can come from any direction": "完全开放的区域，攻击可以来自任何方向",
    "Attack power:": "攻击力：",
    "Attack speed:": "攻击速度：",
    "base %": "根据 ％",
    "current %": "当前的 ％",
    "Field infested with wolf rats. You can see the grain stalks move as these creatures scurry around.": "田野里满是狼鼠。 当这些生物四处奔走时，您可以看到谷物秸秆移动。",
    "Go back to Village": "回到村庄",
    "Health:": "生命值：",
    "Hero evaded an attack": "英雄躲避了攻击",
    "Increases xp gains of all weapon skills of level lower than this, x1.1 per level of difference": "增加低于此等级的所有武器技能的经验值增益，每级差异 x1.1",
    "Infested field": "被感染的田地",
    "Item name": "物品名称",
    "Loot list:": "战利品清单：",
    "Mastery of all weapons": "精通所有武器",
    "open": "打开",
    "Overall combat ability": "综合作战能力",
    "Rat fang": "鼠牙",
    "Rat pelt": "鼠皮",
    "Rat tail": "鼠尾",
    "Rat with size of a dog, starved and weakened": "老鼠大小如狗，饥饿且虚弱",
    "Reduces environmental penalty in open areas by 0%": "开放区域的环境惩罚减少 0%",
    "Small enemies might not seem very dangerous, but it's not that easy to hit them!": "小敌人看似不太危险，但想要击中却可没那么容易！",
    "Starving wolf rat": "饥饿的狼鼠",
    "Starving wolf rat was defeated": "饥饿的狼鼠被击败",
    "Stats:": "统计：",
    "The noble art of swordsmanship": "高贵的剑术",
    "Understanding where you are in relation to other creatures and objects": "了解您相对于其他生物和物体的位置",
    "Combat": "战斗",
    "Pest killer": "害虫杀手",
    "Spatial awareness": "空间感知",
    "Swordsmanship": "剑术",
    "Weapon mastery": "武器精通",
    "Wolf rat": "狼鼠",
    "Great way to improve the efficiency of the body": "提高身体效率的好方法",
    "Running": "跑步",
    "Thanks to Running reaching new milestone, Hero gained:": "由于跑步达到新的里程碑，英雄获得了：",
    "Finish plowing the fields": "完成耕田工作",
    "plowing the fields": "耕田工作",
    "Even a simple action of plowing some fields, can be performed better with skills and experience": "即使是耕田这样一个简单的动作，通过技巧和经验也可以做得更好",
    "weapon slot": "武器槽",
    "Your weapon slot": "你的武器槽",
    "[equip]": "[装备]",
    "No better way to get stronger than by lifting heavy things": "没有比举重物更好的增强力量的方法了",
    "Thanks to Weightlifting reaching new milestone, Hero gained:": "由于举重达到了新的里程碑，英雄获得了：",
    "Ability to evade attacks": "躲避攻击的能力",
    "Weightlifting": "举重",
    "Evasion": "闪避",
    "Hero has missed": "英雄未命中",
    "Rat with size of a dog": "老鼠有狗那么大",
    "Wolf rat was defeated": "狼鼠被击败了",
    "Hero has lost consciousness": "英雄失去了知觉",
    "Thanks to Swordsmanship reaching new milestone, Hero gained:": "由于剑术达到了新的里程碑，英雄获得了：",
    "Thanks to Evasion reaching new milestone, Hero gained:": "由于闪避达到了新的里程碑，英雄获得了：",
    "Fang of a huge rat, not very sharp, but can still pierce a human skin if enough force is applied": "巨大老鼠的尖牙，不是很锋利，但如果用力足够，仍然可以刺穿人的皮肤",
    "Thanks to Pest killer reaching new milestone, Hero gained:": "由于害虫杀手达到了新的里程碑，英雄获得了：",
    "Maybe you should check on village elder...": "或许你应该去问问村长...",
    "Being tired is not a reason to give up": "累不是放弃的理由",
    "Tail of a huge rat, doesn't seem very useful, but maybe someone would buy it": "大老鼠的尾巴，看起来没什么用，但也许会有人买",
    "You did? That's good. How about a stronger target? Nearby cave is just full of this vermin. Before that, maybe get some sleep? Some folks prepared that shack over there for you. It's clean, it's dry, and it will give you some privacy.": "你做到了吗？ 那挺好的。 更强大的目标怎么样？ 附近的洞穴里充满了这种害虫。 在那之前，也许先睡一会儿？ 那边有人为你准备了那个小屋。 它干净、干燥，而且会给你一些隐私。",
    "\"I cleared the field, just as you asked me to\"": "“我按照你的要求清理了场地”",
    "[ Entering Cave room ]": "[进入洞室]",
    "[ Entering Nearby cave ]": "[进入附近的洞穴]",
    "[ Entering Shack ]": "[进入小屋]",
    "A big cave near the village, once used as a storeroom. Groups of fluorescent mushrooms cover the walls, providing a dim light. You can hear sounds of rats from.": "村子附近的一个大山洞，曾经被用作储藏室。 成群的荧光蘑菇覆盖在墙壁上，发出昏暗的光线。 你可以听到老鼠的声音。",
    "A place that's always lit, no matter the time of the day": "一个无论一天中的什么时间都始终灯火通明的地方",
    "A very narrow and tight area where there's not much place for maneuvering": "非常狭窄和紧凑的区域，没有太多的操作空间",
    "Cave room": "洞穴房",
    "Enter the Cave room": "进入洞穴房间",
    "Go back to entrance": "返回入口处",
    "Go outside": "到外面去",
    "Go outside and to the village": "到外面去，到村里去",
    "Go to Nearby cave": "前往附近的洞穴",
    "Go to Shack": "前往小屋",
    "Good, regular sleep is the basis of getting stronger and helps your body heal.": "良好、规律的睡觉是变得更强壮的基础，有助于身体康复。",
    "It's full of rats. At least the glowing mushrooms provide some light.": "里面全是老鼠。 至少发光的蘑菇提供了一些光线。",
    "Learn how to fight in narrow environment, where there's not much space for dodging attacks": "学习如何在狭窄的环境中战斗，那里没有太多的空间来躲避攻击",
    "Nearby cave": "附近的洞穴",
    "[Cave room]": "[洞穴室]",
    "[Infested field]": "[被感染的领域]",
    "[Shack]": "[窝棚]",
    "Shack": "窝棚",
    "Take a nap": "睡个午觉",
    "This small shack was the only spare building in the village. It's surprisingly tidy.": "这个小棚屋是村里唯一的闲置建筑。 出奇的整齐。",
    "Tight maneuvers": "紧密动作",
    "Unlocked location Nearby cave": "解锁地点 附近洞穴",
    "Unlocked location Shack": "解锁地点棚屋",
    "Wake up": "起床",
    "You still need to get stronger.": "你还需要变得更强。",
    "bright": "明亮",
    "narrow": "狭窄",
    "dagger": "匕首",
    "Saved the game manually": "手动保存了游戏",
    "Thanks to Spatial awareness reaching new milestone, Hero gained:": "由于空间感知达到了新的里程碑，英雄 获得了：",
    "Thanks to Persistence reaching new milestone, Hero gained:": "由于持久达到了新的里程碑，英雄 获得了：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "bed": "bed",
    "directions": "directions",
    "construction": "construction",
    "storefront": "storefront",
    "fitness_center": "fitness_center",
    "warning_amber": "warning_amber",
    "arrow_back": "arrow_back",
    "question_answer": "question_answer",
    "help_outline": "help_outline",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "v0.3.5i": "v0.3.5i",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Scientific": "科学计数法",
    "Standard": "标准",
    "Blind": "盲文",
    "Letters": "字母",
    "Mixed Engineering": "混合工程",
    "Mixed Scientific": "混合科学",
    "Chemistry": "化学",
    "Engineering": "工程符号",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'i': 'i',
    'I': 'I',
    'II': 'I',
    'III': 'III',
    'IV': 'IV',
    'V': 'V',
    'VI': 'VI',
    'VII': 'VII',
    'VIII': 'VIII',
    'X': 'X',
    'XI': 'XI',
    'XII': 'XII',
    'XIII': 'XIII',
    'XIV': 'XIV',
    'XV': 'XV',
    'XVI': 'XVI',
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F',
    'G': 'G',
    'H': 'H',
    'I': 'I',
    'J': 'J',
    'K': 'K',
    'L': 'L',
    'M': 'M',
    'N': 'N',
    'O': 'O',
    'P': 'P',
    'Q': 'Q',
    'R': 'R',
    'S': 'S',
    'T': 'T',
    'U': 'U',
    'V': 'V',
    'W': 'W',
    'X': 'X',
    'Y': 'Y',
    'Z': 'Z',
    '<': '<',
    '<<': '<<',
    '>': '>',
    '>>': '>>',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀，此处可以截取语句开头部分的内容进行汉化
//例如：Coin: 13、Coin: 14、Coin: 15... 这种有相同开头的语句
//可以在这里汉化开头："Coin: ":"金币: "
var cnPrefix = {
    "\n                                    ": "\n                                    ",
    "\n                                ": "\n                                ",
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": " ",
    " ": " ",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\n": "\n",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Notation: ": "符号: ",
    "Toggle Music: ": "切换声音: ",
    "Night vision : level ": "夜视：等级 ",
    "Quality: ": "质量：",
    "Crit rate +": "暴击率 +",
    "Cheap ": "便宜的",
    "wooden ": "木",
    "iron ": "铁",
    "Crude wooden ": "粗木",
    "Atk pwr: ": "攻击力：",
    "Atk spd:": "攻击速度：",
    "Attack speed x": "攻击速度 x",
    "\n": "\n",
    "EP:": "闪避点数：",
    "Carring heavy things": "搬运重物",
    "Just running around": "只是到处乱跑",
    "Agility +": "敏捷 +",
    "Hit: ": "命中：",
    "Weapon mastery : level ": "武器精通：等级 ",
    "Unlocked new skill: ": "解锁新技能：",
    "Ddg: ": "Ddg: ",
    "Pest killer : level ": "害虫杀手：等级 ",
    "Base xp value: ": "基础经验值：",
    "Combat : level ": "战斗：等级 ",
    "Spatial awareness : level ": "空间感知：等级 ",
    "Swordsmanship : level ": "剑术：等级 ",
    "Multiplies damage dealt with swords by ": "剑造成的伤害乘以 ",
    "Multiplies hit chance against small-type enemies by ": "对小型敌人的命中率提高 ",
    "Multiplies hit chance by ": "命中率乘以 ",
    "Multiplies strength by ": "力量乘以 ",
    "Parent skill: ": "家长技能：",
    "Multiplies max stamina by ": "最大耐力乘以 ",
    "Running : level ": "跑步 : 等级 ",
    "Weightlifting has reached level ": "举重达到等级 ",
    "Swordsmanship has reached level ": "剑术达到等级 ",
    "Running has reached level ": "跑步达到等级 ",
    "Working on the fields": "田间劳作",
    "(earnings: ": "(获得了: ",
    "Farming : level ": "耕田 : 等级",
    "Hero earned ": "英雄赚取了 ",
    "Weightlifting : level ": "举重：等级 ",
    "Hero finished ": "英雄完成了 ",
    "Evasion : level ": "闪避：等级 ",
    "Multiplies your evasion chance by ": "使你的躲避几率乘以 ",
    "Evasion has reached level ": "闪避已达到等级 ",
    "Reduces environmental penalty in open areas by ": "减少开放区域的环境惩罚 ",
    "Spatial awareness has reached level ": "空间感知已经达到等级 ",
    "Combat has reached level ": "战斗达到等级 ",
    "Looted Rat fang": "被掠夺的鼠牙",
    "Weapon mastery has reached level ": "武器精通已达到等级 ",
    "Pest killer has reached level ": "害虫杀手已达到等级 ",
    "Persistence : level ": "持久：等级",
    "[originally ": "[起初 ",
    "Agility increased by ": "敏捷增加 ",
    "HP increased by ": "生命值增加 ",
    "Dexterity increased by ": "灵巧增加 ",
    "Hero is getting stronger. Reached level ": "英雄越来越强了。 达到等级 ",
    "Looted Rat tail": "被掠夺的老鼠尾巴",
    "Tight maneuvers : level ": "紧密动作：等级 ",
    "Reduces environmental penalty in narrow areas by ": "减少狭窄区域的环境惩罚 ",
    "Sleeping : level ": "睡觉 : 等级 ",
    "Sleeping": "睡觉",
    "Quick return to ": "快速返回到 ",
    "Tight maneuvers has reached level ": "紧密动作达到了等级 ",
    "Persistence has reached level ": "持久已经达到等级 ",
    "Intuition increased by ": "直觉增加 ",
    "Strength increased by ": "力量增加 ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀，此处可以截取语句结尾部分的内容进行汉化
//例如：13 Coin、14 Coin、15 Coin... 这种有相同结尾的语句
//可以在这里汉化结尾：" Coin":" 金币"
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "/sec)": "/秒)",
    "Enemy groups left: ": "剩余敌人：",
    "Enemy groups left:": "剩余敌人：",
    "No active effects            ": "无",
    "Attack points, a total value of everything that contributes to the chance to hit an enemy, except for some situational skills and modifiers.": "攻击点，即所有有助于击中敌人的机会的总价值，除了一些情境技能和修饰符之外。",
    ": ???": ": ???",
    "nothing)": "无)",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\$([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^防御(.+)$/,
    /^等级(.+)$/,
    /^攻击(.+)$/,
    /^价值(.+)$/,
    /^便宜(.+)$/,
    /^质量(.+)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+) T$/,
    /^([\d\.]+) Qi$/,
    /^([\d\.]+) Qa$/,
    /^([\d\.]+)s$/,
    /^ ([\d\.]+)$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\$([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+) \/ ([\d\.]+)e([\d\.,]+)$/,
    /^\$([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Obtained (.+) for clearing (.+) for the first time$/, '首次清除 $1 获得 $2 经验值'],
    [/^Obtained additional (.+) for clearing (.+)$/, '清理 $1 获得额外 $2 经验值'],
    [/^Reduces low stamina penalty by (.+) percentage points$/, '减少低耐力惩罚 $1 个百分点'],
	[/^([\d\.]+)\/([\d\.]+) xp$/, '$1\/$2 经验值'],
	[/^([\d\.]+)\/([\d\.]+) hp$/, '$1\/$2 生命值'],
	[/^([\d\.]+)\/([\d\.]+) stamina$/, '$1\/$2 耐力'],
	[/^([\d\.]+)\/([\d\.]+) mana$/, '$1\/$2 法力'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^Def: ([\d\.]+)$/, '防御: $1'],
    [/^Defense: ([\d\.]+)$/, '防御: $1'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^XP gain: x([\d\.,]+)$/, '经验增益: x$1'],
    [/^AP  ([\d\.,]+)$/, '攻击点数 $1'],
    [/^Value: ([\d\.,]+)$/, '价值: $1'],
    [/^Atk spd: ([\d\.,]+)$/, '攻击速度: $1'],
    [/^Attack: ([\d\.,]+)$/, '攻击: $1'],
    [/^lvl ([\d\.,]+)$/, '等级 $1'],
    [/^lvl ([\d\.,]+): \+([\d\.,]+) dex$/, '等级 $1：\+$2 灵巧'],
    [/^lvl ([\d\.,]+): \+([\d\.,]+) str$/, '等级 $1：\+$2 力量'],
    [/^lvl ([\d\.,]+): \+([\d\.,]+) agl$/, '等级 $1：\+$2 敏捷'],
    [/^lvl ([\d\.,]+): \+([\d\.,]+) stamina$/, '等级 $1：\+$2 耐力'],
    [/^lvl ([\d\.,]+): \+([\d\.,]+) int$/, '等级 $1：\+$2 直觉'],
    [/^lvl ([\d\.,]+): x([\d\.,]+) Combat xp gain$/, '等级 $1：x$2 战斗经验增益'],
    [/^x([\d\.]+) Shield blocking xp gain$/, 'x$1 盾牌格挡经验增益'],
    [/^x([\d\.]+) Evasion xp gain$/, 'x$1 闪避经验增益'],
    [/^x([\d\.]+) Combat xp gain$/, 'x$1 战斗经验增益'],
    [/^x([\d\.]+) all skill xp gain$/, 'x$1 所有技能经验增益'],
    [/^x([\d\.]+) agl$/, 'x$1 敏捷'],
    [/^\nlvl ([\d\.,]+): \+([\d\.,]+) int$/, '\n等级 $1：\+$2 直觉'],
    [/^\nlvl ([\d\.,]+): \+([\d\.,]+) agl$/, '\n等级 $1：\+$2 敏捷'],
    [/^\nlvl ([\d\.,]+): \+([\d\.,]+) str$/, '\n等级 $1：\+$2 力量'],
    [/^\nlvl ([\d\.,]+): \+([\d\.,]+) dex, x(.+) Combat xp gain$/, '\n等级 $1：\+$2 闪避, x$3 战斗经验增益'],
    [/^lvl ([\d\.,]+): \+([\d\.,]+) stamina, x(.+) all skill xp gain$/, '\n等级 $1：\+$2 耐力, x$3 所有技能经验增益'],
    [/^\nlvl ([\d\.,]+): x([\d\.,]+) int, x([\d\.,]+) Combat xp gain$/, '\n等级 $1：x$2 直觉，x$3 战斗经验增益'],
    [/^lvl ([\d\.,]+): x([\d\.,]+) Evasion xp gain, x([\d\.,]+) Shield blocking xp gain$/, '等级 $1：x$2 闪避经验增益，x$3 盾牌格挡经验增益'],
    [/^\nlvl ([\d\.,]+): x([\d\.,]+) Evasion xp gain, x([\d\.,]+) Shield blocking xp gain$/, '\n等级 $1：x$2 闪避经验增益，x$3 盾牌格挡经验增益'],
    [/^Lvl: ([\d\.,]+)$/, '等级: $1'],
    [/^Starving wolf rat was critically hit for ([\d\.,]+) dmg$/, '饥饿的狼鼠遭到重击受到 $1 点伤害'],
    [/^Wolf rat was critically hit for ([\d\.,]+) dmg$/, '狼鼠遭到重击受到 $1 点伤害'],
    [/^Hero was critically hit for ([\d\.,]+) dmg$/, '英雄遭到重击受到 $1 点伤害'],
    [/^Can block up to ([\d\.,]+) damage$/, '最多可以格挡 $1 点伤害'],
    [/^Level: ([\d\.,]+)$/, '等级：$1'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^Time to read: ([\d\.,]+) minutes$/, '阅读时间：$1 分钟'],
    [/^Your purse contains: ([\d\.,]+)$/, '你的钱包里有：$1'],
    [/^Hero was hit for (.+) dmg$/, '英雄被击中并受到 $1 伤害'],
    [/^Wolf rat was hit for (.+) dmg$/, '狼鼠被击中并受到 $1 伤害'],
    [/^Starving wolf rat was hit for (.+) dmg$/, '饥饿的狼鼠被击中并受到 $1 伤害'],
    [/^Monday (.+)$/, '星期一 $1'],
    [/^Tuesday (.+)$/, '星期二 $1'],
    [/^Wednesday (.+)$/, '星期三 $1'],
    [/^Thursday (.+)$/, '星期四 $1'],
    [/^Friday (.+)$/, '星期五 $1'],
    [/^Saturday (.+)$/, '星期六 $1'],
    [/^Sunday (.+)$/, '星期日 $1'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);