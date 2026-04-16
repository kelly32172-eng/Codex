const API_KEY = '';

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
  document.getElementById('payment-loading').classList.add('hidden');
  resultScreen.classList.add('hidden');
  startScreen.classList.remove('hidden');
});

document.getElementById('unlock-btn').addEventListener('click', async () => {
  const loading = document.getElementById('payment-loading');
  const reportEl = document.getElementById('deep-report');
  const mbti = document.getElementById('mbti-result').textContent;
  loading.classList.remove('hidden');
  reportEl.textContent = '';

  await new Promise((resolve) => setTimeout(resolve, 2000));

  const prompt = `請根據寶寶姓名 ${babyNameInput.value.trim()}、星座 ${babyZodiacInput.value.trim()}、測驗結果 ${mbti} 撰寫一份 500 字溫馨的成長天賦報告。`;

  try {
    if (!API_KEY) {
      throw new Error('請先設定 API_KEY');
    }

    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4.1-mini',
        input: prompt
      })
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error?.message || 'API 呼叫失敗');
    }

    reportEl.textContent = data.output_text || '未收到報告內容';
  } catch (err) {
    reportEl.textContent = `解鎖失敗：${err.message}`;
  } finally {
    loading.classList.add('hidden');
  }
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

  const dimensionList = document.getElementById('dimension-list');
  dimensionList.innerHTML = '';
  [
    `E:${count.E} / I:${count.I}`,
    `S:${count.S} / N:${count.N}`,
    `T:${count.T} / F:${count.F}`,
    `J:${count.J} / P:${count.P}`
  ].forEach((line) => {
    const li = document.createElement('li');
    li.textContent = line;
    dimensionList.appendChild(li);
  });

  quizScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');
}
