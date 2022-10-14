import { welcome } from './components/welcome.js';
import { login } from './components/login.js';
import { register } from './components/register.js';
import { home } from './components/home.js';
import { app } from './lib/config.js';
import { observadorUser } from './lib/auth.js';

const root = document.getElementById('root');

const routes = {
  '/': welcome,
  '/login': login,
  '/register': register,
  '/home': home,
};
//window representa la ventada que contiene un documento
export const onNavigate = (pathname) => {
  window.history.pushState( 
    {}, //nueva entrada al historial 
    pathname, //propiedad de location que contiene la ruta de la url. 
    window.location.origin + pathname,
  );
  root.removeChild(root.firstChild);
  root.appendChild(routes[pathname]());
};

const component = (routes[window.location.pathname]);

observadorUser();

window.onpopstate = () => {
  root.removeChild(root.firstChild);
  root.append(component());
};

console.log(app);

root.appendChild(component());
