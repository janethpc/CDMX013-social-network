import { onNavigate } from '../main.js';
import { loginUser, loginGoogle } from '../lib/auth.js';

export const login = () => {
  function enterHome() {
    const valueEmailLogin = document.getElementById('inputUsername').value
    const valuePassword = document.getElementById('inputPassword').value 
    loginUser(valueEmailLogin, valuePassword).then((userCredential) => {
      // Signed in
        const user = userCredential.user;
        onNavigate('/home');
        console.log(user);
      // ...
      })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          alert('Contraseña erronea');
        });
  };
  
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

  const logoGitHub = document.createElement('img');
  logoGitHub.id = 'logoGitHub';

  const buttonBack = document.createElement('button');
  buttonBack.id = 'buttonBack';

  logoInicio.src = './images/logo5.png';
  buttonLoginOne.textContent = 'Log In';
  buttonBack.textContent = 'Back';
  inputUsername.placeholder = 'Email';
  inputPassword.placeholder = 'Password';
  logoGoogle.src = './images/btn_google.png';
  logoTwitter.src = './images/btn_twitter.png';
  logoGitHub.src = './images/git.png';
  optionSignAs.textContent = 'Or Sign As ..';

  buttonLoginOne.addEventListener('click', () => {
    enterHome();
  });
  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });
  logoGoogle.addEventListener('click', () => {
    loginGoogle();
  });

    div.append(logoInicio,
    inputUsername,
    inputPassword,
    buttonLoginOne,
    buttonBack,
    logoGoogle,
    logoTwitter,
    logoGitHub,
    optionSignAs);

  return div;
};
