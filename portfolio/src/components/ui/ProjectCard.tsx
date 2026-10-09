const ProjectCard = ({ image, title, description }) => {
    return (
        <article>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </article>
    )
};

export default ProjectCard;

