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
var retrievedObject;

var nameEnter = document.getElementById("initial").value;
var nameDiv = document.getElementById("nameForm");
var sec = 49;
var timerRun;
var submit = document.getElementById("submitScore");
var restart = document.getElementById("restartQuiz");
var mostRecentScore = localStorage.getItem("mostRecentScore");


var questions = [
    {
        question: "Arrays in JavaScript can be used to store:",
        answerA: "Numbers and Strings",
        answerB: "Other Arrays",
        answerC: "Booleans",
        answerD: "All of the above",
        correct: "D"
    },
    {
        question: "Commonly used data types Do Not include:",
        answerA: "Strings",
        answerB: "Booleans",
        answerC: "Alerts",
        answerD: "Numbers",
        correct: "C"
    },
    {
        question: "The condition of an If/Else statement is enclosed with:",
        answerA: "Parenthesis",
        answerB: "Curly Brace",
        answerC: "Square Brackets",
        answerD: "Quotes",
        correct: "A"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables:",
        answerA: "Curly Brackets",
        answerB: "Quotes",
        answerC: "Parenthesis",
        answerD: "Commas",
        correct: "B"
    }
];

let questionIndex = questions.length - 1;
let currentQuestionIndex = 0;


function createQuestion() {
    let quest = questions[currentQuestionIndex];
    questionText.innerHTML = "<p>" + quest.question + "</p>";
    buttonA.innerHTML = quest.answerA;
    buttonB.innerHTML = quest.answerB;
    buttonC.innerHTML = quest.answerC;
    buttonD.innerHTML = quest.answerD;

}




function checkAnswer(answer) {
    if(answer == questions[currentQuestionIndex].correct) {
        answerIsCorrect();
    }else{
        answerIsWrong();
    }
    if(currentQuestionIndex < questionIndex) {
        currentQuestionIndex++;
        
        setTimeout(createQuestion(), 1000);

    }else {
        setTimeout(scoreRender, 1000);
    }
}

function answerIsCorrect() {

    result.style.display = 'block';
    result.innerText = "Correct";
    setTimeout(function() {
        result.style.display = 'none';
    }, 1000);
}
function answerIsWrong() {
    sec -= 10;
    result.style.display = 'block';
    result.innerText = "Wrong";
    setTimeout(function() {
        result.style.display = 'none';
    }, 1000);


}

function time() {
    sec--;
    timer.innerHTML = sec;
        if (sec < 0) {
            scoreRender();
        }
}


function scoreRender() {
    answerBox.style.display = 'none';
    questionText.innerHTML = "Your Score Is " + sec;
    nameForm.style.display = 'block';
    submit.style.display = 'block';
    restart.style.display = 'block';
    result.style.display = 'none';
    clearInterval(timerRun);

} 



function submitScore (e) {
    var scoreObj = {
        initials: nameEnter,
        score: sec
    };
    
    localStorage.setItem('scoreObj', JSON.stringify(scoreObj));
    
    retrievedObject = localStorage.getItem('scoreObj');
    
    console.log('retrievedObject: ', JSON.parse(retrievedObject));
    
    highScore.innerHTML = retrievedObject;

}

function restartQuiz() {
    answerBox.style.display = 'block';
    infoText.style.display = 'none';
    startButton.style.display = 'none';
    restart.style.display = 'none';
    submit.style.display = 'none';
    nameForm.style.display = 'none';
    currentQuestionIndex = [0];
    sec = 49;
    createQuestion();
    timerRun = setInterval(time, 1000);
}


function quizStart() {
    answerBox.style.display = 'block';
    infoText.style.display = 'none';
    startButton.style.display = 'none';
    restart.style.display = 'none';
    createQuestion();
    timerRun = setInterval(time, 1000);
};









