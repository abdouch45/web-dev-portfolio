/* ════════════════════════════════════════════════════════════
   DATA — edit these to update the portfolio
════════════════════════════════════════════════════════════ */

const PLAYER = {
  name:    'C.',
  suffix:  'Abdelmoudjib',
  class:   'FULL STACK CRAFTSMAN & DevOps',
  desc:    'Software Engineer. Every project is a quest — crafted pixel-perfect, delivered on time.',
  ability: 'Turning ideas into fast, clean, pixel-perfect products — no bloat, just craft.',
};

const PLAYER_STATS = [
  { value: '10+',  label: 'QUESTS'  },
  { value: '2+',   label: 'YRS EXP' },
  { value: '100%', label: 'PASSION' },
];

const SKILLS = [
  { name: 'HTML / CSS',   value: 95 },
  { name: 'JavaScript',   value: 95 },
  { name: 'Mobile Dev',   value: 95 },
  { name: 'React / Next', value: 82 },
  { name: 'Backend',      value: 95 },
  { name: 'Network',      value: 90 },
  { name: 'Linux',      value: 95 },
  { name: 'UI / UX',      value: 85 },
  
];

const PLAYER_INFO = [
  { key: 'CLASS',  value: 'Full Stack Dev'  },
  { key: 'GUILD',  value: 'Freelance'       },
  { key: 'REGION', value: 'Remote,Europe'     },
  { key: 'QUESTS', value: '10+ Completed'   },
  { key: 'SPEC',   value: 'Web & Mobile'    },
];

const CONTACT = {
  email:    'abdelmoudjib.chihoub@gmail.com',
  whatsapp: 'https://wa.me/33759189725',
  linkedin: 'https://www.linkedin.com/in/abdelmoudjib-chihoub-7597262a4/',
};

/* Path waypoints — left % AND map y (px) for each node. */
const WAYPOINTS = [
  { left: 73, y:  200 },  // UAE fire safety
  { left: 27, y:  440 },  // Grill & Co
  { left: 74, y:  680 },  // 2M Confort
  { left: 26, y:  920 },  // Chicken Prices
  { left: 73, y: 1160 },  // King of Tha
  { left: 27, y: 1400 },  // Auto École
  { left: 50, y: 1600 },  // Guild Hall (last dot — knight stops here)
];

const BADGE_CFG = {
  done:    { cls: 'pb-done', label: '✓ COMPLETE'  },
  web:     { cls: 'pb-web',  label: 'WEB'         },
  biz:     { cls: 'pb-biz',  label: 'BUSINESS'    },
  app:     { cls: 'pb-app',  label: 'APP'         },
  private: { cls: 'pb-priv', label: '🔒 PRIVATE'  },
};

/* mapPos.top is pixels from top of the 2000px map container.
   SVG viewBox "0 0 100 100" → y = top / 2000 * 100 */
