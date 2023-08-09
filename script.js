'use strict';
let score = 20;

let secreat = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = secreat;
//console.log(number);
//console.log(document.querySelector('.message').textContent);
//document.querySelector('.message').textContent = 'correct number';
//document.querySelector('.number').textContent = 13;
//document.querySelector('.score').textContent = 10;
//document.querySelector('.guess').value = 10;
console.log(document.querySelector('.guess').value);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Guess!';
  } else if (guess === secreat) {
    document.querySelector('.message').textContent = 'correct Number ';
    document.querySelector('body').style.backgroundColor = ' #60b347';
    document.querySelector('.number').style.width = '25rem';
    document.querySelector('.highscore').textContent = score;
  } else if (guess > secreat) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secreat) {
    console.log('satys');
    if (score > 1) {
      document.querySelector('.message').textContent = 'TO LOW!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      console.log('in');
      document.querySelector('.message').textContent = 'You Lost';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  console.log('arya');
  let score = 20;
  let secreat = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start Guessing';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
