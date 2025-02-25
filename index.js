// practice


let firstName= 'Aron';
let firtLastname= 'alfonso';
console.log(name);


let interestRate= 0.3;
interestRate= 1;
console.log(interestRate);

let name= 'Aron'; // String Literal
let age= 30; // Number Literal
let isApproved= false; // Boolean Literal
let firstName= undefined;
let selectedColor= null;

let person = {
    name: 'Aron',
    age: 30
};

// dot notation and mas madaling gamitin
person.name= 'marc';

// bracket notation medyo nakakalito
let selection= 'name';
person [selection]= 'Mary';

console.log(person.name);

// Array
let selectedColor = ['red', 'blue'];
selectedColor[2] = 1;
console.log(selectedColor.length);

// function
function greet(name, lastName) {
    console.log('Hello' + name + ' ' + lastName);
}
greet('Aron', 'Alfonso');
greet('marc', 'alfonso');

// calculating a value
function square(number) {
    return number * number;
}

console.log(square(2));