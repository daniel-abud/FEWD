/*
 * DOTS: Level Two
 *
 */
let score = 0;
let point = 10;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');
// let ballEl = document.classList('js-ball');

// arenaEl works for all area

arenaEl.addEventListener('click',
        function(e){

            // specify ball within arena
            if(e.target.classList.contains('ball')){

            // console.log(e.target.classList.contains('js-ball'))
            score = score + point;

            if(score < 100 //|| ball == true
                ){
                scoreEl.innerHTML = score;
            }
            else {
                declareWinner();
            }
    }
}
)

// function ball(){
//     ballEl.addEventListener('click')
//     // arenaEl.addEventListener('click')
// }

function declareWinner(){
    document.body.classList.add('game-over');
    scoreEl.innerHTML = score;
}
