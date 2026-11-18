# Golf Nets Unlimited: Keyword Gap, Content Fixes, Service Pages and Blog Launch

**Site:** golfnetsunlimited.com · **Date:** 18 November 2026 · **Standard:** Novatore SEO Playbook v1.4
**Status:** built and verified locally, not yet deployed

| Pages before | Pages after | New service pages | New guides | H1s rewritten |
|---|---|---|---|---|
| 9 | **19** | **4** + `/services` hub | **4** + `/blogs` hub | **7** |

> **Before deploying:** a named Golf Nets Unlimited expert must fact-check and approve the 4 guides and the new cost figure (playbook rules 7 and 9). See section 6.

---

## 1. Summary

The technical base from the 3 November audit was already solid: every page is prerendered, with a unique title, a canonical and JSON-LD. The gaps were in **keywords and content**:

- **H1s were weak, or competed with each other.** Homeowners used the same H1 as Home ("Golf Ball Deterrent Netting Systems"), so the two pages competed for the same search. Driving Range used "Why Nets Unlimited?", HOA used "Home Owners Associations", FAQ used "FAQS" and Gallery used "Gallery".
- **No page answered several high-intent searches:** golf netting installation, golf net replacement and repair, buying netting only, window and patio protection, and cost.
- **No content for pre-purchase questions** (cost, liability, HOA approval, repair vs replace).
- **The trust claims didn't agree.** Driving Range said "over 25 years of experience", which doesn't fit the confirmed founding year of 2003.

We fixed all of these without changing the site's design.

---

## 2. How we checked

| Playbook step | What we ran | Result |
|---|---|---|
| Phase 2 keyword research | Semrush keyword reports were called, but the account has **no API units**, so no volume or difficulty data was available. Live Google results were checked for each target topic. | Intent confirmed. Volumes still missing (section 6). |
| Phase 1 competitor and SERP check | Results for cost, height, liability, HOA approval, installation and repair searches. Lines Sunscreens (Gilbert, AZ) page reviewed. | These searches return supplier product pages, forums and general HOA articles. Few specialist contractor guides, so there is room to rank. |
| Phase 4 / 5 checks | Crawl of all 19 prerendered pages: titles, descriptions, H1s, word counts, schema, internal links, sitemap. Visual check at 1440, 1366 and 390 px. | All pass (section 5). |
| Loop A content standard | Each guide checked against the post standard and pre-publish checklist. | Passes, except a named author (pending). |

### Keyword gap, page by page

| Page | Primary topic | Gap found | Fix |
|---|---|---|---|
| `/` | golf ball deterrent netting | Hero text had no location; no links to services or guides | Answer-first hero with Phoenix, Arizona; services and guides sections added |
| `/homeowners` | residential golf ball netting | Same H1 as Home; no cost, no FAQs | H1 "Residential Golf Ball Netting for Homes", 4 FAQs (incl. cost), links to services and guides |
| `/driving-range` | driving range and golf course netting | H1 "Why Nets Unlimited?"; wrong "25 years" claim | Keyword H1, question-led H2s, "more than 20 years", 4 FAQs, service links |
| `/hoa` | HOA golf netting | H1 had no topic keyword | H1 "HOA Golf Ball Netting & Guidelines", "what we provide" grid, 3 FAQs, guide link |
| `/other-nets` | sport, pet, shade and decorative netting | Slogan as H1 | Keyword H1; slogan kept as subheading |
| `/faq`, `/gallery`, `/about` | — | Generic H1s; em dashes | "Golf Netting FAQs", "Golf Netting Project Gallery", "About Golf Nets Unlimited"; founding year added |
| *(none)* | golf netting installation | No page | New service page |
| *(none)* | golf net replacement / repair | Answered only inside one FAQ | New service page |
| *(none)* | buy golf netting / netting only | Answered only inside one FAQ | New service page |
| *(none)* | golf ball window / patio protection | One paragraph on Homeowners; a local competitor ranks a dedicated page | New service page |

---

## 3. New service pages

Each page targets a buyer search that none of the audience pages (Homeowners, HOA, Driving Range) covers, so they don't compete with those pages. Each has an answer-first hero, question-led sections, FAQs (FAQPage schema), Service schema, a 3-level breadcrumb, and links to related services and guides.

| URL | H1 | Words |
|---|---|---|
| `/services` | Golf Netting Services | 567 |
| `/services/golf-netting-installation` | Golf Netting Installation | 821 |
| `/services/golf-net-replacement-repair` | Golf Net Replacement & Repair | 707 |
| `/services/golf-netting-only` | Buy Custom Golf Netting | 596 |
| `/services/window-patio-golf-ball-protection` | Window & Patio Golf Ball Protection | 652 |

