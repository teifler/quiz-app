export function hideShowAnswer() {
  const showHideAnswerElement = document.querySelector(
    '[data-js="hide-show-answer"]'
  );

  showHideAnswerElement?.addEventListener('click', event => {
    console.log('clicked');
    if (showHideAnswerElement.textContent.trim() === 'Hide answer') {
      showHideAnswerElement.textContent = 'Show Answer';
      console.log('in the if');
      return;
    }
    showHideAnswerElement.textContent = 'Hide answer';
    console.log('Ende der funktion');
  });
}
