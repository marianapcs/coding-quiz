//need to define the variables to get elements by ID
var timer = document.getElementById("time");
var startScreen = document.getElementById("start-screen");
var startButton = document.getElementById("start");
var questionEl = document.getElementById("questions");
var titleEl = document.getElementById("question-title");
var optionEl = document.getElementById("choices");
var end = document.getElementById("end-screen");
var score = document.getElementById("final-score");
var initials = document.getElementById("initials");
var submit = document.getElementById("submit");
var opinion = document.getElementById("feedback");

// * A start button that when clicked a timer starts and the first question appears.
 
//   * Questions contain buttons for each answer.
//   * 
//   * When answer is clicked, the next question appears
//   * 
//   * If the answer clicked was incorrect then subtract time from the clock

// * The quiz should end when all questions are answered or the timer reaches 0.

//   * When the game ends, it should display their score and give the user the ability to save their initials and their score