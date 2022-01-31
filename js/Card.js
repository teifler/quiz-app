export default function Card(cardElement) {
  const bookmarkSvgElement = cardElement.querySelector(
    '[data-js=bookmark-svg]'
  );
  bookmarkSvgElement.addEventListener('click', () => {
    bookmarkSvgElement.classList.toggle('app-card__bookmark--marked');
  });
}
