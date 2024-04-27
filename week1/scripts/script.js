import person, {printAge as printUserAge, printName} from './user.js';

const userName = document.querySelector('#user-name');
const userAge = document.querySelector('#user-age');
const user = new person(userName, userAge);

document.querySelector('#user-button').addEventListener('click', printUser);

function printUser() {
    printName(user);
    printUserAge(user);
}
