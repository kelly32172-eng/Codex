let currentLang = 'zh';

const uiTranslations = {
  zh: {
    title: '魔法星空抓周派對：尋找寶貝的專屬超能力🔮',
    heroQuote: '抓周，不只是延續千年的溫暖祝福，\n更是寶貝探索世界的第一步。',
    heroBody: '在這片魔法星空中，我們把古老抓周與 MBTI 靈感結合，透過 18 個充滿寓意的魔法道具，陪你一起解鎖寶貝與生俱來的性格密碼與靈魂天賦。',
    heroGuide: '輸入寶寶的小名與星座，開始這趟專屬的星際探索吧。',
    nameLabel: '寶寶小名',
    namePlaceholder: '請輸入寶寶小名',
    zodiacLabel: '星座',
    zodiacPlaceholder: '請選擇星座',
    startBtn: '開始測驗',
    prevBtn: '上一關',
    nextBtn: '下一關',
    restartBtn: '重新測驗',
    roundProgress: '第 {{current}} 關 / 共 {{total}} 關',
    roundInterest: '第一關｜先被哪顆星星選中',
    roundAbility: '第二關｜天賦的光正在顯現',
    roundPersonality: '第三關｜最後的答案慢慢清晰',
    roundInterestDesc: '看看寶寶最先對哪個小宇宙心動🪐',
    roundAbilityDesc: '從細微反應裡 找到寶寶與生俱來的獨特閃光🌠',
    roundPersonalityDesc: '當所有線索拼在一起 專屬於寶寶的樣子就會出現🔭',
    selectedPrefix: '已選擇：',
    notSelected: '尚未選擇',
    alertProfileRequired: '請先輸入寶寶小名與星座',
    alertPickRequired: '本關請先選 1 個道具',
    reportName: '{{name}} 的專屬結果圖卡',
    resultSealTitle: '抓周印記',
    resultDimensionTitle: '2x2 四向度解析',
    resultAnalysisTitle: 'MBTI 深度分析',
    resultZodiacTitle: '星座加成效應',
    resultCareerTitle: '未來職業參考',
    resultParentingTitle: '爸媽教養建議'
  },
  en: {
    title: 'Magical Starry Zhua Zhou: Discover Your Baby’s Superpowers 🔮',
    heroQuote: 'Zhua Zhou is not only a timeless blessing,\nit is also your baby’s first step into exploring the world.',
    heroBody: 'In this magical starry sky, we blend the ancient Zhua Zhou ritual with MBTI inspiration. Through 18 symbolic magical props, discover your baby’s natural personality code and soul gifts.',
    heroGuide: 'Enter your baby’s nickname and zodiac sign to begin this personalized interstellar journey.',
    nameLabel: "Baby's Nickname",
    namePlaceholder: 'Enter nickname',
    zodiacLabel: 'Zodiac Sign',
    zodiacPlaceholder: 'Choose zodiac sign',
    startBtn: 'Start Journey',
    prevBtn: 'Previous',
    nextBtn: 'Next',
    restartBtn: 'Restart',
    roundProgress: 'Round {{current}} / {{total}}',
    roundInterest: 'Round 1 | Which Star Finds Your Baby First',
    roundAbility: 'Round 2 | A Gift Begins to Glow',
    roundPersonality: 'Round 3 | The Answer Comes into View',
    roundInterestDesc: 'See which little universe your baby falls for first 🪐',
    roundAbilityDesc: 'In the tiniest reactions, your baby’s natural sparkle starts to show 🌠',
    roundPersonalityDesc: 'When every clue comes together, your baby’s one-of-a-kind shape appears 🔭',
    selectedPrefix: 'Selected: ',
    notSelected: 'No selection yet',
    alertProfileRequired: 'Please enter nickname and zodiac sign first.',
    alertPickRequired: 'Please select one item in this round first.',
    reportName: "{{name}}'s Personality Report",
    resultSealTitle: 'Picked Seals',
    resultDimensionTitle: '2x2 Dimension Map',
    resultAnalysisTitle: 'MBTI Deep Analysis',
    resultZodiacTitle: 'Zodiac Synergy',
    resultCareerTitle: 'Future Careers',
    resultParentingTitle: 'Parenting Tips'
  }
};

const zodiacOptions = [
  { key: '', zh: '請選擇星座', en: 'Choose zodiac sign' },
  { key: 'aries', zh: '牡羊', en: 'Aries' },
  { key: 'taurus', zh: '金牛', en: 'Taurus' },
  { key: 'gemini', zh: '雙子', en: 'Gemini' },
  { key: 'cancer', zh: '巨蟹', en: 'Cancer' },
  { key: 'leo', zh: '獅子', en: 'Leo' },
  { key: 'virgo', zh: '處女', en: 'Virgo' },
  { key: 'libra', zh: '天秤', en: 'Libra' },
  { key: 'scorpio', zh: '天蠍', en: 'Scorpio' },
  { key: 'sagittarius', zh: '射手', en: 'Sagittarius' },
  { key: 'capricorn', zh: '摩羯', en: 'Capricorn' },
  { key: 'aquarius', zh: '水瓶', en: 'Aquarius' },
  { key: 'pisces', zh: '雙魚', en: 'Pisces' }
];

const magicalIconPaths = {
  book: `
    <path d="M7.8 9.2h9.6c2.1 0 3.3.8 4 1.7.7-.9 1.9-1.7 4-1.7H28c.9 0 1.6.7 1.6 1.6v15.8c0 .9-.7 1.6-1.6 1.6h-2.6c-2.1 0-3.3.9-4 1.8-.3.4-.8.6-1.2.6s-.9-.2-1.2-.6c-.7-.9-1.9-1.8-4-1.8H7.8c-.9 0-1.6-.7-1.6-1.6V10.8c0-.9.7-1.6 1.6-1.6z" fill="currentColor" />
  `,
  plane: `
    <path d="M5.7 17.8l24.7-8.5c.9-.3 1.7.6 1.3 1.4l-8.8 20.1c-.4.9-1.6 1-2.1.2l-3.7-6-6.1-3.7c-.8-.5-.7-1.7.2-2.1l14.4-6.5-15.9 4.1-3.2 1.1c-.4.1-.7 0-.8-.2z" fill="currentColor" />
  `,
  ball: `
    <path d="M18 8.8c-6.2 0-11.2 5-11.2 11.2s5 11.2 11.2 11.2 11.2-5 11.2-11.2S24.2 8.8 18 8.8zm0 3.2a8 8 0 0 1 6.4 3.2 12.7 12.7 0 0 1-5.3 1.2 12.4 12.4 0 0 1-7-2.1A8 8 0 0 1 18 12zm-7.9 9.1c1.5.8 4.2 1.8 8 1.8 2.8 0 5.5-.6 7.5-1.7a8 8 0 0 1-15.5-.1z" fill="currentColor" />
  `,
  piano: `
    <path d="M7.5 10.5h21c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2h-21c-1.1 0-2-.9-2-2v-14c0-1.1.9-2 2-2zM9.8 15.2h16.4v10.6H9.8z" fill="currentColor" />
    <path d="M12.3 15.2h1.8v7.2h-1.8zm3.8 0h1.8v7.2h-1.8zm3.8 0h1.8v7.2h-1.8zm3.8 0h1.8v7.2h-1.8z" fill="#ffffff" />
  `,
  palette: `
    <path d="M18.2 8.8c-6.4 0-11.6 4.8-11.6 10.7 0 5.3 4 9.7 9.2 9.7h1.5c1.5 0 2.8-1.2 2.8-2.7 0-1.2-.8-2.1-.8-3.1 0-1.6 1.2-2.8 3.1-2.8h1.9c3 0 5-2.1 5-5C29.2 11.8 24.5 8.8 18.2 8.8z" fill="currentColor" />
    <circle cx="12.8" cy="16.3" r="1.5" fill="#ffffff" />
    <circle cx="16.5" cy="13.5" r="1.4" fill="#ffffff" />
    <circle cx="20.6" cy="13.9" r="1.3" fill="#ffffff" />
    <circle cx="23.7" cy="16.8" r="1.3" fill="#ffffff" />
  `,
  camera: `
    <path d="M8.2 12.2h4.1l1.5-2.1c.4-.6 1.1-.9 1.8-.9h4.8c.7 0 1.4.3 1.8.9l1.5 2.1h4.1c1.3 0 2.3 1 2.3 2.3v11c0 1.3-1 2.3-2.3 2.3H8.2c-1.3 0-2.3-1-2.3-2.3v-11c0-1.3 1-2.3 2.3-2.3z" fill="currentColor" />
    <circle cx="18" cy="20" r="4.4" fill="#ffffff" />
    <circle cx="18" cy="20" r="2.3" fill="currentColor" />
    <circle cx="24.9" cy="15.7" r="1.2" fill="#ffffff" />
  `,
  abacus: `
    <circle cx="18" cy="20" r="9.5" fill="#fffaf2"/>
    <path d="M18 12v16M10 20h16" stroke="#b7a7df" stroke-width="1.7" stroke-linecap="round"/>
    <circle cx="18" cy="12.3" r="1.6" fill="#fff2b7"/>
    <circle cx="25.5" cy="20" r="1.4" fill="#c6dcff"/>
    <circle cx="10.5" cy="20" r="1.4" fill="#d9c8f2"/>
  `,
  pen: `
    <path d="M10 26l5.5-14.5 7.6-2.1-2.1 7.6L10 26z" fill="#fffaf2"/>
    <path d="M15.5 11.5l5.7 5.7" stroke="#af9cdd" stroke-width="1.6" stroke-linecap="round"/>
    <circle cx="23.6" cy="9.2" r="1.4" fill="#fff2b7"/>
    <path d="M24.8 10.6l1.2.9M23.5 12.2l1.5.2" stroke="#fff2b7" stroke-width="1.1" stroke-linecap="round"/>
  `,
  blocks: `
    <rect x="9" y="17" width="8" height="8" rx="2" fill="#fffaf2"/>
    <rect x="16" y="13" width="8" height="8" rx="2" fill="#efe6ff"/>
    <rect x="20" y="18" width="8" height="8" rx="2" fill="#e4f0ff"/>
    <path d="M13 17v-2.2M15 17v-2.2M20 13v-2.2M22 13v-2.2M24 18v-2.2M26 18v-2.2" stroke="#b6a5de" stroke-width="1.2" stroke-linecap="round"/>
  `,
  compass: `
    <circle cx="18" cy="20" r="9.8" fill="#fffaf2"/>
    <circle cx="18" cy="20" r="6.8" fill="none" stroke="#cab9ee" stroke-width="1.3"/>
    <path d="M18 13.2l3.6 7.4L18 19l-3.6 1.6L18 13.2z" fill="#9cc9ff"/>
    <circle cx="18" cy="20" r="1.4" fill="#fff2b7"/>
  `,
  microphone: `
    <rect x="14" y="10" width="8" height="13" rx="4" fill="#fffaf2"/>
    <path d="M12 18a6 6 0 0 0 12 0" fill="none" stroke="#b8a7df" stroke-width="1.7" stroke-linecap="round"/>
    <path d="M18 24.2v3.8M14.5 28h7" stroke="#b8a7df" stroke-width="1.6" stroke-linecap="round"/>
    <circle cx="23.8" cy="11.7" r="1.3" fill="#fff2b7"/>
  `,
  medkit: `
    <rect x="8" y="13" width="20" height="15" rx="4" fill="#fffaf2"/>
    <rect x="14" y="10" width="8" height="4" rx="1.8" fill="#d8c8f5"/>
    <path d="M18 17v7M14.5 20.5h7" stroke="#ffbfd4" stroke-width="2" stroke-linecap="round"/>
    <circle cx="24.8" cy="15.5" r="1.1" fill="#fff2b7"/>
  `,
  heart: `
    <path d="M18 27c-6.5-3.6-10-7-10-11.2 0-2.9 2.2-5.3 5.2-5.3 2 0 3.8 1.1 4.8 2.7 1-1.6 2.9-2.7 4.8-2.7 3 0 5.2 2.4 5.2 5.3C28 20 24.5 23.4 18 27z" fill="#fff3f8"/>
    <path d="M21.5 14.5l1.6 1.2M20.3 16.4l1.8.2" stroke="#fff2b7" stroke-width="1.2" stroke-linecap="round"/>
  `,
  crown: `
    <path d="M9 25l2-11 6 5 4-7 4 7 6-5 2 11H9z" fill="#fffaf2"/>
    <path d="M11 22h14" stroke="#d6c6f2" stroke-width="1.6" stroke-linecap="round"/>
    <circle cx="18" cy="15.5" r="1.4" fill="#fff2b7"/>
    <circle cx="25.5" cy="16.5" r="1.2" fill="#b8d7ff"/>
  `,
  sun: `
    <circle cx="18" cy="20" r="6.8" fill="#fff8dd"/>
    <path d="M18 9.5v2.5M18 28v2.5M8 20h2.5M25.5 20H28M10.7 12.8l1.8 1.8M23.5 25.6l1.8 1.8M10.7 27.2l1.8-1.8M23.5 14.4l1.8-1.8" stroke="#d7c4ef" stroke-width="1.5" stroke-linecap="round"/>
  `,
  moon: `
    <path d="M23.8 12.2A9.8 9.8 0 1 0 23.8 27c-1.3.6-2.4.8-3.8.8-4.8 0-8.8-3.9-8.8-8.7s4-8.7 8.8-8.7c1.4 0 2.5.2 3.8.8z" fill="#fffaf2"/>
    <circle cx="26" cy="13.8" r="1.3" fill="#fff2b7"/>
  `,
  gear: `
    <path d="M18 11.2l2.2.7 1.8-1.5 2.4 2.4-1.5 1.8.7 2.2 2.2.7v3.4l-2.2.7-.7 2.2 1.5 1.8-2.4 2.4-1.8-1.5-2.2.7-.7 2.2h-3.4l-.7-2.2-2.2-.7-1.8 1.5-2.4-2.4 1.5-1.8-.7-2.2-2.2-.7v-3.4l2.2-.7.7-2.2-1.5-1.8 2.4-2.4 1.8 1.5 2.2-.7.7-2.2h3.4z" fill="#fffaf2"/>
    <circle cx="18" cy="20" r="3.4" fill="#b9d7ff"/>
  `,
  cloud: `
    <path d="M11 26h13.2a4.8 4.8 0 0 0 .2-9.6 6.7 6.7 0 0 0-12.7-1.7A4.4 4.4 0 0 0 11 26z" fill="#fffaf2"/>
    <circle cx="26.3" cy="13.5" r="1.3" fill="#fff2b7"/>
  `
};

