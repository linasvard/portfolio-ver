import CvIcon from "../../assets/icons/CvIcon"
import "../../assets/styles/Navbar.css"
import NavbarLink from "../ui/NavbarLink"
import { useState } from "react"
import Logo from "../../assets/images/lina-logo.png"
import HamburgerIcon from "../../assets/images/hamburger-icon.png"

const navbarLinks = [
  { name: "Projekt", href: "#projects" },
  { name: "Om mig", href: "#about" },
  { name: "Kontakt", href: "#contact" },
]

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar-container sticky top-0 z-50 bg-light">
        <div className="h-navbar p-md flex justify-between items-center">    
            <div className="logo flex items-center">
                <a href="#hero" className="flex items-center w-full h-full">
                    <img src={Logo} alt="Lina Svärd logo" className="h-10 object-contain" />
                </a>
            </div>
            <div className="navbar-right gap-md flex items-center">
                <ul className="navbar-links text-dark gap-md hidden md:flex">
                    {navbarLinks.map((link) => (
                        <NavbarLink key={link.href} href={link.href}>
                            {link.name}
                        </NavbarLink>
                    ))}
                </ul>
                <div className="social-icons hidden md:flex">
                    <CvIcon />
                </div>
                <button
                    className="menu-toggle md:hidden p-2 text-dark"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Stäng meny" : "Öppna meny"}
                    aria-expanded={isOpen}
                >
                    <img src={HamburgerIcon} alt="Meny ikon" className="h-8 w-full object-contain" />
                </button>


            </div>
        </div>
        <ul className={`md:hidden flex flex-col gap-md px-md text-dark overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-60 pb-md" : "max-h-0"
        }`}>
            {navbarLinks.map((link) => (
                <NavbarLink key={link.href} href={link.href} onClick={closeMenu}>
                    {link.name}
                </NavbarLink>
            ))}
            <li>
                <CvIcon />
            </li>
        </ul>    
    </nav>
  )
}

export default Navbar