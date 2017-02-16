
var questions = [{
    question: "Choose the correct HTML element for the largest heading?",
    choices: ["<h6>", "<heading>", "<h1>", "<head>"],
    correctAnswer: 3
}, {
    question: "In what year was the first Apple computer released??",
    choices: ["1976", "1980", "1985", "1990"],
    correctAnswer: 1
}, {
    question: "In computer science, what does 'GUI' stand for??",
    choices: ["Graphical user implementation", "Graphical user index", 
    "Geographical user interface", "Graphical user interface"],
    correctAnswer: 4
}, {
    question: "What year was Facebook founded?",
    choices: ["2005", "2006", "2004", "2000"],
    correctAnswer: 3
}, {
    question: "What does CSS Stands for?",
    choices: ["Computer Styled Sections", "Cascading Style Sheets", 
    "Crazy Solid Shapes", "None of the above"],
    correctAnswer: 2
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;






// $( "#start-button" ).click(function() {
  
//   displayCurrentQuestion();
// });

$(document).ready(function () {

	displayCurrentQuestion();

	value = $("input[type='radio']:checked").val();

	if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }
                currentQuestion++; 

    if (currentQuestion < questions.length) {
     
     	displayCurrentQuestion();
        

           } 

        else if (currentQuestion >= questions.length) {
                    displayScore();
                    quizOver = true;
            }

        else {
        	
        	quizOver = false;
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }

	// This displays the current question and the choices
function displayCurrentQuestion() {

    console.log("In display current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quiz_panel > .question");
    var choiceList = $(document).find(".quiz_panel > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    // Set the questionClass text to the current question
    $(questionClass).text(question);

    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();

    var choice;

    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + 'name="dynradio">' + choice + '</li>').appendTo('choiceList');
    	}

	}
})

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".quiz_panel > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".quiz_panel > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}


