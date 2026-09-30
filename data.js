/* ============================ Zhuyin mapping ============================ */
const KEY_TO_ZHUYIN = {
  "1": "ㄅ", "2": "ㄉ", "3": "ˇ", "4": "ˋ", "5": "ㄓ", "6": "ˊ", "7": "˙", "8": "ㄚ", "9": "ㄞ", "0": "ㄢ", "-": "ㄦ",
  "q": "ㄆ", "w": "ㄊ", "e": "ㄍ", "r": "ㄐ", "t": "ㄔ", "y": "ㄗ", "u": "ㄧ", "i": "ㄛ", "o": "ㄟ", "p": "ㄣ",
  "a": "ㄇ", "s": "ㄋ", "d": "ㄎ", "f": "ㄑ", "g": "ㄕ", "h": "ㄘ", "j": "ㄨ", "k": "ㄜ", "l": "ㄠ", ";": "ㄤ",
  "z": "ㄈ", "x": "ㄌ", "c": "ㄏ", "v": "ㄒ", "b": "ㄖ", "n": "ㄙ", "m": "ㄩ", ",": "ㄝ", ".": "ㄡ", "/": "ㄥ", " ": " "
};

/* Character -> Zhuyin spelling (ordered symbols incl. tone mark) used to build practice sequences */
const CHAR_ZHUYIN = {
  "你": "ㄋㄧˇ", "好": "ㄏㄠˇ", "謝": "ㄒㄧㄝˋ", "早": "ㄗㄠˇ", "安": "ㄢ", "晚": "ㄨㄢˇ",
  "再": "ㄗㄞˋ", "見": "ㄐㄧㄢˋ", "中": "ㄓㄨㄥ", "文": "ㄨㄣˊ", "學": "ㄒㄩㄝˊ", "生": "ㄕㄥ",
  "老": "ㄌㄠˇ", "師": "ㄕ", "朋": "ㄆㄥˊ", "友": "ㄧㄡˇ", "電": "ㄉㄧㄢˋ", "腦": "ㄋㄠˇ",
  "台": "ㄊㄞˊ", "灣": "ㄨㄢ", "國": "ㄍㄨㄛˊ", "手": "ㄕㄡˇ", "機": "ㄐㄧ", "天": "ㄊㄧㄢ",
  "氣": "ㄑㄧˋ", "時": "ㄕˊ", "間": "ㄐㄧㄢ", "快": "ㄎㄨㄞˋ", "樂": "ㄌㄜˋ", "喜": "ㄒㄧˇ",
  "歡": "ㄏㄨㄢ", "工": "ㄍㄨㄥ", "作": "ㄗㄨㄛˋ", "嗎": "ㄇㄚ˙", "我": "ㄨㄛˇ", "是": "ㄕˋ",
  "很": "ㄏㄣˇ", "難": "ㄋㄢˊ", "今": "ㄐㄧㄣ", "愛": "ㄞˋ", "祝": "ㄓㄨˋ", "幾": "ㄐㄧˇ",
  "點": "ㄉㄧㄢˇ", "了": "ㄌㄜ˙", "的": "ㄉㄜ˙", "和": "ㄏㄢˋ", "都": "ㄉㄡ", "用": "ㄩㄥˋ",
  "日": "ㄖˋ", "上": "ㄕㄤˋ", "現": "ㄒㄧㄢˋ", "在": "ㄗㄞˋ",

  "一": "ㄧ", "二": "ㄦˋ", "三": "ㄙㄢ", "四": "ㄙˋ", "五": "ㄨˇ", "六": "ㄌㄧㄡˋ",
  "七": "ㄑㄧ", "八": "ㄅㄚ", "九": "ㄐㄧㄡˇ", "十": "ㄕˊ",

  "爸": "ㄅㄚˋ", "媽": "ㄇㄚ", "哥": "ㄍㄜ", "姐": "ㄐㄧㄝˇ", "弟": "ㄉㄧˋ", "妹": "ㄇㄟˋ", "家": "ㄐㄧㄚ", "人": "ㄖㄣˊ",

  "請": "ㄑㄧㄥˇ", "問": "ㄨㄣˋ", "說": "ㄕㄨㄛ", "話": "ㄏㄨㄚˋ", "對": "ㄉㄨㄟˋ",
  "起": "ㄑㄧˇ", "沒": "ㄇㄟˊ", "關": "ㄍㄨㄢ", "係": "ㄒㄧˋ", "不": "ㄅㄨˋ", "他": "ㄊㄚ", "她": "ㄊㄚ",

  "年": "ㄋㄧㄢˊ", "月": "ㄩㄝˋ", "星": "ㄒㄧㄥ", "期": "ㄑㄧˊ", "分": "ㄈㄣ",
  "鐘": "ㄓㄨㄥ", "午": "ㄨˇ", "夜": "ㄧㄝˋ",

  "紅": "ㄏㄨㄥˊ", "藍": "ㄌㄢˊ", "綠": "ㄌㄩˋ", "黃": "ㄏㄨㄤˊ", "黑": "ㄏㄟ", "白": "ㄅㄞˊ", "色": "ㄙㄜˋ",

  "店": "ㄉㄧㄢˋ", "市": "ㄕˋ", "公": "ㄍㄨㄥ", "司": "ㄙ", "路": "ㄌㄨˋ", "校": "ㄒㄧㄠˋ", "房": "ㄈㄤˊ", "書": "ㄕㄨ",

  "飯": "ㄈㄢˋ", "茶": "ㄔㄚˊ", "菜": "ㄘㄞˋ", "肉": "ㄖㄡˋ", "魚": "ㄩˊ", "蛋": "ㄉㄢˋ", "麵": "ㄇㄧㄢˋ", "糖": "ㄊㄤˊ", "水": "ㄕㄨㄟˇ",

  "雨": "ㄩˇ", "風": "ㄈㄥ", "雲": "ㄩㄣˊ", "雪": "ㄒㄩㄝˇ", "花": "ㄏㄨㄚ", "草": "ㄘㄠˇ", "樹": "ㄕㄨˋ", "海": "ㄏㄞˇ", "山": "ㄕㄢ",

  "走": "ㄗㄡˇ", "跑": "ㄆㄠˇ", "看": "ㄎㄢˋ", "聽": "ㄊㄧㄥ", "吃": "ㄔ", "喝": "ㄏㄜ",
  "睡": "ㄕㄨㄟˋ", "覺": "ㄐㄧㄠˋ", "買": "ㄇㄞˇ", "賣": "ㄇㄞˋ", "唱": "ㄔㄤˋ", "跳": "ㄊㄧㄠˋ", "笑": "ㄒㄧㄠˋ", "哭": "ㄎㄨ",

  "高": "ㄍㄠ", "矮": "ㄞˇ", "胖": "ㄆㄤˋ", "瘦": "ㄕㄡˋ", "新": "ㄒㄧㄣ", "舊": "ㄐㄧㄡˋ", "美": "ㄇㄟˇ", "麗": "ㄌㄧˋ",

  "下": "ㄒㄧㄚˋ", "大": "ㄉㄚˋ", "小": "ㄒㄧㄠˇ", "狗": "ㄍㄡˇ", "貓": "ㄇㄠ", "鳥": "ㄋㄧㄠˇ", "明": "ㄇㄧㄥˊ", "昨": "ㄗㄨㄛˊ",

  "會": "ㄏㄨㄟˋ", "可": "ㄎㄜˇ", "有": "ㄧㄡˇ", "多": "ㄉㄨㄛ", "邊": "ㄅㄧㄢ", "班": "ㄅㄢ",
  "們": "ㄇㄣ˙", "來": "ㄌㄞˊ", "呢": "ㄋㄜ˙", "比": "ㄅㄧˇ", "去": "ㄑㄩˋ"
};

