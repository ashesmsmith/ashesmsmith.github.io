import { getLocalStorage, setLocalStorage } from './utils.mjs';

export default class Bookshelf {
    constructor() {
        
    }

    displayBooks() {
        let bookData = getLocalStorage('bookshelf');
        const shelf = document.querySelector('#bookshelf');

        bookData.forEach((book) => {
            shelf.insertAdjacentHTML('beforeend', bookshelfTemplate(book));
        });
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
    </section>`
}
