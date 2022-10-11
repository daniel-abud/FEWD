// Try making the traffic light work - Think through the problem BEFORE you code!
// You'll use addEventListener and getElementById if you're doing it right...


// // get buttons

// let stopButton = document.getElementById('stopButton');
// let slowButton = document.getElementById('slowButton');
// let goButton = document.getElementById('goButton');

// // get lights

// let stopLight = document.getElementById('stopLight');
// let slowLight = document.getElementById('slowLight');
// let goLight = document.getElementById('goLight');


// // click stop light red on

// stopButton.addEventListener('click',function(){
//     document.body.classList.toggle('stopLight')
//     document.body.classList.remove('slowLight')
//     document.body.classList.remove('goLight')
// })




// function that turns off all the lights
function turnOff(){
    document.querySelector('#stopLight').classList.remove('stop');
    document.querySelector('#slowLight').classList.remove('slow');
    document.querySelector('#goLight').classList.remove('go');
}

// go gunction
function go(){
    turnOff();
    document.getElementById('goLight').classList.add('go');
}

// slow function
function slow(){
    turnOff();
    document.getElementById('slowLight').classList.add('slow');
}

// stop function
function stop(){
    turnOff();
    document.getElementById('stopLight').classList.add('stop');
}

// bind to clicks
document.getElementById('stopButton').addEventListener('click',stop);
document.querySelector('#slowButton').addEventListener('click',slow);
document.querySelector('#goButton').addEventListener('click',go);

