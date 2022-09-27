import { cerrarsesion, verUsuario } from '../lib/auth.js';
import { savePost } from '../lib/posts.js';

export const home = () => {
  const div = document.createElement('div');
  div.id = 'home';

  const logoHorizontal = document.createElement('img');
  logoHorizontal.src = './images/logoh.png';
  logoHorizontal.id = 'logoHorizontal';

  const homeIcon = document.createElement('img');
  homeIcon.src = './images/home1.png';
  homeIcon.id = 'homeIcon';

  const logOut = document.createElement('img');
  logOut.src = './images/cerrar.png';
  logOut.id = 'logOut';
  logOut.addEventListener('click', () => {
    cerrarsesion();
  });

  const greeting = document.createElement('h2');
  greeting.textContent = 'Hola ';
  greeting.id = 'titlePost';

  const questionPost = document.createElement('p');
  questionPost.textContent = '¿Quieres compartir algo?';
  questionPost.id = 'questionPost';

  const inputPost = document.createElement('input');

  inputPost.className = 'inputPost';
  inputPost.placeholder = 'Escribe aqui... ';
  inputPost.id = 'inputPost';

  const buttonPost = document.createElement('button');
  buttonPost.id = 'buttonPost';
  buttonPost.className = 'buttonPost';
  buttonPost.textContent = 'Post';
  buttonPost.addEventListener('click', async () => {
    await savePost(inputPost.value);
  });

  div.append(logoHorizontal, homeIcon, logOut, greeting, inputPost, questionPost, buttonPost);

  return div;
};
