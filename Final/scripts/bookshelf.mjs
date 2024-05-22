export default class Bookshelf {
    constructor(bookshelf, book){
        this.bookshelf = bookshelf;
        this.book = book;
    }

    addToShelf() {
        if (getLocalStorage(this.bookshelf)) {
            // if bookshelf exist in localStorage add book to shelf
            localStorage.setItem(this.bookshelf, JSON.stringify(this.book));
        }
        else {
            // build the bookshelf in localStorage and add book to shelf
            setLocalStorage(this.bookshelf, this.book);
        }
    }
}
