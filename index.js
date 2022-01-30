import Card from './js/Card.js';
//NodeList
const allCardElements = document.querySelectorAll('[data-js="card"]');
allCardElements.forEach(cardElement => {
  Card(cardElement);
});

import { counterTextField } from './js/textfieldCounter.js';
import { hideShowAnswer } from './js/hideShowAnswer.js';
//import { loginLogout } from './js/loginLogout.js';
import { navigation } from './js/navigation.js';
counterTextField();
hideShowAnswer();

//loginLogout();
navigation();
