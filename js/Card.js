export default function Card(cardElement) {
  const bookmarkSvgElement = cardElement.querySelector(
    '[data-js=bookmark-svg]'
  );
  console.log(bookmarkSvgElement);
  bookmarkSvgElement.addEventListener('click', () => {
    bookmarkSvgElement.classList.toggle('app-card__bookmark--marked');
    console.log(bookmarkSvgElement);
  });
}