const iconKeyByName = {
  書: 'book',
  飛機: 'plane',
  球: 'ball',
  鋼琴: 'piano',
  調色盤: 'palette',
  相機: 'camera',
  計算機: 'abacus',
  筆: 'pen',
  積木: 'blocks',
  指南針: 'compass',
  麥克風: 'microphone',
  醫藥箱: 'medkit',
  愛心: 'heart',
  皇冠: 'crown',
  太陽: 'sun',
  月亮: 'moon',
  齒輪: 'gear',
  雲朵: 'cloud'
};

const itemImageAssets = {
  book: { src: './assets/book.png', alt: '書' },
  plane: { src: './assets/plane.png', alt: '紙飛機' },
  ball: { src: './assets/ball.png', alt: '球' },
  piano: { src: './assets/piano.png', alt: '鋼琴' },
  palette: { src: './assets/palette.png', alt: '調色盤' },
  camera: { src: './assets/camera.png', alt: '相機' },
  abacus: { src: './assets/level2_calculator.png', alt: '計算機' },
  pen: { src: './assets/level2_pen.png', alt: '筆' },
  blocks: { src: './assets/level2_blocks.png', alt: '積木' },
  compass: { src: './assets/level2_compass.png', alt: '指南針' },
  microphone: { src: './assets/level2_mic.png', alt: '麥克風' },
  medkit: { src: './assets/level2_medical.png', alt: '醫藥箱' },
  heart: { src: './assets/level3_heart.png', alt: '愛心' },
  crown: { src: './assets/level3_crown.png', alt: '皇冠' },
  sun: { src: './assets/level3_sun.png', alt: '太陽' },
  moon: { src: './assets/level3_moon.png', alt: '月亮' },
  gear: { src: './assets/level3_gear.png', alt: '齒輪' },
  cloud: { src: './assets/level3_cloud.png', alt: '雲朵' }
};


const rounds = [
  {
    key: 'interest',
    label: '第一關：興趣分類',
    options: [
      { id: 'book', name: '書', iconKey: 'book', mbti: 'ISTJ', title: '閱讀與知識', desc: '被故事與知識內容吸引，喜歡透過閱讀探索世界。', explain: ['專注書中世界', '重視文字記載', '吸收邏輯與事實', '按部就班地學習'] },
      { id: 'plane', name: '飛機', iconKey: 'plane', mbti: 'ENTP', title: '旅遊與探索', desc: '被未知與新環境吸引，喜歡旅遊並探索世界。', explain: ['學習向外探索', '嚮往未知遠方', '理解異國文化', '享受隨性的自由'] },
      { id: 'ball', name: '球', iconKey: 'ball', mbti: 'ESTP', title: '運動與競技', desc: '被動態活動吸引，喜歡透過肢體與環境互動。', explain: ['與他人交流', '重視具體體驗', '分析競爭優劣勢', '在場上靈活互動'] },
      { id: 'piano', name: '鋼琴', iconKey: 'piano', mbti: 'ISFP', title: '音樂與節奏', desc: '被聲音與節奏吸引，喜歡用音樂感受與表達。', explain: ['探索內在情感', '實際彈奏樂器', '隨心情演奏樂曲', '擅長即興發揮'] },
      { id: 'palette', name: '調色盤', iconKey: 'palette', mbti: 'ENFP', title: '色彩與創作', desc: '被色彩與創作吸引，喜歡用畫面表達想法。', explain: ['展現藝術', '表達色彩抽象', '用顏色代表情感', '自由揮灑創作'] },
      { id: 'camera', name: '相機', iconKey: 'camera', mbti: 'INFJ', title: '影像與紀錄', desc: '被畫面與細節吸引，喜歡用觀察理解世界。', explain: ['擅長觀察周遭', '用畫面象徵故事', '帶有溫度影像', '有計劃地構圖'] }
    ]
  },
  {
    key: 'ability',
    label: '第二關：能力取向',
    options: [
      { id: 'abacus', name: '計算機', iconKey: 'abacus', mbti: 'INTP', title: '數理邏輯力', desc: '具備強大的邏輯運算與數據分析天賦。', explain: ['獨立解決問題', '思考抽象邏輯', '理性數據分析', '善於嘗試解法'] },
      { id: 'pen', name: '筆', iconKey: 'pen', mbti: 'INTJ', title: '計劃組織力', desc: '具備統整思維與結構化表達的天賦。', explain: ['沉澱獨立思考', '規劃書寫架構', '文體結構分明', '系統地撰寫'] },
      { id: 'blocks', name: '積木', iconKey: 'blocks', mbti: 'ISTP', title: '空間實作力', desc: '具備動手操作與空間結構的建構天賦。', explain: ['專注零件操作', '擅長實際手作', '分析構造定律', '重組各種可能'] },
      { id: 'compass', name: '指南針', iconKey: 'compass', mbti: 'ENTJ', title: '方向決策力', desc: '具備判斷趨勢與決定前進目標的天賦。', explain: ['指引團隊前行', '想像未來目的', '理性規劃路線', '有計劃地執行'] },
      { id: 'microphone', name: '麥克風', iconKey: 'microphone', mbti: 'ESFP', title: '口語表達力', desc: '具備感染人群與大方自信的表演天賦。', explain: ['熱衷向外發聲', '強調現場張力', '擅長感性表達', '享受即興演說'] },
      { id: 'medkit', name: '醫藥箱', iconKey: 'medkit', mbti: 'ESFJ', title: '協調關懷力', desc: '具備細心照顧與組織人群福利的天賦。', explain: ['建立溫暖互動', '提供實務支援', '能以同理關懷', '遵循安全規範'] }
    ]
  },
  {
    key: 'personality',
    label: '第三關：人格核心',
    options: [
      { id: 'heart', name: '愛心', iconKey: 'heart', mbti: 'ISFJ', title: '守護者', desc: '溫柔穩定，重視情感交流與互動。', explain: ['內斂體貼', '給予實際關心', '充滿同理心', '守護長期安定'] },
      { id: 'crown', name: '皇冠', iconKey: 'crown', mbti: 'ESTJ', title: '領導者', desc: '展現自信與領導風範，喜歡建立秩序。', explain: ['在群體發揮影響', '注重效率成果', '客觀準則導向', '善於掌控秩序'] },
      { id: 'sun', name: '太陽', iconKey: 'sun', mbti: 'ENFP', title: '啟發者', desc: '熱情奔放，能照亮並鼓舞身邊的人。', explain: ['對外擴散能量', '有天馬行空靈感', '對人事物熱情', '不受框架限制'] },
      { id: 'moon', name: '月亮', iconKey: 'moon', mbti: 'INTJ', title: '思考者', desc: '富有智慧，喜歡獨立鑽研事物本質。', explain: ['深沉冷靜', '具備洞察力', '善於冷靜決策', '有條不紊實踐'] },
      { id: 'gear', name: '齒輪', iconKey: 'gear', mbti: 'ENTP', title: '革新者', desc: '擅長靈活變通，是推動系統進化原動力。', explain: ['帶動團隊運轉', '發想各種方案', '追求理性模式', '適應環境變動'] },
      { id: 'cloud', name: '雲朵', iconKey: 'cloud', mbti: 'ISFP', title: '隨心者', desc: '懂得享受生活，擁有純真且不受拘束的靈魂。', explain: ['享受獨處自在', '對環境變化敏感', '對世界充滿包容', '展現生活彈性'] }
    ]
  }
];

const itemsDatabase = {
  book: {
    id: 'book',
    mbti: 'ISTJ',
    zh: { name: '書', dimensions: ['吸收資訊', '概念想像', '邏輯理解', '結構學習'] },
    en: { name: 'Book', dimensions: ['Absorb Info', 'Imagination', 'Logic', 'Structure'] }
  },
  plane: {
    id: 'plane',
    mbti: 'ENTP',
    zh: { name: '飛機', dimensions: ['向外探索', '未知想像', '跨域理解', '彈性行動'] },
    en: { name: 'Plane', dimensions: ['Explore Outward', 'Unknown Vision', 'Cross-Cultural Insight', 'Flexible Action'] }
  }
  // TODO: add remaining 16 items with full zh/en mappings.
};

