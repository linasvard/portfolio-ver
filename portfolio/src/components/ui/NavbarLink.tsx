function NavbarLink({ href, children }) {
  return (
    <li>
        <a href={href} className="text-dark hover:text-accent">
            {children}
        </a>
    </li>
  )
}

export default NavbarLink