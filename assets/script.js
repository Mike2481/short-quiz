var highScore = document.getElementById("high").innerHTML = "View High Score";
var timer = document.getElementById("time").innerHTML = "Time Remaining";
var questionText = document.getElementById("message");
var infoText = document.getElementById("info");
var startButton = document.getElementById("start");
var answerBox = document.getElementById("choices");
var result = document.getElementById("result");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");

var questions = [
    {
        question: "insert question 1 here",
        answers: [
            { text: "give an answer choice", correct: false },
            { text: "give an answer choice", correct: false },
            { text: "give an answer choice", correct: false },
            { text: "this is the right answer", correct: true },
        ]
    },
   /* {
        question: "insert question 2 here",
        answers: {
            a: "give an answer choice",
            b: "give an answer choice",
            c: "give an answer choice",
            d: "give an answer choice"
        },
        correctAnswer: "c"
    },
    {
        question: "insert question 3 here",
        answers: {
            a: "give an answer choice",
            b: "give an answer choice",
            c: "give an answer choice",
            d: "give an answer choice"
        },
        correctAnswer: "a"
    },
    {
        question: "insert question 4 here",
        answers: {
            a: "give an answer choice",
            b: "give an answer choice",
            c: "give an answer choice",
            d: "give an answer choice"
        },
        correctAnswer: "b"
    }*/
];


function swapThem() {
    answerBox.style.display = 'block';
    infoText.style.display = 'none';
    startButton.style.display = 'none';
    questionText.innerHTML = questions[0].question /*this populates the first 
    question, but I need to cycle through all of them with a pause, function rightWrong,
    time reduction (if applicable), and end quiz after last question. */
    questions.answers.forEach(answer => {
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





