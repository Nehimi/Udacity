async function deletePost(postId){
   try{
      URL="https://jsonplaceholder.typicode.com/posts/${postId}"
      const response = await fetch(URL,{
         method:"DELETE"
      });
      if(!response.ok){
         throw new Error(`Failed to delet post: ${response.status}`);
      }
      console.log(`Delet Sucesses: post ${postId} removed`);
   }
   catch(err){
     console.err("Delet error:") 
   }
}
deletePost(1);