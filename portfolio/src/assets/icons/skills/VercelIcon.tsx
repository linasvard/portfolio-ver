import type { SVGProps } from 'react';

const VercelIcon = ({
  className = 'w-10 h-10',
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 -17 256 256"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className={className}
    {...props}>
    <g>
      <polygon
        fill="currentColor"
        points="128 0 256 221.705007 0 221.705007"></polygon>
    </g>
  </svg>
);

export default VercelIcon;
