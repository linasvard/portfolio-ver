import CvIcon from "../../assets/icons/CvIcon"
import "../../assets/styles/Navbar.css"



const Navbar = () => {
  return (
    <nav className="navbar-container bg-light">
        <div className="logo">
            <img src="/src/assets/logo.png" alt="Logo" />
        </div>
        <div className="navbar-right">
            <ul className="navbar-links text-dark">
                <li><a href="#projects">Projekt</a></li>
                <li><a href="#about">Om mig</a></li>
                <li><a href="#contact">Kontakt</a></li>
            </ul>
            <div className="social-icons">
                <CvIcon className="cv-btn bg-dark text-light" />
            </div>
        </div>
    </nav>
  )
}

export default Navbar