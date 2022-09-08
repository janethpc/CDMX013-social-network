export const welcome = () => {
const div = document.createElement('div');
const buttonLogin = document.createElement('button');
 buttonLogin.id= "logIn"
const buttonRegister = document.createElement('button');
    buttonRegister.id= "register"

buttonLogin.textContent = 'Log In';
buttonRegister.textContent = 'Sign In';

div.append(buttonLogin, buttonRegister);

return div;
};
