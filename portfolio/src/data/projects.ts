import makeItPop from "../assets/images/make-it-pop-p.gif";
import theLibrary from "../assets/images/the-library.jpg";
import ikea from "../assets/images/ikea-2.jpg";
import negativeSpace from "../assets/images/negative-space-2.jpg";
import minBudget from "../assets/images/min-budget.jpg";
import portfolio1 from "../assets/images/portfolio-1.jpg";

export type Project = {
    id: number;
    image: string;
    title: string;
    description: string;
    categories: string[];
    github: string;
    demo: string;
}

export const projects: Project[] = [
    {
        id: 1,
        image: makeItPop,
        title: "Make It Pop!",
        description: "Stort, färgglatt och fullt av rörelse. Make It Pop! är en SVG-animation där tre ord flyger in över en gradientbakgrund. Ett kreativt skolprojekt där jag fick leka med GSAP. Byggt med Vanilla JavaScript utan ramverk.",
        categories: ["Front end", "GSAP", "SVG", "Animation"],
        github: "https://github.com/linasvard/make-it-pop",
        demo: "https://linasvard.github.io/make-it-pop/"
    },
    {
        id: 2,
        image: theLibrary,
        title: "the library.",
        description: "The Library är en fullstack-webbapp för böcker där användare kan bläddra bland titlar, läsa och skriva recensioner, och där admins hanterar innehållet. Projektet byggdes i en grupp om tre med Node.js, Express, TypeScript och MongoDB. Jag ansvarade för bokdelen med modeller, routes och controllers, satte upp projektets struktur och byggde den övergripande stylingen.",
        categories: ["Fullstack", "MongoDB", "API", "Express"],
        github: "https://github.com/linasvard/the-library",
        demo: "https://this-is-the-library.vercel.app/"
    },
    {
        id: 3,
        image: ikea,
        title: "IKEA Escape Room",
        description: "Ett webbaserat escape room där du ska ta dig igenom IKEA med en trött femåring vid din sida. Spelet har fyra avdelningar med egna pussel, timer, highscore-lista och game over om du misslyckas. Jag designade och kodade Ta-själv-lagret, där spelaren löser en rebus för att hitta rätt hylla och fack.",
        categories: ["Front end", "TypeScript", "LocalStorage", "Vite", "Agila metoder"],
        github: "https://github.com/linasvard/ikea-escape-room",
        demo: "https://linasvard.github.io/ikea-escape-room/"
    },
    {
        id: 4,
        image: negativeSpace,
        title: "Negative Space",
        description: "Negative Space är en responsiv onepager byggd i HTML, SCSS och JavaScript med Vite, utifrån en design i Figma. Vi arbetade med grid och flexbox för layouten, och använde ESLint och Prettier för att hålla koden enhetlig i gruppen. Sidan testades även för tillgänglighet och prestanda med Lighthouse.",
        categories: ["Front end", "Grafisk design", "Figma", "SCSS", "Agila metoder"],
        github: "https://github.com/linasvard/negative-space",
        demo: "https://linasvard.github.io/negative-space/"
    },
    {
        id: 5,
        image: minBudget,
        title: "Min Budget.",
        description: "En responsiv budgetapp där du kan lägga till inkomster och utgifter, välja kategori och direkt se din balans uppdateras. Alla transaktioner sparas i local storage, så att de finns kvar även när webbläsaren stängs. Utöver kraven lade jag till datum på varje post och validering som stoppar felaktig inmatning. Ett skolprojekt jag byggde tidigt i utbildningen.",
        categories: ["Front end", "LocalStorage", "TypeScript"],
        github: "https://github.com/linasvard/min-budget",
        demo: "https://linasvard.github.io/min-budget/"
    },
    {
        id: 6,
        image: portfolio1,
        title: "Portfolio 1.0",
        description: "Den här portfolion skapade jag när jag började söka LIA-plats. Målet var att på ett enkelt sätt visa vem jag är, vad jag kan och vad jag vill utvecklas inom. Den har sedan dess ersatts av en ny version, men finns kvar som ett kapitel i min resa. Byggd med TypeScript, SCSS och Vite utan ramverk.",
        categories: ["Front end", "Grafisk design", "TypeScript", "SCSS"],
        github: "https://github.com/linasvard/portfolio",
        demo: "https://linasvard.github.io/portfolio/"
    }
]