import AboutMeImg from "../../assets/images/lina-polaroid.png";
import { motion } from "motion/react"

const About = () => {
  return (
    <section>
        <div className="flex flex-row gap-lg items-top justify-between">    
            <div>
                <h2 className="text-about font-bold">Vem är jag?</h2>
                <p className="mt-0 mx-1 text-md font-sans">
                    Designern som blev utvecklare
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