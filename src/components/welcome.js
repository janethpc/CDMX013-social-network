import { onNavigate } from '../main.js';

export const welcome = () => {
  const div = document.createElement('div');
 div.id = 'welcome';

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
  buttonRegister.textContent = 'Register';
  optionOr.textContent = 'Or';

  buttonLogin.addEventListener('click', () => {
    onNavigate('/login');
  });
  buttonRegister.addEventListener('click', () => {
    onNavigate('/register');
  });
  div.append(logoInicio, optionOr, buttonLogin, buttonRegister);

  const buttonLogin = document.createElement('button');
  buttonLogin.id = 'logIn';
  const buttonRegister = document.createElement('button');
  buttonRegister.id = 'register';

  buttonLogin.textContent = 'Log In';
  buttonRegister.textContent = 'Sign In';

  div.append(buttonLogin, buttonRegister);


  return div;
};