const mbtiData = {
  INTJ: {
    deepAnalysis: "你以為我盯著天花板發呆？其實我正在腦中建構這張嬰兒床的結構應力圖，並計算最佳的越獄路徑。我不太愛無意義的假哭，眼淚對我來說是拿來跟大人談判的籌碼。比起花花綠綠、只會發出吵鬧聲的聲光玩具，我更喜歡安靜地觀察光影變化和大人們的行為模式。這個家目前的動線設計有點差，等我會走路了，我會親自把所有玩具重新歸位，建立一套屬於我的高效系統。\n\n至於我長大後的可能性，請爸媽做好心理準備。上了幼兒園，我絕對不會跟著大家盲目搶溜滑梯，我會精準計算出人潮最少的黃金時段。上了學，我大概會是那個在小組報告裡默默分配好所有任務，然後自己搞定最困難核心架構的冷面學霸。我不喜歡廢話，但我做出的決策通常都是最完美的。未來，我絕對是能在幕後運籌帷幄、制定改變世界規則的狠角色。",
    careers: ["首席戰略顧問 / 商業智庫", "系統架構工程師", "天文物理或數據科學家", "高階企業營運長"],
    parentingAdvice: "面對 INTJ 寶寶，請把你那套「因為我是大人所以你要聽話」的邏輯收起來，他們天生只服從真理與規律。請給他們足夠的獨處空間去思考，絕對不要強迫他們在一大群親戚面前賣萌表演，這會讓他們非常反感。當他們提出「為什麼」時，請給出科學且具體的答案，敷衍的話他們可是會在心裡偷偷把你降級的。成為他們成長路上的「智庫夥伴」而非「獨裁統治者」，親子關係就會非常完美。"
  },
  INTP: {
    deepAnalysis: "說明書？那是給凡人看的。拿到新玩具的第一步，當然是把它徹底拆解，看看裡面的齒輪到底是怎麼運作的。我有時候會突然看著空氣笑出來，那是因為我腦中剛剛推演完了一個極具創意的宇宙理論（雖然我現在只會流口水）。我對日常瑣事例如按時睡覺毫無興趣，但請千萬不要打斷我研究這根羽毛飄落軌跡的偉大實驗，這可是關係到物理學的發展！\n\n說到長大後的可能性，我的大腦就是一台沒有極限的超級電腦。等我學會拿螺絲起子，家裡的微波爐跟遙控器可能都會被我拆了來升級我的玩具車。在學校裡，我可能常常忘記帶聯絡簿、討厭死板的背誦科，但卻能在科學展覽上拿出現場所有老師都看傻眼的破格發明。我的人生不在乎世俗的眼光和無聊的社交，我只追求宇宙運作的終極真理與知識的極限。",
    careers: ["前瞻研發科學家", "軟體演算法與 AI 工程師", "哲學思想家 / 大學教授", "獨立科技發明家"],
    parentingAdvice: "爸媽請隨時準備好一顆強大的心臟跟足夠的備用玩具（因為多半會被拆壞）。不要用死板的作息規矩過度限制他們，給他們安全但極度自由的探索環境。面對他們天馬行空的想法，請給予肯定而不是嘲笑。比起買昂貴的現成玩具，他們絕對更喜歡你給他一堆紙箱、空瓶子和膠帶去自由創造。請多包容他們生活上的「小迷糊」，因為他們的腦容量都拿去裝宇宙大爆炸了。"
  },
  ENTJ: {
    deepAnalysis: "從我出生的那一刻起，我就決定要接管這個家了。我哭聲嘹亮絕對不是因為害怕，我這是在發號施令！我清楚知道自己要什麼，不管是特定的安撫巾還是那個放在高處的積木，我不達目的絕不罷休。旁邊那個正在搶玩具的嬰兒真是不講武德，等我正式掌權了，我一定會為這座公園的沙坑制定一套完善的管理規則，讓所有人乖乖聽話，高效率地堆沙堡。\n\n關於長大後的發展，你們大概可以想像家裡住了一個迷你版的 CEO。小學三年級我可能就會在班上創辦自己的文具租賃帝國，並且把零用錢的投資報酬率算得清清楚楚。遇到分組活動時，如果隊友太雷，我會毫不猶豫地接過指揮棒帶領全隊殺出重圍。我不害怕衝突，我只在乎目標有沒有達成，未來絕對是個能在商場或職場上叱吒風雲、帶領大軍前進的頂級領袖人物。",
    careers: ["跨國企業 CEO / 總裁", "連續創業家 / 資本家", "頂級商務律師", "大型專案管理大師"],
    parentingAdvice: "對待 ENTJ 寶寶，權威鎮壓是無效的。你需要提供「有條件的選擇權」，讓他們覺得自己有掌控感（例如：「你要先洗澡還是先聽故事？」而不是命令「去洗澡」）。他們精力旺盛且目標導向，請給他們具備挑戰性的任務（例如自己收完一整箱玩具）。如果他們犯錯，請用「講理」和「分析後果」來引導，純粹的打罵只會引來他們更強烈的反彈與挑戰。教導他們「同理心」，是他們成長路上最重要的課題。"
  },
  ENTP: {
    deepAnalysis: "規矩是什麼？好吃嗎？我每天最重要的任務就是挑戰你們的底線，看看這個世界的極限到底在哪裡！我超級喜歡引起大人的注意，只要你們露出崩潰或驚訝的表情，我的搗蛋實驗就成功了！我學東西超快，但喜新厭舊的速度更快，上一秒還是最愛的恐龍模型，下一秒就被我拿去測試馬桶的沖水威力了。請隨時保持警戒，因為我永遠有新花招。\n\n預言一下我長大後的樣子吧！我絕對會是那個在課堂上用各種刁鑽問題把老師問到懷疑人生的鬼靈精。我討厭一成不變的讀書方法，我會發明出自己獨套的速成記憶法。到了青春期，我可能是學校辯論社的社長，能把黑的說成白的，把死的說成活的。我的大腦永遠在尋找下一個刺激的點子，從不甘於平凡，未來必定是個能打破行業規則的超級創新者與跨界人才。",
    careers: ["創新科技產品經理", "行銷公關創意天才", "知名脫口秀演員 / 意見領袖", "破壞性創新風險投資家"],
    parentingAdvice: "爸媽請備妥強大的「幽默感」和「無限的耐心」。面對他們層出不窮的鬼點子，與其一味防堵，不如跟他們一起把點子變安全。給他們大量的刺激和新鮮事物，多帶他們去沒去過的地方探索。當他們為了不睡覺而展現出驚人的狡辯能力時，你可以欣賞他們的邏輯，但仍要溫和且堅定地守住家規的底線。教導他們「把一件事情堅持做完」，將會是他們通往成功的最關鍵鑰匙。"
  }
};

