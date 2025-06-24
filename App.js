
const blogPosts = [
  {
    title: "My First Blog Post",
    content: "This is a simple blog post. Welcome to my blog!"
  },
  {
    title: "Another Post",
    content: "Frontend development is fun and creative!"
  }
];

const container = document.getElementById("blog-container");

blogPosts.forEach(post => {
  const div = document.createElement("div");
  div.className = "post";
  div.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
  container.appendChild(div);
});

document.getElementById("toggle-mode").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
