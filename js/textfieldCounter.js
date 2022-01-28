//Limit textfield for create question to 200

export function counterTextField() {
  const textAreaCounter = document.getElementById('yolo');

  const textFieldCreateElement = document.querySelector(
    '[data-js="add-question"]'
  );

  textFieldCreateElement?.addEventListener('input', event => {
    const result = 200 - textFieldCreateElement.value.length;
    textAreaCounter.textContent = `Please enter your question:   -- Characters left: ${result}`;
  });
}
