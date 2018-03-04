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


function playGame() {
    $("#winsCounter").text("Wins: " + winsCounter);
    $("#lossesCounter").text("Losses: " + lossesCounter);
    
    
    function resetGame() {
        $(result).empty();
        $(userScore).empty();
        console.log("Reset Game Started");
        magicButtonClicked = false;
        userScore = 0;
        $("#userScore").text("User Score: " + " " + userScore);
        $("#magicScore").text("Score to match: ");

        playGame();
    };

    console.log("Play Game is running.");

    $(magicNumberGenerator).on("click", function () {
        magicButtonClicked = true;
        $("#magicScore").html("Score to match:" + " " + result);
        console.log("The magic number is: " + result);
    });

    $(".crystalRed").on("click", function () {
        userScore = (userScore + 1);
        $("#userScore").html("User Score: " + " " + userScore);
        console.log("User Score is: " + userScore + " And the Magic Number is: " + result);
        if (userScore == result) {
            winGame();
        } else if (userScore > result) {
            loseGame();
        }
    });

    $(".crystalBlue").on("click", function () {
        userScore = (userScore + 10);
        $("#userScore").text("User Score: " + " " + userScore);
        console.log("User Score is: " + userScore + " And the Magic Number is: " + result);
        if (userScore == result) {
            winGame();
        } else if (userScore > result) {
            loseGame();
        }
    });

    $(".crystalYellow").on("click", function () {
        userScore = (userScore + 3);
        $("#userScore").text("User Score: " + " " + userScore);
        console.log("User Score is: " + userScore + " And the Magic Number is: " + result);
        if (userScore == result) {
            winGame();
        } else if (userScore > result) {
            loseGame();
        }
    });

    function winGame() {
        winsCounter ++;
        $("#winsCounter").html("Wins: " + winsCounter + 1);
        console.log("You win!");
        alert("You Win!");
        resetGame();
    }

    function loseGame() {
        lossesCounter++;
        $("#lossesCounter").html("Losses: " + lossesCounter);
        console.log("You lose!");
        alert("Your final score is " + userScore + ". You lose.");
        resetGame();
    }
}



playGame();
