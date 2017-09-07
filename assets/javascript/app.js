
var quizQuestions = [
    {
        question: "Which U.S. President invented the swivel chair?",
        answers: ["John Quincy Adams", "Abraham Lincoln", "Thomas Jefferson"],
        correctAnswer: 2
    },
    {
        question: "Which U.S. President loved bowling so much that he put a bowling alley in the White House?",
        answers: ["Richard Nixon", "Herbert Hoover", "Calvin Coolidge"],
        correctAnswers: 0
    },
    {
        question: "Which U.S. President is the only President to never be elected by the voting public?",
        answers: ["Richard Nixon", "Gerald R. Ford", "Jimmy Carter"],
        correctAnswers: 1
    },

    {
        question: "Which U.S. President was terrified of the number 13?",
        answers: ["Franklin Delano Roosevelt", "Harry S. Truman", "Dwight D. Eisenhower"],
        correctAnswers: 0
    }
];



//Need to create a timer that counts down from 30 seconds
var number = 31;
var intervalId;
var correctAnswers = 0;
var incorrectAnswers = 0;


$(document).ready(function(){
    intervalId = setInterval(decrement, 1000);
    function decrement () {
        number--;
        $("#question-timer").html("<h2>" + number + "</h2>");
        if (number === 0) {
            alert("Time up!");
        }
    }
    decrement();


    function displayQuestion(question, index) {
        var q = $('<h2>');
        q.attr('data-question', index)
        q.text(question);
        q.appendTo('.question-box')
    }

    function displayAnswers(answers) {
        for(var i = 0; i < answers.length; i++) {
            var b = $('<button>');
            b.attr('data-answers',[i]);
            b.text(answers[i]);
            b.appendTo('.answers-box')
        }
    }

    function startGame() {
            var currentQuestion = 1;
            displayQuestion(quizQuestions[currentQuestion].question,currentQuestion);
            displayAnswers(quizQuestions[currentQuestion].answers);

        }


    startGame();

    function userSelection () {
        var userGuess;
        $("button").on("click", function() {
            var userGuess = $(this).attr('data-answers');
            console.log("what is "+userGuess);
        });
    }
   userSelection();

    function gameLogic() {

    }
    gameLogic();

});


var questionNumber = $(this).attr('data-question');
var currentQuestion = quizQuestions[questionNumber];
var correctAnswerIndex = currentQuestion[correctAnswers];
var correctAnswer = currentQuestion.answers[correctAnswerIndex];




