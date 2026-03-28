# Implementation Roadmap -- Advercity.rs
## Fazni plan implementacije za Top 3 poziciju

---

## FAZA 1: TEMELJ (Nedelje 1-4)
**Cilj:** Popraviti kriticne probleme, postaviti infrastrukturu, kreirati core stranice

### Nedelja 1 -- Hitne tehnicke popravke

| # | Zadatak | Odgovoran | Status |
|---|---------|-----------|--------|
| 1.1 | Instalirati GA4 i podesiti osnovne konverzije | Developer | [ ] |
| 1.2 | Povezati Google Search Console | Developer | [ ] |
| 1.3 | Obrisati "Hello World" blog post | Content | [ ] |
| 1.4 | Ispraviti hreflang (srp->sr, eng->en, dodati x-default) | Developer | [ ] |
| 1.5 | Dodati H1 tag na pocetnu stranicu | Developer | [ ] |
| 1.6 | Napisati jedinstvene meta opise za svih 5 postojecih stranica | Content | [ ] |
| 1.7 | Ispraviti og:locale na srpskim stranicama (sr_RS) | Developer | [ ] |
| 1.8 | Dodati og:image za social sharing | Designer + Dev | [ ] |
| 1.9 | Poboljsati title tagove (dodati keywords) | Content | [ ] |

### Nedelja 2 -- Sigurnost + Performance

| # | Zadatak | Odgovoran | Status |
|---|---------|-----------|--------|
| 2.1 | Dodati security headere (HSTS, X-Frame-Options, CSP, X-Content-Type-Options) | Developer | [ ] |
| 2.2 | Ukloniti X-Powered-By header | Developer | [ ] |
| 2.3 | Dodati defer/async na render-blocking JS (16 fajlova) | Developer | [ ] |
| 2.4 | Dodati width/height atribute na sve slike | Developer | [ ] |
| 2.5 | Dodati loading="lazy" na below-fold slike | Developer | [ ] |
| 2.6 | Dodati srcset na thumbnail slike | Developer | [ ] |
| 2.7 | Onemoguciti xmlrpc.php | Developer | [ ] |

### Nedelja 3 -- Core stranice

| # | Zadatak | Odgovoran | Status |
|---|---------|-----------|--------|
| 3.1 | Prepisati pocetnu stranicu (500+ reci, hero, usluge, klijenti, CTA) | Content + Dev | [ ] |
| 3.2 | Prepisati O nama stranicu (kompanijska prica, 25+ god, misija) | Content | [ ] |
| 3.3 | Dodati biografije za sve clanove tima | Content | [ ] |
| 3.4 | Kreirati Privacy Policy | Legal/Content | [ ] |
| 3.5 | Kreirati Terms of Service | Legal/Content | [ ] |
| 3.6 | Dodati klijentski logo bar na pocetnu | Designer + Dev | [ ] |
| 3.7 | Dodati testimonial sekciju na pocetnu | Content + Dev | [ ] |

### Nedelja 4 -- Schema + Local SEO

| # | Zadatak | Odgovoran | Status |
|---|---------|-----------|--------|
| 4.1 | Implementirati ProfessionalService schema na pocetnoj | Developer | [ ] |
| 4.2 | Dodati Person schema za tim | Developer | [ ] |
| 4.3 | Kreirati Google Business Profile | Marketing | [ ] |
| 4.4 | Popuniti GBP kompletno (slike, usluge, radno vreme, opis) | Marketing | [ ] |
| 4.5 | Prijaviti se na PlanPlus.rs | Marketing | [ ] |
| 4.6 | Prijaviti se na KlikDoFirme | Marketing | [ ] |
| 4.7 | Dodati breadcrumb navigaciju (vidljivu) | Developer | [ ] |

**Faza 1 Milestone:** GA4 aktivan, Core Web Vitals Pass, GBP kreiran, 5 core stranica optimizovano.

---

## FAZA 2: EKSPANZIJA (Nedelje 5-12)
**Cilj:** Kreirati service stranice, pokrenuti blog, poceti sa case studies

### Nedelje 5-6 -- Service stranice (Batch 1)

