import Cat from "../../assets/images/hero/cat.png";
import Pow from "../../assets/images/hero/pow.png";

const IllustrationsComp = () => {
  return (
    <div className="w-full relative h-full flex justify-center items-center">
        <img className="w-100 absolute right-0 top-0" src={Cat} alt="Illustration av katt" />
        <img className="w-20 absolute right-0 bottom-0" src={Pow} alt="Illustration av pow" />
    </div>
  )
}


export default IllustrationsComp