const QUESTS = [
  {
    id: 0,
    mapPos: { left: '73%', top: 200 },
    icon: `<svg viewBox="0 0 20 20" fill="currentColor"><rect x="4" y="1" width="12" height="2"/><rect x="2" y="3" width="16" height="8"/><rect x="4" y="11" width="12" height="2"/><rect x="6" y="13" width="8" height="2"/><rect x="8" y="15" width="4" height="2"/><rect x="9" y="17" width="2" height="1"/><rect x="9" y="4" width="2" height="6" fill="rgba(0,0,0,.35)"/><rect x="6" y="6" width="8" height="2" fill="rgba(0,0,0,.35)"/></svg>`, nodeLabel: 'FIRE SAFETY',
    num: '#01', title: 'UAE FIRE SAFETY — DIGITAL TRANSFORMATION',
    badges: ['done', 'biz', 'private'], stars: 5,
    noLink: true,
    desc: 'Led, single-handedly, the end-to-end digital transformation of a UAE fire-safety installation company: digitised field processes, deployed management tools and built the supporting IT infrastructure.',
    url: '', uLabel: 'private project',
  },
  {
    id: 1,
    mapPos: { left: '27%', top: 440 },
    icon: `<svg viewBox="0 0 20 20" fill="currentColor"><rect x="8" y="1" width="4" height="2"/><rect x="6" y="3" width="6" height="2"/><rect x="5" y="5" width="8" height="2"/><rect x="4" y="7" width="10" height="2"/><rect x="3" y="9" width="12" height="2"/><rect x="4" y="11" width="10" height="2"/><rect x="5" y="13" width="8" height="2"/><rect x="7" y="15" width="4" height="2"/></svg>`, nodeLabel: 'Grill & Co',
    num: '#02', title: 'GRILL & CO — RESTAURANT',
    badges: ['done', 'web', 'biz'], stars: 4,
    desc: 'Landing page for Grill & Co burger grill in Constantine — dark fire-themed design, full menu showcase, GSAP scroll animations, and mobile-first responsive layout.',
    url: '../portfolio 1/index.html', uLabel: 'grill-co-restaurant',
  },
  {
    id: 2,
    mapPos: { left: '74%', top: 680 },
    icon: `<svg viewBox="0 0 20 20" fill="currentColor"><rect x="5" y="3" width="9" height="2"/><rect x="4" y="5" width="11" height="3"/><rect x="1" y="8" width="18" height="4"/><rect x="2" y="12" width="5" height="4"/><rect x="13" y="12" width="5" height="4"/><rect x="3" y="13" width="3" height="2" fill="rgba(0,0,0,.45)"/><rect x="14" y="13" width="3" height="2" fill="rgba(0,0,0,.45)"/></svg>`, nodeLabel: '2M CONFORT 25',
    num: '#03', title: '2M CONFORT 25 — CAR RENTAL',
    badges: ['done', 'web', 'biz'], stars: 4,
    desc: 'Full landing page for a car rental agency in Constantine, Algeria. Fleet showcase with 3D tilt cards, real car photos, pricing section, and WhatsApp CTA.',
    url: '../portfolio 2/index.html', uLabel: '2m-confort-25',
  },
  {
    id: 3,
    mapPos: { left: '26%', top: 920 },
    icon: `<svg viewBox="0 0 20 20" fill="currentColor"><rect x="1" y="2" width="2" height="14"/><rect x="1" y="16" width="18" height="2"/><rect x="4" y="9" width="3" height="7"/><rect x="8" y="6" width="3" height="10"/><rect x="12" y="11" width="3" height="5"/><rect x="16" y="7" width="3" height="9"/></svg>`, nodeLabel: 'CHICKEN PRICES',
    num: '#04', title: 'CHICKEN PRICES TRACKER',
    badges: ['done', 'fullstack'], stars: 4,
    desc: 'Live market price tracking app for chicken prices. Real-time data dashboard, clean UI, deployed on a self-hosted server with a custom domain.',
    url: 'https://chikenprices.hopto.org/', uLabel: 'chikenprices.hopto.org',
  },
  {
    id: 4,
    mapPos: { left: '73%', top: 1160 },
    icon: `<svg viewBox="0 0 20 20" fill="currentColor"><rect x="1" y="10" width="18" height="6"/><rect x="1" y="16" width="18" height="2"/><rect x="1" y="5" width="3" height="5"/><rect x="9" y="3" width="3" height="7"/><rect x="17" y="5" width="3" height="5"/><rect x="4" y="7" width="4" height="3"/><rect x="13" y="7" width="4" height="3"/><rect x="3" y="12" width="3" height="2" fill="rgba(0,0,0,.35)"/><rect x="9" y="12" width="3" height="2" fill="rgba(0,0,0,.35)"/><rect x="15" y="12" width="3" height="2" fill="rgba(0,0,0,.35)"/></svg>`, nodeLabel: 'KING OF THAI',
    num: '#05', title: 'KING OF THA — WEB PLATFORM',
    badges: ['done', 'web'], stars: 4,
    desc: 'Complete web platform with multi-language support, modern responsive design, and a premium visual identity delivered from concept to production.',
    url: 'https://www.xn--kingoftha-85a.com/', uLabel: 'kingoftha.com',
  },
  {
    id: 5,
    mapPos: { left: '27%', top: 1400 },
    icon: `<svg viewBox="0 0 20 20" fill="currentColor"><rect x="6" y="1" width="8" height="2"/><rect x="3" y="3" width="3" height="2"/><rect x="14" y="3" width="3" height="2"/><rect x="1" y="6" width="2" height="8"/><rect x="17" y="6" width="2" height="8"/><rect x="3" y="15" width="3" height="2"/><rect x="14" y="15" width="3" height="2"/><rect x="6" y="17" width="8" height="2"/><rect x="9" y="4" width="2" height="4"/><rect x="9" y="12" width="2" height="4"/><rect x="4" y="9" width="4" height="2"/><rect x="12" y="9" width="4" height="2"/><rect x="7" y="7" width="6" height="6"/><rect x="8" y="8" width="4" height="4" fill="rgba(0,0,0,.4)"/></svg>`, nodeLabel: 'AUTO ÉCOLE',
    num: '#06', title: 'AUTO ÉCOLE CENTRE SÈVRES',
    badges: ['done', 'web', 'biz'], stars: 5,
    desc: 'Professional website for a driving school in France. Services showcase, pricing tables, booking info, and full SEO optimization for a French audience.',
    url: 'https://www.autoecole-centre-sevres.fr/', uLabel: 'autoecole-centre-sevres.fr',
  },
];

