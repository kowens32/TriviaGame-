
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

//If number hits zero
        if (number === 0) {
            alert("Time up!");
            //show correct answer
            //Keep track of incorrect answers

        }
    }

    //Each question has to be written to the DOM
    function displayQuestion(question, index) {
        var q = $('<h2>');
        q.attr('data-question', index)
        q.text(question);
        q.appendTo('.question-box')
    }

    function displayAnswers(answers) {
        for(var i = 0; i < answers.length; i++) {
            var b = $('<button>');
            b.text(answers[i])
            b.appendTo('.answers-box')
        }
    }

    function startGame() {
        var currentQuestion = 0;
        displayQuestion(quizQuestions[currentQuestion].question, currentQuestion);
        displayAnswers(quizQuestions[currentQuestion].answers);
    }

    startGame();

//If user selects correct answer, write "correct!" to the DOM and show correct answer
//Keep track of correct answers
//Move on to next question without user input by using a timer
//If user selects incorrect answer, write "incorrect!" to the DOM and show correct answer
//Keep track of incorrect answers
//Move on to next question without user input by using a timer
//Reset to new game



});

var questionNumber = $(this).attr('data-question');
var currentQuestion = quizQuestions[questionNumber];
var correctAnswerIndex = currentQuestion[correctAnswer]
var answer = currentQuestion.answers[correctAnswerIndex]






var quizQuestions = [
    {
        question: "Which U.S. President invented the swivel chair?",
        answers: ["John Quincy Adams", "Abraham Lincoln", "Thomas Jefferson"],
        correctAnswer: 2
    },
    {
        question: "Which U.S. President loved bowling so much that he put a bowling alley in the White House?",
        answers: {
                a: "Richard Nixon",
                b: "Herbert Hoover",
                c: "Calvin Coolidge",
        },
        correctAnswers: "a",
    },
    {
        question: "Which U.S. President is the only President to never be elected by the voting public?",
        answers: {
            a: "Richard Nixon",
            b: "Gerald R. Ford",
            c: "Jimmy Carter",
        },

        correctAnswers: "b",
    },

    {
        question: "Which U.S. President was terrified of the number 13?",
        answers: {
            a: "Franklin Delano Roosevelt",
            b: "Harry S. Truman",
            c: "Dwight D. Eisenhower",
        },

        correctAnswers: "a",
    },
    ];



