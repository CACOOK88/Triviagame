// *************************************************
// 
//              TRIVIA QUESTION OBJECT
// 
// *************************************************
var trivia = {
    timer: 30,
    correctCounter: 0,
    wrongCounter: 0,
    questionTrack: 0,
    questionList: [
        {
            id: 1,
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
            id: 2,
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
            id: 3,
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
            id: 4,
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
            id: 5,
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
            id: 6,
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
            id: 7,
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
            id: 8,
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
            id: 9,
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
            id: 10,
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
var timerCountdown;
var clicked;
var currentQuestion = 0;
function gameStart() {
    // hide start button
    $("#startButton").addClass("hidden");
    // show question box
    displayQuestion();
}
function runTimer() {
    timerCountdown = setInterval(decrement, 1000);
}
function decrement() {
    trivia.timer--;
    $(".timer").text("Time Left: " + trivia.timer);
    if (trivia.timer === 0) {
        stop();
        // hide questionBox
        $(".questionBox").addClass("hidden"); 
    }
}
function stop() {
    clearInterval(timerCountdown);
}
function displayQuestion() {
    $(".displayBox, .questionBox").removeClass("hidden");
    $(".questionAnswer").empty();
    $(".correctText").empty();
    $("#image").attr("src", "");
    // display question
    $(".question").text(trivia.questionList[currentQuestion].question);
    // display answers and assigns correct and incorrect values
    $(".choice1").text(trivia.questionList[currentQuestion].answers.wrong1).attr("value", "wrong");
    $(".choice2").text(trivia.questionList[currentQuestion].answers.wrong2).attr("value", "wrong");
    $(".choice3").text(trivia.questionList[currentQuestion].answers.correct).attr("value", "correct");
    $(".choice4").text(trivia.questionList[currentQuestion].answers.wrong3).attr("value", "wrong");
    trivia.timer = 30;
    runTimer();
}
function checkCorrect(e) {
    // create variable to grab clicked value attribute
    clicked = e.currentTarget.attributes[1].value;
    // stop timer
    stop();
    // hide questionBox
    $(".questionBox").addClass("hidden"); 
    // show correct screen
    correctScreen();
    if (clicked === "correct") {
        // increment correctCounter
        trivia.correctCounter++;
    } else {
        // increment wrongCounter
        trivia.wrongCounter++;
    }
    currentQuestion++;
}
function correctScreen() {
    $(".correctText").text("The correct answer is " + trivia.questionList[currentQuestion].answers.correct);
    $("#image").attr("src", trivia.questionList[currentQuestion].img);

}
function nextQuestion() {
    // only run when questions are left.
    if (currentQuestion <= trivia.questionList.length -1) {
        // next question after delay
        setTimeout(function() {
            displayQuestion();
        }, 500);
    }
}
function endGame() {
    setTimeout(function() {
        // display end game screen here

        // *******************************************
    }, 3000);
}


// When start button is clicked
$("#startButton").on("click", gameStart);
// when user selects an answer
$(".choice").on("click", function(e) {
    
    if (currentQuestion <= trivia.questionList.length -1) {
        checkCorrect(e);
        nextQuestion();
    }
    if (currentQuestion == trivia.questionList.length) {
        console.log("end game");
    }
});