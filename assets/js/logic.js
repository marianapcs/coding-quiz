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
    var sound = new Audio("./assets/sfx/correct.wav");
    sound.play ();
};

function answer (choice, correctAnswer) {
    console.log(currentQuestion)
    console.log(questions.length)
    if(currentQuestion >= questions.length -1)
    {
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
    var scores = timeLeft;
    scores ();
    window.location.href = "highscores.html";
    localStorage.setItem("initials", JSON.stringify(initials));
    localStorage.setItem("score", JSON.stringify(score));
});

function scores () {
    localStorage.getItem("initials");
    localStorage.getItem("score");
    initials.JSON.parse(initials);
    score = JSON.parse(score);

};



//hide questions and go onto highscores page


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


      // function displayQuestions(questionsArray) {
                //   var questionIndex = 0;
                //   var questionContainer = document.getElementById("question-container");
                  
                //   function showQuestion() {
                //     questionContainer.innerHTML = questionsArray[questionIndex].question;
                //   }
                  
                //   showQuestion();
                  
                //   document.getElementById("next-button").addEventListener("click", function() {
                //     questionIndex++;
                //     if (questionIndex < questionsArray.length) {
                //       showQuestion();
                //     } else {
                //       questionContainer.innerHTML = "End of quiz";
                //     }
                //   });
                // }
                
                // var questions = [
                //   { question: "What is the capital of France?", answer: "Paris" },
                //   { question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci" },
                //   { question: "What is the highest mountain in the world?", answer: "Mount Everest" }
                // ];
                
                // displayQuestions(questions);
                
                
                
                
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
//   });