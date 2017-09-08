var quizQuestions = [
    {
        question: "Which U.S. President invented the swivel chair?",
        answers: ["John Quincy Adams", "Abraham Lincoln", "Thomas Jefferson"],
        correctAnswers: 2
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
var questionCounter = 0;

$(document).ready(function() {

    intervalId = setInterval(decrement, 1000);

    function decrement() {
        number--;
        $("#question-timer").html("<h2>" + number + "</h2>");
        if (number === 15) {
            alert('15 seconds left!')

        }


        if (number === 0) {

            stop();

            alert("Time Up!");
        }
    }

    decrement();

    function displayQuestion(question, index) {
        var q = $('<h2>');
        q.attr('data-question', index)
        q.text(question);
        $('.question-box').html('');
        q.appendTo('.question-box')
    }

    function displayAnswers(answers) {
        $('.answers-box').html('');
        for (var i = 0; i < answers.length; i++) {
            var b = $('<button>');
            b.attr('data-answers', [i]);
            b.text(answers[i]);
            console.log(answers);
            b.appendTo('.answers-box')
        }
    }


    function userSelection () {
        var userGuess;
        console.log(questionCounter);
        $("button").on("click", function() {
            userGuess = $(this).attr('data-answers')
            var  rightAnswer = quizQuestions[questionCounter].correctAnswers
            console.log('computer' + rightAnswer);
            console.log('user' + userGuess);
            if (userGuess == rightAnswer) {
                alert('correct');

                console.log("1st test" + questionCounter);
            }
            else{
                alert('wrong answer! correct answer is '+ rightAnswer);

                incorrectAnswers++;
                console.log(questionCounter,' ',incorrectAnswers);
            }
            questionCounter++;
            displayQuestion(quizQuestions[questionCounter].question, questionCounter);
            displayAnswers(quizQuestions[questionCounter].answers);
            userSelection();

            console.log("2nd test" +questionCounter);
        });
        console.log("3rdd test" +questionCounter);
    }


    displayQuestion(quizQuestions[questionCounter].question, questionCounter);
    displayAnswers(quizQuestions[questionCounter].answers);
    userSelection();



});



