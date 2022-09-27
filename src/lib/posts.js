import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';
import { db } from './config.js';
// Add a new document with a generated id.
export const savePost = async () => {
  const docRef = await addDoc(collection(db, 'posts'), {
    text: 'hola crayolis',

  });
};
