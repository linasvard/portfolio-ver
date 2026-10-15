import Cat from '../../assets/images/hero/cat.png';
import Star from '../../assets/images/hero/star.png';
import Dev from '../../assets/images/hero/dev.png';
import Mouse from '../../assets/images/hero/mouse.png';
import Folder from '../../assets/images/hero/map.png';

type Illustration = {
    name: string;
    src: string;
    className: string;
}

const illustrations: Illustration[] = [
    {
        name: 'cat',
        src: Cat,
        className: 'lg:w-100 md:w-80 w-65 absolute md:right-[0] right-[6%] bottom-[20%] md:right-[5%] lg:bottom-[1%] md:bottom-[15%]'
    },
    {
        name: 'star',
        src: Star,
        className: 'md:w-20 w-14 absolute md:right-[50%] md:bottom-[30%] right-[16%] bottom-[44%] lg:right-[28%] lg:top-[40%]'
    },
    {
        name: 'dev',
        src: Dev,
        className: 'md:w-40 w-30 absolute left-[10%] bottom-[38%] rotate-12 md:bottom-[44%] md:left-[55%] lg:left-[50%] lg:bottom-[33%]'
    },
    {
        name: 'mouse',
        src: Mouse,
        className: 'lg:w-9 md:w-8 w-5 absolute md:right-[50%] md:top-[10%] right-[34%] top-[5%] lg:right-[40%] lg:top-[15%]'
    },
    {
        name: 'folder',
        src: Folder,
        className: 'lg:w-30 md:w-30 w-17 absolute right-[10%] top-[2%] md:right-[10%] md:top-[15%] lg:right-[10%] lg:top-[20%] lg:rotate-12'
    }
];

const IllustrationsHero = () => {
  return (
    <div 
    aria-hidden="true"
    className="absolute inset-0 max-width"
    >
      {illustrations.map((illustration) => (
        <img
          key={illustration.name}
          className={`absolute ${illustration.className}`}
          src={illustration.src}
          alt=""
        />
      ))}
     
    </div>
  );
};

export default IllustrationsHero;
