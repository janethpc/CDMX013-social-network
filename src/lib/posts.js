import {
  collection, doc, addDoc, deleteDoc, onSnapshot, getDoc, updateDoc,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';

import {getAuth} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { db } from './config.js';

export const savePost = async (text) => {
  if (text !== '') {
    const auth = getAuth();
    const user = auth.currentUser;
    const docRef = await addDoc(collection(db, 'posts'), {
      texto: text,
      uid: user.uid,
      email: user.email,
      likes: 0,
    });
    console.log('Document written with ID: ', docRef);
    if (docRef.id !== '') {
      console.log('Your post was saved');
    }
  } else {
    console.error('Check your text please');
  }
};

export const getPost = (callback) => {
  onSnapshot(collection(db, 'posts'), callback);
};

export const deletePost = (id) => deleteDoc(doc(db, 'posts', id));

export const getTask = (id) => getDoc(doc(db, 'posts', id));

export const updatePost = (id, newFields) => updateDoc(doc(db, 'posts', id), newFields);