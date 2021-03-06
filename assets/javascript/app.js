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
var incorrectAnswers = 0;
var unAnswered = 0
var quizOver = false;

var QUIZ_TIME = 5;//in seconds

var questionsJSON;
var questionList;

$(document).ready(function () {
    initialize();   
});

/* Event handling */
$( "#start-button" ).click(function() {
   startGame();
});

$( "#choice1" ).click(function() {
   checkAnswer(1);
});

$( "#choice2" ).click(function() {
   checkAnswer(2);
});

$( "#choice3" ).click(function() {
   checkAnswer(3);
});

$( "#choice4" ).click(function() {
   checkAnswer(4);
});

$( "#start-over" ).click(function() {
    initialize();
    startGame();
});
/* Event handling */



/* Functional methods */
var initialize = function ()
{
    currentQuestion = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    unAnswered = 0

    questionsJSON = JSON.stringify(questions);
    questionList = JSON.parse(questionsJSON);
}

var startGame = function()
{
    $('#startgame-section').css({
        display: 'none'
    });

    $('#overall-results-section').css({
        display: 'none'
    });

    $('#quiz-section').css({
        display: 'block'
    });

    currentQuestion = 1;
    displayQuestion(currentQuestion);
}

var timerFunc;
var startTimer = function()
{
    var timeleft = QUIZ_TIME;
    $("#timer").text("Time left: " + timeleft-- + " secs");
    
    timerFunc = setInterval(function(){ 
        if(timeleft === 0)
        {
            if(currentQuestion <= 5)
            {
                unAnswered++;
                
                $('#quiz-section').css({
                    display: 'none'
                });

                $('#quiz-result-section').css({
                    display: 'block'
                });

                $('#quiz-result').text("You are out of time !!");
                $('#your-correct-answer').css({
                    display: 'block'
                });
                var questionObj = questionList[currentQuestion-1];
                $('#your-correct-answer').text("Correct answer is: " + questionObj.choices[questionObj.correctAnswer-1]);
                $('#result-gif').attr({
                    src: './assets/gifs/timeout.gif'
                });
                                
                setTimeout(function() {
        
                    $('#quiz-section').css({
                        display: 'block'
                    });

                    $('#quiz-result-section').css({
                        display: 'none'
                    });

                    if(currentQuestion == 5)
                    {
                        showResults();
                    } else
                    {
                        displayNextQuestion();    
                    }
                }, 3000);
            } 
        }
        $("#timer").text("Time left: " + timeleft-- + " secs");
    }, 1000);
}

var stopTimer = function () {
    clearInterval(timerFunc);
}

var restartTimer = function()
{
    stopTimer();
    startTimer();
}

var displayQuestion = function(questionNo) 
{
    var questionObj = questionList[questionNo-1];

    $('#question').text(questionObj.question);
    
    $('#choice1').text(questionObj.choices[0]);
    $('#choice2').text(questionObj.choices[1]);
    $('#choice3').text(questionObj.choices[2]);
    $('#choice4').text(questionObj.choices[3]);

    restartTimer();
}

var displayNextQuestion = function()
{
    currentQuestion++;
    displayQuestion(currentQuestion);

    restartTimer();
}

var showResults = function()
{
    stopTimer();
    
    $('#quiz-section').css({
        display: 'none'
    });

    $('#overall-results-section').css({
        display: 'block'
    });

    $("#correct-answers").text("Correct: " + correctAnswers);
    $("#incorrect-answers").text("Incorrect: " + incorrectAnswers);
    $("#un-answered").text("Unanswered: " + unAnswered); 
}

var checkAnswer = function(choiceSelected)
{
    stopTimer();
    var questionObj = questionList[currentQuestion-1];

    $('#quiz-section').css({
        display: 'none'
    });

    $('#quiz-result-section').css({
        display: 'block'
    });
    
    if(choiceSelected == questionObj.correctAnswer)
    {
        $('#quiz-result').text("Correct !!");
        $('#your-correct-answer').css({
            display: 'none'
        });
        $('#result-gif').attr({
            src: './assets/gifs/correct-'+currentQuestion+'.gif'
        });
        correctAnswers++;

    } else
    {
        $('#quiz-result').text("Nope...");
        $('#your-correct-answer').css({
            display: 'block'
        });
        $('#result-gif').attr({
            src: './assets/gifs/wrong-'+currentQuestion+'.gif'
        });
        $('#your-correct-answer').text("Correct answer is: " + questionObj.choices[questionObj.correctAnswer-1]);
        incorrectAnswers++;
    }

    setTimeout(function() {
        
        $('#quiz-section').css({
            display: 'block'
        });

        $('#quiz-result-section').css({
            display: 'none'
        });

        if(currentQuestion < 5)
        {
            displayNextQuestion();
        } else 
        {
            showResults();
        } 
    }, 3000);
       
}
/* Functional methods */