# Advercity.rs -- Claude Code Build Guide
## Next.js 15 + Tailwind CSS 4

Ovaj dokument je namenjen Claude Code agentu za izgradnju Advercity sajta. Prati ga korak po korak.

**REFERENTNI DOKUMENTI** (citaj ih pre pocetka rada):
- `SITE-STRUCTURE.md` -- URL arhitektura, interlinking strategija, schema markup po tipu stranice
- `CONTENT-GUIDE.md` -- SEO pravila po stranici, title/meta/H1 formule, ton pisanja, sadrzajni templejti
- `SEO-STRATEGY.md` -- Trenutno stanje sajta, KPI ciljevi, keyword strategija, E-E-A-T zahtevi
- `COMPETITOR-ANALYSIS.md` -- Sta konkurencija radi i gde su sanse
- `CONTENT-CALENDAR.md` -- Plan sadrzaja po mesecima
- `IMPLEMENTATION-ROADMAP.md` -- 12-mesecni plan u 4 faze

---

## STRANICE SAJTA -- Kompletna lista

**Ukupno za lansiranje: ~26 stranica + blog clanci**

| # | Stranica | URL | Sprint | Min. reci |
|---|----------|-----|--------|-----------|
| 1 | Naslovna | `/` | 1 | 500+ |
| 2 | Usluge pregled | `/usluge/` | 2 | 300+ |
| 3 | Digitalni Marketing | `/usluge/digitalni-marketing/` | 2 | 800+ |
| 4 | SEO Optimizacija | `/usluge/seo-optimizacija/` | 2 | 800+ |
| 5 | Social Media Marketing | `/usluge/social-media-marketing/` | 2 | 800+ |
| 6 | Google Ads | `/usluge/google-ads/` | 2 | 800+ |
| 7 | Web Dizajn | `/usluge/web-dizajn/` | 2 | 800+ |
| 8 | Branding | `/usluge/branding/` | 2 | 800+ |
| 9 | OOH Oglasavanje | `/usluge/ooh-oglasavanje/` | 2 | 800+ |
| 10 | Graficki Dizajn | `/usluge/graficki-dizajn/` | 2 | 800+ |
| 11 | Event Marketing | `/usluge/event-marketing/` | 2 | 800+ |
| 12 | Media Planning | `/usluge/media-planning/` | 2 | 800+ |
| 13 | O nama + Nasa istorija | `/o-nama/` | 2 | 500+ |
| 14 | Nas tim | `/o-nama/tim/` | 2 | 1000+ |
| 15 | Kontakt forma | `/kontakt/` | 1 | 200+ |
| 16 | Industrije pregled | `/industrije/` | 4 | 300+ |
| 17 | Restorani i ugostiteljstvo | `/industrije/restorani-i-ugostiteljstvo/` | 4 | 800+ |
| 18 | Zdravstvo | `/industrije/zdravstvo/` | 4 | 800+ |
| 19 | E-commerce | `/industrije/e-commerce/` | 4 | 800+ |
| 20 | Nekretnine | `/industrije/nekretnine/` | 4 | 800+ |
| 21 | Auto industrija | `/industrije/auto-industrija/` | 4 | 800+ |
| 22 | IT kompanije | `/industrije/it-kompanije/` | 4 | 800+ |
| 23 | Radovi/Portfolio | `/radovi/` | 3 | 300+ |
| 24 | Blog listing | `/blog/` | 3 | - |
| 25 | Politika privatnosti | `/politika-privatnosti/` | 4 | - |
| 26 | Uslovi koriscenja | `/uslovi-koriscenja/` | 4 | - |

**Napomene:**
- Testimoniali -- NE za prvu verziju, dodaju se naknadno
- Individualne klijent stranice -- NE praviti. Nema search volume, postaju thin content. Umesto toga: 1 portfolio stranica (grid) + 3-5 detaljnih case study za top klijente (sa merljivim rezultatima), to se radi u Sprint 3
- Blog clanci se pisu naknadno (4 mesecno), videti CONTENT-CALENDAR.md

---

## DIZAJN INSPIRACIJA: red-rhino.com

Sajt treba da prati estetiku red-rhino.com sa sledecom adaptacijom za Advercity:

