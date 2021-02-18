
console.log(' Javascript - Forms y buttons');

function getInputsByForm(e) {
    e.preventDefault();
    console.log(e);
    console.log( `${e.target[0].id}: ${e.target[0].value}`);
    console.log( `${e.target[1].id}: ${e.target[1].value}`);

    console.log(document.querySelector(`#${e.target[0].id}`));

}

function getInputsByButton() {
    console.log(document.querySelector(`#nombre`).value);
}

function saludar() {
    alert('Hola! Apretaste el boton.');
}

function login(e) {
    
    const email = e.target[0].value // email
    const password = e.target[1].value // password

    if(email == 'matias@gmail.com' && password == '1234') {
        alert('Estas logueado.');
    } else {
        alert('Los datos que ingresaste son incorrectos.');
    }

}


