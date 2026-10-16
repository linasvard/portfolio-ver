import CvIcon from '../../assets/icons/CvIcon';

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <div className="flex max-width padding-overall flex-col md:gap-md md:flex-row justify-between gap-lg max-width mx-auto">
        <div className="flex flex-col gap-md max-w-70">
          <div>
            <p className="font-bold">Based in:</p>
            <p>Göteborg, Sverige</p>
          </div>
          <div>
            <p className="font-bold">Redo för:</p>
            <p>Nya utmaningar inom både front end och grafisk design</p>
          </div>
        </div>
        <div className="flex flex-row gap-md md:gap-xl justify-between">
          <div className="flex flex-col gap-xs">
            <p className="font-bold">Lina Svärd</p>
            <a className="link-underline-light w-fit" href="#projects">
              Projekt
            </a>
            <a className="link-underline-light w-fit" href="#about">
              Om mig
            </a>
            <a className="link-underline-light w-fit" href="#contact">
              Kontakt
            </a>
          </div>
          <div className="flex flex-col gap-xs">
            <p className="font-bold">Kontakt</p>
            <a
              className="link-underline-light w-fit"
              href="mailto:linajsvard@hotmail.com">
              Mail
            </a>
            <a
              className="link-underline-light w-fit"
              href="https://www.linkedin.com/in/lina-sv%C3%A4rd-b04a12109/"
              target="_blank"
              rel="noopener noreferrer">
              LinkedIn
            </a>
            <a
              className="link-underline-light w-fit"
              href="https://github.com/linasvard"
              target="_blank"
              rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="mt-md max-width padding-overall pt-0 flex flex-col gap-md md:flex-row justify-between items-center text-left">
        <p className="text-light/50">
          &copy; {new Date().getFullYear()} Lina Svärd. All rights reserved.
        </p>
        <div>
          <CvIcon className="hover:bg-light hover:text-dark transition-colors rounded-full duration-200 py-xs px-6 bg-accent text-dark" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
