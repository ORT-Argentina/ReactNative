export const emailValidator = (email: string) => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return 'El campo E-Mail no puede estar vació.';
  if (!re.test(email)) return 'Ooops! We need a valid email address.';

  return '';
};

export const passwordValidator = (password: string) => {
  if (!password || password.length <= 0) return 'La contraseña no puede estar vaciá.';

  return '';
};

export const nameValidator = (name: string) => {
  if (!name || name.length <= 0) return 'El campo Nombre es obligatorio.';

  return '';
};
