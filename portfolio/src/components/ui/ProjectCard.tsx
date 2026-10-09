const ProjectCard = ({ image, title, categories, description, github, demo }) => {
    return (
        <article>
            <img 
            src={image} 
            alt={`Bild som visar projektet ${title}`}
            className="w-full h-auto object-cover"
             />
             <div className="px-0 py-6 flex flex-col gap-xs">
                <ul className="flex flex-wrap gap-xs">
                    {categories.map((cat) => (
                        <li key="cat" className="text-dark text-sm font-medium not-last:after:content-['/'] not-last:after:px-xs">
                            {cat}
                        </li>
                    ))}
                    
                </ul>
                <h3 className="text-subheading font-medium">{title}</h3>
                <p>{description}</p>
                <div>
                    {github && (
                        <a href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                        >
                            GitHub
                        </a>
                    )}
                    {demo && (
                        <a href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                        >
                            Demo
                        </a>
                    )}
                </div>
             </div>
            
        </article>
    )
};

export default ProjectCard;

