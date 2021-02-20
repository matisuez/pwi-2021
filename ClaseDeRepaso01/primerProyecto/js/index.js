
const calculator = document.querySelector('#calculator');
const varX = document.getElementById('variableX');
const varY = document.getElementById('variableY');
const result = document.getElementById('result');
const history = document.querySelector('#history');
const totalElement = document.querySelector('#total');
const p = document.createElement('p');
const historial = [];
//console.log(p);
//p.innerHTML = "Se creo";
calculator.appendChild(p);

function operacion(type) {

    if(validarHistory()) {
    
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
    
        const operacion = {
            varX: varX.value,
            operator: type,
            varY: varY.value,
            result: result.value
        }
    
        historial.push(operacion);

        showHistory();

    } else {
        alert('Debe ingresar los valores para cada input.');
    }

}

function validarHistory() {

    let result;

    if( varX.value == '' && varY.value == '')
        result = false;
    else if(varX.value == '' || varY.value == '')
        result = false;
    else 
        result = true;

    return result;

}


function clean() {
    varX.value = '';
    varY.value = '';
    result.value = '';
}

function showHistory() {

    history.innerHTML = '';
    
    for (const op of historial) { // "", '', ``
        history.innerHTML += `
        <tr>
            <td>${op.varX}</td>
            <td>${op.operator}</td>
            <td>${op.varY}</td>
            <td>${Number.parseFloat(op.result).toFixed(2)}</td>
        </tr>
        `;
    }

    total();

}

function total() {

    let totalCalculado = 0;

    for (const op of historial) {
        totalCalculado += parseFloat(Number.parseFloat(op.result).toFixed(2));
    }

    totalElement.innerHTML = totalCalculado;

}
