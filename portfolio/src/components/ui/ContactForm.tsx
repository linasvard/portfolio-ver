import { useState, type ChangeEvent, type SubmitEvent } from 'react';
import {
  EMAIL_REGEX,
  NAME_REGEX,
  PHONE_REGEX,
  SUBJECT_REGEX,
} from '../../utils/regex';
import { motion, AnimatePresence } from 'motion/react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xjyvgldj';

type Contact = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const initialContact: Contact = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

type Errors = Partial<Record<keyof Contact, string>>;

const validate = (contact: Contact): Errors => {
  const errors: Errors = {};
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

  if (contact.phone.trim() && !PHONE_REGEX.test(contact.phone)) {
    errors.phone = 'Skriv in ett giltigt telefonnummer';
  }

  if (!contact.message.trim()) {
    errors.message = 'Skriv in ett meddelande';
  }
  return errors;
};

const ContactForm = () => {
  const [contact, setContact] = useState<Contact>(initialContact);
  const [errors, setErrors] = useState<Errors>({});
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
      <div className="flex flex-col gap-xs">
        <label htmlFor="name">Namn*</label>
        <input
          className={errors.name ? 'border-red-500' : ''}
          value={contact.name}
          onChange={(e) => handleChange(e)}
          aria-invalid={!!errors.name}
          type="text"
          id="name"
          name="name"
          required
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name}</span>
        )}
      </div>

      <div className="flex flex-col gap-xs">
        <label htmlFor="email">E-post*</label>
        <input
          className={errors.email ? 'border-red-500' : ''}
          value={contact.email}
          onChange={(e) => handleChange(e)}
          aria-invalid={!!errors.email}
          type="email"
          id="email"
          name="email"
          required
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email}</span>
        )}
      </div>

      <div className="flex flex-col gap-xs">
        <label htmlFor="phone">Telefon</label>
        <input
          className={errors.phone ? 'border-red-500' : ''}
          value={contact.phone}
          onChange={(e) => handleChange(e)}
          aria-invalid={!!errors.phone}
          type="number"
          id="phone"
          name="phone"
        />
        {errors.phone && (
          <span className="text-red-500 text-sm">{errors.phone}</span>
        )}
      </div>

      <div className="flex flex-col gap-xs">
        <label htmlFor="subject">Ämne*</label>
        <input
          className={errors.subject ? 'border-red-500' : ''}
          value={contact.subject}
          onChange={(e) => handleChange(e)}
          aria-invalid={!!errors.subject}
          type="text"
          id="subject"
          name="subject"
          required
        />
        {errors.subject && (
          <span className="text-red-500 text-sm">{errors.subject}</span>
        )}
      </div>

      <div className="flex flex-col gap-xs md:col-span-2">
        <label htmlFor="message">Meddelande*</label>
        <textarea
          className={errors.message ? 'border-red-500' : ''}
          value={contact.message}
          onChange={(e) => handleChange(e)}
          aria-invalid={!!errors.message}
          id="message"
          name="message"
          rows={5}
          required></textarea>
        {errors.message && (
          <span className="text-red-500 text-sm">{errors.message}</span>
        )}
      </div>

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
                className="relative z-0 text-dark ml-sm border border-dark rounded-xl bg-light p-2 whitespace-nowrap">
                Meddelandet har skickats!
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {sendError && <p className="text-red-500">{sendError}</p>}
      </div>
    </form>
  );
};

export default ContactForm;
