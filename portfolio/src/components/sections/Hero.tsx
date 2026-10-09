import HeroImg from "../../assets/images/hero-img.png";

const Hero = () => {
  return (
    <section>
        <div className="flex flex-col-reverse md:flex-row gap-md items-center justify-between">
            <div> 
                <h1 className="text-hero w-full max-w-3xl leading-tight">
                    <span className="block text-dark text-2xl">
                    <span className="font-bold">Hej, </span>Lina heter jag!
                    </span>
                    En multitasker som älskar design, webb och tillgänglighet.
                </h1>
            </div>
            <div className="flex justify-center md:justify-center w-full max-w-3xl">
                <img src={HeroImg} alt="Illustration av kvinna som sitter framför en dator" />
            </div>
        </div>       
    </section>
  );
};

export default Hero;
