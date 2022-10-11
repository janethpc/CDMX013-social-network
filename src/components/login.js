import { onNavigate } from '../main.js';
import {
  loginUser, loginGoogle, loginTwitter, loginGithub,
} from '../lib/auth.js';

export const login = () => {
  function enterHome() {
    const valueEmailLogin = document.getElementById('inputUsername').value;
    const valuePassword = document.getElementById('inputPassword').value;
    loginUser(valueEmailLogin, valuePassword).then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      onNavigate('/home');
      console.log(user);
    })
      .catch((error) => {
      /*  const divModal = document.createElement('modal');
        divModal.id = 'divModal';
        divModal.className = 'divModal'; */

        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Invalid Password');
      });
  }

  const div = document.createElement('div');
  div.id = 'divLogin';

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

  const logoGitHub = document.createElement('img');
  logoGitHub.id = 'logoGitHub';

  logoInicio.src = './Images/logo5.png';
  buttonLoginOne.textContent = 'Log In';
  inputUsername.placeholder = 'Email';
  inputPassword.placeholder = 'Password';
  logoGoogle.src = './Images/btn_google.png';
  logoTwitter.src = './Images/btn_twitter.png';
  logoGitHub.src = './Images/git.png';
  optionSignAs.textContent = 'Or Sign As ..';

  buttonLoginOne.addEventListener('click', () => {
    enterHome();
  });
  logoGoogle.addEventListener('click', () => {
    loginGoogle();
  });
  logoTwitter.addEventListener('click', () => {
    loginTwitter();
  });

  logoGitHub.addEventListener('click', () => {
    loginGithub();
  });

  div.append(
    logoInicio,
    inputUsername,
    inputPassword,
    buttonLoginOne,
    logoGoogle,
    logoTwitter,
    logoGitHub,
    optionSignAs,
  );

  return div;
};
