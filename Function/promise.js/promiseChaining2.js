//Promise chaining(then-->then-->then)
// Each .then():
// receives result
// can return a new value

new Promise((resolve)=>{
   resolve(1);
})
.then((num)=>{
   console.log(num);
   return num+1;
})
.then((num)=>{
   console.log((num));
   return num+1;
})
.then((num)=>{
   console.log(num);
})

.catch((error)=>{
   console.log("Error:",error);
})
.finally(()=>{
   console.log("Promise chaining completed");
})

