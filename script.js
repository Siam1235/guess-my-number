'use strict';

const secretNumber = Math.trunc(Math.random()*20+1);
document.querySelector('.number').textContent = secretNumber;
let score = 20;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number( document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if(!guess){
        document.querySelector('.message').textContent = 'NO NUMBER TO GUESS!';
    } else if (guess === secretNumber){
        document.querySelector('.message').textContent = 'You Won The Game Yahoooo!';
    }else if(guess > secretNumber){
        
        if(score > 1){
            score--;
            document.querySelector('.score').textContent = score; 
            document.querySelector('.message').textContent = 'Oh NO! Your Number is Too High ';
        }else if(score > 0){
            document.querySelector('.message').textContent = 'You Loose the game. Try Again';
            score = 0;
            document.querySelector('.score').textContent = score;
        }



    }else if(guess < secretNumber){
        if(score > 1){
            score--;
            document.querySelector('.score').textContent = score; 
            document.querySelector('.message').textContent = 'Oh NO! Your Number is Too Low ';
        }else if(score > 0){
            document.querySelector('.message').textContent = 'You Loose the game. Try Again';
            score = 0;
            document.querySelector('.score').textContent = score;
        }
    }
});
