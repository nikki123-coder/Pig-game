'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score1el = document.querySelector('#score--0');
const score2el = document.getElementById('score--1');
const diceel = document.querySelector('.dice');
const btnroll = document.querySelector('.btn--roll');
const btnnew = document.querySelector('.btn--new');
const btnhold = document.querySelector('.btn--hold');
const current0el =  document.querySelector('#current--0');
const current1el =  document.querySelector('#current--1');


let scores, currentScore, activePlayer, playing;

const init = function() {

 scores = [0,0];
currentScore = 0;
 activePlayer = 0;
 playing = true;


 score1el.textContent = 0;
score2el.textContent = 0;
  current0el.textContent = 0;
  current1el.textContent = 0;

  diceel.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  document.querySelector('.won--0').textContent = " "; 
  document.querySelector('.won--1').textContent = " "; 

};

init();


const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
currentScore = 0; 
 
 activePlayer = activePlayer === 0 ? 1 : 0;
 player0El.classList.toggle('player--active');
 player1El.classList.toggle('player--active');
}


btnroll.addEventListener('click' , function() {
    if(playing){
//generating random dice roll
const dice = Math.trunc(Math.random()*6)+1;

//display dice
diceel.classList.remove('hidden');
diceel.src = `dice-${dice}.png`;
//check for rolled 1
if(dice !== 1)
{
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
     
}
else{
//Switch to next player
switchPlayer();
}
    }

});

btnhold.addEventListener('click', function(){
    if(playing) {


    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent= scores[activePlayer] ;
    if(scores[activePlayer] >= 100){
        playing = false;
        diceel.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.won--${activePlayer}`).textContent = '🎊 You Won The Game';
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }
    else{
        switchPlayer();
    }

}

    
});

btnnew.addEventListener('click', init);


  