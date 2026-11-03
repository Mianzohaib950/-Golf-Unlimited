# Golf Nets Unlimited: SEO, Performance & Agent-Readiness Audit

**Site:** https://golfnetsunlimited.com · **Date:** 3 November 2026 · **Stack:** React 19 + Vite 8 + Tailwind v4 (Vercel / Apache hosting)

This report covers what was wrong, what was fixed in code, how it was measured, and what still needs a human decision. The audit checklists come from four open-source SEO toolkits. Only the checks that apply to this site are used, and section 6 maps each finding to the toolkit it came from.

---

## 1. Results: before vs after

Lighthouse **13.6.0**, mobile profile (simulated Moto G / slow 4G), run locally against the production build of each version. The local server behaves like the Vercel config.

| Page | Performance | Accessibility | Best Practices | SEO | Agentic Browsing |
|---|---|---|---|---|---|
| `/` | 91 → **100** | 96 → **100** | 100 → **100** | 92 → **100** | 50 → **100** |
| `/homeowners` | 64 → **99** | 93 → **100** | 100 → **100** | 92 → **100** | 61 → **100** |
| `/driving-range` | 67 → **99** | 93 → **100** | 100 → **100** | 92 → **100** | 61 → **100** |
| `/hoa` | 70 → **100** | 93 → **100** | 100 → **100** | 92 → **100** | 61 → **100** |
| `/other-nets` | 64 → **97** | 93 → **100** | 100 → **100** | 92 → **100** | 61 → **100** |
| `/gallery` | 69 → **97** | 98 → **100** | 100 → **100** | 92 → **100** | 61 → **100** |
| `/about` | 74 → **100** | 98 → **100** | 100 → **100** | 92 → **100** | 61 → **100** |
| `/faq` | 76 → **100** | 95 → **100** | 100 → **100** | 92 → **100** | 61 → **100** |
| `/contact` | 77 → **100** | 86 → **100** | 100 → **100** | 92 → **100** | 36 → **100** |

**Core Web Vitals (lab):**

| Metric (threshold) | Before | After |
|---|---|---|
| CLS (≤ 0.1) | **0.28** on every inner page | 0 – 0.03 |
| LCP (≤ 2.5 s) | 2.9 – 4.7 s on inner pages | 0.8 – 2.6 s |
| TBT | 260 – 430 ms | 0 – 40 ms |

**Notes on the scores**
- `/other-nets` and `/gallery` score 97 because their main content is a photo. On the simulated slow-4G connection, a photo takes about 2.6 s to arrive. They are still well inside the green band.
- These are lab scores. Real-user (CrUX) numbers in Search Console and PageSpeed Insights depend on the CDN, the visitor's device, and what is inside the GTM container. Re-check PageSpeed Insights on the live URL after deploying.

**Other checks run in Chrome after the changes:**
- All 9 routes load and hydrate with **zero console errors** and no failed requests.
- Client-side navigation, the back button, the FAQ accordion, gallery switching and lightbox, form validation, the mobile menu and cookie Reject/Accept all work.
- There is no horizontal scroll at 390 px wide.
- `tsc --noEmit` passes, and the dev server still works.

---

## 2. Critical issues found and fixed

### 2.1 Every URL served the homepage's HTML (title, description, canonical)
- **Problem:** The site was a client-only single-page app. The build copied the *homepage* `index.html` into `/about`, `/faq` and the other routes. So every URL's raw HTML carried the homepage `<title>`, meta description, `og:*` tags, and **`<link rel="canonical" href="https://golfnetsunlimited.com/">`**.
  - The correct values were only applied later by JavaScript.
  - Google may honour the raw-HTML canonical. That tells it every page is a duplicate of the homepage.
  - Crawlers that don't run JavaScript (GPTBot, ClaudeBot, PerplexityBot, social link previews) saw the same homepage tags on every URL and an empty `<div id="root"></div>`.
