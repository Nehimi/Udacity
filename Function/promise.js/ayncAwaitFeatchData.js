async function getData(){
   try{
      let url="https://jsonplaceholder.typicode.com/users";
   let response=await fetch(url);
   let data= await response.json();
   console.log(data[0].address.geo); 
   }
   catch(err){
console.log("Error:",err)
   }
  
}
getData();