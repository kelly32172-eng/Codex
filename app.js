const rounds = [
  {
    key: 'interest',
    label: '第一關：天賦雷達啟動！看看他怎麼感知世界',
    options: [
      { name: '書', mbti: 'INTJ', desc: '被故事與知識內容吸引，喜歡透過閱讀探索世界。', explain: '吸收資訊 / 概念想像 / 邏輯理解 / 結構學習' },
      { name: '調色盤', mbti: 'INFP', desc: '被色彩與創作吸引，喜歡用畫面表達想法。', explain: '內在表達 / 抽象思維 / 感受導向 / 自由主義' },
      { name: '球', mbti: 'ESTP', desc: '被動態活動吸引，喜歡透過肢體與環境互動。', explain: '外界交流 / 具體體驗 / 競爭關係 / 靈活互動' },
      { name: '鋼琴', mbti: 'ENFP', desc: '被聲音與節奏吸引，喜歡用音樂感受與表達。', explain: '對外表現 / 抽象連結 / 情感表達 / 即興發揮' },
      { name: '相機', mbti: 'ISFJ', desc: '被畫面與細節吸引，喜歡用視覺理解世界。', explain: '觀察行為 / 細節敏銳 / 重視情緒 / 選擇框架' },
      { name: '飛機', mbti: 'ENTP', desc: '被未知與新環境吸引，喜歡旅遊並探索世界。', explain: '向外探索 / 關注方向 / 理解系統 / 開放自由' }
    ]
  },
  {
    key: 'ability',
    label: '第二關：能力挑戰開跑！看看他怎麼解任務',
    options: [
      { name: '積木', mbti: 'ISFJ', desc: '透過空間建構與調整，打造理想的創作。', explain: '內向建構 / 細節堆疊 / 創作設計 / 穩定執行' },
      { name: '鏡子', mbti: 'ENFP', desc: '透過他人互動與情感連結，理解自己與世界。', explain: '互動連結 / 抽象感知 / 情感共鳴 / 自由表達' },
      { name: '黑板', mbti: 'ENFJ', desc: '透過分享與教導，將知識與想法傳遞給他人。', explain: '群體互動 / 意義傳達 / 社會責任 / 條理引導' },
      { name: '導演場記板', mbti: 'ENTJ', desc: '透過組織與指揮，帶領團隊實現宏大的目標。', explain: '掌控全局 / 未來洞察 / 效率導向 / 秩序管理' },
      { name: '計算機', mbti: 'INTP', desc: '透過邏輯與數據，分析事物背後的運作規律。', explain: '獨立分析 / 系統模型 / 理性邏輯 / 開放假設' },
      { name: '醫療箱', mbti: 'ISFP', desc: '透過照顧與服務，細心修復他人的身體與心靈。', explain: '安靜關懷 / 實務執行 / 情緒支持 / 隨機應變' }
    ]
  },
  {
    key: 'personality',
    label: '第三關：個性星光秀！看看他最閃亮的特質',
    options: [
      { name: '愛心', mbti: 'ESFJ', desc: '天生具備同理心，喜歡照顧他人並維持和諧關係。', explain: '外向社交 / 現實關懷 / 情感連結 / 秩序守護' },
      { name: '皇冠', mbti: 'ENTJ', desc: '具備領袖氣質，自信果斷且充滿目標導向的動力。', explain: '影響他人 / 宏觀視野 / 理性決策 / 計畫執行' },
      { name: '太陽', mbti: 'ESFP', desc: '充滿活力與熱情，能照亮周遭並享受當下的美好。', explain: '舞台中心 / 感官體驗 / 歡樂氛圍 / 即興探索' },
      { name: '月亮', mbti: 'INFJ', desc: '沉靜深邃，具備敏銳直覺與對真理的深刻追求。', explain: '內省洞察 / 意義探索 / 溫暖同理 / 價值堅持' },
      { name: '齒輪', mbti: 'ISTJ', desc: '嚴謹負責，重視細節與秩序，是系統穩定的支柱。', explain: '安靜負責 / 現實細節 / 邏輯準則 / 計畫可靠' },
      { name: '雲朵', mbti: 'INFP', desc: '自由夢幻，擁有豐富想像力且追求心靈的絕對純粹。', explain: '內在世界 / 抽象理想 / 核心價值 / 靈活變通' }
    ]
  }
];

const picks = { interest: null, ability: null, personality: null };
let roundIndex = 0;

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const babyNameInput = document.getElementById('baby-name');
const babyZodiacInput = document.getElementById('baby-zodiac');
const roundLabel = document.getElementById('round-label');
const roundTitle = document.getElementById('round-title');
const optionsEl = document.getElementById('options');
const selectedText = document.getElementById('selected-text');

