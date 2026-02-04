// 1. Define an async function
async function fetchData(url) {
  try {
    // 2. Wait for the fetch request to complete
    const response = await fetch(url);

    // 3. Check if the response is OK (status 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);//HTTP ኮድ ያሳያል (200, 404, 500 …)
    }

    // 4. Convert the response to JSON
    const data = await response.json();

    // 5. Log the data
    console.log(data);
  } catch (error) {
    // 6. Handle errors
    console.error("Error fetching data:", error);
  }
}

// 7. Call the function with a URL
fetchData("https://jsonplaceholder.typicode.com/posts/1");


// [Start] 
//    |
//    v
// fetch(url) called  (async request sent to server)
//    |
//    v
// [Waiting for server response]  <-- JavaScript does not block, other code can run
//    |
//    v
// Server responds
//    |
//    v
// response object received
//    |
//    v
// Check response.ok?  ---> if false --> throw error --> catch block
//    |
//    v
// response.json()  (parse JSON into JS object)
//    |
//    v
// Use data (console.log / display on page)
//    |
//    v
// [End]

// | Type | Purpose                                    |
// | ---- | ------------------------------------------ |
// | GET  | Retrieve data from the server (read-only)  |
// | POST | Send data to the server (create or update) |


async function createPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST", // Specify POST method
      headers: {
        "Content-Type": "application/json" // Tell server we’re sending JSON
      },
      body: JSON.stringify({ // Convert JS object to JSON string
        title: "Hello World",
        body: "This is a new post",
        userId: 1
      })
    });

    const data = await response.json(); // Parse response JSON into JS object
    console.log(data); // See the created post
  } catch (error) {
    console.error("Error:", error); // Handle errors
  }
}

createPost();

// [Start]
//    |
//    v
// fetch(url, {method: "POST", body: {...}})
//    |
//    v
// [Waiting for server response]
//    |
//    v
// Server processes request
//    |
//    v
// response object received
//    |
//    v
// Check response.ok? --> if false --> catch error
//    |
//    v
// response.json() -> parse JSON
//    |
//    v
// Use data (console.log / display on page)
//    |
//    v
// [End]


