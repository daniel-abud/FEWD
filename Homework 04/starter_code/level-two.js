/*
 * DOTS: Level Two
 *
 */
let score = 0;
let point = 10;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');
let ballEl = document.querySelector('.js-ball');

// arenaEl works for all area
// need to specify ballEl within arenaEl

arenaEl.addEventListener('click',
    function(){
        score = score + point;
        if(score < 20 || ball == true){
            scoreEl.innerHTML = score;
        }
        else {
            declareWinner();
        }
    }
)

function ball(){
    ballEl.addEventListener('click')
}

function declareWinner(){
    document.body.classList.add('game-over');
}
