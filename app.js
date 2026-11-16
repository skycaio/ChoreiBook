/**
 * CHOREIBOOK — AS OLIMPÍADAS DO SOFRIMENTO COTIDIANO
 * Motor de Interatividade e Competição de Desgraças
 */

(function () {
  'use strict';

  // ==========================================
  // 1. ESTADO INICIAL & BANCO DE DADOS LOCAL
  // ==========================================

  const DEFAULT_POSTS = [
    {
      id: 'post-1',
      author: 'Marquinho CLT',
      authorTitle: 'Mártir da Escala 6x1',
      avatarSeed: 'MarquinhoCLT',
      avatarBg: '0284c7',
      category: 'clt',
      categoryName: '💼 CLT & Escravidão',
      chaosLevel: 10,
      dramaTag: '🚨 Humilhação Pública',
      title: 'Trabalhei 14h, o metrô parou no túnel e a pizza de consolo veio colada na tampa',
      story: 'Saí do expediente às 22h depois de ouvir o gerente falar sobre "vestir a camisa". O metrô pifou no túnel e ficamos 1 hora no escuro com um rapaz vendendo bala de canela. Andei 2km na chuva de terno. Quando cheguei em casa, pedi uma pizza de quatro queijos que o entregador virou num grau e o queijo virou uma massa amorfa no papelão. Comi chorando no chão da cozinha.',
      tears: 3120,
      timeAgo: 'Há 2 horas',
      timestamp: Date.now() - 7200000,
      reactions: {
        cry: 1420,
        violin: 680,
        grave: 410,
        clown: 290,
        pix: 320
      },
      userReacted: null,
      comments: [
        {
          author: 'Dona Sandra',
          avatarSeed: 'DonaSandra',
          text: 'Pelo menos você tem emprego, meu filho... mas a parte da pizza doeu na minha alma.'
        },
        {
          author: 'Pedrinho Dev',
          avatarSeed: 'PedrinhoDev',
          text: 'Se o queijo colou na tampa, a tampa virou a pizza. Mindset.'
        }
      ]
    },
    {
      id: 'post-2',
      author: 'Dona Sandra',
      authorTitle: 'Rainha do Pudim Perdido',
      avatarSeed: 'DonaSandra',
      avatarBg: '475569',
      category: 'cotidiano',
      categoryName: '🤕 Maldades do Cotidiano',
      chaosLevel: 9,
      dramaTag: '⚡ Azar Lendário',
      title: 'Passei 4 horas fazendo o pudim perfeito de domingo e ele caiu de boca na terra',
      story: 'Pudim sem nenhum furinho, calda cor de âmbar dourada digna de novela das nove. Fui desenformar para levar na casa da minha cunhada que sempre critica minha comida. O prato escorregou da minha mão, quicou na quina da mesa e aterrissou em câmera lenta em cima do tapete peludo e do pote de terra da samambaia. Tive que comprar um bolo pronto de padaria com gosto de sabão.',
      tears: 2410,
      timeAgo: 'Há 4 horas',
      timestamp: Date.now() - 14400000,
      reactions: {
        cry: 980,
        violin: 540,
        grave: 390,
        clown: 210,
        pix: 290
      },
      userReacted: null,
      comments: [
        {
          author: 'Carlinhos do Grau',
          avatarSeed: 'Carlinhos',
          text: 'Era só passar uma água e falar que era calda de canela rústica!'
        }
      ]
    },
    {
      id: 'post-3',
      author: 'Pedrinho Dev',
      authorTitle: 'Coveiro de Servidores',
      avatarSeed: 'PedrinhoDev',
      avatarBg: '334155',
      category: 'clt',
      categoryName: '💼 CLT & Escravidão',
      chaosLevel: 10,
      dramaTag: '💸 Prejuízo Irreparável',
      title: 'Deploy às 17h59 na sexta: derrubei o checkout e recebi áudio do CEO berrando',
      story: 'Era só mudar a cor de um botão de verde para azul royal. "É coisa rápida", pensei. Um caractere a mais na migration do banco de dados resetou os cupons de desconto para 100% grátis. Durante 12 minutos o Brasil comprou geladeiras por R$ 0,00. Meu fim de semana foi regado a reuniões emergenciais com gente da diretoria que eu nem sabia que existia.',
      tears: 1980,
      timeAgo: 'Há 6 horas',
      timestamp: Date.now() - 21600000,
      reactions: {
        cry: 750,
        violin: 430,
        grave: 520,
        clown: 180,
        pix: 100
      },
      userReacted: null,
      comments: [
        {
          author: 'Marquinho CLT',
          avatarSeed: 'MarquinhoCLT',
          text: 'Famoso "testa em produção que é mais emocionante".'
        }
      ]
    },
    {
      id: 'post-4',
      author: 'Jéssica do Vácuo',
      authorTitle: 'Doutora em Ilusão',
      avatarSeed: 'JessicaVacuo',
      avatarBg: 'ec4899',
      category: 'amor',
      categoryName: '💔 Amor & Chifre',
      chaosLevel: 8,
      dramaTag: '💔 Trauma Amoroso',
      title: 'Mandei declaração de 4 parágrafos e ele respondeu 6 dias depois com "kkk pdcre"',
      story: 'Tomei duas taças de vinho barato, criei coragem e digitei a bíblia do sentimento. Falei desde a primeira vez que nos vimos até os planos pro futuro. Acompanhei os risquinhos azuis do WhatsApp por 144 horas ininterruptas. Ontem, às 03h12 da madrugada, veio a notificação. Meu coração disparou. Abri tremendo. Era só "kkk pdcre maneiro tamo junto". Eu devia ter ido dormir.',
      tears: 1760,
      timeAgo: 'Há 9 horas',
      timestamp: Date.now() - 32400000,
      reactions: {
        cry: 810,
        violin: 590,
        grave: 120,
        clown: 210,
        pix: 30
      },
      userReacted: null,
      comments: [
        {
          author: 'Zé Coitado',
          avatarSeed: 'ZeCoitado',
          text: 'O "tamo junto" no final é o tiro de misericórdia. Sinto sua dor.'
        }
      ]
    },
    {
      id: 'post-5',
      author: 'Cleiton da Van',
      authorTitle: 'Humilhado na Roleta',
      avatarSeed: 'CleitonVan',
      avatarBg: 'eab308',
      category: 'transporte',
      categoryName: '🚌 Transporte Público',
      chaosLevel: 8,
      dramaTag: '🚨 Humilhação Pública',
      title: 'Cartão deu saldo negativo com fila de 40 pessoas e tive que descer pela porta da frente',
      story: 'Chovendo torrencialmente, ônibus lotado estilo lata de sardinha. Encostei o bilhete: BEEP BEEP BEEP em tom estridente com luz vermelha. Tentei de novo. O motorista olhou pelo retrovisor com cara de desprezo. Puxei uma nota de R$ 50 porque era tudo que eu tinha. "Não tenho troco, vai ter que descer". Tive que espremer 40 passageiros ensopados pedindo licença para voltar e descer na lama.',
      tears: 1630,
      timeAgo: 'Há 12 horas',
      timestamp: Date.now() - 43200000,
      reactions: {
        cry: 640,
        violin: 320,
        grave: 280,
        clown: 190,
        pix: 200
      },
      userReacted: null,
      comments: []
    },
    {
      id: 'post-6',
      author: 'Bia da Federal',
      authorTitle: 'Sobrevivente do TCC',
      avatarSeed: 'BiaFederal',
      avatarBg: '8b5cf6',
      category: 'estudante',
      categoryName: '🎓 Faculdade & TCC',
      chaosLevel: 9,
      dramaTag: '⚡ Azar Lendário',
      title: 'Portal da faculdade caiu faltando 30 segundos pro fim do prazo da entrega final',
      story: 'Não durmo desde terça-feira. Três garrafas de café e uma úlcera em formação. Fui anexar o PDF de 140 páginas às 23h59min12s. A barra de progresso travou em 99%. A tela ficou branca: "Erro 502 Bad Gateway". Atualizei. "Prazo expirado". Mandei email pro orientador com prints e ele respondeu: "Lamento, o cronograma é soberano". Vou ter que fazer mais seis meses por 30 segundos.',
      tears: 1540,
      timeAgo: 'Há 1 dia',
      timestamp: Date.now() - 86400000,
      reactions: {
        cry: 720,
        violin: 410,
        grave: 310,
        clown: 60,
        pix: 40
      },
      userReacted: null,
      comments: []
    },
    {
      id: 'post-7',
      author: 'Tonho do Cheque',
      authorTitle: 'Sócio Honorário do Serasa',
      avatarSeed: 'TonhoCheque',
      avatarBg: 'ef4444',
      category: 'boletos',
      categoryName: '💸 Boletos & Falência',
      chaosLevel: 9,
      dramaTag: '💸 Prejuízo Irreparável',
      title: 'O banco cobrou R$ 38,50 de taxa para me avisar que meu saldo estava em R$ 0,14',
      story: 'Entrei no aplicativo do banco todo esperançoso esperando cair o vale. Vi um débito de "Tarifa de Adiantamento ao Depositante". O banco literalmente me cobrou uma taxa por eu estar sem dinheiro, me deixando negativo em R$ 38,36. Ou seja, eu tive que pagar para ser avisado da minha própria pobreza.',
      tears: 1490,
      timeAgo: 'Há 1 dia',
      timestamp: Date.now() - 93600000,
      reactions: {
        cry: 610,
        violin: 290,
        grave: 340,
        clown: 180,
        pix: 70
      },
      userReacted: null,
      comments: []
    },
    {
      id: 'post-8',
      author: 'Larissa das Plantas',
      authorTitle: 'Assassina de Suculentas',
      avatarSeed: 'LarissaPlantas',
      avatarBg: '10b981',
      category: 'cotidiano',
      categoryName: '🤕 Maldades do Cotidiano',
      chaosLevel: 6,
      dramaTag: '⚡ Azar Lendário',
      title: 'Consegui matar um cacto que não precisava de água há 4 meses',
      story: 'A vendedora da floricultura jurou de pés juntos: "Moça, até pedra morre antes desse cacto". Esqueci a coitada no parapeito da janela. No único dia que choveu granizo, a janela estava aberta, bateu vento, o vaso caiu dentro da máquina de lavar que estava centrifugando lençol. Nem o cacto sobrou, nem a máquina liga mais.',
      tears: 1150,
      timeAgo: 'Há 2 dias',
      timestamp: Date.now() - 172800000,
      reactions: {
        cry: 430,
        violin: 210,
        grave: 190,
        clown: 280,
        pix: 40
      },
      userReacted: null,
      comments: []
    }
  ];

  const DRAMATIC_EXCUSES = [
    "Não poderei comparecer pois minha alma foi leiloada pela fatura do cartão e meu gato me julgou silenciosamente até eu travar a coluna.",
    "Tive uma crise existencial ao encarar a louça na pia e agora estou legalmente impossibilitado de sorrir em público.",
    "Fui tentar botar um tênis e estalei uma vértebra que a medicina tradicional ainda nem catalogou.",
    "Meu saldo bancário está tão baixo que se eu respirar fora de casa o banco me cobra taxa de deslocamento.",
    "A chuva molhou minha última calça limpa no varal e estou usando uma toalha como toga grega do sofrimento.",
    "Recebi um áudio de 7 minutos do meu chefe e estou em estado de choque cataléptico esperando a segunda-feira.",
    "Comi uma coxinha duvidosa na rodoviária e agora meu estômago está tocando bateria com o Sepultura.",
    "Fui lavar o rosto na pia, molhei a manga do moletom e perdi toda e qualquer vontade de viver em sociedade hoje."
  ];

  const DEMOTIVATIONAL_QUOTES = [
    "Se você acha que o fundo do poço é o limite, esqueceu que ainda dá pra cavar com uma colher de plástico.",
    "O 'não' você já tem, agora vá em busca da humilhação completa.",
    "Nunca é tarde demais para desistir e ir dormir até quinta-feira.",
    "Errar é humano. Persistir no erro é ser brasileiro assalariado.",
    "Sorria! Amanhã é segunda-feira de novo e ninguém vai te poupar.",
    "Se a vida fechar uma porta, lembre-se que a janela provavelmente emperrou também."
  ];

  // ==========================================
  // 2. GESTOR DE DADOS (STORAGE)
  // ==========================================

  let posts = [];
  let currentCategory = 'all';
  let currentSort = 'top'; // 'top' | 'newest' | 'chaos'
  let searchQuery = '';
  let rainActive = false;
  let userTearsBonus = 3420;

  let duelData = {
    voted: null,
    votesA: 1240,
    votesB: 1240
  };

  function initData() {
    try {
      const storedPosts = localStorage.getItem('choreibook_posts');
      if (storedPosts) {
        posts = JSON.parse(storedPosts);
      } else {
        posts = [...DEFAULT_POSTS];
        savePosts();
      }

      const storedDuel = localStorage.getItem('choreibook_duel');
      if (storedDuel) {
        duelData = JSON.parse(storedDuel);
      }

      const storedTears = localStorage.getItem('choreibook_user_tears');
      if (storedTears) {
        userTearsBonus = parseInt(storedTears, 10);
      }

      const storedTheme = localStorage.getItem('choreibook_theme');
      if (storedTheme === 'light') {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        const themeIcon = document.getElementById('theme-icon');
        if (themeIcon) themeIcon.textContent = '☀️';
      }
    } catch (e) {
      console.warn('Erro ao carregar localStorage:', e);
      posts = [...DEFAULT_POSTS];
    }
  }

  function savePosts() {
    try {
      localStorage.setItem('choreibook_posts', JSON.stringify(posts));
    } catch (e) {
      console.warn('Não foi possível salvar no localStorage:', e);
    }
  }

  function saveDuel() {
    try {
      localStorage.setItem('choreibook_duel', JSON.stringify(duelData));
    } catch (e) {
      console.warn('Não foi possível salvar duelo:', e);
    }
  }

  function saveUserTears() {
    try {
      localStorage.setItem('choreibook_user_tears', userTearsBonus.toString());
      const el = document.getElementById('my-tears-count');
      if (el) el.textContent = formatNumber(userTearsBonus);
    } catch (e) {
      console.warn(e);
    }
  }

  function formatNumber(num) {
    return new Intl.NumberFormat('pt-BR').format(num);
  }

  // ==========================================
  // 3. SÍNTESE DE ÁUDIO WEB (SEM ARQUIVOS EXTERNOS)
  // ==========================================

  let audioCtx = null;
  function getAudioContext() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  // Toca uma melodia de violino melancólico (escala menor com vibrato)
  function playSadViolinMelody() {
    const ctx = getAudioContext();
    if (!ctx) return;

    const violinBtn = document.getElementById('btn-sad-violin');
    if (violinBtn) violinBtn.classList.add('playing');

    // Notas de violino triste (D4, F4, A4, G4, F4, E4, D4)
    const notes = [
      { freq: 293.66, dur: 0.6 }, // D4
      { freq: 349.23, dur: 0.6 }, // F4
      { freq: 440.00, dur: 0.9 }, // A4 (sustentada dramática)
      { freq: 392.00, dur: 0.4 }, // G4
      { freq: 349.23, dur: 0.4 }, // F4
      { freq: 329.63, dur: 0.5 }, // E4
      { freq: 293.66, dur: 1.2 }  // D4 final
    ];

    let startTime = ctx.currentTime + 0.05;

    notes.forEach((note) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Formato serrilhado filtrado lembra timbre de cordas
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(note.freq, startTime);

      // Vibrato suave
      const vibrato = ctx.createOscillator();
      const vibratoGain = ctx.createGain();
      vibrato.frequency.value = 5.5; // 5.5 Hz vibrato
      vibratoGain.gain.value = 6;
      vibrato.connect(osc.frequency);
      vibrato.start(startTime);
      vibrato.stop(startTime + note.dur);

      // Envelope ADSR melancólico
      gain.gain.setValueAtTime(0.001, startTime);
      gain.gain.linearRampToValueAtTime(0.18, startTime + 0.12);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + note.dur);

      // Filtro passa-baixa para suavizar o som estridente
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 1800;

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + note.dur);

      startTime += note.dur * 0.85;
    });

    setTimeout(() => {
      if (violinBtn) violinBtn.classList.remove('playing');
    }, (startTime - ctx.currentTime) * 1000);

    showToast('🎻 Tocando trilha de violino dramático... Sinta a dor.', 'default');
  }

  // Som curto cômico de lágrima pingando / boing ao reagir
  function playTearSound(pitch = 520) {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(pitch, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(pitch * 0.4, ctx.currentTime + 0.22);

      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.22);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.22);
    } catch (e) {
      // Ignora falhas de áudio
    }
  }

  // ==========================================
  // 4. CHUVA DE LÁGRIMAS INTERATIVA
  // ==========================================

  let rainInterval = null;

  function toggleTearRain() {
    rainActive = !rainActive;
    const container = document.getElementById('tear-rain-container');
    const rainBtn = document.getElementById('btn-toggle-rain');

    if (!container) return;

    if (rainActive) {
      container.classList.remove('hidden');
      if (rainBtn) rainBtn.classList.add('playing');
      showToast('🌧️ Chuva de lágrimas ativada! O choro é livre.', 'default');

      rainInterval = setInterval(() => {
        if (!rainActive) return;
        createTearDrop(container);
      }, 180);
    } else {
      container.classList.add('hidden');
      container.innerHTML = '';
      if (rainBtn) rainBtn.classList.remove('playing');
      if (rainInterval) clearInterval(rainInterval);
      showToast('☀️ Chuva de lágrimas pausada.', 'default');
    }
  }

  function createTearDrop(container) {
    const tear = document.createElement('span');
    tear.className = 'tear-particle';
    const emojis = ['💧', '😭', '😿', '🌧️', '🥺'];
    tear.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    const startX = Math.random() * window.innerWidth;
    const duration = Math.random() * 2 + 2; // 2s a 4s
    const size = Math.random() * 18 + 14;

    tear.style.left = `${startX}px`;
    tear.style.fontSize = `${size}px`;
    tear.style.animationDuration = `${duration}s`;

    container.appendChild(tear);

    setTimeout(() => {
      tear.remove();
    }, duration * 1000);
  }

  // ==========================================
  // 5. TOASTS & NOTIFICAÇÕES
  // ==========================================

  function showToast(message, type = 'default') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type === 'danger' ? 'toast-danger' : type === 'success' ? 'toast-success' : ''}`;
    toast.innerHTML = `<span>${message}</span>`;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3800);
  }

  // ==========================================
  // 6. RENDERIZAÇÃO DO FEED DE POSTS
  // ==========================================

  function getFilteredAndSortedPosts() {
    let result = [...posts];

    // Filtro por Categoria
    if (currentCategory !== 'all') {
      result = result.filter(p => p.category === currentCategory);
    }

    // Filtro por Busca
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.story.toLowerCase().includes(q) ||
        p.author.toLowerCase().includes(q) ||
        (p.dramaTag && p.dramaTag.toLowerCase().includes(q))
      );
    }

    // Ordenação
    if (currentSort === 'top') {
      result.sort((a, b) => b.tears - a.tears);
    } else if (currentSort === 'newest') {
      result.sort((a, b) => b.timestamp - a.timestamp);
    } else if (currentSort === 'chaos') {
      result.sort((a, b) => b.chaosLevel - a.chaosLevel || b.tears - a.tears);
    }

    return result;
  }

  function renderFeed() {
    const feedContainer = document.getElementById('posts-feed');
    const counterText = document.getElementById('posts-counter-text');
    if (!feedContainer) return;

    const filtered = getFilteredAndSortedPosts();

    if (counterText) {
      counterText.innerHTML = `Exibindo <strong>${filtered.length}</strong> relatos de sofrência`;
    }

    if (filtered.length === 0) {
      feedContainer.innerHTML = `
        <div class="card" style="text-align: center; padding: 40px 20px;">
          <span style="font-size: 3rem;">🏖️</span>
          <h3 style="margin-top: 10px; font-family: var(--font-display);">Nenhuma desgraça encontrada!</h3>
          <p style="color: var(--text-muted); font-size: 0.88rem; margin-top: 6px;">
            Parece que a vida está boa demais por aqui ou sua busca não retornou sofrimento.
          </p>
          <button class="btn-primary-glow" style="margin-top: 16px;" onclick="window.choreiApp.openPostModal()">
            + Seja o Primeiro a Reclamar
          </button>
        </div>
      `;
      return;
    }

    feedContainer.innerHTML = filtered.map(post => createPostCardHTML(post)).join('');
    updateCategoryCounters();
    updateLeaderboardPodium();
  }

  function createPostCardHTML(post) {
    const isLevelMax = post.chaosLevel >= 9;
    const authorBadge = post.authorTitle ? `<span class="post-badge-rank">${escapeHtml(post.authorTitle)}</span>` : '';

    const hasReactedCry = post.userReacted === 'cry' ? 'user-reacted' : '';
    const hasReactedViolin = post.userReacted === 'violin' ? 'user-reacted' : '';
    const hasReactedGrave = post.userReacted === 'grave' ? 'user-reacted' : '';
    const hasReactedClown = post.userReacted === 'clown' ? 'user-reacted' : '';
    const hasReactedPix = post.userReacted === 'pix' ? 'user-reacted' : '';

    const commentsCount = post.comments ? post.comments.length : 0;

    return `
      <article class="post-card" id="card-${post.id}">
        <!-- Topo do Post -->
        <div class="post-header">
          <div class="post-author-box">
            <img 
              src="https://api.dicebear.com/7.x/bottts/svg?seed=${post.avatarSeed}&backgroundColor=${post.avatarBg || '1e293b'}" 
              alt="${escapeHtml(post.author)}" 
              class="post-avatar"
            >
            <div class="post-meta">
              <span class="post-author-name">
                ${escapeHtml(post.author)}
                ${authorBadge}
              </span>
              <div class="post-time-category">
                <span class="post-category-tag">${escapeHtml(post.categoryName)}</span> • 
                <span>${post.timeAgo || 'Recente'}</span>
              </div>
            </div>
          </div>

          <div class="post-gravity-badge ${isLevelMax ? 'level-max' : ''}" title="Nível de Caos e Sofrimento">
            <span>🔥 Gravidade ${post.chaosLevel}/10</span>
          </div>
        </div>

        <!-- Conteúdo do Post -->
        <div class="post-content">
          <h2 class="post-title">${escapeHtml(post.title)}</h2>
          <p class="post-text">${escapeHtml(post.story)}</p>
          ${post.dramaTag ? `<span class="post-drama-tag">${escapeHtml(post.dramaTag)}</span>` : ''}
        </div>

        <!-- Barra de Pontuação de Lágrimas -->
        <div class="post-score-bar">
          <div class="score-tears-text">
            <span>💧</span>
            <span class="score-tears-num" id="tears-val-${post.id}">${formatNumber(post.tears)}</span>
            <span>Lágrimas de Piedade</span>
          </div>
          <span class="score-standing-text">Competindo pelo Troféu Coitado</span>
        </div>

        <!-- Ações e Reações Interativas -->
        <div class="post-actions-row">
          
          <button class="reaction-btn ${hasReactedCry}" onclick="window.choreiApp.reactPost('${post.id}', 'cry', event)" title="Chorei Junto (+10 Lágrimas)">
            <span class="reaction-emoji">😭</span>
            <span>Chorei</span>
            <span class="reaction-count" id="count-cry-${post.id}">${post.reactions.cry}</span>
          </button>

          <button class="reaction-btn ${hasReactedViolin}" onclick="window.choreiApp.reactPost('${post.id}', 'violin', event)" title="Toca o Violino Triste (+5 Lágrimas)">
            <span class="reaction-emoji">🎻</span>
            <span>Violino</span>
            <span class="reaction-count" id="count-violin-${post.id}">${post.reactions.violin}</span>
          </button>

          <button class="reaction-btn ${hasReactedGrave}" onclick="window.choreiApp.reactPost('${post.id}', 'grave', event)" title="Nem a UTI Salva (+15 Lágrimas)">
            <span class="reaction-emoji">💀</span>
            <span>Enterra</span>
            <span class="reaction-count" id="count-grave-${post.id}">${post.reactions.grave}</span>
          </button>

          <button class="reaction-btn ${hasReactedClown}" onclick="window.choreiApp.reactPost('${post.id}', 'clown', event)" title="Troféu Palhaço (+8 Lágrimas)">
            <span class="reaction-emoji">🤡</span>
            <span>Palhaço</span>
            <span class="reaction-count" id="count-clown-${post.id}">${post.reactions.clown}</span>
          </button>

          <button class="reaction-btn ${hasReactedPix}" onclick="window.choreiApp.reactPost('${post.id}', 'pix', event)" title="Faz um Pix de Piedade (+20 Lágrimas)">
            <span class="reaction-emoji">💸</span>
            <span>Pix</span>
            <span class="reaction-count" id="count-pix-${post.id}">${post.reactions.pix}</span>
          </button>

          <!-- Toggle Comentários -->
          <button class="btn-toggle-comments" onclick="window.choreiApp.toggleComments('${post.id}')" title="Ver / Deixar Solidariedade">
            <span>💬</span>
            <span id="comment-btn-txt-${post.id}">${commentsCount} solidariedades</span>
          </button>

        </div>

        <!-- Gaveta de Comentários (Oculta por padrão) -->
        <div class="post-comments-section hidden" id="comments-box-${post.id}">
          <form class="comment-input-box" onsubmit="event.preventDefault(); window.choreiApp.submitComment('${post.id}');">
            <input type="text" id="comment-input-${post.id}" placeholder="Deixe uma palavra de consolo ou deboche..." required maxlength="180">
            <button type="submit" class="comment-submit-btn">Enviar</button>
          </form>

          <div class="comments-list" id="comments-list-${post.id}">
            ${renderCommentsList(post.comments || [])}
          </div>
        </div>

      </article>
    `;
  }

  function renderCommentsList(comments) {
    if (!comments || comments.length === 0) {
      return `<p style="font-size: 0.76rem; color: var(--text-subtle); text-align: center; padding: 6px 0;">Nenhum comentário solidário ainda. Seja o primeiro a prestar homenagens.</p>`;
    }
    return comments.map(c => `
      <div class="single-comment">
        <img src="https://api.dicebear.com/7.x/bottts/svg?seed=${c.avatarSeed || 'anon'}&backgroundColor=334155" alt="Avatar" class="comment-author-avatar">
        <div class="comment-content">
          <span class="comment-author-name">${escapeHtml(c.author)}</span>
          <span class="comment-text">${escapeHtml(c.text)}</span>
        </div>
      </div>
    `).join('');
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // ==========================================
  // 7. SISTEMA DE REAÇÕES & PONTUAÇÃO
  // ==========================================

  const REACTION_POINTS = {
    cry: 10,
    violin: 5,
    grave: 15,
    clown: 8,
    pix: 20
  };

  function reactPost(postId, reactionType, event) {
    const post = posts.find(p => p.id === postId);
    if (!post) return;

    const points = REACTION_POINTS[reactionType] || 10;

    // Se já reagiu com esse tipo, cancela; senão altera
    if (post.userReacted === reactionType) {
      post.reactions[reactionType] = Math.max(0, post.reactions[reactionType] - 1);
      post.tears = Math.max(0, post.tears - points);
      post.userReacted = null;
      showToast('Reação removida. Seu coração endureceu.', 'default');
    } else {
      // Se já tinha reagido com outro, remove o antigo
      if (post.userReacted) {
        const oldPoints = REACTION_POINTS[post.userReacted] || 10;
        post.reactions[post.userReacted] = Math.max(0, post.reactions[post.userReacted] - 1);
        post.tears = Math.max(0, post.tears - oldPoints);
      }

      post.reactions[reactionType] = (post.reactions[reactionType] || 0) + 1;
      post.tears += points;
      post.userReacted = reactionType;

      // Efeito sonoro
      playTearSound(reactionType === 'grave' ? 240 : reactionType === 'violin' ? 440 : 620);

      // Efeito visual de lágrimas subindo
      if (event && event.currentTarget) {
        spawnFloatingTears(event.currentTarget, `+${points} 💧`);
      }

      // Recompensa para o usuário logado
      userTearsBonus += 5;
      saveUserTears();

      // Feedback em tom de comédia
      const msgs = {
        cry: '😭 Você chorou junto com essa tragédia! (+10 lágrimas atribuídas)',
        violin: '🎻 O violino mais triste do mundo tocou para esta alma!',
        grave: '💀 Situação irreversível! Nem o SAMU socorre mais.',
        clown: '🤡 Membro honorário do Circo da Vida registrado com sucesso.',
        pix: '💸 Piedade máxima concedida! O Serasa agradece a lembrança.'
      };
      showToast(msgs[reactionType] || 'Voto computado!', 'success');
    }

    savePosts();

    // Atualiza pontuação e botões no DOM diretamente para performance e fluidez
    updatePostCardDOM(post);
    updateLeaderboardPodium();
  }

  function spawnFloatingTears(targetEl, text) {
    const rect = targetEl.getBoundingClientRect();
    const floater = document.createElement('div');
    floater.className = 'floating-tears';
    floater.textContent = text;
    floater.style.left = `${rect.left + rect.width / 2}px`;
    floater.style.top = `${rect.top}px`;
    document.body.appendChild(floater);

    setTimeout(() => floater.remove(), 950);
  }

  function updatePostCardDOM(post) {
    const scoreNum = document.getElementById(`tears-val-${post.id}`);
    if (scoreNum) scoreNum.textContent = formatNumber(post.tears);

    ['cry', 'violin', 'grave', 'clown', 'pix'].forEach(type => {
      const countEl = document.getElementById(`count-${type}-${post.id}`);
      if (countEl) countEl.textContent = post.reactions[type] || 0;
    });

    const card = document.getElementById(`card-${post.id}`);
    if (card) {
      const btns = card.querySelectorAll('.reaction-btn');
      btns.forEach(b => b.classList.remove('user-reacted'));
      if (post.userReacted) {
        const activeBtn = card.querySelector(`.reaction-btn[onclick*="'${post.userReacted}'"]`);
        if (activeBtn) activeBtn.classList.add('user-reacted');
      }
    }
  }

  // ==========================================
  // 8. COMENTÁRIOS
  // ==========================================

  function toggleComments(postId) {
    const box = document.getElementById(`comments-box-${postId}`);
    if (!box) return;
    box.classList.toggle('hidden');
    if (!box.classList.contains('hidden')) {
      const input = document.getElementById(`comment-input-${postId}`);
      if (input) input.focus();
    }
  }

  function submitComment(postId) {
    const post = posts.find(p => p.id === postId);
    const input = document.getElementById(`comment-input-${postId}`);
    if (!post || !input || !input.value.trim()) return;

    if (!post.comments) post.comments = [];

    const newComment = {
      author: 'Zé Coitado (Você)',
      avatarSeed: 'ZeCoitado',
      text: input.value.trim()
    };

    post.comments.push(newComment);
    post.tears += 15; // Comentar dá lágrimas extras de consolo!
    userTearsBonus += 15;

    input.value = '';
    savePosts();
    saveUserTears();

    // Re-renderiza a lista de comentários desse post
    const list = document.getElementById(`comments-list-${postId}`);
    if (list) list.innerHTML = renderCommentsList(post.comments);

    const btnTxt = document.getElementById(`comment-btn-txt-${postId}`);
    if (btnTxt) btnTxt.textContent = `${post.comments.length} solidariedades`;

    const scoreNum = document.getElementById(`tears-val-${post.id}`);
    if (scoreNum) scoreNum.textContent = formatNumber(post.tears);

    playTearSound(480);
    showToast('💬 Palavra de consolo registrada (+15 lágrimas pro sofredor)!', 'success');
    updateLeaderboardPodium();
  }

  // ==========================================
  // 9. ATUALIZAÇÃO DO PÓDIO & RANKING GERAL
  // ==========================================

  function updateLeaderboardPodium() {
    // Ordena todos os posts por lágrimas
    const sorted = [...posts].sort((a, b) => b.tears - a.tears);

    if (sorted.length < 3) return;

    // 1º Lugar
    const first = sorted[0];
    const elFirstTears = document.getElementById('podium-gold-tears');
    const elFirstBox = document.getElementById('podium-first');
    if (elFirstBox && first) {
      elFirstBox.querySelector('.podium-name').textContent = first.author;
      elFirstBox.querySelector('.podium-motto').textContent = `"${first.title}"`;
      elFirstBox.querySelector('.podium-avatar').src = `https://api.dicebear.com/7.x/bottts/svg?seed=${first.avatarSeed}&backgroundColor=${first.avatarBg || '0284c7'}`;
      if (elFirstTears) elFirstTears.textContent = `${formatNumber(first.tears)} 💧`;
    }

    // 2º Lugar
    const second = sorted[1];
    const elSecondTears = document.getElementById('podium-silver-tears');
    const elSecondBox = document.getElementById('podium-second');
    if (elSecondBox && second) {
      elSecondBox.querySelector('.podium-name').textContent = second.author;
      elSecondBox.querySelector('.podium-motto').textContent = `"${second.title}"`;
      elSecondBox.querySelector('.podium-avatar').src = `https://api.dicebear.com/7.x/bottts/svg?seed=${second.avatarSeed}&backgroundColor=${second.avatarBg || '475569'}`;
      if (elSecondTears) elSecondTears.textContent = `${formatNumber(second.tears)} 💧`;
    }

    // 3º Lugar
    const third = sorted[2];
    const elThirdTears = document.getElementById('podium-bronze-tears');
    const elThirdBox = document.getElementById('podium-third');
    if (elThirdBox && third) {
      elThirdBox.querySelector('.podium-name').textContent = third.author;
      elThirdBox.querySelector('.podium-motto').textContent = `"${third.title}"`;
      elThirdBox.querySelector('.podium-avatar').src = `https://api.dicebear.com/7.x/bottts/svg?seed=${third.avatarSeed}&backgroundColor=${third.avatarBg || '334155'}`;
      if (elThirdTears) elThirdTears.textContent = `${formatNumber(third.tears)} 💧`;
    }

    // Posições 4º e 5º na sublista
    const sublist = document.getElementById('ranking-sublist');
    if (sublist) {
      const rest = sorted.slice(3, 5);
      sublist.innerHTML = rest.map((item, idx) => `
        <div class="sublist-item">
          <span class="sublist-pos">#${idx + 4}</span>
          <img src="https://api.dicebear.com/7.x/bottts/svg?seed=${item.avatarSeed}&backgroundColor=1e293b" class="sublist-avatar" alt="Avatar">
          <span class="sublist-name" title="${escapeHtml(item.title)}">${escapeHtml(item.author)}</span>
          <span class="sublist-score">${formatNumber(item.tears)} 💧</span>
        </div>
      `).join('');
    }
  }

  function updateCategoryCounters() {
    const counts = {
      all: posts.length,
      clt: 0,
      boletos: 0,
      amor: 0,
      transporte: 0,
      estudante: 0,
      cotidiano: 0
    };

    posts.forEach(p => {
      if (counts[p.category] !== undefined) {
        counts[p.category]++;
      }
    });

    Object.keys(counts).forEach(cat => {
      const el = document.getElementById(`count-${cat}`);
      if (el) el.textContent = counts[cat];
    });
  }

  // ==========================================
  // 10. MODAL & CRIAÇÃO DE NOVA DESGRAÇA
  // ==========================================

  function openPostModal(preCategory = null) {
    const modal = document.getElementById('post-modal');
    if (!modal) return;
    modal.classList.remove('hidden');

    if (preCategory) {
      const catSelect = document.getElementById('post-category');
      if (catSelect) catSelect.value = preCategory;
    }

    const titleInput = document.getElementById('post-title');
    if (titleInput) titleInput.focus();
  }

  function closePostModal() {
    const modal = document.getElementById('post-modal');
    if (modal) modal.classList.add('hidden');
  }

  function handleCreatePost(e) {
    e.preventDefault();

    const authorInput = document.getElementById('post-author');
    const categorySelect = document.getElementById('post-category');
    const chaosRange = document.getElementById('post-chaos');
    const titleInput = document.getElementById('post-title');
    const storyInput = document.getElementById('post-story');
    const dramaTagRadio = document.querySelector('input[name="dramaTag"]:checked');

    if (!authorInput || !titleInput || !storyInput) return;

    const author = authorInput.value.trim() || 'Zé Coitado';
    const title = titleInput.value.trim();
    const story = storyInput.value.trim();
    const category = categorySelect ? categorySelect.value : 'cotidiano';
    const chaosLevel = chaosRange ? parseInt(chaosRange.value, 10) : 8;
    const dramaTag = dramaTagRadio ? dramaTagRadio.value : '🚨 Humilhação Pública';

    const categoryNames = {
      clt: '💼 CLT & Escravidão',
      boletos: '💸 Boletos & Falência',
      amor: '💔 Amor & Chifre',
      transporte: '🚌 Transporte Público',
      estudante: '🎓 Faculdade & TCC',
      cotidiano: '🤕 Maldades do Cotidiano'
    };

    // Pontos iniciais de misericórdia baseados no nível de caos
    const baseTears = chaosLevel * 45 + Math.floor(Math.random() * 80);

    const newPost = {
      id: `post-${Date.now()}`,
      author,
      authorTitle: chaosLevel === 10 ? '🚨 Vítima do Destino' : 'Sobrevivente do Dia',
      avatarSeed: author.replace(/\s+/g, '') + Math.floor(Math.random() * 100),
      avatarBg: ['0284c7', '475569', '7c3aed', 'e11d48', '059669'][Math.floor(Math.random() * 5)],
      category,
      categoryName: categoryNames[category] || '🌐 Perrengue Geral',
      chaosLevel,
      dramaTag,
      title,
      story,
      tears: baseTears,
      timeAgo: 'Agora mesmo',
      timestamp: Date.now(),
      reactions: {
        cry: 1,
        violin: 0,
        grave: 0,
        clown: 0,
        pix: 0
      },
      userReacted: 'cry',
      comments: []
    };

    // Prepend no feed
    posts.unshift(newPost);
    savePosts();

    userTearsBonus += baseTears;
    saveUserTears();

    closePostModal();
    titleInput.value = '';
    storyInput.value = '';

    renderFeed();
    playSadViolinMelody();
    showToast(`😭 Perrengue registrado! Você ganhou ${baseTears} lágrimas de solidariedade inicial!`, 'success');

    // Rola suave até o topo do feed
    const firstCard = document.getElementById(`card-${newPost.id}`);
    if (firstCard) {
      firstCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      firstCard.style.outline = '2px solid var(--primary)';
      setTimeout(() => firstCard.style.outline = 'none', 2000);
    }
  }

  // ==========================================
  // 11. X1 DA DESGRAÇA (DUELO INTERATIVO)
  // ==========================================

  function voteDuel(option) {
    if (duelData.voted) {
      showToast('Você já votou no duelo de hoje! A vida é dura e não dá direito a segundo turno.', 'default');
      return;
    }

    duelData.voted = option;
    if (option === 'a') duelData.votesA++;
    if (option === 'b') duelData.votesB++;

    saveDuel();
    renderDuel();

    playTearSound(option === 'a' ? 580 : 380);
    showToast(`⚔️ Voto registrado na Opção ${option.toUpperCase()}! Você escolheu o pior sofrimento.`, 'success');
  }

  function renderDuel() {
    const total = duelData.votesA + duelData.votesB;
    const pctA = Math.round((duelData.votesA / total) * 100);
    const pctB = 100 - pctA;

    const barA = document.getElementById('duel-bar-a');
    const barB = document.getElementById('duel-bar-b');
    const pctLabelA = document.getElementById('duel-pct-a');
    const pctLabelB = document.getElementById('duel-pct-b');
    const countA = document.getElementById('duel-count-a');
    const countB = document.getElementById('duel-count-b');
    const optA = document.getElementById('duel-opt-a');
    const optB = document.getElementById('duel-opt-b');
    const feedback = document.getElementById('duel-feedback');

    if (barA) barA.style.width = `${pctA}%`;
    if (barB) barB.style.width = `${pctB}%`;
    if (pctLabelA) pctLabelA.textContent = `${pctA}%`;
    if (pctLabelB) pctLabelB.textContent = `${pctB}%`;
    if (countA) countA.textContent = `${formatNumber(duelData.votesA)} votos`;
    if (countB) countB.textContent = `${formatNumber(duelData.votesB)} votos`;

    if (optA && duelData.voted === 'a') optA.classList.add('voted');
    if (optB && duelData.voted === 'b') optB.classList.add('voted');

    if (feedback && duelData.voted) {
      feedback.textContent = `Você votou na Opção ${duelData.voted.toUpperCase()}. ${pctA > pctB ? 'A maioria concorda com o seu pavor!' : 'Você tem um gosto peculiar para desespero!'}`;
    }
  }

  // ==========================================
  // 12. CALCULADORA DE SOFRÊNCIA
  // ==========================================

  function calculateMisery() {
    const q1 = parseInt(document.getElementById('calc-q1').value, 10);
    const q2 = parseInt(document.getElementById('calc-q2').value, 10);
    const q3 = parseInt(document.getElementById('calc-q3').value, 10);

    const total = Math.round((q1 + q2 + q3) / 3);

    const resultBox = document.getElementById('calc-result');
    const emojiEl = document.getElementById('calc-res-emoji');
    const titleEl = document.getElementById('calc-res-title');
    const descEl = document.getElementById('calc-res-desc');

    if (!resultBox) return;
    resultBox.classList.remove('hidden');

    let emoji = '💀';
    let title = 'Mártir em Estado Terminal';
    let desc = '';

    if (total <= 30) {
      emoji = '🤨';
      title = 'Infiltrado Burguês';
      desc = `Índice de desgraça em míseros ${total}%. Você tem saúde, dinheiro ou paz de espírito. Por favor, retire-se do ChoreiBook antes que os outros sintam inveja.`;
    } else if (total <= 65) {
      emoji = '😮‍💨';
      title = 'Guerreiro Cansado da Roleta';
      desc = `Índice de desgraça em ${total}%. Você já sente aquela dorzinha no rim ao olhar o extrato, mas ainda consegue dar risada de meme no Twitter. Sobrevivendo com louvor.`;
    } else if (total <= 85) {
      emoji = '😭';
      title = 'Patrimônio Histórico do Sofrimento';
      desc = `Índice de desgraça em ${total}%. Seu nome é cogitado para estampar a nota de 3 reais. Recomendamos um banho morno no escuro e um chá de camomila vencido.`;
    } else {
      emoji = '💀';
      title = 'Fim dos Tempos: Nível Apocalipse';
      desc = `Índice de desgraça em ${total}%. Nem o Google consegue calcular como você ainda está de pé. Ganhe 100 lágrimas extras automáticas por bravura existencial.`;
      userTearsBonus += 100;
      saveUserTears();
    }

    emojiEl.textContent = emoji;
    titleEl.textContent = title;
    descEl.textContent = desc;

    playTearSound(320);
    showToast(`Diagnóstico concluído: ${title}!`, 'default');
  }

  // ==========================================
  // 13. GERADOR DE DESCULPAS
  // ==========================================

  function generateNewExcuse() {
    const display = document.getElementById('excuse-display');
    if (!display) return;

    const randIndex = Math.floor(Math.random() * DRAMATIC_EXCUSES.length);
    display.textContent = `"${DRAMATIC_EXCUSES[randIndex]}"`;

    playTearSound(600);
    showToast('🎭 Desculpa gerada! Copie e envie para fugir do compromisso.', 'default');
  }

  // ==========================================
  // 14. ALTERNADOR DE TEMA CLARO / ESCURO
  // ==========================================

  function toggleTheme() {
    const isDark = document.body.classList.contains('dark-theme');
    const themeIcon = document.getElementById('theme-icon');

    if (isDark) {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      if (themeIcon) themeIcon.textContent = '☀️';
      localStorage.setItem('choreibook_theme', 'light');
      showToast('☀️ Modo Ilusão de Óptica (Claro) ativado. Seus olhos também vão chorar agora.', 'default');
    } else {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      if (themeIcon) themeIcon.textContent = '🌙';
      localStorage.setItem('choreibook_theme', 'dark');
      showToast('🌙 Modo Vale das Lágrimas (Escuro) restaurado.', 'default');
    }
  }

  // ==========================================
  // 15. CONFIGURAÇÃO DE LISTENERS & INICIALIZAÇÃO
  // ==========================================

  function setupEventListeners() {
    // Busca em tempo real
    const searchInput = document.getElementById('search-input');
    const clearSearchBtn = document.getElementById('clear-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        if (clearSearchBtn) {
          clearSearchBtn.classList.toggle('hidden', searchQuery.length === 0);
        }
        renderFeed();
      });
    }

    if (clearSearchBtn) {
      clearSearchBtn.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        searchQuery = '';
        clearSearchBtn.classList.add('hidden');
        renderFeed();
      });
    }

    // Abas de Ordenação do Feed
    const sortTabs = document.querySelectorAll('.tab-btn');
    sortTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        sortTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentSort = tab.dataset.sort;
        renderFeed();
      });
    });

    // Categorias da Barra Lateral
    const catButtons = document.querySelectorAll('.cat-btn');
    const activeCatLabel = document.getElementById('active-category-label');
    catButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        catButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.dataset.cat;
        if (activeCatLabel) {
          activeCatLabel.textContent = btn.querySelector('.cat-name').textContent;
        }
        renderFeed();
      });
    });

    // Gatilhos Rápidos de Post
    const quickTrigger = document.getElementById('quick-trigger-btn');
    if (quickTrigger) {
      quickTrigger.addEventListener('click', () => openPostModal());
    }

    const openModalBtn = document.getElementById('btn-open-modal');
    if (openModalBtn) {
      openModalBtn.addEventListener('click', () => openPostModal());
    }

    const quickTagClt = document.getElementById('quick-tag-clt');
    if (quickTagClt) quickTagClt.addEventListener('click', () => openPostModal('clt'));

    const quickTagBoletos = document.getElementById('quick-tag-boletos');
    if (quickTagBoletos) quickTagBoletos.addEventListener('click', () => openPostModal('boletos'));

    const quickTagAmor = document.getElementById('quick-tag-amor');
    if (quickTagAmor) quickTagAmor.addEventListener('click', () => openPostModal('amor'));

    const quickTagTransporte = document.getElementById('quick-tag-transporte');
    if (quickTagTransporte) quickTagTransporte.addEventListener('click', () => openPostModal('transporte'));

    // Fechar Modal
    const modalCloseBtn = document.getElementById('modal-close-btn');
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closePostModal);

    const modalCancelBtn = document.getElementById('modal-cancel-btn');
    if (modalCancelBtn) modalCancelBtn.addEventListener('click', closePostModal);

    const modalOverlay = document.getElementById('post-modal');
    if (modalOverlay) {
      modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closePostModal();
      });
    }

    // Formulário de Criação de Post
    const postForm = document.getElementById('create-post-form');
    if (postForm) postForm.addEventListener('submit', handleCreatePost);

    // Slider de Caos
    const chaosSlider = document.getElementById('post-chaos');
    const chaosBadge = document.getElementById('range-val-badge');
    if (chaosSlider && chaosBadge) {
      chaosSlider.addEventListener('input', (e) => {
        const val = e.target.value;
        const emoji = val >= 9 ? '🚨 FIM DOS TEMPOS' : val >= 7 ? '⚠️ GRAVE' : val >= 4 ? '😐 CHATO' : '🌱 LEVE';
        chaosBadge.textContent = `${val}/10 ${emoji}`;
      });
    }

    // Contador de Caracteres da História
    const storyTextarea = document.getElementById('post-story');
    const charCounter = document.getElementById('char-counter');
    if (storyTextarea && charCounter) {
      storyTextarea.addEventListener('input', (e) => {
        charCounter.textContent = e.target.value.length;
      });
    }

    // Botão Violino Triste
    const violinBtn = document.getElementById('btn-sad-violin');
    if (violinBtn) {
      violinBtn.addEventListener('click', playSadViolinMelody);
    }

    // Toggle Chuva de Lágrimas
    const rainBtn = document.getElementById('btn-toggle-rain');
    if (rainBtn) {
      rainBtn.addEventListener('click', toggleTearRain);
    }

    // Toggle Tema
    const themeBtn = document.getElementById('btn-toggle-theme');
    if (themeBtn) {
      themeBtn.addEventListener('click', toggleTheme);
    }

    // Gerador de Desculpas
    const excuseBtn = document.getElementById('btn-generate-excuse');
    if (excuseBtn) {
      excuseBtn.addEventListener('click', generateNewExcuse);
    }

    // Rotação da Frase Desmotivacional
    const demotivationEl = document.getElementById('daily-demotivation');
    if (demotivationEl) {
      const randQuote = DEMOTIVATIONAL_QUOTES[Math.floor(Math.random() * DEMOTIVATIONAL_QUOTES.length)];
      demotivationEl.textContent = randQuote;
    }
  }

  // ==========================================
  // 16. EXPORTAÇÃO GLOBAL PARA ONCLICK HTML
  // ==========================================

  window.choreiApp = {
    reactPost,
    toggleComments,
    submitComment,
    voteDuel,
    calculateMisery,
    openPostModal,
    playViolinSound: playSadViolinMelody
  };

  // Inicialização no DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {
    initData();
    setupEventListeners();
    renderFeed();
    renderDuel();

    const tearsCountEl = document.getElementById('my-tears-count');
    if (tearsCountEl) tearsCountEl.textContent = formatNumber(userTearsBonus);
  });

})();
