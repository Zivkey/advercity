export interface ServicePage {
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
  ctaText: string;
}

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: "digitalni-marketing",
    title: "Digitalni Marketing",
    metaTitle: "Digitalni Marketing Nis | Online Strategije | Advercity",
    metaDescription:
      "Kompletne digitalne marketing strategije za rast vaseg biznisa online. Google Ads, SEO, social media i content marketing. Advercity — 25+ godina iskustva.",
    heroSubtitle:
      "Kompletne digitalne strategije koje donose merljive rezultate za vas biznis.",
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    sections: [
      {
        title: "Strategija koja donosi rezultate",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae.",
        image: "https://picsum.photos/seed/digital1/800/600",
        imageAlt: "Digitalna marketing strategija",
      },
      {
        title: "Multichannel pristup",
        text: "Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu. Phasellus accumsan cursus velit.",
        image: "https://picsum.photos/seed/digital2/800/600",
        imageAlt: "Multichannel marketing",
        reverse: true,
      },
    ],
    features: [
      "Google Ads kampanje sa optimizovanim ROI",
      "Content marketing i blog strategija",
      "Email marketing automatizacija",
      "Analitika i mesecni izvestaji",
      "Conversion rate optimizacija",
      "Marketing automatizacija",
    ],
    ctaText: "Zakazite besplatnu konsultaciju za digitalnu strategiju",
  },
  {
    slug: "seo-optimizacija",
    title: "SEO Optimizacija",
    metaTitle: "SEO Optimizacija Nis | Google Pozicioniranje | Advercity",
    metaDescription:
      "Profesionalna SEO optimizacija za bolje pozicioniranje na Google pretrazi. On-page, off-page i tehnicki SEO. Advercity — rezultati koji se mere.",
    heroSubtitle:
      "Organsko pozicioniranje na Google pretrazi za dugorocne rezultate.",
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo.",
    sections: [
      {
        title: "On-Page SEO optimizacija",
        text: "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Maecenas sed diam eget risus varius blandit sit amet non magna.",
        image: "https://picsum.photos/seed/seo1/800/600",
        imageAlt: "On-page SEO optimizacija",
      },
      {
        title: "Tehnicki SEO",
        text: "Cras justo odio, dapibus ut facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean lacinia bibendum nulla sed consectetur.",
        image: "https://picsum.photos/seed/seo2/800/600",
        imageAlt: "Tehnicki SEO audit",
        reverse: true,
      },
      {
        title: "Link building i Off-Page SEO",
        text: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Sed posuere consectetur est at lobortis.",
        image: "https://picsum.photos/seed/seo3/800/600",
        imageAlt: "Link building strategija",
      },
    ],
    features: [
      "Keyword istrazivanje i analiza konkurencije",
      "On-page optimizacija sadrzaja",
      "Tehnicki SEO audit i popravke",
      "Link building strategija",
      "Lokalni SEO za Google Maps",
      "Mesecni SEO izvestaji i praćenje pozicija",
    ],
    ctaText: "Zakazite besplatni SEO audit vaseg sajta",
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    metaTitle: "Social Media Marketing Nis | Drustvene Mreze | Advercity",
    metaDescription:
      "Upravljanje drustvenim mrezama i kreiranje angazujuceg sadrzaja. Facebook, Instagram, LinkedIn marketing. Advercity — kreativna agencija Nis.",
    heroSubtitle:
      "Upravljanje drustvenim mrezama i kreiranje sadrzaja koji angazuje.",
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    sections: [
      {
        title: "Kreiranje sadrzaja",
        text: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Cras justo odio, dapibus ut facilisis in, egestas eget quam.",
        image: "https://picsum.photos/seed/social1/800/600",
        imageAlt: "Social media content kreiranje",
      },
      {
        title: "Community management",
        text: "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus.",
        image: "https://picsum.photos/seed/social2/800/600",
        imageAlt: "Community management",
        reverse: true,
      },
    ],
    features: [
      "Facebook i Instagram marketing",
      "LinkedIn B2B strategije",
      "Kreiranje vizuelnog sadrzaja",
      "Community management",
      "Influencer marketing",
      "Social media analitika",
    ],
    ctaText: "Pokrenite vase drustvene mreze sa nama",
  },
  {
    slug: "google-ads",
    title: "Google Ads",
    metaTitle: "Google Ads Nis | PPC Oglasavanje | Advercity",
    metaDescription:
      "Profesionalno upravljanje Google Ads kampanjama sa merljivim ROI. Search, Display, YouTube i Shopping oglasi. Advercity — sertifikovani partneri.",
    heroSubtitle:
      "Placeno oglasavanje sa preciznim targetiranjem i merljivim rezultatima.",
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras justo odio, dapibus ut facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.",
    sections: [
      {
        title: "Search kampanje",
        text: "Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.",
        image: "https://picsum.photos/seed/ads1/800/600",
        imageAlt: "Google Search Ads kampanje",
      },
      {
        title: "Display i remarketing",
        text: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam quis risus eget urna mollis ornare vel eu leo.",
        image: "https://picsum.photos/seed/ads2/800/600",
        imageAlt: "Display advertising",
        reverse: true,
      },
    ],
    features: [
      "Google Search kampanje",
      "Display oglasavanje",
      "YouTube video reklame",
      "Google Shopping oglasi",
      "Remarketing strategije",
      "A/B testiranje i optimizacija",
    ],
    ctaText: "Pokrenite profitabilnu Google Ads kampanju",
  },
  {
    slug: "web-dizajn",
    title: "Web Dizajn",
    metaTitle: "Web Dizajn Nis | Izrada Sajtova | Advercity",
    metaDescription:
      "Moderni, brzi i SEO optimizovani sajtovi koji konvertuju posetioce u klijente. WordPress, Next.js, e-commerce. Advercity web dizajn Nis.",
    heroSubtitle:
      "Moderni sajtovi koji konvertuju posetioce u klijente.",
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    sections: [
      {
        title: "UX/UI dizajn",
        text: "Nullam quis risus eget urna mollis ornare vel eu leo. Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi porta gravida at eget metus.",
        image: "https://picsum.photos/seed/web1/800/600",
        imageAlt: "UX UI dizajn procesa",
      },
      {
        title: "Razvoj i implementacija",
        text: "Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas sed diam eget risus varius blandit sit amet non magna. Praesent commodo cursus magna.",
        image: "https://picsum.photos/seed/web2/800/600",
        imageAlt: "Web development",
        reverse: true,
      },
      {
        title: "Optimizacija performansi",
        text: "Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
        image: "https://picsum.photos/seed/web3/800/600",
        imageAlt: "Web performanse optimizacija",
      },
    ],
    features: [
      "Responsive dizajn za sve uredjaje",
      "SEO optimizovana struktura",
      "WordPress i custom razvoj",
      "E-commerce resenja",
      "Brz hosting i CDN",
      "Odrzavanje i podrska",
    ],
    ctaText: "Zakazite konsultaciju za novi sajt",
  },
  {
    slug: "branding",
    title: "Branding",
    metaTitle: "Branding Nis | Vizuelni Identitet | Advercity",
    metaDescription:
      "Profesionalan branding i vizuelni identitet koji vas izdvaja od konkurencije. Logo dizajn, brand strategija, brand book. Advercity branding Nis.",
    heroSubtitle:
      "Vizuelni identitet i strategija brenda koja vas izdvaja.",
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Maecenas faucibus mollis interdum.",
    sections: [
      {
        title: "Brand strategija",
        text: "Vestibulum id ligula porta felis euismod semper. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Morbi leo risus, porta ac consectetur ac.",
        image: "https://picsum.photos/seed/brand1/800/600",
        imageAlt: "Brand strategija razvoj",
      },
      {
        title: "Vizuelni identitet",
        text: "Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",
        image: "https://picsum.photos/seed/brand2/800/600",
        imageAlt: "Vizuelni identitet dizajn",
        reverse: true,
      },
    ],
    features: [
      "Logo dizajn i vizuelni sistem",
      "Brand strategija i pozicioniranje",
      "Brand book i smernice",
      "Ton komunikacije",
      "Packaging dizajn",
      "Rebrendiranje postojecih brendova",
    ],
    ctaText: "Izgradite jak brend sa nasim timom",
  },
  {
    slug: "ooh-oglasavanje",
    title: "OOH Oglasavanje",
    metaTitle: "OOH Oglasavanje Nis | Bilbordi i Outdoor | Advercity",
    metaDescription:
      "Bilbordi, city lightovi i outdoor kampanje u Nisu i Srbiji. Sopstvena mrezna infrastruktura. Advercity — 25+ godina u OOH oglasavanju.",
    heroSubtitle:
      "Bilbordi, city lightovi i outdoor kampanje u Nisu i Srbiji.",
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo odio, dapibus ut facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
    sections: [
      {
        title: "Nasa mrezna infrastruktura",
        text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum.",
        image: "https://picsum.photos/seed/ooh1/800/600",
        imageAlt: "Bilbord mreza Nis",
      },
      {
        title: "Dizajn za outdoor",
        text: "Vestibulum id ligula porta felis euismod semper. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod. Nullam quis risus eget urna mollis ornare vel eu leo. Cras mattis consectetur purus sit amet fermentum.",
        image: "https://picsum.photos/seed/ooh2/800/600",
        imageAlt: "Outdoor dizajn kampanje",
        reverse: true,
      },
    ],
    features: [
      "Bilbordi na premijum lokacijama",
      "City light oglasavanje",
      "Tranzitno oglasavanje",
      "Dizajn za outdoor formate",
      "Stratesko planiranje lokacija",
      "Merenje efektivnosti kampanja",
    ],
    ctaText: "Rezervisite premijum outdoor lokacije",
  },
  {
    slug: "graficki-dizajn",
    title: "Graficki Dizajn",
    metaTitle: "Graficki Dizajn Nis | Print i Digital | Advercity",
    metaDescription:
      "Kreativna graficka resenja za print i digitalne medije. Flajeri, brosure, katalozi, social media grafika. Advercity graficki dizajn Nis.",
    heroSubtitle:
      "Kreativna graficka resenja za print i digitalne medije.",
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue.",
    sections: [
      {
        title: "Print dizajn",
        text: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.",
        image: "https://picsum.photos/seed/graphic1/800/600",
        imageAlt: "Print dizajn materijali",
      },
      {
        title: "Digitalni dizajn",
        text: "Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo.",
        image: "https://picsum.photos/seed/graphic2/800/600",
        imageAlt: "Digitalni dizajn za social media",
        reverse: true,
      },
    ],
    features: [
      "Flajeri i brosure",
      "Katalozi i publikacije",
      "Social media grafika",
      "Infografike",
      "Prezentacije",
      "Ambalaza i etiketiranje",
    ],
    ctaText: "Pokrenite kreativni projekat sa nama",
  },
  {
    slug: "event-marketing",
    title: "Event Marketing",
    metaTitle: "Event Marketing Nis | Organizacija Dogadjaja | Advercity",
    metaDescription:
      "Organizacija i promocija dogadjaja koji ostavljaju utisak. Korporativni eventi, lansiranja proizvoda, promocije. Advercity event marketing Nis.",
    heroSubtitle:
      "Organizacija i promocija dogadjaja koji ostavljaju utisak.",
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ut facilisis in.",
    sections: [
      {
        title: "Planiranje i produkcija",
        text: "Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
        image: "https://picsum.photos/seed/event1/800/600",
        imageAlt: "Event planiranje i organizacija",
      },
      {
        title: "Promocija i pokrivanje",
        text: "Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",
        image: "https://picsum.photos/seed/event2/800/600",
        imageAlt: "Event promocija i marketing",
        reverse: true,
      },
    ],
    features: [
      "Korporativni eventi",
      "Lansiranja proizvoda",
      "Promocije i degustacije",
      "Sajamski nastupi",
      "Online eventi i webinari",
      "Post-event analitika",
    ],
    ctaText: "Organizujte nezaboravan dogadjaj",
  },
  {
    slug: "media-planning",
    title: "Media Planning",
    metaTitle: "Media Planning Nis | Stratesko Planiranje | Advercity",
    metaDescription:
      "Stratesko planiranje medija za maksimalan doseg i ROI. TV, radio, print, digital — optimalan media mix. Advercity media planning Nis.",
    heroSubtitle:
      "Stratesko planiranje medija za maksimalan doseg i ROI.",
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui.",
    sections: [
      {
        title: "Analiza i strategija",
        text: "Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
        image: "https://picsum.photos/seed/media1/800/600",
        imageAlt: "Media planning analiza",
      },
      {
        title: "Optimizacija budzeta",
        text: "Nullam quis risus eget urna mollis ornare vel eu leo. Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ut facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",
        image: "https://picsum.photos/seed/media2/800/600",
        imageAlt: "Media budget optimizacija",
        reverse: true,
      },
    ],
    features: [
      "TV i radio oglasavanje",
      "Print mediji",
      "Digital media buying",
      "Programmatic advertising",
      "Cross-channel atribucija",
      "ROI analiza i izvestavanje",
    ],
    ctaText: "Optimizujte vas media mix",
  },
];
