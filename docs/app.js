// AT.field Landing Page Interactive Script

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinksContainer = document.getElementById('nav-links-container');

  if (mobileMenuBtn && navLinksContainer) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinksContainer.classList.toggle('mobile-active');
      mobileMenuBtn.classList.toggle('active');
      const expanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true' || false;
      mobileMenuBtn.setAttribute('aria-expanded', !expanded);
    });
    navLinksContainer.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinksContainer.classList.remove('mobile-active');
        mobileMenuBtn.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
});

// 2. Showcase Carousel — auto-advance every 6 秒，hover 暫停
const SHOWCASE_INTERVAL_MS = 6000;
let showcaseIndex = 0;
let showcaseTimer = null;
let showcaseProgressTimer = null;
let showcaseProgressStart = 0;
let showcasePaused = false;

function showcaseSlides() {
  return document.querySelectorAll('.showcase-slide');
}
function showcaseDots() {
  return document.querySelectorAll('.showcase-dot');
}
function showcaseCaptions() {
  return document.querySelectorAll('.showcase-caption-card');
}

function showcaseRender() {
  showcaseSlides().forEach((s, i) => s.classList.toggle('active', i === showcaseIndex));
  showcaseCaptions().forEach((c, i) => c.classList.toggle('active', i === showcaseIndex));
  showcaseDots().forEach((d, i) => d.classList.toggle('active', i === showcaseIndex));
}

function showcaseGo(i) {
  const slides = showcaseSlides();
  if (!slides.length) return;
  showcaseIndex = ((i % slides.length) + slides.length) % slides.length;
  showcaseRender();
  showcaseResetTimer();
}

function showcaseStep(dir) {
  const slides = showcaseSlides();
  if (!slides.length) return;
  showcaseGo(showcaseIndex + dir);
}

let isDesktop = window.innerWidth > 900;

function showcaseResetTimer() {
  clearInterval(showcaseTimer);
  clearInterval(showcaseProgressTimer);
  if (showcasePaused || isDesktop) return; // 桌面端滾動接管，不啟動自動計時器
  showcaseProgressStart = Date.now();
  showcaseUpdateProgress();
  showcaseTimer = setInterval(() => showcaseStep(1), SHOWCASE_INTERVAL_MS);
  showcaseProgressTimer = setInterval(showcaseUpdateProgress, 100);
}

function showcaseUpdateProgress() {
  if (isDesktop) return; // 桌面端進度條由滾動百分比控制
  const bar = document.querySelector('#showcase-progress > span');
  if (!bar) return;
  const elapsed = Date.now() - showcaseProgressStart;
  const pct = Math.min(100, (elapsed / SHOWCASE_INTERVAL_MS) * 100);
  bar.style.width = pct + '%';
}

// 滾動觸發式 (Scroll-driven Scrollytelling) 邏輯
function handleScroll() {
  if (!isDesktop) return;
  
  const showcaseSec = document.getElementById('showcase-sec');
  if (!showcaseSec) return;
  
  const rect = showcaseSec.getBoundingClientRect();
  const viewHeight = window.innerHeight;
  const navbarOffset = 72; // 對應 4.5rem 的固定導覽列高度
  
  // 當區塊頂部觸及導覽列下方，且底部尚未離開視窗底時
  if (rect.top <= navbarOffset && rect.bottom >= viewHeight) {
    const totalScrollable = rect.height - viewHeight + navbarOffset;
    const currentScroll = navbarOffset - rect.top;
    const progress = Math.min(1, Math.max(0, currentScroll / totalScrollable));
    
    const slides = showcaseSlides();
    if (slides.length) {
      // 根據 progress 將進度均分給投影片 (0 ~ 6)
      const stage = Math.min(slides.length - 1, Math.floor(progress * slides.length));
      
      if (stage !== showcaseIndex) {
        showcaseIndex = stage;
        showcaseRender();
      }
      
      // 連動進度條到滾動百分比
      const bar = document.querySelector('#showcase-progress > span');
      if (bar) {
        bar.style.width = (progress * 100) + '%';
      }
    }
  } else if (rect.top > navbarOffset) {
    // 還沒滾到此區塊時，回到第一張且進度歸零
    if (showcaseIndex !== 0) {
      showcaseIndex = 0;
      showcaseRender();
    }
    const bar = document.querySelector('#showcase-progress > span');
    if (bar) bar.style.width = '0%';
  } else if (rect.bottom < viewHeight) {
    // 滾過去此區塊時，停在最後一張且進度全滿
    const slides = showcaseSlides();
    if (slides.length && showcaseIndex !== slides.length - 1) {
      showcaseIndex = slides.length - 1;
      showcaseRender();
    }
    const bar = document.querySelector('#showcase-progress > span');
    if (bar) bar.style.width = '100%';
  }
}

function handleResize() {
  const wasDesktop = isDesktop;
  isDesktop = window.innerWidth > 900;
  
  if (isDesktop !== wasDesktop) {
    if (isDesktop) {
      // 切換成桌面端時，清除計時器
      clearInterval(showcaseTimer);
      clearInterval(showcaseProgressTimer);
    } else {
      // 切換成行動端時，重啟自動輪播
      showcaseResetTimer();
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const showcase = document.getElementById('showcase');
  if (!showcase) return;
  
  showcase.addEventListener('mouseenter', () => {
    if (isDesktop) return; // 桌面端不需暫停計時器
    showcasePaused = true;
    clearInterval(showcaseTimer);
    clearInterval(showcaseProgressTimer);
  });
  showcase.addEventListener('mouseleave', () => {
    if (isDesktop) return;
    showcasePaused = false;
    showcaseResetTimer();
  });
  
  // 監聽滾動與尺寸縮放事件
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);
  
  // 初始化渲染
  showcaseRender();
  showcaseResetTimer();
});
