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
Person.prototype.sayHello=function(){
    return "Hello, my name is " + this.name + ", i'm " + this.age + " years old and I live in " + this.city + ".";
}
// Creating objects using the Function Constructor
const Person1 = new Person("Nehimi",25,"Ethiopia");
console.log(Person1.sayHello());// Output: Hello, my name is Nehimi, i'm 25 years old and I live in Ethiopia.

const Person2 = new Person("Alex",30,"USA");
console.log(Person2.sayHello());// Output: Hello, my name is Alex, i'm 30 years old and I live in USA.