import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, TwitterAuthProvider }
  from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { app } from './config.js';
import { onNavigate } from '../main.js';

const auth = getAuth();

export const registerUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password);

const provider = new GoogleAuthProvider();
export const loginGoogle = () => signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    onNavigate('/home');
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
const providerTwitter = new TwitterAuthProvider();
export const loginTwitter = () => signInWithPopup(auth, providerTwitter)
  .then((result) => {
    // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
    // You can use these server side with your app's credentials to access the Twitter API.
    const credential = TwitterAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const secret = credential.secret;

    // The signed-in user info.
    const user = result.user;
    onNavigate('/home');
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = TwitterAuthProvider.credentialFromError(error);
    // ...
  });
