import { projects } from "../../data/projects"
import ProjectCard from "../ui/ProjectCard"
import { useState } from "react"

const allCategories = [...new Set(projects.flatMap((p) => p.categories))]

const Projects = () => {
    const [selected, setSelected] = useState<string[]>([]);

    const handleCategoryClick = (cat: string) => {
        if (selected.includes(cat)) {
            setSelected(selected.filter((c) => c !== cat));
        } else {
            setSelected([...selected, cat]);
        }
    }

    const filteredProjects = selected.length === 0
        ? projects : projects.filter((p) => p.categories.some((cat) => selected.includes(cat)));

  return (
    <section className="py-section" id="projects">
        <h2 className="text-heading">All my works</h2>
        <div className="flex flex-wrap gap-x-md gap-y-sm mt-sm mb-md w-full justify-start md:text-md md:text-lg font-sans font-medium">
            <button 
            onClick={() => setSelected([])}
            aria-pressed={selected.length === 0}
            className="filter-tab"
            >Alla</button>
            {allCategories.map((cat) => (
                <button 
                key={cat} 
                onClick={() => handleCategoryClick(cat)}
                aria-pressed={selected.includes(cat)}
                className="filter-tab"
                >
                    {cat}
                </button>
            ))}
        </div>
        <div className="projects-grid grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 md:gap-y-md lg:gap-y-xl">
            {filteredProjects.map((project) => (
                <ProjectCard key={project.id} {...project} />
            ))}
        </div>
    </section>
  )
};
export default Projects