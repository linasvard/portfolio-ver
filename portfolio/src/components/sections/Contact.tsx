import WigglyLine from '../../assets/images/wiggly-line.png';
import MailIcon from '../../assets/icons/mail-icon.png';
import LinkedinIcon from '../../assets/icons/linkedin-icon.png';
import { motion } from 'motion/react';
import { fadeInLeft, fadeInRight } from '../../utils/animations';

import '../../assets/styles/Contact.css';
import ContactForm from '../ui/ContactForm';

const Contact = () => {
  return (
    <section
      className="bg-accent"
      id="contact">
      <div 
      className="padding-overall max-width grid grid-cols-1 lg:grid-cols-[2fr_3fr] md:gap-xxl gap-md items-start">
        <motion.div {...fadeInLeft(0.1)} className="flex flex-col gap-sm lg:max-w-[500px] max-w-full">
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
            <address className="grid grid-cols-2 gap-sm mt-[-10px] items-center">
              <a href="mailto:linajsvard@hotmail.com">
                <img className="h-30 w-auto object-contain" src={MailIcon} alt="Email" />
              </a>
              <a
                href="https://www.linkedin.com/in/linajsvard/"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  className="h-35 w-auto object-contain"
                  src={LinkedinIcon}
                  alt="LinkedIn"
                />
              </a>
            </address>
          </div>
        </motion.div>
        <motion.div {...fadeInRight(0.1)}>
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
