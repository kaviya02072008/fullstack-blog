const form = document.getElementById("blogForm");

form.addEventListener("submit", function(event){

    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const category = document.getElementById("category").value;
    const date = document.getElementById("date").value;
    const content = document.getElementById("content").value.trim();

    if(title === ""){
        alert("Please enter the Blog Title.");
        event.preventDefault();
        return;
    }

    if(author === ""){
        alert("Please enter the Author Name.");
        event.preventDefault();
        return;
    }

    if(category === ""){
        alert("Please select a category.");
        event.preventDefault();
        return;
    }

    if(date === ""){
        alert("Please choose a published date.");
        event.preventDefault();
        return;
    }

    if(content === ""){
        alert("Please enter the Blog Content.");
        event.preventDefault();
        return;
    }

    alert("Blog submitted successfully!");
});