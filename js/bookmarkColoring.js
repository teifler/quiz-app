export function bookmarkColoring() {
  const bookmarkSvgElement = document.querySelector('[data-js=bookmark-svg]');
  bookmarkSvgElement?.addEventListener('click', () => {
    console.log(bookmarkSvgElement);
    bookmarkSvgElement.classList.toggle('app-card__bookmark--marked');
    console.log(bookmarkSvgElement);
  });
}
