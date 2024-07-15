'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setStyle = function (selector, property, value) {
  document.querySelector(selector).style[property] = value;
};

const setTextContent = function (selector, text) {
  document.querySelector(selector).textContent = text;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('No number!');
    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    setTextContent('.number', secretNumber);
    setStyle('body', 'backgroundColor', '#60b347');
    setStyle('.number', 'width', '30rem');

    if (score > highScore) {
      highScore = score;
      setTextContent('.highscore', highScore);
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too Low');
      score--;
      setTextContent('.score', score);
    } else {
      displayMessage('You lost the game!');
      setTextContent('.score', 0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  // Restore initial values of the score variable
  score = 20;
  // Restore initial values of the secretNumber
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // Restore the initial conditions of the message, number, score and guess input field
  displayMessage('Start guessing...');
  setTextContent('.number', '?');
  setTextContent('.score', score);
  document.querySelector('.guess').value = '';
  //Restore the backgroundColor
  setStyle('body', 'backgroundColor', '#222');
  //Restore the number width
  setStyle('.number', 'width', '15rem');
});
