# Struktura Sajta -- Advercity.rs
## URL Hijerarhija i Arhitektura

---

## KOMPLETNA STRUKTURA

```
advercity.rs/
│
├── / (Pocetna)
│   ├── Hero sekcija: Headline + CTA
│   ├── Usluge pregled (6 kartica sa linkovima)
│   ├── O nama kratko (25+ god, 20+ zaposlenih, 500+ projekata)
│   ├── Klijenti logo bar (McDonald's, Delta Planet, AIK Banka...)
│   ├── Istaknuti case studies (3 kartica)
│   ├── Testimoniali (slider, 3-5 citata)
│   ├── Blog preview (3 najnovija clanka)
│   └── CTA sekcija: Zakazite besplatnu konsultaciju
│
├── /usluge/ (Pregled svih usluga)
│   ├── /usluge/digitalni-marketing/
│   ├── /usluge/seo-optimizacija/
│   ├── /usluge/social-media-marketing/
│   ├── /usluge/google-ads/
│   ├── /usluge/web-dizajn/
│   ├── /usluge/branding/
│   ├── /usluge/ooh-oglasavanje/
│   ├── /usluge/graficki-dizajn/
│   └── /usluge/event-marketing/
│
├── /industrije/ (Pregled industrija)
│   ├── /industrije/restorani-i-ugostiteljstvo/
│   ├── /industrije/zdravstvo/
│   ├── /industrije/e-commerce/
│   ├── /industrije/nekretnine/
│   ├── /industrije/auto-industrija/
│   ├── /industrije/it-kompanije/
│   ├── /industrije/hoteli-i-turizam/
│   └── /industrije/usluzne-delatnosti/
│
├── /radovi/ (Portfolio / Case Studies)
│   ├── /radovi/delta-planet/
│   ├── /radovi/emmezeta/
│   ├── /radovi/vapiano/
│   ├── /radovi/mcdonalds/
│   ├── /radovi/aik-banka/
│   └── ... (svi projekti)
│
├── /o-nama/
│   ├── /o-nama/ (Kompanijska prica, misija, vrednosti)
│   ├── /o-nama/tim/ (Tim sa biografijama)
│   ├── /o-nama/nas-proces/ (Kako radimo)
│   └── /o-nama/karijere/ (Otvorene pozicije)
│
├── /blog/
│   ├── /blog/vodici/ (Kategorija: vodici i tutoriali)
│   ├── /blog/saveti/ (Kategorija: brzi saveti)
│   ├── /blog/novosti/ (Kategorija: industry news)
│   └── /blog/[slug]/ (Pojedinacni clanci)
│
├── /kontakt/
│   ├── Kontakt forma
│   ├── Google Maps embed
│   ├── Telefon, email, adresa
│   └── Radno vreme
│
├── /cenovnik/ (Transparentne cene usluga)
├── /faq/ (Najcesca pitanja)
├── /privacy-policy/
└── /uslovi-koriscenja/
```

---

## URL KONVENCIJE

| Pravilo | Primer |
|---------|--------|
| Samo mala slova | /usluge/web-dizajn/ (ne /Web-Dizajn/) |
| Crtica umesto razmaka | /seo-optimizacija/ (ne /seo_optimizacija/) |
| Bez dijakritika u URL | /graficki-dizajn/ (ne /grafički-dizajn/) |
| Trailing slash konzistentno | Uvek sa / na kraju |
| Maksimalna dubina: 3 nivoa | /usluge/seo-optimizacija/ (ne /usluge/digitalni/seo/optimizacija/) |
| Keyword u URL | /usluge/seo-optimizacija/ targetira "SEO optimizacija" |

---

## INTERNAL LINKING STRATEGIJA

### Hijerarhija linkova (Hub & Spoke model)

```
Pocetna (Hub)
├── linkuje ka svim /usluge/* stranicama
├── linkuje ka /radovi/ (case studies)
├── linkuje ka /o-nama/
└── linkuje ka 3 najnovija blog clanka

Svaka Service stranica (Spoke)
├── linkuje nazad ka /usluge/ (parent)
├── linkuje ka relevantnim case studies
├── linkuje ka relevantnim blog clancima
├── linkuje ka relevantnim /industrije/* stranicama
└── linkuje ka /kontakt/ (CTA)

Svaki Blog clanak (Spoke)
├── linkuje ka relevantnoj service stranici
├── linkuje ka 2-3 druga blog clanka
├── linkuje ka /kontakt/ (CTA)
└── linkuje ka relevantnom case study

Svaka Industry stranica (Spoke)
├── linkuje ka relevantnim service stranicama
├── linkuje ka case studies iz te industrije
├── linkuje ka relevantnim blog clancima
└── linkuje ka /kontakt/ (CTA)
```

