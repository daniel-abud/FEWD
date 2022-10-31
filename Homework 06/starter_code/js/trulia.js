

let truliaCards = document.getElementsByClassName("trulia-grid-item");



document.addEventListener('DOMContentLoaded', function(event) {

// Toggle the navigation






// Loop through all the cards
for (var i = 0; i < truliaCards.length; i++){

  // Add a click listener on each card
  truliaCards[i].addEventListener('click',
  function(){

  // truliaCards.addEventListener('click');

  // function truliaCardsTest(){
  //   document.getElementsByClassName('trulia-grid-item').addEventListener('click');
  //   console.log("working");
  // }

      // Remove the featured class
      for (
        var e = 0; e < truliaCards.length; e++
        ){
          truliaCards[e].classList.remove('trulia-featured-grid-item');
        }

      // Add the featured class on the one clicked on
        this.classList.add('trulia-featured-grid-item');
    }
    );
  }    


  });  



// console.log('test')