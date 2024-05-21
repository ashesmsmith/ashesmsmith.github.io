import Bookshelf from "./bookshelf.mjs";

export default class BookDetails {
    constructor(baseURL, searchParam) {
        this.baseURL = baseURL;
        this.searchParam = searchParam;
    }

    async init() {
        // get book data from API with user enter search parameter
        const response = await fetch(`${this.baseURL}${this.searchParam}`);
        const data = await response.json();

        console.log(data);
        this.showResults(data.items);
    }

    showResults(data) {
        const results = document.getElementById('search-results');
        results.innerHTML = ''; //reset results before adding new ones if new search is entered

        data.forEach((book) => {
                results.insertAdjacentHTML('beforeend', bookDetailsTemplate(book));

                // NOT WORKING -- RUNS BEFORE BEING CLICKED
                // document.querySelector('.add-btn')
                //     .addEventListener('click', this.addToShelf(book));
        });
    }

    // NOT WORKING -- RUNS BEFORE BTN CLICKED IN showResults
    // addToShelf(book) {
    //     const bookshelf = new Bookshelf('My Bookshelf', book);
    //     bookshelf.findShelf();
    // }
}

function bookDetailsTemplate(book) {
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
    
    const title = book.volumeInfo.title ?? 'No Title Available';
    const author = book.volumeInfo.authors ?? 'Author Unavailable';
    const pages = `${book.volumeInfo.pageCount} pages` ?? '';
    const description = book.volumeInfo.description ?? 'No description available';

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
        <p class="book-desc">${description}</p>
        <div class="results-btns">
            <a class="preview-link" href="${previewLink}"><button>${btnText}</button></a>
            <button class="add-btn" type="submit">Add to Bookshelf</button> 
        </div>
    </section>`
}
