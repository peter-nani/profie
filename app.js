(() => {
  const copy = window.PORTFOLIO_COPY;
  const html = document.documentElement;
  const body = document.body;
  const language = document.querySelector('#language');
  const view = document.querySelector('#view');
  const themePicker = document.querySelector('.theme-picker');
  const themeButtons = [...document.querySelectorAll('[data-theme-value]')];
  const themeNames = Object.fromEntries(themeButtons.map(button => [button.dataset.themeValue, button.textContent.trim()]));
  const validLanguages = Object.keys(copy);
  const validViews = ['signal', 'editorial', 'studio'];
  const titleBase = 'V Prasanna Kumar — Senior Python Developer';

  function safelyGet(key) {
    try { return localStorage.getItem(key); } catch { return null; }
  }

  function safelySet(key, value) {
    try { localStorage.setItem(key, value); } catch {}
  }

  function setLanguage(code) {
    if (!validLanguages.includes(code)) code = 'en';
    const text = copy[code];
    html.lang = code;
    html.dir = ['ar', 'ur'].includes(code) ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i]').forEach(element => {
      const value = text[element.dataset.i];
      if (typeof value === 'string') element.textContent = value;
    });
    document.title = code === 'en' ? `${titleBase} | Django, FastAPI & Backend APIs` : `${text.headline.split(' / ')[0]} | V Prasanna Kumar`;
    const description = document.querySelector('meta[name="description"]');
    description.content = `${text.summary} ${text.contactLocation}.`;
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.href = `/${code}/`;
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogTitle) ogTitle.content = document.title;
    if (ogDescription) ogDescription.content = text.intro;
    language.value = code;
    safelySet('profile-language', code);
  }

  function setTheme(name) {
    if (!themeNames[name]) name = 'midnight';
    html.dataset.theme = name;
    body.dataset.theme = name;
    document.querySelector('.theme-current-name').textContent = themeNames[name];
    themeButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.themeValue === name)));
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.content = getComputedStyle(html).getPropertyValue('--bg').trim();
    safelySet('profile-theme', name);
  }

  function setView(name) {
    if (!validViews.includes(name)) name = 'signal';
    body.dataset.view = name;
    view.value = name;
    safelySet('profile-view', name);
  }

  language.addEventListener('change', () => {
    setLanguage(language.value);
    history.replaceState(null, '', `/${language.value}/`);
  });

  themeButtons.forEach(button => button.addEventListener('click', () => {
    setTheme(button.dataset.themeValue);
    themePicker.open = false;
  }));

  view.addEventListener('change', () => {
    setView(view.value);
    const url = new URL(location.href);
    url.searchParams.set('view', view.value);
    history.replaceState(null, '', url);
  });

  const pathLanguage = location.pathname.split('/').filter(Boolean)[0];
  setLanguage(validLanguages.includes(pathLanguage) ? pathLanguage : (safelyGet('profile-language') || 'en'));
  setTheme(safelyGet('profile-theme') || html.dataset.theme || 'midnight');
  const requestedView = new URLSearchParams(location.search).get('view');
  setView(validViews.includes(requestedView) ? requestedView : (safelyGet('profile-view') || 'signal'));
  document.querySelector('#year').textContent = new Date().getFullYear();

  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    html.classList.add('has-motion');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
  }
})();
