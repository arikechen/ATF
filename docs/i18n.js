(function () {
  const DEFAULT_LANG = 'en';
  const STORAGE_KEY = 'atf_lang';
  function detectBrowserLang() {
    const raw = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (raw.startsWith('zh')) {
      if (raw.includes('hant') || raw.includes('tw') || raw.includes('hk') || raw.includes('mo')) return 'zh-Hant';
      return 'zh-Hans';
    }
    if (raw.startsWith('ja')) return 'ja';
    return 'en';
  }

  let currentLang = localStorage.getItem(STORAGE_KEY) || detectBrowserLang();
  let translations = {};
  let isReady = false;

  const listeners = [];

  function t(key) {
    return translations[key] !== undefined ? translations[key] : key;
  }

  function translateElement(el) {
    const key = el.getAttribute('data-i18n');
    if (key && translations[key] !== undefined) {
      el.innerHTML = translations[key];
    }
    const attrKey = el.getAttribute('data-i18n-attr');
    if (attrKey) {
      attrKey.split(',').forEach(pair => {
        const parts = pair.split(':');
        if (parts.length === 2) {
          const attrName = parts[0].trim();
          const transKey = parts[1].trim();
          if (translations[transKey] !== undefined) {
            el.setAttribute(attrName, translations[transKey]);
          }
        }
      });
    }
  }

  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(translateElement);
    document.querySelectorAll('[data-i18n-attr]').forEach(translateElement);
    document.documentElement.lang = currentLang;
    ['meta.title', 'title'].forEach(k => {
      if (translations[k] !== undefined) document.title = translations[k];
    });
    const metaMap = {
      'meta[name="description"]': 'meta.description',
      'meta[property="og:title"]': 'meta.og_title',
      'meta[property="og:description"]': 'meta.og_description',
      'meta[name="twitter:title"]': 'meta.og_title',
      'meta[name="twitter:description"]': 'meta.og_description'
    };
    Object.entries(metaMap).forEach(([sel, key]) => {
      const el = document.querySelector(sel);
      if (el && translations[key] !== undefined) el.setAttribute('content', translations[key]);
    });
    isReady = true;
    listeners.forEach(fn => fn(currentLang));
  }

  async function loadLanguage(lang) {
    try {
      const res = await fetch('locales/' + lang + '.json');
      if (!res.ok) throw new Error('Failed to load locale');
      const data = await res.json();
      translations = data;
      currentLang = lang;
      localStorage.setItem(STORAGE_KEY, lang);
      applyTranslations();
    } catch (e) {
      console.warn('Failed to load locale ' + lang + ', falling back to ' + DEFAULT_LANG, e);
      if (lang !== DEFAULT_LANG) {
        await loadLanguage(DEFAULT_LANG);
      } else {
        translations = {};
        currentLang = DEFAULT_LANG;
        applyTranslations();
      }
    }
  }

  async function switchLanguage(lang) {
    if (lang === currentLang) return;
    await loadLanguage(lang);
  }

  function onLanguageChanged(fn) {
    listeners.push(fn);
    if (isReady) fn(currentLang);
  }

  function setupLangSwitcher() {
    const langBtn = document.getElementById('lang-btn');
    const langDropdown = document.getElementById('lang-dropdown');
    if (!langBtn || !langDropdown) return;

    langBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      langDropdown.classList.toggle('open');
    });

    langDropdown.querySelectorAll('[data-lang]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const lang = btn.getAttribute('data-lang');
        switchLanguage(lang);
        langDropdown.classList.remove('open');
      });
    });

    document.addEventListener('click', function () {
      langDropdown.classList.remove('open');
    });

    onLanguageChanged(function (lang) {
      const langName = t('lang.' + lang);
      if (langName !== 'lang.' + lang) {
        langBtn.textContent = langName;
      }
      langDropdown.querySelectorAll('[data-lang]').forEach(function (btn) {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    loadLanguage(currentLang);
    setupLangSwitcher();
  });

  window.i18n = {
    t: function (key) { return t(key); },
    switchLanguage: switchLanguage,
    onLanguageChanged: onLanguageChanged,
    getCurrentLang: function () { return currentLang; }
  };
})();
