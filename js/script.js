(function(){
  'use strict';

  /* ============ i18n ============ */
  var dict = {
    nav_home:["Home","Home"],
    nav_team:["Racing Team","Raceteam"],
    nav_services:["Services","Diensten"],
    nav_bluepower:["BluePower","BluePower"],
    nav_news:["News","Nieuws"],
    nav_contact:["Contact","Contact"],
    hero_eyebrow:["Since the 1980s · Geel, Belgium","Sinds de jaren '80 · Geel, België"],
    hero_sub:["Nearly 40 years of choosing the best — for our karts, our engines, and our drivers.","Bijna 40 jaar lang kiezen we het beste — voor onze karts, onze motoren en onze rijders."],
    cta_join:["Join the Team →","Word lid van het team →"],
    cta_services:["Our Services","Onze diensten"],
    scroll:["Scroll","Scroll"],
    next_race:["Next race","Volgende race"],
    cd_days:["Days","Dagen"], cd_hours:["Hours","Uren"], cd_min:["Min","Min"], cd_sec:["Sec","Sec"],
    quote:["For almost 40 years we only choose the best","Al bijna 40 jaar kiezen we enkel het beste"],
    quote_accent:["— for our team, our materials and our engines.","— voor ons team, ons materiaal en onze motoren."],
    about_eyebrow:["Our Story","Ons verhaal"],
    about_p1:["Founded by Karel Daems in the 1980s and taken over by his son Jan Daems in 2007, Daems Racing has spent nearly four decades at the sharp end of European karting.","Opgericht door Karel Daems in de jaren '80 en in 2007 overgenomen door zijn zoon Jan Daems, staat Daems Racing al bijna vier decennia aan de top van de Europese karting."],
    about_p2:["A specialist in Rotax engines and LN Kart chassis, Jan raced alongside names like Jan Heylen and Kimi Räikkönen before building the team into one of the most respected names in the paddock.","Als specialist in Rotax-motoren en LN Kart-chassis reed Jan samen met namen als Jan Heylen en Kimi Räikkönen, voordat hij het team uitbouwde tot een van de meest gerespecteerde namen in de paddock."],
    stat_years:["Years in karting","Jaar in de karting"],
    stat_all_num:["All","Alle"],
    stat_all:["Categories · MiniMax → DD2","Categorieën · MiniMax → DD2"],
    stat_gf_num:["Multiple","Meerdere"],
    stat_gf:["Championship-winning team","Kampioenschap winnend team"],
    what_eyebrow:["What we do","Wat we doen"],
    what_title:["Three ways to go faster","Drie manieren om sneller te gaan"],
    card1_t:["Racing Team","Raceteam"],
    card1_d:["At the top of European karting. National and international competitions, year-round.","Aan de top van de Europese karting. Nationale en internationale competities, het hele jaar door."],
    card2_t:["Rental","Verhuur"],
    card2_d:["From engines to complete race-ready packages — with full team support trackside.","Van motoren tot complete race-klare pakketten — met volledige teamondersteuning aan de baan."],
    card3_t:["BluePower","BluePower"],
    card3_d:["Race-ready Rotax and IAME X30 engines, dyno services and full rebuilds.","Race-klare Rotax- en IAME X30-motoren, dyno-diensten en volledige revisies."],
    learn:["Learn more →","Meer weten →"],
    team_eyebrow:["The grid","De grid"],
    team_title:["Our drivers","Onze rijders"],
    f_all:["All","Alle"],
    champ_eyebrow:["2025 Season · Championships & results","Seizoen 2025 · Kampioenschappen & resultaten"],
    champ1:["Rotax Grand Finals Winner — DD2","Rotax Grand Finals Winnaar — DD2"],
    champ2:["Rotax Grand Finals 3rd Place — Senior","Rotax Grand Finals 3e Plaats — Senior"],
    champ3:["BNL Champion — DD2","BNL Kampioen — DD2"],
    champ4:["BNL Vice Champion — Senior Max","BNL Vicekampioen — Senior Max"],
    champ5:["RMC Germany Champion","RMC Duitsland Kampioen"],
    news_eyebrow:["From the paddock","Uit de paddock"],
    news_title:["Latest news","Laatste nieuws"],
    follow_fb:["Follow on Facebook","Volg op Facebook"],
    view_post:["View post →","Bekijk post →"],
    news_note:["Feed connects live to facebook.com/daemsracing via the Meta Graph API once the team grants page access — posts shown here are placeholders.","De feed verbindt live met facebook.com/daemsracing via de Meta Graph API zodra het team toegang verleent — getoonde posts zijn voorbeelden."],
    partners:["Trusted partners","Vertrouwde partners"],
    cta_banner:["Want to race with us? Let's talk.","Wil je met ons racen? Laten we praten."],
    cta_banner_btn:["Get in touch →","Neem contact op →"],
    foot_tag:["Belgium's home of championship karting. Racing team, kart & engine rental, and the BluePower engine lab — all under one roof in Geel.","Belgisch thuis van topkarting. Raceteam, kart- & motorverhuur en het BluePower-motorlab — alles onder één dak in Geel."],
    foot_visit:["Visit us","Bezoek ons"],
    foot_hours_l:["Hours","Openingsuren"],
    foot_hours:["Mon–Fri · 09:00–12:00 / 13:00–17:00","Ma–Vr · 09:00–12:00 / 13:00–17:00"],
    foot_contact:["Contact","Contact"],
    foot_join:["Join the team ↑","Word lid ↑"],
    foot_privacy:["Privacy & cookies","Privacy & cookies"],
    contact_eyebrow:["Get in touch","Contact"],
    contact_title:["Race with us","Race met ons mee"],
    contact_intro:["Rental, BluePower engines or a seat in the team — tell us what you are after and we will get straight back to you.","Verhuur, BluePower-motoren of een plaats in het team — laat ons weten wat je zoekt en we nemen meteen contact op."],
    c_visit:["Address","Adres"],
    c_hours:["Mon–Fri · 09:00–12:00 / 13:00–17:00","Ma–Vr · 09:00–12:00 / 13:00–17:00"],
    c_form_name:["Name","Naam"],
    c_form_email:["Email","E-mail"],
    c_form_subject:["Subject","Onderwerp"],
    c_form_message:["Message","Bericht"],
    c_send:["Send message →","Verstuur bericht →"],
    serv_eyebrow:["Services · Rental","Diensten · Verhuur"],
    serv_title:["Race rental, your way","Raceverhuur, op jouw maat"],
    serv_p:["DAEMS RACING offers a complete range of race rental options. From engines to karts, or the complete package with support — we offer you exactly what you want. We provide assistance at regional, national and international competitions.","DAEMS RACING biedt een compleet gamma aan raceverhuuropties. Van motoren tot karts, of het volledige pakket met begeleiding — wij bieden je precies wat je zoekt. We bieden ondersteuning bij regionale, nationale én internationale competities."],
    serv_engines_l:["Engines & chassis","Motoren & chassis"],
    serv_pack_t:["Complete race packages","Complete racepakketten"],
    serv_pack_d:["Engines, karts, or the full package with trackside support — for every level of competition.","Motoren, karts of het volledige pakket met begeleiding aan de baan — voor elk competitieniveau."],
    serv_fun_t:["Karts for Fun","Karts for Fun"],
    serv_fun_d:["Kart rental for non-competitive driving — pure track-day enjoyment.","Kartverhuur voor recreatief rijden — puur plezier op het circuit."],
    bp_eyebrow:["BluePower · Engine Lab","BluePower · Motorlab"],
    bp_title:["The engine lab","Het motorlab"],
    bp_intro:["Our in-house engine lab. Every BluePower unit is built, dynoed and fiched in-house for maximum performance.","Ons eigen motorlab. Elke BluePower-motor wordt in huis gebouwd, gedynod en gefiched voor maximale prestaties."],
    bp_c1_t:["New engines","Nieuwe motoren"],
    bp_c1_d:["Complete new and ready-to-race engines for both Rotax and IAME X30. Stock engines or fully fiched packages for top-end performance.","Complete nieuwe en race-klare motoren voor zowel Rotax als IAME X30. Standaardmotoren of volledig gefichede pakketten voor topprestaties."],
    bp_c2_t:["Dyno & rebuilds","Dyno & revisies"],
    bp_c2_d:["Full and top-end rebuilds for X30 and Rotax. Dyno your engine against one of our team engines and fiche for maximum performance.","Volledige en top-end revisies voor X30 en Rotax. Dyno je motor tegen een van onze teammotoren en fiche voor maximale prestaties."]
  };

  var langEN = document.getElementById('dr-lang-en');
  var langNL = document.getElementById('dr-lang-nl');

  function applyLang(lang){
    var i = lang === 'NL' ? 1 : 0;
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var k = el.getAttribute('data-i18n');
      if(dict[k]) el.textContent = dict[k][i];
    });
    document.documentElement.lang = lang.toLowerCase();
    try{ localStorage.setItem('dr-lang', lang); }catch(e){}
    if(langEN && langNL){
      langEN.classList.toggle('dr-lang-btn--active', lang === 'EN');
      langNL.classList.toggle('dr-lang-btn--active', lang === 'NL');
    }
  }

  document.querySelectorAll('[data-lang]').forEach(function(btn){
    btn.addEventListener('click', function(){ applyLang(btn.getAttribute('data-lang')); });
  });

  var savedLang = 'EN';
  try{ savedLang = localStorage.getItem('dr-lang') || 'EN'; }catch(e){}
  applyLang(savedLang);

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ============ STICKY HEADER ============ */
  var header = document.getElementById('dr-header');
  function onScroll(){
    header.classList.toggle('dr-header--scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  /* ============ CUSTOM CURSOR ============ */
  var cursor = document.getElementById('dr-cursor');
  if(cursor && window.matchMedia('(hover:hover)').matches){
    var cx = 0, cy = 0, tx = 0, ty = 0;
    window.addEventListener('mousemove', function(e){ tx = e.clientX; ty = e.clientY; });
    (function loop(){
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      cursor.style.transform = 'translate(' + (cx - 15) + 'px,' + (cy - 15) + 'px)';
      requestAnimationFrame(loop);
    })();
    document.querySelectorAll('a, button, article').forEach(function(el){
      el.addEventListener('mouseenter', function(){ cursor.classList.add('dr-cursor--active'); });
      el.addEventListener('mouseleave', function(){ cursor.classList.remove('dr-cursor--active'); });
    });
  }

  /* ============ HERO SLIDESHOW ============ */
  var slides = document.querySelectorAll('#dr-slides [data-slide]');
  if(slides.length && !reduce){
    var slideIdx = 0;
    setInterval(function(){
      slides[slideIdx].style.opacity = '0';
      slideIdx = (slideIdx + 1) % slides.length;
      slides[slideIdx].style.opacity = '1';
    }, 5200);
  }

  /* ============ ABOUT VIDEO AUTOPLAY ============ */
  var heroVid = document.querySelector('.dr-story-img video');
  if(heroVid){ heroVid.muted = true; heroVid.loop = true; heroVid.playsInline = true; heroVid.play().catch(function(){}); }

  /* ============ COUNTDOWN ============ */
  var cdTarget = new Date('2026-06-20T09:00:00').getTime();
  function pad(n){ return String(n).padStart(2, '0'); }
  function tick(){
    var diff = Math.max(0, cdTarget - Date.now());
    var d = Math.floor(diff / 86400000); diff -= d * 86400000;
    var h = Math.floor(diff / 3600000); diff -= h * 3600000;
    var m = Math.floor(diff / 60000); diff -= m * 60000;
    var s = Math.floor(diff / 1000);
    var setVal = function(id, v){ var el = document.getElementById(id); if(el) el.textContent = pad(v); };
    setVal('cd-d', d); setVal('cd-h', h); setVal('cd-m', m); setVal('cd-s', s);
  }
  tick();
  setInterval(tick, 1000);

  /* ============ COUNT-UP + REVEAL ON SCROLL ============ */
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(!entry.isIntersecting) return;
      var el = entry.target;
      if(el.hasAttribute('data-count')){
        var tgt = parseInt(el.getAttribute('data-count'), 10);
        if(reduce){
          el.textContent = tgt;
        }else{
          var dur = 1300, t0 = performance.now();
          (function step(t){
            var p = Math.min(1, (t - t0) / dur);
            el.textContent = Math.round(tgt * (1 - Math.pow(1 - p, 3)));
            if(p < 1) requestAnimationFrame(step);
          })(t0);
        }
      }
      if(el.hasAttribute('data-reveal') && !el.closest('[data-class]')){
        el.classList.add('dr-revealed');
      }
      io.unobserve(el);
    });
  }, {threshold: 0.3});

  document.querySelectorAll('[data-count]').forEach(function(el){ io.observe(el); });
  document.querySelectorAll('[data-reveal]').forEach(function(el){
    if(el.closest('[data-class]')) return;
    el.classList.add('dr-reveal');
    io.observe(el);
  });

  /* ============ MOBILE MENU ============ */
  var mobileMenu = document.getElementById('dr-mobile-menu');
  var burgerBtn = document.getElementById('dr-burger-btn');
  var menuClose = document.getElementById('dr-menu-close');

  function openMenu(){
    mobileMenu.classList.add('dr-mobile-menu--open');
    document.body.classList.add('dr-no-scroll');
  }
  function closeMenu(){
    mobileMenu.classList.remove('dr-mobile-menu--open');
    document.body.classList.remove('dr-no-scroll');
  }
  if(burgerBtn) burgerBtn.addEventListener('click', openMenu);
  if(menuClose) menuClose.addEventListener('click', closeMenu);
  document.querySelectorAll('.dr-mobile-link').forEach(function(link){
    link.addEventListener('click', closeMenu);
  });

  /* ============ DRIVER FILTER ============ */
  var filters = document.getElementById('dr-filters');
  var drivers = document.getElementById('dr-drivers');
  if(filters && drivers){
    filters.querySelectorAll('.dr-filter-btn').forEach(function(btn){
      btn.addEventListener('click', function(){
        var val = btn.getAttribute('data-filter');
        filters.querySelectorAll('.dr-filter-btn').forEach(function(b){
          b.classList.toggle('dr-filter-btn--active', b === btn);
        });
        drivers.querySelectorAll('[data-class]').forEach(function(card){
          var show = val === 'all' || card.getAttribute('data-class') === val;
          card.style.display = show ? '' : 'none';
        });
      });
    });
  }

  /* ============ CONTACT FORM (mailto) ============ */
  var contactForm = document.getElementById('dr-contact-form');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      var f = e.currentTarget;
      var get = function(name){ var el = f.elements[name]; return el ? String(el.value).trim() : ''; };
      var name = get('name'), email = get('email'), subject = get('subject') || 'Other', message = get('message');
      var subj = '[' + subject + '] Website enquiry' + (name ? ' — ' + name : '');
      var body = 'Name: ' + name + '\nEmail: ' + email + '\n\n' + message;
      window.location.href = 'mailto:info@daemsracing.com?subject=' + encodeURIComponent(subj) + '&body=' + encodeURIComponent(body);
    });
  }
})();
