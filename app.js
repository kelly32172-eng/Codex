const roundConfig = [
  {
    key: 'interest',
    label: 'Round 1 / 3｜興趣（感知世界方式）',
    title: '第一輪：選一個最吸引寶寶的道具',
    subtitle: '這一輪會影響偏好軸向，請直覺點選一個。'
  },
  {
    key: 'ability',
    label: 'Round 2 / 3｜能力（處理問題方式）',
    title: '第二輪：選一個代表寶寶能力偏好的道具',
    subtitle: '此輪可作為同分時的第二優先判定。'
  },
  {
    key: 'personality',
    label: 'Round 3 / 3｜人格特質（成為怎樣的人）',
    title: '第三輪：選一個最符合你想像人格的道具',
    subtitle: '此輪同時有較高權重，並作為 tie-breaker。'
  }
];

const props = [
  { id: 'i1', round_type: 'interest', name_zh: '小鼓', meaning: '喜歡互動與表達', keyword: '外向能量', mbti_axis: 'EI', axis_value: 'E', weight: 1.0 },
  { id: 'i2', round_type: 'interest', name_zh: '拼圖', meaning: '偏好安靜觀察', keyword: '內在探索', mbti_axis: 'EI', axis_value: 'I', weight: 1.0 },
  { id: 'i3', round_type: 'interest', name_zh: '放大鏡', meaning: '重視細節與實際', keyword: '感官實證', mbti_axis: 'SN', axis_value: 'S', weight: 1.0 },
  { id: 'i4', round_type: 'interest', name_zh: '星空卡', meaning: '喜歡想像與聯想', keyword: '抽象想像', mbti_axis: 'SN', axis_value: 'N', weight: 1.0 },

  { id: 'a1', round_type: 'ability', name_zh: '積木尺規', meaning: '按步驟解題', keyword: '邏輯分析', mbti_axis: 'TF', axis_value: 'T', weight: 1.2 },
  { id: 'a2', round_type: 'ability', name_zh: '故事娃娃', meaning: '先感受再判斷', keyword: '情感同理', mbti_axis: 'TF', axis_value: 'F', weight: 1.2 },
  { id: 'a3', round_type: 'ability', name_zh: '收納盒', meaning: '喜歡有規律', keyword: '結構安排', mbti_axis: 'JP', axis_value: 'J', weight: 1.2 },
  { id: 'a4', round_type: 'ability', name_zh: '探險包', meaning: '彈性應變', keyword: '隨機探索', mbti_axis: 'JP', axis_value: 'P', weight: 1.2 },

  { id: 'p1', round_type: 'personality', name_zh: '麥克風', meaning: '主動連結人群', keyword: '熱情帶動', mbti_axis: 'EI', axis_value: 'E', weight: 1.3 },
  { id: 'p2', round_type: 'personality', name_zh: '閱讀帳篷', meaning: '沉浸內在世界', keyword: '獨處充電', mbti_axis: 'EI', axis_value: 'I', weight: 1.3 },
  { id: 'p3', round_type: 'personality', name_zh: '工具箱', meaning: '重事實與效率', keyword: '理性規劃', mbti_axis: 'TF', axis_value: 'T', weight: 1.3 },
  { id: 'p4', round_type: 'personality', name_zh: '愛心貼紙', meaning: '重關係與感受', keyword: '溫暖關懷', mbti_axis: 'TF', axis_value: 'F', weight: 1.3 }
];

const mbtiProfiles = {
  ENFP: {
    title: '小小靈感探險家',
    summary: '寶寶天生帶著好奇雷達，喜歡和人互動，也愛把新點子變成遊戲。',
    tips: ['提供自由探索空間與安全邊界', '以故事方式引導規則', '多安排同儕互動活動'],
    paths: ['感官探索遊戲', '音樂律動課', '角色扮演活動']
  },
  ISTJ: {
    title: '穩定秩序小達人',
    summary: '寶寶偏好可預期流程，對細節敏感，透過反覆練習建立安全感。',
    tips: ['建立固定作息節奏', '新活動先示範再嘗試', '給予明確、簡短指令'],
    paths: ['拼圖分類遊戲', '步驟型手作', '規律運動任務']
  },
  INFJ: {
    title: '細膩洞察小星星',
    summary: '寶寶觀察力佳、感受細膩，能從小細節捕捉他人情緒。',
    tips: ['尊重情緒需要，避免過度刺激', '用溫和提問引導表達', '透過繪本建立價值感'],
    paths: ['情境故事遊戲', '美感創作活動', '安靜共讀時光']
  }
};

const axisPairs = {
  EI: ['E', 'I'],
  SN: ['S', 'N'],
  TF: ['T', 'F'],
  JP: ['J', 'P']
};

const selectedByRound = {
  interest: null,
  ability: null,
  personality: null
};

let currentRoundIndex = 0;

const el = {
  progressText: document.querySelector('#progress-text'),
  progressFill: document.querySelector('#progress-fill'),
  roundTitle: document.querySelector('#round-title'),
  roundSubtitle: document.querySelector('#round-subtitle'),
  cards: document.querySelector('#cards'),
  prevBtn: document.querySelector('#prev-btn'),
  nextBtn: document.querySelector('#next-btn'),
  selectedHint: document.querySelector('#selected-hint'),
  selectionPanel: document.querySelector('#selection-panel'),
  resultPanel: document.querySelector('#result-panel'),
  mbtiType: document.querySelector('#mbti-type'),
  mbtiTitle: document.querySelector('#mbti-title'),
  mbtiSummary: document.querySelector('#mbti-summary'),
  tipsList: document.querySelector('#tips-list'),
  pathsList: document.querySelector('#paths-list'),
  scoreDebug: document.querySelector('#score-debug'),
  restartBtn: document.querySelector('#restart-btn')
};

