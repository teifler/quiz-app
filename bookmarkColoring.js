const bookmarkElement = document.querySelector('[data-js=bookmark]');

bookmarkElement.addEventListener('click', () => {
  bookmarkElement.classList.toggle('bg-blue');
});
