import { cerrarsesion, verUsuario } from '../lib/auth.js';
import { savePost, getPost } from '../lib/posts.js';


const tasksContainer = document.createElement('taskContainer');
tasksContainer.id = 'taskContainer';
window.addEventListener('DOMContentLoaded', async () => {
const imprimirPost = getPost((querySnapshot)=>{
  let html = "";
  imprimirPost.forEach((doc) => {
    const task = doc.data();
    html += `
    <section id="sectionPost" class="card">
    <p>${task.texto}</p>
    </section>
    <img src='./images/borrar.png' id='borrar' ></img>
    <img src='./images/hearts.png' id='heart' ></img>
    <button id='delete' >Delete</button>
    `;
    console.log(`${doc.data()}+ 'datos de posts`);
});
tasksContainer.innerHTML = html;
});

//window.addEventListener('DOMContentLoaded', async () => {
  //const Snapshot = await getTask();
  //let html = '';
  //Snapshot.forEach((doc) => {
    //const task = doc.data();
    //html += `
    //<section id="sectionPost" class="card">
    //<p>${task.texto}</p>
    //</section>
    //<img src='./images/borrar.png' id='borrar' ></img>
    //<img src='./images/hearts.png' id='heart' ></img>
    //<button id='delete' >Delete</button>
    /* `;
    console.log(`${doc.data()}+ 'datos de posts`);
  });
  tasksContainer.innerHTML = html;
}); */

export const home = () => {
  const container = document.createElement('div');
  container.id = 'container';

  const divHeader = document.createElement('div');
  divHeader.id = 'header';

  const logoHorizontal = document.createElement('img');
  logoHorizontal.src = './images/logoh.png';
  logoHorizontal.id = 'logoHorizontal';

  const usuario = verUsuario();
  console.log(usuario);

  const verEmail = usuario.email;
  const greeting = document.createElement('p');
  greeting.textContent = "Hola" +verEmail;
  greeting.id = 'titlePost';

  const logOut = document.createElement('img');
  logOut.src = './images/cerrar.png';
  logOut.id = 'logOut';
  logOut.addEventListener('click', () => {
    cerrarsesion();
  });

  const divPost = document.createElement('div');
  divPost.id = 'divPost';

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
    //location.reload();
  });
  const divWall = document.createElement('div');
  divWall.id = 'divWall';
  divWall.appendChild(tasksContainer);

  container.append(divHeader, divPost, divWall);
  divHeader.append(logoHorizontal, greeting, logOut);
  divPost.append(inputPost, questionPost, buttonPost);
  return container;
}
