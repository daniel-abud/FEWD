// Try making the traffic light work - Think through the problem BEFORE you code!
// You'll use addEventListener and getElementById if you're doing it right...


// get buttons

let stopButton = document.getElementById('stopButton');
let slowButton = document.getElementById('slowButton');
let goButton = document.getElementById('goButton');

// get lights

let stopLight = document.getElementById('stopLight');
let slowLight = document.getElementById('slowLight');
let goLight = document.getElementById('goLight');


// click stop light red on

stopButton.addEventListener('click',function(){
    document.body.classList.toggle('stopLight')
    document.body.classList.remove('slowLight')
    document.body.classList.remove('goLight')
})


// click slow turn yellow on



// click go turn green on


