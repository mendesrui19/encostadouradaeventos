/**
 * Deteta browsers muito antigos (ex.: iPad 2 / iOS 9) — modo legado completo.
 * Se só o vídeo falhar, o site moderno trata disso à parte (poster + ementas intactas).
 * ES5 — tem de correr antes dos scripts modernos.
 */
(function () {
  function supports(prop, value) {
    try {
      return window.CSS && CSS.supports && CSS.supports(prop, value);
    } catch (e) {
      return false;
    }
  }

  function iosMajor() {
    var match = navigator.userAgent.match(/OS (\d+)_/);
    if (!match) return null;
    return parseInt(match[1], 10);
  }

  var ios = iosMajor();
  var oldIOS = ios !== null && ios < 11;
  var noGrid = !supports("display", "grid");
  var noVars = !supports("color", "var(--fake)");
  var noClamp = !supports("width", "clamp(1px, 2px, 3px)");

  if (oldIOS || noGrid || noVars || noClamp) {
    document.documentElement.className += " is-legacy";
    window.__siteLegacy = true;
  }
})();
