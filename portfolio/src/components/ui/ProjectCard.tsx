import ExternalLink from "./ExternalLink";
import "../../assets/styles/ProjectCard.css"
import { motion } from "motion/react"
import GithubIcon from "../../assets/icons/GithubIcon";
import LinkIcon from "../../assets/icons/LinkIcon";
import type { Project } from "../../data/projects"

const ProjectCard = ({ image, title, categories, description, github, demo }: Project) => {
    
    return (
        <article>
            <a href={demo} target="_blank" rel="noopener noreferrer">
                <div className="overflow-hidden rounded-lg">
                    <motion.img 
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.45, ease: "easeInOut"}}
                        src={image} 
                        alt={`Bild som visar projektet ${title}`}
                        className="w-full h-auto object-cover rounded-lg origin-center"
                    />
                </div>
            </a>
            
             <div className="px-0 py-6 flex flex-col gap-xs">
                <ul className="flex flex-wrap gap-xs">
                    {categories.map((cat) => (
                        <li key={cat} className="text-dark text-sm font-medium not-last:after:content-['/'] not-last:after:px-xs">
                            {cat}
                        </li>
                    ))}
                    
                </ul>
                <h3 className="text-subheading font-medium">{title}</h3>
                <p>{description}</p>
                <div className="flex gap-sm project-card-btns">
                    <ExternalLink 
                    href={github}
                    icon={<GithubIcon className="w-4 h-4" />}
                    >Github</ExternalLink>
                    <ExternalLink 
                    href={demo}
                    icon={<LinkIcon className="w-4 h-4" />}
                    >Demo</ExternalLink>
                </div>
             </div>
            
        </article>
    )
};

export default ProjectCard;

