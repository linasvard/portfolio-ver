const ProjectCard = ({ image, title, description }) => {
    return (
        <article>
            <img 
            src={image} 
            alt={`Bild som visar projektet ${title}`}
            className="w-full h-auto object-cover"
             />
             <div className="px-0 py-6 flex flex-col gap-xs">
                <h3>{title}</h3>
                <p>{description}</p>
             </div>
            
        </article>
    )
};

export default ProjectCard;

