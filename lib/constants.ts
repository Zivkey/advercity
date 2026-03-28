export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://advercity.rs";
export const SITE_NAME = "Advercity";
export const SITE_DESCRIPTION =
  "Advercity je kreativna marketing agencija u Nisu sa 25+ godina iskustva. Pruzamo usluge digitalnog marketinga, SEO optimizacije, brendinga, web dizajna i OOH oglasavanja.";

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const CONTACT = {
  phone: "+381 18 523 929",
  phoneDisplay: "018 523 929",
  email: "info@advercity.rs",
  address: "Kralja Stefana Prvovencanog 34",
  city: "Nis",
  zip: "18000",
  country: "RS",
  region: "Nisavski okrug",
  lat: 43.3209,
  lng: 21.8954,
  workingHours: "Pon-Pet: 09:00 - 17:00",
};

export const SOCIAL = {
  facebook: "https://www.facebook.com/advercity",
  instagram: "https://www.instagram.com/adver.city",
  linkedin: "https://www.linkedin.com/company/advercity",
};

export const STATS = [
  { value: 25, suffix: "+", label: "Godina iskustva" },
  { value: 500, suffix: "+", label: "Realizovanih projekata" },
  { value: 20, suffix: "+", label: "Clanova tima" },
  { value: 7, suffix: "+", label: "Industrija" },
];

export const SERVICES = [
  {
    title: "Digitalni Marketing",
    slug: "digitalni-marketing",
    icon: "Globe" as const,
    description:
      "Kompletne digitalne strategije za rast vaseg biznisa online.",
  },
  {
    title: "SEO Optimizacija",
    slug: "seo-optimizacija",
    icon: "Search" as const,
    description:
      "Organsko pozicioniranje na Google pretrazi za dugorocne rezultate.",
  },
  {
    title: "Social Media Marketing",
    slug: "social-media-marketing",
    icon: "Share2" as const,
    description:
      "Upravljanje drustvenim mrezama i kreiranje angazujuceg sadrzaja.",
  },
  {
    title: "Google Ads",
    slug: "google-ads",
    icon: "Target" as const,
    description:
      "Placeno oglasavanje sa merljivim ROI i preciznim targetiranjem.",
  },
  {
    title: "Web Dizajn",
    slug: "web-dizajn",
    icon: "Monitor" as const,
    description:
      "Moderni, brzi i SEO optimizovani sajtovi koji konvertuju.",
  },
  {
    title: "Branding",
    slug: "branding",
    icon: "Palette" as const,
    description:
      "Vizuelni identitet i strategija brenda koja vas izdvaja.",
  },
  {
    title: "OOH Oglasavanje",
    slug: "ooh-oglasavanje",
    icon: "MapPin" as const,
    description:
      "Bilbordi, city lightovi i outdoor kampanje u Nisu i Srbiji.",
  },
  {
    title: "Graficki Dizajn",
    slug: "graficki-dizajn",
    icon: "PenTool" as const,
    description:
      "Kreativna graficka resenja za print i digitalne medije.",
  },
  {
    title: "Event Marketing",
    slug: "event-marketing",
    icon: "Calendar" as const,
    description:
      "Organizacija i promocija dogadjaja koji ostavljaju utisak.",
  },
  {
    title: "Media Planning",
    slug: "media-planning",
    icon: "BarChart3" as const,
    description:
      "Stratesko planiranje medija za maksimalan doseg i ROI.",
  },
];

export const CLIENTS = [
  { name: "McDonald's", logo: "/images/clients/mcdonalds.svg" },
  { name: "Delta Planet", logo: "/images/clients/delta-planet.svg" },
  { name: "AIK Banka", logo: "/images/clients/aik-banka.svg" },
  { name: "Eurobank", logo: "/images/clients/eurobank.svg" },
  { name: "Emmezeta", logo: "/images/clients/emmezeta.svg" },
  { name: "Vapiano", logo: "/images/clients/vapiano.svg" },
  { name: "Mr. Bricolage", logo: "/images/clients/mr-bricolage.svg" },
];

export const INDUSTRIES = [
  { title: "Restorani i ugostiteljstvo", slug: "restorani-i-ugostiteljstvo", icon: "UtensilsCrossed" as const },
  { title: "Zdravstvo", slug: "zdravstvo", icon: "HeartPulse" as const },
  { title: "E-commerce", slug: "e-commerce", icon: "ShoppingCart" as const },
  { title: "Nekretnine", slug: "nekretnine", icon: "Building2" as const },
  { title: "Auto industrija", slug: "auto-industrija", icon: "Car" as const },
  { title: "IT kompanije", slug: "it-kompanije", icon: "Code2" as const },
];

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Usluge",
    href: "/#usluge",
    children: SERVICES.map((s) => ({
      label: s.title,
      href: `/usluge/${s.slug}/`,
    })),
  },
  {
    label: "Industrije",
    href: "/#industrije",
    children: INDUSTRIES.map((i) => ({
      label: i.title,
      href: `/industrije/${i.slug}/`,
    })),
  },
  { label: "Radovi", href: "/radovi/" },
  {
    label: "O nama",
    href: "/o-nama/",
    children: [
      { label: "O kompaniji", href: "/o-nama/" },
      { label: "Nas tim", href: "/o-nama/tim/" },
    ],
  },
  { label: "Blog", href: "/blog/" },
  { label: "Kontakt", href: "/kontakt/" },
];
