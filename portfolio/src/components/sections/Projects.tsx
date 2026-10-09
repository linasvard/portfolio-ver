import { projects } from "../../data/projects"

const Projects = () => {
  return (
    <section id="projects">
        <h2>My Projects</h2>
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-lg">
            {projects.map((project) => (
                <div key={project.id}>
                    <img src={project.image} alt={project.title} />
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Projects