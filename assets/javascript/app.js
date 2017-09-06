
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



function buildQiuz(){
    //store the HTML output
    const output = [];

    //for each question
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            //store the list of answer choices
        const answers = [];

        //and for each available answer...
        for(letter in currentQuestion.answers){

            // ...add an HTML radio button
            answers.push(
                <label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
            ${currentQuestion.answers[letter]}
            </label>
            );
        }

        //add this question and its answer to the output
    output.push(
        '<div class="question"> ${currentQuestion.question}
    </div>
    <div class="answers"> ${answers.join('')}</div>'
    );
    }
    );

    //combines the output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');


}



//
//
//
//
// const quizQuestions = [
//     {
//         question: "Which U.S. President invented the swivel chair?",
//         answers: {
//             a: "John Quincy Adams",
//             b: "Abraham Lincoln",
//             c: "Thomas Jefferson",
//         }
//     correctAnswer: "c"
//     },
//     {
//         question: "Which U.S. President loved bowling so much that he put a bowling alley in the White House?",
//     answers: {
//             a: "Richard Nixon",
//             b: "Herbert Hoover",
//             c: "Calvin Coolidge",
//     },
//
//         correctAnswers: "a",
//     },
//     {
//         question: "Which U.S. President is the only President to never be elected by the voting public?",
//         answers: {
//             a: "Richard Nixon",
//             b: "Gerald R. Ford",
//             c: "Jimmy Carter",
//         },
//
//         correctAnswers: "b",
//     },
//
//     {
//         question: "Which U.S. President was terrified of the number 13?",
//         answers: {
//             a: "Franklin Delano Roosevelt",
//             b: "Harry S. Truman",
//             c: "Dwight D. Eisenhower",
//         },
//
//         correctAnswers: "a",
//     },
//     ];
//
//
//
