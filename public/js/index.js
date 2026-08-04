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

            <button onclick="editBlog(${blog.id})">Edit</button>
        `;

        container.appendChild(article);

    });

})
.catch(error => {
    console.error(error);
});

function editBlog(id){

    const title = prompt("Enter Blog Title");
    if(title === null) return;

    const author = prompt("Enter Author Name");
    if(author === null) return;

    const category = prompt("Enter Category");
    if(category === null) return;

    const date = prompt("Enter Published Date (YYYY-MM-DD)");
    if(date === null) return;

    const content = prompt("Enter Blog Content");
    if(content === null) return;

    fetch(`/blogs/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            title,
            author,
            category,
            date,
            content
        })
    })
    .then(response=>response.json())
    .then(data=>{
        alert(data.message);
        location.reload();
    })
    .catch(error=>{
        console.log(error);
    });

}