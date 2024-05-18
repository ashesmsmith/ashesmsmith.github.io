import { getLocalStorage, setLocalStorage } from "./utils.mjs";

export default class Bookshelf {
    constructor(bookshelf, book){
        this.bookshelf = bookshelf;
        this.book = book;
    }

    // NOT WORKING -- ADDS FIRST BOOK INSTEAD OF THE ONE THE BUTTON 
    // CLICKED FOR -- CALLED FROM book-details.mjs > showResults
    // findShelf() {
    //     if (getLocalStorage(this.bookshelf)) {
    //         // if bookshelf exist in localStorage add book to shelf
    //         localStorage.setItem(this.bookshelf, JSON.stringify(this.book));
    //     }
    //     else {
    //         // build the bookshelf in localStorage then add book to shelf
    //         setLocalStorage(this.bookshelf, this.book);
    //     }
    // }
}
