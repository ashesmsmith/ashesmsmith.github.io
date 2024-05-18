import { getLocalStorage, setLocalStorage } from "./utils.mjs";

export default class Bookshelf {
    constructor(bookshelf, book){
        this.bookshelf = bookshelf;
        this.book = book;
    }

    findShelf() {
        if (this.bookshelf) {
            // if bookshelf exist in localStorage do this
        }
        else {
            // build the bookshelf in localStorage
        }
    }
}