### Kljucne karakteristike iz red-rhino.com:
- Bold, oversized tipografija za hero sekcije i headings
- Crno-bela bazna paleta sa jakim akcentnim bojama
- Sticky header navigacija sa telefonom/CTA
- Full-width sekcije sa mnogo whitespace
- Masonry/grid portfolio prikaz sa hover efektima
- Client logo carousel za kredibilitet
- Animirani statisticki brojaci (godine, projekti, zaposleni)
- Sekcije koje se smenjuju svetla/tamna pozadina
- Video ili animirani hero sa tagline
- Mega footer sa vise kolona

### Vizuelni stil

- **Bold i samouveren** -- krupna tipografija, jaki kontrasti (kao red-rhino)
- **Dark/Light sekcije** -- naizmenicno tamne (#0a0a0a) i svetle (#ffffff) sekcije
- **Mnogo whitespace** -- generous padding (py-24 do py-32 za sekcije)
- **Oversized headings** -- H1 minimum text-5xl/6xl, H2 minimum text-4xl
- **CTA dugmad** -- primary filled + ghost/outline varijanta, hover scale efekt
- **Slike** -- full-bleed gde moze, WebP/AVIF format, hover zoom na karticama
- **Animacije** -- fade-in-up on scroll (Framer Motion), staggered children, smooth counter animations
- **Hover efekti** -- scale, opacity change, underline reveal na linkovima

### Font pairing

- **Heading:** Inter (bold 700-900) ili slican geometric sans-serif -- cist, moderan, tezi
- **Body:** Inter (regular 400, medium 500) -- citljiv na svim velicinama
- Koristiti `next/font/google` za optimizovano ucitavanje

### Boje

```
Primary (Accent):     #E63946 (crvena -- energija, strast) ili brand boja Advercity
Primary Dark:         #C1121F
Primary Light:        #FFB3B8

Background Dark:      #0A0A0A (tamne sekcije)
Background Light:     #FFFFFF (svetle sekcije)
Background Alt:       #F5F5F5 (blago siva za contrast)

Text Primary:         #171717 (na svetloj pozadini)
Text Secondary:       #525252
Text On Dark:         #FFFFFF
Text Muted On Dark:   #A3A3A3

Border:               #E5E5E5 (svetla), #262626 (tamna)
```

**NAPOMENA:** Prilagoditi primary boju prema Advercity brand book-u ako postoji.

### Homepage layout (sekcija po sekcija, inspirirano red-rhino)

```
[HEADER - Sticky, transparent on hero, postaje solid na scroll]
  Logo | Usluge ▼ | Radovi | O nama ▼ | Blog | Kontakt | Telefon | [CTA Button]

[HERO - Full-screen, dark background]
  Label: "Marketing agencija Nis — 25+ godina iskustva"
  H1: "Kreativna Marketing Agencija u Nisu" (Nis u primary boji)
  Subtitle: opis + 500 projekata
  CTA: "Zakazite besplatnu konsultaciju" + "Pogledajte nase radove"
  Opciono: background video ili animated gradient

[CLIENT LOGOS - Svetla pozadina]
  "Brendovi koji nam veruju"
  Logo carousel: McDonald's, Delta Planet, AIK Banka, Eurobank, Emmezeta, Vapiano, Mr. Bricolage
  Grayscale → color on hover

[SERVICES GRID - Dark sekcija]
  H2: "Nase usluge"
  Grid 3x3 kartica sa ikonama, hover reveal opis + arrow link
  Svaka kartica vodi na /usluge/[slug]

[STATS COUNTER - Svetla]
  Animirani brojaci: 25+ Godina | 500+ Projekata | 20+ Zaposlenih | 7+ Industrija

[ABOUT TEASER - Svetla, 2 kolone]
  Levo: Fotografija tima/kancelarije
  Desno: "O nama" label + H2 + paragraf + link ka /o-nama/

[CTA SECTION - Primary boja pozadina]
  H2: "Spremni da podignete vas marketing na visi nivo?"
  Subtitle + CTA dugme (outline belo)

[FOOTER - Tamna (#0A0A0A)]
  4 kolone: Logo+opis+social | Usluge linkovi | Kompanija linkovi | Kontakt info
  Bottom bar: Copyright + Politika privatnosti + Uslovi koriscenja
```

---

## TECH STACK

| Tehnologija | Verzija | Namena |
|-------------|---------|--------|
| Next.js | 15 (App Router) | Framework |
| React | 19 | UI |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Styling |
| Framer Motion | latest | Animacije |
| sharp | latest | Image optimizacija |
| react-hook-form + zod | latest | Forme + validacija |
| lucide-react | latest | Ikone |
| resend | latest | Email (kontakt forma) |
| @vercel/analytics | latest | Analytics |

**Napomene za CMS:**
- Za prvu verziju: hardkodirati sadrzaj direktno u kodu (bez CMS-a)
- CMS (Sanity v3) dodati naknadno kada sajt bude ziv i sadrzaj pocne da se menja cesce
- Ovo pojednostavljuje Sprint 1-2 drasticno

---

## VAZNE NAPOMENE IZ TESTIRANJA

Ovo su stvari na koje obratiti paznju pri izgradnji:

### 1. lucide-react nema brand ikone
`lucide-react` NEMA Facebook, Instagram, LinkedIn ikone (uklonjene iz paketa). Za social media ikone koristiti inline SVG:

```tsx
// Facebook
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>

// Instagram
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>

// LinkedIn
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
```

### 2. Tailwind CSS v4 -- nova sintaksa
Tailwind v4 koristi `@theme inline` u CSS umesto `tailwind.config.ts`. Primer za globals.css:

```css
@import "tailwindcss";

@theme inline {
  --color-primary: #E63946;
  --color-primary-dark: #C1121F;
  --color-primary-light: #FFB3B8;
  --color-dark: #0A0A0A;
  --color-dark-secondary: #171717;
  --color-dark-border: #262626;
  --color-dark-muted: #A3A3A3;
  --color-light: #FFFFFF;
  --color-light-alt: #F5F5F5;
  --color-light-border: #E5E5E5;
  --color-text-primary: #171717;
  --color-text-secondary: #525252;
  --color-text-on-dark: #FFFFFF;
  --color-text-muted: #A3A3A3;
  --font-sans: var(--font-inter);
}
```

Onda u JSX koristiti: `bg-primary`, `text-dark-muted`, `border-light-border`, itd.

**NE praviti tailwind.config.ts** -- u v4 to vise nije potrebno za custom boje. Definisati ih u CSS-u.

### 3. NAV_ITEMS tipizacija
Ako koristis `as const` za navigaciju sa opcionalnim `children` poljem, TypeScript ce se buniti. Definisi eksplicitan tip:

```typescript
type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const NAV_ITEMS: NavItem[] = [...]
```

### 4. Next.js -- ne koristiti `output: 'export'`
Koristiti Next.js BEZ `output: 'export'` i deployovati na Vercel. Ovo omogucava:
- API routes za kontakt formu
- Server-side redirects i headers
- Dinamicki sitemap
- ISR sa webhook revalidacijom (kada se doda CMS)

### 5. Framer Motion -- koristiti pametno
- `'use client'` direktiva je OBAVEZNA na komponentama sa Framer Motion
- Ne animirati SVE -- samo hero, kartice (staggered), i brojace
- Koristiti `viewport={{ once: true }}` da animacija pukne samo jednom
- `whileInView` umesto `animate` za scroll-triggered animacije

---

## PODACI I KONSTANTE

Kreirati `lib/constants.ts` sa svim podacima koji se koriste kroz sajt:

### Kontakt informacije
```typescript
export const CONTACT = {
  phone: "+381 18 523 929",
  email: "info@advercity.rs",
  address: "Kralja Stefana Prvovencanog 34",
  city: "Nis",
  zip: "18000",
  country: "RS",
  lat: 43.3209,
  lng: 21.8954,
};
```

### Socijalne mreze
```typescript
export const SOCIAL = {
  facebook: "https://www.facebook.com/advercity",
  instagram: "https://www.instagram.com/adver.city",
  linkedin: "https://www.linkedin.com/company/advercity",
};
```

### Statistike (za StatsCounter komponentu)
```typescript
export const STATS = [
  { value: 25, suffix: "+", label: "Godina iskustva" },
  { value: 500, suffix: "+", label: "Realizovanih projekata" },
  { value: 20, suffix: "+", label: "Clanova tima" },
  { value: 7, suffix: "+", label: "Industrija" },
];
```

### Usluge (9 + media planning = 10)
```typescript
export const SERVICES = [
  { title: "Digitalni Marketing", slug: "digitalni-marketing", icon: "Globe",
    description: "Kompletne digitalne strategije za rast vaseg biznisa online." },
  { title: "SEO Optimizacija", slug: "seo-optimizacija", icon: "Search",
    description: "Organsko pozicioniranje na Google pretrazi za dugorocne rezultate." },
  { title: "Social Media Marketing", slug: "social-media-marketing", icon: "Share2",
    description: "Upravljanje drustvenim mrezama i kreiranje angazujuceg sadrzaja." },
  { title: "Google Ads", slug: "google-ads", icon: "Target",
    description: "Placeno oglasavanje sa merljivim ROI i preciznim targetiranjem." },
  { title: "Web Dizajn", slug: "web-dizajn", icon: "Monitor",
    description: "Moderni, brzi i SEO optimizovani sajtovi koji konvertuju." },
  { title: "Branding", slug: "branding", icon: "Palette",
    description: "Vizuelni identitet i strategija brenda koja vas izdvaja." },
  { title: "OOH Oglasavanje", slug: "ooh-oglasavanje", icon: "MapPin",
    description: "Bilbordi, city lightovi i outdoor kampanje u Nisu i Srbiji." },
  { title: "Graficki Dizajn", slug: "graficki-dizajn", icon: "PenTool",
    description: "Kreativna graficka resenja za print i digitalne medije." },
  { title: "Event Marketing", slug: "event-marketing", icon: "Calendar",
    description: "Organizacija i promocija dogadjaja koji ostavljaju utisak." },
  { title: "Media Planning", slug: "media-planning", icon: "BarChart3",
    description: "Stratesko planiranje medija za maksimalan doseg i ROI." },
];
```

### Klijenti (za logo bar)
```typescript
export const CLIENTS = [
  { name: "McDonald's", logo: "/images/clients/mcdonalds.svg" },
  { name: "Delta Planet", logo: "/images/clients/delta-planet.svg" },
  { name: "AIK Banka", logo: "/images/clients/aik-banka.svg" },
  { name: "Eurobank", logo: "/images/clients/eurobank.svg" },
  { name: "Emmezeta", logo: "/images/clients/emmezeta.svg" },
  { name: "Vapiano", logo: "/images/clients/vapiano.svg" },
  { name: "Mr. Bricolage", logo: "/images/clients/mr-bricolage.svg" },
];
```

### Navigacija
```typescript
export const NAV_ITEMS: NavItem[] = [
  { label: "Usluge", href: "/usluge",
    children: SERVICES.map(s => ({ label: s.title, href: `/usluge/${s.slug}` })) },
  { label: "Radovi", href: "/radovi" },
  { label: "O nama", href: "/o-nama",
    children: [
      { label: "O kompaniji", href: "/o-nama" },
      { label: "Nas tim", href: "/o-nama/tim" },
    ] },
  { label: "Blog", href: "/blog" },
  { label: "Kontakt", href: "/kontakt" },
];
```

---

## PROJEKTNA STRUKTURA

```
advercity/
├── app/
│   ├── page.tsx                           # Pocetna (/)
│   ├── layout.tsx                         # Root layout (lang="sr", Inter font, Header/Footer)
│   ├── globals.css                        # Tailwind v4 @theme + global styles
│   ├── not-found.tsx                      # 404 stranica
│   ├── sitemap.ts                         # Dinamicki sitemap
│   ├── robots.ts                          # robots.txt
│   ├── usluge/
│   │   ├── page.tsx                       # /usluge/ pregled
│   │   └── [slug]/
│   │       └── page.tsx                   # /usluge/digitalni-marketing/, itd.
│   ├── industrije/
│   │   ├── page.tsx                       # /industrije/ pregled
│   │   └── [slug]/
│   │       └── page.tsx                   # /industrije/restorani/, itd.
│   ├── radovi/
│   │   └── page.tsx                       # /radovi/ (jedinstven grid, BEZ [slug])
│   ├── o-nama/
│   │   ├── page.tsx                       # /o-nama/ (kompanija + istorija)
│   │   └── tim/
│   │       └── page.tsx                   # /o-nama/tim/
│   ├── blog/
│   │   ├── page.tsx                       # /blog/ listing
│   │   └── [slug]/
│   │       └── page.tsx                   # /blog/[slug]/ (pojedinacni clanak)
│   ├── kontakt/
│   │   └── page.tsx                       # /kontakt/
│   ├── politika-privatnosti/
│   │   └── page.tsx                       # Politika privatnosti
│   ├── uslovi-koriscenja/
│   │   └── page.tsx                       # Uslovi koriscenja
│   └── api/
│       └── contact/
│           └── route.ts                   # Kontakt forma handler
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx                     # Sticky nav, dropdown, mobilni meni, telefon + CTA
│   │   ├── Footer.tsx                     # 4 kolone, social SVG ikone, legal linkovi
│   │   └── Breadcrumbs.tsx                # Breadcrumb navigacija
│   ├── sections/
│   │   ├── Hero.tsx                       # Full-screen dark hero sa animacijom
│   │   ├── ServicesGrid.tsx               # 3x3 grid sa ikonama i hover
│   │   ├── ClientLogos.tsx                # Logo bar (grayscale → color)
│   │   ├── StatsCounter.tsx               # Animirani brojaci
│   │   ├── AboutTeaser.tsx                # O nama teaser (slika + tekst)
│   │   ├── CTASection.tsx                 # CTA sa primary pozadinom
│   │   ├── ContactForm.tsx                # Forma sa react-hook-form + zod
│   │   ├── TeamGrid.tsx                   # Grid tima
│   │   ├── ProcessSteps.tsx               # Koraci procesa
│   │   ├── BlogPreview.tsx                # 3 najnovija clanka
│   │   ├── FAQ.tsx                        # FAQ accordion + schema
│   │   └── Testimonials.tsx               # Testimonial slider (faza 2)
│   ├── ui/
│   │   ├── Button.tsx                     # primary / outline / ghost varijante
│   │   ├── Container.tsx                  # Max-width 7xl wrapper
│   │   └── SectionHeading.tsx             # H2 sa subtitle, dark/light mod
│   └── seo/
│       ├── LocalBusinessJsonLd.tsx        # ProfessionalService schema (u layout)
│       ├── ServiceJsonLd.tsx              # Service schema
│       ├── BlogPostJsonLd.tsx             # BlogPosting schema
│       ├── FAQJsonLd.tsx                  # FAQ schema
│       ├── BreadcrumbJsonLd.tsx           # Breadcrumb schema
│       └── PersonJsonLd.tsx               # Person schema za tim
│
├── lib/
│   ├── constants.ts                       # Svi podaci (videti PODACI I KONSTANTE sekciju)
│   ├── metadata.ts                        # generatePageMetadata helper
│   └── utils.ts                           # cn() utility za klase
│
├── public/
│   ├── images/
│   │   ├── logo.svg                       # Advercity logo
│   │   ├── logo-white.svg                 # Logo za tamnu pozadinu
│   │   ├── og-default.jpg                 # Default OG image (1200x630)
│   │   └── clients/                       # Logoi klijenata (SVG)
│   └── fonts/                             # Self-hosted fontovi (ako treba)
│
├── next.config.ts
├── tsconfig.json
├── package.json
├── .env.local
└── .env.example
```

**Napomena:** Nema `(sr)/` i `(en)/` route grupacija u prvoj fazi. Engleski je faza 2. Sve stranice idu direktno u `app/`.

---

## SETUP PROJEKTA

### Korak 1: Inicijalizacija

```bash
npx create-next-app@latest advercity --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*"
cd advercity
```

### Korak 2: Instalacija dependency-ja

```bash
npm install framer-motion react-hook-form @hookform/resolvers zod lucide-react sharp resend @vercel/analytics @vercel/speed-insights
```

### Korak 3: Environment Variables (.env.local)

```env
# Contact Form
RESEND_API_KEY=your_resend_key
CONTACT_EMAIL=info@advercity.rs

# Site
NEXT_PUBLIC_SITE_URL=https://advercity.rs

# Google
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## CORE KONFIGURACIJA

### next.config.ts

```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      { source: '/ooh', destination: '/usluge/ooh-oglasavanje', permanent: true },
      { source: '/veb', destination: '/usluge/web-dizajn', permanent: true },
      { source: '/projekti', destination: '/radovi', permanent: true },
      { source: '/dogadjaji', destination: '/radovi', permanent: true },
      { source: '/en/homepage', destination: '/', permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        ],
      },
    ]
  },
}

