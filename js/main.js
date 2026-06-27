const RESERVE = {
  phone: "351914837030",
  display: "+351 914 837 030",
  message: "Olá! Gostaria de reservar uma data na Encosta Dourada.",
  get url() {
    return `https://wa.me/${this.phone}?text=${encodeURIComponent(this.message)}`;
  },
  get label() {
    return "Fazer reserva";
  },
};

const CONTACT = {
  name: "Encosta Dourada",
  street: "Av. Jorge Reis, 375",
  locality: "4760 Outiz",
  region: "Vila Nova de Famalicão",
  phone: { tel: "+351252316429", display: "+351 252 316 429" },
  email: "info.encostadourada@gmail.com",
  placeId: "ChIJ50kmwSJZJA0RxMGrWp73ErA",
  mapsUrl: "https://maps.google.com/?cid=12687475359754207684",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination_place_id=ChIJ50kmwSJZJA0RxMGrWp73ErA",
  embedUrl:
    "https://www.google.com/maps?cid=12687475359754207684&hl=pt&z=16&output=embed",
  wazeUrl: "https://www.waze.com/ul?q=Encosta+Dourada%2C+Outiz&navigate=yes",
  appleMapsUrl:
    "https://maps.apple.com/?q=Encosta+Dourada&address=Av.+Jorge+Reis+375,+4760+Outiz,+Portugal",
  hours: [
    { label: "2ª feira", value: "11h – 15h" },
    { label: "3ª a 6ª feira", value: "11h – 15h / 19h – 22h" },
    { label: "Sábado", value: "11h – 15h / 19h – 01h" },
    { label: "Domingo", value: "11h – 15h / 19h – 22h" },
  ],
};

const CHAPTERS = [
  {
    id: "espaco",
    num: "I",
    nm: "Espaço",
    eyebrow: "Capítulo I · O nosso espaço",
    title: [["O melhor", 0], ["espaço", 1], ["para festa.", 0]],
    lede:
      "Realizamos todo o tipo de eventos e temos capacidade para mais de 200 pessoas. Restaurante, take away, catering, estacionamento privado, jardim e esplanada — tudo num só lugar.",
    features: [
      "Salão elegante para casamentos e celebrações",
      "Estacionamento privado gratuito",
      "Jardim e esplanada para os dias de sol",
      "Serviços de catering e take away",
    ],
    spaceStack: [
      {
        src: "assets/images/espaco/fachada.png",
        alt: "Fachada da Encosta Dourada ao entardecer",
      },
      {
        src: "assets/images/espaco/patio.png",
        alt: "Pátio e esplanada da Encosta Dourada",
      },
      {
        src: "assets/images/espaco/terraco.png",
        alt: "Terraço coberto da Encosta Dourada",
      },
    ],
    caption: "Salão principal · até 200 convidados",
    side: "right",
    morph:
      "radial-gradient(120% 80% at 18% 12%, rgba(196,160,53,.12), transparent 55%), radial-gradient(100% 70% at 88% 88%, rgba(46,36,24,.05), transparent 60%), #f8f3ea",
  },
  {
    id: "sabores",
    num: "II",
    nm: "Sabores",
    eyebrow: "Capítulo II · Os nossos sabores",
    title: [["A certeza", 0], ["de um", 1], ["excelente prato.", 0]],
    lede:
      "Cozinha tradicional portuguesa — diárias da semana, pratos executivos ao almoço e especialidades da casa.",
    menuBook: true,
    side: "left",
    morph:
      "radial-gradient(120% 80% at 82% 10%, rgba(196,160,53,.1), transparent 55%), radial-gradient(100% 70% at 12% 92%, rgba(46,36,24,.04), transparent 60%), #efe6d6",
  },
  {
    id: "esplanada",
    num: "IV",
    nm: "Esplanada",
    eyebrow: "Capítulo IV · Esplanada & jardim",
    title: [["Relaxe na", 0], ["nossa", 1], ["esplanada.", 0]],
    lede:
      "Relaxe na nossa esplanada e aproveite o verão. Um canto ao ar livre para refeições descontraídas, petiscos e bons momentos em família.",
    features: [
      "Esplanada com vista para o jardim",
      "Perfeita para dias de sol",
      "Ideal para almoços ao ar livre",
      "Ambiente tranquilo e acolhedor",
    ],
    showcase: {
      layout: "photo",
      cards: [
        {
          image: "assets/images/esplanada.png",
          tag: "Verão",
          title: "Esplanada & jardim",
          text: "Petiscos, refeições descontraídas e bons momentos ao ar livre.",
        },
      ],
    },
    caption: "Esplanada · verão & convívio",
    side: "right",
    compact: true,
    morph:
      "radial-gradient(120% 80% at 22% 8%, rgba(196,160,53,.08), transparent 55%), radial-gradient(100% 70% at 88% 96%, rgba(46,36,24,.05), transparent 60%), #f8f3ea",
  },
];

const GALLERY_MORPH =
  "radial-gradient(120% 80% at 50% 0%, rgba(196,160,53,.08), transparent 55%), radial-gradient(100% 70% at 20% 100%, rgba(46,36,24,.04), transparent 60%), #f8f3ea";

const REVIEWS_MORPH =
  "radial-gradient(120% 80% at 72% 8%, rgba(196,160,53,.09), transparent 55%), radial-gradient(100% 70% at 14% 92%, rgba(46,36,24,.05), transparent 60%), #efe6d6";

const REVIEW_PLATFORMS = {
  google: {
    name: "Google",
    score: "4,1",
    max: "5",
    count: 32,
    reviewUrl: "https://search.google.com/local/writereview?placeid=ChIJ50kmwSJZJA0RxMGrWp73ErA",
    profileUrl: "https://maps.google.com/?cid=12687475359754207684",
    cta: "Avaliar no Google",
  },
  thefork: {
    name: "TheFork",
    score: "8,9",
    max: "10",
    count: 41,
    reviewUrl: "https://www.thefork.pt/restaurante/encosta-dourada-r856926#restaurant-reviews",
    profileUrl: "https://www.thefork.pt/restaurante/encosta-dourada-r856926",
    cta: "Avaliar no TheFork",
  },
};

