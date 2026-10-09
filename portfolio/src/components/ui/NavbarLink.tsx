function NavbarLink({ href, children }) {
  return (
    <li>
        <a href={href} className="text-dark hover:underline underline-offset-6 decoration-3">
            {children}
        </a>
    </li>
  )
}

export default NavbarLink