
export default class Favorites {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }

    async init() {
        const response = await fetch(this.dataSource);
        const data = await response.json();

        this.displayFavorites(data.items);
    }

    displayFavorites(data) {
        const favorites = document.querySelector('#favorites');
        favorites.innerHTML = '';

        data.forEach((book) => {
            favorites.insertAdjacentHTML('beforeend', favoritesTemplate(book));
        })
    }
}

function favoritesTemplate(book) {
    const id = book.googleID ?? '';
    const previewLink = book.preview ?? '';
    let btnText = '';
    if (previewLink === '') {
        btnText = 'Preview Unavailable';
    }
    else {
        btnText = 'Preview Book';
    }

    let coverImage = '';
    if (book.image) {
        coverImage = book.image;
    }
    else {
        coverImage = 'images/default-image.png';
    }
    
    const title = book.title ?? 'Title Unavailable';
    const author = book.author ?? 'Author Unavailable';
    const pages = `${book.pages} pages` ?? '';
    const description = book.description ?? 'Description Unavailable';

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
        </div>
        <p class="book-desc">${description}</p>
        <div class="results-btns">
            <a class="preview-link" href="${previewLink}"><button>${btnText}</button></a>
        </div>
    </section>`
}