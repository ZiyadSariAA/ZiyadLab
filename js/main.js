(function() {

  if (localStorage.getItem('lang') === 'ar') {
    document.body.classList.add('rtl');
    document.documentElement.setAttribute('lang', 'ar');
  }

  var toggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', function() {
      navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
    });
  }

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var langBtn = document.getElementById('lang-toggle');
  if (!langBtn) return;

  var currentLang = localStorage.getItem('lang') || 'en';

  function applyLang(lang) {
    currentLang = lang;
    var isAr = lang === 'ar';
    document.documentElement.setAttribute('lang', isAr ? 'ar' : 'en');
    document.body.classList.toggle('rtl', isAr);
    langBtn.textContent = isAr ? 'EN' : 'AR';

    var els = document.querySelectorAll('[data-en][data-ar]');
    for (var i = 0; i < els.length; i++)
      els[i].innerHTML = isAr ? els[i].getAttribute('data-ar') : els[i].getAttribute('data-en');

    localStorage.setItem('lang', lang);
  }

  applyLang(currentLang);
  langBtn.addEventListener('click', function() {
    applyLang(currentLang === 'en' ? 'ar' : 'en');
  });

})();
