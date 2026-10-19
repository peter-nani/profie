# Multitheme, Multilingual Python Developer Portfolio — Build & Deployment Specification

## 1. Project goal

Build one fast, static, text-only professional portfolio/resume website for **V Prasanna Kumar**, optimized to present him as a strong **Senior Python Developer / Backend Engineer / Automation Specialist** to a global audience.

The site must have:
- At least **10 selectable visual themes**, switchable instantly using a visible **“Change theme”** control.
- An on-demand language selector, with a clear path to add more languages.
- Brief, high-signal resume content rather than a long CV dump.
- No images, avatars, videos, decorative image backgrounds, or image-dependent layouts. Use typography, whitespace, borders, gradients, color, and CSS shapes only.
- Static hosting: no application server, database, login, or runtime API required.
- SEO and AI-discovery (AIO) foundations, accessible UI, performance, and a security-minded deployment process.

**Important:** No website can be guaranteed to become popular or rank first. The implementation should make the content discoverable, useful, technically sound, and easy to share. Popularity requires ongoing distribution, credible proof of work, and updates.

## 2. Resume source of truth

Use the supplied resume as the source of truth. Keep claims faithful to it and do not invent metrics, certifications, clients, awards, or responsibilities.

### Identity and positioning
- **Name:** V Prasanna Kumar
- **Headline:** Senior Python Developer | Backend Engineer | Automation Specialist
- **Location:** Hyderabad, India
- **Email:** prasannakumar.vundaty@gmail.com
- **GitHub:** https://github.com/peter-nani
- **Experience wording:** “10+ years of experience” (as stated in the supplied resume; update only after confirming the preferred wording).
- **Education:** B.Tech, Computer Science & Engineering, Jawaharlal Nehru Technological University, Hyderabad, 2013.

### Brief professional summary
Senior Python developer focused on backend systems, API design, automation, and data-driven applications. Builds maintainable services with Python, Django, Django REST Framework, and FastAPI, with experience across PostgreSQL, AWS, Docker, Kubernetes, CI/CD, and production support.

### Core skills
- **Languages & backend:** Python, Django, Django REST Framework, FastAPI, Flask, Pydantic, HTTPX
- **APIs & identity:** REST API design, API versioning, OAuth/JWT authentication
- **Data:** PostgreSQL, MySQL, ORM, schema design, query optimization
- **Cloud:** AWS (Lambda, S3, EC2, SNS, SQS, API Gateway, CloudWatch), Azure, GCP
- **Delivery & infrastructure:** Docker, Kubernetes, Helm, Terraform, Ansible, Jenkins, Git/GitHub, CI/CD
- **Messaging & automation:** Kafka, RabbitMQ, Celery, Python automation
- **Operations:** pytest, logging, monitoring, production troubleshooting, Nginx, Gunicorn, Uvicorn

### Selected experience
**Softility Solutions — Senior Python Developer**  
*Jun 2023–Present | Network Device Monitoring (Cox Communications project)*  
Built and supported Python/FastAPI services for telemetry retrieval, PostgreSQL persistence, Kafka-based metrics and alerts, automated tests, Docker/Kubernetes deployments, CI/CD, cloud deployments, secrets management, monitoring, and production troubleshooting.

**Zensar Technologies — Senior Python Developer**  
*Apr 2021–Apr 2023 | Network Analytics Platform (RAIDN/Cisco project)*  
Developed Django/DRF APIs, PostgreSQL schemas and queries, authentication/permissions, automated tests, containerized deployments, Nginx/HTTPS configuration, CI/CD, database migrations, monitoring, and production support.

**Sonata Software — Python Developer**  
*Oct 2016–Jan 2021 | Railway ticketing, maintenance, AWS migration and automation projects*  
Developed Django APIs for scheduling, booking, and maintenance; integrated REST payment gateways; built reporting and bulk-processing scripts; supported migration of legacy applications to AWS EC2 and RDS.

**TSK Logistics Pvt Ltd — Automation Engineer / Python Developer**  
*Oct 2013–Aug 2016 | Logistics tracking platform*  
Created Python scripts for vehicle tracking and automated reporting, and maintained MySQL schemas for tracking data.

### Professional strengths
Backend/API development, system design, integrations, automation, database optimization, cloud delivery, CI/CD, containerization, testing, observability, production support, incident analysis, and Agile collaboration.

