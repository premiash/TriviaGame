
var questions = [{
    question: "Choose the correct HTML element for the largest heading?",
    choices: ["<h6>", "<heading>", "<h1>", "<head>"],
    correctAnswer: 3
}, {
    question: "In what year was the first Apple computer released??",
    choices: ["1976", "1980", "1985", "1990"],
    correctAnswer: 1
}, {
    question: "In computer science, what does 'GUI' stand for?",
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



	// This displays the current question and the choices
function displayCurrentQuestion() {

    console.log("In display current Question");
    
    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".question");
    var choiceList = $(document).find(".choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    // Set the questionClass text to the current question
    $(question).text(currentquestion);



    var choice;

    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li>' + '<input type="radio"' + i + 'name="dynradio" />' + choice + '</li>').appendTo(choiceList);
        console.log(choice);
    	}

	}
})

