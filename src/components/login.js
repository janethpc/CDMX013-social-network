import { onNavigate } from '../main.js';

export const login = () => {
  const div = document.createElement('div');

  const logoInicio = document.createElement('img');
  logoInicio.id = 'logo';

  const inputUsername = document.createElement('input');
  inputUsername.id = 'inputUsername';

  const inputPassword = document.createElement('input');
  inputPassword.id = 'inputPassword';
  inputPassword.setAttribute('type', 'password');

  const optionSignAs = document.createElement('h');
  optionSignAs.id = 'SignAs';

  const buttonLoginOne = document.createElement('button');
  buttonLoginOne.id = 'logIn2';

  const logoGoogle = document.createElement('img');
  logoGoogle.id = 'logoGoogle';

  const logoTwitter = document.createElement('img');
  logoTwitter.id = 'logoTwitter';

  const logogithub = document.createElement('img');
  logogithub.id = 'logogithub';

  const buttonBack = document.createElement('button');
  buttonBack.id = 'buttonBack';

  logoInicio.src = './images/logo5.png';
  buttonLoginOne.textContent = 'Log In';
  buttonBack.textContent = 'Back';
  inputUsername.placeholder = 'Username';
  inputPassword.placeholder = 'Password';
  logoGoogle.src = './images/btn_google.png';
  logoTwitter.src = './images/btn_twitter.png';
  logogithub.src = './images/git.png';
  optionSignAs.textContent = 'Or Sign As ..';

  buttonLoginOne.addEventListener('click', () => {
    onNavigate('/home');
  });
  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  div.append(logoInicio,
    inputUsername,
    inputPassword,
    buttonLoginOne,
    buttonBack,
    logoGoogle,
    logoTwitter,
    logogithub,
    optionSignAs);

  return div;
};
