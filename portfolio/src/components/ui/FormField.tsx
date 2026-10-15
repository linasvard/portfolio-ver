import type { ChangeEvent } from 'react';
import type { Contact } from '../../types/contact';

type FormFieldProps = {
  name: keyof Contact;
  label: string;
  value: string;
  error?: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  multiline?: boolean;
  className?: string;
};

const FormField = ({
  name,
  label,
  value,
  error,
  onChange,
  type = 'text',
  multiline = false,
  className = '',
}: FormFieldProps) => {
  const sharedProps = {
    id: name,
    name,
    value,
    onChange,
    'aria-invalid': !!error,
    'aria-describedby': error ? `${name}-error` : undefined,
    className: error ? 'border-red-500' : '',
  };

  return (
    <div className={`flex flex-col gap-xs ${className}`}>
      <label htmlFor={name}>{label}</label>
      {multiline ? (
        <textarea {...sharedProps} rows={5} />
      ) : (
        <input {...sharedProps} type={type} />
      )}
      {error && (
        <span id={`${name}-error`} className="text-red-500 text-sm">
          {error}
        </span>
      )}
    </div>
  );
}

export default FormField;
