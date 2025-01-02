const express = require('express')
const app = express()

app.listen(5000, () => {
    console.log('server is listening on port 5000')
})

// Create a data array to simulate a database. Each item in the array should represent a blog post with properties like id, title, and content.

// Implement the following routes using Express:
// GET /posts: Return a list of all blog posts.
// GET /posts/:id: Return a specific blog post based on its id.
// POST /posts: Create a new blog post.
// PUT /posts/:id: Update an existing blog post.
// DELETE /posts/:id: Delete a blog post.

// Implement error handling for invalid routes and server errors.

// Start the Express app and listen on a specified port (e.g., 3000).
