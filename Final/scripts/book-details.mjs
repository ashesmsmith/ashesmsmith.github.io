import { getLocalStorage, setLocalStorage } from "./utils.mjs";

export default class BookDetails {
    constructor(baseURL, searchParam) {
        this.baseURL = baseURL;
        this.searchParam = searchParam;
        this.books = '';
    }

    async init() {
        // get data from API with user entered search parameter
        // only return books
        const response = await fetch(`${this.baseURL}${this.searchParam}&printType=books`);
        const data = await response.json();

        this.books = data.items;
        this.displayResults(this.books);

        // add eventListener to all add-to-shelf buttons
        const addBtns = document.querySelectorAll('#add-to-shelf');
        addBtns.forEach((button) => {
            let btnId = button.getAttribute('data-id'); // get id from btn clicked
            button.addEventListener('click', () => this.addToShelf(this.books, btnId, button));
        });
    }

    displayResults(data) {
        const results = document.getElementById('search-results');
        results.innerHTML = ''; //reset results before adding new ones if new search is entered

        data.forEach((book) => {
            results.insertAdjacentHTML('beforeend', bookDetailsTemplate(book));
        });
    }

    addToShelf(books, id, button) {    
        // Find or create bookshelf in localStorage
        if (!getLocalStorage('bookshelf')) {
            setLocalStorage('bookshelf', []);
        }; 

        let shelf = getLocalStorage('bookshelf');
        let existing = false; // book not on shelf as default

        // Look through the shelf to see if the book was already added
        for (let i=0; i < shelf.length; i++) {
            if (shelf[i].id !== id) {
                continue; // keep looking if not book not found
            }
            else {
                alert('This book is already on your bookshelf');
                existing = true; // book found on the shelf
                break; // stop looking for it
            }
        }

        // If the book is not already on the shelf, add it
        if (existing === false) {
            books.forEach((book) => {
                if (book.id === id){
                    shelf.push(book);
                    setLocalStorage('bookshelf', shelf); 
                    button.classList.toggle('spin');
                    console.log(button);
                }
            }) 
        }
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
        <a href="${previewLink}" target="_blank">
            <img 
                class="cover-img" 
                src="${coverImage}"
                alt="${title} cover image"
            >
        </a>
        <div class="book-info">
            <h2>${title}</h2>
            <h3>${author}</h3>
            <h4>${pages}</h4>
            <p>ISBN: ${isbn}</p>
        </div>
        <p class="book-desc">${description}</p>
        <div class="results-btns buttons">
            <a class="preview-link" href="${previewLink}" target="_blank"><button>${btnText}</button></a>
            <button id="add-to-shelf" data-id=${id}>Add to Bookshelf</button>
        </div>
    </section>`
}
