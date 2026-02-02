// Introduced in ES6, this is the modern, "cool" way. 
// It’s shorter and very popular for quick tasks.
//  Note that if you only have one parameter and one line of code, 
// you can make it even shorter!
// Also, arrow functions do not have their own 'this' context.

const sayHello = (name) =>{
    return "Hello" + name+"!";

}
console.log(sayHello("Nehimi"));// Output: " Hello, Nehimi!"

const addNumbers =(a,b)=>{
    return a+b;

}
console.log(addNumbers(5,6));// Output: 11

const multiplyNumbers=(x,y)=>{
    return a*b;
}
console.log(multiplyNumbers(4,7));// Output: 28


const isEven = (num) => {
    return num % 2 === 0;
}

console.log(isEven(5)); // Output: false (because 5 is odd)
console.log(isEven(7)); // Output: false (because 7 is odd)
console.log(isEven(8)); // Output: true  (because 8 is even)