/* ════════════════════════════════════════════════════════════
   RENDER — populate DOM from data
════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

  /* Hero stats */
  document.getElementById('hero-stats').innerHTML = PLAYER_STATS.map(s =>
    `<div class="st"><span class="st-n">${s.value}</span><span class="st-l">${s.label}</span></div>`
  ).join('');

  /* Hero name + desc */
  document.getElementById('hero-name').innerHTML = `${PLAYER.name}<em>${PLAYER.suffix}</em>`;
  document.getElementById('hero-cls').textContent  = PLAYER.class;
  document.getElementById('hero-desc').textContent = PLAYER.desc;

  /* Skills */
  document.getElementById('skills-list').innerHTML = SKILLS.map(s => `
    <div class="srow">
      <span class="sn">${s.name}</span>
      <div class="sbw"><div class="sbf" style="width:${s.value}%"></div></div>
      <span class="sv">${s.value}</span>
    </div>`
  ).join('');

  /* Player info */
  document.getElementById('info-list').innerHTML = PLAYER_INFO.map(i =>
    `<div class="irow"><span class="ik">${i.key}</span><span class="iv">${i.value}</span></div>`
  ).join('');

  /* Ability text */
  document.getElementById('ability-text').textContent = PLAYER.ability;

  /* Contact */
  document.getElementById('contact-email').href = `mailto:${CONTACT.email}`;
  document.getElementById('contact-wa').href    = CONTACT.whatsapp;

  /* Quest nodes on map */
  const mapWrap = document.getElementById('mapWrap');
  QUESTS.forEach(q => {
    const node = document.createElement('div');
    node.className   = 'qnode';
    node.style.left  = q.mapPos.left;
    node.style.top   = q.mapPos.top + 'px';
    node.dataset.quest = q.id;
    node.innerHTML = `
      <button class="qnode-btn done">
        ${q.icon}
        <span class="qnode-num">${q.id + 1}</span>
      </button>
      <span class="qnode-label">${q.nodeLabel}</span>`;
    node.querySelector('.qnode-btn').addEventListener('click', () => {
      document.querySelectorAll('.qnode-btn').forEach(b => b.classList.remove('active'));
      node.querySelector('.qnode-btn').classList.add('active');
      openQuest(q.id);
    });
    mapWrap.appendChild(node);
  });

  /* Init everything */
  initStars();
  initMapCanvas();
  initScrollReveal();
  initKnightScroll();
  initHpHeartbeat();
});

