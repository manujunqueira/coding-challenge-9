// Task 1 - Create a Book Class.

class Book {
    constructor(title, author, ISBN){
        this.tittle = tittle; 
        this.author = author;
        this.ISBN = ISBN;
        this._isAvailable = true; // pattern: available 
    } // created "book" class

getDetails(){
    return `${this.tittle} by ${this.author}, ISBN: ${this.ISBN}.`;
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
