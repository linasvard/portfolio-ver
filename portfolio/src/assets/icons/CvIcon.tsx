import type { AnchorHTMLAttributes } from "react";

const CvIcon = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a
    href="https://drive.google.com/file/d/DITT-FIL-ID/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="CV"
    {...props}
  >

    Ladda ner CV
  </a>
);

export default CvIcon;