// ==========================
// GET: Read data from server
// ==========================
async function getPost(postId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch post");
    }

    const data = await response.json();
    console.log("GET result:", data);
  } catch (error) {
    console.error("GET error:", error);
  }
}

// ==========================
// POST: Create new data
// ==========================
async function createPost() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: "New Post",
          body: "This post was created using POST",
          userId: 1
        })
      }
    );

    const data = await response.json();
    console.log("POST result:", data);
  } catch (error) {
    console.error("POST error:", error);
  }
}

// ==========================
// PUT: Update existing data
// ==========================
async function updatePost(postId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: postId,
          title: "Updated Title",
          body: "This post was updated using PUT",
          userId: 1
        })
      }
    );

    const data = await response.json();
    console.log("PUT result:", data);
  } catch (error) {
    console.error("PUT error:", error);
  }
}

// ==========================
// Call the functions
// ==========================
getPost(1);
createPost();
updatePost(1);
// [End]