const mbtiReports = {
  ENFP: { title: 'ENFP 啟發者小太陽', avatar: { base: '#ffe8a6', accent: '#ffb2c6', mark: '☀︎' }, analysis: 'ENFP 寶寶像是把春天裝在口袋裡的小小探險家，遇見新的人、聲音與玩具都會主動靠近，並且以驚人的速度建立連結。他或她會先感受氛圍，再用創意去解釋世界，因此常常在大人還在觀察時，就已經用笑容和動作提出自己版本的答案。這類孩子重視關係中的真誠與新鮮感，內在節奏自由、外在能量活潑，若被過度限制可能暫時退縮，但只要獲得理解就會迅速回到明亮狀態，持續展現感染全家的生命力。', zodiacBonus: '當 {{zodiac}} 座的氣質與 ENFP 相遇，寶寶會同時擁有敏銳情緒雷達與充沛想像力，既會追逐新鮮，也能在關鍵時刻抓住真正重要的人事物。', careers: ['品牌創意與企劃', '兒童教育與引導設計', '影像內容創作者', '心理與陪伴工作'], parenting: '請把這位孩子當成「需要回應的火花」，而不是「需要修正的問題」。每天給他或她可自由選擇的小任務，例如兩種遊戲、兩種故事，讓孩子在選擇中建立責任感。當情緒起伏時，先接住感受再談規則，例如「你很想再玩一下，我懂，我們一起設計收玩具儀式」。家長也可準備創作角落，放紙張、貼紙、積木，鼓勵把腦中的畫面做出來。固定的睡前對話很重要，陪孩子回顧今天最開心與最困難的片段，讓想像力和安全感一起長大。' },
  INFP: { title: 'INFP 夢境溫柔小詩人', avatar: { base: '#e7dcff', accent: '#a9d7ff', mark: '✿' }, analysis: 'INFP 寶寶的感受力非常細緻，常會在安靜時觀察每個人的表情與語氣，再決定自己要不要靠近。這不是害羞，而是一種先在心裡建立安全圖景的能力。他或她對美感、聲音、故事有天然敏感度，喜歡把感受變成自己的小小儀式，例如抱著固定玩偶聽同一首歌。這類孩子重視被理解的品質，高壓催促會讓他或她更慢，但溫柔陪伴反而能喚起驚人專注。當家庭給予穩定且尊重的空間，INFP 會長出深刻同理與獨到創造力，成為溫暖他人的靈魂角色。', zodiacBonus: '{{zodiac}} 座與 INFP 的結合，讓孩子既浪漫又有方向，能把內在世界慢慢轉成可被他人看見的作品與行動，情感深度因此更具力量。', careers: ['繪本與故事創作', '音樂與聲音設計', '心理諮商與輔導', '文化內容策展'], parenting: '陪伴 INFP 的關鍵不是「快一點」，而是「懂一點」。家長可以先描述孩子的感受：「你是不是擔心太吵？」被命中後，孩子才更願意合作。每天保留一段安靜共讀或共畫時間，讓孩子在不被評分的氛圍中輸出內在想法。遇到挫折時，避免直接說教，可透過角色扮演找解法，例如讓玩偶示範如何重新嘗試。規範要清楚但語氣要柔軟，讓孩子知道界線存在且關係安全。長期下來，這份被理解的經驗會轉化為穩定自信，幫助孩子把善良變成真正的行動力。' },
  INFJ: { title: 'INFJ 靈光守護小導師', avatar: { base: '#d3f0ff', accent: '#ffd5e5', mark: '✦' }, analysis: 'INFJ 寶寶常給人一種「小小年紀卻很懂事」的感覺，因為他或她對人際情緒和環境變化有高度覺察。這類孩子擅長在心中整理資訊，喜歡先理解脈絡再參與活動，所以會出現先觀察後投入的節奏。INFJ 對公平和溫柔特別敏感，看到他人不舒服時往往會主動靠近安撫。當家庭語言一致、規範清楚時，孩子能把這份敏銳化為穩定判斷力。若長期處在混亂氛圍，他或她容易過度承擔。給予可預期日常與高品質對話，INFJ 會成為有洞察、有溫度、也能照顧自己的小小引路人。', zodiacBonus: '{{zodiac}} 座加上 INFJ，會讓孩子在溫柔共感之外，多一層目標感與耐力，不只理解他人，也更知道自己要往哪裡前進。', careers: ['教育與學習設計', '心理與家庭諮詢', '社會倡議工作', '研究與策略分析'], parenting: '這類孩子需要的是「被信任的任務」，不是「被控制的命令」。家長可以把生活規則變成共同約定，例如一起設計晚間流程表，讓孩子感到自己被尊重。當孩子在意他人情緒時，請教他分辨「關心」與「負責」：可以安慰朋友，但不必替所有人的感受背責任。每天安排十分鐘深度對談，談今天最感謝與最困擾的事，建立情緒代謝管道。也要鼓勵身體活動，讓思緒回到身體。當 INFJ 同時擁有同理、界線與實踐力，會成為非常有影響力且溫暖的存在。' },
  INTJ: { title: 'INTJ 策略思考小星圖師', avatar: { base: '#dce7ff', accent: '#cab8ff', mark: '⌘' }, analysis: 'INTJ 寶寶的特徵是早早展現出規劃感與邏輯感，喜歡理解「為什麼」而不是只接受「要這樣做」。他或她會把玩具分類、把流程排序，並在心裡建立一套可預測系統，因此在熟悉環境裡往往很穩定。遇到新變化時，若能先給預告，孩子能快速調整；若被突然打斷，可能用沉默表達不適。INTJ 的內在驅動來自掌握感與進步感，對低效率重複活動耐受度低。當家長提供清楚邏輯、尊重獨立思考，這類孩子會長成擅長解題、能長線規劃且具高度自律的未來建築者。', zodiacBonus: '{{zodiac}} 座能為 INTJ 加入柔韌與情感細節，讓孩子在追求效率與正確之外，也更懂合作節奏，形成理性與關係兼具的領導潛質。', careers: ['工程與系統研發', '產品策略規劃', '數據科學與分析', '建築與空間設計'], parenting: '對 INTJ 孩子，請多用「邏輯說明 + 自主選項」的方式互動。比起單純命令，說明原因更能促進合作，例如「先收玩具，等會才能完整拼下一組」。家長可設計可視化時間表，讓孩子預見下一步並減少焦慮。當孩子表現堅持時，不必急著貼上固執標籤，可引導他比較兩種方案的優缺點，練習彈性決策。也要刻意創造團隊遊戲機會，讓孩子在協作中學習傾聽。持續肯定其思考深度與修正能力，孩子會在穩定關係中發展出既有原則又能溝通的成熟力量。' },
  ENFJ: { title: 'ENFJ 溫暖領航小隊長', avatar: { base: '#ffe3f0', accent: '#ffc19a', mark: '❤' }, analysis: 'ENFJ 寶寶很早就展現「把大家連在一起」的能力，看到有人沒參與會主動邀請，也會在團體裡自然扮演協調者。他或她對稱讚與回應高度敏感，當被看見時能量會明顯上升，並願意主動嘗試更高難度任務。這類孩子重視關係和諧，也喜歡有意義的角色感，因此若被忽略或被粗暴否定，容易失去動力。ENFJ 的優勢是把情感轉為行動，既能理解他人需求，也願意為共同目標付出。家庭若提供正向示範與一致界線，孩子會長出強大同理心、責任感與領導魅力。', zodiacBonus: '{{zodiac}} 座特質讓 ENFJ 的親和力更有層次，孩子不只會照顧氣氛，也能在關鍵時刻做出穩定判斷，成為可靠的小小核心。', careers: ['教育引導與培訓', '公共關係與社群經營', '心理輔導與人資發展', '活動企劃與品牌管理'], parenting: 'ENFJ 需要的是「有溫度的規則」。家長可以用家庭任務表賦予孩子責任，例如小幫手時間、關心家人時間，讓他在付出中獲得成就。當孩子過度在意他人評價，請提醒「你的感受也同樣重要」，協助建立自我邊界。衝突情境中，先肯定其善意，再示範更有效溝通句型，例如「我想一起玩，但我也要休息一下」。也建議安排團隊型活動，如親子合作遊戲，讓孩子練習分工與傾聽。當 ENFJ 被愛與原則一起支持時，會成為能照亮群體、也懂照顧自己的溫暖領袖。' },
  ENTJ: { title: 'ENTJ 星際指揮小總監', avatar: { base: '#ffd7cf', accent: '#ff9fb2', mark: '▲' }, analysis: 'ENTJ 寶寶擁有明顯目標導向與主導傾向，喜歡快速做決定、安排流程，對拖延和模糊訊息反應特別大。他或她常在遊戲中自然分派角色，並期待他人跟上節奏。這並非強勢，而是天生對效率與結果敏銳。ENTJ 也喜歡挑戰難題，若任務太簡單容易失去耐性。當家庭給予明確規範與可挑戰目標，孩子能把高能量轉為建設性領導。若長期只被要求服從而沒有對話，可能出現對抗。透過尊重與責任並行的教養，ENTJ 會成為有魄力、能整合資源並實際推進的行動者。', zodiacBonus: '{{zodiac}} 座為 ENTJ 注入情感細膩度，讓孩子在衝刺目標時更懂團隊感受，形成兼具效率與人味的高階組織力。', careers: ['企業管理與策略顧問', '創業與產品經營', '法律與公共治理', '科技專案領導'], parenting: '請把 ENTJ 的主導能量導向「負責」而非「壓制」。可以設計目標式互動，例如「今天你是收納隊長，任務完成後分享方法」。當孩子口氣過急，先指出需求再調整表達：「你想快點完成，我聽到了，我們用更清楚的話說一次。」家長要避免反覆變更規則，因為一致性是孩子穩定感來源。也要教他接受他人節奏，透過輪流決策遊戲練習等待與協商。持續肯定其規劃力與執行力，同時示範同理溝通，孩子會長成既有決斷又受人信任的領導者。' },
  ENTP: { title: 'ENTP 點子風暴小發明家', avatar: { base: '#fff0bd', accent: '#b6e5ff', mark: '⚙︎' }, analysis: 'ENTP 寶寶像一台永動的點子機器，看到新玩具會立刻想到不同玩法，並不斷測試規則邊界。他或她喜歡提問、辯論與拆解，常用「如果這樣呢？」開啟新路徑。這類孩子反應快、適應快，但也容易因新鮮感轉移而分心。ENTP 並非不專心，而是大腦在高頻搜尋可能性。當大人把探索行為視為優勢並提供結構化挑戰，孩子能把創意轉為可落地成果。若只用制止和否定回應，可能激發對抗。透過引導式對話與實驗型學習，ENTP 會成為兼具創新、邏輯與行動力的破框者。', zodiacBonus: '{{zodiac}} 座特質能幫 ENTP 在創新衝刺時保留穩定節奏，讓孩子既敢想敢試，也更能完成承諾與長期任務。', careers: ['產品創新與研發', '創業與商業開發', '媒體主持與企劃', '科技與設計整合'], parenting: '與 ENTP 相處要記得：先接球，再引導。當孩子提出奇想，先說「這點子很酷」，再追問「我們怎麼測試？」把想像變成實驗步驟。可使用短週期任務卡，讓孩子在限定時間內完成一個小專案，練習收斂。規範上要清楚底線，例如安全與禮貌不可談判，其餘給彈性。若出現辯嘴，不急著壓制，可要求他用證據支持主張，培養理性討論能力。只要在自由與責任間找到平衡，ENTP 的創造爆發力會成為一生優勢。' },
  ESFP: { title: 'ESFP 舞台閃耀小精靈', avatar: { base: '#ffd8a8', accent: '#ffb3d1', mark: '♪' }, analysis: 'ESFP 寶寶天生帶有舞台感與互動魅力，喜歡透過表情、聲音與肢體和世界建立連結。他或她對當下刺激反應快，能快速讀懂現場氣氛並調整自己，常成為活動中的開心來源。這類孩子學習風格偏向「做中學」，若教學過度抽象容易失焦，但加上體驗就會進步很快。ESFP 也重視被看見，當努力獲得即時回應，持續力會大幅提升。家庭若同時提供肯定與節奏感，孩子會發展出健康自信、社交力與表達力，成為能帶動群體情緒的陽光存在。', zodiacBonus: '{{zodiac}} 座與 ESFP 組合，讓孩子在外放魅力之外多了內在穩定，能把熱情延伸為持久專長，而不只是短暫亮眼。', careers: ['表演藝術與主持', '幼教與活動帶領', '品牌行銷與社群', '體育與健康推廣'], parenting: 'ESFP 需要「可參與」的教養方式。請把規則做成遊戲，例如收納比賽、任務闖關，讓孩子在互動中完成責任。遇到情緒高漲時，先陪他把能量釋放，再回到規範，效果比立即說理更好。家長可每天安排固定舞動或戶外時間，幫助孩子代謝情緒與專注力。稱讚時盡量具體：「你剛剛有等同學說完，這很棒。」讓孩子知道哪些行為值得延續。當 ESFP 在被理解和有節奏的環境成長，會形成既熱情又有分寸的社交影響力。' },
  ESTP: { title: 'ESTP 行動冒險小雷達', avatar: { base: '#cdeeff', accent: '#ffd0a9', mark: '⚡' }, analysis: 'ESTP 寶寶擁有強烈行動導向，喜歡用身體先接觸再理解，對速度、方向、挑戰特別有感。他或她會在遊戲中快速判斷可行路徑，並樂於嘗試高難度動作，展現出驚人的臨場反應。這類孩子討厭冗長等待，若活動太慢容易轉移注意。ESTP 的學習關鍵是即時回饋與具體目標，當任務清楚且可立即驗證，孩子會展現高效率。家庭若能把安全邊界說清楚，並提供大量正向動態體驗，孩子會在勇敢與自律間取得平衡，長成果斷且務實的行動派。', zodiacBonus: '{{zodiac}} 座讓 ESTP 的衝勁帶上細膩觀察，孩子在追求刺激時更能留意節奏與人際感受，整體表現更成熟。', careers: ['運動訓練與競技', '應變管理與救援', '銷售與商務開發', '工程技術與實作領域'], parenting: '教養 ESTP 的核心是「界線清楚，活動充足」。先講安全底線，再給可行替代方案，例如不能在沙發跳，可以去遊戲墊挑戰。規則請短句明確，避免長篇說教；完成後立即回饋，強化正向循環。可安排任務型家務，像搬運、分類、組裝，讓孩子在動手中學責任。當孩子衝動時，用呼吸與倒數幫他降速，再討論下一步。也要定期帶入團隊運動，學習合作與遵守規範。只要把能量導向建設性目標，ESTP 會發展出難得的實戰智慧與抗壓力。' },
  ESFJ: { title: 'ESFJ 貼心暖光小幫手', avatar: { base: '#ffe3c5', accent: '#ffd1e8', mark: '❀' }, analysis: 'ESFJ 寶寶很在意關係中的互動品質，喜歡幫忙、喜歡被需要，對家人情緒變化反應敏捷。他或她通常願意遵守規則，並透過服務他人獲得成就感，例如主動遞東西、提醒流程。這類孩子對讚美與肯定反應強，若長期被忽略容易失落。ESFJ 的優勢在於把善意落實成具體行動，兼具責任感與合作力。當家庭氛圍穩定、規範一致，他或她會成為讓人安心的小小連結者。若遇衝突，孩子可能為了和諧壓抑自己，因此也需要學習表達個人需求，建立健康邊界。', zodiacBonus: '{{zodiac}} 座與 ESFJ 的組合，讓孩子在照顧他人時更有內在主見，不只溫柔體貼，也能在重要時刻說出自己的想法。', careers: ['護理與健康照護', '教育與親職支持', '行政協調與人資服務', '社群營運與客戶關係'], parenting: '請把 ESFJ 的善意視為珍貴資產，同時教他「照顧自己也很重要」。可以建立家庭輪值任務，讓孩子在幫忙中培養責任，並在完成後給具體肯定。當孩子因他人情緒受影響，先安撫再引導：「你很在意大家，我看到你了；我們也來聽聽你想要什麼。」衝突時鼓勵使用我訊息句型，降低迎合壓力。家長要示範一致規則與尊重互動，讓孩子理解真正的和諧不是討好，而是彼此都被看見。長期而言，這會讓 ESFJ 形成穩定同理與成熟合作力。' },
  ESTJ: { title: 'ESTJ 秩序先鋒小隊長', avatar: { base: '#ffd4cf', accent: '#d7dcff', mark: '■' }, analysis: 'ESTJ 寶寶常展現出超齡的秩序感與責任感，喜歡事情有流程、物品有位置、任務有結束點。他或她在群體中容易自然站到前面安排規則，並期待夥伴配合。這類孩子對公平與效率很敏感，若規則反覆改變會明顯不安。ESTJ 並非控制欲，而是內在需要清楚框架來確保事情可被完成。當家庭提供一致的邏輯與可執行標準，孩子會快速長出可靠執行力與領導魄力。若只被貼上固執標籤，可能形成對立。透過結構化支持與彈性訓練，ESTJ 能在堅定中保有溫度。', zodiacBonus: '{{zodiac}} 座能柔化 ESTJ 的剛性，幫助孩子在維持秩序時加入同理與美感，讓管理能力更被同儕接受。', careers: ['專案管理與營運', '法律與公共行政', '金融與風險控管', '軍警與組織管理'], parenting: '對 ESTJ，最有效的是「規則先說好，執行要一致」。可與孩子共同建立家中流程圖，讓責任具體可見。當孩子過度要求他人時，家長可引導他思考不同節奏：「你很想快完成，我們也看看別人的方法。」請給孩子管理小任務，例如整理角、活動主持，讓領導需求有正向出口。情緒教養也不可少，協助他辨識焦躁與挫折，學會在效率之外顧及關係。當 ESTJ 被教會彈性與傾聽，他的組織力會成為團隊最穩固的核心力量。' },
  ISFJ: { title: 'ISFJ 守護甜心小月光', avatar: { base: '#f6eaff', accent: '#ffd7bf', mark: '☾' }, analysis: 'ISFJ 寶寶帶著安定而溫柔的光，喜歡熟悉的人、熟悉的流程，並透過細節照顧表達愛。他或她會默默記住家人的習慣，常在不被提醒時做出貼心舉動。這類孩子對突發改變較敏感，若有預告與陪伴，適應力其實很高。ISFJ 重視承諾，做事踏實細緻，不愛張揚卻非常可靠。當家庭給予清楚規律與情感肯定，孩子會在安全感中發展出穩定責任心與深厚同理。若長期忽視其付出，可能把需求壓回心裡。持續引導表達自我，能讓這份溫柔成為堅定力量。', zodiacBonus: '{{zodiac}} 座與 ISFJ 相遇，讓孩子的守護天性多了探索勇氣，既能照顧關係，也更願意走出舒適圈嘗試新體驗。', careers: ['醫護與照顧服務', '教育與幼兒陪伴', '圖書與檔案管理', '行政與品質管理'], parenting: 'ISFJ 需要可預期日常與被看見的感謝。家長可固定作息與儀式，例如晚餐前收玩具、睡前故事，幫助孩子建立穩定感。當孩子主動幫忙時，請具體回應：「你幫忙放好餐具，家裡更舒服了。」也要鼓勵孩子說出自身需求，可用選項題降低壓力，例如「你想先休息還是先畫畫？」遇到新環境時提前預告流程，並帶著熟悉物件增加安全感。長期練習後，ISFJ 會在體貼他人之餘，保有清晰界線與自我價值。' },
  ISFP: { title: 'ISFP 柔光藝術小精靈', avatar: { base: '#d6f8ef', accent: '#ffd9e6', mark: '✧' }, analysis: 'ISFP 寶寶像一位安靜觀察世界的藝術家，對顏色、聲音、觸感特別敏銳，常在自由狀態下展現驚喜創意。他或她不愛被硬性要求，偏好透過體驗與情感連結來學習。這類孩子情緒細膩、同理心強，會以行動而非長篇語言表達在乎，例如分享喜歡的小物件。ISFP 不追求舞台中心，但在被尊重時能穩定開花。若長期被比較或催促，可能暫時封閉。家庭若提供溫和界線與創作空間，孩子會在自在中養成美感判斷、情感理解與實作能力，成為溫柔而有韌性的創作者。', zodiacBonus: '{{zodiac}} 座能為 ISFP 注入行動節奏，讓孩子在感性創作之外更有持續度，慢慢把天賦轉化為可見成果。', careers: ['設計與視覺創作', '音樂與表演藝術', '動物與自然照護', '手作工藝與品牌'], parenting: 'ISFP 最需要的是被尊重的節奏。請避免高壓催促，改用陪伴式引導，例如一起開始五分鐘，再讓孩子接續完成。家長可在家設置小創作區，提供可自由組合的素材，讓孩子透過作品說話。當孩子情緒低落時，先用非語言陪伴如擁抱、共畫，再慢慢對話。規則要簡潔明確，並說明目的而非只強調服從。也可透過戶外自然活動幫助感官調節。當 ISFP 在安全關係裡被接納，他會長出穩定自信，將溫柔感受力化為長久創造力。' },
  ISTP: { title: 'ISTP 實作探索小工程師', avatar: { base: '#d7e9ff', accent: '#bdf1e0', mark: '⛭' }, analysis: 'ISTP 寶寶喜歡動手拆解與重組，對機械結構、空間關係與因果邏輯有天然直覺。他或她在實作情境中專注度很高，常能獨立摸索出有效方法。這類孩子不愛過多情緒渲染，偏好清楚任務與實際成果；在陌生人面前可能安靜，但熟悉後會展現幽默與機智。ISTP 面對問題時傾向先試再調，抗壓性佳、反應快。若被過度干預，可能出現退縮或抗拒。家庭若提供可探索材料、適度自由與明確安全界線，孩子會發展出卓越動手力、解題力與務實判斷。', zodiacBonus: '{{zodiac}} 座為 ISTP 增添情感連結與耐心，讓孩子在追求效率與解題時，也更願意分享想法並參與合作。', careers: ['工程技術與機電', '運動科學與訓練', '影像器材與修復', '戶外探勘與製作'], parenting: '與 ISTP 相處，請多給「可以操作」的教養工具。把規則做成流程卡或示範動作，會比長篇語言更有效。家長可安排拆裝玩具、簡易科學實驗、木工積木等活動，讓孩子在成功經驗中建立自信。當孩子看似冷淡時，不代表不在乎，可透過共同任務建立連結。若出現固著做法，鼓勵比較不同解法的效率，培養彈性。也別忘了情緒詞彙練習，協助孩子把內在感受說出來。當 ISTP 在被信任與有界線的環境中成長，會成為沉穩可靠的實作型解題者。' },
  INTP: { title: 'INTP 邏輯星雲小學者', avatar: { base: '#e5e8ff', accent: '#c5f2ff', mark: '∞' }, analysis: 'INTP 寶寶的大腦像不停運算的小宇宙，對規則、模式與原理充滿好奇，會不斷追問背後邏輯。他或她喜歡獨處思考，在安靜環境裡能長時間專注於感興趣的主題。這類孩子對重複且無意義的指令耐受度低，但若理解目的就能展現高度投入。INTP 不一定善於即時表達情緒，卻有深層觀察力與獨到見解。當家庭尊重其思考節奏並提供探索資源，孩子會逐漸建立強大抽象能力與創新解題力。若只追求服從與速度，可能壓縮其天賦。給時間、給問題、給舞台，INTP 會交出令人驚喜的答案。', zodiacBonus: '{{zodiac}} 座與 INTP 搭配，讓理性思辨多了情感觸角，孩子不只會想，也更願意把想法轉成與人互動的成果。', careers: ['科學研究與資料分析', '軟體開發與演算法', '教育與知識內容創作', '產品架構與技術顧問'], parenting: 'INTP 需要「可思考的空間」與「可對話的規則」。家長可把日常要求連結原理，例如為何要洗手、為何要輪流，讓孩子在理解中合作。鼓勵提出假設並自行驗證，像是小實驗記錄本，培養系統思維。當孩子沉浸思考時，提前預告轉換時間可減少摩擦。情緒面可透過量表提問：「今天心情 1 到 5 分？」幫助他練習辨識感受。長期給予尊重與挑戰並存的環境，INTP 會發展出兼具深度與創造力的思考影響力。' },
  ISTJ: { title: 'ISTJ 沉穩小學霸', avatar: { base: '#e6e6ff', accent: '#ffe1bf', mark: '▣' }, analysis: 'ISTJ 寶寶天生重視秩序與可靠感，對固定作息、明確指令與可預測流程反應良好。他或她會仔細觀察細節，並以踏實方式完成任務，雖不一定最外放，卻常是最穩定的那位。這類孩子責任心早熟，對承諾與規範有高敏感度，若規則前後不一會產生不安。ISTJ 的優勢在於長期累積與精準執行，只要目標清楚就能穩步前進。家庭若給予一致界線與耐心肯定，孩子會形成堅實自律與抗壓力。避免只看結果忽略努力，因為被理解的過程感，正是他持續精進的燃料。', zodiacBonus: '{{zodiac}} 座讓 ISTJ 的穩健更有彈性與溫度，孩子在守規則的同時，也更能理解他人節奏與情緒需求。', careers: ['醫療與專業技術', '財務審計與法務', '品質管理與專案執行', '教育行政與資料管理'], parenting: 'ISTJ 的教養重點是「一致」與「可追蹤」。建立清楚日程表、責任表，孩子會非常受用。家長給指令時盡量具體，例如「先收三樣玩具，再去洗手」，比抽象提醒更有效。當孩子表現謹慎慢熱，請肯定其細心而非催促比較。若遇變動，提早告知並說明原因，可大幅降低焦慮。也可安排小任務讓孩子感受被信任，例如管理閱讀角。當 ISTJ 在穩定環境中累積成功經驗，會長成踏實可靠、值得託付的重要力量。' }
};

