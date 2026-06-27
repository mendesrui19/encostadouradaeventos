const DISHES_PER_SPREAD = 6;
const DISHES_PER_SIDE = 3;

function chunkArray(list, size) {
  const chunks = [];
  for (let i = 0; i < list.length; i += size) chunks.push(list.slice(i, i + size));
  return chunks;
}

function dishLabel(description) {
  const idx = description.indexOf(" - ");
  return idx === -1 ? description : description.slice(0, idx);
}

function buildCategoryBook(cat) {
  const spreads = [
    {
      type: "cover",
      id: cat.id,
      name: cat.name,
      description: cat.description,
      cover: cat.cover,
      dishCount: cat.dishes.length,
    },
  ];

  chunkArray(cat.dishes, DISHES_PER_SPREAD).forEach((chunk, spreadIndex, all) => {
    spreads.push({
      type: "menu",
      category: cat.name,
      left: chunk.slice(0, DISHES_PER_SIDE),
      right: chunk.slice(DISHES_PER_SIDE, DISHES_PER_SIDE * 2),
      spreadIndex: spreadIndex + 1,
      spreadTotal: all.length,
    });
  });

  return { id: cat.id, name: cat.name, spreads };
}

function buildLaunchers(categories) {
  return `
    <div class="menu-launchers chapter-animate">
      ${categories
        .map(
          (cat) => `
        <button type="button" class="menu-launcher" data-open-book="${cat.id}" aria-label="Abrir livro ${cat.name}">
          <div class="menu-launcher__book" aria-hidden="true">
            <div class="menu-launcher__cover">
              <img src="${cat.cover}" alt="" loading="lazy" />
              <div class="menu-launcher__spine"></div>
              <div class="menu-launcher__edge"></div>
            </div>
            <div class="menu-launcher__pages"></div>
          </div>
          <div class="menu-launcher__info">
            <span class="menu-launcher__eyebrow">Folheto</span>
            <h3>${cat.name}</h3>
            <p>${cat.description}</p>
            <span class="menu-launcher__cta">Abrir livro · ${cat.dishes.length} pratos</span>
          </div>
        </button>`
        )
        .join("")}
    </div>`;
}

function renderMenuRow(dish) {
  return `
    <article class="menu-row">
      <div class="menu-row__media">
        <img src="${dish.image}" alt="${dish.name}" loading="lazy" />
      </div>
      <div class="menu-row__body">
        <span class="menu-row__tag">${dishLabel(dish.description)}</span>
        <div class="menu-row__line">
          <h4 class="menu-row__name">${dish.name}</h4>
          <span class="menu-row__leader" aria-hidden="true"></span>
          <span class="menu-row__price">${dish.price}</span>
        </div>
      </div>
    </article>`;
}

function renderMenuPage(dishes, category, side, modifier = "") {
  if (!dishes.length) {
    return `<div class="book-page book-page--${side} book-page--empty" aria-hidden="true"></div>`;
  }

  return `
    <div class="book-page book-page--${side} book-page--menu ${modifier}">
      <header class="book-page__mast">
        <div class="book-page__mast-left">
          <span class="book-page__mark">Encosta Dourada</span>
        </div>
        <span class="book-page__section">${category}</span>
      </header>
      <div class="book-page__menu">${dishes.map(renderMenuRow).join("")}</div>
      <footer class="book-page__foot">
        <span class="book-page__foot-mark">Restaurante & Eventos · Famalicão</span>
      </footer>
    </div>`;
}

function renderCover(page) {
  return `
    <div class="book-spread book-spread--cover">
      <div class="book-page book-page--cover book-page--lux">
        <div class="book-page__crest">
          <span class="book-page__crest-line"></span>
          <span>Encosta Dourada</span>
          <span class="book-page__crest-line"></span>
        </div>
        <div class="book-page__cover-frame">
          <img src="${page.cover}" alt="${page.name}" />
        </div>
        <p class="book-page__eyebrow">Restaurante & Eventos</p>
        <h2 class="book-page__title">${page.name}</h2>
        <p class="book-page__note">${page.description}</p>
        <p class="book-page__hint">${page.dishCount} pratos · Virar página →</p>
      </div>
    </div>`;
}

function renderMenuSpread(page) {
  const all = [...page.left, ...page.right];

  return `
    <div class="book-spread book-spread--open book-spread--menu">
      <div class="book-spread__desktop">
        ${renderMenuPage(page.left, page.category, "left")}
        <div class="book-spine" aria-hidden="true"></div>
        ${renderMenuPage(page.right, page.category, "right")}
      </div>
      <div class="book-spread__mobile" aria-hidden="true">
        ${renderMenuPage(all, page.category, "single", "book-page--mobile")}
      </div>
    </div>`;
}

function renderSpread(page) {
  if (page.type === "cover") return renderCover(page);
  return renderMenuSpread(page);
}

function spreadLabel(page, bookName) {
  if (page.type === "cover") return bookName;
  return `${bookName} · ${page.spreadIndex}/${page.spreadTotal}`;
}