/* ============================ Content pools ============================ */
const EN_POOL = {
  easy: [
    "the quick brown fox jumps over the lazy dog",
    "she sells seashells by the seashore",
    "practice makes perfect every single day",
    "i like to read books in the sun",
    "cats and dogs are common pets",
    "the sun rises in the east every morning",
    "my favorite color is blue like the sky",
    "we went to the park to play with the ball",
    "birds sing sweetly in the tall green trees",
    "she likes to drink warm tea at night",
    "the small dog ran fast across the yard",
    "he wrote his name on the white paper",
    "we eat breakfast before we go to school",
    "the rain fell softly on the quiet roof",
    "i can see the moon from my window",
    "they walked slowly along the sandy beach",
    "the baby smiled at her loving mother",
    "our teacher gave us a fun new project",
    "the river flows gently through the valley",
    "she painted a picture of a red rose",
    "the children played happily in the snow",
    "he likes to ride his bike every weekend",
    "the coffee shop opens early in the morning",
    "a gentle wind blew through the open window",
    "the cat slept quietly on the soft blanket"
  ],
  medium: [
    "the five boxing wizards jump quickly to finish the job",
    "programming is the art of solving problems with code",
    "a journey of a thousand miles begins with a single step",
    "typing fast requires patience, practice, and focus every day",
    "the weather today is sunny with a gentle breeze from the sea",
    "learning a new skill takes time, effort, and steady practice",
    "the internet connects people from every corner of the world",
    "good habits are built slowly through small daily choices",
    "the museum displayed ancient artifacts from many civilizations",
    "reading books before bed can improve focus and memory",
    "the mountain trail was steep, rocky, and full of surprises",
    "scientists discovered a new species of fish in the deep ocean",
    "the orchestra played a beautiful symphony for the audience",
    "planning ahead helps you manage your time more effectively",
    "the chef prepared a delicious meal using fresh local ingredients",
    "traveling to new places broadens your view of the world",
    "the library was quiet except for the sound of turning pages",
    "regular exercise improves both physical and mental health",
    "the engineer designed a bridge that could withstand strong winds",
    "students gathered in the hall to hear the guest speaker",
    "the garden bloomed with colorful flowers after the spring rain",
    "a balanced diet includes fruits, vegetables, and whole grains",
    "the pilot announced that the flight would land shortly",
    "volunteers worked together to clean up the local park",
    "the novel tells a story of courage, hope, and friendship"
  ],
  hard: [
    "amazingly few discotheques provide jukeboxes for quiet nights",
    "success is not final, failure is not fatal, it is the courage to continue that counts",
    "in the middle of every difficulty lies an opportunity waiting to be discovered",
    "the only way to do great work is to love what you do, so keep typing",
    "consistency and patience will turn ordinary practice into extraordinary skill",
    "the greatest glory in living lies not in never falling, but in rising every time we fall",
    "an investment in knowledge always pays the best interest, no matter the circumstances",
    "the future belongs to those who believe in the beauty of their dreams and pursue them daily",
    "it does not matter how slowly you go, as long as you do not stop moving forward",
    "the mind is everything, what you think you become, so choose your thoughts wisely",
    "whether you think you can or you think you cannot, you are usually right either way",
    "the best time to plant a tree was twenty years ago, the second best time is now",
    "difficult roads often lead to beautiful destinations, so keep walking with patience",
    "the expert in anything was once a beginner who refused to give up on their goals",
    "innovation distinguishes between a leader and a follower in any competitive field",
    "quality is never an accident, it is always the result of intelligent effort and care",
    "the journey of mastering a skill requires countless hours of deliberate, focused practice",
    "great things are never done alone, they are done through a series of small collaborations",
    "a reader lives a thousand lives before dying, while the non reader lives only one",
    "the pessimist sees difficulty in every opportunity, the optimist sees opportunity in every difficulty",
    "not everything that is faced can be changed, but nothing can be changed until it is faced",
    "the difference between ordinary and extraordinary is often just that little extra effort",
    "true resilience is not about avoiding failure, it is about learning to rise after every fall",
    "the beauty of learning is that no one can ever take it away from you completely",
    "patience, persistence, and perspiration make an unbeatable combination for real success"
  ]
};

