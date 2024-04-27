import person, {printAge as printUserAge, printName} from './user.js';

const userName = document.querySelector('#user-name');
const userAge = document.querySelector('#user-age');

document.querySelector('#user-button').addEventListener('click', printUser);

function printUser() {
    const user = new person(userName.value, userAge.value);

    printName(user);
    printUserAge(user);
}
