import { cerrarsesion, observadorUser } from '../lib/auth.js';

export const home = () => {
  const div = document.createElement('div');
  div.id ='home';
  
  const logoHorizontal = document.createElement('img');
  logoHorizontal.src = './images/logoh.png';
  logoHorizontal.id = 'logoHorizontal'

  const homeIcon = document.createElement('img');
  homeIcon.src = './images/home1.png';
  homeIcon.id = 'homeIcon';
  homeIcon.addEventListener('click', () => {
    cerrarsesion();
  });

  const profile = document.createElement('img');
  profile.src = './images/profile.png';
  profile.id = 'profile';
  
  const greeting = document.createElement('h2');
  const emailver = ""; 
  
  greeting.textContent = 'Hola, Usuari@ 🖐🙋‍♀️' + emailver;
  greeting.className = 'titlePost';

  const questionPost = document.createElement('p');
  questionPost.textContent = '¿Quieres compartir algo?';
  questionPost.className = 'paragraphWall';

  const divNewPost = document.createElement('div');

  const inputPost = document.createElement('input');
  inputPost.className = 'inputPost';
  inputPost.placeholder = 'Escribe aqui... ';
  inputPost.id = 'inputPost';

  const buttonPost = document.createElement('button');
  buttonPost.id = 'buttonPost';
  buttonPost.className = 'buttonPost';

  const errorMessagePost = document.createElement('div'); // error messages
  const containerNewsWall = document.createElement('div');
  containerNewsWall.className = 'divCenterW';

  const newsWallTitle = document.createElement('h2');
  const noNewsWall = document.createElement('p');
  newsWallTitle.className = 'titlePost';

  const containerContent = document.createElement('div');
  containerContent.className = 'divCenterW';
  containerContent.id = 'divCenterW';

  buttonPost.addEventListener('click', () => {
    const data = {
      text: inputPost.value,
      createdAt: serverTimestamp(),
    }; console.log(data);
    posts(data);
  });

  divNewPost.append(inputPost, buttonPost);
  containerContent.append(greeting, questionPost, divNewPost, errorMessagePost);
  containerNewsWall.append(newsWallTitle, noNewsWall);

  div.append(logoHorizontal, homeIcon, profile, inputPost, containerContent, containerNewsWall);

  return div;
};