const CUSTOMER_REVIEWS = [
  {
    source: "google",
    author: "Stefani B. Peixoto",
    rating: "5/5",
    when: "há 4 meses",
    text: "Excelente experiência! O ambiente é agradável e bem organizado, o atendimento foi muito atencioso e a comida estava simplesmente deliciosa. Com certeza voltarei mais vezes e recomendo!",
  },
  {
    source: "google",
    author: "Alexandra Veloso",
    rating: "5/5",
    when: "há 3 meses",
    text: "Sem dúvida maravilhoso. A vista é incrível, o espaço é lindíssimo sem exageros na decoração. Uma experiência muito positiva.",
  },
  {
    source: "google",
    author: "SaRaD D",
    rating: "5/5",
    when: "há 5 meses",
    text: "O atendimento é muito profissional e simpático. O leitão estava uma delícia, suculento e com a pele bem estaladiça. As batatas são caseiras e muito boas.",
  },
  {
    source: "thefork",
    author: "Cliente TheFork",
    rating: "10/10",
    when: "há 3 meses",
    text: "Atendimento muito bom e ambiente muito agradável. Comida muito bem servida e de grande qualidade.",
  },
  {
    source: "thefork",
    author: "Cliente TheFork",
    rating: "10/10",
    when: "há 3 semanas",
    text: "Atendimento muito atencioso, a comida estava deliciosa.",
    isNew: true,
  },
  {
    source: "google",
    author: "Rúben Araújo",
    rating: "5/5",
    when: "há 3 meses",
    text: "Posta Argentina com Queijo divinal! Preço super aceitável para o praticado hoje em dia.",
  },
  {
    source: "thefork",
    author: "Cliente TheFork",
    rating: "9,5/10",
    when: "há 3 semanas",
    text: "Muito top! Serviço atencioso, comida muito gostosa e ambiente tranquilo.",
    isNew: true,
  },
  {
    source: "google",
    author: "dulce silva marques",
    rating: "5/5",
    when: "há 4 meses",
    text: "Adorei a casa, boa comida, boa experiência para repetir! Muito bom ambiente e decoração espetacular!",
  },
];

const VIDEO_MID_SCENES = [
  {
    id: "eventos",
    eyebrow: "Celebre connosco",
    title: [["A melhor", 0], ["festa", 1], ["começa aqui.", 0]],
    lede: "Casamentos, comunhões e batizados — cada detalhe pensado para si.",
    cta: { href: "#galeria", label: "Descobrir eventos" },
  },
  {
    id: "jantares",
    eyebrow: "Todas as sextas e sábados",
    title: [["Jantares", 0], ["dançantes", 1], ["à noite.", 0]],
    lede: "Buffet, música ao vivo e dança · desde as 19h.",
    cta: { href: "#", label: RESERVE.label, reserve: true },
  },
];

const RAIL_SECTIONS = () => [
  { id: "inicio", num: "·", nm: "Início", morph: null },
  ...CHAPTERS.filter((c) => c.id === "espaco" || c.id === "sabores").map((c) => ({
    id: c.id,
    num: c.num,
    nm: c.nm,
    morph: c.morph,
  })),
  { id: "galeria", num: "III", nm: "Eventos", morph: GALLERY_MORPH },
  ...CHAPTERS.filter((c) => c.id === "esplanada").map((c) => ({
    id: c.id,
    num: c.num,
    nm: c.nm,
    morph: c.morph,
  })),
  { id: "criticas", num: "V", nm: "Críticas", morph: REVIEWS_MORPH },
];

const PROMO_MOMENTS = [
  {
    image: "assets/images/promos/jantar-dancante.png",
    focal: "center 28%",
    tag: "Mês do Cliente",
    title: "Jantar Dançante",
    detail: "<strong>29,90€</strong> · preço especial",
  },
  {
    image: "assets/images/promos/jantar-banner.png",
    focal: "right center",
    tag: "Sábados",
    title: "Buffet variado",
    detail: "<strong>13,50€</strong> · tudo incluído",
  },
  {
    image: "assets/images/promos/comunhoes.png",
    focal: "center 40%",
    tag: "Especial",
    title: "Comunhões",
    detail: "desde <strong>29,90€</strong>",
  },
  {
    image: "assets/images/promos/batizados.png",
    focal: "center 45%",
    tag: "Especial",
    title: "Batizados",
    detail: "desde <strong>29,90€</strong>",
  },
];

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function buildTitle(titleParts) {
  return titleParts.map(([text, italic]) => (italic ? `<em>${text}</em>` : text)).join(" ");
}

function buildExperienceCard(item, extraClass = "") {
  const variant = item.variant ? `exp-card--${item.variant}` : "";
  const pricesHtml = item.prices?.length
    ? `<div class="exp-card__prices">${item.prices.map((p) => `<span>${p}</span>`).join("")}</div>`
    : item.price
      ? `<p class="exp-card__price">${item.price}</p>`
      : "";

  const focalStyle = item.focal ? ` style="object-position: ${item.focal}"` : "";

  return `
    <article class="exp-card ${variant} ${extraClass}">
      <div class="exp-card__visual">
        <img src="${item.image}" alt="${item.title}" loading="lazy"${focalStyle} />
      </div>
      <div class="exp-card__body">
        ${item.tag ? `<span class="exp-card__tag">${item.tag}</span>` : ""}
        <h4 class="exp-card__title">${item.title}</h4>
        <p class="exp-card__text">${item.text}</p>
        ${pricesHtml}
        ${item.note ? `<span class="exp-card__note">${item.note}</span>` : ""}
      </div>
    </article>`;
}

