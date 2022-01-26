const bookmarkElement = document.querySelector("[data-js=bookmark]");

bookmarkElement.addEventListener("click", () => {
  bookmarkElement.classList.toggle("bg-blue");
  console.log("its workin");
});

const navBarElement = document.querySelector("[data-js=bookmarks]");
navBarElement.classList.add("app-nav__link--active");
