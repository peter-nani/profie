# V Prasanna Kumar — Developer Portfolio

A text-only static portfolio with 12 visual themes, 3 design versions, and language options for English, Hindi, Telugu, Chinese, German, Urdu, Spanish, Portuguese, Russian, Arabic, French, and Korean. The resume copy is rendered in each language route as static HTML; the selector also switches languages without a reload. No images, backend, analytics, or third-party scripts are used.

The layout uses Bootstrap 5.3.8 grid and form utilities with a custom design system. Its compiled stylesheet loads from jsDelivr with Subresource Integrity; no Bootstrap JavaScript is used. The preview/deployed site needs access to jsDelivr for Bootstrap styling.

## Run locally

From this directory, regenerate the language pages with `node scripts/build-locales.js`, then run `python3 -m http.server 8000`. Open `http://localhost:8000/en/` (or any supported language route such as `/zh/`, `/ar/`, or `/ko/`) in a browser. The root file is also available at `/`.

## GitHub Pages deployment

This is a static site: GitHub Pages serves the checked-in HTML, CSS, JavaScript, and locale folders. It does not need or use a Python/Node server at runtime. In **Repository Settings → Pages**, choose **Deploy from a branch**, select the branch containing these files, and choose `/(root)` as the folder. The root `index.html`, `.nojekyll`, and all language folders must be in that selected branch and folder. Do not configure a server start command or a backend service. GitHub Pages publishes the static files directly.

The only Node script, `scripts/build-locales.js`, is a build-time helper: run `node scripts/build-locales.js` after translation changes, then commit the generated locale `index.html` files. The deployed site does not execute this script. `_headers` is a Cloudflare Pages configuration file and is ignored by GitHub Pages; it is not needed to render this site.

For Cloudflare Pages, Netlify, or another static host, publish the repository root. `_headers` contains a restrictive starting policy for hosts that support this format. Confirm that the host applies headers and test its CSP against the deployed page. HTTPS and HTTP-to-HTTPS redirects should be enabled by the host.

Before production, replace `YOUR-DOMAIN.example` in `robots.txt` and `sitemap.xml` with the selected canonical HTTPS domain; update canonical, hreflang, and JSON-LD URLs in the route pages to match. Content uses the supplied resume claims, including “10+ years”. The supplied phone number is published as a click-to-call and WhatsApp contact.

Translations live in `translations.js`. Run `node scripts/build-locales.js` after copy changes to regenerate all localized static routes, titles, descriptions, canonicals, and JSON-LD URLs. Have fluent speakers review every translation before publication. `theme-init.js` applies a saved theme before styles load; storage failures fall back to the default palette.

## Maintenance notes

- Theme and language preferences are stored locally; storage failures are ignored.
- Choose among Signal, Editorial, and Studio design versions independently of the color theme.
- Reveal transitions use IntersectionObserver and stay visible when JavaScript is unavailable or reduced motion is requested.
- Print styles provide a text-only save-as-PDF layout.
- `_headers` is a host configuration example. Header support differs by provider.
- After choosing a domain, validate sitemap, structured data, security headers, accessibility, and all theme contrast levels before launch.
