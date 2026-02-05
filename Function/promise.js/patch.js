async function updatePost(postId,updatedData){
   try{
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;

      const response= await fetch(url,{
         method:'PATCH',
         headers:{
            'Content-Type':'application/json',
         },
         body:JSON.stringify(updatedData)// on;y the field you want to update
      });
      if(!response.ok){
         throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Update post:", data);
      
   }
   catch(err){
      console.error("Error updating post:", err);
   }
}

updatePost(1,{title:'New Title for post 1'});

// // PATCH
// updatePost(1, { title: 'Updated!' }); // only updates the title

// // PUT
// replacePost(1, { title: 'Updated!', body: 'Full new body', userId: 1 }); // replaces entire post
