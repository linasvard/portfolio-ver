
const ExternalLink = ({ href, children }) => {

    if (!href) {
        return null;
    }

  return (
    <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-accent hover:underline"
    >   
      {children}
    </a>
  )
}

export default ExternalLink