import { onNavigate } from '../main.js';

export const logIn = () => {
  const div = document.createElement('div');

  const logoInicio = document.createElement('img');
  logoInicio.id = 'logo';

  const inputUsername = document.createElement('input');
  inputUsername.id = 'inputUsername';

  const inputPassword = document.createElement('input');
  inputPassword.id = 'inputPassword';

  const buttonLogin = document.createElement('button');
  buttonLogin.id = 'logIn2';

  const buttonBack = document.createElement('button');
  buttonBack.id = 'buttonBack';

  logoInicio.src = './images/logo5.png';
  buttonLogin.textContent = 'Log In';
  buttonBack.textContent = 'Back';
  inputUsername.placeholder = 'Username';
  inputPassword.placeholder = 'Password';

  div.append(logoInicio, inputUsername, inputPassword, buttonLogin, buttonBack);

  return div;
};
