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
  { id: 'interest-book', round_type: 'interest', name_zh: '書本', icon: '📘', meaning: '被故事與知識內容吸引，喜歡透過閱讀探索世界', traits: ['I', 'N', 'T', 'J'] },
  { id: 'interest-palette', round_type: 'interest', name_zh: '調色盤', icon: '🎨', meaning: '被色彩與創作吸引，喜歡用畫面表達想法', traits: ['I', 'N', 'F', 'P'] },
  { id: 'interest-ball', round_type: 'interest', name_zh: '球', icon: '⚽', meaning: '被動態活動吸引，喜歡透過肢體與環境互動', traits: ['E', 'S', 'T', 'P'] },
  { id: 'interest-piano', round_type: 'interest', name_zh: '鋼琴', icon: '🎹', meaning: '被聲音與節奏吸引，喜歡用音樂感受與表達', traits: ['E', 'N', 'F', 'P'] },
  { id: 'interest-camera', round_type: 'interest', name_zh: '相機', icon: '📷', meaning: '被畫面與細節吸引，喜歡用視覺理解世界', traits: ['I', 'S', 'F', 'J'] },
  { id: 'interest-airplane', round_type: 'interest', name_zh: '飛機', icon: '✈️', meaning: '被未知與新環境吸引，喜歡旅遊並探索世界', traits: ['E', 'N', 'T', 'P'] },
  { id: 'ability-blocks', round_type: 'ability', name_zh: '積木', icon: '🧱', meaning: '透過空間建構與調整，打造理想的創作', traits: ['I', 'S', 'F', 'J'] },
  { id: 'ability-mirror', round_type: 'ability', name_zh: '鏡子', icon: '🪞', meaning: '透過他人互動與情感連結，理解自己與世界', traits: ['E', 'N', 'F', 'P'] },
  { id: 'ability-blackboard', round_type: 'ability', name_zh: '黑板', icon: '🧮', meaning: '規劃與整理資訊，透過系統化思考理解整體脈絡', traits: ['I', 'N', 'T', 'J'] },
  { id: 'ability-microphone', round_type: 'ability', name_zh: '麥克風', icon: '🎤', meaning: '透過表達與互動帶動氣氛，享受回饋與交流', traits: ['E', 'S', 'F', 'P'] },
  { id: 'ability-magnifier', round_type: 'ability', name_zh: '放大鏡', icon: '🔍', meaning: '觀察細節並動手探索，透過分析理解運作方式', traits: ['I', 'S', 'T', 'P'] },
  { id: 'ability-calculator', round_type: 'ability', name_zh: '計算機', icon: '🧾', meaning: '按步驟解決問題，重視穩定與實作', traits: ['I', 'S', 'T', 'J'] },
  { id: 'personality-heart', round_type: 'personality', name_zh: '愛心', icon: '💖', meaning: '善於關懷他人，重視情感交流與互動', traits: ['E', 'N', 'F', 'P'] },
  { id: 'personality-crown', round_type: 'personality', name_zh: '皇冠', icon: '👑', meaning: '展現自信與領導風範，喜歡建立秩序', traits: ['E', 'S', 'T', 'J'] },
  { id: 'personality-compass', round_type: 'personality', name_zh: '指南針', icon: '🧭', meaning: '傾向獨立思考與探索方向，依照自己的理解前進', traits: ['I', 'N', 'T', 'P'] },
  { id: 'personality-sun', round_type: 'personality', name_zh: '太陽', icon: '☀️', meaning: '帶來正能量與感染力，讓周圍充滿快樂與活力', traits: ['E', 'S', 'F', 'P'] },
  { id: 'personality-scale', round_type: 'personality', name_zh: '天秤', icon: '⚖️', meaning: '重視與判斷標準，傾向理性分析與平衡決策', traits: ['I', 'N', 'T', 'J'] },
  { id: 'personality-key', round_type: 'personality', name_zh: '鑰匙', icon: '🗝️', meaning: '願意守護重要信念，能被依靠與交付責任', traits: ['I', 'S', 'F', 'J'] }
];

