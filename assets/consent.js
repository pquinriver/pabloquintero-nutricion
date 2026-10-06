// Banner de cookies + Google Ads (modo básico: no se carga nada de Google sin consentimiento).
// Conversión "Contact": clic en WhatsApp o en Llamada.
(function () {
  var ADS_ID = 'AW-18451637807';
  var CONTACT_CONVERSION = 'AW-18451637807/y5jpCPjg8IsdEK_Mtt5E';
  var KEY = 'pq-cookie-consent'; // 'granted' | 'denied'

  function getChoice() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function setChoice(v) {
    try { localStorage.setItem(KEY, v); } catch (e) {}
  }

  var loaded = false;
  function loadGoogleTag() {
    if (loaded) return;
    loaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag('consent', 'default', {
      ad_storage: 'granted', ad_user_data: 'granted',
      ad_personalization: 'granted', analytics_storage: 'denied'
    });
    gtag('js', new Date());
    gtag('config', ADS_ID);
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + ADS_ID;
    document.head.appendChild(s);
  }

  function trackContact(e) {
    var a = e.target.closest && e.target.closest('a[href^="https://wa.me"], a[href^="tel:"]');
    if (!a || !loaded) return;
    gtag('event', 'conversion', { send_to: CONTACT_CONVERSION, transport_type: 'beacon' });
  }

  function closeBanner() {
    var b = document.getElementById('cookieBanner');
    if (b) b.remove();
  }

  function showBanner() {
    if (document.getElementById('cookieBanner')) return;
    var b = document.createElement('div');
    b.id = 'cookieBanner';
    b.className = 'cookie-banner';
    b.setAttribute('role', 'dialog');
    b.setAttribute('aria-label', 'Preferencias de cookies');
    b.innerHTML =
      '<p>Uso cookies de Google Ads solo para saber si los anuncios sirven (cuántas personas contactan desde ellos). ' +
      'Nada se activa sin tu permiso. <a href="/cookies.html">Más información</a></p>' +
      '<div class="cookie-actions">' +
      '<button type="button" class="btn btn--secondary btn--sm" data-consent="denied">Rechazar</button>' +
      '<button type="button" class="btn btn--primary btn--sm" data-consent="granted">Aceptar</button>' +
      '</div>';
    b.addEventListener('click', function (e) {
      var v = e.target.getAttribute && e.target.getAttribute('data-consent');
      if (!v) return;
      var previous = getChoice();
      setChoice(v);
      closeBanner();
      if (v === 'granted') loadGoogleTag();
      else if (previous === 'granted') location.reload(); // retirar consentimiento: recargar sin la etiqueta
    });
    document.body.appendChild(b);
  }

  // Visitas desde un anuncio (gclid/gbraid/wbraid): WhatsApp con mensaje pre-rellenado,
  // así se puede saber qué conversaciones llegan de Google Ads.
  var AD_MESSAGE = 'Hola Pablo, te escribo para saber más sobre tu consulta';
  var AD_KEY = 'pq-from-ad';

  function cameFromAd() {
    if (/[?&](gclid|gbraid|wbraid)=/.test(location.search)) {
      if (getChoice() === 'granted') {
        try { sessionStorage.setItem(AD_KEY, '1'); } catch (e) {}
      }
      return true;
    }
    try { return sessionStorage.getItem(AD_KEY) === '1'; } catch (e) { return false; }
  }

  function prefillWhatsApp() {
    if (!cameFromAd()) return;
    document.querySelectorAll('a[href^="https://wa.me/"]').forEach(function (a) {
      a.href = a.href.split('?')[0] + '?text=' + encodeURIComponent(AD_MESSAGE);
    });
  }

  function init() {
    prefillWhatsApp();
    var choice = getChoice();
    if (choice === 'granted') loadGoogleTag();
    else if (choice !== 'denied') showBanner();

    document.addEventListener('click', trackContact, true);
    document.querySelectorAll('[data-cookie-settings]').forEach(function (el) {
      el.addEventListener('click', function (e) { e.preventDefault(); showBanner(); });
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
