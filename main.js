
class Book {
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
}

const library = [];

// const addBook = book => { library.push(book) };
const removeBook = id => {
    const index = library.findIndex(book => book.id === id);
    if (index !== -1) {
        library.splice(index, 1);
    } else{
        
    }
};
const viewLibrary = () => { 
    library.forEach((book, index) =>{
        console.log(index + 1)
        console.log(book.title);
        console.log(book.author);
        console.log("------------------")
    })
 };

// Function to create a book from user input
const createBookFromPrompt = () => {
    const id = parseInt(prompt("Introduce el ID del libro:"));
    const title = prompt("Introduce el título del libro:");
    const author = prompt("Introduce el autor del libro:");
    let book = new Book(id, title, author);
    library.push(book)
};

// Example usage
// const book1 = createBookFromPrompt();
// addBook(book1);
// viewLibrary();

let pass = false;

do {
    let option;
    option = prompt("escoja alguna de las siguientes opciones ingresando el numero: \n 1- Agregar un libro \n 2- Borrar un libro \n 3- Ver libros en inventario \n 4- Salir");
    switch (option) {
        case 1:
            createBookFromPrompt();
            break;

        case 2:
            removeBook();
            break;

        case 3:
            viewLibrary();
            break;

        case 4:
        break;

        default:
        option = prompt("OPCION INVALIDA! \n escoja alguna de las siguientes opciones ingresando el numero: \n 1- Agregar un libro \n 2- Borrar un libro \n 3- Ver libros en inventario");;
    }
} while (pass);