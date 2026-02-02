// 1. How to write a Function Constructor
// The function name should start with a Capital Letter (e.g., Person, Car).
// You use the new keyword to create an object from it.

function Person(name,age,city){
    // properties
    
    this.name=name;
    this.age=age;
    this.city=city;

}
// methods
//prototype is used to add methods to the Function Constructor
Person.prototype.sayHello=function(){
    return "Hello, my name is " + this.name + ", i'm " + this.age + " years old and I live in " + this.city + ".";
}
// Creating objects using the Function Constructor
const Person1 = new Person("Nehimi",25,"Ethiopia");
const Person2 = new Person("Alex",30,"USA");
console.log(Person2.sayHello());// Output: Hello, my name is Alex, i'm 30 years old and I live in USA.
console.log(Person1.sayHello());// Output: Hello, my name is Nehimi, i'm 25 years old and I live in Ethiopia.

// You can add more methods to the prototype if needed
Person.prototype.getAge=function(){
    return this.age;
}
console.log(Person1.getAge());// Output: 25
console.log(Person2.getAge());// Output: 30

// Note: Function Constructors are less common in modern JavaScript,
// as ES6 introduced classes which provide a cleaner syntax for creating objects and handling inheritance.
// However, understanding Function Constructors is still valuable for working with older codebases.
// End of Function Constructor example

// 2. Example of Function Constructor with another object type
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
} 
Car.prototype.getCarInfo = function() {
    return  this.year + " " + this.make + " " + this.model;
}
const car1 = new Car("Toyota", "Camry", 2020);
const car2 = new Car("Honda", "Civic", 2019);
console.log(car1.getCarInfo());// Output: 2020 Toyota Camry
console.log(car2.getCarInfo());// Output: 2019 Honda Civic


// Proof that they share the same function:
console.log(Person1.sayHello === Person2.sayHello);// Output: true
console.log(car1.getCarInfo === car2.getCarInfo);// Output: true
// End of Car Function Constructor example

// Note: In modern JavaScript, it's recommended to use ES6 classes for better readability and maintainability.
// However, understanding Function Constructors is still important for legacy code.

// what is ES6?
// ES6, also known as ECMAScript 2015, is the sixth edition of the ECMAScript language specification.
// It introduced several new features and improvements to JavaScript, making it more powerful and easier to work with.
// Some of the key features of ES6 include:
// 1. Arrow Functions: A shorter syntax for writing functions.
// 2. Classes: A new syntax for creating objects and handling inheritance.
// 3. Template Literals: A way to create strings with embedded expressions.

//examplecode
const greet = (name) => {
    return `Hello, ${name}!`;
};
console.log(greet("Nehimi"));// Output: Hello, Nehimi!

const multiply = (a, b) => a * b;
console.log(multiply(4, 5));// Output: 20
// End of ES6 example code
// Note: While ES6 introduced many new features, Function Constructors are still valid JavaScript and can be used.
// However, for new projects, it's generally recommended to use ES6 classes for better readability and maintainability.
// anothe example of ES6 class
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    makeSound() {
        console.log("The animal makes a sound.");
    }
}   
const dog = new Animal("Buddy", "Dog");
console.log(dog.name);// Output: Buddy
console.log(dog.species);// Output: Dog
dog.makeSound();// Output: The animal makes a sound.
// End of ES6 class example 
