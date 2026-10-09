import ExternalLink from "./ExternalLink";

const ProjectCard = ({ image, title, categories, description, github, demo }) => {
    return (
        <article>
            <img 
            src={image} 
            alt={`Bild som visar projektet ${title}`}
            className="w-full h-auto object-cover rounded-lg"
             />
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
                <div className="flex gap-sm">
                    <ExternalLink href={github}>GitHub</ExternalLink>
                    <ExternalLink href={demo}>Demo</ExternalLink>
                </div>
             </div>
            
        </article>
    )
};

export default ProjectCard;

