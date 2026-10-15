
import Underline from "../ui/Underline";
import "../../assets/styles/Hero.css"
import { motion } from "motion/react";
import { fadeInLeft, fadeInRight } from "../../utils/animations";
import IllustrationsComp from "../ui/IllustrationsHero";


const Hero = () => {
  return (
    <section className="hero relative overflow-hidden max-width padding-overall" id="hero">
        <div className="hero-container flex flex-col md:flex-row gap-md items-center justify-between">
            <motion.div {...fadeInLeft(0.1)}
            className="w-full relative z-10 min-w-0"> 
                <h1 className="lg:text-hero w-full text-hero-mobile leading-tight text-dark">
                    <span className="block text-dark text-xl mb-xs">
                        <span className="font-bold">Hej, </span>Lina heter jag!
                    </span>
                    En{" "}<span className="relative inline-block isolate">multitasker<Underline className="text-accent"/></span>{" "} som älskar design, webb och tillgänglighet.
                </h1>
            </motion.div>
            <motion.div {...fadeInRight(0.1)} className="flex justify-center md:justify-center w-full max-w-3xl">
                <IllustrationsComp />
            </motion.div>
        </div> 
        <motion.div {...fadeInLeft(0.1)} className="flex justify-left mt-lg">
            <a href="#projects" className="link-underline text-dark font-medium text-lg">
                Se mina projekt nedan.
            </a>
        </motion.div>      
    </section>
  );
};

export default Hero;
