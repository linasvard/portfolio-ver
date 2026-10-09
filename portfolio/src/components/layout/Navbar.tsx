import GithubIcon from "../../assets/icons/GithubIcon"
import LinkedinIcon from "../../assets/icons/LinkedinIcon"
import "../../assets/styles/Navbar.css"



const Navbar = () => {
  return (
    <nav className="navbar-container">
        <div className="logo">
            <img src="/src/assets/logo.png" alt="Logo" />
        </div>
        <div className="navbar-right">
            <ul className="navbar-links">
                <li><a href="#projects">Projekt</a></li>
                <li><a href="#about">Om mig</a></li>
                <li><a href="#contact">Kontakt</a></li>
            </ul>
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/linas-vard/" target="_blank" rel="noopener noreferrer">
                    <LinkedinIcon className="social-icon" />
                </a>
                <a href="https://github.com/linasvard" target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="social-icon" />
                </a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar