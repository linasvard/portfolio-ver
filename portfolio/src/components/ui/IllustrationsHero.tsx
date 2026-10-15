import Cat from '../../assets/images/hero/cat.png';
import Star from '../../assets/images/hero/star.png';
import Dev from '../../assets/images/hero/dev.png';
import Mouse from '../../assets/images/hero/mouse.png';
import Map from '../../assets/images/hero/map.png';

const IllustrationsHero = () => {
  return (
    <div 
    aria-hidden="true"
    className="absolute inset-0 max-width"
    >
      <img
        className="w-100 absolute right-[10%] bottom-[20%] md:right-[5%] md:bottom-[15%]"
        src={Cat}
        alt=""
      />
      <img
        className="w-20 absolute right-[28%] top-[40%]"
        src={Star}
        alt=""
      />
      <img
        className="w-45 absolute left-[45%] bottom-[29%]"
        src={Dev}
        alt=""
      />
      <img
        className="w-9 absolute right-[40%] top-[15%]"
        src={Mouse}
        alt=""
      />
      <img
        className="w-30 absolute right-[10%] top-[20%] rotate-12"
        src={Map}
        alt=""
      />
    </div>
  );
};

export default IllustrationsHero;
