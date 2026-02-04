let iceCreamPromise = new Promise((resolve,reject)=>{
   setTimeout(()=>{
      let shopOpen=true;
      if(shopOpen){
         resolve("ice cream is delivered");
      }
      else{
         reject(" shop is closed");
      }
      
   },2000)
})
iceCreamPromise
.then((msg)=>console.log(msg))
.catch((err)=>console.log(err));