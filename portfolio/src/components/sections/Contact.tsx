import WigglyLine from '../../assets/images/wiggly-line.png';
import MailIcon from '../../assets/icons/mail-icon.png';
import LinkedinIcon from '../../assets/icons/linkedin-icon.png';

import '../../assets/styles/Contact.css';

const Contact = () => {
  return (
    <section
      className="bg-accent"
      id="contact">
      <div className="padding-overall max-width grid grid-cols-1 lg:grid-cols-[2fr_3fr] md:gap-xxl gap-md">
        <div className="flex flex-col gap-md lg:max-w-[500px] max-w-full">
          <div className="flex flex-col gap-sm">
            <h2 className="font-bold text-heading">Let's get in touch</h2>
            <p>
              Använd gärna formuläret eller släng iväg ett meddelande på
              LinkedIn eller mejlen, eller varför inte alla tre?
            </p>
          </div>
          <div>
            <img
              className="w-[95%] h-auto mt-sm mb-md"
              src={WigglyLine}
              alt=""
              aria-hidden="true"
            />
          </div>
          <div>
            <address className="grid grid-cols-2 gap-sm items-center">
              <a href="mailto:linajsvard@hotmail.com">
                <img className="h-30 w-auto" src={MailIcon} alt="Email" />
              </a>
              <a
                href="https://www.linkedin.com/in/linajsvard/"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  className="h-35 w-auto"
                  src={LinkedinIcon}
                  alt="LinkedIn"
                />
              </a>
            </address>
          </div>
        </div>
        <form className="mt-md grid grid-cols-1 md:grid-cols-2 gap-sm">
          <div className="flex flex-col gap-xs">
            <label htmlFor="name">Namn</label>
            <input type="text" id="name" name="name" />
          </div>

          <div className="flex flex-col gap-xs">
            <label htmlFor="email">E-post</label>
            <input type="email" id="email" name="email" />
          </div>

          <div className="flex flex-col gap-xs">
            <label htmlFor="phone">Telefon</label>
            <input type="tel" id="phone" name="phone" />
          </div>

          <div className="flex flex-col gap-xs">
            <label htmlFor="subject">Ämne</label>
            <input type="text" id="subject" name="subject" />
          </div>

          <div className="flex flex-col gap-xs md:col-span-2">
            <label htmlFor="message">Meddelande</label>
            <textarea id="message" name="message" rows={5}></textarea>
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-dark text-light py-2 px-4 rounded-3xl hover:bg-dark/80 transition-colors duration-300 w-full md:w-50">
              Skicka
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
