import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { app } from './config.js';

const auth = getAuth();

export const registerUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

const authlogin = getAuth();

export const loginUser = (email, password) => signInWithEmailAndPassword(authlogin, email, password);
 