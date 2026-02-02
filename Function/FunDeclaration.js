function sayHello(name){
    return " Hello," + name +"!";
}
console.log(sayHello(" Nehimi"));// Output: " Hello, Nehimi!"


function addNumbers(a,b){
    return a+b;

}
console.log(addNumbers(5,6));// Output: 11

function multiplyNumbers(x,y){
    return x*y;
}
console.log(multiplyNumbers(4,7));// Output: 28

function isEven(num){
    return num%2===0;
}


console.log(isEven(10));// Output: true
console.log(isEven(7));// Output: false

// Hoisting function declared using function declaration

// Function declarations are hoisted to the top of their scope.

// Function expressions are not hoisted in the same way.

// Function declarations can be called before they are defined.

// Function expressions can not be called before they are defined.

// Function declarations can be called before they are defined:

const sum = add(2, 3); // Will work
function add(a, b) {return a + b;}
console.log(sum); // Output: 5
// Function expressions can not be called before they are defined:

const sum = add(2, 3); // ⛔ Will generate error
const add = function (a, b) {return a + b;};
console.log(sum); // Output: Error