const ZH_POOL = {
  easy: [
    "你好", "謝謝", "早安", "晚安", "再見", "中文", "學生", "老師", "朋友", "電腦",
    "爸爸", "媽媽", "哥哥", "姐姐", "弟弟", "妹妹", "家人", "一二三", "四五六", "七八九",
    "紅色", "藍色", "綠色", "黃色", "黑色", "白色", "看書", "吃飯", "喝茶", "喝水",
    "下雨", "起風", "下雪", "看海", "大樹", "小狗", "小貓", "小鳥", "大山", "上山",
    "下山", "早上", "晚上", "中午", "今天", "明天", "昨天", "老人", "新家", "新書"
  ],
  medium: [
    "台灣中國", "手機電腦", "天氣時間", "生日快樂", "喜歡工作", "你好嗎", "謝謝你", "我是學生", "中文很難", "早上好",
    "爸爸媽媽", "哥哥姐姐", "弟弟妹妹", "紅花綠草", "藍天白雲", "黑貓白狗", "看書睡覺", "吃飯喝茶", "吃飯喝水", "買菜買肉",
    "下雨下雪", "起風下雨", "看海看山", "上山下山", "早上中午", "中午晚上", "今天明天", "明天早上", "昨天晚上", "老師學生",
    "新書舊書", "新家老家", "高山大海", "高的矮的", "胖的瘦的", "美麗的花", "紅色的書", "藍色的天", "黑色的貓", "白色的雲",
    "你好老師", "謝謝老師", "請問老師", "請問幾點", "現在幾點", "對不起", "沒關係", "你說我聽", "我在說話", "他在看書"
  ],
  hard: [
    "今天天氣很好", "我愛你中文", "祝你生日快樂", "現在幾點了", "謝謝你的朋友", "中文老師很好", "我喜歡學中文", "電腦和手機都好用",
    "今天天氣不好", "昨天下雨了", "明天會下雪嗎", "我的家人很好", "爸爸媽媽在家", "哥哥在看書", "姐姐在喝茶", "弟弟在吃飯",
    "妹妹在睡覺", "老師請你看書", "老師和學生都很好", "我家的小狗很可愛", "他的貓是白色的", "她的狗是黑色的", "山上有很多樹", "海邊的風很大",
    "今天是我的生日", "祝你新年快樂", "現在是晚上八點", "我在公司上班", "他在學校看書", "我們在家吃飯", "你們是好朋友", "我們都是學生",
    "謝謝你們都來了", "現在幾點了呢", "老師說中文很難", "我喜歡喝茶不喜歡喝水", "小貓和小狗都很可愛", "今天天氣比昨天好", "我們一起去看海", "祝你們生日都快樂"
  ]
};

/* ============================ Keyboard layout ============================ */
const ROWS = [
  ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
  ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
  ["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"],
  ["ShiftLeft", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "ShiftRight"],
  [" "]
];
const KEY_WIDTH = { "Backspace": 2, "Tab": 1.5, "CapsLock": 1.8, "Enter": 2.2, "ShiftLeft": 2.4, "ShiftRight": 2.4, " ": 8 };
const SPECIAL_LABEL = { "Backspace": "⌫", "Tab": "Tab", "CapsLock": "Caps", "Enter": "Enter", "ShiftLeft": "Shift", "ShiftRight": "Shift", " ": "Space" };
const SPECIAL_IDS = new Set(["Backspace", "Tab", "CapsLock", "Enter", "ShiftLeft", "ShiftRight"]);
