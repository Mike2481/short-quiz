var highScore = document.getElementById("high").innerHTML = "View High Score";
var timer = document.getElementById("time").innerHTML = "Time Remaining";
var questionText = document.getElementById("message");
var infoText = document.getElementById("info");
var startButton = document.getElementById("start");
var answerBox = document.getElementById("choices");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");
var resultText = document.getElementById("result");

var questions = [
    {
        "question": "insert question 1 here",
        "option1": "give an answer choice",
        "option2": "give an answer choice",
        "option3": "give an answer choice",
        "option4": "give an answer choice",

        "answer": "give correct answer"
    },
    {
        "question": "insert question 2 here",
        "option1": "give an answer choice",
        "option2": "give an answer choice",
        "option3": "give an answer choice",
        "option4": "give an answer choice",

        "answer": "give correct answer"
    },
    {
        "question": "insert question 3 here",
        "option1": "give an answer choice",
        "option2": "give an answer choice",
        "option3": "give an answer choice",
        "option4": "give an answer choice",

        "answer": "give correct answer"

    },
    {
        "question": "insert question 4 here",
        "option1": "give an answer choice",
        "option2": "give an answer choice",
        "option3": "give an answer choice",
        "option4": "give an answer choice",

        "answer": "give correct answer"

    }
]



console.log(highScore);