| # | Zadatak | Keyword target | Status |
|---|---------|----------------|--------|
| 5.1 | /usluge/ -- pregled stranica | marketing agencija Nis | [ ] |
| 5.2 | /usluge/digitalni-marketing/ | digitalni marketing Nis | [ ] |
| 5.3 | /usluge/seo-optimizacija/ | SEO optimizacija Nis | [ ] |
| 5.4 | /usluge/social-media-marketing/ | social media marketing Nis | [ ] |
| 5.5 | /usluge/google-ads/ | Google Ads Nis | [ ] |
| 5.6 | Dodati Service schema na svaku | - | [ ] |

### Nedelje 7-8 -- Service stranice (Batch 2) + Blog lansiranje

| # | Zadatak | Keyword target | Status |
|---|---------|----------------|--------|
| 7.1 | /usluge/web-dizajn/ | web dizajn Nis | [ ] |
| 7.2 | /usluge/branding/ | branding agencija Nis | [ ] |
| 7.3 | /usluge/ooh-oglasavanje/ (prepis) | OOH oglasavanje Nis | [ ] |
| 7.4 | /usluge/graficki-dizajn/ | graficki dizajn Nis | [ ] |
| 7.5 | /usluge/event-marketing/ | event marketing Nis | [ ] |
| 7.6 | Blog #1: "Koliko kosta digitalni marketing u Nisu" | cena digitalnog marketinga | [ ] |
| 7.7 | Blog #2: "Kako izabrati marketing agenciju u Nisu" | kako izabrati agenciju | [ ] |

### Nedelje 9-10 -- Case Studies + Blog nastavak

| # | Zadatak | Status |
|---|---------|--------|
| 9.1 | Case Study: Delta Planet | [ ] |
| 9.2 | Case Study: Emmezeta | [ ] |
| 9.3 | Blog #3: "Sta je SEO optimizacija" | [ ] |
| 9.4 | Blog #4: "7 razloga za digitalni marketing u 2026." | [ ] |
| 9.5 | Konvertovati slike u WebP format | [ ] |

### Nedelje 11-12 -- Prosirivanje + Optimizacija

| # | Zadatak | Status |
|---|---------|--------|
| 11.1 | Blog #5: "SEO ili Google Ads -- sta je bolje?" | [ ] |
| 11.2 | Case Study: Vapiano | [ ] |
| 11.3 | Case Study: McDonald's | [ ] |
| 11.4 | /cenovnik/ stranica | [ ] |
| 11.5 | /faq/ stranica | [ ] |
| 11.6 | Interno linkovanje audit i poboljsanje | [ ] |
| 11.7 | Ukloniti jQuery Migrate | [ ] |
| 11.8 | Implementirati IndexNow | [ ] |
| 11.9 | Prijaviti se na Clutch.co | [ ] |
| 11.10 | Prijaviti se na jos 3 lokalna direktorijuma | [ ] |

**Faza 2 Milestone:** 9 service stranica, 5 blog clanaka, 4 case studies, cenovnik, FAQ. Ocekivano rangiranje: top 20 za primarne pretrage.

---

## FAZA 3: SKALIRANJE (Meseci 4-6)
**Cilj:** Industrija stranice, agresivan blog, link building

### Mesec 4

| # | Zadatak | Status |
|---|---------|--------|
| M4.1 | /industrije/restorani-i-ugostiteljstvo/ | [ ] |
| M4.2 | /industrije/zdravstvo/ | [ ] |
| M4.3 | /industrije/e-commerce/ | [ ] |
| M4.4 | 4 blog clanka (po content calendaru) | [ ] |
| M4.5 | /o-nama/nas-proces/ stranica | [ ] |
| M4.6 | Traziti GBP recenzije od klijenata (cilj: 10) | [ ] |

### Mesec 5

| # | Zadatak | Status |
|---|---------|--------|
| M5.1 | /industrije/nekretnine/ | [ ] |
| M5.2 | /industrije/auto-industrija/ | [ ] |
| M5.3 | 4 blog clanka (po content calendaru) | [ ] |
| M5.4 | Case Study: AIK Banka | [ ] |
| M5.5 | Link building: 5 gostujucih clanaka | [ ] |
| M5.6 | Prijaviti se na lokalne medije za PR | [ ] |

