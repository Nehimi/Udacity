//how to use map to double the values in an array
//n is current value in the array is being processed
//map returns a new array
//original array remains unchanged
//example
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);

//how to use filter to get even numbers from an array
//n is current value in the array is being processed
const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log("Even Numbers:", evenNumbers);

//how to use reduce to sum all numbers in an array
// Accumulator pattern
//n is current value in the array is being processed
//acc is accumulated value
//0 is initial value of accumulator
//acc+n means add current value to accumulated value
//how it increases
//First Iteration: acc=0, n=1 => acc+n=0+1=1
//Second Iteration: acc=1, n=2 => acc+n=1+2=3
const sum = numbers.reduce((acc, n) =>{
    return acc + n;
}, 0);// Initial value is 0
// sum = 1+2+3+4+5 = 15
console.log("Sum:", sum);

// Combining map, filter, and reduce
const number = [1, 2, 3, 4, 5];

const result = number
  .filter(n => n % 2 === 0)// [2,4]
  .map(n => n * 10)// [20,40]
  .reduce((sum, n) => sum + n, 0);// 60

console.log(result); // 60

// | Method | የሚያደርገው |
// | ------ | ------- |
// | map    | ቀይር     |
// | filter | ምረጥ     |
// | reduce | አንድ አውጣ |

