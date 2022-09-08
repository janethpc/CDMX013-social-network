import { welcome } from './components/welcome.js';
import { logIn } from './components/login.js';

const root = document.getElementById('root');
const routes = {
  '/': welcome,
  '/login': logIn,
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

const component = routes[window.location.pathname];

root.appendChild(component());
