
const charactersCards = document.querySelector('#charactersCards');
const viewSingle = document.querySelector('#viewSingle');
let characters;
// fetch('url').then( response => response).then().catch();

const getCharacters = async() => {
    try {
        
        const response = await fetch('https://www.breakingbadapi.com/api/characters');
        const result = await response.json(); // [ {personaje1}, {per2}, {per3} ];

        return result;
        
    } catch (error) {
        console.log(error);
    }
}

async function fillCharacters() {
    
    // Llamo a mi funcion asincrona y relleno mi variable con el resultado.
    characters = await getCharacters();

    // Creo las cartas
    createCards();

}

function createCards() {

    charactersCards.innerHTML = '';

    // Itero mi variable que viene a ser un array.
    // Se los concateno a la fila (row)
    for (const char of characters) {
        
        charactersCards.innerHTML += `
        <div class="col-md-3 col-sm-12">
            <div class="card">
                <img src="${char.img}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${char.char_id}. ${char.name}</h5>
                <p class="card-text">${char.nickname}</p>
                <button class="btn btn-info" onclick="getChar(${char.char_id})">View character</button>
                <button class="btn btn-danger" onclick="deleteChar(${char.char_id})">Delete</button>
                </div>
            </div>
        </div>
        `;
    }

}

function deleteChar(id) {

    characters = characters.filter( char => char.char_id != id );
    createCards();

}

function getChar(id) {
    const character = characters.find( char => char.char_id == id);
    
    viewSingle.innerHTML = `
    <div class="col-md-12 col-sm-12">
        <div class="card" style="width: 18rem;">
            <img src="${character.img}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${character.id}. ${character.name}</h5>
            <p class="card-text">${character.nickname}</p>
            </div>
        </div>
    </div>
    `;

}

fillCharacters();



