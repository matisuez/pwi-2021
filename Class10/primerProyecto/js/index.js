

console.log('Clase 10 - Javascript: Vectores, ciclos, funciones form y button.');

// Variables
var variable1 = true,
    variable2 = false; // undefined, null

let dejoAlog = 10;
const constanteEnElTiempo = true;


if(variable1 && variable2) { // Operadores logicos <, >, ==, !=, <=, >=, &&, ||

    console.log('Entro al if');

} else if(variable1 && variable2 == false) {
    console.log('Una de las variables en false.');

} else {
    console.log('Error, la variable 1 es false.');
}

switch (dejoAlog) {
    case 1:
        
        break;
    case 10:
    
        break;
    default:
        console.log('Error!')
        break;
}

const tiempo = 5;

console.log('Uno');
console.log('Dos');

// Posiciones dentro de un array:  0 , 1, 2, 3 ...
console.log('Vectores:');
var people = [
    "Matias",
    "Sergio",
    "Lara",
    "Nicolas"
];

let peopleObjects = [
    { name: "Matias", age: 25, email: 'matia@gmail.com' },
    { name: "Segio", age: 17, email: 'matia@gmail.com' },
    { name: "Lara", age: 18, email: '@gmail.com' },
    { name: "Nicolas", age: 15, email: 'NICOLAS@gmail.com' },
]

console.log(people);

// Asigno y piso el valor ya declarado.
people[0] = 'Diego';

console.log(people);

console.log("Longitud del array: " + people.length); // `Longitud del array: ${people.length}`;

// For : Itero el vector.
for (let i = 0;i < peopleObjects.length; i++) {
    

    if(peopleObjects[i].age >= 18) {
        console.log('La persona puede pasar ' + peopleObjects[i].name);
    } else {
        console.log(`La persona: ${peopleObjects[i].name}, tiene ${peopleObjects[i].age}, por lo tanto es menor de edad.`);
    }

    console.log(i);
}

let i = 0;

// peopleObjects.push({ name: 'Gerardo', age: 75 });

console.log('While');
while (people.length < 1) { // longitud del array 4
    // Primero evalua la condicion
    console.log('Entro al while.');
}

console.log('--------------------------');

i = 0;

console.log('Do while');
do {
    console.log('Entro al do while.');
} while (people.length < 1);

console.log('For each');

peopleObjects.forEach( (p) => {
    console.log(p);
});

// For of
for (const p of peopleObjects) {
    console.log(p);
}

console.log("Longitud del array: " + peopleObjects.length);