function buildShowcase(showcase, caption) {
  const cards = showcase.cards.map((c) => buildExperienceCard(c)).join("");
  return `
            <div class="figwrap chapter-animate">
              <div class="exp-showcase exp-showcase--${showcase.layout}">
                ${cards}
              </div>
              ${caption ? `<p class="figcap chapter-animate">${caption}</p>` : ""}
            </div>`;
}

function buildFigure(ch) {
  if (ch.showcase) return buildShowcase(ch.showcase, ch.caption);

  if (ch.spaceStack?.length) {
    return `
            <div class="figwrap chapter-animate">
              <div class="space-stack" data-space-stack>
                ${ch.spaceStack
                  .map(
                    (img, i) => `
                <figure class="space-stack__card" data-index="${i}" style="--i:${i}">
                  <img src="${img.src}" alt="${img.alt}" loading="lazy" />
                </figure>`
                  )
                  .join("")}
              </div>
              <p class="figcap chapter-animate">${ch.caption}</p>
            </div>`;
  }

  return `
            <div class="figwrap chapter-animate">
              <div class="frame">
                <img src="${ch.image}" alt="${ch.imageAlt}" loading="lazy" />
              </div>
              <p class="figcap chapter-animate">${ch.caption}</p>
            </div>`;
}

function buildMenuChapter(ch) {
  return `
    <section class="chapter chapter--menu" id="${ch.id}" data-side="${ch.side}">
      <div class="stage">
        <div class="menu-section">
          <header class="menu-section__head">
            <span class="eyebrow chapter-animate">${ch.eyebrow}</span>
            <h2 class="chapter-animate">${buildTitle(ch.title)}</h2>
            <div class="rule chapter-animate"></div>
            <p class="lede chapter-animate">${ch.lede}</p>
          </header>
          <div class="menu-book chapter-animate" id="menuBook" aria-label="Carta digital"></div>
        </div>
      </div>
    </section>`;
}

function buildChapter(ch) {
  if (ch.menuBook) return buildMenuChapter(ch);

  const featuresHtml = ch.features
    ? `<ul class="features">${ch.features.map((f) => `<li>${f}</li>`).join("")}</ul>`
    : "";

  const menuHtml = ch.menu
    ? `<div class="menu-grid">${ch.menu
        .map((m) => `<div class="menu-item"><strong>${m.name}</strong><span>${m.price}</span></div>`)
        .join("")}</div>${ch.menuNote ? `<p class="menu-note">${ch.menuNote}</p>` : ""}`
    : "";

  const reserveHtml = ch.reserveCta
    ? `<a class="reserve-cta chapter-animate" href="#">${RESERVE.label}</a>`
    : "";

  return `
    <section class="chapter${ch.compact ? " chapter--compact" : ""}" id="${ch.id}" data-side="${ch.side}">
      <div class="stage">
        <div class="inner">
          <div class="copy">
            <div class="copytext">
              <span class="eyebrow chapter-animate">${ch.eyebrow}</span>
              <h2 class="chapter-animate">${buildTitle(ch.title)}</h2>
              <div class="rule chapter-animate"></div>
              <p class="lede chapter-animate">${ch.lede}</p>
              <div class="chapter-body chapter-animate">${featuresHtml}${menuHtml}${reserveHtml}</div>
            </div>
          </div>
          <div class="figure">
            ${buildFigure(ch)}
          </div>
        </div>
      </div>
    </section>`;
}

function initRail() {
  const rail = document.getElementById("rail");
  const sections = RAIL_SECTIONS();

  sections.forEach((s) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.dataset.goto = s.id;
    btn.innerHTML = `<span>${s.num}</span><span class="nm">${s.nm}</span><span class="tick"></span>`;
    rail.appendChild(btn);
  });

  document.querySelectorAll("[data-goto]").forEach((el) => {
    el.addEventListener("click", () => {
      document.getElementById(el.dataset.goto)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    });
  });

  return rail;
}

function initScrollSpy(sections, railBtns, morphs) {
  let activeIdx = -1;
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const idx = sections.indexOf(entry.target);
        if (idx === activeIdx) return;
        activeIdx = idx;
        railBtns.forEach((btn, j) => btn.setAttribute("aria-current", j === idx ? "true" : "false"));
        const morph = morphs[idx];
        if (morph) {
          document.getElementById("atmos").style.background = morph;
          document.body.style.background = morph;
        }
      });
    },
    { threshold: 0, rootMargin: "-45% 0px -45% 0px" }
  );

  sections.forEach((s) => spy.observe(s));
  if (railBtns[0]) railBtns[0].setAttribute("aria-current", "true");
}

function initProgressBar() {
  const bar = document.getElementById("scrollbar");
  window.addEventListener(
    "scroll",
    () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
      bar.style.width = `${pct}%`;
    },
    { passive: true }
  );
}

function initRevealFallback() {
  document.querySelectorAll(".video-scene").forEach((el) => {
    el.style.opacity = "1";
    el.style.transform = "none";
  });

  if (reduce) {
    document.querySelectorAll(".chapter-animate, .promo-card, .contact-card").forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
  );

  document.querySelectorAll(".chapter-animate, .promo-card, .contact-card, .moments-head").forEach((el) => {
    el.classList.add("reveal-io");
    io.observe(el);
  });
}