- **Fix:** Added build-time prerendering (`prerenderRoutesPlugin` in [vite.config.ts](vite.config.ts), with [src/entry-server.tsx](src/entry-server.tsx)). Every route is now written as its own HTML file, and each file contains:
  - the full page content (about 130–800 words per page, previously 0);
  - a unique title, description, canonical, Open Graph and Twitter tags;
  - its own JSON-LD;
  - a preload for that page's hero image.
- The browser now *hydrates* that HTML ([src/main.tsx](src/main.tsx)) instead of rebuilding it.
- All SEO data now lives in one file, [src/seo.ts](src/seo.ts), shared by the build and the running app.

### 2.2 Layout shift of 0.28 on every inner page
- **Problem:** Inner pages are lazy-loaded. The page first painted an empty placeholder, then swapped in the real content, which pushed the footer down. CLS was 0.28 (the limit is 0.1).
- **Fix:** Prerendered HTML now contains the final content. The prerender resolves the lazy chunks first, so there is no fallback-then-swap step. CLS is now 0 – 0.03.

### 2.3 Unknown URLs returned the homepage with status 200 (soft 404)
- **Problem:** The Apache `.htaccess` rewrote every unknown path to `index.html`, and the app showed the homepage.
- **Fix:**
  - Added a real 404 page ([src/pages/NotFound.tsx](src/pages/NotFound.tsx)). The build writes it to `404.html` with `noindex`.
  - `.htaccess` now uses `ErrorDocument 404`. Vercel serves `404.html` automatically.
  - Verified: `/nope` returns **404**.

### 2.4 robots.txt failed validation
- **Problem:** The non-standard `LLMs:` line made Lighthouse's "robots.txt is valid" audit fail on every page. This was the 92 SEO score.
- **Fix:** Rewrote [public/robots.txt](public/robots.txt):
  - one `User-agent: *` group that allows all search and AI crawlers;
  - `Disallow: /api/`;
  - the sitemap reference;
  - the llms.txt location moved into a comment.

### 2.5 FAQ answers were not in the HTML
- **Problem:** Only the open answer was rendered, so crawlers and AI agents could read one of the 10 answers.
- **Fix:** In [src/pages/FAQ.tsx](src/pages/FAQ.tsx), all answers are now always in the DOM and hidden with the `hidden` attribute when collapsed.
  - Questions are `<h2><button aria-expanded aria-controls>`.
  - FAQ data moved to `src/seo.ts` and is also emitted as `FAQPage` JSON-LD.

### 2.6 Most calls-to-action were not links
- **Problem:** Home cards, hero buttons, gallery tiles, all `CTASection` buttons, and the Gallery and FAQ CTAs were `<button onClick>`. Crawlers and agents cannot follow them, so internal link equity was lost.
- **Fix:** New [src/components/PageLink.tsx](src/components/PageLink.tsx) renders a real `<a href>`. It keeps instant client-side navigation, and Ctrl/⌘-click still opens a new tab. Used across Home, CTASection, Gallery, FAQ and NotFound.

### 2.7 Images
- **Favicon:** It was a **760 KB PNG** downloaded on every page. It is now `favicon-48.png` (2 KB), plus `apple-touch-icon.png`, 192/512 icons and [public/site.webmanifest](public/site.webmanifest).
- **Gallery "Other Nets":** 127 images were served at up to 2560 px wide (**30.9 MB**) into tiles about 400 px wide.
  - Generated 640 px WebP thumbnails in `public/images/optimized/nets-unlimited/` (**7.7 MB**, −75%).
  - The full-size files still load in the lightbox.
- **Hero images:**
  - Added 760 px mobile versions plus `srcset` for Homeowners, HOA, Driving Range and Other Nets (mobile weight −60 to −75%).
  - The About and Gallery LCP images are no longer `loading="lazy"`; they get `fetchpriority="high"` and a preload.
