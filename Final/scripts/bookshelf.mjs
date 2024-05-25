import { getLocalStorage, setLocalStorage } from './utils.mjs';

export default class Bookshelf {
    constructor(bookshelf) {
        this.bookshelf = bookshelf; // key name for shelf in localStorage
    }

    async init() {
        let bookData = getLocalStorage(this.bookshelf);
        this.displayBooks(bookData);

        const dltBtns = document.querySelectorAll('#dlt-btn');
        dltBtns.forEach((button) => {
            let btnId = button.getAttribute('data-id'); // get id from btn clicked
            button.addEventListener('click', () => this.deleteBook(btnId));
        })
    }

    displayBooks(bookData) {
        const shelf = document.querySelector('#bookshelf');

        bookData.forEach((book) => {
            shelf.insertAdjacentHTML('beforeend', bookshelfTemplate(book));
        });
    }

    deleteBook(id) {
        let storage = getLocalStorage('bookshelf');

        // filter out the book with the matching id
        const newShelf = storage.filter((book) => book.id !== id);
        setLocalStorage('bookshelf', newShelf);
        
        window.location.reload(); // reload the page to update display
    }
}

function bookshelfTemplate(book) {
    let coverImage = '';
    if (book.volumeInfo.imageLinks) {
        coverImage = book.volumeInfo.imageLinks.thumbnail;
    }
    else {
        coverImage = 'images/default-image.png';
    }
    
    const id = book.id;
    const previewLink = book.volumeInfo.previewLink ?? '';
    const title = book.volumeInfo.title ?? 'Title Unavailable';
    const author = book.volumeInfo.authors ?? 'Author Unavailable';

    return `<section class="shelf-card">
        <a href="${previewLink}">
            <img 
                class="cover-img" 
                src="${coverImage}"
                alt="${title} cover image"
            >
        </a>
        <div class="shelf-info">
            <h2>${title}</h2>
            <h3>${author}</h3>
        </div>
        <button id="dlt-btn" data-id=${id}>Remove from Shelf</button>
    </section>`
}
