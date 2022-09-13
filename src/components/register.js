import { onNavigate } from '../main.js';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2examG0LregGs2C9N9FGt4a7SFb420u4",
  authDomain: "party-girls-2022.firebaseapp.com",
  projectId: "party-girls-2022",
  storageBucket: "party-girls-2022.appspot.com",
  messagingSenderId: "553450782361",
  appId: "1:553450782361:web:a60f6128e6d42e5a5d4208",
  measurementId: "G-LKR9GJXQYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const register = () => {
  const div = document.createElement('div');

  const logoInicio = document.createElement('img');
  logoInicio.id = 'logo';

  const logoGoogle = document.createElement('img');
  logoGoogle.id = 'logoGoogle';

  const buttonLoginOne = document.createElement('button');
  buttonLoginOne.id = 'logIn2';

  const buttonBack = document.createElement('button');
  buttonBack.id = 'buttonBack';

  const inputEmail = document.createElement('input');
  inputEmail.id = 'inputUsername';

  const inputPassword = document.createElement('input');
  inputPassword.id = 'inputPassword';

  const logoTwitter = document.createElement('img');
  logoTwitter.id = 'logoTwitter';

  const logogithub = document.createElement('img');
  logogithub.id = 'logogithub';

  logoInicio.src = './images/logo5.png';
  buttonLoginOne.textContent = 'Create acount';
  buttonBack.textContent = 'Back';
  inputEmail.placeholder = 'Email';
  inputPassword.placeholder = 'Password';
  logoGoogle.src = './images/btn_google.png';
  logoTwitter.src = './images/btn_twitter.png';
  logogithub.src = './images/git.png';

  buttonLoginOne.addEventListener('click', () => {
    onNavigate('/');
  });
  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

div.append(logoInicio, inputEmail, inputPassword, buttonLoginOne, buttonBack, logoGoogle, logoTwitter, logogithub);

  return div;
};
