import AboutMeImg from "../../assets/images/lina-polaroid.png";
import { motion } from "motion/react"
import UnderlineAbout from "../ui/UnderlineAbout";
import Skills from "./Skills";
import { fadeInLeft, fadeInRight, rotateRight } from "../../utils/animations";

const About = () => {
  return (
    <section className="about padding-overall max-width" id="about">
        <div className="flex mb-xxl flex-col-reverse gap-lg items-center lg:items-start md:justify-between justify-center lg:flex-row md:gap-md">    
            <motion.div 
            className="w-full max-w-400 md:max-w-300 lg:max-w-200"
            {...fadeInLeft(0.1)}>
                <h2 className="text-about font-bold">{" "}<span className="relative inline-block isolate">Vem är jag?<UnderlineAbout className="text-accent" /></span></h2>
                <p className="font-sans mt-0 mx-1 font-medium mb-md">
                    Designern som blev utvecklare
                </p>
                <p className="mt-md mx-1 md:text-big-p text-about-mobile">
                    Jag heter Lina och är en utbildad grafisk designer och frontendstudent som är bosatt i Göteborg, Sverige. Lever i gränslandet mellan design och utveckling och brinner lite extra för tillgänglighet.
                </p>
                <p className="text-md mt-md font-sans">Kontakta mig gärna så kan vi diskuterar jag mer än gärna frontend, design eller varför inte båda?</p>
            </motion.div>
            <motion.div 
            className="flex justify-center h-full md:justify-center lg:justify-center sm:max-w-400 md:max-w-300 lg:max-w-200"
            {...fadeInRight(0.1)}>
                <motion.img 
                {...rotateRight()}
                className="rounded-lg max-w-full h-auto mt-[-20px] lg:mt-sm md:justify-center lg:justify-center"
                src={AboutMeImg} 
                alt="Bild på Lina" />
            </motion.div>
        </div>    
        <Skills />
    </section>
  )
}

export default About