import Bookshelf from "./bookshelf.mjs";

// DEFAULT IMAGE TO USE WHEN MISSING FROM DATA
// FIGURE OUT HOW TO USE THIS
// const defaultImg = 'images/default.png';

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

        // display book card  under 'Top 10 Results' for each book returned by API
        // STOPS WORKING WHEN A FIELD IS UNDEFINED OR NULL -- FIGURE OUT
        // HOW TO SKIP OR USE DEFAULT DATA
        data.forEach((book) => {
                results.insertAdjacentHTML('afterbegin', bookDetailsTemplate(book));

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

// PROBLEM WHEN A VALUE IS UNDEFINED -- FIX THIS!!!
function bookDetailsTemplate(book) {
    return `<section class="book-card">
        <a href="${book.volumeInfo.previewLink}">
            <img 
                class="cover-img" 
                src="${book.volumeInfo.imageLinks.thumbnail}"
                alt="${book.volumeInfo.title} cover image"
            >
        </a>
        <div class="book-info">
            <h2 class="book-title">${book.volumeInfo.title}</h2>
            <h3 class="book-author">${book.volumeInfo.authors}</h3>
            <h4 class="book-pages">${book.volumeInfo.pageCount} pages</h4>
        </div>
        <p class="book-desc">${book.volumeInfo.description}</p>
        <div class="results-btns">
            <a class="preview-link" href="${book.volumeInfo.previewLink}"><button>Preview</button></a>
            <button class="add-btn" type="submit">Add to Bookshelf</button> 
        </div>
    </section>`
}
