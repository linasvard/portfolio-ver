import { AnimatePresence, motion } from "motion/react";
import { projects } from "../../data/projects"
import { fadeInUp } from "../../utils/animations";
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
    <section className="projects max-width padding-overall" id="projects">
        <motion.h2 className="text-heading" {...fadeInUp(0.1)}>All my works</motion.h2>
        <div className="flex flex-wrap font-sans cursor-pointer gap-x-md gap-y-sm mt-sm mb-md w-full justify-start text-lg font-medium">
            <motion.button 
            {...fadeInUp(0.1)}
            onClick={() => setSelected([])}
            aria-pressed={selected.length === 0}
            className="filter-tab"
            >Alla</motion.button>
            {allCategories.map((cat) => (
                <motion.button 
                {...fadeInUp(0.1)}
                key={cat} 
                onClick={() => handleCategoryClick(cat)}
                aria-pressed={selected.includes(cat)}
                className="filter-tab"
                >
                    {cat}
                </motion.button>
            ))}
        </div>
        <div className="projects-grid relative grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 md:gap-y-md lg:gap-y-md">
            <AnimatePresence mode="popLayout" initial={false}>
            {filteredProjects.map((project, index) => (
                <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }} 
                className="h-full" 
                key={project.id}
                layout>
                    <ProjectCard {...project} index={index}/>
                </motion.div>
            ))}
            </AnimatePresence>
        </div>
    </section>
  )
};
export default Projects