import { onNavigate } from '../main.js';
import { registerUser } from '../lib/auth.js';

export const register = () => {
  function registerUsuario() {
    const valueEmail = document.getElementById('inputUsername').value;
    const password = document.getElementById('inputPassword').value;
    registerUser(valueEmail, password).then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert('usuario registrado correctamente');
      console.log(user);
      // ...
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert('Ingrese los datos correctamente');
      });
  }

  const div = document.createElement('div');
  div.id = 'divRegister';

  const logoInicio = document.createElement('img');
  logoInicio.id = 'logo';

  const buttonLoginOne = document.createElement('button');
  buttonLoginOne.id = 'logIn2';

  const buttonBack = document.createElement('button');
  buttonBack.id = 'buttonBack';

  const inputEmail = document.createElement('input');
  inputEmail.id = 'inputUsername';

  const inputPassword = document.createElement('input');
  inputPassword.id = 'inputPassword';
  inputPassword.setAttribute('type', 'password');

  logoInicio.src = './images/logo5.png';
  buttonLoginOne.textContent = 'Create acount';
  buttonBack.textContent = 'Back';
  inputEmail.placeholder = 'Email';
  inputPassword.placeholder = 'Password';

  buttonLoginOne.addEventListener('click', () => {
    registerUsuario();
  });
  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  div.append(logoInicio, inputEmail, inputPassword, buttonLoginOne, buttonBack);

  return div;
};
