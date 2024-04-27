let userCount = 0;

export default class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        userCount++;
    }
}

export function printName(user) {
    alert(`User has the name ${user.name}.`);
}

export function printAge(user) {
    alert(`${user.name} is ${user.age} years old.`)
}
