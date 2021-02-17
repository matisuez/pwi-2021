
// Programacion estructurada
let validar = 4, 
    validar2 = 5;


if(validar == 4 || validar2 == 5) { // Operadores logicos == , <, >, =<, >= , != , && (&) , || (|) 
    validar = `El valor es ${validar}. Entonces es igual a 4.`;
} else {
    validar = `El valor es ${validar}. No es igual que 4.`;
}
console.log(validar);

// ----------------------
let result = true;
if(result)
    console.log("El resultado es verdadero.");
else
    console.log("El resultado es falso.");

// ----------------
// Operador <
const valorConstante = 10;
if(valorConstante < 9)
    console.log('Verdadero. Es menor que 11.');
else if(valorConstante > 11)
    console.log('Verdadero. Es mayor a 9.');
else
    console.log('Falso. El valor es igual que 10.');


let edad = 17;

if(edad <= 17) {
    console.log('El usuario es menor de edad.');
    console.log('Otra linea!');
} else if(edad > 40)
    console.log('El usuario no puede entrar. Es demasiado grande!');
else 
    console.log('Esta adentro de la edad permitida.');

// ----------------------------------------------------------------

const personaMatias = {
    name: 'Matias',
    edad: 25,
    casado: false
}

if(personaMatias.edad <= 17)
    console.log('El usuario es menor de edad.');
else if(personaMatias.edad == 25 || personaMatias.casado == true)
    console.log('El usuario tiene 25 y esta casado.');
else if(personaMatias.edad == 25 && personaMatias.casado == false && personaMatias.name == 'Matias')
    console.log('El usuario tiene 25 y no esta casado.');
else
    console.log('Otro tipo de usuario.');

// SWITCH

const valorNumerico = 11;
const valorString = 'Seba';
const matias = 'Matias', seba = 'Seba', aldana = 'Aldana';

switch (valorString) {
    case matias:
        console.log(`El nombre del profesor es ${matias}.`);
        break;
    case seba:
        console.log(`El nombre del alumno es ${seba}.`);
        break;
    case aldana:
        console.log(`El nombre del alumno es ${aldana}.`);
        break;
    default:
        console.log('El valor no se encuentra dentro switch.');
        break;
}



// Vectores
let arrayNumericos = [ 1, 2, 3, 4, 5 ];
let arrayString = [ 'Hola', "Chau", "Como", 'Te va?' ];
let arrayMixtos = [ 'Texto', 1, { name: 'Matias' } ];
let arrayObjects = [
    { name: 'Matias', surname: 'Suez', status: null },
    { name: 'Pepito', surname: 'Suez', status: true }
]

let arrayJSONs = [
    { "name": 'Matias', "surname": 'Suez',  },
    { "name": 'Pepito', "surname": 'Suez', "status": true }
];

arrayObjects.push({ name: 'Jose', surname: 'Gonzalez' });
// arrayObjects.shift({ name: 'Matias', surname: 'Suez' });

console.log(arrayObjects);

// posiciones 1 == 0, 2 == 1, 3 == 2 ...
console.log( arrayObjects[0] );
console.log( arrayObjects[0].status );
console.log( arrayObjects[0].name );

// Iterar
console.log('Iteracion del array');
arrayObjects.forEach( obj => {

    if(obj.name == 'Matias') {
        console.log(obj);
    }
    
    console.log('Una iteracion.');

});



