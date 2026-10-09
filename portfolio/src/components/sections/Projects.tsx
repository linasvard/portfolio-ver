import { projects } from "../../data/projects"
import ProjectCard from "../ui/ProjectCard"
import { useState } from "react"

const allCategories = [...new Set(projects.flatMap((p) => p.categories))]

const Projects = () => {
    const [selected, setSelected] = useState([]);

    const handleCategoryClick = (cat) => {
        if (selected.includes(cat)) {
            setSelected(selected.filter((c) => c !== cat));
        } else {
            setSelected([...selected, cat]);
        }
    }

  return (
    <section id="projects">
        <h2 className="text-heading">All my works</h2>
        <p>Valda: {selected.join(", ")}</p>
        <div>
            <button onClick={() => setSelected([])}>Alla</button>
            {allCategories.map((cat) => (
                <button key={cat} onClick={() => handleCategoryClick(cat)}>{cat}</button>
            ))}
        </div>
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-md">
            {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
            ))}
        </div>
    </section>
  )
};
export default Projects