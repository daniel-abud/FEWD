/*
 * DOTS: Level Three
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');
let pointOne = 20;
let pointTwo = 5;
let pointThree = 10;


// change class ball to ball specific sizes css and html
// did not work

arenaEl.addEventListener('click',
        function(e){
                if(e.target.classList.contains('ballOne')){
                score = score + pointOne;
                    }
                else if(e.target.classList.contains('ballTwo')){
                    score = score + pointTwo;
                    }
                else if(e.target.classList.contains('ballThree')){
                    score = score + pointThree;
                }
            if(score < 40
                ){
                scoreEl.innerHTML = score;
            }
            else {
                declareWinner();
            }
    }
)


function declareWinner(){
    document.body.classList.add('game-over');
    scoreEl.innerHTML = score;
}

