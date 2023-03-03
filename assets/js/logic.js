//need to define the variables to get elements by ID
var startScreen = document.getElementById("start-screen");
var startButton = document.getElementById("start");
var questionEl = document.getElementById("questions");
var optionEl = document.getElementById("choices");
var end = document.getElementById("end-screen");
var score = document.getElementById("final-score");
var initials = document.getElementById("initials");
var submit = document.getElementById("submit");
var opinion = document.getElementById("feedback");

// * A start button that when clicked a timer starts and the first question appears.

startButton.addEventListener("click", quizStart);

function quizStart () {
    console.log('starting');
    startButton.classList.add('hide');
    startScreen.classList.add('hide');
    questionEl.classList.remove('hide');
    var timeInterval = setInterval(function () {
        timeLeft --;
        timerEl.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            initialForm (); //create an initials form function when timer runs out to fill out your initials for the final score
        }
    }, 1000);

}


// Timer that counts down from 60 seconds
var timeLeft =60;
var timerEl = document.getElementById("time");

//setting the timer
// function countdown (){
//     var timeLeft = 60;
    
//     //use setInterval() method to call the quiz to start
//     var timeInterval = setInterval(function(){
//         timeLeft --;
//         timer.textContent = timeLeft;
//         if (timeLeft <= 0) {
//             clearInterval(timeLeft);
//             end ();
//         }
//     }, 1000);
// }

// create a function that starts quiz on clicking start and starts the timer
// function quizStart(q) {
//     var titleEl = document.getElementById("#question-title");
//     titleEl.textContent = "";
//     titleEl.textContent = questions[q].question;
//     var button = document.querySelectorAll("button");
//     //declaring a block-scoped local variable, <less than 5, ++ increment with value set to start at 0
//     for (let x=0; x<5; x++){
//         button [x+1].textContent = questions[q].options[x+1];
//     }
//     opinion.textContent = "";
//     return;
    
// }

// var score = 0;

// //   * Questions contain buttons for each answer.
// //Set variables to create buttons for each possible answer
// var answer1 = document.createElement("button");
// var answer2 = document.createElement("button");
// var answer3 = document.createElement("button");
// var answer4 = document.createElement("button");


//need to set it so that when timer reaches 0 the quiz finishes
       
 
//   * 
//   * When answer is clicked, the next question appears
//   * 
//   * If the answer clicked was incorrect then subtract time from the clock

// * The quiz should end when all questions are answered or the timer reaches 0.

//   * When the game ends, it should display their score and give the user the ability to save their initials and their score

// signUpButton.addEventListener("click", function(event) {
//     event.preventDefault();
  
//     var email = document.querySelector("#email").value;
//     var password = document.querySelector("#password").value;
  
//     if (email === "") {
//       displayMessage("error", "Email cannot be blank");
//     } else if (password === "") {
//       displayMessage("error", "Password cannot be blank");
//     } else {
//       displayMessage("success", "Registered successfully");
  
//       localStorage.setItem("email", email);
//       localStorage.setItem("password", password);
//       renderLastRegistered();
//     }
//   });