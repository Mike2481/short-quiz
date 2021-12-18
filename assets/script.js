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




var questions = [
    {
        question: "insert question 1 here",
        answerA: "give an answer choice",
        answerB: "give an answer choice",
        answerC: "give an answer choice",
        answerD: "correct answer",
        correct: "D"
    },
    {
        question: "insert question 2 here",
        answerA: "give an answer choice",
        answerB: "give an answer choice",
        answerC: "correct answer",
        answerD: "give an answer choice",
        correct: "C"
    },
    {
        question: "insert question 3 here",
        answerA: "correct answer",
        answerB: "give an answer choice",
        answerC: "give an answer choice",
        answerD: "give an answer choice",
        correct: "A"
    },
    {
        question: "insert question 4 here",
        answerA: "give an answer choice",
        answerB: "correct answer",
        answerC: "give an answer choice",
        answerD: "give an answer choice",
        correct: "B"
    }
];

let questionIndex = questions.length - 1;
let runningQuestionIndex = 0;

function renderQuestion() {
    let q = questions[runningQuestionIndex];
    questionText.innerHTML = "<p>" + q.question + "</p>";
    buttonA.innerHTML = q.answerA;
    buttonB.innerHTML = q.answerB;
    buttonC.innerHTML = q.answerC;
    buttonD.innerHTML = q.answerD;

}

//let timer = 85;


let score = 0;

function checkAnswer(answer) {
    if(answer == questions[runningQuestionIndex].correct) {
        answerIsCorrect();
    }else{
        answerIsWrong();
    }
    if(runningQuestionIndex < questionIndex) {
        runningQuestionIndex++;
        setTimeout(renderQuestion(), 3000);
    }else {
        scoreRender();
    }
}

function answerIsCorrect() {

    result.style.display = 'block';

    result.innerText = "Correct";
}
function answerIsWrong() {
    result.style.display = 'block';
    result.innerText = "Wrong";
    // need 10 second off time
}

function time() {
    var sec = 49;
    var timerRun = setInterval(function(){
        timer.innerHTML = '00: '+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timerRun);
        }
    }, 1000);
    


}

/*function scoreRender() {
    // need to convert time left to high score
} */


function swapThem() {
    answerBox.style.display = 'block';
    infoText.style.display = 'none';
    startButton.style.display = 'none';
    renderQuestion();
    time();

};




    /*this populates the first 
    question, but I need to cycle through all of them with a pause, function rightWrong,
    time reduction (if applicable), and end quiz after last question. */
   /* questions.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add("button2")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerBox.appendChild(button)
    })

}

function rightWrong() {
    var selectedChoice;
    if (questions[0].correctAnswer) {
        result.innerHTML = "Correct";
        result.style.display = 'block';
    } else {
        result.innerHTML = "Wrong";
        result.style.display = 'block';
    }
};
*/




