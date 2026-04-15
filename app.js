const roundConfig = [
  {
    key: 'interest',
    label: 'Round 1 / 3｜興趣（感知世界的方式）',
    title: '第一輪：選一個最吸引寶寶的道具',
    subtitle: '看寶寶偏好如何感知與探索世界。'
  },
  {
    key: 'ability',
    label: 'Round 2 / 3｜能力（如何處理問題）',
    title: '第二輪：選一個最符合寶寶能力偏好的道具',
    subtitle: '觀察寶寶傾向的處理方式與互動模式。'
  },
  {
    key: 'personality',
    label: 'Round 3 / 3｜人格特質（會成為怎樣的人）',
    title: '第三輪：選一個最貼近寶寶人格想像的道具',
    subtitle: '最後一輪會呈現整體人格傾向。'
  }
];

const props = [
  {
    id: 'interest-book',
    round_type: 'interest',
    name_zh: '書本',
    icon: '📘',
    meaning: '被故事與知識內容吸引，喜歡透過閱讀探索世界',
    traits: ['I', 'N', 'T', 'J']
  },
  {
    id: 'interest-palette',
    round_type: 'interest',
    name_zh: '調色盤',
    icon: '🎨',
    meaning: '被色彩與創作吸引，喜歡用畫面表達想法',
    traits: ['I', 'N', 'F', 'P']
  },
  {
    id: 'interest-ball',
    round_type: 'interest',
    name_zh: '球',
    icon: '⚽',
    meaning: '被動態活動吸引，喜歡透過肢體與環境互動',
    traits: ['E', 'S', 'T', 'P']
  },
  {
    id: 'interest-piano',
    round_type: 'interest',
    name_zh: '鋼琴',
    icon: '🎹',
    meaning: '被聲音與節奏吸引，喜歡用音樂感受與表達',
    traits: ['E', 'N', 'F', 'P']
  },
  {
    id: 'interest-camera',
    round_type: 'interest',
    name_zh: '相機',
    icon: '📷',
    meaning: '被畫面與細節吸引，喜歡用視覺理解世界',
    traits: ['I', 'S', 'F', 'J']
  },
  {
    id: 'interest-airplane',
    round_type: 'interest',
    name_zh: '飛機',
    icon: '✈️',
    meaning: '被未知與新環境吸引，喜歡旅遊並探索世界',
    traits: ['E', 'N', 'T', 'P']
  },
  {
    id: 'ability-blocks',
    round_type: 'ability',
    name_zh: '積木',
    icon: '🧱',
    meaning: '透過空間建構與調整，打造理想的創作',
    traits: ['I', 'S', 'F', 'J']
  },
  {
    id: 'ability-mirror',
    round_type: 'ability',
    name_zh: '鏡子',
    icon: '🪞',
    meaning: '透過他人互動與情感連結，理解自己與世界',
    traits: ['E', 'N', 'F', 'P']
  },
  {
    id: 'ability-blackboard',
    round_type: 'ability',
    name_zh: '黑板',
    icon: '🧮',
    meaning: '規劃與整理資訊，透過系統化思考理解整體脈絡',
    traits: ['I', 'N', 'T', 'J']
  },
  {
    id: 'ability-microphone',
    round_type: 'ability',
    name_zh: '麥克風',
    icon: '🎤',
    meaning: '透過表達與互動帶動氣氛，享受回饋與交流',
    traits: ['E', 'S', 'F', 'P']
  },
  {
    id: 'ability-magnifier',
    round_type: 'ability',
    name_zh: '放大鏡',
    icon: '🔍',
    meaning: '觀察細節並動手探索，透過分析理解運作方式',
    traits: ['I', 'S', 'T', 'P']
  },
  {
    id: 'ability-calculator',
    round_type: 'ability',
    name_zh: '計算機',
    icon: '🧾',
    meaning: '按步驟解決問題，重視穩定與實作',
    traits: ['I', 'S', 'T', 'J']
  },
  {
    id: 'personality-heart',
    round_type: 'personality',
    name_zh: '愛心',
    icon: '💖',
    meaning: '善於關懷他人，重視情感交流與互動',
    traits: ['E', 'N', 'F', 'P']
  },
  {
    id: 'personality-crown',
    round_type: 'personality',
    name_zh: '皇冠',
    icon: '👑',
    meaning: '展現自信與領導風範，喜歡建立秩序',
    traits: ['E', 'S', 'T', 'J']
  },
  {
    id: 'personality-compass',
    round_type: 'personality',
    name_zh: '指南針',
    icon: '🧭',
    meaning: '傾向獨立思考與探索方向，依照自己的理解前進',
    traits: ['I', 'N', 'T', 'P']
  },
  {
    id: 'personality-sun',
    round_type: 'personality',
    name_zh: '太陽',
    icon: '☀️',
    meaning: '帶來正能量與感染力，讓周圍充滿快樂與活力',
    traits: ['E', 'S', 'F', 'P']
  },
  {
    id: 'personality-scale',
    round_type: 'personality',
    name_zh: '天秤',
    icon: '⚖️',
    meaning: '重視與判斷標準，傾向理性分析與平衡決策',
    traits: ['I', 'N', 'T', 'J']
  },
  {
    id: 'personality-key',
    round_type: 'personality',
    name_zh: '鑰匙',
    icon: '🗝️',
    meaning: '願意守護重要信念，能被依靠與交付責任',
    traits: ['I', 'S', 'F', 'J']
  }
];

