import BookDetails from "./book-details.mjs";

const baseURL = 'https://www.googleapis.com/books/v1/volumes?q=';
const searchBar = document.querySelector('#search-param');
const searchBtn = document.querySelector('#search-btn');

searchBtn.addEventListener('click', search);

function search(event) {
    // prevent the value from being cleared in search
    event.preventDefault(); 

    // create a new instance of BookDetails from book-details.mjs
    const book = new BookDetails(baseURL, searchBar.value);
    book.init();
}
