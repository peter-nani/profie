const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const template = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const localeContext = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'translations.js'), 'utf8'), localeContext);
const translations = localeContext.window.PORTFOLIO_COPY;
const escapeHtml = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');

for (const [locale, dictionary] of Object.entries(translations)) {
  let page = template.replace('<html lang="en">', `<html lang="${locale}"${['ar','ur'].includes(locale) ? ' dir="rtl"' : ''}>`);
  page = page.replace(/(<([a-z][\w:-]*)([^>]*\bdata-i="([^"]+)"[^>]*)>)[\s\S]*?(<\/\2>)/gi, (whole, open, tag, attributes, key, close) => {
    return Object.hasOwn(dictionary, key) ? `${open}${escapeHtml(dictionary[key])}${close}` : whole;
  });
  const title = locale === 'en' ? 'V Prasanna Kumar | Senior Python Developer & Backend Engineer' : `${dictionary.headline.split(' / ')[0]} | V Prasanna Kumar`;
  const description = Array.from(`${dictionary.summary} ${dictionary.contactLocation}.`).slice(0, 160).join('');
  const openGraphLocale = {en:'en_IN',hi:'hi_IN',te:'te_IN',zh:'zh_CN',de:'de_DE',ur:'ur_PK',es:'es_ES',pt:'pt_BR',ru:'ru_RU',ar:'ar_SA',fr:'fr_FR',ko:'ko_KR'}[locale];
  page = page.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`);
  page = page.replace(/(<meta name="description" content=")[^"]*(">)/, `$1${escapeHtml(description)}$2`);
  page = page.replace(/(<meta property="og:title" content=")[^"]*(">)/, `$1${escapeHtml(title)}$2`);
  page = page.replace(/(<meta property="og:description" content=")[^"]*(">)/, `$1${escapeHtml(dictionary.intro)}$2`);
  page = page.replace(/(<meta property="og:locale" content=")[^"]*(">)/, `$1${openGraphLocale}$2`);
  page = page.replace(/(<meta property="og:url" content=")[^"]*(">)/, '$1./$2');
  page = page.replace(/(<meta name="twitter:title" content=")[^"]*(">)/, `$1${escapeHtml(title)}$2`);
  page = page.replace(/(<meta name="twitter:description" content=")[^"]*(">)/, `$1${escapeHtml(dictionary.intro)}$2`);
  page = page.replace('"name":"V Prasanna Kumar — Senior Python Developer"', `"name":${JSON.stringify(title)}`);
  page = page.replace('"jobTitle":"Senior Python Developer | Backend Engineer | Automation Specialist"', `"jobTitle":${JSON.stringify(dictionary.headline.replaceAll(' / ', ' | '))}`);
  page = page.replace('"description":"Senior Python developer with 10+ years of experience building maintainable services with Python, Django, Django REST Framework and FastAPI."', `"description":${JSON.stringify(dictionary.summary)}`);
  page = page.replace('<link rel="canonical" href="./en/">', '<link rel="canonical" href="./">');
  page = page.replace(/(<link rel="alternate" hreflang="([^"]+)" href=")\.\/[^\"]+("\s*>)/g, (match, prefix, language, suffix) => `${prefix}../${language === 'x-default' ? 'en' : language}/${suffix}`);
  page = page.replaceAll('"url":"./en/"', '"url":"./"');
  page = page.replace(/\b(href|src)="\.\/(favicon\.svg|theme-init\.js|styles\.css|themes\.css|views\.css|translations\.js|app\.js)"/g, '$1="../$2"');
  const directory = path.join(root, locale);
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(path.join(directory, 'index.html'), page);
}
