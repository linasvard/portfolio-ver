import ExternalLink from './ExternalLink';
import '../../assets/styles/ProjectCard.css';
import { motion } from 'motion/react';
import GithubIcon from '../../assets/icons/GithubIcon';
import LinkIcon from '../../assets/icons/LinkIcon';
import type { Project } from '../../data/projects';
import { fadeInUp } from '../../utils/animations';

type ProjectCardProps = Project & { index: number };

const ProjectCard = ({
  image,
  title,
  categories,
  description,
  github,
  demo,
  index,
}: ProjectCardProps) => {
  const links = (
    <>
      <ExternalLink
        className="demo-link"
        href={demo}
        icon={<LinkIcon className="w-5 h-5" />}>
        Demo
      </ExternalLink>
      <ExternalLink
        className="github-link"
        href={github}
        icon={<GithubIcon className="w-5 h-5" />}>
        Github
      </ExternalLink>
    </>
  );

  return (
    <motion.article
      {...fadeInUp((index % 2) * 0.15)}
      className="flex flex-col h-full">
      <motion.div
        initial="rest"
        animate="rest"
        whileHover="hover"
        className="overflow-hidden mb-[-0.5rem] rounded-lg relative block">
        <motion.img
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
          src={image}
          alt={`Bild som visar projektet ${title}`}
          className="w-full h-auto object-cover rounded-lg origin-center"
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 hidden h-full px-md lg:flex flex-col gap-xs py-md bg-accent text-dark"
          variants={{ rest: { y: '100%' }, hover: { y: 0 } }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}>
          <div>
            <h3 className="text-subheading font-medium mb-0">{title}</h3>
          </div>
          <div className="flex flex-wrap gap-xs text-dark mb-xs">
            <ul className="flex flex-wrap gap-xs text-dark mb-xs">
              {categories.map((cat) => (
                <li
                  key={cat}
                  className="text-dark text-sm font-medium not-last:after:content-['/'] not-last:after:px-xs">
                  {cat}
                </li>
              ))}
            </ul>
          </div>
          <p className="mb-md max-w-200 text-projectcard font-medium text-dark">
            {description}
          </p>
          <div></div>
          <div className="flex gap-sm project-card-btns mt-auto w-full justify-center">
            {links}
          </div>
        </motion.div>
      </motion.div>
    
      <div className="px-0 py-6 flex flex-col gap-xs flex-1">
        <div>
          <h3 className="text-subheading lg:text-subtitle font-medium mb-0">{title}</h3>
        </div>
        <div className="flex flex-col gap-xs lg:hidden">
          <ul className="flex flex-wrap gap-xs text-dark mb-sm">
            {categories.map((cat) => (
              <li
                key={cat}
                className="text-dark text-sm font-medium not-last:after:content-['/'] not-last:after:px-xs">
                {cat}
              </li>
            ))}
          </ul>
          <p className="mb-md max-w-200 text-projectcard font-medium text-dark">
            {description}
          </p>
          <div className="flex gap-sm projects-card-btns mb-sm mt-auto lg:hidden">
            {links}
          </div>
        </div>  
      </div>
    </motion.article>
  );
};

export default ProjectCard;