/* ════════════════════════════════════════════════════════════
   STARS
════════════════════════════════════════════════════════════ */
function initStars() {
  const cv = document.getElementById('stars');
  const cx = cv.getContext('2d');
  const resize = () => { cv.width = innerWidth; cv.height = innerHeight; };
  resize(); addEventListener('resize', resize);

  const S = Array.from({ length: 220 }, () => ({
    x: Math.random(), y: Math.random(),
    r: Math.random() * 1.4 + .3,
    sp: Math.random() * .0002 + .00005,
    ph: Math.random() * Math.PI * 2,
    c: Math.random() > .9 ? '#c9a84c' : '#fff',
  }));
  const B = Array.from({ length: 14 }, () => ({
    x: Math.random(), y: Math.random(), ph: Math.random() * Math.PI * 2,
  }));

  let t = 0;
  (function tick() {
    cx.clearRect(0, 0, cv.width, cv.height);
    const g = cx.createRadialGradient(cv.width*.5, cv.height*.5, 0, cv.width*.5, cv.height*.5, cv.width*.8);
    g.addColorStop(0, '#0d0820'); g.addColorStop(.5, '#07071a'); g.addColorStop(1, '#040410');
    cx.fillStyle = g; cx.fillRect(0, 0, cv.width, cv.height);
    S.forEach(s => {
      cx.globalAlpha = .3 + .7 * Math.sin(t * s.sp * 1000 + s.ph);
      cx.fillStyle = s.c;
      cx.fillRect(Math.round(s.x * cv.width), Math.round(s.y * cv.height), Math.ceil(s.r), Math.ceil(s.r));
    });
    B.forEach(s => {
      cx.globalAlpha = .5 + .5 * Math.sin(t * .0003 + s.ph);
      cx.fillStyle = '#c9a84c';
      const px = Math.round(s.x * cv.width), py = Math.round(s.y * cv.height);
      cx.fillRect(px-1, py, 2, 1); cx.fillRect(px, py-1, 1, 2);
    });
    cx.globalAlpha = 1; t += 16;
    requestAnimationFrame(tick);
  })();
}

