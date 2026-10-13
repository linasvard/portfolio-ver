
import HtmlIcon from "../../assets/icons/skills/HtmlIcon";
import { skills } from "../../data/skills";
const Skills = () => {
  return (
    <div>
        <h2 className="text-2xl font-bold mb-md">Verktygslådan</h2>
        <HtmlIcon />
        <ul className="flex flex-wrap gap-sm text-lg font-sans">
            {skills.map((skill) => (
                <li key={skill.name}>{skill.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default Skills