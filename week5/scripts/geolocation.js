const btn = document.querySelector('#geo-btn');
const x = document.getElementById("demo");
const map = document.querySelector('#map');
const baseURL = 'https://maps.googleapis.com/maps/api/staticmap?';
const apiKey = 'AIzaSyAbY8SvjT2o4H1gM6ovVWmTKyjPeIS1c5M';

btn.addEventListener('click', getLocation);

function getLocation() {
    try {
        navigator.geolocation.getCurrentPosition(showPosition);
    } catch {
        x.innerHTML = err;
    }
}

function showPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    x.innerHTML = `Latitude: ${latitude}<br>Longitude: ${longitude}`;

    showMap(latitude, longitude)
}

function showMap(latitude, longitude) {
    map.setAttribute('src', 
        `${baseURL}center=${latitude},${longitude}&size=100x100&scale=2&zoom=10&key=${apiKey}`);
}
