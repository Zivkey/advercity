export interface PortfolioItem {
  type: "project" | "text";
  title: string;
  client?: string;
  category?: string;
  image?: string;
  size: "1x1" | "1x2" | "2x1" | "2x2";
  bg?: "primary" | "white";
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // Row 1-2: tall left + 2 small + tall right
  {
    type: "project",
    title: "Rebrand kampanja",
    client: "McDonald's",
    category: "Branding",
    image: "https://picsum.photos/seed/port1/800/1600",
    size: "1x2",
  },
  {
    type: "project",
    title: "Social media strategija",
    client: "Delta Planet",
    category: "Social Media",
    image: "https://picsum.photos/seed/port2/800/800",
    size: "1x1",
  },
  {
    type: "text",
    title: "Kreativnost bez granica.",
    size: "1x1",
    bg: "white",
  },
  {
    type: "project",
    title: "Vizuelni identitet",
    client: "Emmezeta",
    category: "Branding",
    image: "https://picsum.photos/seed/port7/800/1600",
    size: "1x2",
  },
  // Row 2: fills between the two tall items
  {
    type: "project",
    title: "Google Ads kampanja",
    client: "AIK Banka",
    category: "Google Ads",
    image: "https://picsum.photos/seed/port3/1600/800",
    size: "2x1",
  },
  // Row 3: wide left + 2 small
  {
    type: "project",
    title: "Event branding",
    client: "Exit Festival",
    category: "Event Marketing",
    image: "https://picsum.photos/seed/port9/1600/800",
    size: "2x1",
  },
  {
    type: "project",
    title: "Web dizajn i razvoj",
    client: "Eurobank",
    category: "Web Dizajn",
    image: "https://picsum.photos/seed/port4/800/800",
    size: "1x1",
  },
  {
    type: "text",
    title: "500+ projekata. 25+ godina.",
    size: "1x1",
    bg: "white",
  },
  // Row 4: 4 small
  {
    type: "project",
    title: "OOH kampanja Nis",
    client: "Vapiano",
    category: "OOH Oglasavanje",
    image: "https://picsum.photos/seed/port5/800/800",
    size: "1x1",
  },
  {
    type: "project",
    title: "Kompletna digitalna strategija",
    client: "Mr. Bricolage",
    category: "Digitalni Marketing",
    image: "https://picsum.photos/seed/port6/800/800",
    size: "1x1",
  },
  {
    type: "text",
    title: "Rezultati govore glasnije od obecanja.",
    size: "1x1",
    bg: "primary",
  },
  {
    type: "project",
    title: "SEO optimizacija",
    client: "Gomex",
    category: "SEO",
    image: "https://picsum.photos/seed/port8/800/800",
    size: "1x1",
  },
  // Row 5: 4 small
  {
    type: "project",
    title: "Lansiranje kampanje",
    client: "Nectar",
    category: "Digitalni Marketing",
    image: "https://picsum.photos/seed/port10/800/800",
    size: "1x1",
  },
  {
    type: "project",
    title: "Social media upravljanje",
    client: "Univerexport",
    category: "Social Media",
    image: "https://picsum.photos/seed/port11/800/800",
    size: "1x1",
  },
  {
    type: "project",
    title: "Bilbord kampanja",
    client: "Idea",
    category: "OOH Oglasavanje",
    image: "https://picsum.photos/seed/port12/800/800",
    size: "1x1",
  },
  {
    type: "text",
    title: "Vas projekat moze biti sledeci.",
    size: "1x1",
    bg: "white",
  },
];
