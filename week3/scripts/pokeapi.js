// url link to the api
const url = 'https://pokeapi.co/api/v2/pokemon';

// // fetch returns a promise of information not the actual information
// // js moved to the next line before the results could finish loading
// const results = fetch(url);
// console.log(results);

// // using an async/await function will delay the moving to the next line
// async function getPokemon(url) {
//     // fetch returns a data stream instead of useable data
//     const results = await fetch(url);
//     console.log(results);
// }

// getPokemon(url);

let results = null;

async function getPokemon(url) {
    const response = await fetch(url);
    
    // check to see that fetch was successful
    if (response.ok) {
        // convert the response to useable data
        const data = await response.json();
        doStuff(data);
    }
}

function doStuff(data) {
    results = data;
    console.log('First: ', results);

    let section = document.querySelector('#poke-api');
    let p1 = document.createElement('p');
    p1.innerHTML = `Count Value for Pokemon: ${data.count}`;
    let p2 = document.createElement('p');
    p2.innerHTML = `Results returned by default: ${data.results.length}`;
    let select = document.createElement('select');

    data.results.forEach((result) => {
        const option = document.createElement('option');
        option.innerHTML = result.name;

        select.add(option);
    })

    section.appendChild(p1);
    section.appendChild(p2);
    section.appendChild(select);
}

getPokemon(url);
// This console.log will show first because async doesn't wait for everything to load
// before moving to the next line
console.log('Second: ', results);