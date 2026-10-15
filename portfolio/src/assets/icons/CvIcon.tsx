import type { AnchorHTMLAttributes } from "react";

const CvIcon = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a
    className="hover:bg-accent hover:text-dark transition-colors duration-200 cv-btn py-xs px-6 bg-dark text-light"
    href="/cv_lina_okt_26.pdf"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="CV"
    {...props}
  >

    Ladda ner CV
  </a>
);

export default CvIcon;