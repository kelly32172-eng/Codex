const rounds = [
  {
    key: 'interest',
    label: '第一關：興趣分類',
    options: [
      {
        name: '書',
        mbti: 'ISTJ',
        title: '閱讀與知識',
        desc: '被故事與知識內容吸引,喜歡透過閱讀探索世界。',
        explain: ['專注書中世界', '重視文字記載', '吸收邏輯與事實', '按部就班地學習']
      },
      {
        name: '飛機',
        mbti: 'ENTP',
        title: '旅遊與探索',
        desc: '被未知與新環境吸引,喜歡旅遊並探索世界。',
        explain: ['學習向外探索', '嚮往未知的遠方', '理解異國文化', '享受隨性的自由']
      },
      {
        name: '球',
        mbti: 'ESTP',
        title: '運動與競技',
        desc: '被動態活動吸引,喜歡透過肢體與環境互動。',
        explain: ['與他人交流', '重視具體體驗', '分析競爭優劣勢', '在場上靈活互動']
      },
      {
        name: '鋼琴',
        mbti: 'ISFP',
        title: '音樂與節奏',
        desc: '被聲音與節奏吸引,喜歡用音樂感受與表達。',
        explain: ['探索內在情感', '實際彈奏樂器', '隨心情演奏樂曲', '擅長即興發揮']
      },
      {
        name: '調色盤',
        mbti: 'ENFP',
        title: '色彩與創作',
        desc: '被色彩與創作吸引,喜歡用畫面表達想法。',
        explain: ['展現藝術', '表達色彩的抽象', '用不同顏色代表情感', '自由揮灑創作']
      },
      {
        name: '相機',
        mbti: 'INFJ',
        title: '影像與紀錄',
        desc: '被畫面與細節吸引,喜歡用觀察理解世界。',
        explain: ['擅長觀察周遭', '用畫面象徵故事', '帶有溫度的影像', '有計劃地構圖']
      }
    ]
  },
  {
    key: 'ability',
    label: '第二關：能力取向',
    options: [
      {
        name: '計算機',
        mbti: 'INTP',
        title: '數理邏輯力',
        desc: '具備強大的邏輯運算與數據分析天賦。',
        explain: ['獨立解決問題', '思考抽象數理邏輯', '理性做數據分析', '善於嘗試各種解法']
      },
      {
        name: '筆',
        mbti: 'INTJ',
        title: '計劃組織力',
        desc: '具備統整思維與結構化表達的天賦。',
        explain: ['沉澱思考', '規劃書寫架構', '文體結構分明', '有系統地撰寫文章']
      },
      {
        name: '積木',
        mbti: 'ISTP',
        title: '空間實作力',
        desc: '具備動手操作與空間結構的建構天賦。',
        explain: ['專注零件操作', '擅長實際手作', '分析構造與定律', '重組各種可能']
      },
      {
        name: '指南針',
        mbti: 'ENTJ',
        title: '方向決策力',
        desc: '具備判斷趨勢與決定前進目標的天賦。',
        explain: ['指引團隊前行', '想像未來目的', '理性規劃路線', '有計劃地執行']
      },
      {
        name: '麥克風',
        mbti: 'ESFP',
        title: '口語表達力',
        desc: '具備感染人群與大方自信的表演天賦。',
        explain: ['熱衷向外發聲', '強調現場張力', '擅長感性表達', '享受即興演説']
      },
      {
        name: '醫藥箱',
        mbti: 'ESFJ',
        title: '協調關懷力',
        desc: '具備細心照顧與組織人群福利的天賦。',
        explain: ['建立與他人的溫暖互動', '提供具體實務支援', '能以同理心關懷', '遵循規範']
      }
    ]
  },
  {
    key: 'personality',
    label: '第三關：人格核心',
    options: [
      {
        name: '愛心',
        mbti: 'ISFJ',
        title: '守護者',
        desc: '溫柔穩定,重視情感交流與互動。',
        explain: ['內斂體貼', '給予實際關心', '充滿同理心', '守護長期的安定感']
      },
      {
        name: '皇冠',
        mbti: 'ESTJ',
        title: '領導者',
        desc: '展現自信與領導風範,喜歡建立秩序。',
        explain: ['在群體發揮影響', '注重效率和實質成果', '客觀準則', '善於掌控秩序']
      },
      {
        name: '太陽',
        mbti: 'ENFP',
        title: '啟發者',
        desc: '熱情奔放,能照亮並鼓舞身邊的人。',
        explain: ['對外擴散能量', '有天馬行空的靈感', '對人事物充滿熱情', '不受框架限制']
      },
      {
        name: '月亮',
        mbti: 'INTJ',
        title: '思考者',
        desc: '富有智慧,喜歡獨立鑽研事物的本質。',
        explain: ['深沉冷靜', '具備洞察力', '善於冷靜決策', '能有條不紊地實踐計劃']
      },
      {
        name: '齒輪',
        mbti: 'ENTP',
        title: '革新者',
        desc: '擅長靈活變通,是推動系統進化的原動力。',
        explain: ['帶動團隊運轉', '發想各種方案', '追求理性的運作模式', '適應環境變動']
      },
      {
        name: '雲朵',
        mbti: 'ISFP',
        title: '隨心者',
        desc: '懂得享受生活,擁有純真且不受拘束的靈魂。',
        explain: ['享受獨處的自在', '對環境變化敏感', '對世界充滿包容', '展現生活的彈性']
      }
    ]
  }
];

