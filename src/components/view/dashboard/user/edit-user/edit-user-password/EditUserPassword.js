export const regexPassword = (password) => {
  const Uppercase = /[A-Z]/;
  const Lowercase = /[a-z]/;
  const Number = /[0-9]/;
  const PasswordLength = password.length >= 8;
  return Uppercase.test(password) && Lowercase.test(password) && Number.test(password) && PasswordLength;
}