// Start Section
let startbtn = document.querySelector("#start");
let startScrn = document.querySelector("#start-screen")

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
let endScrn = document.querySelector("end-screen");
let correctVal = document.querySelector("#total-correct");
let points = document.querySelector("#final-score");

//All headers from the question
let questions = document.querySelectorAll(".choice_que")

//Timer
let timeVal = document.querySelector("#time");

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
    // optionList.style.display = 'block';
    startScrn.style.display = 'none';

    interval = setInterval(countdown, 1000);
    loadData();
});


// Timer.
let countdown = () => {
    if (timer === 5 ) {
        clearInterval(interval);
        optionList.click();
    } else {
        timer ++;
        timeVal.innerText = timer;
       
    }
};

setInterval(countdown, 1000);


let loadData = () => {
    optionList.innerText = index + 1 + ". ";
    question.innerText = allquestions[index].question;
    option1.innerText = allquestions[index].option1;
    option2.innerText = allquestions[index].option2;
    option3.innerText = allquestions[index].option3;
    option4.innerText = allquestions[index].option4;

    timer = 0;
};

loadData();


choiceNo.forEach( (optionList, choiceNo) => {
    optionList.addEventListener("click", ()=> {
        optionList.classList.add("active");

        if (choiceNo === allquestions[index].answer) {
            correct ++;
        } else {
            correct += 0;
        }
        clearInterval(interval);

        for (i = 0; i <=3; i++){
            questions[i].classList.add("disabled")
        }
    })
})



























// Dispalying questions
// let loadData = () => {
//     questionsTi.innerHTML = allquestions[index].question

//     choice1.innerText = allquestions[index].choice1
//     choice2.innerText = allquestions[index].choice2
//     choice3.innerText = allquestions[index].choice3
//     choice4.innerText = allquestions[index].choice4


//     // Timer start
//     timer = 0;

// }

// loadData();



// choice_que.forEach( (choices, choiceNo) => {
//     choices.addEventListener("click", () => {
//         choices.classList.add("active");

//         if (choiceNo === allquestions[index].answer) {
//             correct ++;
//         }
//         else {
//             correct += 0
//         }
//     })
// })
