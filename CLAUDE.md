@AGENTS.md

# Advercity — Marketing Agency Website

## Project Overview

Website for **Advercity**, a marketing agency based in Nis, Serbia with 25+ years of experience. The site targets local and national clients searching for marketing services in Serbian.

- **Live domain:** advercity.rs
- **Language:** Serbian (lang="sr"), no English version
- **Primary color:** `#ED1C24` (matches the dot on "i" in logo)
- **Slogan:** "Creating Brand Authenticity" (kept in English, not translated)

## Tech Stack

- **Framework:** Next.js 15 (App Router, React 19, RSC by default)
- **Styling:** Tailwind CSS v4 with `@theme inline` in `app/globals.css` (NO tailwind.config.ts)
- **Animations:** Framer Motion (only on Hero, ServicesGrid, StatsCounter)
- **Forms:** react-hook-form + Zod validation
- **Icons:** lucide-react (custom SVGs for social icons in Footer)
- **Images:** next/image with AVIF/WebP, sharp for optimization
- **Analytics:** @vercel/analytics + @vercel/speed-insights
- **Utilities:** clsx + tailwind-merge via `lib/utils.ts` `cn()` helper

## Design Rules

- **Minimalist red + white only** — no dark backgrounds, no black sections
- **Oversized centered typography** — large font-black headings
- **Massive whitespace** — generous padding (py-24+)
- **Rectangular buttons** — no border-radius, uppercase, wide tracking
- **Edge-to-edge grids** — ServicesGrid and portfolio have no side padding
- **Header always white** — `bg-white/90 backdrop-blur-sm`, solid white on scroll
- **Footer is red** — `bg-primary` with white text/links
- **CTA sections are red** — consistent across all pages

## Project Structure

```
app/
  layout.tsx          — Root layout (Inter font, Header, Footer, JSON-LD schemas)
  page.tsx            — Homepage (Hero, ServicesGrid, StatsCounter, AboutTeaser, PortfolioPreview, Industries, BlogPreview, CTA)
  not-found.tsx       — Custom 404
  sitemap.ts          — Dynamic sitemap
  robots.ts           — Robots.txt
  kontakt/page.tsx    — Contact page with form
  radovi/page.tsx     — Portfolio mosaic grid
  o-nama/page.tsx     — About with timeline
  o-nama/tim/page.tsx — Team page
  blog/page.tsx       — Blog listing (placeholder, no [slug] pages yet)
  usluge/page.tsx     — Redirects to /#usluge
  usluge/[slug]/      — 10 dynamic service pages (generateStaticParams)
  industrije/page.tsx — Redirects to /#industrije
  industrije/[slug]/  — 6 dynamic industry pages (generateStaticParams)
  api/contact/route.ts — Contact form API (Zod validation, no email sending yet)

components/
  layout/Header.tsx   — Sticky header with dropdowns (use client)
  layout/Footer.tsx   — Red footer with 4 columns
  sections/           — Page sections (Hero, ServicesGrid, StatsCounter, etc.)
  seo/                — JSON-LD components (LocalBusiness, Breadcrumb, WebSite, Service)
  ui/                 — Reusable UI (Button, Container, SectionHeading)

lib/
  constants.ts        — Site config, contacts, services, industries, nav items
  metadata.ts         — generatePageMetadata() helper (handles absolute titles)
  services-data.ts    — Extended data for 10 service pages
  industries-data.ts  — Extended data for 6 industry pages
  portfolio-data.ts   — Portfolio grid items with sizes
  utils.ts            — cn() utility
```

## Key Patterns

### Metadata
Use `generatePageMetadata()` from `lib/metadata.ts`. If title contains "Advercity", it uses `{ absolute: title }` to avoid double suffix from layout template `%s | Advercity`.

### Page hero sections
All inner pages use the same hero pattern: red bg, white text, `pt-40 pb-24 sm:pt-44 sm:pb-32`, `lg:text-6xl` heading.

### CTA Section
`<CTASection />` is used on every page. Shared component, one place to edit.

### Homepage Sections (8 total)
Hero → ServicesGrid → StatsCounter → AboutTeaser → PortfolioPreview → Industries → BlogPreview → CTASection

- **PortfolioPreview** — Red header, 8 project cards in 2×4 edge-to-edge grid with hover overlay
- **BlogPreview** — 3 latest posts on light-alt bg with images, categories, dates
- **Industries** — 6 square icon cards with black border (15% opacity), 6 per row, `id="industrije"` anchor
- **ServicesGrid** — Edge-to-edge gap-px grid, `id="usluge"` anchor

### Industry/Service Card Style
Square cards with icons, black border at 15% opacity (`border border-dark/15`), arrow links. Used on homepage Industries section and cross-links on industry pages. On industry pages, "Ostale industrije" cards are centered with `max-w-2xl mx-auto grid-cols-3`.

### JSON-LD Schemas
- `LocalBusinessJsonLd` — on all pages (via layout), ProfessionalService + Organization with @id
- `WebSiteJsonLd` — on all pages (via layout)
- `BreadcrumbJsonLd` — on all inner pages (last item omits URL per Google spec)
- `ServiceJsonLd` — on each `/usluge/[slug]/` page

### Dynamic routing
- Services: `generateStaticParams()` from `SERVICE_PAGES` in `lib/services-data.ts`
- Industries: `generateStaticParams()` from `INDUSTRY_PAGES` in `lib/industries-data.ts`
- Both use `params: Promise<{ slug: string }>` (Next.js 15 async params)

### Navigation
`/usluge/` and `/industrije/` listing pages redirect to homepage anchor sections (`/#usluge`, `/#industrije`). Nav dropdown children link directly to individual pages.

## SEO Notes

- Trailing slashes enforced via `next.config.ts` (`trailingSlash: true`)
- Security headers: HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
- Images: AVIF + WebP formats enabled, `picsum.photos` in remotePatterns (placeholder)
- Breadcrumbs: JSON-LD only (not visible on page)
- `<html lang="sr">` with Inter font (latin + latin-ext subsets)

### Portfolio Mosaic Grid
`radovi/page.tsx` uses CSS Grid with `gridAutoFlow: "dense"` and `gridAutoRows: "clamp(200px, 25vw, 400px)"` for mosaic layout. Items have mixed sizes (1x1, 2x1, 1x2) and are ordered to perfectly fill 4 cols × 5 rows (20 cells).

## Git Repository

- **Remote:** git@github.com:Zivkey/advercity.git

## Known Placeholders (Replace Before Launch)

- All images use `picsum.photos` — need real photography
- Service page content has Lorem Ipsum in `lib/services-data.ts`
- Industry page content has Lorem Ipsum in `lib/industries-data.ts`
- Blog has no individual post pages (`/blog/[slug]/`)
- Team page has no named members (general company text + team photos)
- Contact form API stub (no Resend email sending)
- Google Maps placeholder on contact page
- Client logos reference non-existent SVGs in `/public/images/clients/`
- Hero video is a stock Mixkit video

## Commands

```bash
npm run dev    # Start dev server
npm run build  # Production build
npm run start  # Start production server
npm run lint   # Run ESLint
```
