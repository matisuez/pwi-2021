
console.log(' Javascript - Functions + operador ternario');

console.log('Funciones sin return.');

function  sumarSinReturn( x, y) {
    x = parseInt(x);
    y = parseInt(y);

    const result = x + y;

    console.log( result );
}

function concatenarTexto(texto1, texto2 = 'default') {
    

    const textoCompleto = texto1+ ' ' +texto2;
    console.log(textoCompleto);

}

console.log('Algo');

sumarSinReturn('15', '5');
concatenarTexto('Hola,');

// Operador ternario
true ? 
    (console.log('Aprobado'), console.log('Authenticado.')) 
    : 
    console.log('No aprobado');


console.log('Funciones con return.');

function sumarConReturn(x, y) {
    const result = x + y;
    return result;
}

const suma = sumarConReturn(1, 2);

console.log(suma);
document.querySelector('body').innerHTML = suma;