- **Alt text:** Gallery alt text changed from "gallery IMG-001" to descriptive text per image or category.

### 2.8 Google Tag Manager blocked the main thread
- **Problem:** GTM accounted for about 600 ms of main-thread work in the load window. Most of the TBT came from it.
- **Fix:** In [index.html](index.html), GTM now loads on the visitor's first interaction (scroll, tap, key) or 3.5 s after the page `load` event, whichever comes first. The container ID and the `dataLayer` are unchanged.
- **Trade-off:** A visitor who leaves within about 3.5 s of load *without scrolling, tapping or typing* will not be recorded.

### 2.9 The cookie banner did nothing
- **Problem:** "Reject" and "Accept All" both only hid the banner. GTM tracked either way, and the banner came back every session.
- **Fix:**
  - The choice is stored in `localStorage` ([src/pages/Home.tsx](src/pages/Home.tsx)).
  - Clicking sends Google Consent Mode v2 `consent update` (`analytics_storage`, `ad_storage`, `ad_user_data`, `ad_personalization`).
  - [index.html](index.html) sets a `consent default` before GTM, so a returning visitor who rejected stays rejected.
- **Action needed:** The GTM tags must respect Consent Mode. Check in GTM → Admin → Container settings → "Enable consent overview".

### 2.10 Duplicate meta tags
- **Problem:** The Figma `site.json` plugin injected a second `meta description`, a second `og:title`, `og:description` and `og:image`, a second `twitter:card` and `twitter:image`, and a second favicon on top of the ones already in `index.html`.
- **Fix:** The plugin now skips any tag the page already has ([vite.config.ts](vite.config.ts)). Each page now has exactly one of each.

---

## 3. Accessibility fixes (which also help agents)

AI browsing agents read the accessibility tree, so these fixes also raised the Agentic Browsing score (`agent-accessibility-tree` audit).

| Issue (before) | Fix |
|---|---|
| Text contrast below 4.5:1 (grey at 40–60% opacity) on most pages | Body and label grey raised to `rgba(26,26,24,0.68)`. It passes WCAG AA on both page backgrounds. |
| 7 of 9 pages had no `<main>` landmark | `App.tsx` wraps all pages in a single `<main id="main-content">`. Home and FAQ no longer nest their own. |
| Contact form inputs had no associated labels | Added `htmlFor`/`id`, `name`, `autocomplete`, `required`, `aria-invalid` and `aria-describedby` linking to the error text |
| Contact success state was a bare ✓ icon | Added a `role="status"` "Thank you…" message |
| Mobile menu button had no state | Added `aria-expanded`, `aria-controls` and an "Open/Close menu" label. The panel is now a `<nav>`. |
| No skip link, no visible focus style | Added a "Skip to content" link and a global `:focus-visible` outline ([src/index.css](src/index.css)) |
| Gallery filter and lightbox | Filter buttons get `aria-pressed`. The lightbox focuses its close button when it opens. |
| No reduced-motion handling | Added `prefers-reduced-motion` rules |
| Generic link text ("Learn More") flagged by Lighthouse | Changed to "Contact Us to Learn More" on Driving Range |

---

## 4. Structured data, AI search, and crawler files

| Item | Before | After |
|---|---|---|
| JSON-LD | One static `LocalBusiness` on every URL, with no hours, no `sameAs` and no per-page entity | Per-page `@graph`: `HomeAndConstructionBusiness` (address, phone, email, Mon–Fri 07:00–16:00 hours, areas served, parent org, `sameAs` social profiles, offer catalog with service URLs), `WebSite`, a page entity (`WebPage`, `AboutPage`, `ContactPage`, or `FAQPage` with all 10 Q&As), and `BreadcrumbList` on inner pages |
| `llms.txt` | A list of page links only | Adds a citable fact sheet: licence number, address, phone, hours, service area, materials, warranty terms, cost range, deposit and install timeline, and netting-only sales. All of it is taken from the site's own content. |
| `sitemap.xml` | Static, no `lastmod` | Regenerated at each build from the route list, with `lastmod` |
| Hosting headers ([vercel.json](vercel.json), [.htaccess](public/.htaccess)) | Only `X-Robots-Tag` and cache headers | Adds HSTS, `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy` and COOP. Each route maps to its own prerendered file. `noindex` on `404.html`. Trailing-slash URLs 301 to the canonical form on Apache. |
| Titles and descriptions | Some over 60 or 160 characters, and the homepage description differed between files | All titles ≤ 60 characters and descriptions 140–160 characters, from one source |

