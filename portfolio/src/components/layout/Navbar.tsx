import CvIcon from "../../assets/icons/CvIcon"
import "../../assets/styles/Navbar.css"
import NavbarLink from "../ui/NavbarLink"

const navbarLinks = [
  { name: "Projekt", href: "#projects" },
  { name: "Om mig", href: "#about" },
  { name: "Kontakt", href: "#contact" },
]

const Navbar = () => {
  return (
    <nav className="navbar-container h-navbar bg-light p-md flex justify-between items-center">
        <div className="logo">
            <img src="/src/assets/logo.png" alt="Logo" />
        </div>
        <div className="navbar-right gap-md flex items-center">
            <ul className="navbar-links text-dark gap-md flex">
                {navbarLinks.map((link) => (
                    <NavbarLink key={link.href} href={link.href}>
                        {link.name}
                    </NavbarLink>
                ))}
            </ul>
            <div className="social-icons">
                <CvIcon className="cv-btn bg-dark text-light" />
            </div>
        </div>
    </nav>
  )
}

export default Navbar