### Pravila za interne linkove:
1. Svaka stranica mora imati min 3 interna linka
2. Svaka stranica mora biti dostupna u max 3 klika od pocetne
3. Anchor text mora biti opisan (ne "kliknite ovde")
4. Service stranice medjusobno linkuju gde ima smisla
5. Blog clanci uvek linkuju ka bar jednoj service stranici

---

## NAVIGACIJA

### Glavna navigacija (Header)

```
Logo | Usluge ▼ | Radovi | O nama ▼ | Blog | Kontakt | [CTA Dugme]

Usluge dropdown:
├── Digitalni Marketing
├── SEO Optimizacija
├── Social Media Marketing
├── Google Ads
├── Web Dizajn
├── Branding
├── OOH Oglasavanje
├── Graficki Dizajn
└── Event Marketing

O nama dropdown:
├── Nasa prica
├── Tim
├── Kako radimo
└── Karijere
```

### Footer navigacija

```
[Logo + kratak opis]     [Usluge]          [Kompanija]       [Kontakt]
Advercity - Kreativna    Digitalni Mktg    O nama            Adresa
marketing agencija       SEO               Blog              Telefon
u Nisu sa 25+ god        Social Media      Radovi            Email
iskustva                 Google Ads        Cenovnik          Google Maps
                         Web Dizajn        FAQ
[Social Media Icons]     Branding          Privacy Policy
FB | IG | LI             OOH               Uslovi
```

---

## SCHEMA MARKUP PO TIPU STRANICE

### Pocetna stranica
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Advercity",
  "description": "Kreativna marketing i advertising agencija u Nisu sa 25+ godina iskustva",
  "url": "https://advercity.rs/",
  "logo": "https://advercity.rs/logo.svg",
  "image": "https://advercity.rs/og-image.jpg",
  "telephone": "+381-18-XXX-XXX",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kralja Stefana Prvovencanog 34",
    "addressLocality": "Nis",
    "addressRegion": "Nisavski okrug",
    "postalCode": "18000",
    "addressCountry": "RS"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "43.3209",
    "longitude": "21.8954"
  },
  "areaServed": {
    "@type": "City",
    "name": "Nis"
  },
  "foundingDate": "1999",
  "numberOfEmployees": "20+",
  "sameAs": [
    "https://www.facebook.com/advercity",
    "https://www.instagram.com/adver.city",
    "https://www.linkedin.com/company/advercity"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Marketing usluge",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Digitalni Marketing"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "SEO Optimizacija"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Social Media Marketing"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Google Ads"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Web Dizajn"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Branding"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "OOH Oglasavanje"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Graficki Dizajn"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Event Marketing"}}
    ]
  }
}
```

### Service stranice
- `Service` + `ProfessionalService` schema
- Svaka sa specificnim imenom, opisom, i providerom

### Blog clanci
- `BlogPosting` schema sa autorom (`Person`), datumom, slikom

### Case Studies
- `Article` schema sa klijentom kao `mentions`

### Tim stranice
- `Person` schema za svakog clana sa `jobTitle`, `worksFor`, `sameAs`
- `ProfilePage` schema za individualne profile

---

## BREADCRUMB STRUKTURA

```
Pocetna > Usluge > SEO Optimizacija
Pocetna > Radovi > Delta Planet
Pocetna > Blog > Vodici > Koliko kosta digitalni marketing
Pocetna > O nama > Tim
Pocetna > Industrije > Restorani i ugostiteljstvo
```

Implementirati vidljive breadcrumbs na svim stranicama osim pocetne.
BreadcrumbList schema na svim stranicama.

---

## MULTIJEZIENA STRATEGIJA

### Prioritet za prevod na engleski:
1. Pocetna
2. O nama
3. Sve service stranice
4. Kontakt
5. Radovi (case studies)

### Hreflang implementacija (ISPRAVLJENA):
```html
<link rel="alternate" hreflang="sr" href="https://advercity.rs/usluge/seo-optimizacija/" />
<link rel="alternate" hreflang="en" href="https://advercity.rs/en/services/seo-optimization/" />
<link rel="alternate" hreflang="x-default" href="https://advercity.rs/usluge/seo-optimizacija/" />
```

### Engleski URL pattern:
```
/en/
/en/services/
/en/services/seo-optimization/
/en/about/
/en/work/
/en/blog/
/en/contact/
```