---

## 5. Smaller fixes

- [api/contact.js](api/contact.js):
  - Added a hidden **honeypot** field. Bots that fill it get a fake "ok" and no email is sent.
  - Control characters (CR/LF) are stripped from input, so submitted values can't inject mail headers.
- Contact page:
  - Removed the false "protected by reCAPTCHA" notice (no reCAPTCHA is installed).
  - "Open today 07:00 am – 04:00 pm" was wrong on weekends. It now reads "Monday – Friday, 7:00 am – 4:00 pm".
  - The phone number is now a `tel:` link.
- Typo fixed: "driving rage" → "driving range".
- Instagram link in structured data changed from `http` to `https`.
- The LinkedIn URL in the footer (`/company/no-access/...`) looks broken. It was left out of `sameAs`. See 7.2.

---

## 6. How each toolkit was used (checks relevant to this site only)

### AgriciDaniel/claude-seo
- **`seo-technical`:**
  - JS rendering: "serve canonical, meta robots, structured data, title, and meta description in the initial server-rendered HTML", and "canonical in raw HTML must match any canonical injected by JS". These drove fixes 2.1 and 2.2.
  - Security headers list → section 4.
  - Consistent trailing slashes → `.htaccess`.
  - CWV thresholds LCP ≤ 2.5 s and CLS ≤ 0.1 → section 1.
- **`seo-agentic`:**
  - `server-rendered` (primary content present without JS) → 2.1.
  - `http-404` (unknown URLs return a real 404) → 2.3.
  - `llms-txt` → section 4.
  - The Lighthouse Agentic Browsing audits `agent-accessibility-tree` and `cumulative-layout-shift` → sections 2.2 and 3.
- **`seo-schema`:**
  - JSON-LD validation rules: `@context` and `@type` present, absolute URLs. Recommended `LocalBusiness` fields: address, telephone, openingHours.
  - Its note that **Google retired FAQ rich results on 7 May 2026**. `FAQPage` is kept here only as machine-readable Q&A for AI answer engines. No rich snippet is expected from it.
  - `HowTo` was not used (deprecated).

### zubair-trabzada/geo-seo-claude
- **`geo-crawlers`:**
  - Checked robots.txt for AI crawler access (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, Amazonbot and others). Result: all are allowed, with no blanket blocks.
  - Checked meta robots and `X-Robots-Tag`, which are `index, follow`.
  - Flagged the client-only SPA as a problem for GPTBot, ClaudeBot and PerplexityBot (limited JS rendering) → 2.1.
- **`geo-llmstxt`** → the llms.txt rewrite.
- **Citability:** self-contained, fact-rich answers. This is why FAQ answers are in the HTML and llms.txt has a facts block.
- **Schema templates:** Organization / LocalBusiness / WebSite.

### coreyhaines31/marketingskills
- **`seo-audit`:**
  - Canonical tags on all pages and self-referencing.
  - Soft 404s.
  - One H1 per page.
  - Title ≈ 50–60 and description 150–160 characters.
  - Descriptive alt text.
  - "Important pages within 3 clicks" and crawlable internal links → 2.6.
  - Sitemap containing only canonical URLs.
  - Local business: NAP consistency and local schema.
