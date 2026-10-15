import type { ReactNode } from "react";
import { motion } from "motion/react";

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
    <motion.a
    whileHover={{ scale: 1.0, translateY: -2 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`text-accent hover:bg-accent transition-colors external-link ${className}`}
    > 
      {icon && <span aria-hidden="true" >{icon}</span>}
      {children}
      <span className="sr-only"> (öppnas i nytt fönster)</span>
    </motion.a>
  )
}


export default ExternalLink