### Content safeguards
- Do not publish the phone number or email in multiple locations unnecessarily. Provide an explicit contact section and an accessible email link.
- Do not add fake testimonials, client logos, profile photos, project outcomes, performance numbers, “AI expert” claims, or certifications.
- Treat client/project names as resume-provided experience, not as an endorsement by those organizations.
- Do not expose private project source code, credentials, internal system names, or employer-confidential details.
- Consider publishing a professional contact form only if a secure form provider is intentionally added. The core website must remain static and must not pretend a form works without a backend/provider.

## 3. Information architecture

Keep the page concise and scannable. Use a single-page layout with semantic sections and anchor navigation:

1. **Hero**
   - Name
   - Role headline
   - One-sentence value proposition
   - Primary actions: “Contact me”, “View GitHub”, and optionally “Download resume” if a sanitized PDF is supplied.
2. **About**
   - 2–3 short sentences maximum.
3. **Core expertise**
   - Compact text chips or grouped lists, not progress bars or unsubstantiated skill percentages.
4. **Selected experience**
   - Four compact role summaries with employer, title, dates, project context, and 1–2 concise bullets each.
5. **Engineering focus**
   - APIs, automation, data systems, cloud delivery, reliability, and production operations.
6. **Education**
   - Degree, institution, year.
7. **Contact**
   - Email and GitHub, plus location at city/country level.
8. **Footer**
   - Copyright year generated at build time or with a tiny safe client-side expression; accessible theme/language controls can remain in the header.

Do not include a long “all responsibilities” section on the public landing page. The downloadable resume can hold the detailed chronology.

## 4. Ten or more visual themes

Implement at least **12 named themes** so the requirement is clearly exceeded. Each theme must preserve readable contrast, spacing, responsive behavior, focus indicators, and the same content/structure. Themes must be genuinely visually distinct—not just a different background color.

Suggested themes:
1. **Midnight Terminal** — deep charcoal, green/cyan accents, code-inspired typography details.
2. **Executive Navy** — navy, white, restrained blue accents, conservative corporate style.
3. **Nordic Light** — white, slate, subtle blue, generous whitespace.
4. **Electric Violet** — dark violet, lavender and magenta accents.
5. **Emerald Studio** — forest green, mint, warm neutral surfaces.
6. **Sunset Gradient** — coral, amber, plum accents; CSS gradients only.
7. **Monochrome Editorial** — black, white, gray, large typographic hierarchy.
8. **Oceanic Teal** — deep teal, aqua accents, clean geometric dividers.
9. **Warm Sand** — cream, brown, muted terracotta, editorial serif/sans pairing.
10. **Cyberpunk Contrast** — near-black, neon cyan and pink, used carefully for readability.
11. **Royal Blue** — saturated blue, pale blue surfaces, crisp typography.
12. **Soft Rose** — muted rose, burgundy, warm white, elegant editorial layout.

### Theme behavior
- Provide a visible button labelled **“Change theme”** and a compact theme menu/list with theme names.
- Theme switching must happen immediately without page reload and without changing the URL unnecessarily.
- Use CSS custom properties/design tokens for colors, borders, shadows, radius, spacing, and typography. Themes should alter multiple tokens, not only one color.
- Support keyboard navigation, visible focus, and accessible labels.
- Respect `prefers-reduced-motion`; avoid flashing and excessive animation.
- Set the browser color-scheme appropriately where possible.
- Default to a high-contrast professional theme.
- Optional: persist the visitor’s selection in `localStorage`; if persistence is implemented, handle storage exceptions and never store personal data. The site must still work when storage is blocked.
- Include a “System/default” option if useful, but do not count it toward the 12 named themes.

## 5. On-demand language switching

Build a language selector in the header. Keep the architecture ready for adding more languages.

### Initial language scope
- English is the canonical source language and default.
- Structure translation dictionaries for **English, Hindi, and Telugu**.
- Translate all interface labels and all visible portfolio copy for each supported language. Do not translate employer names, product names, framework names, URLs, email addresses, or dates in a way that harms recognition.
- Do not machine-translate at runtime. Store reviewed translations in local static files/dictionaries.
- If a translation has not been reviewed, do not display a partially translated page; fall back to English for that language or section.
- Update the document `lang` attribute whenever the language changes (`en`, `hi`, `te`).
- Keep the selected language in sync with accessibility labels, page title/description where appropriate, and navigation.
- Ensure Hindi/Telugu fonts render cleanly with robust system-font fallbacks; no image-based text.
- Language switching must be immediate and must not require a server or API call.