function initMenuBook(categories) {
  const root = document.getElementById("menuBook");
  if (!root || !categories?.length) return;

  const books = Object.fromEntries(categories.map((cat) => [cat.id, buildCategoryBook(cat)]));
  root.innerHTML = buildLaunchers(categories);

  const overlay = document.createElement("div");
  overlay.className = "menu-overlay";
  overlay.id = "menuOverlay";
  overlay.hidden = true;
  overlay.innerHTML = `
    <div class="menu-overlay__chrome">
      <header class="menu-overlay__head">
        <button type="button" class="menu-overlay__close" id="menuOverlayClose" aria-label="Fechar livro">← Voltar</button>
        <span class="menu-overlay__label" id="menuPageLabel">Folheto</span>
        <button type="button" class="menu-overlay__fs" id="menuOverlayFs" aria-label="Ecrã inteiro">⤢</button>
      </header>
      <div class="book-stage" id="bookStage">
        <button type="button" class="book-nav book-nav--prev" id="bookNavPrev" aria-label="Página anterior">‹</button>
        <div class="book-viewport">
          <div class="book-viewport__inner" id="bookViewport"></div>
        </div>
        <button type="button" class="book-nav book-nav--next" id="bookNavNext" aria-label="Página seguinte">›</button>
      </div>
      <p class="book-hint">Clique nas laterais ou use as setas para virar</p>
      <footer class="menu-overlay__foot">
        <span id="menuCounter">1 / 1</span>
      </footer>
    </div>`;
  document.body.appendChild(overlay);

  const viewport = overlay.querySelector("#bookViewport");
  const labelEl = overlay.querySelector("#menuPageLabel");
  const counterEl = overlay.querySelector("#menuCounter");
  const navPrev = overlay.querySelector("#bookNavPrev");
  const navNext = overlay.querySelector("#bookNavNext");
  const stage = overlay.querySelector("#bookStage");

  let activeBook = null;
  let current = 0;
  let touchX = 0;
  let isOpen = false;

  const spreads = () => activeBook?.spreads ?? [];

  const render = (index, dir = 0) => {
    const list = spreads();
    if (!list.length) return;

    current = Math.max(0, Math.min(list.length - 1, index));
    const page = list[current];

    viewport.classList.remove("is-turning");
    void viewport.offsetWidth;
    viewport.style.setProperty("--dir", String(dir));
    viewport.classList.add("is-turning");
    viewport.innerHTML = renderSpread(page);

    labelEl.textContent = `Encosta Dourada · ${spreadLabel(page, activeBook.name)}`;
    counterEl.textContent = `${current + 1} / ${list.length}`;
    navPrev.disabled = current === 0;
    navNext.disabled = current === list.length - 1;
  };

  const openBook = (bookId, start = 0) => {
    activeBook = books[bookId];
    if (!activeBook) return;
    isOpen = true;
    overlay.hidden = false;
    document.body.classList.add("menu-open");
    render(start, 0);
  };

  const closeOverlay = () => {
    isOpen = false;
    overlay.hidden = true;
    document.body.classList.remove("menu-open");
    activeBook = null;
  };

  const step = (delta) => render(current + delta, delta);

  root.querySelectorAll("[data-open-book]").forEach((btn) => {
    btn.addEventListener("click", () => openBook(btn.dataset.openBook, 0));
  });

  overlay.querySelector("#menuOverlayClose")?.addEventListener("click", closeOverlay);
  navPrev.addEventListener("click", (e) => {
    e.stopPropagation();
    step(-1);
  });
  navNext.addEventListener("click", (e) => {
    e.stopPropagation();
    step(1);
  });
  stage.addEventListener("click", (e) => {
    if (e.target.closest(".book-nav")) return;
    const rect = stage.getBoundingClientRect();
    const x = e.clientX - rect.left;
    if (x < rect.width * 0.22) step(-1);
    else if (x > rect.width * 0.78) step(1);
  });

  overlay.querySelector("#menuOverlayFs")?.addEventListener("click", () => {
    if (!document.fullscreenElement) overlay.requestFullscreen?.();
    else document.exitFullscreen?.();
  });

  window.addEventListener("keydown", (e) => {
    if (!isOpen) return;
    if (e.key === "Escape") closeOverlay();
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });

  overlay.addEventListener("touchstart", (e) => { touchX = e.changedTouches[0].clientX; }, { passive: true });
  overlay.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
  }, { passive: true });

  initMenuChapterReveal(root);
}

function initMenuChapterReveal(root) {
  const chapter = root.closest(".chapter--menu");
  if (!chapter) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !window.gsap || !window.ScrollTrigger) {
    chapter.querySelectorAll(".chapter-animate").forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
    return;
  }

  const items = chapter.querySelectorAll(".chapter-animate");
  gsap.set(items, { opacity: 0, y: 32 });
  gsap.to(items, {
    opacity: 1,
    y: 0,
    duration: 0.7,
    stagger: 0.09,
    ease: "power3.out",
    scrollTrigger: {
      trigger: chapter,
      start: "top 78%",
      toggleActions: "play none none none",
    },
  });
}
