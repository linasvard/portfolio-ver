
import HtmlIcon from "../../assets/icons/skills/HtmlIcon";
import { skills } from "../../data/skills";

const Skills = () => {
  return (
    <div>
        <h2 className="text-2xl font-bold mb-md">Verktygslådan</h2>
        <HtmlIcon />

        <ul className="flex flex-wrap gap-sm text-lg font-sans">
            {skills.map((skill) => {
                const Icon = skill.icon
                return (
                    <li key={skill.name}>
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