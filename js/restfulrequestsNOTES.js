"use strict";

// GET a list of all posts
fetch("http://localhost:3000/posts")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));

// POST a new post to the DB

function createPost() {
   let title = prompt("what is the title of your post?");
   let author = prompt("who is the author of this post?")
    return{title, author};
}


let newPost = {
    id: 2,
    title: "my first blog post",
    author: "Codeup"
}

fetch("http://localhost:3000/posts", {
    // establish the method, GET is the default method.
    method: 'POST',
    headers: {
        // the server needs to know what format we are sending data in.
        'Content-Type': 'application/json'
    },
    // convert JS object to JSON object
    body: JSON.stringify(createPost())
}).then(resp => resp.json())
.then(data => console.log(data))
.catch(error => console.error(error));


//DELETE a post
function deletePost(id) {
    fetch("http://localhost:3000/posts/2", {
        method: 'DELETE',
    })
        .then(resp => resp.json())
        .then(data => data)
        .catch(error => console.error(error))
}
// deletePost(4);

//GET an indiviual post by ID

function getPostById(id) {
    return fetch(`http://localhost:3000/posts/${id}`)
        .then(resp => resp.json())
        .then(data => data);
}
getPostById(4).then(data => console.log(data));


// PUT (used to update an entire resource at once-will not change the ID)

// function editPostById(id){
//     return fetch(`http://localhost:3000/posts/${id}`,
//         method: 'PUT',
// headers: {
//         'Content-Type': 'application/json'
//     },
// body: JSON.stringify()
// })
// then