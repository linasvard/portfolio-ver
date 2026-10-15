export type Contact = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export type ContactErrors = Partial<Record<keyof Contact, string>>;