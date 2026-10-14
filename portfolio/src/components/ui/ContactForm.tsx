import { useState, type ChangeEvent, type SubmitEvent } from 'react';
import {
  EMAIL_REGEX,
  NAME_REGEX,
  COMPANY_NAME_REGEX,
  SUBJECT_REGEX,
} from '../../utils/regex';

type Contact = {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
};

const initialContact: Contact = {
  name: '',
  email: '',
  company: '',
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

  if (contact.company.trim() && !COMPANY_NAME_REGEX.test(contact.company)) {
    errors.company = 'Skriv in ett giltigt företagsnamn';
  }

  if (!contact.message.trim()) {
    errors.message = 'Skriv in ett meddelande';
  }
};

const ContactForm = () => {
  const [contact, setContact] = useState<Contact>(initialContact);
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const fieldName =  e.target.name 
    setContact({ ...contact, [fieldName]: e.target.value })
    setErrors({ ...errors, [fieldName]: undefined })
  }

  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-sm">
      <div className="flex flex-col gap-xs">
        <label htmlFor="name">Namn*</label>
        <input type="text" id="name" name="name" required />
      </div>

      <div className="flex flex-col gap-xs">
        <label htmlFor="email">E-post*</label>
        <input type="email" id="email" name="email" required />
      </div>

      <div className="flex flex-col gap-xs">
        <label htmlFor="company">Ev. företag</label>
        <input type="text" id="company" name="company" />
      </div>

      <div className="flex flex-col gap-xs">
        <label htmlFor="subject">Ämne*</label>
        <input type="text" id="subject" name="subject" required />
      </div>

      <div className="flex flex-col gap-xs md:col-span-2">
        <label htmlFor="message">Meddelande*</label>
        <textarea id="message" name="message" rows={5} required></textarea>
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          className="bg-dark text-light py-2 px-4 rounded-3xl hover:bg-dark/80 transition-colors duration-300 w-full md:w-50">
          Skicka
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