/* ════════════════════════════════════════════════════════════
   MAP BACKGROUND CANVAS
════════════════════════════════════════════════════════════ */
function initMapCanvas() {
  const cv   = document.getElementById('map-canvas');
  const cx   = cv.getContext('2d');
  const wrap = document.getElementById('mapWrap');

  function draw() {
    const W = cv.width = wrap.offsetWidth;
    const H = cv.height = wrap.offsetHeight;

    /* Sky */
    const sky = cx.createLinearGradient(0, 0, 0, H * .3);
    sky.addColorStop(0, '#0a0518'); sky.addColorStop(1, '#0d1020');
    cx.fillStyle = sky; cx.fillRect(0, 0, W, H * .3);

    /* Forest mid */
    const mid = cx.createLinearGradient(0, H * .28, 0, H * .7);
    mid.addColorStop(0, '#060d08'); mid.addColorStop(1, '#040a06');
    cx.fillStyle = mid; cx.fillRect(0, H * .28, W, H * .42);

    /* Deep dungeon */
    const bot = cx.createLinearGradient(0, H * .68, 0, H);
    bot.addColorStop(0, '#080606'); bot.addColorStop(1, '#0c0a18');
    cx.fillStyle = bot; cx.fillRect(0, H * .68, W, H * .32);

    /* Pixel stars in sky */
    for (let i = 0; i < 180; i++) {
      const px = ((42 * i * 7919) % W + W) % W;
      const py = (42 * i * 6271) % (H * .28);
      cx.fillStyle = i % 12 === 0 ? 'rgba(201,168,76,.5)' : 'rgba(255,255,255,.35)';
      cx.fillRect(Math.round(px), Math.round(py), i % 5 === 0 ? 2 : 1, i % 5 === 0 ? 2 : 1);
    }

    /* Distant mountains */
    cx.fillStyle = '#1a1030';
    const m1 = [0,.35,.08,.28,.15,.32,.22,.24,.3,.30,.38,.22,.46,.28,.54,.20,.62,.26,.70,.18,.78,.24,.86,.20,.93,.26,1,.32,1,.35];
    cx.beginPath();
    for (let i = 0; i < m1.length; i += 2)
      i === 0 ? cx.moveTo(m1[i]*W, m1[i+1]*H) : cx.lineTo(m1[i]*W, m1[i+1]*H);
    cx.closePath(); cx.fill();

    cx.fillStyle = '#120e28';
    const m2 = [0,.36,.06,.30,.12,.34,.18,.27,.26,.33,.34,.26,.42,.31,.5,.24,.58,.30,.66,.23,.74,.29,.82,.22,.90,.28,.97,.30,1,.33,1,.36];
    cx.beginPath();
    for (let i = 0; i < m2.length; i += 2)
      i === 0 ? cx.moveTo(m2[i]*W, m2[i+1]*H) : cx.lineTo(m2[i]*W, m2[i+1]*H);
    cx.closePath(); cx.fill();

    /* Pixel trees */
    function tree(rx, ry, h) {
      const x = rx * W, y = ry * H, tw = Math.round(h * .7);
      const dark = ry > .65;
      cx.fillStyle = dark ? '#0d1a08' : '#0a1a0a';
      cx.fillRect(Math.round(x-2), Math.round(y), 4, Math.round(h * .3));
      cx.fillStyle = dark ? '#0d2010' : '#0d2a10';
      cx.fillRect(Math.round(x-tw/2), Math.round(y-h), tw, Math.round(h * .4));
      cx.fillStyle = dark ? '#0d1a08' : '#0a1a0a';
      cx.fillRect(Math.round(x-tw*.35), Math.round(y-h*.7), Math.round(tw*.7), Math.round(h * .4));
      cx.fillStyle = dark ? '#0d2010' : '#0d2a10';
      cx.fillRect(Math.round(x-tw*.22), Math.round(y-h*.45), Math.round(tw*.44), Math.round(h * .35));
    }
    [[.05,.44,55],[.08,.52,45],[.11,.48,60],[.04,.60,40],[.07,.65,50],
     [.12,.70,35],[.05,.78,55],[.09,.84,42],[.06,.90,48],[.14,.38,38],[.03,.35,30],
     [.88,.44,52],[.92,.51,44],[.86,.58,60],[.95,.62,38],[.90,.68,50],
     [.84,.75,42],[.93,.82,55],[.87,.88,38],[.91,.94,46],[.85,.38,35],[.96,.34,30],
     [.18,.55,32],[.80,.55,34],[.20,.75,30],[.78,.75,30],[.22,.95,36],[.75,.92,32]
    ].forEach(([rx,ry,h]) => tree(rx, ry, h));

    /* Torch glows near quest nodes */
    [[.73,.10],[.27,.22],[.74,.34],[.26,.46],[.73,.58],[.27,.70]].forEach(([rx,ry]) => {
      const tx = rx*W, ty = ry*H;
      const g = cx.createRadialGradient(tx, ty, 0, tx, ty, 90);
      g.addColorStop(0, 'rgba(201,168,76,.18)');
      g.addColorStop(1, 'rgba(201,168,76,0)');
      cx.fillStyle = g;
      cx.beginPath(); cx.arc(tx, ty, 90, 0, Math.PI*2); cx.fill();
    });

    /* Lakes — both placed below the mountains (mountains end ~36% height) */
    function drawLake(lx, ly, lrx, lry) {
      cx.fillStyle = '#091827';
      cx.beginPath(); cx.ellipse(lx, ly, lrx, lry, 0, 0, Math.PI*2); cx.fill();
      cx.strokeStyle = '#1a3a5a'; cx.lineWidth = 2; cx.globalAlpha = .7;
      cx.beginPath(); cx.ellipse(lx, ly, lrx, lry, 0, 0, Math.PI*2); cx.stroke();
      cx.globalAlpha = .3; cx.strokeStyle = '#2a5a7a'; cx.lineWidth = 1.5;
      cx.beginPath(); cx.ellipse(lx, ly, lrx * .7, lry * .6, 0, 0, Math.PI*2); cx.stroke();
      cx.globalAlpha = .25; cx.lineWidth = 1;
      [[-.6,-.1],[-.2,.1],[.2,-.05]].forEach(([dx,dy]) => {
        cx.beginPath();
        cx.moveTo(lx + dx*lrx - lrx*.2, ly + dy*lry);
        cx.lineTo(lx + dx*lrx + lrx*.3, ly + dy*lry + 1);
        cx.stroke();
      });
      cx.globalAlpha = 1;
    }
    drawLake(W * .09, H * .44, W * .10, H * .038); /* left lake  */
    drawLake(W * .88, H * .52, W * .10, H * .038); /* right lake */

    /* Castle silhouette (right side, ~11% height) */
    const cx0 = W * .845, cy0 = H * .07, cs = W * .07;
    cx.fillStyle = '#1a1530';
    /* Wall */
    cx.fillRect(cx0 - cs*.9, cy0, cs*1.8, cs*1.4);
    /* Left tower */
    cx.fillRect(cx0 - cs*1.1, cy0 - cs*.3, cs*.5, cs*1.7);
    /* Right tower */
    cx.fillRect(cx0 + cs*.6, cy0 - cs*.3, cs*.5, cs*1.7);
    /* Main keep (taller center) */
    cx.fillStyle = '#231e40';
    cx.fillRect(cx0 - cs*.35, cy0 - cs*.5, cs*.7, cs*1.9);
    /* Battlements (blocky) */
    cx.fillStyle = '#1a1530';
    for (let i = 0; i < 5; i++) {
      const bx = cx0 - cs*.9 + i * cs*.45;
      cx.fillRect(bx, cy0 - cs*.12, cs*.22, cs*.14);
    }
    for (let i = 0; i < 3; i++) {
      cx.fillRect(cx0 - cs*.35 + i * cs*.32, cy0 - cs*.62, cs*.18, cs*.14);
    }
    /* Gate arch */
    cx.fillStyle = '#080810';
    cx.fillRect(cx0 - cs*.12, cy0 + cs*.6, cs*.24, cs*.8);
    cx.beginPath();
    cx.arc(cx0, cy0 + cs*.6, cs*.12, Math.PI, 0); cx.fill();
    /* Lit windows */
    cx.fillStyle = 'rgba(255,220,100,.35)';
    cx.fillRect(cx0 - cs*.08, cy0 + cs*.1, cs*.16, cs*.16);
    cx.fillStyle = 'rgba(255,200,80,.2)';
    cx.fillRect(cx0 - cs*.9, cy0 + cs*.2, cs*.18, cs*.14);
    cx.fillRect(cx0 + cs*.72, cy0 + cs*.2, cs*.18, cs*.14);
    /* Flag */
    cx.strokeStyle = '#666'; cx.lineWidth = 1.5; cx.globalAlpha = .8;
    cx.beginPath(); cx.moveTo(cx0, cy0 - cs*.5); cx.lineTo(cx0, cy0 - cs*.9); cx.stroke();
    cx.fillStyle = '#cc1111'; cx.globalAlpha = .7;
    cx.beginPath();
    cx.moveTo(cx0, cy0 - cs*.9); cx.lineTo(cx0 + cs*.3, cy0 - cs*.76); cx.lineTo(cx0, cy0 - cs*.62);
    cx.fill();
    cx.globalAlpha = 1;
  }

  draw();
  addEventListener('resize', draw);
}