export default nextConfig
```

### globals.css (Tailwind v4 sintaksa)

```css
@import "tailwindcss";

@theme inline {
  --color-primary: #E63946;
  --color-primary-dark: #C1121F;
  --color-primary-light: #FFB3B8;
  --color-dark: #0A0A0A;
  --color-dark-secondary: #171717;
  --color-dark-border: #262626;
  --color-dark-muted: #A3A3A3;
  --color-light: #FFFFFF;
  --color-light-alt: #F5F5F5;
  --color-light-border: #E5E5E5;
  --color-text-primary: #171717;
  --color-text-secondary: #525252;
  --color-text-on-dark: #FFFFFF;
  --color-text-muted: #A3A3A3;
  --font-sans: var(--font-inter);
}

html { scroll-behavior: smooth; }

body {
  background: var(--color-light);
  color: var(--color-text-primary);
  font-family: var(--font-sans), system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
}

::selection {
  background: var(--color-primary);
  color: white;
}
```

---

## SEO IMPLEMENTACIJA

### Metadata Helper (lib/metadata.ts)

```typescript
import { Metadata } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://advercity.rs'
const SITE_NAME = 'Advercity'

interface PageMeta {
  title: string
  description: string
  path: string
  ogImage?: string
  noindex?: boolean
}

