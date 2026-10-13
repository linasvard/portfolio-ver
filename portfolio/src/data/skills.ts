import type { ComponentType, SVGProps } from "react";

import CssIcon from "../assets/icons/skills/CssIcon";
import FigmaIcon from "../assets/icons/skills/FigmaIcon";
import HtmlIcon from "../assets/icons/skills/HtmlIcon";
import MotionIcon from "../assets/icons/skills/MotionIcon";
import NodeJsIcon from "../assets/icons/skills/NodeJsIcon";
import SassIcon from "../assets/icons/skills/SassIcon";
import TailwindIcon from "../assets/icons/skills/TailwindIcon";
import TsIcon from "../assets/icons/skills/TsIcon";
import ReactIcon from "../assets/icons/skills/ReactIcon";
import VercelIcon from "../assets/icons/skills/VercelIcon";
import ExpressIcon from "../assets/icons/skills/ExpressIcon";
import MongoDbIcon from "../assets/icons/skills/MongoDbIcon";
import CreativecloudIcon from "../assets/icons/skills/CreativecloudIcon";

export type Skill = {
    name: string;
    icon?: ComponentType<SVGProps<SVGSVGElement>>;
}

export const skills = [
    {
        name: "HTML 5",
        icon: HtmlIcon
    },
    {
        name: "CSS",
        icon: CssIcon
    },
    {
        name: "Sass",
        icon: SassIcon
    },
    {
        name: "Tailwind CSS",
        icon: TailwindIcon
    },
    {
        name: "TypeScript",
        icon: TsIcon
    },
    {
        name: "React",
        icon: ReactIcon
    },
    {
        name: "Vercel",
        icon: VercelIcon
    },
    {
        name: "Express",
        icon: ExpressIcon
    },
    {
        name: "Node.js",
        icon: NodeJsIcon
    },
    {
        name: "MongoDB",
        icon: MongoDbIcon
    },
    {
        name: "Figma",
        icon: FigmaIcon
    },
    {
        name: "Motion",
        icon: MotionIcon
    },
    {
        name: "Adobe Creative Suite",
        icon: CreativecloudIcon
    }   
]