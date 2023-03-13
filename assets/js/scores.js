var initials = localStorage.getItem("initials");
var score = localStorage.getItem("score");

var newScore = document.createElement ("li");
newScore.textContent = initials + " " + score;
highscores.append(newScore);