import { cerrarsesion } from '../lib/auth.js';
import { savePost, getTask, deletePost } from '../lib/posts.js';

const tasksContainer = document.createElement('taskContainer');
tasksContainer.id = 'taskContainer';

window.addEventListener('DOMContentLoaded', async () => {
  const onSnapshot = await getTask();
  let html = '';
  onSnapshot.forEach((doc) => {
    const task = doc.data();
    html += `
    <section id="sectionPost" class="card">
    <p>${task.texto}</p>
    </section>
    <img src='./images/borrar.png' id='btnDelete' class='btnDelete' data-id='${doc.id}' ></img>
    <img src='./images/hearts.png' id='heart' ></img>
    `;
  });
  tasksContainer.innerHTML = html;

  const btnsDelete = tasksContainer.querySelectorAll('.btnDelete');
  btnsDelete.forEach((btn) => {
    btn.addEventListener('click', ({ target: { dataset } }) => {
      console.log(dataset.id);
      deletePost(dataset.id);
    });
  });
});

export const home = () => {
  const container = document.createElement('div');
  container.id = 'container';

  const divHeader = document.createElement('div');
  divHeader.id = 'header';

  const logoHorizontal = document.createElement('img');
  logoHorizontal.src = './images/logoh.png';
  logoHorizontal.id = 'logoHorizontal';

  const logOut = document.createElement('img');
  logOut.src = './images/cerrar.png';
  logOut.id = 'logOut';
  logOut.addEventListener('click', () => {
    cerrarsesion();
  });

  const divPost = document.createElement('div');
  divPost.id = 'divPost';

  const greeting = document.createElement('p');
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
    location.reload();
  });
  const divWall = document.createElement('div');
  divWall.id = 'divWall';
  divWall.appendChild(tasksContainer);

  container.append(divHeader, divPost, divWall);
  divHeader.append(logoHorizontal, logOut);
  divPost.append(inputPost, greeting, questionPost, buttonPost);
  return container;
};
