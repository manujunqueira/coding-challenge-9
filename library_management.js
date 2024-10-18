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

    // Task 5 - Handle Books Borrowing and Returning

    calculateTotalBooksAvailable(){ // calculates total books available 
        return this.books.filter(book => book.isAvailable).length;
    }
}

// example 

const fictionSection = new Section ("Fiction");
const book2 = new Book ("Dracula", "Bram Stocker", "7399467")

fictionSection.addBook(book1);
fictionSection.addBook(book2);

fictionSection.listBooks();
console.log(`Books available: ${fictionSection.getAvailableBooks()}`);


// Task 3 - Create a Patron Class

class Patron { // library users
    constructor(name){
        this.name = name; // patron names
        this.booksBorrowed = []; // array to keep borrowed books
    }

    borrowBook(book){ // allow patron to borrow book, if available 
        if (book.isAvailable){
            this.booksBorrowed.push(book);
            book.isAvailable = false;  // checks book as unavailable 
            console.log(`${this.name} borrowed "${book.title}".`);
        } else {
            console.log(`"${book.title}" is currently unavailable.`);
        }
    }

    returnBook(book){ // verify if book is on the borrowed list
        const bookIndex = this.booksBorrowed.indexOf(book);
        if (bookIndex !== -1){ // removes book from borrowed list
            this.booksBorrowed.splice(bookIndex, 1);
            book.isAvailable = true; // marks book as available 
            console.log(`${this.name} returned "${book.title}".`); // confirmation message
        } else{
            console.log(`${this.name} has not borrowed "${book.title}".`); // message if patron did not borrow the book
        }
    }
};

// example 

const patron1 = new Patron ("Alice");
patron1.borrowBook(book1);
patron1.returnBook(book1);

// Task 4 -  Create a VIPPatron Class that Inherits from Patron

class VIPPatron extends Patron{
    constructor(name){
        super(name); // calls constructor from parent class (patron)
        this.priority = true; // vip patrons have priority
    }

    borrowBook(book){ 
        if (book.isAvailable){ //prioritizes book lending if available
            super.borrowBook(book);
        } else{
            console.log(`"${book.title}" is currently unavailable for VIP patron ${this.name}.`);
        }
    }
}; 
