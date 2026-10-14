import { useState, type ChangeEvent, type SubmitEvent } from 'react';
import {
  EMAIL_REGEX,
  NAME_REGEX,
  COMPANY_NAME_REGEX,
  SUBJECT_REGEX,
} from '../../utils/regex';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xjyvgldj';

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
  return errors;
};

const ContactForm = () => {
  const [contact, setContact] = useState<Contact>(initialContact);
  const [errors, setErrors] = useState<Errors>({});
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const fieldName =  e.target.name 
    setContact({ ...contact, [fieldName]: e.target.value })
    setErrors({ ...errors, [fieldName]: undefined })
  }

  const handleSubmit = async(e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newErrors = validate(contact)
    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) return;

    setIsSending(true)
    try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify(contact),
        }) 
        if (!res.ok) throw new Error('Failed to send message')
            setIsSubmitted(true)
            setContact(initialContact)
    } catch {
        setSendError('Något gick fel, försök igen senare')

    } finally {
        setIsSending(false)
    }
  }


  return (
    <form 
    onSubmit={handleSubmit} 
    noValidate
    className="grid grid-cols-1 md:grid-cols-2 gap-sm"
    >
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
        required />
        {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
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
          required />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
      </div>

      <div className="flex flex-col gap-xs">
        <label htmlFor="company">Ev. företag</label>
        <input 
          className={errors.company ? 'border-red-500' : ''}
          value={contact.company}
          onChange={(e) => handleChange(e)}
          aria-invalid={!!errors.company}
          type="text" 
          id="company" 
          name="company" />
          {errors.company && <span className="text-red-500 text-sm">{errors.company}</span>}
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
          required />
          {errors.subject && <span className="text-red-500 text-sm">{errors.subject}</span>}
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
          {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={isSending}

          className="bg-dark text-light py-2 px-4 rounded-3xl hover:bg-dark/80 transition-colors duration-300 w-full md:w-50"
          >
          {isSending ? 'Skickar...' : 'Skicka'}
        </button>
        {isSubmitted && <p className="text-green-500">Meddelandet har skickats!</p>}
        {sendError && <p className="text-red-500">{sendError}</p>}
      </div>
    </form>
  );
};

export default ContactForm;