const mbtiProfiles = {
  INTJ: {
    title: '策略建築師',
    motive: 'INTJ 寶寶的內在動機像一張安靜運作的地圖，會想知道「為什麼」與「接下來呢」。他們不一定吵著要被看見，卻常在角落默默觀察規則，然後用自己的方式重組成更有效率的玩法。當環境能提供探索目標、穩定節奏與自主空間時，INTJ 會展現驚人的專注與持續力。🧠',
    emotion: '在情緒處理上，INTJ 通常先把感受放進腦中整理，確認脈絡後才表達，因此外表看似冷靜，其實內心很敏銳。若被突然催促或被過度打斷，他們可能用沉默保護自己。家長可以先幫他命名情緒，再給一段緩衝時間，讓孩子從「我不知道怎麼說」走向「我可以慢慢說」。🌙',
    parenting: '教養建議是「先理解目標，再要求合作」。可以用任務型語句，例如「我們先把積木分類，再蓋橋」，讓 INTJ 在清楚框架下練習彈性。當孩子提出與大人不同的方法時，先肯定思考路徑，再一起驗證可行性，能培養自信與同理並存的領導力。'
  },
  INTP: {
    title: '好奇發明家',
    motive: 'INTP 寶寶常被問題吸引而非答案吸引，他們的動機是理解原理、拆解模式、找到新可能。看似漫不經心，其實大腦一直在做實驗：這樣敲會怎樣？換方向會怎樣？只要環境允許試誤與提問，INTP 會展現驚人的創造性與獨立推理。🔬',
    emotion: 'INTP 面對情緒時，慣性是先分析再感受，容易把「難過」翻成「哪個環節出了問題」。因此他們不是沒有情感，而是需要把情感變得可理解。若被要求立刻表態，可能更退縮。家長可用選項式提問協助表達，例如「你是失望、挫折，還是累了？」🫧',
    parenting: '教養上建議保留探索自由，同時補上生活節奏。可以固定「好奇時間」讓孩子提問，也建立「收尾儀式」練習完成與整理。當 INTP 願意把想法說給他人聽時，要肯定他們的邏輯努力，並引導把抽象觀點轉成可合作的行動。'
  },
  ENTJ: {
    title: '行動指揮官',
    motive: 'ENTJ 寶寶常在遊戲中自然站到前方，內在動機是推進事情、完成目標、讓資源被有效運用。他們喜歡有挑戰、有方向的活動，也會迅速判斷「現在最重要的是什麼」。若家中給予可選擇的責任，ENTJ 會把能量轉成成熟的執行力。🚀',
    emotion: 'ENTJ 處理情緒時傾向直接，生氣或挫折來得快，也恢復得快。但他們不喜歡被貼上「你太兇」的標籤，反而需要被理解為「你很在意成果」。家長可先接住情緒，再引導調節語句，例如「你很急著完成，我們先深呼吸再重來」。🔥',
    parenting: '教養建議是把領導欲導向合作。可讓孩子在小任務中輪流當小隊長，學習聽同伴意見、安排順序、承擔結果。當 ENTJ 能同時做到果斷與尊重，他們未來在學習、團隊與自我管理上會展現非常亮眼的穩定成長。'
  },
  ENTP: {
    title: '靈感冒險家',
    motive: 'ENTP 寶寶的內在驅動是新鮮感與可能性，他們喜歡把一件事玩出很多版本，並在互動中激發點子。這類孩子通常反應快、轉換快、語言與聯想能力也很活躍。若環境過度單一，ENTP 可能顯得分心；若有開放探索，他們會爆發驚人創意。⚡',
    emotion: '面對情緒，ENTP 常用幽默和轉移注意力自我調節，看起來「沒事」，其實也需要被好好理解。當受到限制時，他們容易以辯論保護自主。家長可先承認其想法價值，再設定清楚邊界，讓孩子知道「可創新，但要有安全與規則」。🎈',
    parenting: '教養上可多用專案式活動，例如「今天一起設計新玩法」。透過明確開始與結束，幫助 ENTP 練習聚焦與完成。鼓勵他們提案，也訓練收斂：一次先選一個最想做的點子。這樣能把天馬行空轉成真正可落地的能力。'
  },
  INFJ: {
    title: '溫柔洞察者',
    motive: 'INFJ 寶寶常對人與氛圍特別敏感，內在動機是理解彼此、守護關係、讓世界更有意義。他們不一定愛搶主角，卻能注意到別人忽略的小情緒。當大人提供溫和且一致的互動，INFJ 會在安全感中發展出深度專注與細膩同理。🌷',
    emotion: 'INFJ 處理情緒時會先內化，像把感受收進心裡慢慢沉澱。若外界太吵或太急，他們可能先退到安靜角落。家長可以用「陪伴式沉默」與柔和提問，幫助孩子把抽象感受說清楚，例如「你是心裡酸酸的，還是有點怕？」🌧️',
    parenting: '教養重點是尊重敏感、建立界線。可透過故事角色討論情緒與選擇，讓 INFJ 練習表達需求而不只照顧他人。當孩子願意說出「我也需要」時，請給予肯定，這會幫助他在未來維持善良，同時保有健康的自我保護力。'
  },
  INFP: {
    title: '夢想繪本家',
    motive: 'INFP 寶寶的核心動機是忠於內心感受與價值，他們對美感、故事與象徵特別有連結，常用想像力理解世界。這類孩子在被尊重時會很投入，一旦被強迫比較或催促，可能瞬間關機。給予溫暖選擇與創作空間，能點亮 INFP 的生命力。🖍️',
    emotion: 'INFP 處理情緒像潮汐，感受深而真，會需要時間消化。哭泣或沉默不代表脆弱，而是內心正在整理。家長可透過畫畫、角色扮演、音樂等媒介協助抒發，再慢慢引導說出需求，避免只用「不要哭」壓過情緒訊號。🌊',
    parenting: '教養建議是「溫柔而有結構」。先同理，再給可執行步驟，例如「你很失望，我們先抱抱，再一起把玩具修好」。鼓勵 INFP 表達獨特觀點，也教他辨識現實限制，能讓理想感與行動力同步長大，形成溫暖而堅定的內在。'
  },
  ENFJ: {
    title: '暖心帶動者',
    motive: 'ENFJ 寶寶天生容易注意群體氛圍，動機是連結他人、讓大家一起前進。他們喜歡被需要，也樂於幫忙，常在遊戲中扮演串聯角色。當大人給予正向回饋與可模仿的合作範例，ENFJ 會快速長出責任感與社交智慧。🤝',
    emotion: 'ENFJ 對情緒很敏銳，常先感受別人再感受自己，偶爾因此累積壓力。當他們情緒滿載時，可能看起來突然黏人或急躁。家長可提醒「照顧別人前先照顧自己」，並建立自我安撫流程，像喝水、深呼吸、抱抱玩偶。💗',
    parenting: '教養上可鼓勵其領導善意，但同時訓練界線與拒絕能力。讓孩子知道：幫忙是選擇，不是義務。透過小組任務練習輪流發言與傾聽，ENFJ 能把同理心轉為成熟影響力，未來在人際與團隊中都能溫柔而有力量。'
  },
  ENFP: {
    title: '陽光啟發家',
    motive: 'ENFP 寶寶的內在引擎是熱情與可能性，他們喜歡探索新鮮事，並用活力點亮周圍。這類孩子通常對人事物都有高度好奇，能很快建立連結。若環境過度制式，ENFP 可能顯得坐不住；若有互動與創意空間，他們會充滿驚喜成長。🌈',
    emotion: 'ENFP 表達情緒直率且有感染力，開心會放大分享，失落也可能瞬間湧現。這不是情緒化，而是感受流動很快。家長可協助把強烈感受落地，例如「我們先說一件你最在意的事」，幫助孩子從洪水般情緒回到清晰表達。☀️',
    parenting: '教養策略是維持彈性中的一致。可採用「選擇式規範」：在可接受範圍中給兩個選項，讓 ENFP 既有自主又有邊界。多鼓勵完成小目標並慶祝收尾，能把熱情累積成持續力，未來更容易將創意轉化為實際成果。'
  },
  ISTJ: {
    title: '踏實守護者',
    motive: 'ISTJ 寶寶的動機來自秩序、可靠與可預期，他們喜歡按步驟完成事情，對重複練習有耐心。只要流程清楚、規則一致，ISTJ 往往比同齡更能穩定執行。這份踏實不是保守，而是希望把每件事做好、做穩、做完整。🧩',
    emotion: 'ISTJ 面對情緒時較克制，常先忍住不說，直到有安全空間才慢慢表達。當被誤會成「沒感覺」時，孩子可能更封閉。家長可使用具體語句協助辨識，例如「你現在是緊張，因為流程改變了嗎？」讓他知道情緒是可被理解的。🧸',
    parenting: '教養建議是保持規律，同時練習彈性。可在日常中加入微小變化，如「今天洗澡前先收玩具」。當 ISTJ 成功調整，立即肯定其適應力。長期下來，孩子會在穩定底盤上長出面對新挑戰的信心與韌性。'
  },
  ISFJ: {
    title: '貼心照顧家',
    motive: 'ISFJ 寶寶的核心動機是守護熟悉的人與環境，他們常留意細節，對日常節奏有安全需求。這類孩子在熟悉情境中非常願意合作，也能記住他人的喜好與習慣。當家裡氛圍溫暖且穩定，ISFJ 會展現可靠又溫柔的行動力。🍵',
    emotion: 'ISFJ 處理情緒多半內斂，常先把他人的需要放前面，自己的委屈可能延後表達。家長可定期創造一對一時光，詢問「今天你最想被怎麼照顧？」讓孩子學會把感受說出口，不再只當默默承受的人。🌼',
    parenting: '教養上建議肯定其體貼，也鼓勵主動表達偏好。可讓孩子在家務或遊戲中練習做小決策，建立自我主體感。當 ISFJ 被理解且被賦權，他們會成為兼具溫暖與責任感的穩定核心。'
  },
  ESTJ: {
    title: '規劃執行者',
    motive: 'ESTJ 寶寶喜歡清楚規則與明確目標，內在動機是把事情做對、做完、做到位。他們在團體中常自然接手安排順序，對效率與公平也很敏感。若家長提供可操作的責任任務，ESTJ 會快速把能量轉成成熟的執行表現。📌',
    emotion: 'ESTJ 面對情緒時往往先行動後感受，挫折時可能語氣急、控制感升高。其實這通常是因為他很在意秩序被打亂。家長可先接住焦慮，再引導轉化：「你希望事情變好，我們一起列三步驟」。這會比單純制止更有效。🛠️',
    parenting: '教養關鍵是把權威感導向責任感。讓 ESTJ 學習帶領也要聽見他人，透過輪流決策、共同討論建立合作肌肉。當孩子同時具備紀律與彈性，他將在學習與人際中展現可信賴的影響力。'
  },
  ESFJ: {
    title: '歡樂照明燈',
    motive: 'ESFJ 寶寶通常很在意關係與群體和諧，動機是讓大家都被照顧、一起開心。他們對社交訊號敏銳，容易主動互動，也喜歡得到肯定。當家人給予穩定的情感回應與參與機會，ESFJ 會發展出強大的連結能力與責任心。🎉',
    emotion: 'ESFJ 的情緒外顯且真實，開心會分享，失落也希望被立即理解。若被忽略，他們可能用更大聲量尋求連結。家長可先回應感受，再設定行為界線，例如「我知道你很委屈，但我們用好好說話來表達」。💞',
    parenting: '教養策略可多安排合作型任務，像一起準備點心、分工收玩具，讓 ESFJ 練習在照顧他人與照顧自己間取得平衡。當他們學會界線與自我肯定，就能把溫暖社交力轉為持久的人際韌性。'
  },
  ISTP: {
    title: '冷靜實作家',
    motive: 'ISTP 寶寶的內在動機是親手理解世界，透過摸、拆、試、修來建立信心。他們喜歡真實可操作的挑戰，對工具、機制與空間感特別敏銳。只要給出足夠探索空間與安全邊界，ISTP 會在安靜中累積極高的實作能力。🔧',
    emotion: 'ISTP 面對情緒時傾向先退一步，不愛被追問「你現在感覺如何」。他們通常需要先讓身體動起來，情緒才會慢慢打開。家長可用陪做取代逼問，例如一起拼裝、散步，再以簡短語句協助表達感受。🌿',
    parenting: '教養重點是尊重獨立，同時強化連結。給孩子可自行完成的小任務，完成後回顧過程與情緒，幫助 ISTP 把能力與語言連接。當他們學會在冷靜行動外，也能說出需求，成長曲線會更完整穩健。'
  },
  ISFP: {
    title: '感官藝術家',
    motive: 'ISFP 寶寶的動機來自真實感受與美感經驗，他們常透過顏色、觸感、聲音建立對世界的理解。這類孩子通常溫和不張揚，但對自己在意的事非常投入。當環境允許自由創作與溫柔陪伴，ISFP 會展現細膩又有生命力的表達。🧁',
    emotion: 'ISFP 處理情緒較私密，容易把情緒藏在行為裡，例如忽然安靜或只想黏著熟悉的人。家長可以提供低壓抒發媒介，如塗鴉、黏土、音樂，並用不評價的語氣回應，讓孩子感到「我的感受被尊重」。🍃',
    parenting: '教養建議是「少一點指令，多一點共同創作」。在日常中設計可完成的小任務，幫 ISFP 建立行動成就感；同時教他清楚說出喜歡與不喜歡。當孩子把敏感化為創造力，也能在關係裡維持自我界線。'
  },
  ESTP: {
    title: '即興挑戰者',
    motive: 'ESTP 寶寶天生偏好即時互動與行動刺激，內在動機是體驗、挑戰、突破。這類孩子反應快、膽子大，喜歡在真實場景中學習，而不是長時間聽規則。若活動具有節奏感與明確目標，ESTP 會展現強烈投入與臨場判斷力。🏀',
    emotion: 'ESTP 的情緒通常來得直接且短暫，生氣可能瞬間爆發，也能很快轉好。關鍵在於教他辨識衝動與後果。家長可採用「先停三秒、再選行動」的口訣，搭配身體調節法，幫助孩子在高能量中保有自我控制。⚽',
    parenting: '教養上建議多用實戰式規範：規則要短、清楚、可立即執行。給 ESTP 足夠運動與探索機會，同時設定安全底線。當孩子感受到「我可以玩得盡興，也要對結果負責」，他們會長成自信且可靠的行動派。'
  },
  ESFP: {
    title: '舞台小太陽',
    motive: 'ESFP 寶寶的核心動機是分享快樂、創造連結、即時回應生活。他們對聲音、表情、節奏很有感，常在互動中展現自然魅力。若家庭氛圍鼓勵表達與參與，ESFP 會迅速累積社交自信與感染力，成為帶動氣氛的小引擎。🎤',
    emotion: 'ESFP 對情緒體驗很即時，開心時像煙火，受挫時也可能立刻需要安慰。家長可先接住感受，再引導「下一步可以做什麼」，避免讓孩子停在情緒高潮。用遊戲化方式練習等待、輪流與收尾，效果通常非常好。🌟',
    parenting: '教養建議是給舞台也給框架。可讓 ESFP 參與家庭小演出、故事時間、角色任務，同時建立固定流程幫助穩定。當孩子學會把外向熱情與責任感結合，將具備非常可貴的人際魅力與正向影響力。'
  }
};

