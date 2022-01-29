//Limit textfield for create question to 200

export function counterTextField() {
  const questionInputElement = document.querySelector(
    '[data-js="add-question-input"]'
  );
  const outputElement = document.querySelector('[data-js="outputCounter"]');

  questionInputElement?.addEventListener('input', event => {
    const result = 200 - questionInputElement.value.length;
    if (result === 0) {
      outputElement.textContent = `Maximum Characters reached: ${result}`;
      alert('Maximum of 200 characters reached!');
    } else if (result <= 1) {
      outputElement.textContent = `Character remaining: ${result}`;
    } else {
      outputElement.textContent = `Characters remaining: ${result}`;
    }
  });
}