function buildVideoScenes() {
  const container = document.getElementById("videoScenes");
  if (!container || container.dataset.built) return;
  container.dataset.built = "1";

  const outro = container.querySelector(".video-scene:last-child");

  VIDEO_MID_SCENES.forEach((scene) => {
    const article = document.createElement("article");
    article.className = "video-scene";
    article.dataset.chapter = scene.id;
    const ctaClass = scene.cta?.reserve ? "video-scene__cta reserve-cta" : "video-scene__cta";
    const ctaHref = scene.cta?.reserve ? "#" : scene.cta?.href || "#";
    article.innerHTML = `
      <p class="video-scene__eyebrow">${scene.eyebrow}</p>
      <h2 class="video-scene__title">${buildTitle(scene.title)}</h2>
      <p class="video-scene__lede">${scene.lede}</p>
      ${scene.cta ? `<a class="${ctaClass}" href="${ctaHref}">${scene.cta.label}</a>` : ""}
    `;
    container.insertBefore(article, outro);
  });

  [...container.querySelectorAll(".video-scene")].forEach((el, i) => {
    el.dataset.scene = String(i);
  });
}

const VIDEO_SCENE_WINDOWS = [
  { enter: 0, leave: 0.22 },
  { enter: 0.3, leave: 0.47 },
  { enter: 0.51, leave: 0.68 },
  { enter: 0.74, leave: 1 },
];

/** Tom do vídeo: claro na flor/intro + eventos; escuro nos jantares; claro no edifício final */
const VIDEO_TONE_WINDOWS = {
  darkRampStart: VIDEO_SCENE_WINDOWS[1].leave,
  darkRampEnd: VIDEO_SCENE_WINDOWS[2].enter + 0.1,
  lightRampStart: VIDEO_SCENE_WINDOWS[3].enter + 0.06,
  lightRampEnd: 1,
};

function buildPromoCard(item) {
  return `
    <article class="promo-card">
      <div class="promo-card__frame">
        <img src="${item.image}" alt="${item.title}" loading="lazy" style="object-position:${item.focal}" />
      </div>
      <div class="promo-card__meta">
        <span class="promo-card__tag">${item.tag}</span>
        <h3>${item.title}</h3>
        <p class="promo-card__price">${item.detail}</p>
      </div>
    </article>`;
}

function initVideoDots() {
  const container = document.getElementById("videoDots");
  const sceneCount = document.querySelectorAll(".video-scene").length;
  if (!container) return;
  container.innerHTML = "";
  for (let i = 0; i < sceneCount; i += 1) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.dataset.scene = String(i);
    btn.setAttribute("aria-label", `Cena ${i + 1}`);
    container.appendChild(btn);
  }
}

function adoptHeroVideo() {
  const placeholder = document.getElementById("heroVideo");
  const adopted = window.SitePreload?.adoptHeroVideoElement?.();
  if (!placeholder) return null;
  if (!adopted) return placeholder;

  adopted.id = placeholder.id;
  adopted.className = placeholder.className;
  adopted.setAttribute("aria-hidden", "true");
  adopted.setAttribute("disablepictureinpicture", "");
  adopted.setAttribute("playsinline", "");
  adopted.muted = true;
  adopted.loop = false;
  adopted.autoplay = false;

  if (placeholder.poster) adopted.poster = placeholder.poster;

  placeholder.replaceWith(adopted);
  return adopted;
}

