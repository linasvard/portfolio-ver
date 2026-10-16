
import { skills } from "../../data/skills";
import { motion } from "motion/react";
import { fadeInLeft, fadeInUp } from "../../utils/animations";

const Skills = () => {
  return (
    <div>
        <motion.h2 className="text-2xl font-bold mb-md" {...fadeInLeft(0.1)}>Verktygslådan</motion.h2>

        <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-sm gap-y-md">
            {skills.map((skill) => {
                const Icon = skill.icon
                return (
                    <motion.li
                    className="flex flex-col items-center justify-center p-sm"
                    key={skill.name}
                    {...fadeInUp(0.1)}>
                        {Icon && <Icon
                        className="h-19 w-auto max-w-full mb-xs" 
                        aria-hidden="true" />}
                        <span className="text-md font-sans font-medium text-dark">{skill.name}</span>
                    </motion.li>
                )
            })}
        </ul>
    </div>
  )
}

export default Skills