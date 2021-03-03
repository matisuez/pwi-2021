
// const divOne = document.getElementById('elementOne');
const divOne = document.querySelector('#elementOne');
//const divTwoArray = document.getElementsByClassName('elementTwo');
const divTwoFirst = document.querySelector('.elementTwo');
const divTwoArray = document.querySelectorAll('.elementTwo');

const headers = document.getElementsByTagName('header');

// headers[0].classList.remove('una-clase');

console.log(headers);

setTimeout( () => {
    //headers[0].classList.remove('start');
    headers[0].classList.add('una-clase', 'dos-clase');
    divOne.style.backgroundColor = 'red';
    
    /*
    divTwoArray.forEach( tag => {
        tag.style.backgroundColor = 'pink';
    });
    */
}, 3000);
console.log(divTwoFirst);
console.log(divTwoArray);
Date.now();
