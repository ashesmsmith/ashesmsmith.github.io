const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

let showButton = document.querySelector('#show-prophets');
showButton.addEventListener('click', getProphets);

let hideButton = document.querySelector('#hide-prophets');
hideButton.addEventListener('click', hideProphets);

async function getProphets() {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
}

function displayProphets(prophets) {
    hideButton.style.display = 'block';
    showButton.style.display = 'none';

    let temp = document.getElementsByTagName('template')[0];
    let card = temp.content.querySelector('.card');

    prophets.forEach((prophet) => {
        let newCard = document.importNode(card, true);

        let prophetName = newCard.querySelector('.prophet-name');              
        prophetName.innerHTML = `${prophet.name} ${prophet.lastname}`; 
        let birthDate = newCard.querySelector('.birth-date');
        birthDate.innerHTML = prophet.birthdate;
        let birthPlace = newCard.querySelector('.birth-place');
        birthPlace.innerHTML = prophet.birthplace;
        let img = newCard.querySelector('.profile');
        img.src = prophet.imageurl;

        document.body.appendChild(newCard);
    })
}

function hideProphets() {
    showButton.style.display = 'block';
    hideButton.style.display = 'none';

    let sections = document.querySelectorAll('.card');

    sections.forEach((section) => {
        section.style.display = 'none';
    })
}