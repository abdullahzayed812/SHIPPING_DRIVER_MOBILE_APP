export const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi;

export const simpleValidPassword = /\w+[!@#$%^&]*/gi;

// To check a password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter
export const validPassword6_20 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/gi;

// To check a password between 7 to 15 characters which contain at least one numeric digit and a special character
export const validPassword7_15 =
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/gi;

// To check a password between 8 to 15 characters which contain at least one lowercase letter,
// one uppercase letter, one numeric digit, and one special character
export const validPassword8_15 =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z0-9])(?!.*\s).{8,15}$/gi;

// contain numbers only
export const validMobileNumber = /[0-9][^a-zA-Z!@#$%^&*]{10,14}/gi;

// Check a username is'nt begin with digit or special character can contain - or _ after that can be lower or uper case or digits
export const validUserName = /[^\d+!@#$%^](-_)?[a-zA-Z0-9]+/gi;