### SEO and language URLs
- Prefer separate crawlable static routes such as `/en/`, `/hi/`, `/te/` (or equivalent generated pages) if the framework supports them cleanly.
- Add correct `hreflang` alternate links only for pages that genuinely exist and contain reviewed translations.
- If the implementation uses one URL and client-side text swapping only, understand that crawlers may not reliably index every language variant. Separate static routes are preferred for SEO.
- Keep canonical URLs consistent and avoid duplicate-content confusion.

## 6. Recommended implementation

Choose a lightweight static architecture. Preferred option:
- **Astro** with static output, semantic HTML, and minimal client-side JavaScript.
- Plain CSS custom properties for the theme system.
- A small, isolated client-side controller for theme and language switching.
- TypeScript where it helps prevent invalid theme/language keys.
- No database, authentication system, or server-side API.

Acceptable alternative:
- Vite + React with static build output, provided the final HTML is meaningfully rendered and the team addresses SEO/prerendering. Prefer Astro for content-first pages.

### Suggested project structure
```text
portfolio/
├── public/
│   ├── robots.txt
│   ├── favicon.svg              # text/CSS-style vector mark; no raster image
│   ├── manifest.webmanifest     # optional, no image requirement
│   └── resume.pdf               # optional, reviewed public copy only
├── src/
│   ├── components/
│   │   ├── SiteHeader.astro
│   │   ├── ThemeSwitcher.astro
│   │   ├── LanguageSwitcher.astro
│   │   ├── ExperienceSection.astro
│   │   └── SiteFooter.astro
│   ├── content/
│   │   └── resume.ts            # canonical structured resume content
│   ├── i18n/
│   │   ├── en.ts
│   │   ├── hi.ts
│   │   └── te.ts
│   ├── styles/
│   │   ├── tokens.css
│   │   ├── themes.css
│   │   └── global.css
│   ├── pages/
│   │   ├── index.astro
│   │   ├── en/index.astro
│   │   ├── hi/index.astro
│   │   └── te/index.astro
│   └── scripts/
│       ├── theme-switcher.ts
│       └── language-switcher.ts
├── tests/
│   ├── themes.spec.ts
│   ├── i18n.spec.ts
│   ├── accessibility.spec.ts
│   └── seo.spec.ts
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

The exact structure may change, but preserve separation of content, translations, themes, components, tests, and static assets.

## 7. SEO requirements — “great Python developer”

SEO should be honest and focused on likely search intent, not keyword stuffing.

### Page metadata
Use a distinct title and meta description per language route. Example English metadata:
- **Title:** `V Prasanna Kumar | Senior Python Developer | Django, FastAPI & Backend APIs`
- **Description:** `Senior Python Developer in Hyderabad, India, with 10+ years of experience in Python, Django, FastAPI, REST APIs, PostgreSQL, AWS, Docker, Kubernetes and automation.`
- One clear H1 containing the person’s name and/or role.
- Correct heading hierarchy; no skipped levels solely for styling.
- A concise, unique page title and description on every indexable route.
- Canonical URL per language route.
- `hreflang` only for existing, reviewed language versions.
- Open Graph and social-sharing metadata using text/solid-color metadata where practical; do not create image assets.
- A clean URL structure and descriptive internal anchor links.

### Content strategy
Use natural terms that recruiters and clients actually search for:
- Senior Python Developer
- Python Backend Engineer
- Django Developer
- FastAPI Developer
- REST API Development
- PostgreSQL
- Python Automation
- AWS and Docker/Kubernetes
- Hyderabad, India; remote/global availability only if confirmed

Use these terms in useful sentences, titles, section headings, and experience descriptions. Do not repeat keywords unnaturally or claim “best,” “#1,” or “world-famous.”

### Structured data
Add valid JSON-LD for `Person` and `WebSite` where appropriate. Include only truthful fields:
- `name`
- `jobTitle`
- `url` once the final domain is known
- `sameAs` for the public GitHub URL
- `address` at locality/country level only if desired
- `knowsAbout` for technologies supported by the resume

Validate structured data before launch. Do not add ratings, reviews, awards, or credentials that do not exist. Avoid fake `ProfessionalService`/business claims if no business is being represented.

### Crawlability and technical SEO
- Generate static HTML for core text; do not hide the entire resume behind client-side JavaScript.
- Add `robots.txt` and an XML sitemap with canonical production URLs.
- Ensure pages return correct status codes and use clean internal links.
- Do not block CSS or JS required to render content.
- Use descriptive link text and meaningful anchor IDs.
- Add a custom 404 page.
- Ensure all language pages are reachable via normal links, not only the selector.
- Submit the sitemap to Google Search Console and Bing Webmaster Tools after the production domain is chosen.
- Check Search Console coverage, indexing, Core Web Vitals, and query performance after launch.

## 8. AIO / AI-search discoverability

Treat AIO as **AI-search optimization / answer-engine discoverability**, not a guaranteed ranking trick.

- Put a concise, factual summary near the top that can be quoted accurately by search and answer engines.
- Use clear headings and direct answers to likely queries: who the developer is, core stack, experience, location, and areas of focus.
- Keep all important information as indexable HTML text.
- Use descriptive, factual project summaries without confidential details.
- Maintain consistency between page copy, metadata, structured data, GitHub profile, and public resume.
- Provide useful public GitHub repositories, READMEs, examples, and technical articles where possible; link only to existing resources.
- Publish original, genuinely useful technical notes over time (e.g., Django API design, FastAPI testing, PostgreSQL performance, Python automation, Docker/Kubernetes deployment lessons) only when they reflect real experience.
- Keep dates and technical claims current; add a visible “Last updated” date when the content is reviewed.
- Avoid keyword stuffing, mass-generated near-duplicate pages, fabricated credentials, fake citations, and schema markup that contradicts visible content.
- Do not create `llms.txt` as a substitute for accessible HTML, sitemap, or authoritative content. It may be considered as an optional experiment, not a core requirement.

## 9. Accessibility, responsive design, and quality

- Meet **WCAG 2.2 AA** as a target.
- Ensure text contrast is at least 4.5:1 for normal text and 3:1 for large text and meaningful UI boundaries.
- Test every theme for contrast; neon themes must not sacrifice readability.
- Provide skip-to-content, semantic landmarks, descriptive button names, keyboard-only support, and visible focus.
- Use native buttons and selects where possible; do not build inaccessible custom controls.
- Do not communicate state using color alone.
- Respect reduced motion and zoom/reflow.
- Make the layout usable at 320px width through large desktop sizes.
- Support print styles so a clean, text-only resume can be printed or saved as PDF.
- Do not use images, icon fonts, or remote decorative assets. Prefer text labels and CSS.
- Load no third-party scripts by default.

## 10. Security requirements for a static website

A static site has a smaller attack surface, but “no vulnerabilities” cannot be guaranteed. Apply defense in depth:

- No backend, database, login, user-generated content, or secrets in the frontend.
- Never place API keys, private tokens, passwords, or deployment secrets in source code or public build files.
- Keep dependencies minimal and pinned/locked with a committed lockfile.
- Run dependency and static analysis checks in CI; review and update dependencies routinely.
- Avoid `innerHTML` for content updates; use safe text rendering and framework escaping.
- Validate theme/language values against a fixed allowlist; never turn arbitrary URL/input values into CSS or HTML.
- Avoid unnecessary third-party packages and analytics. If analytics is later added, disclose it and configure privacy appropriately.
- Enforce HTTPS at the host/CDN and redirect HTTP to HTTPS.
- Configure security headers at the host/CDN where supported: Content-Security-Policy (start with a restrictive policy and test it), `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, and a suitable `Permissions-Policy`. Use `frame-ancestors 'none'` via CSP or `X-Frame-Options: DENY` if the site need not be embedded.
- Set a conservative CSP compatible with the actual build. Do not copy a policy blindly; test it against the deployed site. Prefer no inline scripts/styles unless nonce/hash handling is supported by the static host.
- Use a static host with automatic TLS, deployment previews, and rollback support.
- Configure registrar/domain account MFA and least-privilege access.
- Protect the default branch and require checks before production deployment.
- Do not claim the site is “fully secure”; document residual risks and monitoring.

