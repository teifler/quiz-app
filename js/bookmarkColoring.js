export function bookmarkColoring() {
  const bookmarkSvgElement = document.querySelector('[data-js=bookmark-svg]');
  bookmarkSvgElement?.addEventListener('click', () => {
    bookmarkSvgElement.classList.toggle('app-card__bookmark--marked');
  });
}