const zodiacBoosts = {
  aries: { name: '牡羊座 ♈', text: '牡羊座帶來的火象行動力，會讓寶寶在 MBTI 原有特質上更有「先試再調整」的勇氣。當他感到被信任時，常主動嘗試新遊戲與新任務，展現領先衝勁。未來潛力在於開創與突破：若家長同時教會等待、傾聽與輪流，這股熱能會從衝動升級為具方向感的領導力。🔥' },
  taurus: { name: '金牛座 ♉', text: '金牛座的加成讓寶寶更重視安全感與感官品質，MBTI 特質會因此呈現穩定、耐心、可持續的步調。他可能需要一點時間暖機，但一旦投入就非常專注。未來發展潛力在於深耕能力與長期累積：透過規律練習與正向鼓勵，孩子能把天賦慢慢磨成可靠實力。🌱' },
  gemini: { name: '雙子座 ♊', text: '雙子座讓寶寶的思考與表達更靈活，MBTI 的優勢會被放大成快速學習與多線探索。他可能今天迷上拼圖，明天愛上說故事，呈現豐富好奇。未來潛力在於跨領域連結與溝通影響力：若家長協助聚焦與收尾，孩子將能把聰明點子轉成可執行成果。🪁' },
  cancer: { name: '巨蟹座 ♋', text: '巨蟹座加成讓寶寶在 MBTI 基礎上更重視情感歸屬，對家庭氣氛與人際溫度十分敏感。他在被理解時會特別合作，也願意照顧他人。未來潛力在於建立深層連結與支持型影響力：只要同步培養界線與自我表達，這份溫柔將成為穩定而長久的力量。🏡' },
  leo: { name: '獅子座 ♌', text: '獅子座為寶寶增添自信光芒，讓 MBTI 的原生特質更容易被看見。他常希望被肯定、被參與，也喜歡在遊戲中展現風格。未來潛力在於舞台感與帶動力：若家長把稱讚與責任一起給，孩子會從「想被看到」成長為「願意照亮他人」的成熟領航者。🦁' },
  virgo: { name: '處女座 ♍', text: '處女座加成會讓寶寶更擅長觀察細節、整理步驟，MBTI 的能力因此呈現高精準與可優化特質。他可能對小變化非常敏銳，也喜歡把事情做到完整。未來潛力在於品質管理與問題解決：若家長避免過度苛求，改以鼓勵進步，孩子會把細膩轉化為專業。🧵' },
  libra: { name: '天秤座 ♎', text: '天秤座讓寶寶更在意互動平衡，MBTI 原有個性會融合出協調、審美與關係感。他常本能想「大家都好」，對衝突敏感。未來潛力在於溝通、整合與美感決策：若家長陪他練習果斷與選擇，孩子將能在溫和中保有清晰判斷，成為受歡迎的橋樑角色。🎀' },
  scorpio: { name: '天蠍座 ♏', text: '天蠍座為寶寶注入深度與專注，會讓 MBTI 優勢更具穿透力。他對有興趣的事投入很深，也擅長察覺隱微訊號。未來潛力在於研究、洞察與韌性：若家長提供安全信任與穩定界線，孩子能把強烈能量轉為堅定執行，展現不輕易放棄的成長厚度。🦂' },
  sagittarius: { name: '射手座 ♐', text: '射手座加成讓寶寶更愛自由探索，MBTI 的特質會呈現開放、樂觀與遠景感。他喜歡新鮮體驗，對未知抱持熱情。未來潛力在於跨域學習與國際視野：若家長在探索之外補上節奏管理與責任練習，孩子能把冒險心轉成穩定拓展力。🏹' },
  capricorn: { name: '摩羯座 ♑', text: '摩羯座讓寶寶在 MBTI 基礎上更有目標感與耐力，即使年紀小也可能展現「想把事情完成」的成熟傾向。他對承諾與規則有感，願意為成果努力。未來潛力在於長線規劃與實踐能力：若家長記得加入玩心與彈性，孩子會在踏實中長出更全面的創造力。⛰️' },
  aquarius: { name: '水瓶座 ♒', text: '水瓶座的加成使寶寶更具獨特視角，MBTI 特質容易發展成創新與非典型解法。他常提出跳躍想法，喜歡按自己的方式理解世界。未來潛力在於創意系統與改造能力：若家長在尊重差異的同時補足合作技巧，孩子將能把獨特性變成真正的社群價值。💡' },
  pisces: { name: '雙魚座 ♓', text: '雙魚座讓寶寶在 MBTI 特質上多一層想像與同理，對情緒、音樂、故事與氛圍有天然感受力。他常能捕捉細緻情感，展現溫暖共感。未來潛力在於藝術表達與療癒連結：若家長協助建立界線與現實步驟，孩子就能把柔軟天賦轉為穩定而有力量的創作能量。🐟' }
};

