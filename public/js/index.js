fetch("/blogs")
.then(response => response.json())
.then(blogs => {

    const container = document.getElementById("blogContainer");

    container.innerHTML = "";

    if (blogs.length === 0) {
        container.innerHTML = "<h2>No blogs available.</h2>";
        return;
    }

    blogs.forEach(blog => {

        const article = document.createElement("article");

        article.innerHTML = `
            <h2>${blog.title}</h2>

            <p><strong>Author:</strong> ${blog.author}</p>

            <p><strong>Category:</strong> ${blog.category}</p>

            <p><strong>Published Date:</strong> ${blog.date}</p>

            <p>${blog.content}</p>
        `;

        container.appendChild(article);
    });

})
.catch(error => {
    console.error(error);
});