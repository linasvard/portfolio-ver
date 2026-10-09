type NavbarLinkProps = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
};

function NavbarLink({ href, children, onClick }: NavbarLinkProps) {
  return (
    <li>
        <a href={href} onClick={onClick} className="text-dark link-underline">
            {children}
        </a>
    </li>
  )
}

export default NavbarLink