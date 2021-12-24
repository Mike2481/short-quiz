// global variables tied to HTML elements used in functions below
var highScore = document.getElementById("bestScore");
var timer = document.getElementById("timeRemaining");

var questionText = document.getElementById("message");
var infoText = document.getElementById("info");

var startButton = document.getElementById("start");
var answerBox = document.getElementById("choices");
var buttonA = document.getElementById("A");
var buttonB = document.getElementById("B");
var buttonC = document.getElementById("C");
var buttonD = document.getElementById("D");

var result = document.getElementById("result");
var scoreObject;
var storedSec;

var nameDiv = document.getElementById("nameForm");
var sec = 49; // this was set at 49 instead of 50 because there was a delay in the timer starting
var timerRun;
var submit = document.getElementById("submitScore");
var restart = document.getElementById("restartQuiz");


const mostRecentScore = localStorage.getItem("mostRecentScore");

// Questions array has the question, all answers, and the correct answer indicated
var questions = [
  {
    question: "Arrays in JavaScript can be used to store:",
    answerA: "Numbers and Strings",
    answerB: "Other Arrays",
    answerC: "Booleans",
    answerD: "All of the above",
    correct: "D",
  },
  {
    question: "Commonly used data types Do Not include:",
    answerA: "Strings",
    answerB: "Booleans",
    answerC: "Alerts",
    answerD: "Numbers",
    correct: "C",
  },
  {
    question: "The condition of an If/Else statement is enclosed with:",
    answerA: "Parenthesis",
    answerB: "Curly Brace",
    answerC: "Square Brackets",
    answerD: "Quotes",
    correct: "A",
  },
  {
    question: "String values must be enclosed within ____ when being assigned to variables:",
    answerA: "Curly Brackets",
    answerB: "Quotes",
    answerC: "Parenthesis",
    answerD: "Commas",
    correct: "B",
  },
];
// question index equal to the length of the array minus one since array starts at zero
let questionIndex = questions.length - 1;
// begin at first object and use variable currentQuestionIndex as reference
let currentQuestionIndex = 0;

// this will pull the question text and answer choices from the array based off current index
function createQuestion() {
  let quest = questions[currentQuestionIndex];
  questionText.innerHTML = "<p>" + quest.question + "</p>";
  buttonA.innerHTML = quest.answerA;
  buttonB.innerHTML = quest.answerB;
  buttonC.innerHTML = quest.answerC;
  buttonD.innerHTML = quest.answerD;
}

/* checks selected answer against correct property from the current question based off index
and, if equal, runs the function for answer is correct.  If it does not match, the function for
wrong will run.  This will also check if there are any more questions and will either run the 
next question or run the score render function. */

function checkAnswer(answer) {
  if (answer == questions[currentQuestionIndex].correct) {
    answerIsCorrect();
  } else {
    answerIsWrong();
  }
  if (currentQuestionIndex < questionIndex) {
    currentQuestionIndex++;
    // delays the progression to the next question by a second
    setTimeout(createQuestion, 1000);
  } else {
    // delays the progression to the score render by a second
    setTimeout(scoreRender, 1000);
  }
}
// displays the "Correct" message and leaves it there for a full second
function answerIsCorrect() {
  result.style.display = "block";
  result.innerText = "Correct";
  setTimeout(function () {
    result.style.display = "none";
  }, 1000);
}
// displays the "wrong" message and leaves it there for a full second.  Also subtracts 10 sec from time
function answerIsWrong() {
  sec -= 10;
  result.style.display = "block";
  result.innerText = "Wrong";
  setTimeout(function () {
    result.style.display = "none";
  }, 1000);
}
// timer is displayed in HTML and, if it reaches zero, will run the score render function
function time() {
  sec--;
  timer.innerHTML = sec;
  if (sec <= 0) {
    scoreRender();
  }
}

/* at end of the game, answers will disappear, the time will pause, and a score will be generated
A form will populate for the user to enter their initials */
function scoreRender() {
  answerBox.style.display = "none";
  questionText.innerHTML = "Your Score Is " + sec;
  localStorage.setItem("mostRecentScore", sec);
  nameForm.style.display = "block";
  submit.style.display = "block";
  restart.style.display = "block";
  result.style.display = "none";
  clearInterval(timerRun);
}
// grabs the high score from local storage or empty array for first run
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
// keeps only the highest score
const MAX_HIGH_SCORES = 1;

// arrow function that is called by clicking the submit button
addScore = e => {
    e.preventDefault();
    // score object stores initials and score
    const scoreObj = {
        initials: document.getElementById("initial").value,
        score: sec
    };
    highScores.push(scoreObj); // pushes the object data to the highScores array

    highScores.sort((a,b) => b.score - a.score)  // sorts the scores ascending

    highScores.splice(1); // cuts all other scores besides high score

    localStorage.setItem("highScores", JSON.stringify(highScores)); // sets string of array to local storage


    console.log(highScores);
    highScore.innerText = highScores[0].score; // entire array returns {object object}. .score shows score in high score field
};



 // localStorage.setItem('scoreObject', JSON.stringify(scoreObject));
// var grabbingScore = JSON.parse(localStorage.getItem("scoreObject"))
//  highScore.textContent = grabbingScore.score;

  //scoreArray.push(scoreObject);

  //console.log(scoreArray);

  //localStorage.setItem("storedScore", JSON.stringify(scoreArray));
//  var storedSec = JSON.parse(localStorage.getItem("storedScore"));

 // console.log("Get Item", localStorage.getItem("storedScore"));

  // if (sec > storedSec) {
  //     localStorage.setItem('highScore', JSON.stringify(scoreArray));
  // } else {
  //     questionText.innerHTML = "Your score is not the high score"

  // } // undefined
  // var highScore = JSON.parse(localStorage.getItem('highScore'));

  //var grabbingScore = JSON.parse(localStorage.getItem("storedScore"))
  //console.log(grabbingScore[0].score)

 //highScore.textContent = grabbingScore[0].score;

  //     highScore.appendChild(scoreArray); did not work
//};

// this function wraps back through the questions to allow the user as many attempts as they want

function restartQuiz() {
  answerBox.style.display = "block";
  infoText.style.display = "none";
  startButton.style.display = "none";
  restart.style.display = "none";
  submit.style.display = "none";
  nameForm.style.display = "none";
  currentQuestionIndex = [0];
  sec = 49;
  createQuestion();
  timerRun = setInterval(time, 1000);
}
// kicks off the quiz and timer
function quizStart() {
  answerBox.style.display = "block";
  infoText.style.display = "none";
  startButton.style.display = "none";
  restart.style.display = "none";
  createQuestion();
  timerRun = setInterval(time, 1000);
}
// event listeners for the submit button and the restart quiz button at the end of the quiz 
document.getElementById("submitScore").addEventListener("click", addScore);
document.getElementById("restartQuiz").addEventListener("click", restartQuiz);
