import Cat from '../../assets/images/hero/cat.png';
import Star from '../../assets/images/hero/star.png';
import Dev from '../../assets/images/hero/dev.png';
import Mouse from '../../assets/images/hero/mouse.png';
import Folder from '../../assets/images/hero/map.png';

const IllustrationsHero = () => {
  return (
    <div 
    aria-hidden="true"
    className="absolute inset-0 max-width"
    >
      <img
        className="lg:w-100 md:w-80 w-65 absolute md:right-[0] right-[6%] bottom-[20%] md:right-[5%] md:bottom-[15%]"
        src={Cat}
        alt=""
      />
      <img
        className="md:w-20 w-14 absolute md:right-[35%] md:bottom-[40%] right-[16%] bottom-[44%] lg:right-[28%] lg:top-[40%]"
        src={Star}
        alt=""
      />
      <img
        className="md:w-45 w-30 absolute left-[10%] bottom-[38%] rotate-12 md:bottom-[60%] md:left-[60%] lg:left-[50%] lg:bottom-[29%]"
        src={Dev}
        alt=""
      />
      <img
        className="lg:w-9 md:w-8 w-5 absolute md:right-[50%] md:top-[10%] right-[34%] top-5%] lg:right-[40%] lg:top-[15%]"
        src={Mouse}
        alt=""
      />
      <img
        className="lg:w-30 md:w-30 w-17 absolute right-[10%] top-[2%] lg:right-[10%] lg:top-[20%] lg:rotate-12"
        src={Folder}
        alt=""
      />
    </div>
  );
};

export default IllustrationsHero;
