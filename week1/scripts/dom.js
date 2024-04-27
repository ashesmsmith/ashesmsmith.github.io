/* Walk the DOM */
const div = document.body.firstElementChild;
console.log(div);

const ul = document.body.lastElementChild;
console.log(ul);

const pete = document.body.lastElementChild.previousElementSibling.lastElementChild;
console.log(pete);

let table = document.body.firstElementChild.children[3];
for (let i=0; i < table.rows.length; i++) {
    let color = table.rows[i].cells[i];
    color.style.backgroundColor = 'red';
}

/* Calculator */
let calculator = {
    sum() {
        return this.a + this.b;
    },

    sub() {
        return this.a - this.b;
    },

    mul() {
        return this.a * this.b;
    },

    div() {
        return this.a / this.b;
    },

    read() {
        this.a = +prompt('Please enter a number:', 0);
        this.b = +prompt('Please enter a number:', 0);
    }
};

function runCalculator() {
    calculator.read();
    alert( `    Sum: ${calculator.sum()} 
    Sub: ${calculator.sub()} 
    Mult: ${calculator.mul()} 
    Div: ${calculator.div()}`);
};

document.querySelector('#run-calculator').addEventListener('click', runCalculator);
