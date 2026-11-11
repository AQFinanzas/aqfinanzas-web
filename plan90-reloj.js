/* ============================================================
   Plan 90 Días · Contador de 48 horas por persona (11-nov-2026)
   - Arranca la PRIMERA vez que la persona abre cualquier página del
     Plan 90 Días en aqfinanzas.com (90dias, vzla, latam, copias y pago).
   - Se guarda en su navegador (localStorage + cookie), así que si vuelve
     ve el tiempo que le queda, no un contador nuevo.
   - Mientras corre: US$167 contado o 3 × US$67.
   - Al vencer: US$397 contado o 3 × US$147.
   Pruebas: ?reloj=vencido (ver precio vencido sin tocar nada)
            ?reloj=reiniciar (volver a empezar las 48 h en ese navegador)
   ============================================================ */
(function () {
  var HORAS = 48;
  // Ofertas de Hotmart del producto 8906272 (checkout O108374792Q)
  var OFF = {
    contado: 'zujvlt0g',   // US$167
    partes: 'zb6j76vv',    // 3 × US$67
    contado2: '28pgkdq6',  // US$397 contado (creada 11-nov-2026)
    partes2: '3lj92rbi'    // 3 × US$147, Pago Inteligente (creada 11-nov-2026)
  };
  var WA = '573105104847';
  var K = 'aq_p90_inicio', ahora = Date.now(), qs = location.search || '';

  function leer() {
    try { var v = +localStorage.getItem(K); if (v) return v; } catch (e) {}
    var m = document.cookie.match(/(?:^|; )aq_p90_inicio=(\d+)/); return m ? +m[1] : 0;
  }
  function guardar(t) {
    try { localStorage.setItem(K, String(t)); } catch (e) {}
    try { document.cookie = K + '=' + t + ';max-age=31536000;path=/;SameSite=Lax'; } catch (e) {}
  }
  var ini = leer();
  if (!ini || ini > ahora || /(^|[?&])reloj=reiniciar/.test(qs)) { ini = ahora; guardar(ini); }
  else guardar(ini); // repone la otra copia si una se perdió
  var fin = ini + HORAS * 3600e3;
  var forzar = /(^|[?&])reloj=vencido/.test(qs);
  function vencido() { return forzar || Date.now() >= fin; }

  var P90 = window.P90 = {
    fin: fin, vencido: vencido(), OFF: OFF, WA: WA,
    contado: vencido() ? 397 : 167, cuota: vencido() ? 147 : 67,
    offContado: function () { return vencido() ? OFF.contado2 : OFF.contado; },
    offPartes: function () { return vencido() ? OFF.partes2 : OFF.partes; },
    waPrecio: function (forma) {
      return 'https://wa.me/' + WA + '?text=' + encodeURIComponent('Hola, quiero inscribirme en el Plan 90 Días Excedente' + (forma === 'partes' ? ' en 3 pagos de US$147.' : ' (US$397 de contado).'));
    }
  };


  /* ---------- 11-nov-2026: la puerta elegida viaja con el pago ----------
     Hotmart: va en sck (p90dt | p90pat | p90com) → Make la escribe en la columna Plan → el alta abre esa ruta.
     Venezuela (pago-plan90): va como ?puerta= y también se lee del navegador. */
  function puerta() {
    var m = qs.match(/(?:^|[?&])puerta=(dt|pat|com)(?:&|$)/); if (m) return m[1];
    try { var v = localStorage.getItem('p90-puerta'); if (/^(dt|pat|com)$/.test(v || '')) return v; } catch (e) {}
    return '';
  }
  P90.puerta = puerta;
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a.pagar'); if (!a) return;
    var k = puerta(), h = a.getAttribute('href') || ''; if (!k) return;
    h = h.replace(/([?&])(sck|puerta)=[^&]*/g, '$1').replace(/[?&]+$/, '').replace(/&&+/g, '&').replace(/\?&/, '?');
    if (/pay\.hotmart\.com/.test(h)) h += (h.indexOf('?') < 0 ? '?' : '&') + 'sck=p90' + k;
    else if (/pago-plan90/.test(h)) h += (h.indexOf('?') < 0 ? '?' : '&') + 'puerta=' + k;
    a.setAttribute('href', h);
  }, true);

  /* ---------- estilos del contador ---------- */
  var css = '.p90r{display:flex;flex-wrap:wrap;align-items:center;gap:10px 14px;margin:14px 0 6px;padding:12px 14px;border-radius:14px;background:#FFF4EE;border:1.5px solid #F7B08F;color:#01005A;font-size:.95rem;line-height:1.3}' +
    '.p90r .t{font-weight:800}.p90r small{display:block;font-weight:500;color:#5B6075;font-size:.82rem;margin-top:2px}' +
    '.p90r .d{display:flex;gap:6px}.p90r .d span{min-width:46px;padding:6px 4px 4px;border-radius:10px;background:#01005A;color:#fff;text-align:center;font-weight:800;font-size:1.25rem;font-variant-numeric:tabular-nums;line-height:1}' +
    '.p90r .d span i{display:block;font-style:normal;font-weight:600;font-size:.6rem;opacity:.75;margin-top:3px;letter-spacing:.04em}' +
    '.p90r.osc{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.25);color:#fff;justify-content:center}.p90r.osc small{color:rgba(255,255,255,.75)}.p90r.osc .d span{background:#F14900}' +
    '.p90r.cen{justify-content:center;text-align:center}' +
    '.p90fijo{display:block;text-align:center;font-weight:800;font-size:.85rem;color:#01005A;margin-bottom:6px;font-variant-numeric:tabular-nums}' +
    '@media (max-width:900px){.portada .p90r,.portada .p90v{order:3}}' +
    '.p90v{margin:12px 0 4px;padding:10px 14px;border-radius:12px;background:#F4F5FA;color:#5B6075;font-size:.9rem}';
  function ponerCss() { var s = document.createElement('style'); s.textContent = css; document.head.appendChild(s); }

  function partesT(ms) {
    if (ms < 0) ms = 0; var s = Math.floor(ms / 1000);
    return [Math.floor(s / 3600), Math.floor(s % 3600 / 60), s % 60].map(function (n) { return (n < 10 ? '0' : '') + n; });
  }
  function caja(clase) {
    var d = document.createElement('div'); d.className = 'p90r ' + (clase || '');
    d.innerHTML = '<div><div class="t">⏳ Este precio se mantiene solo por 48 horas</div><small>Después sube a US$397 (o 3 pagos de US$147).</small></div>' +
      '<div class="d"><span data-h>48<i>HORAS</i></span><span data-m>00<i>MIN</i></span><span data-s>00<i>SEG</i></span></div>';
    return d;
  }
  var relojes = [];
  function tic() {
    var r = fin - Date.now();
    if (r <= 0 && !P90.vencido) { location.reload(); return; } // se venció con la página abierta: se muestra el precio nuevo
    var p = partesT(r);
    relojes.forEach(function (el) {
      if (el.classList.contains('p90fijo')) { el.textContent = '⏳ Tu precio de US$167 vence en ' + p.join(':'); return; }
      el.querySelector('[data-h]').firstChild.nodeValue = p[0];
      el.querySelector('[data-m]').firstChild.nodeValue = p[1];
      el.querySelector('[data-s]').firstChild.nodeValue = p[2];
    });
  }

  /* Cambia los textos de precio de la página (solo cuando venció) */
  function cambiarTextos(raiz) {
    var w = document.createTreeWalker(raiz, NodeFilter.SHOW_TEXT, null), n, l = [];
    while ((n = w.nextNode())) l.push(n);
    l.forEach(function (t) {
      if (t.parentNode && /^(SCRIPT|STYLE)$/.test(t.parentNode.nodeName)) return;
      var v = t.nodeValue, o = v;
      v = v.replace(/US\$\s?167\b/g, 'US$397').replace(/US\$\s?67\b/g, 'US$147').replace(/\$167\b/g, '$397');
      if (v !== o) t.nodeValue = v;
    });
  }
  function q(s) { return document.querySelector(s); }
  function qa(s) { return document.querySelectorAll(s); }

  /* ---------- Página de venta (90dias, vzla, latam y copias) ---------- */
  function venta() {
    if (!P90.vencido) {
      var pm = q('.precio-mini'); if (pm) { var c1 = caja(); pm.insertAdjacentElement('afterend', c1); relojes.push(c1); }
      var hoy = q('.hoy .ahorro'); if (hoy) { var c2 = caja('cen'); hoy.insertAdjacentElement('afterend', c2); relojes.push(c2); }
      var ci = q('.cierre .intro'); if (ci) { var c3 = caja('osc'); ci.insertAdjacentElement('afterend', c3); relojes.push(c3); }
      var fj = q('.fijo'); if (fj) { var f = document.createElement('span'); f.className = 'p90fijo'; fj.insertAdjacentElement('afterbegin', f); relojes.push(f); }
      tic(); setInterval(tic, 1000);
      return;
    }
    // Venció: precio normal
    cambiarTextos(document.body);
    qa('.precio-mini .tachado-total').forEach(function (s) { s.style.display = 'none'; });
    var pm2 = q('.precio-mini'); if (pm2) pm2.insertAdjacentHTML('afterend', '<div class="p90v">Tu precio especial de 48 horas (US$167) ya venció.</div>');
    var tot = q('.total'); if (tot) tot.style.display = 'none';
    var mo = q('.hoy .monto span'); if (mo) mo.textContent = '397';
    var ah = q('.hoy .ahorro'); if (ah) ah.textContent = 'Un solo pago';
    qa('a.pagar').forEach(function (a) {
      var esPartes = a.getAttribute('data-off') === OFF.partes;
      var nuevo = esPartes ? OFF.partes2 : OFF.contado2, h = a.getAttribute('href') || '';
      if (/pay\.hotmart\.com/.test(h)) {
        if (nuevo) a.href = h.replace('off=' + (esPartes ? OFF.partes : OFF.contado), 'off=' + nuevo).replace(/&reloj=[^&]*/, '');
        else { a.href = P90.waPrecio(esPartes ? 'partes' : 'contado'); a.target = '_blank'; a.rel = 'noopener'; }
      }
      a.setAttribute('data-off', nuevo || a.getAttribute('data-off'));
    });
    try { if (window.clarity) clarity('set', 'precio', '397'); } catch (e) {}
    try { fbq('trackCustom', 'VioPrecio397', { pagina: 'plan90' }); } catch (e) {}
  }

  /* ---------- Página de pago (pago-plan90) ---------- */
  function pago() {
    if (/(^|[?&])cuota=[23]/.test(qs)) return; // pago de cuota 2/3: monto fijo, sin contador
    if (!P90.vencido) {
      var pr = q('header .price .chips'); if (pr) { var c = caja('cen'); pr.insertAdjacentElement('beforebegin', c); relojes.push(c); }
      tic(); setInterval(tic, 1000);
      return;
    }
    cambiarTextos(document.body);
    qa('header .price s').forEach(function (s) { s.parentNode.style.display = 'none'; });
    var pr2 = q('header .price .chips'); if (pr2) pr2.insertAdjacentHTML('beforebegin', '<div class="p90v" style="background:rgba(255,255,255,.1);color:#fff">Tu precio especial de 48 horas (US$167) ya venció.</div>');
    // Los textos que la página vuelve a pintar al elegir forma de pago
    new MutationObserver(function (ms) { ms.forEach(function (m) { m.addedNodes.forEach(function (n) { if (n.nodeType === 1) cambiarTextos(n); }); }); })
      .observe(document.body, { childList: true, subtree: true });
  }

  function arrancar() {
    ponerCss();
    if (/pago-plan90/.test(location.pathname)) pago(); else venta();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', arrancar); else arrancar();
})();
