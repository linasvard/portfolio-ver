import { projects } from "../../data/projects"
import ProjectCard from "../ui/ProjectCard"

const Projects = () => {
  return (
    <section id="projects">
        <h2 className="text-heading">All my works</h2>
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-md">
            {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
            ))}
        </div>
    </section>
  )
}

export default Projects