const reportDatabase = Object.fromEntries(Object.entries(mbtiReports).map(([type, report]) => [type, {
  mbti: type,
  zh: { ...report },
  en: {
    title: '',
    analysis: '',
    zodiacBonus: '',
    careers: [],
    parenting: ''
  }
}]));

reportDatabase.ENFP.en = {
  title: 'ENFP Inspiring Little Sun',
  analysis: 'An ENFP baby is curious, expressive, and socially radiant. They explore the world with imagination and emotional sensitivity, then turn experiences into playful creativity.',
  zodiacBonus: 'With {{zodiac}} energy, this ENFP gains both empathy and momentum, balancing spontaneity with meaningful focus.',
  careers: ['Creative Branding', 'Early Childhood Education', 'Content Creation', 'Counseling & Care'],
  parenting: 'Offer guided choices, acknowledge feelings first, and create a safe creative corner. Structure helps, but emotional connection is the key driver.'
};

reportDatabase.INTJ.en = {
  title: 'INTJ Strategic Star Mapper',
  analysis: 'An INTJ baby naturally seeks patterns, systems, and reasons. They prefer clarity, predictability, and thoughtful independence when learning and making decisions.',
  zodiacBonus: '{{zodiac}} adds warmth and flexibility to this INTJ profile, supporting both strategic thinking and smoother social collaboration.',
  careers: ['Engineering & Systems', 'Product Strategy', 'Data Science', 'Architecture'],
  parenting: 'Use reason-based guidance and clear routines. Give autonomy within boundaries, and coach flexibility through comparing options and outcomes.'
};