/* ════════════════════════════════════════════════════════════
   SCROLL REVEAL
════════════════════════════════════════════════════════════ */
function initScrollReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
  }, { threshold: .1 });
  document.querySelectorAll('.rev').forEach(el => obs.observe(el));
}

/* ════════════════════════════════════════════════════════════
   KNIGHT SCROLL TRACKER — fixed, vertically centered
════════════════════════════════════════════════════════════ */
function initKnightScroll() {
  const knight  = document.getElementById('mapKnight');
  const mapWrap = document.getElementById('mapWrap');

  /* Pre-sample every dot along the bezier path (matches the 2.6-unit dash gap) */
  const pathEl   = document.getElementById('mapPathDots');
  const pathLen  = pathEl.getTotalLength();
  const DOT_GAP  = 2.6;
  const pathDots = [];
  for (let d = 0; d <= pathLen; d += DOT_GAP) {
    const pt = pathEl.getPointAtLength(d);
    pathDots.push({ x: pt.x, y: pt.y }); // viewBox 0-100 coords
  }

  function update() {
    const rect  = mapWrap.getBoundingClientRect();
    const viewH = innerHeight;
    const mapH  = mapWrap.offsetHeight;

    if (rect.top >= viewH || rect.bottom <= 0) {
      knight.style.display = 'none';
      return;
    }

    /* Map scroll progress (0→1) to dot index (0→last) */
    const scrolled = Math.max(0, -rect.top);
    const total    = Math.max(1, mapH - viewH);
    const t        = Math.min(1, scrolled / total);
    const dot      = pathDots[Math.round(t * (pathDots.length - 1))];

    knight.style.display   = 'block';
    knight.style.position  = 'fixed';
    knight.style.left      = dot.x + '%';
    knight.style.top       = (rect.top + (dot.y / 100) * mapH) + 'px';
    knight.style.transform = 'translateX(-50%) translateY(-50%)';
  }

  addEventListener('scroll', update, { passive: true });
  addEventListener('resize', update);
  update();
}

