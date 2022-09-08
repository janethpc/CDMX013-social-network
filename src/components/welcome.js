import { onNavigate } from '../main';

export const welcome = () => {
  const div = document.createElement('div');

  const logoInicio = document.createElement('img');
  logoInicio.id = 'logo';

  const buttonLogin = document.createElement('button');
  buttonLogin.id = 'logIn';

  const optionOr = document.createElement('p');
  optionOr.id = 'or';

  const buttonRegister = document.createElement('button');
  buttonRegister.id = 'register';

  logoInicio.src = './images/logo5.png';
  buttonLogin.textContent = 'Log In';
  buttonRegister.textContent = 'Sign In';
  optionOr.textContent = 'Or';

  buttonLogin.addEventListener('click', () => {
    onNavigate('/login');
  });
  div.append(logoInicio, optionOr, buttonLogin, buttonRegister);

  return div;
};
