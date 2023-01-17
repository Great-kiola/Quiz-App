

// Start Section
let startbtn = document.querySelector("#start");

// Question Section
let questionsTi = document.querySelector("#question-title");
let question = document.querySelector("#questions");

//Multiple Choices
let choices = document.querySelector('#choices');
let choice1 = document.querySelector('#choice1');
let choice2 = document.querySelector('#choice2');
let choice3 = document.querySelector('#choice3');
let choice4 = document.querySelector('#choice4');



// End Screen
let endScrn = document.querySelector("end-screen");

let index = 0;
let timer = 0;
let interval = 0;

// All points
let correct = 0;

// Store answer value
let userAns = undefined;

// start button clicked
startbtn.addEventListener("click", () => {
    question.style.display = 'block';
    choices.style.display = 'block';

    interval = setInterval(countdown, 1000);
    loadData();
});

// Dispalying questions
let loadData = () => {
    questionsTi.innerHTML = allquestions[index].question
    choice1.innerText = allquestions[index].choice1
    choice2.innerText = allquestions[index].choice2
    choice3.innerText = allquestions[index].choice3
    choice4.innerText = allquestions[index].choice4


    // Timer start
    timer = 0;

}

loadData();


choice_que.forEach( (choices, choiceNo) => {
    choices.addEventListener("click", () => {
        choices.classList.add("active");

        if (choiceNo === allquestions[index].answer) {
            correct ++;
        }
        else {
            correct += 0
        }
    })
})








// Timer
var timeEl = document.getElementById("time")


function countdown() {
    var timeLeft = 60;
    var timer = setInterval ( function () {
        timeLeft --;

        if (timeLeft === 0) {
            clearInterval(timer);
            console.log('Game Over.')

        }
    }, 1000);
} 
// let countdown = () => {    
//     if (timer === 0 ){

//     }
// }