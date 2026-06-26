document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      console.log(`Navigating to ${link.textContent} page`);
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const searchBox = document.querySelector(".search-box input");
  const searchButton = document.querySelector(".search-box button");

  searchButton.addEventListener("click", () => {
    alert(`Searching for: ${searchBox.value}`);
    // Later you can replace this with real search logic
  });
});
