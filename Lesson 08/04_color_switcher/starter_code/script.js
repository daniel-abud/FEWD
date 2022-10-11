// When the #grayButton is clicked, the color scheme of the page should change to more of a "dark mode" feel, with gray backgrounds and white text throughout.

const grayBtn = document.getElementById('grayButton');
grayBtn.addEventListener('click',function(){
    //  change color scheme
    document.body.classList.add('darkMode');
});

// The #whiteButton should bring things back to the "light mode" color scheme with white backgrounds and dark text

const whiteBtn = document.querySelector("#whiteButton");
function setWhiteScheme(){
    document.body.classList.remove('darkMode');
}
whiteBtn.addEventListener('click',setWhiteScheme);

// Try to do this by setting styles (.style)
// Remember to try one step at a time, testing each stage as you go!



const grBtn = document.getElementById('body');

grBtn.style.backgroundColor = "red" ;
// applies a style to the page, must access style property, then CSS property written in camelCase



// 1 - target the object
// 2 - add the event listener
// 3 - set a behavior for the event