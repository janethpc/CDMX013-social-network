import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC2examG0LregGs2C9N9FGt4a7SFb420u4',
  authDomain: 'party-girls-2022.firebaseapp.com',
  projectId: 'party-girls-2022',
  storageBucket: 'party-girls-2022.appspot.com',
  messagingSenderId: '553450782361',
  appId: '1:553450782361:web:a60f6128e6d42e5a5d4208',
  measurementId: 'G-LKR9GJXQYC',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
