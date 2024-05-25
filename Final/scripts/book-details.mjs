import { getLocalStorage, setLocalStorage } from "./utils.mjs";

export default class BookDetails {
    constructor(baseURL, searchParam) {
        this.baseURL = baseURL;
        this.searchParam = searchParam;
    }

    async init() {
        // get data from API with user entered search parameter
        // only return books
        const response = await fetch(`${this.baseURL}${this.searchParam}&printType=books`);
        const data = await response.json();

        this.showResults(data.items);

        // add eventListener to all add-to-shelf buttons
        const addBtns = document.querySelectorAll('#add-to-shelf');
        addBtns.forEach((button) => {
            button.addEventListener('click', this.addToShelf);
        });
    }

    showResults(data) {
        const results = document.getElementById('search-results');
        results.innerHTML = ''; //reset results before adding new ones if new search is entered

        data.forEach((book) => {
                results.insertAdjacentHTML('beforeend', bookDetailsTemplate(book));            
        });
    }

    addToShelf(event) {    
        // Find or create bookshelf in localStorage
        let shelf = getLocalStorage('bookshelf');
        if (!shelf) {
            setLocalStorage('bookshelf', []);
        }  
    
        const bookId = event.target.getAttribute('data-id');
        const bookCard = event.target.parentElement.parentElement; 
        const bookHTML = bookCard.outerHTML; // section HTML for the book card
        const data = `{${bookId}: ${bookHTML}}`;

        shelf.push(data);
        setLocalStorage('bookshelf', shelf);
    }
}

function bookDetailsTemplate(book) {
    const id = book.id;

    const previewLink = book.volumeInfo.previewLink ?? '';
    let btnText = '';
    if (previewLink === '') {
        btnText = 'Preview Unavailable';
    }
    else {
        btnText = 'Preview Book';
    }

    let coverImage = '';
    if (book.volumeInfo.imageLinks) {
        coverImage = book.volumeInfo.imageLinks.thumbnail;
    }
    else {
        coverImage = 'images/default-image.png';
    }
    
    const title = book.volumeInfo.title ?? 'Title Unavailable';
    const author = book.volumeInfo.authors ?? 'Author Unavailable';
    const pages = `${book.volumeInfo.pageCount} pages` ?? '';
    const description = book.volumeInfo.description ?? 'Description Unavailable';

    // check for industryIdentifiers AND it's length to be more than 0
    // if it is found then move on to the identifier. 
    // Otherwise assign 'unavailable'
    const isbn = book.volumeInfo.industryIdentifiers && book.volumeInfo.industryIdentifiers.length > 0
        ? book.volumeInfo.industryIdentifiers[0].identifier: 'Unavailable';

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
            <p class="isbn">ISBN: ${isbn}</p>
        </div>
        <p class="book-desc">${description}</p>
        <div class="results-btns">
            <a class="preview-link" href="${previewLink}"><button>${btnText}</button></a>
            <button id="add-to-shelf" data-id=${id}>Add to Bookshelf</button>
        </div>
    </section>`
}
