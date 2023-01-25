let highscoresList = document.querySelector("#highscoresList");
const saveScore = JSON.parse(localStorage.getItem("highscores")) || []; 

highscoresList.innerHTML = saveScore
.map (score => {
    return `<li class= "high-score">${score.name} - ${score.points}</li>`;
})

.join ("");


let clearBtn = document.querySelector("#clear");

clearBtn.addEventListener ("click", () => {
    localStorage.clear("highscoresList");
    window.location.assign("/highscores.html")
})
