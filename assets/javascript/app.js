// *************************************************
// 
//              TRIVIA QUESTION OBJECT
// 
// *************************************************
var trivia = {
    timer: 30,
    correctCounter: 0,
    wrongCounter: 0,
    currentQuestion: 0,
    clicked: "",
    endImg: "../assets/images/blackpumpkin.jpg",
    questionList: [
        {
            question: "In what year will the next halloween occur with a full moon?",
            answers: {
                wrong1: 2018,
                wrong2: 2022,
                wrong3: 2030,
                correct: 2020
            },
            img: "../assets/images/halloween2020.jpg"
        },
        {
            question: "In what country was the first account of children saying \"Trick-or-Treat\" on halloween?",
            answers: {
                wrong1: "USA",
                wrong2: "Ireland",
                wrong3: "Scotland",
                correct: "Canada"
            },
            img: "../assets/images/canadahalloween.jpg"
        },
        {
            question: "In what decade did Trick-or-Treating start gaining popularity in the USA?",
            answers: {
                wrong1: "70's",
                wrong2: "50's",
                wrong3: "40's",
                correct: "30's"
            },
            img: "../assets/images/30shalloween.jpg"
        },
        {
            question: "About how many children have been seriously injred or killed from poisoned candy received from Trick-or-Treating?",
            answers: {
                wrong1: 1200,
                wrong2: 500,
                wrong3: 100,
                correct: 0
            },
            img: "../assets/images/poisoncandy.jpg"
        },
        {
            question: "What were Jack O'lanterns originally made from?",
            answers: {
                wrong1: "Cantaloupe",
                wrong2: "Beets",
                wrong3: "Pumpkins",
                correct: "Turnips"
            },
            img: "../assets/images/turnip.jpg"
        },
        {
            question: "In what country did Jack O'lantern carving originate?",
            answers: {
                wrong1: "France",
                wrong2: "Scotland",
                wrong3: "USA",
                correct: "Ireland"
            },
            img: "../assets/images/ireland.jpg"
        },
        {
            question: "Pumpkins are native to what continent?",
            answers: {
                wrong1: "Asia",
                wrong2: "Europe",
                wrong3: "South America",
                correct: "North America"
            },
            img: "../assets/images/america.jpg"
        },
        {
            question: "How much are American consumers expected to spend on halloween in 2018?",
            answers: {
                wrong1: "20 Billion",
                wrong2: "100 Million",
                wrong3: "10 Million",
                correct: "9 Billion"
            },
            img: "../assets/images/spending.jpg"
        },
        {
            question: "What is the second most popular halloween candy?",
            answers: {
                wrong1: "Starburst",
                wrong2: "Skittles",
                wrong3: "Chocolate",
                correct: "Candy Corn"
            },
            img: "../assets/images/candycorn.jpg"
        },
        {
            question: "In what state is it illegal to dress up like a priest or nun?",
            answers: {
                wrong1: "California",
                wrong2: "South Dakota",
                wrong3: "North Carolina",
                correct: "Alabama"
            },
            img: "../assets/images/preistnun.png"
        }
    ]
}
// *************************************************
// 
//              VARIABLES
// 
// *************************************************
var timerCountdown;
// *************************************************
// 
//        START END AND RESET FUNCTIONS
// 
// *************************************************
function gameStart() {
    // hide start button
    $("#startButton").addClass("hidden");
    // show question box
    displayQuestion();
}
function endGame() {
    // run end game function at set delay after last question is answered
    setTimeout(function() {
        // clear any question or answer information
        $(".timer").empty();
        $(".correctAnswer").empty();
        $(".correctText").empty();
        $("#image").attr("src", "");
        // display end game screen here
        // update screen with the correct and incorrect counters
        $("#answersCorrect").text("You got " + trivia.correctCounter + " correct!");
        $("#answersWrong").text("You got " + trivia.wrongCounter + " Wrong");
        $("#endImage").attr("src", trivia.endImg)
        // show reset button
        $("#resetButton").removeClass("hidden");
    }, 3000);
}
function reset() {
    // hide display boxes, clear text and images
    $("#resetButton, .displayBox").addClass("hidden");
    $("#answersCorrect, #answersWrong").empty();
    $("#endImage").attr("src", "");
    // reset counters to default starting point
    trivia.correctCounter = 0;
    trivia.wrongCounter = 0;
    trivia.timer = 20;
    trivia.currentQuestion = 0;
    // show start button
    $("#startButton").removeClass("hidden");
    // reset timer text to default
    $(".timer").text("Time Left: 20");
}
// *************************************************
// 
//              TIMER FUNCTIONS
// 
// *************************************************
function runTimer() {
    // set screen timer to default
    $(".timer").text("Time Left: 20");
    // run decrement to count down the seconds
    timerCountdown = setInterval(decrement, 1000);
}
function decrement() {
    // counter to keep track
    trivia.timer--;
    // update timer on screen every second ( this is coming from runTimer() )
    $(".timer").text("Time Left: " + trivia.timer);
    // When the timer reaches zero without a selection:
    if (trivia.timer === 0) {
        // stop timer
        stop();
        // hide questionBox
        $(".questionBox").addClass("hidden"); 
        // update screen and tell user they didnt make a selection
        noGuess();
        // move to next question selector
        trivia.currentQuestion++;
        // add 1 to incorrect counter
        trivia.wrongCounter++;
        // run function to display next question to the screen
        nextQuestion();
    }
}
function stop() {
    // this stops the timer
    clearInterval(timerCountdown);
}
// *************************************************
// 
//  CHECKING ANSWER AND UPDATE SCREEN FUNCTIONS
// 
// *************************************************
function displayQuestion() {
    // show the display box
    $(".displayBox, .questionBox").removeClass("hidden");
    // make sure there is no text or images on the screen
    $(".correctAnswer").empty();
    $(".correctText").empty();
    $("#image").attr("src", "");
    // display question
    $(".question").text(trivia.questionList[trivia.currentQuestion].question);
    // display answers and assigns correct and incorrect values
    $(".choice1").text(trivia.questionList[trivia.currentQuestion].answers.wrong1).attr("value", "wrong");
    $(".choice2").text(trivia.questionList[trivia.currentQuestion].answers.wrong2).attr("value", "wrong");
    $(".choice3").text(trivia.questionList[trivia.currentQuestion].answers.correct).attr("value", "correct");
    $(".choice4").text(trivia.questionList[trivia.currentQuestion].answers.wrong3).attr("value", "wrong");
    // reset timer
    trivia.timer = 20;
    // restart timer countdown
    runTimer();
}
function nextQuestion() {
    // only run when questions are left.
    if (trivia.currentQuestion <= trivia.questionList.length -1) {
        // display next question after delay
        setTimeout(function() {
            displayQuestion();
        }, 3000);
    } else {
        endGame();
        console.log("end game")
    }
}
function checkCorrect(e) {
    // create variable to grab clicked value attribute
    trivia.clicked = e.currentTarget.attributes[1].value;
    // stop timer
    stop();
    // hide questionBox
    $(".questionBox").addClass("hidden"); 
    // if else to check correct selection or not
    if (trivia.clicked === "correct") {
        // increment correctCounter
        trivia.correctCounter++;
        // if correct, show correct screen
        correctScreen();
    } else {
        // increment wrongCounter
        trivia.wrongCounter++;
        // if incorrect show wrong screen
        wrongScreen();
    }
    // move to next question counter
    trivia.currentQuestion++;
}
function correctScreen() {
    // update screen with correct and information
    $(".correctAnswer").text("You are Correct!!!!")
    $(".correctText").text("The answer is " + trivia.questionList[trivia.currentQuestion].answers.correct);
    $("#image").attr("src", trivia.questionList[trivia.currentQuestion].img);
}
function wrongScreen() {
    // update screen with wrong and information
    $(".correctAnswer").text("You are NOT Correct")
    $(".correctText").text("The correct answer is " + trivia.questionList[trivia.currentQuestion].answers.correct);
    $("#image").attr("src", trivia.questionList[trivia.currentQuestion].img);
}
function noGuess() {
    // update screen with no choice and information
    $(".correctAnswer").text("You ran out of time!!!")
    $(".correctText").text("The correct answer is " + trivia.questionList[trivia.currentQuestion].answers.correct);
    $("#image").attr("src", trivia.questionList[trivia.currentQuestion].img);
}
// *************************************************
// 
//              GAMEPLAY
// 
// *************************************************
// When start button is clicked
$("#startButton").on("click", gameStart);
// when user selects an answer
$(".choice").on("click", function(e) {
    
    if (trivia.currentQuestion <= trivia.questionList.length -1) {
        checkCorrect(e);
        nextQuestion();
    }
});
// When reset button is clicked
$("#resetButton").on("click", reset);