const picks = { interest: null, ability: null, personality: null };
let roundIndex = 0;
let currentResult = '';
const mbtiTitles = {
  ISTJ: '沉穩小學霸',
  ISFJ: '暖心小天使',
  INFJ: '星光小洞察家',
  INTJ: '未來小策士',
  ISTP: '機智小工匠',
  ISFP: '藝術小精靈',
  INFP: '夢想小旅人',
  INTP: '邏輯小發明家',
  ESTP: '行動小冒險王',
  ESFP: '舞台小太陽',
  ENFP: '啟發者小太陽',
  ENTP: '創意小探索家',
  ESTJ: '領航小隊長',
  ESFJ: '貼心小夥伴',
  ENFJ: '鼓舞小引導者',
  ENTJ: '遠見小指揮家'
};

const reportDatabase = {
  ENFP: {
    title: 'ENFP 啟發者小太陽',
    heroGradient: 'linear-gradient(145deg, #ffd2f1, #b8f3ff)',
    analysis: '骨子裡的 ENFP 寶寶，是個溫暖又充滿潛力的小天使。他/她天生具備絕佳的直覺與行動力，擁有天馬行空的想像力。比起傳統的框架，他/她更喜歡用自己的方式探索世界，這份無可救藥的樂觀與熱情，會讓他/她成為同儕中最受歡迎的靈魂人物。',
    zodiacBonus: (zodiac) => `當 ENFP 遇上 ${zodiac} 的特質，就像是為熱氣球裝上了最精準的導航！${zodiac} 的能量會讓寶寶在散發光芒的同時，多了一份獨特的魅力與專注力，讓創意不僅僅是想像，更能精彩落地。`,
    career: '天生的創意家與溝通者！未來非常適合從事：藝術創作者、公關行銷專家、心理諮商師、甚至自己創立帶有社會意義的新創品牌。任何能讓他/她發揮靈感、與人深度交流的舞台，都是他/她的主場。',
    parenting: '這孩子不需要過多的指令與限制。爸爸媽媽能給他/她最好的禮物，就是「傾聽與陪伴」。當他/她提出天馬行空的想法時，不要急著否定，陪著他/她一起做夢、一起實踐。給予足夠的情感支持，他/她就能勇敢飛翔。'
  },
  ISTJ: {
    title: 'ISTJ 沉穩小學霸',
    heroGradient: 'linear-gradient(145deg, #d7e6ff, #c7c1ff)',
    analysis: 'ISTJ 寶寶擁有超乎同齡人的穩定與專注力。他/她就像一個精密的穩固齒輪，喜歡事物有條不紊、按部就班。他/她擁有極強的責任感與觀察力，不喜歡張揚，但只要交給他/她的任務，總能用最踏實、完美的腳步完成。',
    zodiacBonus: (zodiac) => `穩重的 ISTJ 加上 ${zodiac} 的守護，讓寶寶擁有一種讓人極度安心的氣場。${zodiac} 會柔化他/她過於嚴謹的邊界，讓他/她在堅持原則的同時，也能展現出溫暖、懂得照顧他人的一面。`,
    career: '社會的中流砥柱！他/她那嚴謹的邏輯與對細節的掌控力，非常適合成為：專業醫師、財務金融分析師、高階專案經理、或是法律界專業人士。只要有清晰的規則與目標，他/她就能發揮極致。',
    parenting: '這是一個極度需要「安全感與規律」的孩子。爸爸媽媽請盡量讓他/她的生活保持可預測性。在教導時，比起感性的說服，跟講明「原因與邏輯」更能讓他/她接受。多稱讚他/她努力的過程，他/她會成為你們一輩子最可靠的驕傲。'
  },
  // TODO: ISFJ 專屬報告內容
  // TODO: INFJ 專屬報告內容
  // TODO: INTJ 專屬報告內容
  // TODO: ISTP 專屬報告內容
  // TODO: ISFP 專屬報告內容
  // TODO: INFP 專屬報告內容
  // TODO: INTP 專屬報告內容
  // TODO: ESTP 專屬報告內容
  // TODO: ESFP 專屬報告內容
  // TODO: ENTP 專屬報告內容
  // TODO: ESTJ 專屬報告內容
  // TODO: ESFJ 專屬報告內容
  // TODO: ENFJ 專屬報告內容
  // TODO: ENTJ 專屬報告內容
};

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const babyNameInput = document.getElementById('baby-name');
const babyZodiacInput = document.getElementById('baby-zodiac');
const roundLabel = document.getElementById('round-label');
const roundTitle = document.getElementById('round-title');
const optionsEl = document.getElementById('options');
const selectedText = document.getElementById('selected-text');
const reportStatus = document.getElementById('report-status');
const deepReport = document.getElementById('deep-report');
const reportTitle = document.getElementById('report-title');
const reportSubtitle = document.getElementById('report-subtitle');
const mbtiResultEl = document.getElementById('mbti-result');
const mbtiTitleEl = document.getElementById('mbti-title');
const baseInfoEl = document.getElementById('base-info');
const pickedTags = document.getElementById('picked-tags');
const analysisSection = document.getElementById('analysis-section');
const zodiacSection = document.getElementById('zodiac-section');
const careerSection = document.getElementById('career-section');
const parentingSection = document.getElementById('parenting-section');
const heroCard = document.getElementById('hero-card');

