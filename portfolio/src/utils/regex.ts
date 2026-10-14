export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const NAME_REGEX = /^\p{L}+(?:[ '-]\p{L}+)*$/u;
export const COMPANY_NAME_REGEX = /^[\p{L}\p{N}](?:[\p{L}\p{N} &.,'’()/+-]*[\p{L}\p{N}.)])?$/u;
export const SUBJECT_REGEX = /^[^\p{Cc}]*[\p{L}\p{N}][^\p{Cc}]*$/u;