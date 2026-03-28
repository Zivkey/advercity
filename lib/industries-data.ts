export interface IndustryPage {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  intro: string;
  sections: {
    title: string;
    text: string;
    image?: string;
    imageAlt?: string;
    reverse?: boolean;
  }[];
  features: string[];
}

export const INDUSTRY_PAGES: IndustryPage[] = [
  {
    slug: "restorani-i-ugostiteljstvo",
    title: "Restorani i Ugostiteljstvo",
    metaTitle: "Marketing za Restorane Nis | Ugostiteljstvo | Advercity",
    metaDescription:
      "Specijalizovane marketing strategije za restorane, kafiće i ugostiteljske objekte. Social media, Google Ads i branding koji pune stolove.",
    heroSubtitle:
      "Marketing strategije koje pune stolove i grade lojalnost gostiju.",
    intro:
      "Ugostiteljska industrija zahteva poseban pristup marketingu — brz, vizuelan i fokusiran na lokalnu publiku. Nas tim ima dugogodisnje iskustvo u radu sa restoranima, kaficima i hotelima sirom Srbije. Od social media upravljanja do Google Ads kampanja, znamo kako da dovedemo goste do vaseg lokala.",
    sections: [
      {
        title: "Social media koji privlaci goste",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.",
        image: "https://picsum.photos/seed/ind-rest1/800/600",
        imageAlt: "Social media za restorane",
      },
      {
        title: "Lokalni SEO i Google profil",
        text: "Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa. Sed cursus turpis vitae tortor.",
        image: "https://picsum.photos/seed/ind-rest2/800/600",
        imageAlt: "Google profil za restorane",
        reverse: true,
      },
    ],
    features: [
      "Upravljanje Instagram i Facebook profilima",
      "Food fotografija i video sadrzaj",
      "Google Business Profile optimizacija",
      "Kampanje za dostavu i rezervacije",
      "Loyalty programi i promocije",
      "Meni dizajn i branding materijali",
    ],
  },
  {
    slug: "zdravstvo",
    title: "Zdravstvo",
    metaTitle: "Marketing za Zdravstvo Nis | Klinike i Ordinacije | Advercity",
    metaDescription:
      "Marketing strategije za zdravstvene ustanove, klinike i ordinacije. Etican i efikasan pristup koji gradi poverenje pacijenata.",
    heroSubtitle:
      "Etican i efikasan marketing koji gradi poverenje pacijenata.",
    intro:
      "Marketing u zdravstvu zahteva posebnu osetljivost i postovanje etickih standarda. Nas tim razume specificnosti komunikacije u medicinskoj industriji i kreira kampanje koje informisu, edukuju i grade poverenje. Radimo sa privatnim klinikama, ordinacijama i zdravstvenim ustanovama.",
    sections: [
      {
        title: "Digitalna prisutnost koja uliva poverenje",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.",
        image: "https://picsum.photos/seed/ind-health1/800/600",
        imageAlt: "Digitalni marketing za zdravstvo",
      },
      {
        title: "Edukativni sadrzaj i content marketing",
        text: "Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa.",
        image: "https://picsum.photos/seed/ind-health2/800/600",
        imageAlt: "Content marketing za klinike",
        reverse: true,
      },
    ],
    features: [
      "Web sajtovi za klinike i ordinacije",
      "SEO za medicinske termine i usluge",
      "Google Ads kampanje za pacijente",
      "Edukativni blog sadrzaj",
      "Upravljanje online reputacijom",
      "Postovanje GDPR i zdravstvenih regulativa",
    ],
  },
  {
    slug: "e-commerce",
    title: "E-commerce",
    metaTitle: "Marketing za E-commerce | Online Prodavnice | Advercity",
    metaDescription:
      "Povecajte prodaju vase online prodavnice sa nasim strategijama. Google Shopping, remarketing, SEO i konverziona optimizacija.",
    heroSubtitle:
      "Strategije koje povecavaju prodaju i smanjuju cenu akvizicije kupaca.",
    intro:
      "E-commerce marketing zahteva preciznost, analitiku i konstantno testiranje. Nas tim pomaze online prodavnicama da povecaju saobracaj, poboljsaju konverzije i smanje troskove oglasavanja. Od Google Shopping kampanja do email automatizacije, pokrivamo sve kanale.",
    sections: [
      {
        title: "Google Shopping i Performance Max",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.",
        image: "https://picsum.photos/seed/ind-ecom1/800/600",
        imageAlt: "Google Shopping kampanje",
      },
      {
        title: "Remarketing i email automatizacija",
        text: "Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa. Sed cursus turpis vitae tortor.",
        image: "https://picsum.photos/seed/ind-ecom2/800/600",
        imageAlt: "Email marketing za e-commerce",
        reverse: true,
      },
    ],
    features: [
      "Google Shopping i Performance Max kampanje",
      "Facebook i Instagram Shop integracija",
      "Remarketing i abandoned cart kampanje",
      "SEO optimizacija kategorija i proizvoda",
      "Email marketing automatizacija",
      "Analitika i A/B testiranje",
    ],
  },
  {
    slug: "nekretnine",
    title: "Nekretnine",
    metaTitle: "Marketing za Nekretnine Nis | Agencije i Investitori | Advercity",
    metaDescription:
      "Marketing strategije za agencije za nekretnine i investitore. Generisanje kvalitetnih leadova i prezentacija projekata.",
    heroSubtitle:
      "Marketing koji generise kvalitetne leadove i prezentuje projekte na pravi nacin.",
    intro:
      "Trziste nekretnina zahteva vizuelno privlacne prezentacije i precizno targetiranje kupaca. Radimo sa agencijama za nekretnine, investitorima i gradevinskim kompanijama na kampanjama koje generisu kvalitetne leadove i ubrzavaju prodaju.",
    sections: [
      {
        title: "Vizuelna prezentacija projekata",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.",
        image: "https://picsum.photos/seed/ind-real1/800/600",
        imageAlt: "Marketing za nekretnine",
      },
      {
        title: "Lead generacija i nurturing",
        text: "Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa.",
        image: "https://picsum.photos/seed/ind-real2/800/600",
        imageAlt: "Lead generacija za nekretnine",
        reverse: true,
      },
    ],
    features: [
      "3D renderinzi i virtualne ture",
      "Facebook i Google Ads za nekretnine",
      "Landing stranice za projekte",
      "CRM integracija i lead tracking",
      "Branding novogradnji",
      "Stampani materijali i brosure",
    ],
  },
  {
    slug: "auto-industrija",
    title: "Auto Industrija",
    metaTitle: "Marketing za Auto Industriju | Saloni i Servisi | Advercity",
    metaDescription:
      "Marketing strategije za auto salone, servise i dilere. Od digitalnih kampanja do event marketinga — sve na jednom mestu.",
    heroSubtitle:
      "Kampanje koje voze rezultate za auto salone, servise i dilere.",
    intro:
      "Auto industrija je konkurentno trziste gde svaki detalj u marketingu moze napraviti razliku. Nas tim kreira kampanje za auto salone, servise i dilere koje privlace kupce, generisu test voznje i grade lojalnost brenda.",
    sections: [
      {
        title: "Digitalne kampanje za auto salone",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.",
        image: "https://picsum.photos/seed/ind-auto1/800/600",
        imageAlt: "Marketing za auto salone",
      },
      {
        title: "Event marketing i promocije",
        text: "Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa. Sed cursus turpis vitae tortor.",
        image: "https://picsum.photos/seed/ind-auto2/800/600",
        imageAlt: "Event marketing za auto industriju",
        reverse: true,
      },
    ],
    features: [
      "Google Ads za auto kljucne reci",
      "Facebook Lead Ads za test voznje",
      "Video produkcija i foto sesije vozila",
      "Sajamske prezentacije i eventi",
      "Loyalty programi za servisne korisnike",
      "OOH kampanje za nove modele",
    ],
  },
  {
    slug: "it-kompanije",
    title: "IT Kompanije",
    metaTitle: "Marketing za IT Kompanije | SaaS i Tech | Advercity",
    metaDescription:
      "Marketing strategije za IT kompanije, SaaS proizvode i tech startupe. Generisanje leadova, content marketing i employer branding.",
    heroSubtitle:
      "Marketing koji pomaze tech kompanijama da rastu i privuku najbolje talente.",
    intro:
      "IT sektor zahteva marketing koji razume tehnicku publiku i kompleksne proizvode. Radimo sa IT kompanijama, SaaS providerima i tech startupima na kampanjama koje generisu B2B leadove, grade thought leadership i pomazu u employer brandingu.",
    sections: [
      {
        title: "B2B lead generacija",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.",
        image: "https://picsum.photos/seed/ind-it1/800/600",
        imageAlt: "B2B marketing za IT",
      },
      {
        title: "Employer branding i recruiting",
        text: "Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa.",
        image: "https://picsum.photos/seed/ind-it2/800/600",
        imageAlt: "Employer branding za IT firme",
        reverse: true,
      },
    ],
    features: [
      "LinkedIn kampanje i B2B targeting",
      "Content marketing i thought leadership",
      "Employer branding strategije",
      "SaaS landing stranice i konverzije",
      "Tech event marketing",
      "Case studies i whitepapers",
    ],
  },
];
