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

export const onNavigate = (pathname) => {


const routes = {
  '/': welcome,
};

const onNavigate = (pathname) => {

  window.history.pushState(
    {},
    pathname,
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
 root.appendChild(routes[pathname]());


};

console.log(app);

root.appendChild(component());