All facts come from the site's existing content (materials, warranty, process, deposit, install time, HOA support).

---

## 4. Blog module and the four guides

**Blog hub:** `/blogs` ("Golf Netting Guides & Blog"). **Blog** sits in the main navigation after About Us, and in the mobile menu and footer.

**Every guide follows the playbook post standard:**
- answer-first intro, key takeaways and a table of contents;
- question-led H2s and a comparison table;
- a link to the money page in the first half of the post;
- every outside fact linked to its source;
- 3 FAQs, one CTA, an author box and an AI-assistance disclosure;
- BlogPosting, FAQPage and BreadcrumbList schema.

There are no em dashes and no invented numbers, quotes, customers or credentials.

| Guide | Target search | Supports | Sources |
|---|---|---|---|
| `/blogs/golf-ball-netting-cost` | golf ball netting cost for home | `/homeowners`, installation | Nets Unlimited Houzz listing; InvestigateTV (Jan 2026) |
| `/blogs/golf-ball-damage-to-house-who-pays` | golf ball damage to house who pays | `/homeowners`, window/patio | IA Magazine (2022); Florida Condo & HOA Law Blog; InvestigateTV |
| `/blogs/hoa-approval-golf-netting` | HOA approval golf netting | `/hoa` | FirstService Residential (2024) |
| `/blogs/golf-net-repair-or-replacement` | golf net repair / replacement | replacement & repair | Sport Systems (2014) |

We skipped golf net height, mesh and pole planning on purpose: netsunlimited.com already has that guide, and the two sister sites would compete for it.

---

## 5. Verification

| Check | Result |
|---|---|
| `tsc --noEmit` | Passes |
| Build and prerender | 19 routes plus `404.html`, each with full HTML, metadata and JSON-LD |
| Titles / descriptions | 0 duplicates. Descriptions are 140–160 characters. 3 titles are 61–64 characters (house style, Low priority) |
| H1s | Exactly 1 per page |
| Internal links | 0 broken, 0 orphans. Each guide is linked from 6–8 pages, and each service page from all 19 |
| Sitemap | 9 URLs. The 10 new `/services` and `/blogs` pages are built and linked on the site but **kept out of the sitemap for now** (`sitemapPages` in `src/seo.ts`). |
| Hosting | Nested routes added to `vercel.json` and `.htaccess` |
| Visual | Desktop 1440 and 1366 (full nav fits), mobile 390 (no horizontal scroll) |

---

## 6. Open items

| Item | Why | Owner |
|---|---|---|
| **Expert fact-check and approval of the 4 guides before deploy** | Playbook rules 7 and 9 and Google's AI content guidance. Until a named person signs the guides, the author is "the Golf Nets Unlimited team". Then add an author page with a real photo. | Client expert + account lead |
| **Confirm the $5,000–$8,000 cost range** | Taken from Nets Unlimited's own Houzz listing. The site FAQ says "a few hundred to several thousand". Both are now shown, split by project type. | Client |
| **Confirm "founded in 2003" and "more than 20 years"** | 2003 was confirmed on the Nets Unlimited project. The old Driving Range copy said 25 years and the original GoDaddy copy said 15. | Client |
| Keyword volumes | Semrush API units are used up. Top up units, or use Keyword Planner or Ahrefs, to add volumes and prioritise the next guides. | SEO team |
| After deploy | Submit the sitemap in Search Console and Bing. Inspect `/services`, `/blogs` and the 8 new detail URLs. | SEO team |
| Track results | Review at 30, 90 and 180 days. Add GA4 events on the "Get a free estimate" CTAs. | Analyst |
| Next guides | Practice bay / hitting net at home, golf netting colors that disappear, driving range net replacement. | Content lead |

---

## 7. Files changed

- **New:**
  - `src/data/services.ts`, `src/data/faqs.ts`, `src/data/blogMeta.ts`, `src/data/blogContent.tsx`
  - `src/components/ContentBlocks.tsx`
  - `src/pages/Services.tsx`, `src/pages/Blog.tsx`
- **Updated:**
  - `src/seo.ts`: routes, meta, breadcrumbs, and Service / BlogPosting / FAQPage schema
  - `src/App.tsx`, `src/components/Nav.tsx`, `src/components/Footer.tsx`, `src/index.css`
  - Pages: Home, Homeowners, DrivingRange, HOA, OtherNets, FAQ, Gallery, About
- **Config:** `vercel.json`, `public/.htaccess`, `public/llms.txt`, `public/sitemap.xml`

*Prepared with Claude Code following the Novatore SEO Playbook v1.4. All AI-drafted content is marked for human review before publishing.*
