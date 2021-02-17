'use strict';

const secretNumber = Math.trunc(Math.random()*20+1);
// document.querySelector('.number').textContent = secretNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number( document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if(!guess){
        document.querySelector('.message').textContent = 'NO NUMBER TO GUESS!';
        




    } else if (guess === secretNumber){
        document.querySelector('.message').textContent = 'You Won The Game Yahoooo!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';





    }else if(guess > secretNumber){
        
        if(score > 1){
            score--;
            document.querySelector('.score').textContent = score; 
            document.querySelector('.message').textContent = 'Oh NO! Your Number is Too High ';
            document.querySelector('.message').style.color = 'yellow'
        }else if(score > 0){
            document.querySelector('.message').textContent = 'You Loose the game. Try Again';
            document.querySelector('.message').style.color = 'red';
            score = 0;
            document.querySelector('.score').textContent = score;
        }



    }else if(guess < secretNumber){
        if(score > 1){
            score--;
            document.querySelector('.score').textContent = score; 
            document.querySelector('.message').textContent = 'Oh NO! Your Number is Too Low ';
            document.querySelector('.message').style.color = 'yellow';



        }else if(score > 0){
            document.querySelector('.message').textContent = 'You Loose the game. Try Again';
            document.querySelector('.message').style.color = 'red';
            score = 0;
            document.querySelector('.score').textContent = score;
        }
    }
});

    document.querySelector('.again').addEventListener('click', function(){
        score = 20;
        const secretNumber = Math.trunc(Math.random()*20+1);
        const guess = Number( document.querySelector('.guess').value);
        document.querySelector('.number').textContent = '?';
        document.querySelector(".guess").value = ' ';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('.message').textContent = 'Start guessing...';

    

});