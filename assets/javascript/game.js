

$("#youWin").hide();
$("#youLose").hide();
var result = Math.floor(Math.random() * (100 - 50) + 50);
var magicNumberGenerator = $("#magicNumberGenerator");
var crystalRed = $(".crystalRed");
var crystalBlue = $(".crystalBlue");
var crystalYellow = $(".crystalYellow");
var winsCounter = 0;
var lossesCounter = 0;
var magicButtonClicked = false;
var winsCounter = 0;
var lossesCounter = 0;
var userScore = 0;


// On game reset, I need to unbind the click events that occur, clear out values, and reset the random number.
function resetGame() {
    $("#youWin").hide();
    $("#youLose").hide();
    $(".crystalRed").unbind("click");
    $(".crystalYellow").unbind("click");
    $(".crystalBlue").unbind("click");
    $(".crystalPurple").unbind("click");
    console.log("Reset Game Started");
    magicButtonClicked = false;
    userScore = 0;
    $("#userScore").text("User Score: ");
    $("#magicScore").text("Score to match: ");
    result = Math.floor(Math.random() * (200 - 50) + 50);
    playGame();
};

function playGame() {
    $("#youWin").hide();
    $("#youLose").hide();
    $(magicNumberGenerator).unbind("click");
    $("#winsCounter").text("Wins: " + winsCounter);
    $("#lossesCounter").text("Losses: " + lossesCounter);

    console.log("Play Game is running.");

    $(magicNumberGenerator).on("click", function () {
        magicButtonClicked = true;
        $("#magicScore").html("Score to match:" + " " + result);
        console.log("The magic number is: " + result);
    });

    if ($(".crystalRed").on("click", function () {
        userScore = (userScore + 1);
        $("#userScore").html("User Score: " + " " + userScore);
        console.log("User Score is: " + userScore + " And the Magic Number is: " + result);
        if (userScore == result) {
            winGame();
        } else if (userScore > result) {
            loseGame();
        }
    }));

    if ($(".crystalBlue").on("click", function () {
        userScore = (userScore + 10);
        $("#userScore").text("User Score: " + " " + userScore);
        console.log("User Score is: " + userScore + " And the Magic Number is: " + result);
        if (userScore === result) {
            winGame();
        } else if (userScore > result) {
            loseGame();
        }
    }));

    if ($(".crystalYellow").on("click", function () {
        userScore = (userScore + 3);
        $("#userScore").text("User Score: " + " " + userScore);
        console.log("User Score is: " + userScore + " And the Magic Number is: " + result);
        if (userScore === result) {
            winGame();
        } else if (userScore > result) {
            loseGame();
        }
    }));

    if ($(".crystalPurple").on("click", function () {
        userScore = (userScore + 7);
        $("#userScore").text("User Score: " + " " + userScore);
        console.log("User Score is: " + userScore + " And the Magic Number is: " + result);
        if (userScore === result) {
            winGame();
        } else if (userScore > result) {
            loseGame();
        }
    }));
}


function winGame() {
    winsCounter++;
    $("#winsCounter").html("Wins: " + winsCounter);
    console.log("You win!");
    
    $("#youWin").show();
    setInterval(function () {
        $("#youWin").hide();
    }, 2000);

    setTimeout(function () {
        resetGame();
    }, 2000);
}


function loseGame() {
    lossesCounter++;
    $("#lossesCounter").html("Losses: " + lossesCounter);
    console.log("You lose!");
    $("#youLose").show();
    
    setInterval(function () {
        $("#youLose").hide();
    }, 2000);
    
    setTimeout(function () {
        resetGame();
    }, 2000);}

playGame();