function getPropsByRound(roundType) {
  return props.filter((item) => item.round_type === roundType);
}

function renderRound() {
  const round = roundConfig[currentRoundIndex];
  const roundProps = getPropsByRound(round.key);
  const selected = selectedByRound[round.key];

  el.progressText.textContent = round.label;
  el.progressFill.style.width = `${((currentRoundIndex + 1) / roundConfig.length) * 100}%`;
  el.roundTitle.textContent = round.title;
  el.roundSubtitle.textContent = round.subtitle;

  el.cards.innerHTML = '';
  roundProps.forEach((item) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = `card ${selected?.id === item.id ? 'selected' : ''}`;
    card.innerHTML = `
      <h3>${item.name_zh}</h3>
      <p>${item.meaning}</p>
      <small>${item.keyword}｜加權 ${item.weight}</small>
    `;
    card.addEventListener('click', () => {
      selectedByRound[round.key] = item;
      renderRound();
    });
    el.cards.appendChild(card);
  });

  el.selectedHint.textContent = selected
    ? `目前已選：${selected.name_zh}（${selected.axis_value} +${selected.weight}）`
    : '尚未選擇道具';

  el.prevBtn.disabled = currentRoundIndex === 0;
  el.nextBtn.textContent = currentRoundIndex === roundConfig.length - 1 ? '查看結果' : '下一步';
}

function computeResult() {
  const score = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

  // 依 round 加權累積
  roundConfig.forEach((round) => {
    const pick = selectedByRound[round.key];
    if (!pick) return;
    score[pick.axis_value] += Number(pick.weight);
  });

  const tieBreakerOrder = ['personality', 'ability'];

  function resolveAxis(axisCode) {
    const [left, right] = axisPairs[axisCode];
    if (score[left] > score[right]) return left;
    if (score[right] > score[left]) return right;

    // 同分：先看第三輪，再看第二輪
    for (const roundKey of tieBreakerOrder) {
      const pick = selectedByRound[roundKey];
      if (pick?.mbti_axis === axisCode) return pick.axis_value;
    }

    // 仍同分，回傳 X 代表混合
    return 'X';
  }

  const letters = [resolveAxis('EI'), resolveAxis('SN'), resolveAxis('TF'), resolveAxis('JP')];
  const mbti = letters.join('');

  return { mbti, score, letters };
}

function renderResult() {
  const { mbti, score, letters } = computeResult();
  const profile = mbtiProfiles[mbti];

  el.selectionPanel.classList.add('hidden');
  el.resultPanel.classList.remove('hidden');

  if (letters.includes('X')) {
    el.mbtiType.textContent = mbti;
    el.mbtiTitle.textContent = '混合型（可再觀察）';
    el.mbtiSummary.textContent = '部分軸向同分，代表寶寶在不同情境可能展現不同特質，可在下一次抓周持續觀察。';
    el.tipsList.innerHTML = '<li>重點放在日常互動觀察</li><li>多情境嘗試，看看偏好是否穩定</li>';
    el.pathsList.innerHTML = '<li>跨領域探索活動</li><li>保留彈性、少貼標籤</li>';
  } else {
    const fallback = {
      title: '寶寶成長探索家',
      summary: '這是寶寶目前偏好組合，會隨成長經驗持續調整。',
      tips: ['先回應需求再引導規則', '觀察高投入時段安排活動'],
      paths: ['感官遊戲', '親子共讀']
    };
    const useProfile = profile ?? fallback;
    el.mbtiType.textContent = mbti;
    el.mbtiTitle.textContent = useProfile.title;
    el.mbtiSummary.textContent = useProfile.summary;
    el.tipsList.innerHTML = useProfile.tips.map((item) => `<li>${item}</li>`).join('');
    el.pathsList.innerHTML = useProfile.paths.map((item) => `<li>${item}</li>`).join('');
  }

  el.scoreDebug.textContent = JSON.stringify(
    {
      selected: {
        round1: selectedByRound.interest?.name_zh,
        round2: selectedByRound.ability?.name_zh,
        round3: selectedByRound.personality?.name_zh
      },
      score,
      resolved_mbti: mbti,
      rule: '同分優先第三輪（personality）→ 第二輪（ability）→ X 混合型'
    },
    null,
    2
  );
}

el.prevBtn.addEventListener('click', () => {
  if (currentRoundIndex > 0) {
    currentRoundIndex -= 1;
    renderRound();
  }
});

el.nextBtn.addEventListener('click', () => {
  const round = roundConfig[currentRoundIndex];
  if (!selectedByRound[round.key]) {
    alert('請先選擇一個道具，再進入下一步。');
    return;
  }

  if (currentRoundIndex < roundConfig.length - 1) {
    currentRoundIndex += 1;
    renderRound();
    return;
  }

  renderResult();
});

el.restartBtn.addEventListener('click', () => {
  selectedByRound.interest = null;
  selectedByRound.ability = null;
  selectedByRound.personality = null;
  currentRoundIndex = 0;
  el.resultPanel.classList.add('hidden');
  el.selectionPanel.classList.remove('hidden');
  renderRound();
});

renderRound();
