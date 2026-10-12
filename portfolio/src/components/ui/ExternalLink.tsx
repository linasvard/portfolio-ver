import type { ReactNode } from "react";

type ExternalLinkProps = {
    href?: string;
    children?: ReactNode;
    icon?: ReactNode;
    className?: string; 
};

const ExternalLink = ({ href, children, icon, className = "" }: ExternalLinkProps) => {

    if (!href) {
        return null;
    }

  return (
    <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`text-accent hover:underline external-link ${className}`}
    > 
      {icon && <span aria-hidden="true" >{icon}</span>}
      {children}
      <span className="sr-only"> (öppnas i nytt fönster)</span>
    </a>
  )
}


export default ExternalLink