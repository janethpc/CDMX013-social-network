import {
  collection, doc, addDoc, deleteDoc, onSnapshot, getDoc, updateDoc,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';
import { db } from './config.js';

export const savePost = async (text) => {
  if (text != '') {
    const docRef = await addDoc(collection(db, 'posts'), {
      texto: text,
      likes: [],
      // fecha
      // correo
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

export const getTask = (id) => getDoc(doc(db, 'posts', id));

export const updatePost = (id, newFields) => updateDoc(doc(db, 'posts', id), newFields);
