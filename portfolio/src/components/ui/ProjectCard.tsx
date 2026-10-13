import ExternalLink from "./ExternalLink";
import "../../assets/styles/ProjectCard.css"
import { motion } from "motion/react"
import GithubIcon from "../../assets/icons/GithubIcon";
import LinkIcon from "../../assets/icons/LinkIcon";
import type { Project } from "../../data/projects"

const ProjectCard = ({ image, title, categories, description, github, demo }: Project) => {
    
    return (
        <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col h-full">
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
            
             <div className="px-0 py-6 flex flex-col gap-xs flex-1">
                <ul className="flex flex-wrap gap-xs text-dark mb-xs">
                    {categories.map((cat) => (
                        <li key={cat} className="text-dark text-sm font-medium not-last:after:content-['/'] not-last:after:px-xs">
                            {cat}
                        </li>
                    ))}
                    
                </ul>
                <h3 className="text-subheading font-medium mb-xs">{title}</h3>
                <p className="mb-md text-projectcard">{description}</p>
                <div className="flex gap-sm project-card-btns mt-auto">
                    <ExternalLink 
                    className="demo-link"
                    href={demo}
                    icon={<LinkIcon className="w-5 h-5" />}
                    >Demo</ExternalLink>
                    <ExternalLink
                    className="github-link" 
                    href={github}
                    icon={<GithubIcon className="w-5 h-5" />}
                    >Github</ExternalLink>
                    
                </div>
             </div>
            
        </motion.article>
    )
};

export default ProjectCard;

