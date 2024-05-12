const baseURL = 'https://www.googleapis.com/books/v1/volumes?q=';
const searchBar = document.querySelector('#search-param');
const searchBtn = document.querySelector('#search-btn');
const results = document.querySelector('#search-results');

searchBtn.addEventListener('click', search);

async function search(event) {
    event.preventDefault(); // prevent the value from being cleared in search
    
    const response = await fetch(`${baseURL}${searchBar.value}`);
    const data = await response.json();

    displayResults(data.items);
}

function displayResults(data) {
    console.log(data);

    data.forEach((book) => {
        let newCard = resultCardTemplate(book);

        results.append(newCard); // NOT WORKING YET--FIX THIS!
    })
}

function resultCardTemplate(book) {
    return `
    <section class="book-card">
        <img class="book-img" src="${book.volumeInfo.imageLinks.thumbnail}" alt="${book.volumeInfo.title} cover image">
        <h2 class="book-title">${book.volumeInfo.title}</h2>
        <h3 class="book-author">${book.volumeInfo.authors}</h3>
        <p class="book-about">${book.volumeInfo.description}</p>
    </section>`;
}