const axisPairs = { EI: ['E', 'I'], SN: ['S', 'N'], TF: ['T', 'F'], JP: ['J', 'P'] };
const axisDesc = { EI: '外向 E ↔ 內向 I', SN: '感知 S ↔ 直覺 N', TF: '思考 T ↔ 情感 F', JP: '判斷 J ↔ 彈性 P' };

const selectedByRound = { interest: null, ability: null, personality: null };
let currentRoundIndex = 0;

const el = {
  nicknameInput: document.querySelector('#nickname-input'),
  zodiacSelect: document.querySelector('#zodiac-select'),
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
  growthReport: document.querySelector('#growth-report'),
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

  el.selectedHint.textContent = selected ? `目前已選：${selected.name_zh}（${selected.traits.join(' / ')}）` : '尚未選擇道具';

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
  return { mbti: letters.join(''), score, letters };
}

function buildGrowthReport(mbti, zodiacKey, nickname) {
  const mbtiProfile = mbtiProfiles[mbti];
  const zodiac = zodiacBoosts[zodiacKey];

  if (!mbtiProfile || !zodiac) {
    return `
      <p>🌟 這次結果呈現混合軸向，代表寶寶在不同情境會出現不同面貌。建議持續觀察三到六個月，看看在熟悉環境與新環境下，偏好是否一致。</p>
      <p>💞 你也可以固定紀錄「開心時會做什麼、挫折時會怎麼安定」，累積後會形成更完整的專屬教養地圖。</p>
    `;
  }

  const namePrefix = nickname ? `「${nickname}」` : '寶寶';
  return `
    <h3>🍼 ${namePrefix} 的 MBTI × 星座成長長篇報告</h3>
    <p><strong>人格核心｜${mbti} ${mbtiProfile.title}</strong><br>${mbtiProfile.motive}</p>
    <p><strong>情緒節奏｜如何被理解與安定</strong><br>${mbtiProfile.emotion}</p>
    <p><strong>教養建議｜在日常裡長出能力</strong><br>${mbtiProfile.parenting}</p>
    <p><strong>星座加成｜${zodiac.name}</strong><br>${zodiac.text}</p>
    <p><strong>未來發展提醒</strong><br>🌟 當 MBTI 的穩定特質遇上星座帶來的情感與行動色彩，${namePrefix}會形成非常有辨識度的成長風格。家長可以持續用「先同理、再引導、最後給練習機會」的節奏，讓天賦不只可愛，還能一步步變成能力。每次小小的成功經驗，都是未來自信與韌性的種子。</p>
  `;
}

