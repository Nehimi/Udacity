async function getData(){
   try{
      let url="https://jsonplaceholder.typicode.com/users";
   let response=await fetch(url);
   let data= await response.json();
   // console.log(data[0].address.geo); 
//       If you want ONE property from ALL users
// Example: get all names
let names = data.map(user => user.name);
console.log(names);
   }
   catch(err){
console.log("Error:",err)
   }
  
}
getData();

