'use strict';

let guess = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = guess;
let score = 5;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let input = Number(document.querySelector('.guess').value);

  if (input === guess) {
    document.querySelector('.message').textContent = 'correct guess';
    document.querySelector('.number').textContent = guess;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '20rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else {
    if (input !== guess) {
      if (score > 0) {
        document.querySelector('.message').textContent =
          input > guess ? 'too high' : 'too low';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('you have lost the game');
        document.querySelector('body').style.backgroundColor = '#970000';
      }
    } //  else if (input < guess) {
    //   if (score > 0) {
    //     document.querySelector('.message').textContent = 'too low';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent =
    //       'you have lost the game';
    //     document.querySelector('body').style.backgroundColor = '#970000';
    //   }
    // }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 5;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = null;
  guess = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
});
