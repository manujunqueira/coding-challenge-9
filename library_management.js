// Task 1 - Create a Book Class

class Book {
    constructor(title, author, ISBN){
        this.title = title; 
        this.author = author;
        this.ISBN = ISBN;
        this._isAvailable = true; // pattern: available 
    } // created "book" class

getDetails(){
    return `${this.title} by ${this.author}, ISBN: ${this.ISBN}.`;
    } // returning the book's details

get isAvailable(){ // getter for book availability. returns true if available 
    return this._isAvailable;
    }

set isAvailable(status){ // setter to change book availability 
    this._isAvailable = status;
    }

};

// example

const book1 = new Book("Moby-Dick", "Herman Melville", "1234567890"); // adding a book
console.log (book1.getDetails()); // log the details and availability 
console.log (book1._isAvailable); // "true"


// Task 2 - Create a Section Class

class Section {
    constructor(name){
        this.name = name; // section name
        this.books = []; // book array
    }

    addBook(book){ // add book to a section 
        this.books.push(book);
    }

    getAvailableBooks(){ // total number of book available in that section
        return this.books.filter(book => book.isAvailable).length; 
    }

    listBooks(){ // list of all of the section's books with title and availability 
        this.books.forEach(book => {
            const availability = book.isAvailable ? "Available" : "Borrowed";
            console.log(`${book.title}: ${availability}.`);
        });
    }
}

// example 

const fictionSection = new Section ("Fiction");
const book2 = new Book ("Dracula", "Bram Stocker", "7399467")

fictionSection.addBook(book1);
fictionSection.addBook(book2);

fictionSection.listBooks();
console.log(`Books available: ${fictionSection.getAvailableBooks()}`);