// TODO: expand en content for the other 14 MBTI report types.

const mbtiDatabase = Object.fromEntries(
  Object.entries(reportDatabase).map(([mbti, pack]) => [
    mbti,
    {
      deepAnalysis: pack.zh.analysis,
      careers: [...pack.zh.careers],
      parentingAdvice: pack.zh.parenting
    }
  ])
);

const mbtiGalaxyMap = {
  INTJ: 'NT', INTP: 'NT', ENTJ: 'NT', ENTP: 'NT',
  INFJ: 'NF', INFP: 'NF', ENFJ: 'NF', ENFP: 'NF',
  ISTJ: 'SJ', ISFJ: 'SJ', ESTJ: 'SJ', ESFJ: 'SJ',
  ISTP: 'SP', ISFP: 'SP', ESTP: 'SP', ESFP: 'SP'
};

const zodiacData = {
  牡羊座: {
    NT: '牡羊座的 NT 寶寶是自帶「閃電戰略」天賦，想到什麼戰術立刻執行，是個極具侵略性與效率的冷酷小霸主。',
    NF: '牡羊座的 NF 寶寶是熱情如火的理想主義者，看到別的寶寶被欺負絕對第一個衝上去擋，正義感爆棚。',
    SJ: '牡羊座的 SJ 寶寶是家裡的熱血風紀股長，不僅自己守規矩，還會大聲喝斥旁邊不守規矩的大人。',
    SP: '牡羊座的 SP 寶寶是裝了渦輪引擎的破壞王，完全沒有「害怕」這兩個字，極限運動員的最佳潛力股。'
  },
  金牛座: {
    NT: '金牛座的 NT 寶寶是固執的真理追求者。只要他認定這個積木該放這裡，就算天塌下來他也絕對不妥協。',
    NF: '金牛座的 NF 寶寶是極度重視五感體驗的浪漫派，對好聽的音樂、好摸的安撫巾有著難以割捨的執念。',
    SJ: '金牛座的 SJ 寶寶是穩定度 100% 的天使寶寶。作息像生理時鐘一樣精準，只要吃飽睡好，就是全天下最乖的孩子。',
    SP: '金牛座的 SP 寶寶是佛系享樂主義者，平時懶洋洋，但看到喜歡的食物或閃亮的玩具，身手會瞬間變得極度靈活。'
  },
  雙子座: {
    NT: '雙子座的 NT 寶寶是大腦運算速度極快的超級駭客，會用各種牙牙學語和假動作來測試大人的智商底線。',
    NF: '雙子座的 NF 寶寶是天生自帶公關魂，在嬰兒車裡就能靠著豐富的表情跟路過的陌生人聊上十分鐘。',
    SJ: '雙子座的 SJ 寶寶是喜歡收集情報的八卦小站。雖然守規矩，但眼睛總是在觀察家裡每個人的動靜。',
    SP: '雙子座的 SP 寶寶是專注力只有三秒鐘的好奇寶寶。需要同時給他五種不同的玩具，才能勉強讓他安靜一會兒。'
  },
  巨蟹座: {
    NT: '巨蟹座的 NT 寶寶是用堅硬的外殼保護著極度聰明的大腦。他不會主動挑起爭端，但在暗中早已掌控了一切資源。',
    NF: '巨蟹座的 NF 寶寶是共情能力點滿的終極暖寶，只要媽媽假裝哭泣，他絕對會立刻爬過來給你一個大大的擁抱。',
    SJ: '巨蟹座的 SJ 寶寶是極度戀家的終極守護神。只要在熟悉的環境、熟悉的味道裡，他就是最可靠的貼心小棉襖。',
    SP: '巨蟹座的 SP 寶寶是情緒起伏較大的小藝術家。上一秒還在開心地玩水，下一秒可能因為泡泡破掉而感傷落淚。'
  },
  獅子座: {
    NT: '獅子座的 NT 寶寶是不怒自威的小國王。不需要哭鬧，只要一個眼神，大人就會乖乖把奶瓶跟玩具奉上。',
    NF: '獅子座的 NF 寶寶是自帶鎂光燈的太陽神。最喜歡在聚光燈下照顧別人，享受大家崇拜與感激的目光。',
    SJ: '獅子座的 SJ 寶寶是極度傲嬌的模範生。只要你用力誇獎他守規矩，他就會為了維持面子而表現得更加完美。',
    SP: '獅子座的 SP 寶寶是天生的舞台巨星。人越多越嗨，只要有掌聲，他甚至能為你表演後空翻。'
  },
  處女座: {
    NT: '處女座的 NT 寶寶是完美主義的數據精算師。對奶嘴的角度、衣服的摺痕有著近乎病態的邏輯要求。',
    NF: '處女座的 NF 寶寶是心思極度細膩的奉獻者。會默默記住爸媽喜歡什麼，用最不張揚的方式表達他的愛。',
    SJ: '處女座的 SJ 寶寶是家裡的品管大師。任何東西只要不在原位，或是稍微有點髒污，他絕對會崩潰給你看。',
    SP: '處女座的 SP 寶寶是擁有工匠精神的手作大師。只要給他積木，他能不吃不喝坐在那裡，排出對稱且完美的幾何圖形。'
  },
  天秤座: {
    NT: '天秤座的 NT 寶寶是絕對客觀的小法官。不偏袒任何人，只看證據說話，從小就展現出令人畏懼的談判技巧。',
    NF: '天秤座的 NF 寶寶是愛好和平的氣氛製造機。極度討厭衝突，只要家裡有人大聲說話，他就會試圖用笑聲來打圓場。',
    SJ: '天秤座的 SJ 寶寶是重視公平的秩序維護者。「一人一半，感情不散」是他的座右銘，分餅乾絕對要精準對半。',
    SP: '天秤座的 SP 寶寶是極具美感的外貌協會會長。對醜的衣服或玩具會展現出明顯的嫌棄，天生擁有絕佳的審美品味。'
  },
  天蠍座: {
    NT: '天蠍座的 NT 寶寶是看透一切的幕後黑手。你以為你在逗他玩？其實是他正在冷靜地分析你的行為模式。',
    NF: '天蠍座的 NF 寶寶是愛恨分明的靈魂伴侶。他給你的愛是極致且獨佔的，但如果你騙了他，他會記仇到上小學。',
    SJ: '天蠍座的 SJ 寶寶是忠誠度破表的護衛犬。外表高冷難以接近，但一旦認定你是自己人，他會用生命去守護你。',
    SP: '天蠍座的 SP 寶寶是神祕又危險的冒險王。越是禁止他去的地方，他越要趁你轉身時悄悄潛入，尋找刺激。'
  },
  射手座: {
    NT: '射手座的 NT 寶寶是大腦停不下來的哲學家。喜歡探索抽象的規律，嬰兒床根本關不住他那渴望真理的自由靈魂。',
    NF: '射手座的 NF 寶寶是無可救藥的樂天派。就算跌倒了也會大笑著爬起來，他的快樂具備著感染全家人的魔法。',
    SJ: '射手座的 SJ 寶寶是難得活潑的乖寶寶。雖然還是會遵守家規，但他總能用最幽默、最歡樂的方式去執行任務。',
    SP: '射手座的 SP 寶寶是真正的脫韁野馬。只要門沒關緊，他絕對已經爬到院子裡去跟野貓打架了，體力深不見底。'
  },
  摩羯座: {
    NT: '摩羯座的 NT 寶寶是野心勃勃的企業家寶寶。從一歲就開始規劃人生藍圖，每一個動作都有著明確的長期目標。',
    NF: '摩羯座的 NF 寶寶是最接地氣的理想主義者。雖然充滿愛，但他的愛非常實際（例如把你掉在地上的餅乾撿起來塞給你）。',
    SJ: '摩羯座的 SJ 寶寶是比大人還像大人的老靈魂。你不需要操心他的作息，他可能會反過來提醒你到了該睡覺的時間。',
    SP: '摩羯座的 SP 寶寶是披著乖巧外皮的行動派。平時不露聲色，但只要鎖定目標，他會展現出驚人的毅力和執行力。'
  },
  水瓶座: {
    NT: '水瓶座的 NT 寶寶是降臨地球的外星天才。完全不按牌理出牌，你永遠無法用地球人的邏輯去預測他下一步要幹嘛。',
    NF: '水瓶座的 NF 寶寶是博愛精神的倡議者。對他來說，家裡的狗、窗外的鳥和爸爸媽媽都一樣重要，眾生皆平等。',
    SJ: '水瓶座的 SJ 寶寶是守著一套奇怪規矩的怪咖。他不遵守大人的規矩，但他有自己一套絕對不能被打破的奇葩儀式感。',
    SP: '水瓶座的 SP 寶寶是反叛精神點滿的改革者。你越叫他往東，他絕對往西，甚至還會發明一種全新往西的交通工具。'
  },
  雙魚座: {
    NT: '雙魚座的 NT 寶寶是具備強大直覺的預言家。雖然滿腦子邏輯，但偶爾會冒出令人毛骨悚然、卻又極度精準的第六感。',
    NF: '雙魚座的 NF 寶寶是自帶柔焦濾鏡的夢幻精靈。活在童話故事裡，對情緒極度敏感，看著一片落葉都能發呆半天。',
    SJ: '雙魚座的 SJ 寶寶是最溫柔的順從者。極度沒有攻擊性，只要你語氣溫和地引導，他就會乖乖配合所有的指令。',
    SP: '雙魚座的 SP 寶寶是如水一般自由的舞者。身體極度柔軟靈活，沒有任何框架能困住他，充滿了令人著迷的藝術氣息。'
  }
};

const zodiacKeyMap = {
  aries: '牡羊座',
  taurus: '金牛座',
  gemini: '雙子座',
  cancer: '巨蟹座',
  leo: '獅子座',
  virgo: '處女座',
  libra: '天秤座',
  scorpio: '天蠍座',
  sagittarius: '射手座',
  capricorn: '摩羯座',
  aquarius: '水瓶座',
  pisces: '雙魚座'
};

const zodiacSynergyDatabase = Object.fromEntries(
  Object.entries(zodiacKeyMap).map(([zodiacKey, zodiacName]) => [zodiacKey, zodiacData[zodiacName]])
);

