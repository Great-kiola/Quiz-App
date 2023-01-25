// Start Section
let startbtn = document.querySelector("#start");
let startScrn = document.querySelector("#start-screen")
let feedback = document.querySelector("#feedback")

// Question Section 
let question = document.querySelector("#questions");
let questionsTi = document.querySelector("#question-title");

//Multiple Choices
let optionList = document.querySelector('#optionList');
let option1 = document.querySelector('#option1');
let option2 = document.querySelector('#option2');
let option3 = document.querySelector('#option3');
let option4 = document.querySelector('#option4');

// End Screen
let endScrn = document.querySelector("#end-screen");
let correctVal = document.querySelector("#total-correct");
let points = document.querySelector("#final-score");

//All headers from the question
let questions = document.querySelectorAll(".choice_que")

//Timer
let timeVal = document.querySelector("#time");

// Answer section
let answerSection = document.querySelector("#answerSection");

// submit Button
let submitBtn = document.querySelector("#submit")
let scores = document.querySelector(".scores")

// Highcores
let highscores = document.querySelector("#highscoresList"); // This is where my scores would be saved.
let finalScore = document.querySelector("#final-score")  // This shows my score in the End-screen.


let maxHighScore = 5;
let index = 0;
let timer = 60;
let interval;

// All points
let correct = 0; // gathers all my points.

// Store answer value
let userAns;


// start button clicked
startbtn.addEventListener("click", () => {
    feedback.classList.remove("hide")
    question.classList.remove("hide");
    optionList.classList.remove("hide");
    startScrn.classList.add("hide");
    answerSection.classList.remove("hide")

    interval = setInterval(countdown, 1000);
    loadData();
});


// Timer.
let countdown = () => {
    if (timer <= 0) {
        clearInterval(interval);
        endGame();
    } else {
        timer--;
        timeVal.innerText = timer;
    }
};


// data for all my quiz questions.
let loadData = () => {
    question.innerText = allquestions[index].question;
    option1.innerText = allquestions[index].option1;
    option2.innerText = allquestions[index].option2;
    option3.innerText = allquestions[index].option3;
    option4.innerText = allquestions[index].option4;
};



function checkAnswer(optionNo) {
    var answerElement = document.querySelector("#answer-results");
    if (optionNo === allquestions[index].answer) {
        correct += 15;  // calculate the score i have and save it to the correct var.
        answerElement.textContent = "Correct, You won 15 points"

    } else {
        correct += 0;
        answerElement.textContent = "Wrong, better luck next time."
        timer -= 15;
    }

    index++;

    if (index < allquestions.length) {
        loadData();
        
    } else {
        endGame();
    }
    
};


// End game function
function endGame() {
    endScrn.classList.remove("hide");
    question.classList.add("hide");
    optionList.classList.add("hide");
    answerSection.classList.add("hide")
    feedback.classList.add("hide");
    finalScore.innerText = correct;  // shows the total score i have.

    clearInterval(interval);
    timeVal.innerText = 0;


};

// LocalStorage
const saveScore = JSON.parse(localStorage.getItem("highscores")) || [];


//Highscore submit button
submitBtn.addEventListener("click", ()=>{
   const points = {
    points: correct,
    name: initials.value,
   }

   saveScore.push(points);
   saveScore.sort((a, b) => { b.score - a.score} )
   saveScore.splice(5);

   localStorage.setItem("highscores", JSON.stringify(saveScore));
   window.location.assign('./highscores.html')

});



