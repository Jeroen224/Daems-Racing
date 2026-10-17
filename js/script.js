(function () {
  'use strict';

  /* ---------- Translations: key -> [English, Dutch] ---------- */
  var dict = {
    nav_team: ['Team', 'Team'],
    nav_drivers: ['Drivers', 'Rijders'],
    nav_rental: ['Rental', 'Verhuur'],
    nav_news: ['News', 'Nieuws'],
    nav_contact: ['Contact', 'Contact'],
    menu: ['Menu', 'Menu'],

    intro_lead: [
      'A family-run karting team from Geel, Belgium. We race in national and international championships, rent out karts and engines, and build Rotax and IAME X30 engines in our own BluePower workshop.',
      'Een familiaal kartingteam uit Geel. We rijden nationale en internationale kampioenschappen, verhuren karts en motoren en bouwen Rotax- en IAME X30-motoren in onze eigen BluePower-werkplaats.'
    ],
    intro_cta1: ['Race with us', 'Race met ons mee'],
    intro_cta2: ['Rental and engines', 'Verhuur en motoren'],

    team_title: ['Nearly 40 years in karting', 'Bijna 40 jaar karting'],
    team_p1: [
      'Karel Daems founded the team in the 1980s and his son Jan took over in 2007. Nearly four decades on, Daems Racing is still racing at the front of European karting.',
      'Karel Daems richtte het team op in de jaren \'80 en in 2007 nam zijn zoon Jan het over. Bijna vier decennia later rijdt Daems Racing nog altijd vooraan in de Europese karting.'
    ],
    team_p2: [
      'Jan raced alongside drivers like Jan Heylen and Kimi Räikkönen before he ran the team himself. His speciality is Rotax engines and LN Kart chassis, and the team is still built around both.',
      'Jan reed zelf nog samen met onder meer Jan Heylen en Kimi Räikkönen voor hij het team overnam. Hij is gespecialiseerd in Rotax-motoren en LN Kart-chassis, en daar is het team vandaag nog altijd op gebouwd.'
    ],
    team_p3: [
      'For almost 40 years we have only chosen the best: for our team, our materials and our engines.',
      'Al bijna 40 jaar kiezen we enkel het beste: voor ons team, ons materiaal en onze motoren.'
    ],
    fact_founded_l: ['Founded', 'Opgericht'],
    fact_founded: ['1980s, by Karel Daems', 'Jaren \'80, door Karel Daems'],
    fact_run_l: ['Run by', 'Geleid door'],
    fact_run: ['Jan Daems, since 2007', 'Jan Daems, sinds 2007'],
    fact_classes_l: ['Classes', 'Klassen'],
    fact_classes: ['Micro Max to DD2', 'Micro Max tot DD2'],
    fact_material_l: ['Material', 'Materiaal'],
    reel_caption: ['Team reel, 47 seconds', 'Teamvideo, 47 seconden'],

    results_title: ['2025 season', 'Seizoen 2025'],
    res_winner: ['Winner', 'Winnaar'],
    res_third: ['3rd', '3e'],
    res_champion: ['Champion', 'Kampioen'],
    res_vice: ['Vice champion', 'Vicekampioen'],
    res_germany: ['Germany', 'Duitsland'],

    drivers_title: ['Our drivers', 'Onze rijders'],
    drivers_intro: [
      'Our drivers race in the Rotax Max Challenge, from Micro Max up to DD2.',
      'Onze rijders komen uit in de Rotax Max Challenge, van Micro Max tot DD2.'
    ],
    drivers_seat: ['Looking for a seat in the team?', 'Op zoek naar een plaats in het team?'],
    drivers_seat_link: ['Get in touch', 'Neem contact op'],

    rental_title: ['Kart and engine rental', 'Kart- en motorverhuur'],
    rental_p: [
      'Rent an engine, a kart, or the complete package with team support at the track. We look after drivers at regional, national and international races.',
      'Huur een motor, een kart of het volledige pakket met begeleiding aan de baan. We staan klaar op regionale, nationale en internationale wedstrijden.'
    ],
    rental_pack_t: ['Race packages', 'Racepakketten'],
    rental_pack_d: [
      'An engine, a kart or both, with trackside support for every level of competition.',
      'Een motor, een kart of allebei, met begeleiding aan de baan voor elk competitieniveau.'
    ],
    rental_fun_d: [
      'Kart rental for recreational driving, if you just want to enjoy a day on track.',
      'Kartverhuur voor recreatief rijden, als je gewoon wil genieten van een dag op het circuit.'
    ],
    rental_mat_t: ['Engines and chassis', 'Motoren en chassis'],
    rental_cta: ['Ask about rental', 'Vraag naar verhuur'],

    bp_p: [
      'BluePower is our own engine workshop. Every engine is built, tested on the dyno and fiched in-house before it leaves the bench. We work on Rotax and IAME X30.',
      'BluePower is onze eigen motorwerkplaats. Elke motor wordt in huis gebouwd, op de dyno getest en gefiched voor hij de werkbank verlaat. We werken met Rotax en IAME X30.'
    ],
    bp_new_t: ['New engines', 'Nieuwe motoren'],
    bp_new_d: [
      'Complete, ready-to-race engines for Rotax and IAME X30. Stock, or fully fiched for top-end performance.',
      'Complete, raceklare motoren voor Rotax en IAME X30. Standaard, of volledig gefiched voor topprestaties.'
    ],
    bp_dyno_t: ['Dyno and rebuilds', 'Dyno en revisies'],
    bp_dyno_d: [
      'Full and top-end rebuilds for Rotax and X30. Put your engine on the dyno next to one of our team engines and have it fiched for maximum performance.',
      'Volledige en top-end revisies voor Rotax en X30. Zet je motor op de dyno naast een van onze teammotoren en laat hem fichen voor maximale prestaties.'
    ],
    bp_cta: ['Ask about engines', 'Vraag naar motoren'],

    news_title: ['On Instagram', 'Op Instagram'],
    news_follow: ['Follow @daemsracing', 'Volg @daemsracing'],
    partners_title: ['We work with', 'We werken met'],

    contact_title: ['Race with us', 'Race met ons mee'],
    contact_p: [
      'Rental, BluePower engines or a seat in the team: call or email us and we will help you further.',
      'Verhuur, BluePower-motoren of een plaats in het team: bel of mail ons en we helpen je verder.'
    ],
    contact_addr_l: ['Address', 'Adres'],
    contact_route: ['Get directions', 'Routebeschrijving'],
    contact_hours_l: ['Opening hours', 'Openingsuren'],
    contact_days: ['Monday to Friday', 'Maandag tot vrijdag'],
    and: ['and', 'en']
  };

  var langButtons = document.querySelectorAll('[data-lang]');

  function setLang(lang) {
    var i = lang === 'nl' ? 1 : 0;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var entry = dict[el.getAttribute('data-i18n')];
      if (entry) el.textContent = entry[i];
    });
    langButtons.forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lang') === lang));
    });
    try { localStorage.setItem('dr-lang', lang); } catch (e) {}
  }

  langButtons.forEach(function (btn) {
    btn.addEventListener('click', function () { setLang(btn.getAttribute('data-lang')); });
  });

  var savedLang = null;
  try { savedLang = localStorage.getItem('dr-lang'); } catch (e) {}
  var browserLang = (navigator.language || '').toLowerCase().indexOf('nl') === 0 ? 'nl' : 'en';
  setLang(savedLang || browserLang);

  /* ---------- Mobile menu ---------- */
  var menuBtn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');

  function setMenu(open) {
    nav.classList.toggle('is-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
  }
  menuBtn.addEventListener('click', function () {
    setMenu(menuBtn.getAttribute('aria-expanded') !== 'true');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setMenu(false);
  });

  /* ---------- Instagram feed ----------
     While INSTAGRAM_FEED_URL is empty, the placeholder tiles in index.html stay.
     Set it to an endpoint that returns the Instagram Graph API media list:
       { "data": [ { "media_type", "media_url", "thumbnail_url", "permalink", "caption" }, ... ] }
     Keep the access token on the server (e.g. a small serverless function),
     never in this file. */
  var INSTAGRAM_FEED_URL = '';
  var FEED_SIZE = 6;
  var feed = document.getElementById('instagram-feed');

  function renderFeed(posts) {
    var items = posts.filter(function (p) { return p.permalink && (p.media_url || p.thumbnail_url); }).slice(0, FEED_SIZE);
    if (!items.length) return;
    feed.innerHTML = '';
    items.forEach(function (p) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = p.permalink;
      a.target = '_blank';
      a.rel = 'noopener';
      var img = document.createElement('img');
      img.src = p.media_type === 'VIDEO' ? p.thumbnail_url : p.media_url;
      img.alt = (p.caption || '').slice(0, 120);
      img.loading = 'lazy';
      a.appendChild(img);
      li.appendChild(a);
      if (p.caption) {
        var cap = document.createElement('p');
        cap.className = 'caption';
        cap.textContent = p.caption;
        li.appendChild(cap);
      }
      feed.appendChild(li);
    });
  }

  if (INSTAGRAM_FEED_URL && feed) {
    fetch(INSTAGRAM_FEED_URL)
      .then(function (res) { return res.ok ? res.json() : Promise.reject(res.status); })
      .then(function (json) { renderFeed(json.data || []); })
      .catch(function () { /* keep the placeholder tiles */ });
  }

  /* ---------- Footer year ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
