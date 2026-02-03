let stocks = {
  fruits: ["strawber", "banana", "graps"],

  vegetables: ["tomato", "potato", "onion", "carrot", "cabbage"],
  toppings: ["chocolates","peanuts"],
  liquid:["water","ice"],
  holder: ["cone","cup","stick"]
  
};

// console.log(stocks.vegetables);
// console.log(stocks.vegetables[4]);
let order = (fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.fruits[fruit_name]} was selected `);
    call_production(); // ✅ correct place
  }, 2000);
};

let production = () => {
setTimeout(()=>{
  console.log("Production has started");
  setTimeout(()=>{
    console.log("The fruit has been chooped");
    setTimeout(()=>{
      console.log(`${stocks.vegetables[2]} and ${stocks.fruits[1]} was added`);
      setTimeout(()=>{
        console.log("The machine was started");
        setTimeout(()=>{
         console.log(` ice cream was placed on ${stocks.holder[0]} was selected`) ;
          
         setTimeout(()=>{
           console.log(`${stocks.toppings[0]} was added`);
           
           setTimeout(()=>{
             console.log("Serve ice cream");
             
           },2000)
           
         },3000) 
          
        },2000)
      },1000)
    },1000)
   
  },2000)
  
},10000)
};

order(0, production);