## 11. Testing checklist

Automate as much as practical:
- Build succeeds from a clean checkout.
- All 12 themes render and switch without errors.
- Every theme passes contrast checks and keyboard focus is visible.
- Language switcher works for English, Hindi, Telugu; document language changes correctly.
- Each language route contains the appropriate translated content and metadata.
- Navigation, email, GitHub, and optional resume download links work.
- No broken links or missing pages.
- Static HTML contains key resume text when JavaScript is disabled.
- JSON-LD parses and agrees with visible page content.
- Canonical and `hreflang` links are correct.
- `robots.txt` and sitemap point to the production domain.
- Mobile layout, keyboard-only navigation, screen reader labels, print layout, and reduced-motion behavior are tested.
- Run Lighthouse (performance, accessibility, best practices, SEO), an accessibility checker, dependency audit, and secret scan.
- Inspect browser console and network requests; ensure no image or unexpected third-party requests exist.
- Verify security headers on the deployed domain.

## 12. Deployment plan

### Phase 1 — Content and domain
1. Confirm preferred public domain and whether the phone number should be published.
2. Verify the public experience wording (“10+ years”) and all dates/project names.
3. Review every public sentence for confidentiality and accuracy.
4. Choose the canonical domain and HTTPS provider.
5. Prepare English as canonical content and review Hindi/Telugu translations.

