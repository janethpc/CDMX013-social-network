import { onNavigate } from '../main.js';
import {
  loginUser, loginGoogle, loginTwitter, loginGithub,
} from '../lib/auth.js';
// import { cerrarsesion, verUsuario } from '../lib/auth.js';

export const login = () => {
  function enterHome() {
    const valueEmailLogin = document.getElementById('inputUsername').value;
    const valuePassword = document.getElementById('inputPassword').value;
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

  logoInicio.src = './images/logo5.png';
  buttonLoginOne.textContent = 'Log In';
  inputUsername.placeholder = 'Email';
  inputPassword.placeholder = 'Password';
  logoGoogle.src = './images/btn_google.png';
  logoTwitter.src = './images/btn_twitter.png';
  logoGitHub.src = './images/git.png';
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

  //const usuario = verUsuario();
  //console.log(usuario);

  //const verEmail = usuario.email;

  //const greeting = document.createElement('h2');
  //greeting.textContent = `Hola , ${verEmail}`;
  //greeting.id = 'titlePost';

  //const logOut = document.createElement('img');
  //logOut.src = './images/cerrar.png';
  //logOut.id = 'logOut';
  //logOut.addEventListener('click', () => {
    //cerrarsesion();
  //});

  div.append(
    logoInicio,
    inputUsername,
    inputPassword,
    buttonLoginOne,
    logoGoogle,
    logoTwitter,
    logoGitHub,
    optionSignAs
  );

  return div;
};