export function generatePageMetadata({ title, description, path, ogImage, noindex }: PageMeta): Metadata {
  const url = `${SITE_URL}${path}`
  const image = ogImage || `${SITE_URL}/images/og-default.jpg`

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { 'sr': url },
    },
    openGraph: {
      title, description, url,
      siteName: SITE_NAME,
      locale: 'sr_RS',
      type: 'website',
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
    robots: noindex ? { index: false, follow: true } : { index: true, follow: true },
  }
}
```

### Root layout.tsx -- metadata

```typescript
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Marketing Agencija Nis | ${SITE_NAME} — 25+ Godina Iskustva`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: { siteName: SITE_NAME, locale: 'sr_RS', type: 'website' },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};
```

### SEO po stranici (videti CONTENT-GUIDE.md za detalje)

| Stranica | Title formula | H1 |
|----------|---------------|-----|
| Homepage | Marketing Agencija Nis \| Advercity — 25+ Godina Iskustva | Kreativna Marketing Agencija u Nisu |
| Usluge | Marketing Usluge Nis \| Advercity | Kompletne Marketing Usluge u Nisu |
| Svaka usluga | [Usluga] Nis \| [Benefit] \| Advercity | [Usluga] u Nisu |
| O nama | O Nama \| Marketing Agencija sa 25+ Godina \| Advercity | O Advercity Agenciji |
| Tim | Nas Tim \| Marketing Strucnjaci \| Advercity | Upoznajte Nas Tim |
| Kontakt | Kontakt \| Zakazite Besplatnu Konsultaciju \| Advercity | Hajde da Razgovaramo |
| Blog | Blog \| Marketing Saveti i Vodici \| Advercity | Marketing Blog |
| Industrije | Marketing po Industrijama \| Advercity | Marketing Resenja po Industrijama |
| Radovi | Nasi Radovi \| Portfolio \| Advercity | Nasi Radovi |

