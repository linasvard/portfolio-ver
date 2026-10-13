import AboutMeImg from "../../assets/images/lina-polaroid.png";
import { motion } from "motion/react"
import UnderlineAbout from "../ui/UnderlineAbout";

const About = () => {
  return (
    <section id="about">
        <div className="flex flex-row gap-lg items-top justify-between mt-lg">    
            <div>
                <h2 className="text-about font-bold">{" "}<span className="relative inline-block isolate">Vem är jag?<UnderlineAbout className="text-accent" /></span></h2>
                <p className="mt-0 mx-1 text-xl font-sans mb-md">
                    Designern som blev utvecklare
                </p>
                <p className="mt-md mx-1 text-projectcard max-w-400">
                    Jag är en kreativ och mångsidig person som älskar att skapa och utveckla. 
                    Jag har en bakgrund inom design och har alltid haft ett intresse för teknik och webbutveckling. 
                    Jag har därför valt att kombinera mina två passioner och utbilda mig till frontendutvecklare.
                </p>
            </div>
            <div className="flex justify-center md:justify-center w-full max-w-3xl">
                <motion.img 
                whileHover={{ rotate: 8, scale: 1.02 }}
                transition={{ duration: 0.45, ease: "easeInOut"}}
                src={AboutMeImg} 
                alt="Bild på Lina" />
            </div>
        </div>    
        
    </section>
  )
}

export default About