const axisPairs = {
  EI: ['E', 'I'],
  SN: ['S', 'N'],
  TF: ['T', 'F'],
  JP: ['J', 'P']
};

const axisDesc = {
  EI: '外向 E ↔ 內向 I',
  SN: '感知 S ↔ 直覺 N',
  TF: '思考 T ↔ 情感 F',
  JP: '判斷 J ↔ 彈性 P'
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
  selectionList: document.querySelector('#selection-list'),
  axisList: document.querySelector('#axis-list'),
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
      <span class="card__icon" aria-hidden="true">${item.icon}</span>
      <h3>${item.name_zh}</h3>
      <p>${item.meaning}</p>
      <small>MBTI：${item.traits.join(' / ')}</small>
    `;
    card.addEventListener('click', () => {
      selectedByRound[round.key] = item;
      renderRound();
    });
    el.cards.appendChild(card);
  });

  el.selectedHint.textContent = selected
    ? `目前已選：${selected.name_zh}（${selected.traits.join(' / ')}）`
    : '尚未選擇道具';

  el.prevBtn.disabled = currentRoundIndex === 0;
  el.nextBtn.textContent = currentRoundIndex === roundConfig.length - 1 ? '查看結果' : '下一步';
}

function computeResult() {
  const score = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

  roundConfig.forEach((round) => {
    const pick = selectedByRound[round.key];
    if (!pick) return;
    pick.traits.forEach((trait) => {
      score[trait] += 1;
    });
  });

  const tieBreakerOrder = ['personality', 'ability', 'interest'];

  function resolveAxis(axisCode) {
    const [left, right] = axisPairs[axisCode];
    if (score[left] > score[right]) return left;
    if (score[right] > score[left]) return right;

    for (const roundKey of tieBreakerOrder) {
      const pick = selectedByRound[roundKey];
      if (!pick) continue;
      if (pick.traits.includes(left) && !pick.traits.includes(right)) return left;
      if (pick.traits.includes(right) && !pick.traits.includes(left)) return right;
    }

    return 'X';
  }

  const letters = [resolveAxis('EI'), resolveAxis('SN'), resolveAxis('TF'), resolveAxis('JP')];
  const mbti = letters.join('');

  return { mbti, score, letters };
}

function renderResult() {
  const { mbti, score, letters } = computeResult();
  const hasMixed = letters.includes('X');

  el.selectionPanel.classList.add('hidden');
  el.resultPanel.classList.remove('hidden');

  if (hasMixed) {
    el.mbtiType.textContent = mbti;
    el.mbtiTitle.textContent = '混合型（可持續觀察）';
    el.mbtiSummary.textContent = '部份軸向同分，代表寶寶可能在不同情境展現不同偏好。';
  } else {
    el.mbtiType.textContent = mbti;
    el.mbtiTitle.textContent = '本次抓周 MBTI 傾向';
    el.mbtiSummary.textContent = '依照你提供的 18 項道具定義進行三輪計分，結果可作為成長觀察參考。';
  }

  el.selectionList.innerHTML = roundConfig
    .map((round, index) => {
      const selected = selectedByRound[round.key];
      if (!selected) return `<li>第 ${index + 1} 輪：未選擇</li>`;
      return `<li>第 ${index + 1} 輪：${selected.name_zh}（${selected.traits.join(' / ')}）</li>`;
    })
    .join('');

  el.axisList.innerHTML = Object.keys(axisPairs)
    .map((axisCode) => {
      const [left, right] = axisPairs[axisCode];
      return `<li>${axisDesc[axisCode]}：${left} ${score[left]} / ${right} ${score[right]}</li>`;
    })
    .join('');

  el.scoreDebug.textContent = JSON.stringify(
    {
      selected: {
        interest: selectedByRound.interest?.name_zh,
        ability: selectedByRound.ability?.name_zh,
        personality: selectedByRound.personality?.name_zh
      },
      score,
      resolved_mbti: mbti,
      rule: '每輪道具提供 4 個 MBTI 字母各 +1；同分依序使用第三輪→第二輪→第一輪作為決勝'
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