### JSON-LD Schema po tipu stranice

- **Sve stranice:** ProfessionalService (u layout.tsx) + BreadcrumbList
- **Service stranice:** + Service schema
- **Blog clanci:** + BlogPosting schema sa author, date, image
- **Tim stranica:** + Person schema za svakog clana
- **FAQ sekcije:** + FAQPage schema
- **Radovi/Case study:** + Article schema

Videti SITE-STRUCTURE.md za kompletne schema primere.

### Sitemap i Robots

Implementirati kao `app/sitemap.ts` i `app/robots.ts` (Next.js konvencija). Sitemap treba da ukljuci sve staticke stranice + dinamicke (blog, usluge, industrije). Videti code snippete ranije u dokumentu.

---

## REDOSLED IMPLEMENTACIJE

### Sprint 1 (Nedelja 1-2): Skeleton + Core
1. Setup projekta (Next.js + Tailwind + TypeScript)
2. globals.css sa dizajn sistemom (Tailwind v4 @theme)
3. lib/constants.ts sa svim podacima
4. lib/metadata.ts + lib/utils.ts
5. Layout components (Header sa dropdown + mobilni, Footer sa social SVG)
6. Pocetna stranica sa SVIM sekcijama (Hero, ClientLogos, ServicesGrid, StatsCounter, AboutTeaser, CTA)
7. Kontakt stranica sa formom (react-hook-form + zod + API route)
8. 404 stranica
9. SEO osnova (metadata, sitemap.ts, robots.ts, LocalBusinessJsonLd)

