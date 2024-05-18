const baseURL = 'https://www.googleapis.com/books/v1/volumes?q=';
const searchBar = document.querySelector('#search-param');
const searchBtn = document.querySelector('#search-btn');
const results = document.getElementById('search-results');

searchBtn.addEventListener('click', search);

async function search(event) {
    event.preventDefault(); // prevent the value from being cleared in search
    
    const response = await fetch(`${baseURL}${searchBar.value}`);
    const data = await response.json();

    displayResults(data.items);
}

function displayResults(data) {
    data.forEach((book) => {
        console.log(book);
        results.insertAdjacentHTML('afterbegin', bookDetailsTemplate(book));
    });
}

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
        <a class="preview-link" href="${book.volumeInfo.previewLink}"><button>Preview</button></a>
        <button class="add-btn" type="submit">Add to Bookshelf</button> 
    </section>`
}
