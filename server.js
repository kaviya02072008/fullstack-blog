const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

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

// POST Route
app.post("/add-blog", (req, res) => {

    console.log("========== BLOG DETAILS ==========");

    console.log("Title :", req.body.title);
    console.log("Author :", req.body.author);
    console.log("Category :", req.body.category);
    console.log("Published Date :", req.body.date);
    console.log("Content :", req.body.content);

    console.log("==================================");

    res.send("Blog added successfully!");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});