document.getElementById('start-btn').addEventListener('click', () => {
  if (!babyNameInput.value.trim() || !babyZodiacInput.value.trim()) {
    alert('請先輸入寶寶姓名與星座');
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

document.getElementById('restart-btn').addEventListener('click', () => {
  picks.interest = null;
  picks.ability = null;
  picks.personality = null;
  roundIndex = 0;
  babyNameInput.value = '';
  babyZodiacInput.value = '';
  document.getElementById('picked-list').innerHTML = '';
  document.getElementById('dimension-list').innerHTML = '';
  document.getElementById('mbti-result').textContent = '';
  document.getElementById('base-info').textContent = '';
  selectedText.textContent = '';
  document.getElementById('deep-report').textContent = '';
  resultScreen.classList.add('hidden');
  startScreen.classList.remove('hidden');
});

function renderRound() {
  const round = rounds[roundIndex];
  roundLabel.textContent = `第 ${roundIndex + 1} 關 / 3`;
  roundTitle.textContent = round.label;

  optionsEl.innerHTML = '';
  round.options.forEach((item) => {
    const btn = document.createElement('button');
    btn.className = `option ${picks[round.key]?.name === item.name ? 'selected' : ''}`;
    btn.innerHTML = `
      <h4>${item.name} (${item.mbti})</h4>
      <p>${item.desc}</p>
      <small>解釋：${item.explain}</small>
    `;
    btn.addEventListener('click', () => {
      picks[round.key] = item;
      renderRound();
    });
    optionsEl.appendChild(btn);
  });

  const picked = picks[round.key];
  selectedText.textContent = picked ? `已選擇：${picked.name} (${picked.mbti})` : '尚未選擇';
}

function buildLocalReport({ name, zodiac, result, chosen, dimensionLines }) {
  const traits = chosen.map((item) => `${item.name}(${item.mbti})`).join('、');
  const nickname = `${name}的小宇宙探險家`;
  const zodiacBoostMap = {
    牡羊: '行動力 + 直覺啟動力，遇到新挑戰時更有「先試再說」的勇氣。',
    金牛: '穩定力 + 感官專注力，能把喜歡的事反覆練習到很紮實。',
    雙子: '語言力 + 好奇心，擅長提問、連結新資訊並快速切換視角。',
    巨蟹: '同理力 + 安全感雷達，對家庭與情緒氛圍有高度敏銳度。',
    獅子: '舞台力 + 表現慾，喜歡被看見，也願意為團隊帶來熱情。',
    處女: '細節力 + 組織力，會主動把步驟整理好，追求「更完整」。',
    天秤: '協調力 + 美感判斷，重視公平與和諧，也有不錯的審美天賦。',
    天蠍: '洞察力 + 專注深度，對有興趣的主題會鑽研到非常深入。',
    射手: '探索力 + 冒險精神，喜歡跨領域嘗試，從體驗中建立觀點。',
    摩羯: '耐力 + 目標管理，能把長期計畫拆成可執行的小步驟。',
    水瓶: '創新力 + 系統思考，常有跳脫框架的點子與獨特觀點。',
    雙魚: '想像力 + 共感力，容易進入故事情境，具有藝術與療癒氣質。'
  };
  const zodiacBoost = zodiacBoostMap[zodiac] || '綜合加成：具備溫柔觀察與彈性調整的潛力。';
  return [
    `【小星星專屬成長報告】`,
    `綽號：${nickname}`,
    `星座：${zodiac}`,
    ``,
    `一、測驗結果分析`,
    `${name} 本次抓周依序選擇 ${traits}，整體呈現 ${result} 傾向。從三關行為看來，孩子不只是「喜歡某一種玩具」，而是展現出「先感受、再連結、最後形成偏好」的思考流程。向度統計（${dimensionLines.join('；')}）顯示目前人格能量仍在發育中，建議把結果理解為「此階段的亮點」，而不是固定標籤。若在不同情境下重測，孩子可能展現出更多面向，這正是成長中的正常且可喜現象。`,
    ``,
    `二、星座加成`,
    `${zodiac}寶寶的加成特質：${zodiacBoost} 這項加成和本次道具選擇互相呼應，代表孩子在天生氣質與後天探索之間有不錯的協同效果。家長可以把這份加成當作教養時的「引導方向」，例如在孩子最投入的活動中加入小任務，讓天賦透過遊戲慢慢被看見。`,
    ``,
    `三、推薦職業方向（長期潛力）`,
    `1) 創意表達類：內容創作者、設計企劃、音樂或藝術相關領域。`,
    `2) 人際互動類：教育工作者、兒童陪伴、活動引導與品牌溝通。`,
    `3) 分析整合類：研究企劃、產品策略、系統思考與專案管理。`,
    `以上方向不是要提早定型，而是提醒家長：可優先提供「能探索、能表達、能解題」的素材，讓孩子在多元體驗中逐步找到真正熱愛的舞台。`,
    ``,
    `四、教養方針建議`,
    `（1）先陪伴再指導：先接住情緒，再談規則，孩子會更願意合作。`,
    `（2）多用選擇題而非命令句：例如「你想先畫畫還是先拼圖？」能提升自主感。`,
    `（3）建立可預期節奏：固定作息與儀式感能增加安全感，減少情緒耗損。`,
    `（4）用過程讚美取代結果評價：聚焦努力、嘗試與修正，培養成長型思維。`,
    `（5）每月一次親子回顧：一起聊聊最近最喜歡的活動、最想挑戰的新目標，讓天賦在對話中被持續點亮。`,
    ``,
    `結語：${nickname} 的成長關鍵字是「好奇、連結、發光」。只要在溫暖且有邊界的環境中持續探索，孩子會把天賦轉化成穩定自信，走出屬於自己的星光路徑。`
  ].join('\n\n');
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
    count.E >= 2 ? 'E' : count.I >= 2 ? 'I' : 'X',
    count.S >= 2 ? 'S' : count.N >= 2 ? 'N' : 'X',
    count.T >= 2 ? 'T' : count.F >= 2 ? 'F' : 'X',
    count.J >= 2 ? 'J' : count.P >= 2 ? 'P' : 'X'
  ].join('');

  document.getElementById('base-info').textContent = `寶寶姓名：${babyNameInput.value.trim()}｜星座：${babyZodiacInput.value.trim()}`;
  document.getElementById('mbti-result').textContent = result;

  const pickedList = document.getElementById('picked-list');
  pickedList.innerHTML = '';
  chosen.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}. ${item.name} (${item.mbti})`;
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

  document.getElementById('deep-report').textContent = buildLocalReport({
    name: babyNameInput.value.trim(),
    zodiac: babyZodiacInput.value.trim(),
    result,
    chosen,
    dimensionLines
  });

  quizScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');
}
