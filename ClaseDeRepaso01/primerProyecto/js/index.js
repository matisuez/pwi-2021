
const calculator = document.querySelector('#calculator');
const varX = document.getElementById('variableX');
const varY = document.getElementById('variableY');
const result = document.getElementById('result');
const p = document.createElement('p');
//console.log(p);
//p.innerHTML = "Se creo";
calculator.appendChild(p);

function operacion(type) {

    switch (type) {
        case '+':
            result.value = parseInt(varX.value) + parseInt(varY.value);
            break;
        case '-':
            result.value = parseInt(varX.value) - parseInt(varY.value);
            break;
        case '*':
            result.value = parseInt(varX.value) * parseInt(varY.value);
            break;
        case '/':
            /*
            parseInt(varY.value) == 0 ?
                alert('No se puede dividir por 0.')
                : 
                result.value = parseInt(varX.value) / parseInt(varY.value);
            */
            if(parseInt(varY.value) != 0 ) {
                result.value = parseInt(varX.value) / parseInt(varY.value);
            } else {
                alert('No se puede dividir por 0.');
            }

            break;
        default:
            console.log('El operador que ingresaste es incorrecto.');
            break;
    }

}


function 

