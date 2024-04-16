'use strict';

let guessNumber = Math.trunc(Math.random() * 20) + 1;
let userGuess = 0;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

const checkInput = function (input) {
    if (input === guessNumber) {
        document.querySelector('.number').textContent = guessNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').style.width = '30rem';
        return true;
    } else if (input > guessNumber) {
        displayMessage('👇 Try a lower number!');
        return false;
    } else if (input < guessNumber) {
        displayMessage('👆 Try a higher number!');
        return false;
    } else {
        displayMessage('❌ Wrong Input!');
        return false;
    }
};

const checkScore = function (result) {
    if (score > 1) {
        if (result === false) {
            score--;
            document.querySelector('.score').textContent = score;
        } else if (result === true && score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else {
        document.querySelector('.score').textContent = 0;
        displayMessage('💥 You lost the game!');
    }
};

function evalClick() {
    userGuess = Number(document.querySelector('.guess').value);
    let evaluation = checkInput(userGuess);
    checkScore(evaluation);
}

function again() {
    displayMessage('Start guessing...');
    guessNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.guess').value = '';
    score = 20;
    userGuess = 0;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
}

document.querySelector('.check').addEventListener('click', evalClick);
document.querySelector('.again').addEventListener('click', again);
