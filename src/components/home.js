import { cerrarsesion, verUsuario } from '../lib/auth.js';
import { savePost, getPost, deletePost, getTask, updatePost } from '../lib/posts.js';

const tasksContainer = document.createElement('taskContainer');
tasksContainer.id = 'taskContainer';

let editStatus = false;
let id ="";

let numberLikes = 0;

export const home = () => {

  const imprimirPost = getPost((querySnapshot)=>{
    console.log("pintado de posts");
    let html = "";
    querySnapshot.forEach((doc) => {
      const task = doc.data();
      html += `
      <p>${task.email}</p>
      <section id="sectionPost" class="card">
      <p>${task.texto}</p>
      </section>
      <img src='./images/borrar.png' id='btnDelete' class='btnDelete' data-id='${doc.id}' ></img>
    <img src='./images/hearts.png' id='heart' class='heart' data-id='${doc.id}' ></img>
    <p id="counterLikes" class="counterLikes">${task.likes}</p>
    <img src='./images/editar.png' id='btnEdit' class='btnEdit' data-id='${doc.id}' ></img>
    `;
    console.log(task);
  });
  tasksContainer.innerHTML = html;
  const btnsDelete = tasksContainer.querySelectorAll('.btnDelete');
  btnsDelete.forEach((btn) => {
    btn.addEventListener('click', ({ target: { dataset } }) => {
      console.log(dataset.id);
      deletePost(dataset.id);
    });
  });
   /* boton editar */
   const btnsEdit = tasksContainer.querySelectorAll('.btnEdit');
    btnsEdit.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        const doc = await getTask(e.target.dataset.id);
        const postEdit = doc.data();
        inputPost.value = postEdit.texto;
        editStatus = true;
        id = doc.id;
      });
    });
   /*boton like*/
   const btnsHearts = tasksContainer.querySelectorAll('.heart');
   btnsHearts.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
    const doc2 = await getTask(e.target.dataset.id); // acceder al objeto que contiene identificador especifico
    const likesEdit = doc2.data(); 
    updatePost(doc2.id, { likes: likesEdit.likes+1 });
    
    });
    
  });
})
 
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

  const greeting = document.createElement('p');
  greeting.textContent = "Hi, do you want to share something?";
  greeting.id = 'titlePost';

  const logOut = document.createElement('img');
  logOut.src = './images/cerrar.png';
  logOut.id = 'logOut';
  logOut.addEventListener('click', () => {
    cerrarsesion();
  });

  const divPost = document.createElement('div');
  divPost.id = 'divPost';

  const inputPost = document.createElement('input');
  inputPost.className = 'inputPost';
  inputPost.placeholder = 'Write here... ';
  inputPost.id = 'inputPost';

  const buttonPost = document.createElement('button');
  buttonPost.id = 'buttonPost';
  buttonPost.className = 'buttonPost';
  buttonPost.textContent = 'Post';
  buttonPost.addEventListener('click', async () => {
    if (!editStatus) {
      await savePost(inputPost.value);
    } else {
      updatePost(id, {texto: inputPost.value});
      editStatus = false;
      buttonPost.src = './images/editar.png';
    }
    document.querySelector('.inputPost').value = '';
  });

  const divWall = document.createElement('div');
  divWall.id = 'divWall';
  divWall.appendChild(tasksContainer);

  container.append(divHeader, divPost, divWall);
  divHeader.append(logoHorizontal, greeting, logOut);
  divPost.append(inputPost, buttonPost);
  return container;
};
