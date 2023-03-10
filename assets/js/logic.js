//need to define the variables to get elements by ID
var startScreen = document.getElementById("start-screen");
var startButton = document.getElementById("start");
var questionEl = document.getElementById("questions");
var optionEl = document.getElementById("choices");
var end = document.getElementById("end-screen");
var score = document.getElementById("final-score");
var initials = document.getElementById("initials");
var submit = document.getElementById("submit");
var feedbackEl = document.getElementById("feedback");

// * A start button that when clicked a timer starts and the first question appears.

startButton.addEventListener("click", quizStart);
var currentQuestion = 0;

function quizStart () {
    console.log('starting');
    startButton.classList.add('hide');
    startScreen.classList.add('hide');
    questionEl.classList.remove('hide');
    var timeInterval = setInterval(function () {
        timeLeft --;
        timerEl.textContent = timeLeft;
        if (timeLeft === 0) {
            optionEl.classList.add('hide');
            questionEl.classList.add('hide');
            end.classList.remove('hide');
            clearInterval(timeInterval);
            score.textContent = "Your final score is "+timeLeft;
            // initialForm (); //create an initials form function when timer runs out to fill out your initials for the final score
        }
    }, 1000);
    quizQs (currentQuestion);
}

//need to set it so that when timer reaches 0 the quiz finishes

// Timer that counts down from 60 seconds
var timeLeft =60;
var timerEl = document.getElementById("time");


//   * Questions contain buttons for each answer.
//Set variables to create buttons for each possible answer
// var answer2 = document.createElement("button");
// var answer3 = document.createElement("button");
// var answer4 = document.createElement("button");

// var button = document.createElement("button");

//create a function for your quiz questions to appear once you have clicked start
function createEventListener (i, questionNum) {
    return function() {
        answer(questions[questionNum].options[i],questions [questionNum].answer);
    }
}


function quizQs (questionNum) {
    removeAllChildNodes(optionEl);
    for (var i=1; i<5; i++)
    {
    var titleEl = document.getElementById("question-title");
    titleEl.innerText = questions[questionNum].question;
    const answerButton = document.createElement("button");
    optionEl.append(answerButton);
    answerButton.innerText = questions[questionNum].options[i];
    answerButton.addEventListener("click", createEventListener(i, questionNum));
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}



//   * When answer is clicked, the next question appears
//   * Correct and Incorrect answers should play sound
//   * If the answer clicked was incorrect then subtract time from the clock
function correctSound () {
    var sound = new Audio("./assets/sfx/correct.wav");
    sound.play ();
};

function incorrectSound () {
    var sound1 = new Audio("./assets/sfx/incorrect.wav");
    sound1.play ();
};

function answer (choice, correctAnswer) {
    console.log(currentQuestion)
    console.log(questions.length)
    if(currentQuestion >= questions.length -1){
        optionEl.classList.add('hide');
            questionEl.classList.add('hide');
            end.classList.remove('hide');
            clearInterval(timeInterval);
            score.textContent = "Your final score is "+timeLeft;
        return console.log("done")
    }
    if (choice === correctAnswer) {
        timeLeft += 10;
        currentQuestion += 1
        quizQs(currentQuestion);
        feedbackEl.textContent= "Correct!";
        correctSound ();
    } else {
        timeLeft -= 10;
        currentQuestion += 1
        quizQs(currentQuestion);
        feedbackEl.textContent= "Incorrect!";
        incorrectSound();
    }
    
};

// * The quiz should end when all questions are answered or the timer reaches 0.
//   * When the game ends, it should display their score and give the user the ability to save their initials and their score
// function initialForm () {
submit.addEventListener("click",function (event){
    event.preventDefault ();
    localStorage.setItem("initials", initials.value);
    localStorage.setItem("score", timeLeft);
   
    window.location.href = "highscores.html";
    // localStorage.setItem("initials", JSON.stringify(initials.value));
    // localStorage.setItem("score", JSON.stringify(timeLeft));
});






//hide questions and go onto highscores page


