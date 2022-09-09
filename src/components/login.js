import { onNavigate } from '../main.js';

export const login = () => {
  const div = document.createElement('div');

  const logoInicio = document.createElement('img');
  logoInicio.id = 'logo';

  const inputUsername = document.createElement('input');
  inputUsername.id = 'inputUsername';

  const inputPassword = document.createElement('input');
  inputPassword.id = 'inputPassword';

  const buttonLoginOne = document.createElement('button');
  buttonLoginOne.id = 'logIn2';

  const buttonBack = document.createElement('button');
  buttonBack.id = 'buttonBack';

  logoInicio.src = './images/logo5.png';
  buttonLoginOne.textContent = 'Log In';
  buttonBack.textContent = 'Back';
  inputUsername.placeholder = 'Username';
  inputPassword.placeholder = 'Password';

  buttonLoginOne.addEventListener('click', () => {
    onNavigate('/');
  });
  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  div.append(logoInicio, inputUsername, inputPassword, buttonLoginOne, buttonBack);

  return div;
};
