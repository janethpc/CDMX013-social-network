import { welcome } from './components/welcome.js';
import { login } from './components/login.js';
import { register } from './components/register.js';
import { app } from './lib/config.js';

const root = document.getElementById('root');

const routes = {
  '/': welcome,
  '/login': login,
  '/register': register,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  root.removeChild(root.firstChild);
  root.appendChild(routes[pathname]());
};

const component = (routes[window.location.pathname]);

window.onpopstate = () => {
  root.removeChild(root.firstChild);
  root.append(component());
};

console.log(app);

root.appendChild(component());