const bgmAudio = document.getElementById('bgm-audio');

function playBgmSeamlessly() {
  bgmAudio.play().catch(() => {
    // 某些瀏覽器仍可能拒絕播放，避免打斷流程
  });
}

document.getElementById('start-btn').addEventListener('click', () => {
  if (!babyNameInput.value.trim() || !babyZodiacInput.value.trim()) {
    alert('請先輸入寶寶小名與星座');
    return;
  }

  playBgmSeamlessly();
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
    alert('本關請先選 1 個道具');
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
  roundLabel.textContent = `第 ${roundIndex + 1} 關 / 3`;
  roundTitle.textContent = round.label;

  optionsEl.innerHTML = '';
  round.options.forEach((item) => {
    const btn = document.createElement('button');
    btn.className = `option ${picks[round.key]?.name === item.name ? 'selected' : ''}`;
    btn.innerHTML = `
      <h4>${item.name}（${item.mbti}）</h4>
      <p><strong>${item.title}</strong>：${item.desc}</p>
      <div class="badge-wrap">
        ${item.explain.map((part) => `<span class="explain-badge">${part}</span>`).join('')}
      </div>
    `;
    btn.addEventListener('click', () => {
      picks[round.key] = item;
      renderRound();
    });
    optionsEl.appendChild(btn);
  });

  const picked = picks[round.key];
  selectedText.textContent = picked ? `已選擇：${picked.name}（${picked.mbti}）` : '尚未選擇';
}

function showResult() {
  const chosen = [picks.interest, picks.ability, picks.personality];
  const count = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

  chosen.forEach((item) => {
    item.mbti.split('').forEach((ch) => {
      count[ch] += 1;
    });
  });

  const result = [
    count.E >= 2 ? 'E' : 'I',
    count.S >= 2 ? 'S' : 'N',
    count.T >= 2 ? 'T' : 'F',
    count.J >= 2 ? 'J' : 'P'
  ].join('');
  currentResult = result;

  const babyName = babyNameInput.value.trim();
  const babyZodiac = babyZodiacInput.value.trim();

  reportTitle.textContent = `${babyName} 的 16 型成長圖卡`;
  reportSubtitle.textContent = `抓周宇宙人格：${result}`;
  mbtiResultEl.textContent = result;
  mbtiTitleEl.textContent = reportDatabase[result]?.title || `${result} ${mbtiTitles[result] || '宇宙小探險家'}`;
  baseInfoEl.textContent = `${babyName}・${babyZodiac}座`;

  pickedTags.innerHTML = '';
  chosen.forEach((item) => {
    const tag = document.createElement('span');
    tag.className = 'pick-tag';
    tag.textContent = `${item.name} ✨`;
    pickedTags.appendChild(tag);
  });

  renderReportBlocks({ mbti: result, name: babyName, zodiac: babyZodiac });

  const pickedList = document.getElementById('picked-list');
  pickedList.innerHTML = '';
  chosen.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}. ${item.name}（${item.mbti}）`;
    pickedList.appendChild(li);
  });

  const dimensionLines = [
    `E:${count.E} / I:${count.I}`,
    `S:${count.S} / N:${count.N}`,
    `T:${count.T} / F:${count.F}`,
    `J:${count.J} / P:${count.P}`
  ];

  const dimensionList = document.getElementById('dimension-list');
  dimensionList.innerHTML = '';
  dimensionLines.forEach((line) => {
    const li = document.createElement('li');
    li.textContent = line;
    dimensionList.appendChild(li);
  });

  quizScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');
}

function renderReportBlocks({ mbti, name, zodiac }) {
  const report = reportDatabase[mbti];

  if (report) {
    heroCard.style.background = report.heroGradient;
    analysisSection.textContent = report.analysis;
    zodiacSection.textContent = report.zodiacBonus(zodiac);
    careerSection.textContent = report.career;
    parentingSection.textContent = report.parenting;
    reportStatus.textContent = `親愛的爸爸媽媽，這是 ${name} 專屬的 ${mbti} 深度解讀。`;
  } else {
    heroCard.style.background = 'linear-gradient(145deg, #d7b8ff, #9bd8ff)';
    analysisSection.textContent = `${name} 在抓周中展現出 ${mbti} 的人格傾向。完整專屬分析正在擴充中，先恭喜你們找到孩子目前最亮眼的天賦方向！`;
    zodiacSection.textContent = `${zodiac} 的星座能量會為 ${name} 加上一層獨特魅力，協助他/她在成長路上更穩定發光。`;
    careerSection.textContent = '可先從孩子日常偏好的活動著手，觀察其持續投入的領域，作為未來學習與生涯探索的起點。';
    parentingSection.textContent = '請持續用陪伴與鼓勵，接住孩子的好奇心；給予穩定節奏與自由探索並行的環境，就是最好的教養。';
    reportStatus.textContent = `${mbti} 專屬圖卡內容將於後續版本補完。`;
  }

  deepReport.textContent = [
    `【MBTI 分析】${analysisSection.textContent}`,
    `【星座加成】${zodiacSection.textContent}`,
    `【未來職業參考】${careerSection.textContent}`,
    `【爸媽教養建議】${parentingSection.textContent}`
  ].join('\\n\\n');
}

function resetAll() {
  picks.interest = null;
  picks.ability = null;
  picks.personality = null;
  roundIndex = 0;
  currentResult = '';

  babyNameInput.value = '';
  babyZodiacInput.value = '';
  document.getElementById('picked-list').innerHTML = '';
  document.getElementById('dimension-list').innerHTML = '';
  mbtiResultEl.textContent = '';
  baseInfoEl.textContent = '';
  selectedText.textContent = '尚未選擇';
  reportStatus.textContent = '';
  deepReport.textContent = '';
  reportTitle.textContent = '';
  reportSubtitle.textContent = '';
  mbtiTitleEl.textContent = '';
  pickedTags.innerHTML = '';
  analysisSection.textContent = '';
  zodiacSection.textContent = '';
  careerSection.textContent = '';
  parentingSection.textContent = '';
  heroCard.style.background = 'linear-gradient(145deg, #d7b8ff, #9bd8ff)';

  resultScreen.classList.add('hidden');
  startScreen.classList.remove('hidden');
}
