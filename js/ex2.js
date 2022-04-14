//Using Web APIs
const formElement = document.querySelector("form");
//Create an action for submit button
formElement.addEventListener("submit", e => {
    e.preventDefault();
    const username = formElement.elements.login.value;
    
//fetch api data
  fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(user => {
    //create name/blog/site/image/elements
     const imageElement = document.createElement("img");
     imageElement.src = user.avatar_url;
    //name
     const nameElement = document.createElement("tr");
     nameElement.innerHTML = `<td>Name</td><td>${user.name}</td>`;
    //blog
     const blogElement = document.createElement("tr");
     blogElement.innerHTML = `<td>Blog</td><td>${user.blog}</td>`;
    
     const createdElement = document.createElement("tr");
     createdElement.innerHTML = `<td>Created</td><td>${user.created_at}</td>`;
    // clear the previous data
     const infoElement = document.getElementById("info");
     infoElement.innerHTML = "";
    // add info to the page
     infoElement.appendChild(imageElement);
     infoElement.appendChild(nameElement);
     infoElement.appendChild(blogElement);
     infoElement.appendChild(createdElement);
    })
  .catch(err => {
    console.error(err.message);
   });
});