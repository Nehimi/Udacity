// async function f(){
//     return "Hello, Nehimi!";
// }
// const result= await f();
// console.log(result);// Output: "Hello, Nehimi!"

// async function f(){
//     return Promise.resolve("Hello, Nehimi!");
// }
// const result= await f();
// console.log(result);// Output: "Hello, Nehimi!"

// const url="https://private-anon-b0149a2345-pizzaapi.typicode.com/posts/1";

// async function getPizzas(menuUrl){
//     menuUrl=`${menuUrl}?category=Pizza`;//pending
//     const response = await fetch(menuUrl);//pending
//     const menu= await response.json();//pending
//     return menu;//fulfilled
// }
// const pizzas = await getPizzas(url);//pending
// console.log(pizzas);// Output: {id: 1, title: "Pizza Margherita", category: "Pizza", price: 8.99, description: "Classic pizza with tomato sauce, mozzarella cheese, and fresh basil."}



    // Asyncronous

console.log("I")

console.log(" eat")

setTimeout(()=>{
  console.log(" ice cream") 
},5000)
    

console.log(" with a")

console.log(" spoon")
