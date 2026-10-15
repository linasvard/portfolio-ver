type NavbarLinkProps = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

function NavbarLink({ href, children, onClick, className }: NavbarLinkProps) {
  return (
    <li className="w-full md:w-auto">
        <a href={href} onClick={onClick} className={`text-dark link-underline ${className || ''}`}>
            {children}
        </a>
    </li>
  )
}

export default NavbarLink