### Sprint 2 (Nedelja 3-4): Usluge + O nama
1. /usluge/ pregled stranica (grid svih usluga)
2. /usluge/[slug] -- template za service stranicu (800+ reci po usluzi)
3. Sadrzaj za svih 10 usluga (hardkodiran za pocetak)
4. /o-nama/ sa kompanijskom pricom + istorija (500+ reci)
5. /o-nama/tim/ sa grid-om tima + Person schema
6. Breadcrumbs komponenta
7. Service i Person JSON-LD schema

### Sprint 3 (Nedelja 5-6): Radovi + Blog
1. /radovi/ pregled sa filterima po kategoriji (grid, NE individualne stranice)
2. /blog/ listing stranica
3. /blog/[slug] -- template za blog clanak sa BlogPosting schema
4. Blog preview sekcija na homepage-u (3 najnovija)
5. Interni linkovi: svaka usluga → relevantni radovi, blog → usluge

### Sprint 4 (Nedelja 7-8): Industrije + Legal + Polish
1. /industrije/ pregled
2. /industrije/[slug] -- 5-6 industrija (800+ reci svaka)
3. Politika privatnosti
4. Uslovi koriscenja
5. Cookie banner
6. Performance optimizacija (slike, fontovi, JS bundle)
7. Mobile testing na svim breakpointima
8. Pre-launch checklist (videti dole)

