const form = document.getElementById("blogForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const category = document.getElementById("category").value;
    const date = document.getElementById("date").value;
    const content = document.getElementById("content").value.trim();

    if(title === ""){
        alert("Please enter the Blog Title.");
        return;
    }

    if(author === ""){
        alert("Please enter the Author Name.");
        return;
    }

    if(category === ""){
        alert("Please select a category.");
        return;
    }

    if(date === ""){
        alert("Please choose a published date.");
        return;
    }

    if(content === ""){
        alert("Please enter the Blog Content.");
        return;
    }

    alert("Blog submitted successfully!");

    form.reset();

});