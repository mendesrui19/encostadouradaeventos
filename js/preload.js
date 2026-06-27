/**
 * Preload gate — carrega tudo a 100% antes de revelar o site.
 * Sem atalhos: falha → nova tentativa até estar pronto.
 */
(function () {
  const HERO_VIDEO_SRC = "assets/video/hero.mp4";
  const EXIT_MS = 920;
  const RETRY_BASE_MS = 1400;
  const RETRY_MAX_MS = 8000;
  const IMAGE_BATCH_SIZE = 6;

  const PHASE_LABELS = {
    fonts: "A preparar tipografia…",
    scripts: "A preparar animações…",
    video: "A carregar vídeo…",
    images: "A preparar imagens…",
    final: "Quase pronto…",
  };

  const WEIGHTS = { fonts: 0.07, scripts: 0.06, video: 0.4, images: 0.4, final: 0.07 };

  let heroVideoBlobUrl = null;
  let heroVideoElement = null;
  let heroVideoReady = false;

  function collectCriticalImages() {
    const base = [
      "assets/images/brand/logo.png",
      "assets/video/hero-poster.jpg",
      "assets/images/espaco/fachada.png",
      "assets/images/espaco/patio.png",
      "assets/images/espaco/terraco.png",
      "assets/images/esplanada.png",
      "assets/images/promos/jantar-dancante.png",
      "assets/images/promos/jantar-banner.png",
      "assets/images/promos/comunhoes.png",
      "assets/images/promos/batizados.png",
    ];

    if (typeof MENU_CATEGORIES !== "undefined") {
      MENU_CATEGORIES.forEach((cat) => {
        if (cat.cover) base.push(cat.cover);
        cat.dishes?.forEach((dish) => {
          if (dish.image) base.push(dish.image);
        });
      });
    }

    return [...new Set(base)];
  }

  function getHeroVideoSrc() {
    return heroVideoBlobUrl ?? HERO_VIDEO_SRC;
  }

  function adoptHeroVideoElement() {
    const el = heroVideoElement;
    heroVideoElement = null;
    return el;
  }

  function isHeroVideoReady() {
    return heroVideoReady;
  }

  function sleep(ms) {
    return new Promise((resolve) => {
      window.setTimeout(resolve, ms);
    });
  }

  function retryDelay(attempt) {
    return Math.min(RETRY_BASE_MS * attempt, RETRY_MAX_MS);
  }

  async function retryUntil(task, onRetry) {
    let attempt = 0;
    while (true) {
      try {
        return await task();
      } catch (err) {
        attempt += 1;
        onRetry?.(attempt, err);
        await sleep(retryDelay(attempt));
      }
    }
  }

  function preloadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.decoding = "async";
      img.onload = () => resolve();
      img.onerror = () => reject(new Error(`imagem: ${src}`));
      img.src = src;
    });
  }

  async function preloadImages(urls, onProgress) {
    if (!urls.length) {
      onProgress?.(1);
      return;
    }

    let done = 0;
    for (let i = 0; i < urls.length; i += IMAGE_BATCH_SIZE) {
      const batch = urls.slice(i, i + IMAGE_BATCH_SIZE);
      await Promise.all(
        batch.map((src) =>
          retryUntil(
            () => preloadImage(src),
            (attempt) =>
              onProgress?.({
                partial: (done + 0.35) / urls.length,
                retry: attempt,
                src,
              })
          )
        )
      );
      done += batch.length;
      onProgress?.(done / urls.length);
    }
  }

  async function fetchHeroVideoBlob(src, onProgress) {
    if (heroVideoBlobUrl) {
      onProgress?.(1);
      return heroVideoBlobUrl;
    }

    const response = await fetch(src);
    if (!response.ok) throw new Error(`vídeo HTTP ${response.status}`);

    const contentLength = Number(response.headers.get("content-length")) || 0;
    const body = response.body;
    let blob;

    if (!body || contentLength <= 0) {
      blob = await response.blob();
      if (!blob.size) throw new Error("vídeo vazio");
      onProgress?.(1);
    } else {
      const reader = body.getReader();
      const chunks = [];
      let received = 0;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
        received += value.length;
        onProgress?.(Math.min(received / contentLength, 0.99));
      }

      if (received < contentLength) throw new Error("vídeo incompleto");

      blob = new Blob(chunks, { type: response.headers.get("content-type") ?? "video/mp4" });
      onProgress?.(1);
    }

    heroVideoBlobUrl = URL.createObjectURL(blob);
    return heroVideoBlobUrl;
  }

  function isVideoFullyBuffered(video) {
    const duration = video.duration;
    if (!duration || Number.isNaN(duration)) return false;
    if (video.buffered.length === 0) return false;
    const end = video.buffered.end(video.buffered.length - 1);
    return end >= duration - 0.08;
  }

  function warmHeroVideo(blobUrl) {
    return new Promise((resolve, reject) => {
      const video = document.createElement("video");
      video.preload = "auto";
      video.muted = true;
      video.playsInline = true;
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "true");

      let settled = false;

      const fail = (message) => {
        if (settled) return;
        settled = true;
        window.clearTimeout(watchdog);
        reject(new Error(message));
      };

      const succeed = async () => {
        if (settled || !isVideoFullyBuffered(video)) return;
        settled = true;
        window.clearTimeout(watchdog);

        try {
          await video.play();
          video.pause();
          video.currentTime = 0;
        } catch {
          /* iOS pode exigir gesto no hero — buffer completo é o critério */
        }

        heroVideoReady = true;
        heroVideoElement = video;
        resolve();
      };

      const watchdog = window.setTimeout(() => {
        fail("vídeo: buffer incompleto");
      }, 120_000);

      video.addEventListener("progress", () => void succeed());
      video.addEventListener("canplaythrough", () => void succeed(), { once: true });
      video.addEventListener("loadedmetadata", () => void succeed());
      video.addEventListener("error", () => fail("vídeo: erro ao preparar"), { once: true });

      video.src = blobUrl;
      video.load();
    });
  }

  async function preloadHeroVideo(src, onProgress) {
    if (heroVideoReady && heroVideoBlobUrl && heroVideoElement) {
      onProgress?.(1);
      return;
    }

    const blobUrl = await fetchHeroVideoBlob(src, (fetchRatio) => {
      onProgress?.(fetchRatio * 0.88);
    });

    await warmHeroVideo(blobUrl);
    onProgress?.(1);
  }

  function waitForWindowLoad() {
    if (document.readyState === "complete") return Promise.resolve();
    return new Promise((resolve) => {
      window.addEventListener("load", () => resolve(), { once: true });
    });
  }

  function waitForGsap() {
    return new Promise((resolve, reject) => {
      const started = performance.now();
      const check = () => {
        if (window.gsap && window.ScrollTrigger) {
          window.gsap.registerPlugin(window.ScrollTrigger);
          resolve();
          return;
        }
        if (performance.now() - started > 120_000) {
          reject(new Error("GSAP indisponível"));
          return;
        }
        requestAnimationFrame(check);
      };
      check();
    });
  }

  async function preloadSiteInternal(onProgress) {
    const images = collectCriticalImages();
    let retryNote = "";

    const report = (phase, localRatio) => {
      const phaseStart =
        phase === "fonts"
          ? 0
          : phase === "scripts"
            ? WEIGHTS.fonts
            : phase === "video"
              ? WEIGHTS.fonts + WEIGHTS.scripts
              : phase === "images"
                ? WEIGHTS.fonts + WEIGHTS.scripts + WEIGHTS.video
                : WEIGHTS.fonts + WEIGHTS.scripts + WEIGHTS.video + WEIGHTS.images;

      const phaseWeight =
        phase === "fonts"
          ? WEIGHTS.fonts
          : phase === "scripts"
            ? WEIGHTS.scripts
            : phase === "video"
              ? WEIGHTS.video
              : phase === "images"
                ? WEIGHTS.images
                : WEIGHTS.final;

      const ratio = Math.min(phaseStart + localRatio * phaseWeight, 0.995);
      const label = retryNote ? `${PHASE_LABELS[phase]} ${retryNote}` : PHASE_LABELS[phase];
      onProgress?.({ ratio, phase, label });
    };

    const setRetry = (attempt) => {
      retryNote = attempt > 1 ? `(tentativa ${attempt})` : "";
    };

    onProgress?.({ ratio: 0, phase: "fonts", label: PHASE_LABELS.fonts });

    await retryUntil(async () => {
      await document.fonts.ready;
      await Promise.all([
        document.fonts.load('400 16px "Jost"'),
        document.fonts.load('400 16px "Cormorant Garamond"'),
      ]);
    }, setRetry);
    report("fonts", 1);

    onProgress?.({ ratio: WEIGHTS.fonts, phase: "scripts", label: PHASE_LABELS.scripts });
    await retryUntil(() => waitForGsap(), setRetry);
    report("scripts", 1);

    onProgress?.({
      ratio: WEIGHTS.fonts + WEIGHTS.scripts,
      phase: "video",
      label: PHASE_LABELS.video,
    });

    await retryUntil(
      () =>
        preloadHeroVideo(HERO_VIDEO_SRC, (local) => {
          report("video", typeof local === "number" ? local : local?.partial ?? 0);
        }),
      (attempt) => {
        heroVideoBlobUrl = null;
        heroVideoReady = false;
        heroVideoElement = null;
        setRetry(attempt);
      }
    );
    report("video", 1);

    onProgress?.({
      ratio: WEIGHTS.fonts + WEIGHTS.scripts + WEIGHTS.video,
      phase: "images",
      label: PHASE_LABELS.images,
    });

    await retryUntil(
      () =>
        preloadImages(images, (local) => {
          report("images", typeof local === "number" ? local : local?.partial ?? 0);
        }),
      setRetry
    );

    onProgress?.({
      ratio: WEIGHTS.fonts + WEIGHTS.scripts + WEIGHTS.video + WEIGHTS.images,
      phase: "final",
      label: PHASE_LABELS.final,
    });

    await waitForWindowLoad();
    await sleep(280);

    if (!heroVideoReady || !heroVideoElement || !heroVideoBlobUrl) {
      throw new Error("vídeo não confirmado");
    }

    onProgress?.({ ratio: 1, phase: "final", label: "Pronto." });
  }

  function preloadSite(onProgress) {
    return preloadSiteInternal(onProgress);
  }

  const loader = {
    el: null,
    bar: null,
    pct: null,
    label: null,
    ring: null,
  };

  const RING_R = 46;
  const RING_C = 2 * Math.PI * RING_R;

  function bindLoader() {
    loader.el = document.getElementById("siteLoader");
    loader.bar = document.getElementById("siteLoaderBar");
    loader.pct = document.getElementById("siteLoaderPct");
    loader.label = document.getElementById("siteLoaderLabel");
    loader.ring = document.getElementById("siteLoaderRing");
  }

  function updateLoader({ ratio, label }) {
    const pct = Math.round(ratio * 100);
    if (loader.bar) loader.bar.style.width = `${pct}%`;
    if (loader.pct) loader.pct.textContent = `${pct}%`;
    if (loader.label && label) loader.label.textContent = label;
    if (loader.ring) loader.ring.style.strokeDashoffset = String(RING_C * (1 - ratio));
  }

  function exitLoader(reduced) {
    return new Promise((resolve) => {
      if (!loader.el) {
        resolve();
        return;
      }
      loader.el.classList.add("is-exiting");
      loader.el.setAttribute("aria-busy", "false");
      const ms = reduced ? 180 : EXIT_MS;
      window.setTimeout(() => {
        loader.el?.remove();
        resolve();
      }, ms);
    });
  }

  function revealSite() {
    document.documentElement.classList.remove("is-loading");
    document.documentElement.classList.add("is-ready");
    document.body.style.overflow = "";
    window.__sitePreloadComplete = true;
    if (typeof window.__siteBoot === "function") window.__siteBoot();
    window.dispatchEvent(new CustomEvent("site:ready"));
  }

  async function start() {
    bindLoader();
    document.documentElement.classList.add("is-loading");
    document.body.style.overflow = "hidden";

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    await preloadSite(updateLoader);

    updateLoader({ ratio: 1, phase: "final", label: "Pronto." });

    if (reduced) {
      await exitLoader(true);
      revealSite();
      return;
    }

    await exitLoader(false);
    revealSite();
  }

  window.SitePreload = {
    preloadSite,
    getHeroVideoSrc,
    isHeroVideoReady,
    adoptHeroVideoElement,
  };

  start();
})();
