
// FETCH
let users;
const usersTable = document.getElementById('usersTable');
const inputSearch = document.getElementById('search');

function getUsers() {

    // No es eficiente a la hora de tener mas funcionalidades.
    fetch('https://jsonplaceholder.typicode.com/users')
        // Recibimos la respuesta del servidor y la parseamos.
        .then(response =>  response.json())// response.json())
        // Guardamos cada obj que esta dentro de la respuesta dentro de una coleccion nuestra (users).
        .then(data => users.push(...data))
        // Catch: Atrapamos el error en caso de tener uno.
        .catch(e => console.log(e));

}

// Con la palabra reservada async le decimos que es una peticion asincronica, por lo tanto al no ser sincronica, continua con el resto del programa.
const getUsersAsyncAwait = async () => {
    try {

        // Realizamos la peticion al servidor
        const result = await fetch('https://jsonplaceholder.typicode.com/users');

        // Parseamos la promesa y guardamos el resultado en un variable
        users = await result.json();
        
        showTable();

    } catch (error) {
        console.log(error);
    }
}

function showTable () {
    // Cabecera de la tabla
    usersTable.innerHTML = `
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>City</th>
        <th>Company name</th>
    </tr>`;

    console.log(users);
    // Iterar el array de la respuesta.
    for (const user of users) {
        usersTable.innerHTML += `
        <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.address.city}</td>
            <td>${user.company.name}</td>
        </tr>
        `;
    }
}

inputSearch.addEventListener('keyup', (e) => {
    const name = e.target.value;
    console.log(name);
    
    if(name != '') {
        users = users.filter( u => u.name.toLowerCase().includes(name));
        showTable();
    } else {
        getUsersAsyncAwait();
    }

});

getUsersAsyncAwait();