### Phase 2 — Build
1. Create the Astro static project.
2. Implement the semantic single-page portfolio and structured resume data.
3. Build the 12-theme token system and accessible theme switcher.
4. Add the language dictionaries and static language routes.
5. Add metadata, JSON-LD, sitemap, robots.txt, 404, and print CSS.
6. Add automated tests and CI checks.
7. Build to static output and inspect generated HTML.

### Phase 3 — Security and QA
1. Run clean build and test suite.
2. Run dependency audit, secret scanning, and static analysis.
3. Check theme contrast, keyboard navigation, translations, links, and mobile layout.
4. Validate structured data, sitemap, canonical URLs, and language alternates.
5. Review host security headers and HTTPS redirects.
6. Fix all high-severity findings before release.

### Phase 4 — Staging
1. Deploy a preview/staging build.
2. Test all routes and themes on mobile and desktop.
3. Confirm the site works with JavaScript disabled for core content.
4. Check 404 behavior, caching, redirects, and security headers.
5. Get final content approval.

### Phase 5 — Production
1. Connect the chosen domain to the static host.
2. Enable HTTPS and HTTP-to-HTTPS redirects.
3. Apply security headers and caching configuration.
4. Publish the sitemap and verify canonical URLs.
5. Submit the site to Google Search Console and Bing Webmaster Tools.
6. Test the live production build and record the release version.

### Phase 6 — Ongoing growth and maintenance
- Review search performance monthly.
- Update resume content when roles or skills change.
- Publish one high-quality, experience-based technical article when there is a useful topic; prioritize quality over frequency.
- Keep GitHub projects documented and link to them from relevant sections.
- Patch dependencies and review security alerts.
- Re-test all themes, languages, and metadata after content/build changes.
- Use analytics only if needed and with appropriate privacy notice.

## 13. Suggested hosting choices

Choose one provider; do not add infrastructure that a static site does not need:
- **Cloudflare Pages** — suitable for static output, HTTPS, custom domains, and edge delivery.
- **Netlify** — straightforward static deployment, preview builds, redirects, and headers configuration.
- **GitHub Pages** — simple static hosting; check custom-domain, header, and redirect requirements before choosing it.

Use a CDN/static host, not a VPS with a running application server, unless there is a separate business reason. The site does not need a database or Docker container in production.

## 14. Acceptance criteria

The project is accepted only when:
- [ ] One website offers at least 12 distinctly styled, selectable themes.
- [ ] Theme switching is immediate, accessible, and stable.
- [ ] English, Hindi, and Telugu can be selected; each has complete reviewed copy and appropriate metadata.
- [ ] The page is brief, professional, text-only, responsive, and printable.
- [ ] Core resume content exists in generated HTML without depending on JavaScript.
- [ ] SEO metadata, JSON-LD, canonical URLs, sitemap, and robots.txt are valid.
- [ ] AIO-friendly factual summaries and clear headings are present.
- [ ] Security and accessibility checks are documented and pass the agreed release threshold.
- [ ] Staging and production deployments, HTTPS, headers, rollback, and search-console setup are documented.
- [ ] No fake metrics, endorsements, certifications, or unverified claims are published.

## 15. Final instruction for the implementation agent

Build the site from this specification and the supplied resume. Prioritize factual accuracy, high-quality typography, fast static rendering, excellent mobile behavior, accessibility, 12 genuinely distinct themes, and fully reviewed language support. Keep the landing page concise. Do not add images, backend services, user accounts, or invented accomplishments. If the final domain, phone publication preference, translation review, or a resume claim is uncertain, use a safe default and list it as a decision requiring confirmation rather than inventing an answer.
