export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://advercity.rs";
export const SITE_NAME = "Advercity";
export const SITE_DESCRIPTION =
  "Advercity je kreativna marketing agencija u Nišu sa 25+ godina iskustva. Pružamo usluge digitalnog marketinga, SEO optimizacije, brendinga, web dizajna i OOH oglašavanja.";

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
  { value: 20, suffix: "+", label: "Članova tima" },
  { value: 7, suffix: "+", label: "Industrija" },
];

export const SERVICES = [
  {
    title: "Grafički dizajn",
    slug: "graficki-dizajn",
    icon: "PenTool" as const,
    description:
      "Kreativna grafička rešenja za print i digitalne medije.",
  },
  {
    title: "Brendiranje",
    slug: "branding",
    icon: "Palette" as const,
    description:
      "Vizuelni identitet i strategija brenda koja vas izdvaja.",
  },
  {
    title: "Marketing na društvenim mrežama",
    slug: "social-media-marketing",
    icon: "Share2" as const,
    description:
      "Upravljanje društvenim mrežama i kreiranje angažujućeg sadržaja.",
  },
  {
    title: "Google oglašavanje",
    slug: "google-ads",
    icon: "Target" as const,
    description:
      "Plaćeno oglašavanje sa merljivim ROI i preciznim targetiranjem.",
  },
  {
    title: "WEB sajt",
    slug: "web-dizajn",
    icon: "Monitor" as const,
    description:
      "Moderni, brzi i SEO optimizovani sajtovi koji konvertuju.",
  },
  {
    title: "Bilbordi / LED ekrani",
    slug: "ooh-oglasavanje",
    icon: "MapPin" as const,
    description:
      "Bilbordi, city lightovi i outdoor kampanje u Nisu i Srbiji.",
  },
  {
    title: "Organizacija događaja",
    slug: "event-marketing",
    icon: "Calendar" as const,
    description:
      "Organizacija i promocija događaja koji ostavljaju utisak.",
  },
  {
    title: "Media planiranje",
    slug: "media-planning",
    icon: "BarChart3" as const,
    description:
      "Strateško planiranje medija za maksimalan doseg i ROI.",
  },
  {
    title: "Foto i video produkcija",
    slug: "foto-i-video-produkcija",
    icon: "Camera" as const,
    description:
      "Profesionalna foto i video produkcija za vaš brend i kampanje.",
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
  { label: "Projekti", href: "/projekti/" },
  {
    label: "O nama",
    href: "/o-nama/",
    children: [
      { label: "O kompaniji", href: "/o-nama/" },
      { label: "Naš tim", href: "/o-nama/tim/" },
    ],
  },
  { label: "Blog", href: "/blog/" },
  { label: "Kontakt", href: "/kontakt/" },
];
