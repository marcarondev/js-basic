console.log // to display the output in the console
alert // to display the output in the alert box



let num1 = "12"; //string padin kasi may qutation mark


let num2 = 12.5; // float kasi may decimal point
parseFloat(num2); //float kasi may decimal point
alert(num2); // float kasi may decimal point

let num3 = 12; //integer  kasi whole number
parseInt(num3); //integer  kasi whole number
alert(num3); //integer  kasi whole number

//  arithmetic operators
let a = 10;
let b = 20;

// addition
console.log(a+b);
alert(a+b);

// subtraction
alert(a-b);

// multiplication
alert(a*b);

// division
alert(a/b);

// modulus
alert(a%b);

// Exponent
alert(a**b);


//shorthand operators

let a = 10;

a **= 2; // shorthand operator
console.log(a); // Output the result of shorthand operator

a = a ** 2; // long form operator
console.log(a); // Output the result of long form operator


// postfix and prefix

let a = 10;

alert(a++); //postfix kasi nasa dulo yung ++
alert(++a); //prefix kasi nasa simula yung ++


// tutorial challenge 
// create a program that uses variables for 5 subject grades. get the average of all the grades and display it.

let math = 90;
let pe = 85;
let english = 95;
let filipino = 100;
let lifeofrizal = 75;

let average = (math + pe + english + filipino + lifeofrizal) / 5;
alert(average); // Output the average of all the grades
alert(" average of all the grades is " + average); // linagyan ko ng string para sabihin yung average ng total grades