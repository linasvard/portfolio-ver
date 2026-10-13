import type { SVGProps } from "react"

const MotionIcon = ({ className = "w-10 h-10", ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className={className}
    {...props}
  >
    {/* klistra in <path>-taggarna från din SVG här */}
  </svg>
)

export default MotionIcon