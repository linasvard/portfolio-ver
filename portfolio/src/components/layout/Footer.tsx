import CvIcon from "../../assets/icons/CvIcon"

const Footer = () => {
  return (
    <footer className="bg-dark text-light p-4">
        <div className="p-md flex flex-col md:flex-row justify-between gap-md max-w-800 mx-auto">
            <div className="flex flex-col gap-4 max-w-70">
                <div>
                    <p className="font-bold">Based in:</p>
                    <p>Göteborg, Sverige</p>
                </div>
                <div>
                    <p className="font-bold">Redo för:</p>
                    <p>Nya utmaningar inom både front end och grafisk design</p>
                </div>
            </div>
            <div className="flex flex-row gap-8 md:gap-16 justify-between">
                <div className="flex flex-col gap-2">
                    <p className="font-bold">Kontakt</p>
                    <a href="mailto:your-email@example.com">Mail</a>
                    <a href="linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="github.com/your-profile" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
                <div className="flex flex-col gap-sm">
                    <p className="font-bold mb-0">Lina Svärd</p>
                    <a className="link-underline-light"href="#projects">Projekt</a>
                    <a href="#about">Om mig</a>
                    <a href="#contact">Kontakt</a>
                </div>
            </div>
        </div>
      <div className=" flex flex-row justify-between px-md py-sm text-left">
        <p className="text-light/50">&copy; {new Date().getFullYear()} Lina Svärd. All rights reserved.</p>
        <div>
            <CvIcon className="hover:bg-light hover:text-dark transition-colors duration-200 cv-btn py-xs px-6 bg-accent text-dark" />
        </div>
      </div>
    </footer>
  )
}

export default Footer