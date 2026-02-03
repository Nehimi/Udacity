// the are 7 steps to make the ice cream
// Apromise made pending resolve then catch and finally
// we need to understand more things first
// 1 relationship b/n time and work
// 2 promise chaininig// the steps then then ...
// 3 Error handling catch
// 4 the .finally handlare

// 1 relationship b/n time and work
let stocks = {
  fruits: ["strawber", "banana", "graps"],

  vegetables: ["tomato", "potato", "onion", "carrot", "cabbage"],
  toppings: ["chocolates","peanuts"],
  liquid:["water","ice"],
  holder: ["cone","cup","stick"]
  
};


let is_shop_open=true;
let order=(time,work)=>{
  return new Promise((resolve,reject)=>{
     if(is_shop_open){
        setTimeout(()=>{
              resolve(work())
        },time)
     
     }
     else{
        reject(console.log("Our shope is closed"))
     }
  }) 
}

order(2000,()=>{console.log(`${stocks.fruits[0]} was selected`)})

.then(()=>{
   return order(0,()=>console.log(`production has started`))
})

.then(()=>{
   return order(2000,()=>console.log("the fruit was chopped"))
})

.then(()=>{
   return order(1000,()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`))
})
.then(()=>{
   return order(1000, ()=>console.log("Start the machine"));


   })
   
   .then(()=>{
  return order(2000,()=>
    console.log(`ice cream was placed on ${stocks.holder[1]}`)
  )
})

.then(()=>{
   return order(3000,()=>console.log(`${stocks.toppings[0]} was selected`))
})

.then(()=>{
   return order(1000,()=>console.log("ice cream was served"))
})