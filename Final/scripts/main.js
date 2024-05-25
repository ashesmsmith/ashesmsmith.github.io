import BookDetails from './book-details.mjs';
import BookShelf from './bookshelf.mjs';

// HOMEPAGE
const homepage = document.querySelector('#homepage');
const baseURL = 'https://www.googleapis.com/books/v1/volumes?q=';
const searchBar = document.querySelector('#search-param');

if (homepage) {
    const searchBtn = document.querySelector('#search-btn');

    searchBtn.addEventListener('click', search);
}

function search(event) {
    // prevent the value from being cleared in search
    event.preventDefault(); 

    // create a new instance of BookDetails from book-details.mjs
    const book = new BookDetails(baseURL, searchBar.value);
    book.init();
}

// BOOKSHELF PAGE
let bookshelf = new BookShelf('bookshelf');
const bookshelfPage = document.querySelector('#bookshelf-page');

bookshelfPage.addEventListener('onload', bookshelf.init());
