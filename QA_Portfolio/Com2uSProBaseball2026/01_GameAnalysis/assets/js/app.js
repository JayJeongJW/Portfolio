(function(){
  var HEADER_H = 92;
  var TOTAL = 20;
  var sections = [];
  for (var i = 1; i <= TOTAL; i++) {
    var el = document.getElementById('s' + i);
    if (el) sections.push(el);
  }
  var navpills = document.querySelectorAll('.navpill');
  var progressBar = document.getElementById('progressBar');
  var activeCounter = document.getElementById('activeCounter');
  var activeChapterEl = document.getElementById('activeChapter');
  var activeLabelEl = document.getElementById('activeLabel');
  var prevBtn = document.getElementById('prevBtn');
  var nextBtn = document.getElementById('nextBtn');
  var lightboxOverlay = document.getElementById('lightbox-overlay');
  var lightboxImg = document.getElementById('lightbox-img');

  var chapters = {
    1:'',2:'',3:'Ⅰ',4:'Ⅰ',5:'Ⅰ',
    6:'Ⅱ',7:'Ⅱ',8:'Ⅱ',9:'Ⅱ',10:'Ⅱ',11:'Ⅱ',
    12:'Ⅲ',13:'Ⅲ',14:'Ⅲ',15:'Ⅲ',
    16:'Ⅳ',17:'Ⅳ',18:'Ⅳ',19:'Ⅳ',20:''
  };
  var labels = {
    1:'컴투스프로야구2026 Live 퍼즐 분석',2:'목차',3:'Live 퍼즐 개요',4:'분석 대상 선정 이유',5:'핵심 결론',
    6:'이용 흐름',7:'운영 주기와 보상',8:'필수조건과 보너스',9:'카드 사용처별 가치',
    10:'스타의 역할과 사용처',11:'판타지 포인트와 상점',12:'구조적 장점',13:'정보 구조의 한계',14:'개선 제안',
    15:'오류 위험 구간',16:'테스트 범위와 환경',17:'테스트 우선순위',18:'대표 테스트 시나리오',
    19:'종합 결론',20:'마무리'
  };

  var currentActive = 1;

  function setActive(n) {
    if (n === currentActive) return;
    currentActive = n;
    navpills.forEach(function(p) {
      var page = Number(p.getAttribute('data-page'));
      if (page === n) p.classList.add('active');
      else p.classList.remove('active');
    });
    progressBar.style.width = Math.round((n / TOTAL) * 100) + '%';
    activeCounter.textContent = n + ' / ' + TOTAL;
    activeChapterEl.textContent = chapters[n] || '';
    activeLabelEl.textContent = labels[n] || '';
    prevBtn.setAttribute('href', '#s' + Math.max(1, n - 1));
    nextBtn.setAttribute('href', '#s' + Math.min(TOTAL, n + 1));
  }

  function goTo(n) {
    n = Math.max(1, Math.min(TOTAL, n));
    var el = document.getElementById('s' + n);
    if (!el) return;
    var y = el.getBoundingClientRect().top + window.scrollY - HEADER_H;
    window.scrollTo({ top: y, behavior: 'smooth' });
    if (history.replaceState) history.replaceState(null, '', '#s' + n);
    setActive(n);
  }

  navpills.forEach(function(p) {
    p.addEventListener('click', function(e) {
      e.preventDefault();
      goTo(Number(p.getAttribute('data-page')));
    });
  });
  document.querySelectorAll('[data-go]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      goTo(Number(link.getAttribute('data-go')));
    });
  });
  prevBtn.addEventListener('click', function(e) { e.preventDefault(); goTo(currentActive - 1); });
  nextBtn.addEventListener('click', function(e) { e.preventDefault(); goTo(currentActive + 1); });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') goTo(currentActive + 1);
    if (e.key === 'ArrowLeft') goTo(currentActive - 1);
  });

  var ticking = false;
  function computeActive() {
    var refLine = window.scrollY + HEADER_H + 8;
    var found = 1;
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].offsetTop <= refLine) found = i + 1;
      else break;
    }
    setActive(found);
    ticking = false;
  }
  window.addEventListener('scroll', function() {
    if (!ticking) {
      requestAnimationFrame(computeActive);
      ticking = true;
    }
  }, { passive: true });

  // initial state from hash
  (function initFromHash() {
    var m = /^#s(\d+)$/.exec(window.location.hash);
    if (m) {
      var n = Number(m[1]);
      requestAnimationFrame(function() { goTo(n); });
    } else {
      computeActive();
    }
  })();

  // lightbox
  function openLightbox(src) {
    lightboxImg.src = src;
    lightboxOverlay.classList.add('open');
  }
  function closeLightbox() {
    lightboxOverlay.classList.remove('open');
    lightboxImg.src = '';
  }
  document.querySelectorAll('.lightbox-img').forEach(function(img) {
    img.addEventListener('click', function() {
      openLightbox(img.getAttribute('data-src') || img.getAttribute('src'));
    });
  });
  lightboxOverlay.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeLightbox();
  });
})();
