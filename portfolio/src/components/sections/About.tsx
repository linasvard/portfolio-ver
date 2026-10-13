import AboutMeImg from "../../assets/images/lina-polaroid.png";
import { motion } from "motion/react"
import UnderlineAbout from "../ui/UnderlineAbout";
import Skills from "./Skills";

const About = () => {
  return (
    <section className="about" id="about">
        <div className="flex mb-xxl flex-col flex-col-reverse gap-lg items-top md:justify-between justify-center lg:flex-row md:gap-md">    
            <div className="max-w-400 md:max-w-300 lg:max-w-200">
                <h2 className="text-about font-bold">{" "}<span className="relative inline-block isolate">Vem är jag?<UnderlineAbout className="text-accent" /></span></h2>
                <p className="mt-0 mx-1 font-medium text-md mb-md">
                    Designern som blev utvecklare
                </p>
                <p className="mt-md mx-1 text-big-p">
                    Jag heter Lina och är en utbildad grafisk designer och frontendstudent som är bosatt i Göteborg, Sverige. Lever i gränslandet mellan design och utveckling och brinner lite extra för tillgänglighet.
                </p>
                <p className="text-md mt-md">Kontakta mig gärna så kan vi diskuterar jag mer än gärna frontend, design eller varför inte båda?</p>
            </div>
            <div className="flex justify-center h-full md:justify-center lg:justify-center sm:max-w-400 md:max-w-300 lg:max-w-200">
                <motion.img 
                whileHover={{ rotate: 8, scale: 1.02 }}
                transition={{ duration: 0.45, ease: "easeInOut"}}
                className="rounded-lg max-w-full h-auto md:justify-center lg:justify-center"
                src={AboutMeImg} 
                alt="Bild på Lina" />
            </div>
        </div>    
        <Skills />
    </section>
  )
}

export default About