/*
 * DOTS: Level One
 *
 */
let score = 0;
let ballEl = document.querySelector('.js-ball');
let scoreEl = document.querySelector('.js-score');
let point = 10;

// create function if click listener = true then add 10 points
// function addPoints(scoreEl){
//   if (ballEl == true) {
//     scoreEl = score + '10'
//     document.body.className.replace('.js-score',score)
//   }
//   console.log("10")
// }

// call the function
ballEl.addEventListener('click',
  function(){
    score = score + point; 
    if(score < 20){
      scoreEl.innerHTML = score;
    }
    else {
      declareWinner();
    }
  }
  );

function declareWinner() {
  document.body.classList.add('game-over');
}



// if total = 100 points then add paragraph with information ready to next level
// const newParagraph = document.createElement("p")
// newParagraph.innerText = "Ready for the next level"
// document.body.appendChiled(newParagraph);

// add image celebration