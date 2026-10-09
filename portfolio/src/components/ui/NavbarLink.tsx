function NavbarLink({ href, children }) {
  return (
    <li>
        <a href={href} className="text-dark link-underline">
            {children}
        </a>
    </li>
  )
}

export default NavbarLink