- **`ai-seo`:**
  - "Render meaningful content without heavy JavaScript".
  - "Use semantic HTML: `<main>`, `<nav>`… alt text".
  - "Label every interactive element".
  - The wildcard `User-agent: *` approach instead of named bot groups.
  - FAQ section, and `Organization` plus `FAQPage` schema.
  - "Keep the most authoritative content ungated".

### SelmiAbderrahim/rankme.fast
- This repo is a hosted SaaS (rank tracking, PSI/CrUX, Search Console, backlinks). It is not a codebase checklist; its README names "26 automated checks" without listing them.
- What applied here:
  - its PageSpeed/CrUX approach (lab + field) → section 1 and the recommendation to confirm with field data;
  - its Search Console and cannibalisation monitoring → section 7.

---

## 7. Not done: needs a decision or access

These were not changed, either because they are business or content decisions or because they need accounts this audit had no access to.

**7.1 Content (client decision)**
- Weak H1s: FAQ uses "FAQS", Driving Range uses "Why Nets Unlimited?", and HOA uses "Home Owners Associations". Keyword-led H1s would help, for example "Golf Netting FAQs", "Driving Range & Golf Course Netting" and "HOA Golf Netting".
- Contact and Gallery have little text (about 130–150 words).
- There is no author or "last updated" information. The ai-seo checklist rates both as citation signals.

**7.2 Links and profiles**
- Confirm or replace the LinkedIn URL. `company/no-access/...` does not look like a public page.
- Then add it to `sameAs` in [src/seo.ts](src/seo.ts).

**7.3 Off-site (outside the codebase)**
- Google Business Profile: hours, categories and photos, matching the NAP above.
- Reviews.
- Citations and directories (Houzz and Yelp already exist).
- Backlinks.
- Brand mentions on YouTube, Reddit and LinkedIn (from the geo-seo-claude brand-mention check).

**7.4 After deploy**
- Submit the new sitemap in Google Search Console and Bing Webmaster Tools.
- Use URL Inspection on 2–3 inner pages to confirm Google sees the new canonical.
- Watch Core Web Vitals field data for 28 days.
- IndexNow (claude-seo) is optional for faster Bing indexing.

**7.5 Content-Security-Policy**
- Not added. A strict CSP needs the full list of domains the GTM container loads, which is not visible from the code.

**7.6 AI training policy**
- robots.txt currently allows *all* AI crawlers, including training bots, which matches what the site did before.
- To opt out of training while staying visible in AI search, add `Disallow: /` groups for `GPTBot`, `ClaudeBot`, `Google-Extended` and `CCBot` only. Leave `OAI-SearchBot`, `Claude-SearchBot` and `PerplexityBot` allowed.

**7.7 Not verifiable offline**
- WebMCP and Agentic Resource Discovery files. Lighthouse marks them informational, and they are still draft standards.

---

## 8. Files changed

**New:**
- `src/seo.ts`, `src/entry-server.tsx`
- `src/components/PageLink.tsx`, `src/pages/NotFound.tsx`
- `public/site.webmanifest`, the favicon and icon PNGs
- 4 mobile hero JPGs
- 127 gallery WebP thumbnails in `public/images/optimized/nets-unlimited/`

**Modified:**
- `index.html`, `vite.config.ts`, `vercel.json`
- `public/.htaccess`, `public/robots.txt`, `public/llms.txt`, `public/sitemap.xml`
- `api/contact.js`
- `src/App.tsx`, `src/main.tsx`, `src/index.css`
- `src/components/Nav.tsx`, `src/components/CTASection.tsx`
- all 9 page components

**Notes:**
- `npm run build` now produces prerendered HTML for all routes, plus `404.html` and a fresh `sitemap.xml`. No build script or dependency changes were needed.
- The new `.png` and `.webp` files are tracked by **Git LFS** (per `.gitattributes`), so commit with LFS enabled.
