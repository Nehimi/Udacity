let myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Work done successfully 🎉");
  } else {
    reject("Something went wrong 😢");
  }
});

//Promise Consumption
myPromise 
.then((result)=>{
   console.log(result);
})
.catch((error)=>{
   console.log(error);
})