const picks = { interest: null, ability: null, personality: null };
let roundIndex = 0;

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const babyNameInput = document.getElementById('baby-name');
const babyZodiacInput = document.getElementById('baby-zodiac');
const roundLabel = document.getElementById('round-label');
const roundTitle = document.getElementById('round-title');
const roundDesc = document.getElementById('round-desc');
const optionsEl = document.getElementById('options');
const selectedText = document.getElementById('selected-text');
const bgmAudio = document.getElementById('bgMusic');
const musicToggleBtn = document.getElementById('musicToggle');
const langToggleBtn = document.getElementById('langToggle');
const reportName = document.getElementById('report-name');
const reportMbti = document.getElementById('report-mbti');
const reportSections = document.getElementById('report-sections');
const analysisContent = reportSections.querySelector('.analysis-content');
const zodiacContent = reportSections.querySelector('.zodiac-content');
const careerList = reportSections.querySelector('.career-list');
const parentingContent = reportSections.querySelector('.parenting-content');
const pickedTags = document.getElementById('picked-tags');
const babyAvatar = document.getElementById('baby-avatar');
const mbtiBadgeColorClasses = ['mbti-purple', 'mbti-green', 'mbti-blue', 'mbti-yellow'];
const mbtiMetaMap = {
  INTJ: { nickname: '小小策略家', category: '分析家寶寶', colorClass: 'mbti-purple' },
  INTP: { nickname: '小小發明家', category: '分析家寶寶', colorClass: 'mbti-purple' },
  ENTJ: { nickname: '小小霸總', category: '分析家寶寶', colorClass: 'mbti-purple' },
  ENTP: { nickname: '小小智多星', category: '分析家寶寶', colorClass: 'mbti-purple' },
  INFJ: { nickname: '小小讀心者', category: '外交家寶寶', colorClass: 'mbti-green' },
  INFP: { nickname: '小小夢想家', category: '外交家寶寶', colorClass: 'mbti-green' },
  ENFJ: { nickname: '小小太陽', category: '外交家寶寶', colorClass: 'mbti-green' },
  ENFP: { nickname: '小小開心果', category: '外交家寶寶', colorClass: 'mbti-green' },
  ISTJ: { nickname: '小小巡邏員', category: '守護者寶寶', colorClass: 'mbti-blue' },
  ISFJ: { nickname: '小小棉襖', category: '守護者寶寶', colorClass: 'mbti-blue' },
  ESTJ: { nickname: '小小總指揮', category: '守護者寶寶', colorClass: 'mbti-blue' },
  ESFJ: { nickname: '小小公關', category: '守護者寶寶', colorClass: 'mbti-blue' },
  ISTP: { nickname: '小小工匠', category: '探險家寶寶', colorClass: 'mbti-yellow' },
  ISFP: { nickname: '小小藝術家', category: '探險家寶寶', colorClass: 'mbti-yellow' },
  ESTP: { nickname: '小小冒險王', category: '探險家寶寶', colorClass: 'mbti-yellow' },
  ESFP: { nickname: '小小大明星', category: '探險家寶寶', colorClass: 'mbti-yellow' }
};

function t(key) {
  return uiTranslations[currentLang][key] || uiTranslations.zh[key] || key;
}

function getLocalizedItemName(item) {
  const profile = item?.id ? itemsDatabase[item.id] : null;
  if (!profile) return item.name;
  return (profile[currentLang]?.name || profile.zh?.name || item.name);
}

function getItemIconKey(item) {
  if (item?.iconKey) return item.iconKey;
  if (item?.id && magicalIconPaths[item.id]) return item.id;
  return iconKeyByName[item?.name] || 'book';
}

function getMagicalIconSvg(iconKey, label = '') {
  const key = magicalIconPaths[iconKey] ? iconKey : 'book';
  return `
    <svg class="magical-icon-svg" viewBox="0 0 36 36" role="img" aria-label="${label}" xmlns="http://www.w3.org/2000/svg">
      <circle class="magical-icon-base" cx="18" cy="18" r="16" fill="#f4f0ff"/>
      <circle class="magical-icon-base-ring" cx="18" cy="18" r="15.2" fill="none" stroke="#e0d5f7" stroke-width="0.8"/>
      <g class="magical-icon-glyph">
        ${magicalIconPaths[key]}
      </g>
    </svg>
  `;
}

function getItemIconMarkup(item) {
  return getMagicalIconSvg(getItemIconKey(item), getLocalizedItemName(item));
}

function hasFrontFaceImage(item) {
  return Boolean(itemImageAssets[getItemIconKey(item)]);
}

function getFrontFaceIconMarkup(item) {
  const iconKey = getItemIconKey(item);
  const imageAsset = itemImageAssets[iconKey];
  if (imageAsset) {
    const sunClass = iconKey === 'sun' ? ' sun-icon' : '';
    return `<img class="option-front-icon-img${sunClass}" src="${imageAsset.src}" alt="${imageAsset.alt}" />`;
  }
  return getItemIconMarkup(item);
}

function renderZodiacOptions() {
  const currentValue = babyZodiacInput.value;
  babyZodiacInput.innerHTML = '';
  zodiacOptions.forEach((zodiac, index) => {
    const option = document.createElement('option');
    option.value = zodiac.key;
    option.textContent = index === 0 ? t('zodiacPlaceholder') : zodiac[currentLang];
    if (option.value === currentValue) option.selected = true;
    babyZodiacInput.appendChild(option);
  });
}

function getZodiacLabel() {
  const target = zodiacOptions.find((option) => option.key === babyZodiacInput.value);
  return target ? target[currentLang] : '';
}

function getMbtiBadgeMeta(mbti) {
  const meta = mbtiMetaMap[mbti] || mbtiMetaMap.ENFP;
  return {
    className: meta.colorClass,
    category: meta.category,
    nickname: meta.nickname,
    badgeText: `${meta.category} ${mbti}`
  };
}

function getMbtiImagePath(mbti) {
  return `./assets/mbti_${String(mbti).toLowerCase()}.png`;
}

function getZodiacSynergyText(mbti, zodiacKey) {
  const galaxy = mbtiGalaxyMap[mbti] || 'NF';
  const zodiacPack = zodiacSynergyDatabase[zodiacKey];
  if (!zodiacPack) return '';
  return zodiacPack[galaxy] || '';
}

function renderFinalReportSections({ deepAnalysis, zodiacSynergy, careers, parentingAdvice }) {
  analysisContent.textContent = deepAnalysis || '';
  zodiacContent.textContent = zodiacSynergy || '';
  parentingContent.textContent = parentingAdvice || '';
  careerList.innerHTML = '';
  (careers || []).forEach((career) => {
    const li = document.createElement('li');
    li.textContent = career;
    careerList.appendChild(li);
  });
}

function updateLanguageUI() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    el.setAttribute('placeholder', t(el.dataset.i18nPlaceholder));
  });
  langToggleBtn.textContent = currentLang === 'zh' ? 'EN' : '中文';
  renderZodiacOptions();

  if (!quizScreen.classList.contains('hidden')) {
    renderRound();
  } else if (!resultScreen.classList.contains('hidden')) {
    showResult();
  }
}

function getBabyAvatar(mbti) {
  const accessoryByMbti = {
    INTJ: `
      <rect x="29" y="35" width="18" height="10" rx="2.5" fill="none" stroke="#2f3342" stroke-width="2.6"/>
      <rect x="53" y="35" width="18" height="10" rx="2.5" fill="none" stroke="#2f3342" stroke-width="2.6"/>
      <line x1="47" y1="40" x2="53" y2="40" stroke="#2f3342" stroke-width="2.2"/>
    `,
    INTP: `
      <rect x="30" y="35" width="17" height="10" rx="2.5" fill="none" stroke="#2f3342" stroke-width="2.6"/>
      <rect x="53" y="35" width="17" height="10" rx="2.5" fill="none" stroke="#2f3342" stroke-width="2.6"/>
      <line x1="47" y1="40" x2="53" y2="40" stroke="#2f3342" stroke-width="2"/>
      <circle cx="72" cy="24" r="6" fill="#bfc7ff"/>
      <rect x="67" y="27" width="10" height="2.5" rx="1.2" fill="#8f97d9"/>
    `,
    ENTJ: `
      <path d="M35 27 L40 18 L46 26 L52 17 L58 26 L64 18 L69 27 Z" fill="#f0c36e"/>
      <circle cx="52" cy="19" r="2" fill="#f8e3a8"/>
    `,
    ESTJ: `
      <path d="M35 27 L40 18 L46 26 L52 17 L58 26 L64 18 L69 27 Z" fill="#f0c36e"/>
      <rect x="68" y="52" width="16" height="3.4" rx="1.7" fill="#d8a070" transform="rotate(-18 68 52)"/>
      <circle cx="82" cy="47" r="3" fill="#ffd7a5"/>
    `,
    ENFP: `
      <circle cx="40" cy="24" r="4.2" fill="#f6b8c9"/>
      <circle cx="49" cy="22" r="4.2" fill="#f7d9a8"/>
      <circle cx="58" cy="24" r="4.2" fill="#c5e7b4"/>
      <circle cx="67" cy="22" r="4.2" fill="#b8d9f7"/>
      <rect x="38" y="24" width="31" height="2.6" rx="1.2" fill="#93b18f"/>
    `,
    INFP: `
      <circle cx="41" cy="24" r="4" fill="#f7d0de"/>
      <circle cx="49" cy="22" r="4" fill="#ecd3ff"/>
      <circle cx="57" cy="24" r="4" fill="#ffdcb8"/>
      <rect x="38" y="20" width="22" height="9" rx="2" fill="#9dc4e6"/>
      <rect x="58" y="23" width="8" height="2.8" fill="#8f97d9" transform="rotate(18 58 23)"/>
    `,
    ISFJ: `
      <rect x="39" y="19" width="26" height="9" rx="2" fill="#ffffff"/>
      <path d="M39 28 Q52 35 65 28" fill="#f2f2f2"/>
      <rect x="47" y="22" width="10" height="3.2" rx="1.5" fill="#ffd9e8"/>
    `,
    ESFJ: `
      <path d="M35 25 C39 18,47 17,52 23 C57 17,65 18,69 25 C63 31,58 34,52 35 C46 34,41 31,35 25Z" fill="#ffbfd2"/>
      <circle cx="52" cy="27" r="2.5" fill="#ffdceb"/>
    `,
    ESTP: `
      <rect x="31" y="35" width="14" height="8.5" rx="2.8" fill="none" stroke="#6f7ea8" stroke-width="2.2"/>
      <rect x="47" y="35" width="14" height="8.5" rx="2.8" fill="none" stroke="#6f7ea8" stroke-width="2.2"/>
      <line x1="45" y1="39.2" x2="47" y2="39.2" stroke="#6f7ea8" stroke-width="2"/>
      <path d="M60 31 Q66 28 71 31" stroke="#6f7ea8" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    `,
    ISTP: `
      <path d="M31 31 Q52 17 73 31 L71 35 Q52 23 33 35 Z" fill="#85a4d5"/>
      <rect x="46" y="24" width="11" height="4" rx="2" fill="#6f7ea8"/>
    `,
    ESFP: `
      <rect x="30" y="30" width="44" height="8" rx="4" fill="#ffd2dd"/>
      <circle cx="38" cy="34" r="3.5" fill="#fff3b7"/>
      <circle cx="47" cy="34" r="3.5" fill="#b9e7f9"/>
      <circle cx="56" cy="34" r="3.5" fill="#c8efc2"/>
      <circle cx="65" cy="34" r="3.5" fill="#f8c4e0"/>
    `,
    ISFP: `
      <path d="M35 24 L62 24 L56 32 L29 32 Z" fill="#8eb8e6"/>
      <rect x="56" y="23" width="3" height="12" rx="1.5" fill="#7d86cb" transform="rotate(-15 56 23)"/>
      <circle cx="42" cy="28" r="2.3" fill="#ffd7a8"/>
      <circle cx="50" cy="28" r="2.3" fill="#f5b8ce"/>
    `,
    INFJ: `
      <ellipse cx="52" cy="23" rx="12" ry="5.5" fill="#f0e2ff"/>
      <path d="M52 30 L47 38 L52 36 L57 38 Z" fill="#c9b2f4"/>
    `,
    ENFJ: `
      <path d="M41 24 C41 20,44 18,47 18 C50 18,52 20,52 23 C52 20,54 18,57 18 C60 18,63 20,63 24 C63 30,58 34,52 37 C46 34,41 30,41 24Z" fill="#ffb8ca"/>
      <circle cx="52" cy="27" r="2.2" fill="#ffdce6"/>
    `,
    ENTP: `
      <circle cx="52" cy="23" r="6.5" fill="#c2d0ff"/>
      <rect x="50.8" y="13" width="2.4" height="5.5" rx="1.2" fill="#8f97d9"/>
      <line x1="52" y1="23" x2="58.5" y2="21.5" stroke="#7f88cc" stroke-width="2" stroke-linecap="round"/>
      <line x1="52" y1="23" x2="55" y2="28.5" stroke="#7f88cc" stroke-width="2" stroke-linecap="round"/>
    `,
    ISTJ: `
      <rect x="34" y="19" width="36" height="11" rx="2" fill="#ffffff" stroke="#cfd6e9" stroke-width="1.5"/>
      <line x1="40" y1="23" x2="64" y2="23" stroke="#9ea8cc" stroke-width="1.5"/>
      <line x1="40" y1="27" x2="60" y2="27" stroke="#9ea8cc" stroke-width="1.5"/>
    `
  };

  const accessory = accessoryByMbti[mbti] || '<circle cx="52" cy="22" r="5" fill="#d8c6ff"/>';

  return `
    <svg viewBox="0 0 260 260" role="img" aria-label="${mbti} 寶寶插畫" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="face" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stop-color="#fff" stop-opacity="0.95"/>
          <stop offset="100%" stop-color="${base}" stop-opacity="1"/>
        </radialGradient>
      </defs>
      <circle cx="130" cy="130" r="120" fill="url(#face)"/>
      <circle cx="90" cy="110" r="14" fill="#3f3554"/>
      <circle cx="170" cy="110" r="14" fill="#3f3554"/>
      <path d="M 90 170 Q 130 200 170 170" stroke="#3f3554" stroke-width="8" fill="none" stroke-linecap="round"/>
      <circle cx="56" cy="70" r="30" fill="${accent}" opacity="0.85"/>
      <circle cx="205" cy="70" r="30" fill="${accent}" opacity="0.85"/>
      <text x="130" y="68" text-anchor="middle" font-size="38" fill="#694c84">${mark}</text>
      <text x="130" y="134" text-anchor="middle" font-size="36">${accessory}</text>
      <text x="130" y="240" text-anchor="middle" font-size="30" font-family="Baloo 2">${mbti}</text>
    </svg>
  `;
}