/* ════════════════════════════════════════════════════════════
   QUEST POPUP
════════════════════════════════════════════════════════════ */
function openQuest(id) {
  const q = QUESTS[id];
  document.getElementById('p-tag').textContent   = 'QUEST ' + q.num;
  document.getElementById('p-title').textContent = q.title;
  document.getElementById('p-stars').innerHTML   =
    '★'.repeat(q.stars) + `<span class="dim">${'★'.repeat(5-q.stars)}</span>`;
  document.getElementById('p-desc').textContent  = q.desc;
  const link = document.getElementById('p-link');
  const pUrl = document.getElementById('p-url');
  if (q.noLink) {
    pUrl.textContent   = '🔒 PRIVATE PROJECT';
    link.style.display = 'none';
  } else {
    pUrl.textContent   = q.uLabel;
    link.style.display = '';
    link.href = q.url;
    q.url.startsWith('http') ? link.setAttribute('target','_blank') : link.removeAttribute('target');
  }

  document.getElementById('p-badges').innerHTML = q.badges.map(b =>
    `<span class="pbadge ${BADGE_CFG[b].cls}">${BADGE_CFG[b].label}</span>`
  ).join('');

  document.getElementById('q-popup').classList.add('open');
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('popupClose').addEventListener('click', () => {
    document.getElementById('q-popup').classList.remove('open');
    document.querySelectorAll('.qnode-btn').forEach(b => b.classList.remove('active'));
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') document.getElementById('popupClose').click();
  });
});

/* ════════════════════════════════════════════════════════════
   HP BAR HEARTBEAT
════════════════════════════════════════════════════════════ */
function initHpHeartbeat() {
  const fill = document.querySelector('.hp-fill');
  let grow = true;
  setInterval(() => {
    fill.style.width      = grow ? '90%' : '82%';
    fill.style.transition = 'width .8s ease';
    grow = !grow;
  }, 1600);
}
