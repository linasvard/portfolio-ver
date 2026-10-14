export type Project = {
    id: number;
    image: string;
    title: string;
    description: string;
    categories: string[];
    github: string;
    demo: string;
}

export const projects = [
    {
        id: 1,
        image: "/src/assets/images/make-it-pop-p.gif",
        title: "Make It Pop!",
        description: "Vektorgrafik i rörelse. En handgjord SVG animerad med GSAP, ramverkslöst med vanilla JavaScript och Vite.",
        categories: ["Front end", "GSAP", "SVG", "Animation"],
        github: "https://github.com/linasvard/make-it-pop",
        demo: "https://linasvard.github.io/make-it-pop/"
    },
    {
        id: 2,
        image: "/src/assets/images/the-library.jpg",
        title: "the library.",
        description: "Läs, betygsätt, diskutera. En fullstack-plattform för bokrecensioner med inloggning, adminverktyg och full datahantering.",
        categories: ["Fullstack", "MongoDB", "API", "Express"],
        github: "https://github.com/linasvard/portfolio",
        demo: "https://this-is-the-library.vercel.app/"
    },
    {
        id: 3,
        image: "/src/assets/images/ikea-2.jpg",
        title: "IKEA Escape Room",
        description: "Ett grupprojekt där vi arbetade agilt från idé till färdigt spel. Ett interaktivt varuhusäventyr i fyra rum, byggt ramverkslöst med TypeScript och Sass.",
        categories: ["Front end", "TypeScript", "LocalStorage", "Vite", "Agila metoder"],
        github: "https://github.com/linasvard/portfolio",
        demo: "https://linasvard.github.io/ikea-escape-room/"
    },
    {
        id: 4,
        image: "/src/assets/images/negative-space-2.jpg",
        title: "Negative Space",
        description: "En onepager från Mars, rymden. En responsiv landningssida för ett fiktivt spel, byggd utifrån en designöverlämning",
        categories: ["Front end", "Grafisk design", "Figma", "Sass", "Agila metoder"],
        github: "https://github.com/linasvard/negative-space",
        demo: "https://linasvard.github.io/negative-space/"
    },
    {
        id: 5,
        image: "/src/assets/images/min-budget.jpg",
        title: "Min Budget.",
        description: "Här får du ta del av en responsiv budgetapp med kategorier, realtidsbalans och sparad historik, byggd i TypeScript.",
        categories: ["Front end", "LocalStorage", "TypeScript"],
        github: "https://github.com/linasvard/min-budget",
        demo: "https://linasvard.github.io/min-budget/"
    },
    {
        id: 6,
        image: "/src/assets/images/portfolio-1.jpg",
        title: "Portfolio 1.0",
        description: "Version 1.0 av min portfolio där projekt och erfarenheter laddas dynamiskt från JSON, byggd med TypeScript.",
        categories: ["Front end", "Grafisk design", "TypeScript", "Sass"],
        github: "https://github.com/linasvard/portfolio",
        demo: "https://linasvard.github.io/portfolio/"
    }
]