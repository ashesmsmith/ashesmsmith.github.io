import { getLocalStorage, setLocalStorage } from "./utils.mjs";

export default class Favorites {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }

    async init() {
        const response = await fetch(this.dataSource);
        const data = await response.json();

        this.displayFavorites(data);

        const addBtns = document.querySelectorAll('#add-to-shelf');
        addBtns.forEach((button) => {
            let btnId = button.getAttribute('data-id'); // get id from btn clicked
            button.addEventListener('click', () => this.addToShelf(data, btnId));
        });
    }

    displayFavorites(data) {
        const favorites = document.querySelector('#favorites');
        favorites.innerHTML = '';

        data.forEach((book) => {
            favorites.insertAdjacentHTML('beforeend', favoritesTemplate(book));
        })
    }

    addToShelf(books, id) {   
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
                }
            }) 
        }
    }
}

function favoritesTemplate(book) {
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
            <h2>${title}</h2>
            <h3>${author}</h3>
            <h4>${pages}</h4>
            <p>ISBN: ${isbn}</p>
        </div>
        <p class="book-desc">${description}</p>
        <div class="results-btns buttons">
            <a class="preview-link" href="${previewLink}"><button>${btnText}</button></a>
            <button id="add-to-shelf" data-id=${id}>Add to Bookshelf</button>
        </div>
    </section>`
}