
//Need to create a timer that counts down from 30 seconds
var number = 31;
var intervalId;
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
//If user selects correct answer, alert "correct!"
//Keep track of correct answers
//Move on to next question without user input by using a timer
//If user selects incorrect answer, alert "incorrect!" with correct answer
//Keep track of incorrect answers
//Move on to next question without user input by using a timer
//Reset to new game



});











const quizQuestions = [
    {
        question: "Which U.S. President invented the swivel chair?",
        answers: {
            a: "John Quincy Adams",
            b: "Abraham Lincoln",
            c: "Thomas Jefferson",
        }
    correctAnswer: "c"
    },
    {
        question: "Which U.S. President loved bowling so much that he put a bowling alley in the White House?",
    answers: {
            a: "Richard Nixon",
            b:
    }

    }


    ]



