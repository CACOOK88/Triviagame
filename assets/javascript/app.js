// *************************************************
// 
//              TRIVIA QUESTION OBJECT
// 
// *************************************************
var trivia = {
    timer: 30,
    correctCounter: 0,
    wrongCounter: 0,
    questionTrack: 1,
    questionList: {
        q1: {
            id: 1,
            question: "In what year will the next halloween occur with a full moon?",
            answers: {
                wrong1: 2018,
                wrong2: 2022,
                wrong3: 2030,
                correct: 2020
            },
            img: "../images/halloween2020.jpg"
        },
        q2: {
            id: 2,
            question: "In what country was the first account of children saying \"Trick-or-Treat\" on halloween?",
            answers: {
                wrong1: "USA",
                wrong2: "Ireland",
                wrong3: "Scotland",
                correct: "Canada"
            },
            img: "../images/canadahalloween.jpg"
        },
        q3: {
            id: 3,
            question: "In what decade did Trick-or-Treating start gaining popularity in the USA?",
            answers: {
                wrong1: "70's",
                wrong2: "50's",
                wrong3: "40's",
                correct: "30's"
            },
            img: "../images/30shalloween.jpg"
        },
        q4: {
            id: 4,
            question: "About how many children have been seriously injred or killed from poisoned candy received from Trick-or-Treating?",
            answers: {
                wrong1: 1200,
                wrong2: 500,
                wrong3: 100,
                correct: 0
            },
            img: "../images/poisoncandy.jpg"
        },
        q5: {
            id: 5,
            question: "What were Jack O'lanterns originally made from?",
            answers: {
                wrong1: "Cantaloupe",
                wrong2: "Beets",
                wrong3: "Pumpkins",
                correct: "Turnips"
            },
            img: "../images/turnip.jpg"
        },
        q6: {
            id: 6,
            question: "In what country did Jack O'lantern carving originate?",
            answers: {
                wrong1: "France",
                wrong2: "Scotland",
                wrong3: "USA",
                correct: "Ireland"
            },
            img: "../images/ireland.jpg"
        },
        q7: {
            id: 7,
            question: "Pumpkins are native to what continent?",
            answers: {
                wrong1: "Asia",
                wrong2: "Europe",
                wrong3: "South America",
                correct: "North America"
            },
            img: "../images/america.jpg"
        },
        q8: {
            id: 8,
            question: "How much are American consumers expected to spend on halloween in 2018?",
            answers: {
                wrong1: "20 Billion",
                wrong2: "100 Million",
                wrong3: "10 Million",
                correct: "9 Billion"
            },
            img: "../images/spending.jpg"
        },
        q9: {
            id: 9,
            question: "What is the second most popular halloween candy?",
            answers: {
                wrong1: "Starburst",
                wrong2: "Skittles",
                wrong3: "Chocolate",
                correct: "Candy Corn"
            },
            img: "../images/candycorn.jpg"
        },
        q10: {
            id: 10,
            question: "In what state is it illegal to dress up like a priest or nun?",
            answers: {
                wrong1: "California",
                wrong2: "South Dakota",
                wrong3: "North Carolina",
                correct: "Alabama"
            },
            img: "../images/preistnun.jpg"
        }
    }
}
var timerCountdown;
function gameStart() {
    // hide start button
    $("#startButton").addClass("hidden");
    // show question box
    $(".displayBox").removeClass("hidden");
    // display question
    $(".question").text(trivia.questionList.q1.question);
    // display answers in random order and assigns correct and incorrect values
    $(".choice1").text(trivia.questionList.q1.answers.wrong1);
    $(".choice2").text(trivia.questionList.q1.answers.wrong2);
    $(".choice3").text(trivia.questionList.q1.answers.correct);
    $(".choice4").text(trivia.questionList.q1.answers.wrong3);
    // start timer
    run();
}
function run() {
    timerCountdown = setInterval(decrement, 1000);
}
function decrement() {
    trivia.timer--;
    $(".timer").text("Time Left: " + trivia.timer);
    if (trivia.timer === 0) {
        stop();
    }
}
function stop() {
    clearInterval(timerCountdown);
}
function nextQuestion() {
    // clear correct/answer screen
    // display next question in object and answers
    // reset and start timer
}




// When start button is clicked
$("#startButton").on("click", function() {
    // start game function
    gameStart();
});
// when user selects an answer
$(".choice").on("click", function() {
    // if statement to check correct or not, increment associated 
    // counter and stop timer. create and switch to win/loss screen
    // after a few seconds move to next question
    // clear .choice and question boxes
});

// Click listener for answer boxes
    // stop question timer
    // check for correct or wrong click
        // display corresponding screen
        // increment correct or wrong var
    // wait 3 seconds
    // display new question
    // reset timer and start clock