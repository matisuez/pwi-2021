
// Review: listeners
// ECMASCRIPT 6: Clases, map, filter, find, reduce.
// Fetch: APIS REST.
console.log('Works!');

const testing = document.getElementById('testing');
//const selectCars = document.getElementById('selectCars');


testing.addEventListener('click', () => {
    console.log('Obtuve el click!');
});

/*
selectCars.addEventListener('change', (e) => {
    console.log(e.target.value);
});
*/
function getSelector(e) {
    console.log(e.target.value);
}

// Clases y objetos

// let obj = {};
//Number.toString()
class Persona {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}
const persona1 = new Persona('Matias', 'Suez');
console.log(persona1);

class FamilySuez {
    constructor(name) {
        this.name = name;
        this.surname = 'Suez';
    }
}
const persona2 = new FamilySuez('Matias');
console.log(persona2);

class Auto {
    constructor(marca, modelo, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.velocidad = 0;
        // this.propiedad = '';
    }
    static methodoOne() {
        return 5;
    }
    incrementarVelocidad() {
        //this.velocidad = this.velocidad + 1;
        this.velocidad += 1;
    }
    disminuirVelocidad() {
        if(this.velocidad == 0)
            alert('El auto esta frenado.');
        else 
            this.velocidad -= 1;
    }
}
const auto1 = new Auto('Volkswagen', 'Gol', 'Negro');
console.log(Auto.methodoOne());
console.log(auto1);

auto1.incrementarVelocidad();
console.log(auto1.velocidad);

auto1.disminuirVelocidad();
console.log(auto1.velocidad);
// auto1.disminuirVelocidad();


class AutoChico extends Auto {
    constructor( marca, modelo, color, motor) {
        super(marca, modelo, color);
        this.color = null;
        this.motor = motor;
    }
    getDate() {
        return Date.now();
    }
}

const autoChico1 = new AutoChico('Volkswage', 'Uno', 'Gris', 1.8);
console.log(autoChico1);

autoChico1.incrementarVelocidad();
console.log(autoChico1);


const people = [
    { name: 'Matias', surname: 'Suez', age: 25, amount: 500 }, // p
    { name: 'Matias', surname: 'Aguirre', age: 51, amount: 250 }, // p
    { name: 'Diego', surname: 'Aguirre', age: 25, amount: 250 }, // p
    { name: 'Juan Carlos', surname: 'Grageda', age: 25, amount: 750 },
    { name: 'Pepe', surname: 'Gonzalez', age: 54, amount: 1500 }
];

// Map: Mapea segun una propiedad y retorna un array con objetos de esa propiedad.
const arrayMap = people.map( p => p.name );
console.log(arrayMap);

// Filter: Filtra segun una condicion y retorna un array de esos objetos.
const arrayFilter = people.filter( p => p.amount >= 500 && p.age < 50 );
console.log(arrayFilter);

// Find: Filtra segun una condicion y retorna un objeto.
const arrayFind = people.find( p => p.name.toLowerCase() == 'matias' );
console.log(arrayFind);

// Reduce: Hace cierta operacion y retorna un valor.
// [ 56, 70, 50 ]
const resultWithFilter = people.filter( p => p.age < 52 ).map( p => p.amount ).reduce( (a, b) => a + b );
const result = people.map( p => p.amount ).reduce( (a, b) => a + b );

console.log(`Resultado con filter: $ ${resultWithFilter}`);
console.log(`Resultado total: $ ${result}`);
testing.innerHTML = `
    Resultado con filter: $ ${resultWithFilter}
    <br>
    Resultado total: $ ${result}
`;
