import Cat from '../../assets/images/hero/cat.png';
import Star from '../../assets/images/hero/star.png';
import Dev from '../../assets/images/hero/dev.png';
import Mouse from '../../assets/images/hero/mouse.png';
import Folder from '../../assets/images/hero/map.png';
import { motion, type MotionProps } from 'motion/react';
import { rotateRight, rotateLeft, fadeInUp, fadeInLeft, fadeInRight } from '../../utils/animations';


type Illustration = {
    name: string;
    src: string;
    className: string;
    animation?: MotionProps;
}


const illustrations: Illustration[] = [
    {
        name: 'cat',
        src: Cat,
        className: 'lg:w-85 md:w-80 w-55 absolute md:right-[0] right-[10%] bottom-[20%] md:right-[5%] lg:bottom-[9%] md:bottom-[15%]',
        animation: { ...fadeInUp(0.1), ...rotateRight() }
    },
    {
        name: 'star',
        src: Star,
        className: 'md:w-20 w-14 absolute md:right-[50%] md:bottom-[30%] right-[16%] bottom-[44%] lg:right-[28%] lg:top-[40%]',
        animation: { ...fadeInRight(0.1), ...rotateLeft() }
    },
    {
        name: 'dev',
        src: Dev,
        className: 'md:w-40 w-30 hidden lg:block absolute left-[10%] bottom-[38%] rotate-12 md:bottom-[44%] md:left-[55%] lg:left-[50%] lg:bottom-[33%]',
        animation: { ...fadeInUp(0.1), ...rotateLeft() }
    },
    {
        name: 'mouse',
        src: Mouse,
        className: 'lg:w-9 md:w-8 w-6 absolute md:right-[50%] md:top-[10%] right-[84%] top-[50%] lg:right-[40%] lg:top-[15%]',
        animation: { ...fadeInLeft(0.1), ...rotateLeft() }
    },
    {
        name: 'folder',
        src: Folder,
        className: 'lg:w-30 md:w-30 w-21 absolute right-[60%] top-[53%] md:right-[10%] md:top-[15%] lg:right-[10%] lg:top-[20%] lg:rotate-12',
        animation: { ...fadeInLeft(0.1), ...rotateRight() }
    }
];

const IllustrationsHero = () => {
  return (
    <div 
    aria-hidden="true"
    className="absolute inset-0 max-width"
    >
      {illustrations.map((illustration) => (
        <motion.img
          key={illustration.name}
          className={`absolute ${illustration.className}`}
          src={illustration.src}
          alt=""
          {...illustration.animation}
        />
      ))}
     
    </div>
  );
};

export default IllustrationsHero;
