
const tablePersonas = document.getElementById('personasTable');
const message = document.getElementById('message');
const divClick = document.getElementById('divClick');

let personas = [
    "Matias", "Seba", "Rodrigo", "Aldana", "Martin"
]

message.style.display = 'none';

function getValue(event) {
    console.log(event.target.value);
    const name = event.target.value;
    searchPersona(name);
}

function searchPersona(name) {

    personas.forEach( (p) => {

        if(p == name) {
            personas = [ name ];
            console.log(personas);
            message.style.display = 'none';
        } else {
            message.style.display = 'block';
            message.innerHTML = 'No se encontraron registros.';
        }

    });

}

function showPersonas() {

    tablePersonas.innerHTML = '';

    for (const p of personas) {
        tablePersonas.innerHTML += `
        <tr>
            <td>${p}</td>
        </tr>
        `    
    }
    
}

showPersonas();

function getSelector(event) {
    console.log(event.target.value);
}

document.getElementById('botonDeAlerta').addEventListener('click', () => {
    alert('Presionaste el boton.');
});

divClick.addEventListener('click', () => {
    divClick.style.display = 'none';
})

divClick.addEventListener('mouseover', () => {
    divClick.style.background = 'blue';
});

divClick.addEventListener('mouseout', () => {
    divClick.style.background = 'red';
});

window.addEventListener('mousemove', (e) => {
    
    const coords = {
        x: e.clientX,
        y: e.clientY
    }

    console.log(coords);

});


