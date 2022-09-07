export const welcome = () => {
const div= document.createElement('div');    
const buttonLogin = document.createElement('button');
const buttonRegister = document.createElement('button');

buttonLogin.textContent = 'Log In';
buttonRegister.textContent = 'Sign In';

div.append(buttonLogin, buttonRegister);

return div;
};
