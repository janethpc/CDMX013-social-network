import { onNavigate } from "../main.js";


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
  buttonRegister.addEventListener('click', () => {
  onNavigate('/register');
});
  div.append(logoInicio, optionOr, buttonLogin, buttonRegister);

  return div;
};
