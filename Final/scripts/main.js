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
        let section = document.createElement('section');
        section.setAttribute('class', 'book-card');

        let img = document.createElement('img');
        img.setAttribute( 'class', 'book-img');
        img.setAttribute('src', `${book.volumeInfo.imageLinks.thumbnail}`);
        img.setAttribute('alt', `${book.volumeInfo.title} cover image`);

        let h2 = document.createElement('h2');
        h2.setAttribute('class', 'book-title');
        h2.innerHTML = `${book.volumeInfo.title}`;

        let h3 = document.createElement('h3');
        h3.setAttribute('class', 'book-author');
        h3.innerHTML = `${book.volumeInfo.authors}`;
        
        let p = document.createElement('p');
        p.setAttribute('class', 'book-description');
        p.innerHTML = `${book.volumeInfo.description}`;


        section.appendChild(img);
        section.appendChild(h2);
        section.appendChild(h3);
        section.appendChild(p);

        results.appendChild(section);

        /* let newCard = resultCardTemplate(book);
        results.append(newCard); // NOT WORKING YET--FIX THIS! */
    });
}

/* function resultCardTemplate(book) {
    return `
    <section class="book-card">
        <img class="book-img" src="${book.volumeInfo.imageLinks.thumbnail}" alt="${book.volumeInfo.title} cover image">
        <h2 class="book-title">${book.volumeInfo.title}</h2>
        <h3 class="book-author">${book.volumeInfo.authors}</h3>
        <p class="book-about">${book.volumeInfo.description}</p>
    </section>`;
} */