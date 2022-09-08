import { welcome } from './components/welcome.js';

const routes = {
  '/': welcome,
};

const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  root.appendChild(routes[pathname]());

};

const component = routes[window.location.pathname];

root.appendChild(component());
