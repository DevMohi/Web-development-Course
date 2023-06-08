function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPosts(data));
}

function displayPosts(posts) {
  const postContainer = document.getElementById("post-container");

  for (const post of posts) {
    const div = document.createElement("div");
    //adding class
    div.classList.add("post");
    //done with innerHTML
    div.innerHTML = `
        <h5>User -${post.userId} </h5>
        <h6>Post: ${post.title} </h6>
        <p>Post Description: ${post.body}</p>
    `;
    postContainer.appendChild(div);
  }
}

loadPosts();
