
let users = [ 
    { name: 'Matias', surname: 'Suez', email: 'matisuez@gmail.com', password: '123456' } 
];

const signupMessage = document.querySelector('#signupMessage');
const loginMessage = document.querySelector('#loginMessage');
const formSignup = document.getElementsByTagName('form')[0];
const formLogin = document.getElementsByTagName('form')[1];
const timeMessage = 5;

signupMessage.style.display = 'none';
loginMessage.style.display = 'none';

function signUp(e) {    
    e.preventDefault();

    const user = {
        name: e.target[0].value,
        surname: e.target[1].value,
        email: e.target[2].value,
        password: e.target[3].value
    }

    users.push(user);
    cleanForms();
    
    signupMessage.style.display = 'block';

    setTimeout( () => {
        signupMessage.style.display = 'none';
    }, 1000 * timeMessage);

}

function login(e) {
    e.preventDefault();

    let userLogged = false;

    const user = {
        email: e.target[0].value,
        password: e.target[1].value,
    }

    for (const u of users) {
        if( u.email == user.email && u.password == user.password)
            userLogged = true;
    }

    if(userLogged == true) {
        loginMessage.style.display = 'block';
        loginMessage.innerHTML = "Estas logueado";

        setTimeout( () => {
            loginMessage.style.display = 'none';
        }, 1000 * timeMessage);

        cleanForms();
    } else {
        
        loginMessage.classList.remove('alert-success');
        loginMessage.classList.add('alert-danger');
        loginMessage.style.display = 'block';
        loginMessage.innerHTML = "Datos incorrectos. <br> Por favor, verifica que el email y/o password sean los correctos.";

        setTimeout( () => {
            loginMessage.style.display = 'none';
        }, 1000 * (timeMessage + 2 ));

    }

}

function cleanForms() {
    formSignup.reset();
    formLogin.reset();
}



