import { useState, type ChangeEvent, type SubmitEvent } from 'react';
import {
  EMAIL_REGEX,
  NAME_REGEX,
  PHONE_REGEX,
  SUBJECT_REGEX,
} from '../../utils/regex';
import { motion, AnimatePresence } from 'motion/react';
import type { Contact, ContactErrors } from '../../types/contact';  
import FormField from './FormField';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xjyvgldj';

const initialContact: Contact = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};


const validate = (contact: Contact): ContactErrors => {
  const errors: ContactErrors = {};
  if (!contact.name.trim()) {
    errors.name = 'Skriv in ditt namn';
  } else if (!NAME_REGEX.test(contact.name)) {
    errors.name = 'Skriv in ett giltigt namn';
  }

  if (!contact.email.trim()) {
    errors.email = 'Skriv in din e-mail';
  } else if (!EMAIL_REGEX.test(contact.email)) {
    errors.email = 'Skriv in en giltig e-mail';
  }

  if (!contact.subject.trim()) {
    errors.subject = 'Skriv in ett ämne';
  } else if (!SUBJECT_REGEX.test(contact.subject)) {
    errors.subject = 'Skriv in en giltig ämnesrad';
  }

  if (!contact.phone.trim()) {
    errors.phone = 'Skriv in ett telefonnummer';
  } else if (!PHONE_REGEX.test(contact.phone)) {
    errors.phone = 'Skriv in ett giltigt telefonnummer';
  }

  if (!contact.message.trim()) {
    errors.message = 'Skriv in ett meddelande';
  }
  return errors;
};

const ContactForm = () => {
  const [contact, setContact] = useState<Contact>(initialContact);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const fieldName = e.target.name;
    setContact({ ...contact, [fieldName]: e.target.value });
    setErrors({ ...errors, [fieldName]: undefined });
  };

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = validate(contact);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setIsSending(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(contact),
      });
      if (!res.ok) throw new Error('Failed to send message');
      setIsSubmitted(true);
      setContact(initialContact);
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch {
      setSendError('Något gick fel, försök igen senare');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="grid grid-cols-1 md:grid-cols-2 gap-sm">
      <FormField
       name="name"
       type="text"
       label="Namn*"
       value={contact.name}
       error={errors.name}
       onChange={handleChange}
      />
  
      <FormField
      name="email"
      type="email"
      label="E-post*"
      value={contact.email}
      error={errors.email}
      onChange={handleChange}
      />

      <FormField
      name="phone"
      type="tel"
      label="Telefon"
      value={contact.phone}
      error={errors.phone}
      onChange={handleChange}
      />

      <FormField
      name="subject"
      type="text"
      label="Ämne*"
      value={contact.subject}
      error={errors.subject}
      onChange={handleChange}
      />

      <FormField
      name="message"
      label="Meddelande*"
      multiline
      className="md:col-span-2"
      value={contact.message}
      error={errors.message}
      onChange={handleChange}
        />
      

      <div className="md:col-span-2 flex flex-col gap-xs">
        <div className="flex items-center">
          <button
            type="submit"
            disabled={isSending}
            className="relative z-10 bg-dark mt-2 border border-accent text-accent py-3 px-4 rounded-3xl hover:bg-light hover:text-dark hover:border-dark transition-colors duration-300 w-full md:w-50">
            {isSending ? 'Skickar...' : 'Skicka'}
          </button>

          <AnimatePresence>
            {isSubmitted && (
              <motion.span
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '-100%', opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="relative z-0 text-light ml-sm border border-dark bg-success rounded-full bg-light px-4 py-2 whitespace-nowrap">
                Meddelandet har skickats!
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {sendError && <p className="color-danger">{sendError}</p>}
      </div>
    </form>
  );
};

export default ContactForm;