function updateMusicButtonIcon(isPlaying) {
  musicToggleBtn.textContent = isPlaying ? '🎵' : '🔇';
  musicToggleBtn.classList.toggle('paused', !isPlaying);
}

function playBgmFromUserGesture() {
  bgmAudio.volume = 0.35;
  bgmAudio.playbackRate = 0.95;
  bgmAudio.muted = false;

  const playPromise = bgmAudio.play();
  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        updateMusicButtonIcon(true);
      })
      .catch((error) => {
        console.log('自動播放遭阻擋，需等待使用者互動', error);
        updateMusicButtonIcon(false);
      });
  }
}

musicToggleBtn.addEventListener('click', () => {
  if (bgmAudio.paused) {
    playBgmFromUserGesture();
    return;
  }

  bgmAudio.pause();
  updateMusicButtonIcon(false);
});

bgmAudio.addEventListener('pause', () => updateMusicButtonIcon(false));
bgmAudio.addEventListener('play', () => updateMusicButtonIcon(true));
bgmAudio.addEventListener('error', (error) => {
  console.log('背景音樂載入失敗', error);
  updateMusicButtonIcon(false);
});
updateMusicButtonIcon(!bgmAudio.paused);

langToggleBtn.addEventListener('click', () => {
  currentLang = currentLang === 'zh' ? 'en' : 'zh';
  updateLanguageUI();
});

updateLanguageUI();

document.getElementById('start-btn').addEventListener('click', () => {
  if (!babyNameInput.value.trim() || !babyZodiacInput.value.trim()) {
    alert(t('alertProfileRequired'));
    return;
  }

  bgmAudio.currentTime = 0;
  playBgmFromUserGesture();

  startScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');
  renderRound();
});

document.getElementById('prev-btn').addEventListener('click', () => {
  if (roundIndex > 0) {
    roundIndex -= 1;
    renderRound();
  }
});

document.getElementById('next-btn').addEventListener('click', () => {
  const current = rounds[roundIndex];
  if (!picks[current.key]) {
    alert(t('alertPickRequired'));
    return;
  }

  if (roundIndex < rounds.length - 1) {
    roundIndex += 1;
    renderRound();
    return;
  }

  showResult();
});

document.getElementById('restart-btn').addEventListener('click', resetAll);

function renderRound() {
  const round = rounds[roundIndex];
  const roundTitleKeyMap = { interest: 'roundInterest', ability: 'roundAbility', personality: 'roundPersonality' };
  const roundDescKeyMap = { interest: 'roundInterestDesc', ability: 'roundAbilityDesc', personality: 'roundPersonalityDesc' };
  const picked = picks[round.key];

  roundLabel.textContent = t('roundProgress').replace('{{current}}', String(roundIndex + 1)).replace('{{total}}', String(rounds.length));
  roundTitle.textContent = t(roundTitleKeyMap[round.key]);
  roundDesc.textContent = t(roundDescKeyMap[round.key]);

  optionsEl.innerHTML = '';
  round.options.forEach((item) => {
    const isSelected = picked?.id === item.id;
    const btn = document.createElement('button');
    btn.className = `option ${isSelected ? 'selected' : ''}`;
    btn.type = 'button';
    btn.setAttribute('aria-pressed', String(isSelected));
    const iconMarkup = getFrontFaceIconMarkup(item);
    const frontFaceHtml = round.key === 'personality'
      ? iconMarkup
      : `<span class="option-icon icon-${getItemIconKey(item)} ${hasFrontFaceImage(item) ? 'has-front-image' : ''}">${iconMarkup}</span>`;
    btn.innerHTML = `
      <span class="option-card-inner" aria-hidden="true">
        <span class="option-face option-front">
          ${frontFaceHtml}
        </span>
        <span class="option-face option-back">
          <span class="option-back-head">
            <span class="option-back-name">${getLocalizedItemName(item)}</span>
            <span class="option-back-mbti">${item.mbti}</span>
          </span>
          <span class="option-back-body">
            <span class="option-back-desc">${item.desc}</span>
          </span>
          <span class="option-back-traits">${renderOptionTraits(item)}</span>
        </span>
      </span>
    `;
    btn.addEventListener('click', () => {
      picks[round.key] = item;
      renderRound();
    });
    optionsEl.appendChild(btn);
  });

  selectedText.innerHTML = picked
    ? `${t('selectedPrefix')}<span class="inline-picked-icon">${getItemIconMarkup(picked)}</span> ${getLocalizedItemName(picked)}（${picked.mbti}）`
    : t('notSelected');
}

function renderOptionTraits(item) {
  const traits = Array.isArray(item.explain) ? item.explain.slice(0, 4) : [];
  return traits
    .map((trait) => `<span class="option-trait-pill">${escapeHtmlText(trait)}</span>`)
    .join('');
}

function computeMbti(chosen) {
  const count = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

  chosen.forEach((item) => {
    item.mbti.split('').forEach((ch) => {
      count[ch] += 1;
    });
  });

  return [
    count.E >= count.I ? 'E' : 'I',
    count.S >= count.N ? 'S' : 'N',
    count.T >= count.F ? 'T' : 'F',
    count.J >= count.P ? 'J' : 'P'
  ].join('');
}

function escapeHtmlText(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function showResult() {
  const chosen = [picks.interest, picks.ability, picks.personality];
  const mbti = computeMbti(chosen);
  const babyName = babyNameInput.value.trim();
  const babyZodiac = getZodiacLabel();
  const report = mbtiData[mbti] || { deepAnalysis: '', careers: [], parentingAdvice: '' };
  const badgeMeta = getMbtiBadgeMeta(mbti);
  const zodiacSynergy = getZodiacSynergyText(mbti, babyZodiacInput.value) || `當 ${babyZodiac} 座與 ${mbti} 相遇，寶寶會展現更鮮明的獨特光芒。`;

  reportName.textContent = `${babyName} 是 ${badgeMeta.nickname}`;
  reportMbti.classList.remove(...mbtiBadgeColorClasses);
  reportMbti.classList.add(badgeMeta.className);
  reportMbti.textContent = badgeMeta.badgeText;
  renderFinalReportSections({
    deepAnalysis: report.deepAnalysis,
    zodiacSynergy: zodiacSynergy.replaceAll('{{zodiac}}', babyZodiac),
    careers: report.careers,
    parentingAdvice: report.parentingAdvice
  });

  const mbtiImagePath = getMbtiImagePath(mbti);
  babyAvatar.innerHTML = `<img class="result-image" src="${mbtiImagePath}" alt="${badgeMeta.nickname} ${mbti} 結果圖" />`;

  pickedTags.innerHTML = '';
  chosen.forEach((item) => {
    const tag = document.createElement('div');
    tag.className = 'seal-item picked-item';
    const iconKey = getItemIconKey(item);
    const imageAsset = itemImageAssets[iconKey];
    const imageAlt = imageAsset?.alt || getLocalizedItemName(item);
    const imageSrc = imageAsset?.src || '';
    tag.innerHTML = `<img class="stamp-prop-image" src="${imageSrc}" alt="${imageAlt}" /><strong>${getLocalizedItemName(item)}</strong>`;
    pickedTags.appendChild(tag);
  });

  quizScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');
}

function resetAll() {
  picks.interest = null;
  picks.ability = null;
  picks.personality = null;
  roundIndex = 0;
  babyNameInput.value = '';
  babyZodiacInput.value = '';
  renderZodiacOptions();

  resultScreen.classList.add('hidden');
  quizScreen.classList.add('hidden');
  startScreen.classList.remove('hidden');
  analysisContent.textContent = '';
  zodiacContent.textContent = '';
  parentingContent.textContent = '';
  careerList.innerHTML = '';

  bgmAudio.pause();
  bgmAudio.currentTime = 0;
  updateMusicButtonIcon(false);
}
