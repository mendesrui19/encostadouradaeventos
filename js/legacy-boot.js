/**
 * Boot simplificado para iPad 2 / iOS antigo / browsers sem suporte moderno.
 * ES5 apenas.
 */
(function () {
  if (!window.__siteLegacy) return;

  var RESERVE_URL =
    "https://wa.me/351914837030?text=" +
    encodeURIComponent("Olá! Gostaria de reservar uma data na Encosta Dourada.");

  var CONTACT = {
    street: "Av. Jorge Reis, 375",
    locality: "4760 Outiz",
    region: "Vila Nova de Famalicão",
    phone: "+351 252 316 429",
    phoneTel: "+351252316429",
    email: "info.encostadourada@gmail.com",
    mapsUrl: "https://maps.google.com/?cid=12687475359754207684",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination_place_id=ChIJ50kmwSJZJA0RxMGrWp73ErA",
    embedUrl:
      "https://www.google.com/maps?cid=12687475359754207684&hl=pt&z=16&output=embed",
    wazeUrl: "https://www.waze.com/ul?q=Encosta+Dourada%2C+Outiz&navigate=yes",
    hours: [
      { label: "2ª feira", value: "11h – 15h" },
      { label: "3ª a 6ª feira", value: "11h – 15h / 19h – 22h" },
      { label: "Sábado", value: "11h – 15h / 19h – 01h" },
      { label: "Domingo", value: "11h – 15h / 19h – 22h" },
    ],
  };

  function $(id) {
    return document.getElementById(id);
  }

  function setHtml(id, html) {
    var el = $(id);
    if (el) el.innerHTML = html;
  }

  function buildChapters() {
    return (
      '<section class="chapter" id="espaco">' +
      '<div class="inner">' +
      '<div class="copy">' +
      '<p class="eyebrow">Capítulo I · O nosso espaço</p>' +
      "<h2>O melhor <em>espaço</em> para festa.</h2>" +
      '<p class="lede">Realizamos todo o tipo de eventos e temos capacidade para mais de 200 pessoas. Restaurante, take away, catering, estacionamento privado, jardim e esplanada.</p>' +
      "<ul class=\"features\">" +
      "<li>Salão elegante para casamentos e celebrações</li>" +
      "<li>Estacionamento privado gratuito</li>" +
      "<li>Jardim e esplanada para os dias de sol</li>" +
      "<li>Serviços de catering e take away</li>" +
      "</ul>" +
      "</div>" +
      '<figure class="legacy-figure">' +
      '<img src="assets/images/espaco/fachada.png" alt="Fachada da Encosta Dourada" />' +
      "<figcaption>Salão principal · até 200 convidados</figcaption>" +
      "</figure>" +
      "</div></section>" +
      '<section class="chapter" id="sabores">' +
      '<div class="inner">' +
      '<div class="copy">' +
      '<p class="eyebrow">Capítulo II · Os nossos sabores</p>' +
      "<h2>A certeza de um <em>excelente prato.</em></h2>" +
      '<p class="lede">Cozinha tradicional portuguesa — diárias da semana, pratos executivos ao almoço e especialidades da casa.</p>' +
      "</div>" +
      '<figure class="legacy-figure">' +
      '<img src="assets/images/menu/cover-diarias.jpg" alt="Carta Encosta Dourada" />' +
      "<figcaption>Diárias, executivos e especialidades</figcaption>" +
      "</figure>" +
      "</div></section>" +
      '<section class="chapter" id="esplanada">' +
      '<div class="inner">' +
      '<div class="copy">' +
      '<p class="eyebrow">Esplanada &amp; jardim</p>' +
      "<h2>Relaxe na nossa <em>esplanada.</em></h2>" +
      '<p class="lede">Um canto ao ar livre para refeições descontraídas, petiscos e bons momentos em família.</p>' +
      "</div>" +
      '<figure class="legacy-figure">' +
      '<img src="assets/images/esplanada.png" alt="Esplanada Encosta Dourada" />' +
      "</figure>" +
      "</div></section>"
    );
  }

  function buildGallery() {
    return (
      "<h2>Eventos &amp; momentos</h2>" +
      '<p class="lede">Casamentos, batizados, jantares dançantes e celebrações memoráveis.</p>' +
      '<article class="legacy-promo">' +
      '<img src="assets/images/promos/jantar-dancante.png" alt="Jantar dançante" />' +
      "<h3>Jantar dançante</h3>" +
      "<p>Noites com música, boa mesa e ambiente festivo.</p>" +
      "</article>" +
      '<article class="legacy-promo">' +
      '<img src="assets/images/promos/batizados.png" alt="Batizados" />' +
      "<h3>Batizados &amp; comunhões</h3>" +
      "<p>Espaço acolhedor para as celebrações em família.</p>" +
      "</article>"
    );
  }

  function buildReviews() {
    return (
      "<h2>O que dizem os nossos clientes</h2>" +
      '<article class="legacy-review">' +
      "<p>«Excelente comida e um espaço lindo para eventos. Recomendo vivamente.»</p>" +
      "<p><strong>— Cliente Google</strong></p>" +
      "</article>" +
      '<article class="legacy-review">' +
      "<p>«Atendimento impecável e ambiente muito acolhedor. Voltaremos.»</p>" +
      "<p><strong>— Cliente TheFork</strong></p>" +
      "</article>"
    );
  }

  function buildContact() {
    var hoursHtml = "";
    var i;
    for (i = 0; i < CONTACT.hours.length; i++) {
      hoursHtml +=
        "<li><span>" +
        CONTACT.hours[i].label +
        "</span> " +
        CONTACT.hours[i].value +
        "</li>";
    }

    return (
      "<h2>Venha visitar-nos</h2>" +
      '<p class="lede">Estamos prontos para receber o seu almoço, jantar ou o evento mais especial da sua vida.</p>' +
      '<div class="contact-layout">' +
      '<div class="contact-actions">' +
      '<a class="contact-action contact-action--primary" href="' +
      CONTACT.directionsUrl +
      '" target="_blank" rel="noopener">Como chegar</a>' +
      '<a class="contact-action" href="' +
      CONTACT.wazeUrl +
      '" target="_blank" rel="noopener">Waze</a>' +
      '<a class="contact-action contact-action--reserve reserve-cta" href="' +
      RESERVE_URL +
      '" target="_blank" rel="noopener">WhatsApp</a>' +
      '<a class="contact-action" href="tel:' +
      CONTACT.phoneTel +
      '">Ligar</a>' +
      "</div>" +
      '<div class="contact-map">' +
      '<iframe class="contact-map__frame" title="Localização" src="' +
      CONTACT.embedUrl +
      '"></iframe>' +
      "</div>" +
      '<article class="contact-card">' +
      "<h4>Morada</h4>" +
      "<p><a href=\"" +
      CONTACT.mapsUrl +
      '" target="_blank" rel="noopener">' +
      CONTACT.street +
      "<br />" +
      CONTACT.locality +
      "<br />" +
      CONTACT.region +
      "</a></p>" +
      "</article>" +
      '<article class="contact-card">' +
      "<h4>Contactos</h4>" +
      '<ul class="contact-list">' +
      '<li>Reservas: <a class="reserve-cta" href="' +
      RESERVE_URL +
      '" target="_blank" rel="noopener">WhatsApp</a></li>' +
      '<li>Telefone: <a href="tel:' +
      CONTACT.phoneTel +
      '">' +
      CONTACT.phone +
      "</a></li>" +
      '<li>Email: <a href="mailto:' +
      CONTACT.email +
      '">' +
      CONTACT.email +
      "</a></li>" +
      "</ul></article>" +
      '<article class="contact-card">' +
      "<h4>Horários</h4>" +
      '<ul class="hours-list">' +
      hoursHtml +
      "</ul></article></div>"
    );
  }

  function hideLoader() {
    var loader = $("siteLoader");
    var label = $("siteLoaderLabel");
    var pct = $("siteLoaderPct");
    var bar = $("siteLoaderBar");

    if (label) label.textContent = "Pronto";
    if (pct) pct.textContent = "100%";
    if (bar) bar.style.width = "100%";

    document.documentElement.classList.remove("is-loading");
    document.documentElement.classList.add("is-ready");
    window.__sitePreloadComplete = true;

    if (loader) {
      loader.className += " is-exiting";
      window.setTimeout(function () {
        if (loader.parentNode) loader.parentNode.removeChild(loader);
      }, 400);
    }
  }

  function addReserveFloat() {
    if ($("reserveFloat")) return;
    var float = document.createElement("a");
    float.id = "reserveFloat";
    float.className = "reserve-float reserve-cta";
    float.href = RESERVE_URL;
    float.target = "_blank";
    float.rel = "noopener";
    float.textContent = "Fazer reserva";
    document.body.appendChild(float);
  }

  function wireReserveLinks() {
    var links = document.querySelectorAll(".reserve-cta");
    var i;
    for (i = 0; i < links.length; i++) {
      links[i].href = RESERVE_URL;
      links[i].target = "_blank";
      links[i].rel = "noopener";
    }
  }

  function boot() {
    var year = $("year");
    if (year) year.textContent = String(new Date().getFullYear());

    setHtml("book", buildChapters());
    setHtml("galeria", buildGallery());
    setHtml("criticas", buildReviews());
    setHtml("contacto", buildContact());

    wireReserveLinks();
    addReserveFloat();
    hideLoader();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
