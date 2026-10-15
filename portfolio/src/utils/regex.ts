export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const NAME_REGEX = /^\p{L}+(?:[ '-]\p{L}+)*$/u;
export const PHONE_REGEX = /^(?:\+46|0046|0)[\s-]?\d{1,3}[\s-]?\d{2,3}[\s-]?\d{2,3}[\s-]?\d{2,3}$/;
export const SUBJECT_REGEX = /^[^\p{Cc}]*[\p{L}\p{N}][^\p{Cc}]*$/u;