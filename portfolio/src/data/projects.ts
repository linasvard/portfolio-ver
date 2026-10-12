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
        description: "Ett interaktivt webbanimationsprojekt som kombinerar grafisk design och kod för att väcka statisk vektorgrafik till liv. Projektet bygger på en anpassad SVG skapad från grunden som animeras och manipuleras dynamiskt med GSAP. Det är helt ramverkslöst och utvecklat enbart med vanilla JavaScript, CSS och Vite som byggverktyg.",
        categories: ["Front end", "GSAP", "SVG", "Animation"],
        github: "https://github.com/linasvard/make-it-pop",
        demo: "https://linasvard.github.io/make-it-pop/"
    },
    {
        id: 2,
        image: "/src/assets/images/the-library.jpg",
        title: "the library.",
        description: "En fullstack-applikation för bokhantering och recensioner, utrustad med användarautentisering, adminpanel och fullständiga CRUD-funktioner. Den är byggd med Node.js, Express, TypeScript och MongoDB, samt Bootstrap på klientsidan.",
        categories: ["Fullstack", "MongoDB", "API", "Express"],
        github: "https://github.com/linasvard/portfolio",
        demo: "https://this-is-the-library.vercel.app/"
    },
    {
        id: 3,
        image: "/src/assets/images/ikea-2.jpg",
        title: "IKEA Escape Room",
        description: "Ett interaktivt webbaserat spel utvecklat som ett gruppprojekt under utbildningen till frontendutvecklare. Målet är att navigera sig genom ett IKEA-varuhus uppdelat i fyra unika rum fyllda med olika utmaningar, från att hantera barnavdelningen till att pricka in rätt betalkortskod i kassan.Projektet är byggt utan ramverk med TypeScript, SASS, HTML och Vite, och innehåller funktioner som speltimer, highscore-system via LocalStorage och avancerad DOM-manipulation.",
        categories: ["Front end", "TypeScript", "LocalStorage", "Vite", "Agila metoder"],
        github: "https://github.com/linasvard/portfolio",
        demo: "https://linasvard.github.io/ikea-escape-room/"
    },
    {
        id: 4,
        image: "/src/assets/images/negative-space-2.jpg",
        title: "Negative Space",
        description: "Det här projektet ingår i en kurs om samarbetet mellan designer och utvecklare, där vi genomförde en praktisk designöverlämning mellan två grupper för att öva på att göra en design tydlig, kravställd och implementerbar.",
        categories: ["Front end", "Grafisk design", "Figma", "Sass", "Agila metoder"],
        github: "https://github.com/linasvard/negative-space",
        demo: "https://linasvard.github.io/negative-space/"
    },
    {
        id: 5,
        image: "/src/assets/images/min-budget.jpg",
        title: "Min Budget.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        categories: ["Front end", "LocalStorage", "TypeScript"],
        github: "https://github.com/linasvard/min-budget",
        demo: "https://linasvard.github.io/min-budget/"
    },
    {
        id: 6,
        image: "/src/assets/images/portfolio-1.jpg",
        title: "Portfolio 1.0",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        categories: ["Front end", "Grafisk design", "TypeScript", "Sass"],
        github: "https://github.com/linasvard/portfolio",
        demo: "https://linasvard.github.io/portfolio/"
    }
]