
import { skills } from "../../data/skills";

const Skills = () => {
  return (
    <div>
        <h2 className="text-2xl font-bold mb-md">Verktygslådan</h2>

        <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-sm gap-y-md font-sans text-lg">
            {skills.map((skill) => {
                const Icon = skill.icon
                return (
                    <li
                    key={skill.name}>
                        {Icon && <Icon aria-hidden="true" />}
                        <span>{skill.name}</span>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Skills