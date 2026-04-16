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
  ISTJ: '秩序小守護者',
  ISFJ: '暖心小天使',
  INFJ: '星光小洞察家',
  INTJ: '未來小策士',
  ISTP: '機智小工匠',
  ISFP: '藝術小精靈',
  INFP: '夢想小旅人',
  INTP: '邏輯小發明家',
  ESTP: '行動小冒險王',
  ESFP: '舞台小太陽',
  ENFP: '靈感小魔法師',
  ENTP: '創意小探索家',
  ESTJ: '領航小隊長',
  ESFJ: '貼心小夥伴',
  ENFJ: '鼓舞小引導者',
  ENTJ: '遠見小指揮家'
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
const mbtiTitleEl = document.getElementById('mbti-title');
const pickedTags = document.getElementById('picked-tags');
const talentSection = document.getElementById('talent-section');
const personalitySection = document.getElementById('personality-section');
const blessingSection = document.getElementById('blessing-section');

const musicToggleBtn = document.getElementById('music-toggle');
const bgmAudio = document.getElementById('bgm-audio');

function updateMusicButton(isPlaying) {
  musicToggleBtn.textContent = isPlaying ? '⏸ 暫停魔法音樂' : '🎵 播放魔法音樂';
  musicToggleBtn.setAttribute('aria-pressed', String(isPlaying));
}

function playBgm() {
  bgmAudio.play()
    .then(() => {
      updateMusicButton(true);
    })
    .catch(() => {
      updateMusicButton(false);
      alert('請再點一次「🎵 播放魔法音樂」，讓瀏覽器確認播放權限。');
    });
}

function pauseBgm() {
  bgmAudio.pause();
  updateMusicButton(false);
}

musicToggleBtn.addEventListener('click', () => {
  if (bgmAudio.paused) {
    playBgm();
    return;
  }
  pauseBgm();
});

updateMusicButton(false);

document.getElementById('start-btn').addEventListener('click', () => {
  if (!babyNameInput.value.trim() || !babyZodiacInput.value.trim()) {
    alert('請先輸入寶寶小名與星座');
    return;
  }


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
  const title = mbtiTitles[result] || '宇宙小探險家';

  reportTitle.textContent = `${babyName} 的專屬星象圖`;
  reportSubtitle.textContent = `星座：${babyZodiac}座`;
  document.getElementById('base-info').textContent = `${babyName}・${babyZodiac}座`;
  document.getElementById('mbti-result').textContent = result;
  mbtiTitleEl.textContent = `${result} ${title}`;

  const pickedList = document.getElementById('picked-list');
  pickedList.innerHTML = '';
  chosen.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}. ${item.name}（${item.mbti}）`;
    pickedList.appendChild(li);
  });

  pickedTags.innerHTML = '';
  chosen.forEach((item) => {
    const tag = document.createElement('span');
    tag.className = 'pick-tag';
    tag.textContent = `${item.name} ✨`;
    pickedTags.appendChild(tag);
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

  generateFullReport();
}

function generateFullReport() {
  const name = babyNameInput.value.trim();
  const mbti = currentResult;

  const talentText = `親愛的爸爸媽媽，準備好迎接 ${name} 閃閃發光的未來了嗎？

在這次的抓周探索中，${name} 展現了屬於 ${mbti} 的獨特光芒！他/她天生具備絕佳的直覺與行動力，遇到問題時總能用自己獨特的方式找到解答。請放心給予他/她探索的空間，這孩子未來絕對會讓你們充滿驚喜。`;

  const personalityText = `骨子裡的 ${name}，是個溫暖又充滿潛力的小天使。比起傳統的框架，他/她更需要你們的鼓勵與陪伴。這份特質會讓他/她在未來的道路上，不僅能照顧好自己，還能成為周遭朋友們的小太陽。`;

  const blessingText = `所有的測驗都只是一個美好的起點。看著 ${name} 抓起的這些小道具，是不是覺得特別感動呢？無論未來這顆小星星選擇飛向哪個宇宙，你們滿滿的愛，永遠是他/她最堅強的後盾！祝 ${name} 週歲快樂，平安健康長大！`;

  talentSection.textContent = talentText;
  personalitySection.textContent = personalityText;
  blessingSection.textContent = blessingText;

  const reportText = `${talentText}

${personalityText}

${blessingText}`;
  deepReport.textContent = reportText;
  reportStatus.textContent = '';
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
  document.getElementById('mbti-result').textContent = '';
  document.getElementById('base-info').textContent = '';
  selectedText.textContent = '尚未選擇';
  reportStatus.textContent = '';
  deepReport.textContent = '';
  reportTitle.textContent = '';
  reportSubtitle.textContent = '';
  mbtiTitleEl.textContent = '';
  pickedTags.innerHTML = '';
  talentSection.textContent = '';
  personalitySection.textContent = '';
  blessingSection.textContent = '';

  resultScreen.classList.add('hidden');
  startScreen.classList.remove('hidden');
}