function initVideoStory() {
  const section = document.querySelector(".video-story");
  const video = adoptHeroVideo() || document.getElementById("heroVideo");
  const scenes = [...document.querySelectorAll(".video-scene")];
  const progressBar = document.getElementById("videoProgress");
  const scrollCue = document.querySelector(".scroll-cue--video");
  const shade = section?.querySelector(".video-story__shade");
  if (!section || !video || !scenes.length) return;

  initVideoDots();
  const dots = [...document.querySelectorAll("#videoDots button")];

  const SCENE_WINDOWS = VIDEO_SCENE_WINDOWS;

  video.autoplay = false;
  video.loop = false;
  video.muted = true;
  video.playsInline = true;
  video.pause();

  const seekToStart = () => {
    try {
      video.currentTime = 0;
    } catch {
      /* wait for metadata */
    }
  };

  const setActiveScene = (index) => {
    const idx = Math.max(0, Math.min(scenes.length - 1, index));
    scenes.forEach((scene, i) => scene.classList.toggle("is-active", i === idx));
    dots.forEach((dot, i) => dot.classList.toggle("is-active", i === idx));
  };

  seekToStart();
  setActiveScene(0);
  video.style.filter = "brightness(1) saturate(1) contrast(1)";
  if (shade) shade.style.opacity = "0";
  scenes.forEach((scene, i) => {
    const lines = scene.querySelectorAll(
      ".video-scene__eyebrow, .video-scene__title, .video-scene__lede, .video-scene__cta"
    );
    if (i === 0) {
      scene.style.opacity = "1";
      scene.style.visibility = "visible";
      lines.forEach((line) => {
        line.style.opacity = "1";
        line.style.transform = "none";
      });
    } else {
      scene.style.opacity = "0";
      scene.style.visibility = "hidden";
      lines.forEach((line) => {
        line.style.opacity = "0";
        line.style.transform = "translate3d(0, 32px, 0)";
      });
    }
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const idx = Number(dot.dataset.scene);
      const span = section.offsetHeight - window.innerHeight;
      const target = section.offsetTop + span * (SCENE_WINDOWS[idx]?.enter ?? 0);
      window.scrollTo({ top: target, behavior: reduce ? "auto" : "smooth" });
    });
  });

  if (reduce) {
    setActiveScene(0);
    scenes.forEach((scene) => {
      scene.style.opacity = "1";
      scene.style.visibility = "visible";
      scene.style.transform = "none";
    });
    video.style.filter = "brightness(1) saturate(1) contrast(1)";
    if (shade) shade.style.opacity = "0";
    return;
  }

  let duration = 0;
  let lastSeekFrame = -1;
  let rafId = 0;
  let sectionActive = false;

  const clamp01 = (v) => Math.min(1, Math.max(0, v));
  const easeOut = (t) => 1 - (1 - t) ** 3;
  const lerp = (a, b, t) => a + (b - a) * t;
  const smoothstep = (t) => {
    const x = clamp01(t);
    return x * x * (3 - 2 * x);
  };

  const videoToneAmount = (p) => {
    const { darkRampStart, darkRampEnd, lightRampStart, lightRampEnd } = VIDEO_TONE_WINDOWS;

    if (p <= darkRampStart) return 0;
    if (p < darkRampEnd) return smoothstep((p - darkRampStart) / (darkRampEnd - darkRampStart));
    if (p < lightRampStart) return 1;
    if (p < lightRampEnd) return 1 - smoothstep((p - lightRampStart) / (lightRampEnd - lightRampStart));
    return 0;
  };

  const updateVideoTone = (p) => {
    const tone = videoToneAmount(p);
    const brightness = lerp(1, 0.58, tone);
    const saturate = lerp(1, 0.9, tone);
    const contrast = lerp(1, 1.05, tone);

    video.style.filter = `brightness(${brightness.toFixed(3)}) saturate(${saturate.toFixed(3)}) contrast(${contrast.toFixed(3)})`;
    if (shade) shade.style.opacity = tone <= 0.001 ? "0" : String(lerp(0.15, 1, tone));
  };

  const readProgress = () => {
    const rect = section.getBoundingClientRect();
    const span = section.offsetHeight - window.innerHeight;
    if (span <= 0) return 0;
    return Math.min(1, Math.max(0, -rect.top / span));
  };

  const sceneLocal = (p, enter, leave) => {
    if (p < enter || p > leave) return -1;
    return (p - enter) / (leave - enter);
  };

  const updateSceneLines = (scene, lp) => {
    const lines = scene.querySelectorAll(
      ".video-scene__eyebrow, .video-scene__title, .video-scene__lede, .video-scene__cta"
    );
    const count = lines.length;
    const fadeBand = 0.14;

    let master = 1;
    if (lp < fadeBand) master = easeOut(lp / fadeBand);
    else if (lp > 1 - fadeBand) master = easeOut((1 - lp) / fadeBand);

    scene.style.opacity = String(master);
    scene.style.visibility = master > 0.02 ? "visible" : "hidden";
    scene.style.transform = "none";

    lines.forEach((line, i) => {
      const stagger = 0.11;
      const inStart = i * stagger;
      const inEnd = inStart + 0.26;
      const outStart = 1 - fadeBand - (count - 1 - i) * stagger;
      const outEnd = outStart + 0.22;

      let lineOp = 0;
      let y = 32;

      if (lp < inStart) {
        lineOp = 0;
        y = 32;
      } else if (lp < inEnd) {
        const t = easeOut((lp - inStart) / (inEnd - inStart));
        lineOp = t;
        y = 32 * (1 - t);
      } else if (lp < outStart) {
        lineOp = 1;
        y = 0;
      } else if (lp < outEnd) {
        const t = easeOut((lp - outStart) / (outEnd - outStart));
        lineOp = 1 - t;
        y = -18 * t;
      } else {
        lineOp = 0;
        y = -18;
      }

      line.style.opacity = String(lineOp * master);
      line.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`;
    });

    return master;
  };

  const updateScenes = (p) => {
    let activeIdx = 0;
    let bestOpacity = 0;

    scenes.forEach((scene, i) => {
      const { enter, leave } = SCENE_WINDOWS[i] ?? { enter: 1, leave: 1 };
      const lp = sceneLocal(p, enter, leave);

      if (lp < 0) {
        scene.style.opacity = "0";
        scene.style.visibility = "hidden";
        scene.querySelectorAll(
          ".video-scene__eyebrow, .video-scene__title, .video-scene__lede, .video-scene__cta"
        ).forEach((line) => {
          line.style.opacity = "0";
          line.style.transform = "translate3d(0, 32px, 0)";
        });
        return;
      }

      const master = updateSceneLines(scene, lp);
      if (master > bestOpacity) {
        bestOpacity = master;
        activeIdx = i;
      }
    });

    setActiveScene(activeIdx);
  };

  const seekToProgress = (p) => {
    if (!duration) return;
    const frame = Math.round(p * duration * 24);
    if (frame === lastSeekFrame) return;
    lastSeekFrame = frame;
    video.currentTime = frame / 24;
  };

  const render = () => {
    rafId = 0;
    if (!sectionActive) return;

    const p = readProgress();

    document.body.classList.toggle("in-video", p < 0.98);
    document.body.classList.toggle("past-video", p >= 0.98);
    document.body.classList.toggle("is-video-intro", p < SCENE_WINDOWS[0].leave);
    document.body.classList.toggle(
      "is-video-mid",
      SCENE_WINDOWS.slice(1, -1).some((w) => p >= w.enter && p <= w.leave)
    );
    document.body.classList.toggle("is-video-outro", p >= SCENE_WINDOWS[SCENE_WINDOWS.length - 1].enter);

    seekToProgress(p);

    if (progressBar) progressBar.style.width = `${(p * 100).toFixed(1)}%`;
    if (scrollCue) {
      const inTextScene = SCENE_WINDOWS.some((w) => {
        const lp = sceneLocal(p, w.enter, w.leave);
        return lp >= 0 && lp <= 1;
      });
      if (inTextScene) scrollCue.style.opacity = "0";
      else if (p < SCENE_WINDOWS[0].leave - 0.04) scrollCue.style.opacity = String(clamp01(1 - p / 0.08));
      else scrollCue.style.opacity = p < 0.98 ? "0.45" : "0";
    }

    updateScenes(p);
    updateVideoTone(p);
    rafId = requestAnimationFrame(render);
  };

  const startLoop = () => {
    if (rafId) return;
    rafId = requestAnimationFrame(render);
  };

  const stopLoop = () => {
    if (!rafId) return;
    cancelAnimationFrame(rafId);
    rafId = 0;
  };

  const sectionObserver = new IntersectionObserver(
    ([entry]) => {
      sectionActive = entry.isIntersecting;
      if (sectionActive) {
        lastSeekFrame = -1;
        startLoop();
      } else {
        stopLoop();
      }
    },
    { threshold: 0 }
  );
  sectionObserver.observe(section);

  const startScrub = () => {
    duration = video.duration || 0;
    if (!duration) return;

    seekToStart();
    video.pause();
    lastSeekFrame = -1;

    const reveal = () => {
      if (video.currentTime > 0.08 && readProgress() < 0.02) {
        seekToStart();
        return;
      }
      section.classList.add("is-ready");
      const p = readProgress();
      seekToProgress(p);
      updateScenes(p);
      updateVideoTone(p);
      startLoop();
    };

    if (video.currentTime < 0.05) {
      reveal();
    } else {
      video.addEventListener("seeked", reveal, { once: true });
      seekToStart();
    }
  };

  const waitForVideoMetadata = () =>
    new Promise((resolve, reject) => {
      if (video.duration > 0 && !Number.isNaN(video.duration)) {
        resolve();
        return;
      }

      const onMeta = () => {
        if (video.duration > 0 && !Number.isNaN(video.duration)) {
          cleanup();
          resolve();
        }
      };

      const onError = () => {
        cleanup();
        reject(new Error("hero video metadata"));
      };

      const cleanup = () => {
        video.removeEventListener("loadedmetadata", onMeta);
        video.removeEventListener("durationchange", onMeta);
        video.removeEventListener("error", onError);
      };

      video.addEventListener("loadedmetadata", onMeta);
      video.addEventListener("durationchange", onMeta);
      video.addEventListener("error", onError, { once: true });
      video.load();
    });

  const reloadHeroVideo = async () => {
    const src = window.SitePreload?.getHeroVideoSrc?.() || video.currentSrc || "assets/video/hero.mp4";
    video.pause();
    video.removeAttribute("src");
    video.load();
    await new Promise((r) => requestAnimationFrame(r));
    video.src = src;
    video.load();
    await waitForVideoMetadata();
  };

  const onReady = async () => {
    try {
      await waitForVideoMetadata();
    } catch {
      await reloadHeroVideo();
    }
    duration = video.duration || 0;
    if (!duration) {
      await reloadHeroVideo();
      duration = video.duration || 0;
    }
    startScrub();
  };

  if (video.readyState >= 1 && video.duration) {
    seekToStart();
    void onReady();
  } else {
    video.addEventListener(
      "loadedmetadata",
      () => {
        seekToStart();
        void onReady();
      },
      { once: true }
    );
  }

  window.addEventListener("pageshow", (event) => {
    if (event.persisted) window.scrollTo(0, 0);
    lastSeekFrame = -1;
    seekToStart();
    section.classList.remove("is-ready");
    video.addEventListener(
      "seeked",
      () => {
        section.classList.add("is-ready");
        const p = readProgress();
        seekToProgress(p);
        updateScenes(p);
        updateVideoTone(p);
        startLoop();
      },
      { once: true }
    );
  });
  video.addEventListener("error", () => {
    const retry = async (attempt = 1) => {
      try {
        await reloadHeroVideo();
        duration = video.duration || 0;
        if (!duration) throw new Error("sem duração");
        startScrub();
      } catch {
        await new Promise((r) => window.setTimeout(r, 1400 * Math.min(attempt, 6)));
        await retry(attempt + 1);
      }
    };
    void retry();
  });

  if (video.readyState < 1) video.load();
}

function initSpaceStack() {
  document.querySelectorAll("[data-space-stack]").forEach((stack) => {
    const cards = [...stack.querySelectorAll(".space-stack__card")];
    if (!cards.length) return;

    if (!reduce && window.gsap) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 44 },
        {
          opacity: 1,
          y: 0,
          duration: 0.88,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: stack,
            start: "top 84%",
            toggleActions: "play none none none",
          },
          onComplete: () => gsap.set(cards, { clearProps: "transform" }),
        }
      );
    }

    cards.forEach((card) => {
      card.addEventListener("click", () => {
        const isActive = card.classList.contains("is-active");
        cards.forEach((c) => c.classList.remove("is-active"));
        stack.classList.toggle("has-active", !isActive);
        if (!isActive) card.classList.add("is-active");
      });
    });
  });
}

function initChapters() {
  if (reduce || !window.gsap || !window.ScrollTrigger) {
    initRevealFallback();
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  document.querySelectorAll(".chapter").forEach((chapter) => {
    if (chapter.classList.contains("chapter--menu")) return;
    const items = [
      chapter.querySelector(".eyebrow"),
      chapter.querySelector("h2"),
      chapter.querySelector(".rule"),
      chapter.querySelector(".lede"),
      chapter.querySelector(".chapter-body"),
      chapter.querySelector(".figwrap"),
      chapter.querySelector(".figcap"),
    ].filter(Boolean);

    const rule = chapter.querySelector(".rule");

    gsap.set(items, { opacity: 0, y: 36 });
    if (rule) gsap.set(rule, { scaleX: 0, transformOrigin: "left center" });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: chapter,
          start: "top 78%",
          toggleActions: "play none none none",
        },
      })
      .to(chapter.querySelector(".eyebrow"), { opacity: 1, y: 0, duration: 0.65, ease: "power3.out" })
      .to(chapter.querySelector("h2"), { opacity: 1, y: 0, duration: 0.75, ease: "power3.out" }, "-=0.45")
      .to(
        chapter.querySelector(".rule"),
        { opacity: 1, y: 0, scaleX: 1, duration: 0.55, ease: "power2.out" },
        "-=0.5"
      )
      .to(chapter.querySelector(".lede"), { opacity: 1, y: 0, duration: 0.65, ease: "power3.out" }, "-=0.4")
      .to(chapter.querySelector(".chapter-body"), { opacity: 1, y: 0, duration: 0.65, ease: "power3.out" }, "-=0.45")
      .to(chapter.querySelector(".figwrap"), { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.65")
      .to(chapter.querySelector(".figcap"), { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.55");
  });
}

function buildGallery() {
  const section = document.getElementById("galeria");
  if (!section) return;

  section.innerHTML = `
    <div class="moments-head">
      <h3>Momentos que ficam na memória</h3>
      <p>Eventos, jantares dançantes e celebrações — tudo o que temos para si.</p>
    </div>
    <div class="moments-promo">
      <div class="moments-promo__stack">
        ${PROMO_MOMENTS.map(buildPromoCard).join("")}
      </div>
    </div>`;
}

function buildReviewCard(review) {
  return `
    <article class="review-card review-card--${review.source}">
      <div class="review-card__meta">
        <span class="review-card__source">${REVIEW_PLATFORMS[review.source].name}</span>
        ${review.isNew ? '<span class="review-card__badge">Nova</span>' : ""}
        <span class="review-card__rating"><strong>${review.rating}</strong> · ${review.when}</span>
      </div>
      <p class="review-card__text">${review.text}</p>
      <footer class="review-card__author">${review.author}</footer>
    </article>`;
}

function buildPlatformCard(key) {
  const platform = REVIEW_PLATFORMS[key];
  return `
    <article class="reviews-platform reviews-platform--${key}">
      <div class="reviews-platform__head">
        <span class="reviews-platform__brand">${platform.name}</span>
        <p class="reviews-platform__score">
          <strong>${platform.score}</strong><span>/${platform.max}</span>
        </p>
        <p class="reviews-platform__count">${platform.count} críticas</p>
      </div>
      <a
        class="reviews-platform__cta"
        href="${platform.reviewUrl}"
        target="_blank"
        rel="noopener noreferrer"
      >${platform.cta}</a>
    </article>`;
}

function buildReviews() {
  const section = document.getElementById("criticas");
  if (!section) return;

  section.innerHTML = `
    <div class="reviews-inner">
      <header class="reviews-head">
        <span class="eyebrow">O que dizem de nós</span>
        <h2>Críticas</h2>
        <p class="lede">A opinião de quem já nos visitou — partilhe também a sua experiência.</p>
      </header>
      <div class="reviews-platforms">
        ${buildPlatformCard("google")}
        ${buildPlatformCard("thefork")}
      </div>
      <p class="reviews-disclaimer">Opiniões públicas recolhidas nas plataformas indicadas.</p>
      <div class="reviews-carousel" aria-label="Críticas de clientes">
        <div class="reviews-carousel__viewport">
          <div class="reviews-carousel__track">
            ${CUSTOMER_REVIEWS.map(buildReviewCard).join("")}
            ${CUSTOMER_REVIEWS.map(buildReviewCard).join("")}
          </div>
        </div>
      </div>
    </div>`;
}

function initReviewsCarousel() {
  const viewport = document.querySelector(".reviews-carousel__viewport");
  const track = document.querySelector(".reviews-carousel__track");
  if (!viewport || !track) return;

  if (reduce) {
    track.style.animation = "none";
    viewport.style.overflowX = "auto";
    viewport.style.maskImage = "none";
    return;
  }

  const pause = () => track.classList.add("is-paused");
  const resume = () => track.classList.remove("is-paused");

  viewport.addEventListener("mouseenter", pause);
  viewport.addEventListener("mouseleave", resume);
  viewport.addEventListener("focusin", pause);
  viewport.addEventListener("focusout", (e) => {
    if (!viewport.contains(e.relatedTarget)) resume();
  });
}

function initReviews() {
  if (reduce || !window.gsap || !window.ScrollTrigger) return;

  const head = document.querySelector(".reviews-head");
  if (head) {
    gsap.from(head, {
      opacity: 0,
      y: 28,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: {
        trigger: head,
        start: "top 92%",
        toggleActions: "play none none none",
      },
    });
  }

  gsap.from(".reviews-platform", {
    opacity: 0,
    y: 24,
    duration: 0.65,
    stagger: 0.1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".reviews-platforms",
      start: "top 92%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".reviews-carousel", {
    opacity: 0,
    y: 20,
    duration: 0.65,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".reviews-carousel",
      start: "top 94%",
      toggleActions: "play none none none",
    },
  });

  initReviewsCarousel();
}

function initGallery() {
  if (reduce || !window.gsap || !window.ScrollTrigger) return;

  const heading = document.querySelector(".moments-head");
  if (heading) {
    gsap.from(heading, {
      opacity: 0,
      y: 28,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: {
        trigger: heading,
        start: "top 92%",
        toggleActions: "play none none none",
      },
    });
  }

  gsap.utils.toArray(".promo-card").forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      y: 40,
      duration: 0.75,
      delay: i * 0.06,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 96%",
        toggleActions: "play none none none",
      },
    });
  });
}

function buildContact() {
  const root = document.getElementById("contacto");
  if (!root) return;

  const hours = CONTACT.hours
    .map(
      (row) =>
        `<li><span>${row.label}</span><span>${row.value}</span></li>`
    )
    .join("");

  root.innerHTML = `
    <div class="contact-inner">
      <header class="contact-head">
        <p class="contact-head__eyebrow">Outiz · Vila Nova de Famalicão</p>
        <h2>Venha visitar-nos</h2>
        <p class="lede">
          Estamos prontos para receber o seu almoço, jantar ou o evento mais especial da sua vida.
          Estacionamento privado, jardim e esplanada — tudo num só lugar.
        </p>
      </header>

      <div class="contact-layout">
        <div class="contact-actions" role="group" aria-label="Ações rápidas">
          <a
            class="contact-action contact-action--primary"
            href="${CONTACT.directionsUrl}"
            target="_blank"
            rel="noopener noreferrer"
          >Como chegar</a>
          <a
            class="contact-action"
            href="${CONTACT.wazeUrl}"
            target="_blank"
            rel="noopener noreferrer"
          >Waze</a>
          <a class="contact-action contact-action--reserve reserve-cta" href="#" data-reserve-label="custom">WhatsApp</a>
          <a class="contact-action" href="tel:${CONTACT.phone.tel}">Ligar</a>
        </div>

        <div class="contact-map">
          <iframe
            class="contact-map__frame"
            title="Localização da Encosta Dourada no Google Maps"
            src="${CONTACT.embedUrl}"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen
          ></iframe>
          <div class="contact-map__chrome">
            <a
              class="contact-map__rating"
              href="${REVIEW_PLATFORMS.google.profileUrl}"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="contact-map__stars" aria-hidden="true">★</span>
              <span><strong>${REVIEW_PLATFORMS.google.score}</strong> no Google</span>
            </a>
            <a
              class="contact-map__open"
              href="${CONTACT.mapsUrl}"
              target="_blank"
              rel="noopener noreferrer"
            >Abrir no Maps</a>
          </div>
        </div>

        <article class="contact-card contact-card--address">
          <h4>Morada</h4>
          <p>
            <a href="${CONTACT.mapsUrl}" target="_blank" rel="noopener noreferrer">
              ${CONTACT.street}<br />
              ${CONTACT.locality}<br />
              ${CONTACT.region}
            </a>
          </p>
          <a
            class="contact-card__link"
            href="${CONTACT.directionsUrl}"
            target="_blank"
            rel="noopener noreferrer"
          >Obter direções →</a>
        </article>

        <article class="contact-card">
          <h4>Contactos</h4>
          <ul class="contact-list">
            <li>
              <span>Reservas</span>
              <a class="reserve-cta reserve-cta--inline" href="#">${RESERVE.label}</a>
            </li>
            <li>
              <span>Telefone</span>
              <a href="tel:${CONTACT.phone.tel}">${CONTACT.phone.display}</a>
            </li>
            <li>
              <span>Email</span>
              <a href="mailto:${CONTACT.email}">${CONTACT.email}</a>
            </li>
          </ul>
        </article>

        <article class="contact-card">
          <h4>Horários</h4>
          <ul class="hours-list">${hours}</ul>
        </article>
      </div>
    </div>
  `;
}

function initContact() {
  if (reduce || !window.gsap || !window.ScrollTrigger) return;

  gsap.from(".contact-head", {
    opacity: 0,
    y: 28,
    duration: 0.7,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".contact",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".contact-layout > .contact-actions, .contact-layout > .contact-card, .contact-map", {
    opacity: 0,
    y: 28,
    duration: 0.65,
    stagger: 0.08,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".contact-layout",
      start: "top 88%",
      toggleActions: "play none none none",
    },
  });
}

function initReserveLinks() {
  document.querySelectorAll(".reserve-cta").forEach((el) => {
    el.href = RESERVE.url;
    el.target = "_blank";
    el.rel = "noopener noreferrer";
    if (el.dataset.reserveLabel !== "custom") {
      el.textContent = RESERVE.label;
    }
  });

  if (document.getElementById("reserveFloat")) return;

  const float = document.createElement("a");
  float.id = "reserveFloat";
  float.className = "reserve-float reserve-cta";
  float.href = RESERVE.url;
  float.target = "_blank";
  float.rel = "noopener noreferrer";
  float.dataset.reserveLabel = "custom";
  float.setAttribute("aria-label", RESERVE.label);
  float.innerHTML = `<span class="reserve-float__text">${RESERVE.label}</span>`;
  document.body.appendChild(float);
}

function boot() {
  if (window.__siteBootRan) return;

  try {
    window.__siteBootRan = true;

    document.getElementById("year").textContent = new Date().getFullYear();

    const book = document.getElementById("book");
    book.innerHTML = CHAPTERS.map(buildChapter).join("");

    const rail = initRail();
    const railBtns = [...rail.children];

    const railConfig = RAIL_SECTIONS();
    const sections = railConfig.map((s) => document.getElementById(s.id)).filter(Boolean);
    const morphs = railConfig.map((s) => s.morph);

    initScrollSpy(sections, railBtns, morphs);
    initProgressBar();

    buildVideoScenes();
    initVideoStory();
    initChapters();
    initSpaceStack();
    initMenuBook(typeof MENU_CATEGORIES !== "undefined" ? MENU_CATEGORIES : []);
    buildGallery();
    initGallery();
    buildReviews();
    initReviews();
    buildContact();
    initContact();
    initReserveLinks();

    if (window.ScrollTrigger) {
      ScrollTrigger.refresh();
    }
  } catch (err) {
    console.error("[Encosta Dourada] boot", err);
    window.__siteBootRan = false;
  }
}

window.__siteBoot = boot;

function tryBoot() {
  if (window.__sitePreloadComplete && !window.__siteBootRan) boot();
}

window.addEventListener("site:ready", tryBoot);
tryBoot();

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
  const video = document.getElementById("heroVideo");
  if (video) {
    try {
      video.currentTime = 0;
    } catch {
      /* noop */
    }
  }
  if (window.ScrollTrigger) ScrollTrigger.refresh();
});

let resizeTimer = 0;
window.addEventListener(
  "resize",
  () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      if (window.ScrollTrigger) ScrollTrigger.refresh();
    }, 160);
  },
  { passive: true }
);

window.addEventListener(
  "orientationchange",
  () => {
    window.setTimeout(() => {
      if (window.ScrollTrigger) ScrollTrigger.refresh();
    }, 280);
  },
  { passive: true }
);
