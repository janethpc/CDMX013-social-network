import {
  collection, doc, addDoc, deleteDoc, onSnapshot
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';
import { db } from './config.js';


export const savePost = async (text) => {
  if (text != '') {
    const docRef = await addDoc(collection(db, 'posts'), {
      texto: text,
      likes: [],
      // fecha
    });
    console.log('Document written with ID: ', docRef);
    if (docRef.id != '') {
      console.log('se guardo');
    }
  } else {
    console.error('Ojoo checa tu text! ');
  }
};

export const getPost = (callback) => {
  onSnapshot(collection(db, 'posts'), callback);
};

export const deletePost = (id) => deleteDoc(doc(db, 'posts', id));