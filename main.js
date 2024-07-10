
class Book {
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
}

const library = [];


const removeBook = () => {
    let id = prompt("Por favor, introduzca un ID válido:");
    if(id !== null){
        index = library.findIndex(book => book.id === id);
        while(index === -1){
            let id = prompt("Por favor, introduzca un ID válido:");
            index = library.findIndex(book => book.id === id);
        }
        library.splice(index, 1);
    }
};

// Funcion que imprime los libros por consola
const viewLibrary = () => { 
    let alertMessage = "";
    library.forEach(book =>{
        alertMessage += "\nID:" + book.id + "\nTitulo" + book.title + "\nAutor" + book.author + "\n-------------------" ;
    })
    alert(alertMessage);
 };

// Funcion que crea y agrega los libros al arry de libreria
const createBookFromPrompt = () => {
    const id = prompt("Introduce el ID del libro:");
    const title = prompt("Introduce el título del libro:");
    const author = prompt("Introduce el autor del libro:");
    let book = new Book(id, title, author);
    library.push(book)
};

let pass;
function handleOption(option) {
    switch (option) {
        case '1':
            createBookFromPrompt();
            break;

        case '2':
            removeBook();
            break;

        case '3':
            viewLibrary();
            break;

        default:
            alert("¡OPCIÓN INVÁLIDA!");
            return false;
    }
    return true;
}

do {
    let option = prompt("Escoja alguna de las siguientes opciones ingresando el número: \n 1- Agregar un libro \n 2- Borrar un libro \n 3- Ver libros en inventario");
    if(option !== null){
        if(handleOption(option)){
            pass = confirm("¿Desea realizar otra acción?");
        } else{
            pass = true;
        }
    }
} while (pass);