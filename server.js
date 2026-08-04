const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Store blogs in memory
const blogs = [];

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Home Page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Add Blog Page
app.get("/add-blog", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "add-blog.html"));
});

// Add Blog API
app.post("/add-blog", (req, res) => {

    const { title, author, category, date, content } = req.body;

    const newBlog = {
        id: blogs.length + 1,
        title,
        author,
        category,
        date,
        content
    };

    blogs.push(newBlog);

    console.log("New Blog Added");
    console.log(newBlog);

    res.send("Blog added successfully!");
});

// Get All Blogs API
app.get("/blogs", (req, res) => {
    res.json(blogs);
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});