### Mesec 6

| # | Zadatak | Status |
|---|---------|--------|
| M6.1 | 4 blog clanka (po content calendaru) | [ ] |
| M6.2 | Video testimoniali od klijenata (3 min) | [ ] |
| M6.3 | Link building: 5 gostujucih clanaka | [ ] |
| M6.4 | Performance audit i optimizacija | [ ] |
| M6.5 | Content refresh starih stranica | [ ] |
| M6.6 | GBP recenzije (cilj ukupno: 20) | [ ] |

**Faza 3 Milestone:** 5 industrija stranica, 12+ blog clanaka, 5 case studies, 20+ GBP recenzija. Ocekivano rangiranje: top 10 za primarne pretrage.

---

## FAZA 4: AUTORITET (Meseci 7-12)
**Cilj:** Ucvrstiti top 3 poziciju, graditi autoritet, skalirati lead generaciju

### Mesecni zadaci (ponovljivi)

| Zadatak | Frekvencija |
|---------|-------------|
| 4 blog clanka | Mesecno |
| 1 case study | Mesecno |
| 5 gostujucih clanaka / backlinks | Mesecno |
| GBP post | Nedeljno |
| Social media deljenje blog sadrzaja | Za svaki clanak |
| Content refresh starih stranica | Mesecno (2-3 stranice) |
| Tehnicka optimizacija | Po potrebi |

### Specificni zadaci

| Mesec | Zadatak |
|-------|---------|
| 7 | Pokrenuti email newsletter, kreirati 2 lead magneta |
| 8 | YouTube kanal -- snimiti 3 video vodica |
| 9 | Analizirati AI Search vidljivost (GEO optimizacija) |
| 10 | Organizovati lokalni marketing event/webinar |
| 11 | Godisnji content audit -- sta radi, sta ne |
| 12 | Planiranje strategije za narednu godinu |

**Faza 4 Milestone:** 45+ blog clanaka, 9+ case studies, 40+ GBP recenzija, 60+ backlinks. Ocekivano rangiranje: top 3 za primarne pretrage.

---

## KRITICNI PUT (Dependency Map)

```
GA4 Setup ─────────────┐
                       ├──> Pracenje konverzija ──> Optimizacija na osnovu podataka
GSC Setup ─────────────┘

Tehnicke popravke ─────> Core Web Vitals Pass ──> Bolje rangiranje

Core stranice ─────────> Service stranice ─────> Industrija stranice
                              │
                              └──> Blog lansiranje ──> Content authority

GBP Kreiranje ─────────> GBP Optimizacija ─────> Lokalni pack rangiranje
                              │
                              └──> Recenzije (10 -> 20 -> 40)

Schema implementacija ──> Rich results ──> Bolji CTR

Case studies ──────────> Portfolio authority ──> Klijentsko poverenje
```

---

## ALATI POTREBNI

| Alat | Namena | Cena |
|------|--------|------|
| Google Analytics 4 | Web analitika | Besplatno |
| Google Search Console | SEO monitoring | Besplatno |
| Google Business Profile | Lokalni SEO | Besplatno |
| Yoast SEO Premium | On-page SEO | ~99 EUR/god |
| Ahrefs ili Semrush | Keyword tracking + competitor | ~99-199 EUR/mes |
| PageSpeed Insights | Core Web Vitals | Besplatno |
| Schema Markup Validator | Schema testing | Besplatno |

---

## MERENJE USPEHA

### Nedeljni pregled
- Organski promet (GA4)
- Pozicije za top 5 keywordova (GSC / Ahrefs)
- Nove indeksirane stranice (GSC)

### Mesecni pregled
- Ukupan organski promet i trend
- Konverzije (kontakt forme, pozivi)
- Pozicije za sve ciljane keywordove
- Novi backlinks
- Nove GBP recenzije
- Blog performanse (koji clanci donose promet)

### Kvartalni pregled
- Pozicija vs. konkurenti
- ROI content strategije
- Revizija keyword strategije
- Core Web Vitals check
- E-E-A-T skor procena