---

## PERFORMANCE PRAVILA

| Metrika | Cilj |
|---------|------|
| LCP | < 2.5s |
| INP | < 200ms |
| CLS | < 0.1 |
| PageSpeed Score (Mobile) | 90+ |
| PageSpeed Score (Desktop) | 95+ |

1. **Slike:** Uvek `next/image` sa width, height, alt. Hero: `priority={true}`. Ostale: `loading="lazy"`.
2. **Fontovi:** `next/font/google` sa `display: 'swap'` i `preload: true`.
3. **JS:** Server Components gde god moguce. `'use client'` SAMO za interakciju (Header, forme, animacije).
4. **Third-party:** GA4 ucitati sa `strategy="afterInteractive"` preko `next/script`.
5. **CSS:** Tailwind v4 automatski tree-shake. Ne koristiti inline styles.

---

## CHECKLIST PRED LANSIRANJE

### Tehnicki
- [ ] Sve stranice imaju unique title (50-60 karaktera) i meta description (120-160 karaktera)
- [ ] H1 na svakoj stranici, sadrzi primary keyword
- [ ] Canonical tagovi na svim stranicama
- [ ] hreflang tag: sr + x-default
- [ ] Schema markup (JSON-LD) na svim stranicama, validiran na schema.org validator
- [ ] sitemap.xml generisan i tacan
- [ ] robots.txt ispravan
- [ ] 404 stranica postoji
- [ ] Redirects sa starog sajta rade
- [ ] SSL aktivan
- [ ] Security headers postavljeni (HSTS, X-Frame-Options, CSP, X-Content-Type-Options)

### Performance
- [ ] PageSpeed Mobile: 90+
- [ ] PageSpeed Desktop: 95+
- [ ] LCP < 2.5s, CLS < 0.1
- [ ] Sve slike WebP/AVIF sa next/image
- [ ] Fontovi preloaded sa font-display: swap
- [ ] Nema render-blocking resursa

### SEO
- [ ] GA4 integrisan i testiran
- [ ] Google Search Console povezan
- [ ] Google Business Profile kreiran
- [ ] og:image na svim stranicama (1200x630)
- [ ] Interni linkovi funkcionisu (min 3 po stranici)
- [ ] Nema broken linkova
- [ ] Breadcrumbs rade na svim stranicama

### Sadrzaj
- [ ] Pocetna: 500+ reci
- [ ] Sve service stranice: 800+ reci
- [ ] Svi alt textovi opisni, na srpskom
- [ ] CTA na svakoj stranici
- [ ] Kontakt forma radi i salje email
- [ ] Privacy Policy postoji

### Accessibility
- [ ] Sve slike imaju alt text
- [ ] Kontrast WCAG AA
- [ ] Keyboard navigacija radi
- [ ] Skip to content link
- [ ] ARIA labels na interaktivnim elementima
- [ ] Focus visible stilovi
