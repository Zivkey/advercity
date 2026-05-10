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
    caption?: string;
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
    title: "Marketing društvenih mreža",
    metaTitle: "Marketing društvenih mreža Niš | Instagram, Facebook, TikTok, LinkedIn | Advercity",
    metaDescription:
      "Social media marketing — strategija, kreativni sadržaj, dizajn postova, reels produkcija i targetiranje na Instagramu, Facebooku, TikTok-u i LinkedIn-u. Advercity, Niš.",
    heroSubtitle:
      "Social media marketing je bitan segment marketing mixa i moćan komunikacioni kanal ukoliko se koristi na pravi način.",
    intro:
      "Mi znamo kako se uspešno plasira brend preko društvenih mreža. Strategija, kreativni sadržaj, dizajn, produkcija i pravo targetiranje — sve na jednom mestu, sa jasnim ciljem da brend dobije pažnju i izgradi prepoznatljivost.",
    sections: [
      {
        title: "Mreže",
        text: "Instagram, Facebook, TikTok, LinkedIn, najvažnije su društvene mreže preko kojih se odvija komunikacija. Svaka ima svoje specifičnosti, počev od starosnih i društvenih grupa koje ih pretežno koriste, preko prirode i karaktera njihovih sadržaja, do tehničkih aspekata. Mi definišemo strategiju koja će na optimalan način plasirati poruke brenda — kreativni tim osmišljava sadržaj, dizajneri postove čine zanimljivim i lepim, a produkcija snima reels video formate.",
        image: "/images/services/social-media/mreze.jpg",
        imageAlt: "Marketing na društvenim mrežama — Instagram, Facebook, TikTok i LinkedIn strategije, Advercity Niš",
        caption: "Pekare Žitopek (Don Don)",
      },
      {
        title: "Način plasiranja postova",
        text: "Naše znanje i iskustvo u planiranju strategije komunikacije na društvenim mrežama definiše odnos plasiranja organskih i plaćenih sadržaja. U zagušenom viralnom prostoru prepunom postova, poruka, reel videa, posebno je važno profesionalno planiranje utroška budžeta za društvene mreže, jer organski sadržaji sami po sebi nisu dovoljni. Definišemo target grupe i teritorije, plasiramo organske i plaćene objave, sarađujemo sa influenserima koji plasiraju poruke naših klijenata, obavljamo monitoring rezultata kojima prilagođavamo dalju strategiju.",
        image: "/images/services/social-media/plasiranje-postova.jpg",
        imageAlt: "Način plasiranja postova na društvenim mrežama — organski i plaćeni sadržaj, influenseri i monitoring rezultata, Advercity Niš",
        caption: "Shopping mall Delta Planet",
        reverse: true,
      },
      {
        title: "Profili",
        text: "Pored toga što sadržaj mora da bude zanimljiv, treba da poštuje vizuelne standarde brenda. Unifikacija u vidu zadatih kolorita, grafičkih paterna, prepoznatljivi slogani i ton copywritinga, usklađuju se sa komunikacionim rešenjima koje brend komunicira putem ostalih kanala — televizije, štampe, outdoor oglašavanja. Prepoznatljivost je bitan tržišni segment po kome kupci svesno ili podsvesno biraju određeni proizvod ili uslugu.",
        image: "/images/services/social-media/profili.jpg",
        imageAlt: "Vizuelno ujednačeni profili na društvenim mrežama u skladu sa identitetom brenda — Advercity Niš",
        caption: "Restoran Bocconcino",
      },
    ],
    features: [
      "Strategija za Instagram, Facebook, TikTok i LinkedIn",
      "Kreativni sadržaj i copywriting",
      "Dizajn postova i banera",
      "Produkcija reels i video formata",
      "Definisanje ciljnih grupa i target teritorija",
      "Planiranje budžeta i dinamike objava",
      "Vizuelno ujednačeni profili u skladu sa brendom",
      "Cross-channel usklađenost sa TV, štampom i OOH",
    ],
    ctaText: "Pokrenite vaše društvene mreže sa nama",
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
    title: "Brendiranje",
    metaTitle: "Brendiranje Niš | Enterijeri, Eksterijeri i Vozila | Advercity",
    metaDescription:
      "Brendiranje upravnih zgrada, maloprodajnih objekata, fasada, enterijera i vozila. Svetleće reklame, 3D logo, folije, štampani vinili. Advercity, Niš — 25+ godina iskustva.",
    heroSubtitle:
      "Svako vidljivo mesto je pogodno za brend komunikaciju.",
    intro:
      "Jedan od pojavnih segmenata brenda je njegovo prisustvo u prostoru. Upravne zgrade, maloprodajni objekti, fasade, stakleni portali, zidovi kancelarija i holova, kamioni, automobili, svetleća reklama na zgradi… gde god vidiš zgodno mesto ti brend posadi :-)",
    sections: [
      {
        title: "Enterijeri",
        text: "Market, butik, sala za prezentacije, restoran, ulazni foaje, idealna su mesta da pozicioniramo 3D logo, okačimo poster u klip frejmu, pokažemo brend. Svaki prostor u kome se odvija delatnost dobar je za komunikaciju sa kupcima i poslovnim partnerima. U konferencijskoj sali, holu i kancelarijama će akcenat biti na brendu, u filijali banke na aktuelnim ponudama kredita i servisa, u restoranu na hrani, u marketima na akcijama i posebnim ponudama, u butiku na novoj kolekciji. Naš kreativni tim će osmisliti pravo idejno rešenje i adekvatno brendirati enterijer u kome obavljate svoj posao.",
        image: "/images/services/brendiranje/enterijer.jpg",
        imageAlt: "Brendiranje enterijera — 3D logo, posteri u klip frejmu i brendiranje kancelarija, Advercity Niš",
        caption: "Naučno Tehnološki Park Niš",
      },
      {
        title: "Eksterijeri",
        text: "Stakleni portal restorana, marketa, filijale banke, butika, radnje, ulaz u poslovnu zgradu, fasada, idealna su mesta da postavimo svetleću reklamu, zalepimo foliju sa reklamom preko cele površine, diskretno brendiramo staklo ka prolaznicima. Tzv. maloprodajni prostori su posebno pogodni za prenošenje promo poruka, koje će ga učiniti lepšim, ali i pomoći u povećanju prodaje. Naš kreativni tim će osmisliti pravo idejno rešenje i adekvatno brendirati eksterijer kojim se obraćate direktno kupcima i klijentima.",
        image: "/images/services/brendiranje/eksterijer.jpg",
        imageAlt: "Brendiranje eksterijera — svetleće reklame, folije i staklene portale, Advercity Niš",
        caption: "Restoran Vapiano TC Rajićeva",
        reverse: true,
      },
      {
        title: "Vozila",
        text: "Bilo da je u pitanju kamion, pik ap, putničko vozilo ili autobusi i tramvaji gradskog prevoza, oni su dobar medij preko koga komunicirate svoj brend ili proizvode, tzv. pokretni bilbord. Štampani vinili kao cerada ili specijalne folije za oblepljivanje svih površina vozila će trajati dugo, ulepšati vozilo i predstavljati vašu reklamnu kampanju u pokretu. Naš kreativni tim će osmisliti pravo idejno rešenje i adekvatno brendirati svako vozilo kojim obavljate svoj posao.",
        image: "/images/services/brendiranje/vozila.jpg",
        imageAlt: "Brendiranje vozila — kamioni, pik apovi i putnička vozila kao pokretni bilbord, Advercity Niš",
        caption: "Mlekara Milk House",
      },
    ],
    features: [
      "Brendiranje enterijera (kancelarije, butici, marketi, banke)",
      "3D logo i posteri u klip frejmu",
      "Brendiranje fasada i staklenih portala",
      "Svetleće reklame i osvetljeni natpisi",
      "Folije za oblepljivanje vozila i staklenih površina",
      "Štampani vinili i cerade za kamione",
      "Diskretno brendiranje staklenih portala",
      "Idejna rešenja za sve maloprodajne prostore",
    ],
    ctaText: "Brendirajte vaš prostor i vozila sa nama",
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
    title: "Grafički dizajn",
    metaTitle: "Grafički dizajn Niš | Total Branding Concept | Advercity",
    metaDescription:
      "Kreativna grafička rešenja i total branding concept za sve komunikacione kanale — vizuelni identitet, logo, pakovanja, digitalne i outdoor kampanje. Advercity, Niš.",
    heroSubtitle:
      "Total branding concept — kreativna rešenja za efikasno prenošenje promotivnih poruka na svim komunikacionim kanalima.",
    intro:
      "Kreativna rešenja i grafički koncepti kroz dizajn vizuala, za efikasno prenošenje promotivnih poruka u realizaciji marketinških kampanja na svim komunikacionim kanalima.",
    sections: [
      {
        title: "Vizuelni identitet",
        text: "Naš rad počinje osmišljavanjem imena... za kompaniju, brend, novi proizvod. Nastavlja se korporativnim sloganom i ključnim promo porukama. Nakon toga dizajniramo vizuelni identitet, od logoa i znaka, do kompletne primene definisane kroz „Knjigu Grafičkih Standarda“. Kreativni proces se nastavlja — dizajnom pakovanja za proizvode, brendiranjem maloprodajnih objekata, vozila, upravne zgrade, ličnog imidža direktora — zaokruženi vizuelni identitet je prva determinanta poslovnog i tržišnog identiteta kompanije.",
        image: "/images/services/graficki-dizajn/vizuelni-identitet.jpg",
        imageAlt: "Vizuelni identitet kompanije — logo, Knjiga grafičkih standarda i brendiranje objekata, Advercity agencija Niš",
        caption: "NTP Niš",
      },
      {
        title: "Logo",
        text: "Slovni ispis imena kompanije ili proizvoda (logotip) zajedno sa grafičkim znakom (ili nekad bez njega) predstavlja osnovni potpis vašeg brenda, pandan svojeručnom potpisu. Jedan pogled na logo koji ćemo mi dizajnirati govori više od hiljadu reči, šalje poruku i ostavlja pečat prepoznatljivosti koji će trajati dugo.",
        image: "/images/services/graficki-dizajn/logo.jpg",
        imageAlt: "Dizajn logotipa i grafičkog znaka za kompaniju — grafički dizajn Advercity Niš",
        caption: "Rezidencijalni stambeni kompleks Bekatown Aranđelovac (Bekament)",
        reverse: true,
      },
      {
        title: "Pakovanja",
        text: "Adver City kreativni tim na osnovu ciljnih grupa, karaktera proizvoda i prodajnih targeta dizajnira adekvatna, lepa, prepoznatljiva, moderna, upečatljiva, unificirana, jedinstvena pakovanja proizvoda u industriji hrane, kozmetike, farmacije. Pakovanje štiti vaš proizvod do momenta konzumacije, ali pre svega vizuelno mami kupce da baš njega odaberu i nekada primarno utiče na prodaju. Po njemu brendovi postaju prepoznatljivi, prate trendove u branši, diferenciraju se od konkurencije.",
        image: "/images/services/graficki-dizajn/pakovanja.jpg",
        imageAlt: "Dizajn pakovanja proizvoda za hranu, kozmetiku i farmaciju — Advercity graficki dizajn Nis",
        caption: "Mlekara Milk House",
      },
      {
        title: "Dizajn kampanja za sve medijske kanale",
        text: "Kompletni kreativni koncepti za plasiranje reklamnih kampanja na svim kanalima komunikacija kroz različite medije, od društvenih mreža i web sajtova, preko štampe, OOH oglašavanja na bilbordima i LED ekranima, televizije, radija, direct i POS marketinga. Kampanje koje mi plasiramo su definisane strategijom i medijskim miksom, osmišljene da probude pažnju, budu upamćene, probude želju za kupovinom i motivišu potrošače.",
        image: "/images/services/graficki-dizajn/kampanje-svi-kanali.jpg",
        imageAlt: "Dizajn reklamnih kampanja za sve medijske kanale — štampa, digital, OOH, TV, Advercity Niš",
        caption: "Kampanja AIK Banka",
        reverse: true,
      },
      {
        title: "Dizajn kampanja za digitalni marketing",
        text: "Osmisliti kontent je prvi i veoma značajan zadatak koji se u našem radu ogleda u dizajnu postova, banera, snimanju reels formata... za realizaciju kampanja na Meta i Google kanalima.",
        image: "/images/services/graficki-dizajn/digitalni-marketing.jpg",
        imageAlt: "Dizajn postova i banera za Instagram, Facebook, TikTok i Google Ads — Advercity digitalni marketing Niš",
        caption: "Shopping mall Delta Planet",
      },
      {
        title: "Kampanje za outdoor oglašavanje",
        text: "Dizajniramo postere za billboard, city light, LED i big formats panoe. Planiramo i realizujemo kampanje na mreži reklamnih panoa u vlasništvu naše agencije, kao i kroz partnerske mreže na teritoriji cele zemlje.",
        image: "/images/services/graficki-dizajn/outdoor.jpg",
        imageAlt: "Dizajn za outdoor oglašavanje — billboard, city light, LED i big format panoi, Advercity Niš",
        caption: "Poslastičara MELT",
        reverse: true,
      },
      {
        title: "POS marketing",
        text: "Vobleri, posteri svih formata, roll up panoi, promo pultovi, višilice, samostalne market police, pokloni za terenske promocije, uniforme — radimo zajedno sa BTL timovima naših klijenata na marketing kampanjama na prodajnim mestima.",
        image: "/images/services/graficki-dizajn/pos-marketing.jpg",
        imageAlt: "POS marketing materijali — vobleri, roll up panoi, promo pultovi i posteri, Advercity Niš",
        caption: "Pekare Žitopek (Don Don)",
      },
    ],
    features: [
      "Vizuelni identitet i Knjiga grafičkih standarda",
      "Logo i logotip dizajn",
      "Dizajn pakovanja (hrana, kozmetika, farmacija)",
      "Brendiranje objekata, vozila i prostora",
      "Kampanje za digitalne medije i social media",
      "Outdoor kampanje (bilbordi, city light, LED)",
      "POS marketing materijali",
      "Kreativni koncepti za sve komunikacione kanale",
    ],
    ctaText: "Pokrenite kreativni projekat sa nama",
  },
  {
    slug: "event-marketing",
    title: "Organizacija događaja",
    metaTitle: "Organizacija događaja Niš | Otvaranja, godišnjice, promocije | Advercity",
    metaDescription:
      "Organizacija poslovnih događaja — otvaranja objekata, polaganje kamena temeljca, godišnjice kompanija, lansiranja proizvoda. Kompletna logistika i produkcija. Advercity, Niš.",
    heroSubtitle:
      "Svaki značajan trenutak u poslovanju zaslužuje da bude obeležen na adekvatan način.",
    intro:
      "Polaganje kamena temeljca za novu fabriku, dan otvaranja fabrike, novi prodajni objekat u lancu butika ili marketa, šoping mol, tržni centar, nova filijala banke, nove kancelarije, godišnjica kompanije… Ove događaje treba pažljivo osmisliti, napraviti plan dešavanja i satnicu dinamike.",
    sections: [
      {
        title: "Kompletna organizacija na jednom mestu",
        text: "To do lista može biti veoma obimna: pripremanje objekta i finalno čišćenje, određivanje prostora za održavanje događaja i raspored elemenata u njemu, štampana i elektronska pozivnica, spisak zvanica (poslovni partneri, državni i gradski zvaničnici, zaposleni), program (moderator, govornici), tehnička podrška (bina, ozvučenje, rasveta, LED ekrani, baneri), posluženje (piće, hrana), štampani promo materijal, pokloni za goste, produkcija videa za prikazivanje na LED ekranu, štampa banera, foto i video snimanje događaja, hostese, obezbeđenje, mediji (TV i radio stanice, dnevne novine, web portali), dekoracija (baloni, trake, roll up), momenat puštanja u rad (sečenje ukrasne trake, animacija), prenoćište i večera za goste koji dolaze iz drugih gradova. Naša agencija je do sada organizovala veliki broj događaja — spremni smo da osmislimo i realizujemo i vaš.",
        image: "/images/services/organizacija-dogadjaja/organizacija-dogadjaja.jpg",
        imageAlt: "Organizacija poslovnih događaja — otvaranja, godišnjice i promocije sa kompletnom logistikom, Advercity Niš",
        caption: "Destilerija VEK",
      },
    ],
    features: [
      "Plan dešavanja i satnica dinamike",
      "Štampane i elektronske pozivnice",
      "Spisak zvanica i program (moderator, govornici)",
      "Tehnička podrška (bina, ozvučenje, rasveta, LED ekrani)",
      "Posluženje, dekoracija i pokloni za goste",
      "Produkcija videa i štampa banera",
      "Foto i video snimanje događaja",
      "Hostese, obezbeđenje, medijska pokrivenost",
    ],
    ctaText: "Organizujte nezaboravan događaj sa nama",
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
  {
    slug: "foto-i-video-produkcija",
    title: "Foto i video produkcija",
    metaTitle: "Foto i video produkcija Niš | Reklamne kampanje, reels, TV spotovi | Advercity",
    metaDescription:
      "Profesionalna foto i video produkcija — fotografija pakovanja i kampanja, reels formati, TV spotovi, promo i korporativni filmovi, video sa događaja. Advercity, Niš.",
    heroSubtitle:
      "Profesionalna foto i video produkcija koja prezentuje vaš brend na pravi način.",
    intro:
      "Od fotografije pakovanja proizvoda i scena za reklamne kampanje, do reels formata, TV spotova i korporativnih filmova — naša produkcija pokriva ceo spektar vizuelnog sadržaja koji brendu treba na svim kanalima komunikacije.",
    sections: [
      {
        title: "Foto",
        text: "Izrada profesionalnih fotografija koja podrazumeva slikanje pakovanja proizvoda, scena za reklamne kampanje, važnih događaja, sa obradom najboljih i njihovom pripremom za štampu ili upotrebu u digitalnom oglašavanju.",
        image: "/images/services/foto-video/foto.jpg",
        imageAlt: "Foto produkcija — fotografija pakovanja proizvoda i scena za reklamne kampanje, Advercity Niš",
        caption: "Mlekara Milk House",
      },
      {
        title: "Video",
        text: "Snimanje i montaža profesionalnih video klipova različitih namena — reel formati za društvene mreže, reklamni spotovi za oglašavanje na televiziji, promo filmovi, korporativni video filmovi, video zapisi sa događaja.",
        image: "/images/services/foto-video/video.jpg",
        imageAlt: "Video produkcija — snimanje i montaža reels, TV spotova i korporativnih filmova, Advercity Niš",
        caption: "Restoran Balkanska kujna",
        reverse: true,
      },
    ],
    features: [
      "Fotografija pakovanja proizvoda",
      "Scene za reklamne kampanje",
      "Fotografija sa važnih događaja",
      "Obrada i priprema za štampu i digital",
      "Reels video formati za društvene mreže",
      "Reklamni spotovi za televiziju",
      "Promo i korporativni video filmovi",
      "Video zapisi sa događaja",
    ],
    ctaText: "Zakažite foto ili video produkciju",
  },
];