function renderResult() {
  const { mbti, score, letters } = computeResult();
  const hasMixed = letters.includes('X');
  const nickname = el.nicknameInput.value.trim();
  const zodiacKey = el.zodiacSelect.value;

  el.selectionPanel.classList.add('hidden');
  el.resultPanel.classList.remove('hidden');

  el.mbtiType.textContent = mbti;
  if (hasMixed) {
    el.mbtiTitle.textContent = '混合型（可持續觀察）';
    el.mbtiSummary.textContent = '部份軸向同分，代表寶寶可能在不同情境展現不同偏好。';
  } else {
    el.mbtiTitle.textContent = '本次抓周 MBTI 傾向';
    el.mbtiSummary.textContent = '依照三輪道具定義計分，並加入星座加成，生成約 500 字以上的成長報告。';
  }

  el.growthReport.innerHTML = buildGrowthReport(mbti, zodiacKey, nickname);

  el.selectionList.innerHTML = [
    `<li>寶寶小名：${nickname || '（未填寫）'}</li>`,
    `<li>星座：${zodiacBoosts[zodiacKey]?.name || '未選擇'}</li>`,
    ...roundConfig.map((round, index) => {
      const selected = selectedByRound[round.key];
      return selected
        ? `<li>第 ${index + 1} 輪：${selected.name_zh}（${selected.traits.join(' / ')}）</li>`
        : `<li>第 ${index + 1} 輪：未選擇</li>`;
    })
  ].join('');

  el.axisList.innerHTML = Object.keys(axisPairs)
    .map((axisCode) => {
      const [left, right] = axisPairs[axisCode];
      return `<li>${axisDesc[axisCode]}：${left} ${score[left]} / ${right} ${score[right]}</li>`;
    })
    .join('');

  el.scoreDebug.textContent = JSON.stringify(
    {
      selected: {
        nickname,
        zodiac: zodiacBoosts[zodiacKey]?.name,
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
  if (!el.zodiacSelect.value) {
    alert('請先選擇寶寶的星座，再繼續作答。');
    return;
  }

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
