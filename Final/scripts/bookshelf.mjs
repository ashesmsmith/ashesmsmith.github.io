import { getLocalStorage, setLocalStorage } from './utils.mjs';

export default class Bookshelf {
    constructor() {
        
    }

    getBookData() {
        let shelf = getLocalStorage('bookshelf');
        console.log('shelf');
    }
}

function bookshelfTemplate(book) {
    return `<section class="book-card">
        <a href="${previewLink}">
            <img 
                class="cover-img" 
                src="${coverImage}"
                alt="${title} cover image"
            >
        </a>
        <div class="book-info">
            <h2 class="book-title">${title}</h2>
            <h3 class="book-author">${author}</h3>
            <h4 class="book-pages">${pages}</h4>
        </div>
    </section>`
}