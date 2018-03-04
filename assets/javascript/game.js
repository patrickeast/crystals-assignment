//Grab button element c
$(document).ready(function () {
    console.log("document ready");
    var magicNumberGenerator = $("#magicNumberGenerator");
    var crystalRed = $(".crystalRed");
    var crystalBlue = $(".crystalBlue");
    var crystalYellow = $(".crystalYellow");
    var winsCounter = 0;
    var lossesCounter = 0;
    var magicButtonClicked = false;
    var winsCounter = 0;
    var lossesCounter = 0;
    var result = Math.floor(Math.random() * (100 - 50) + 50);
    var userScore = 0;
    $("#winsCounter").text("Wins: " + winsCounter);
    $("#lossesCounter").text("Losses: " + lossesCounter);
    playGame();




    function playGame() {

        function resetGame() {
            $(userScore).empty();
            
            console.log("Reset Game Started");
            magicButtonClicked = false;
            var userScore = 0;
            console.log("User Score is: " + userScore);
            var result = Math.floor(Math.random() * (100 - 50) + 50);
            console.log("MagicNumber is: " + result);
            $("#userScore").text("User Score: " + " " + userScore);
            $("#magicScore").text("Score to match: ");
            winsCounter = 0;
            lossesCounter = 0;
            
            playGame();
        };
        
        console.log("Play Game is running.");
        
        $(magicNumberGenerator).on("click", function () {
            var magicButtonClicked = true;
            var result = Math.floor(Math.random() * (100 - 50) + 50);
            $("#magicScore").html("Score to match:" + " " + result);
            console.log("The magic number is: " + result);
        });

        // if (magicButtonClicked = false) {
        //     $(".crystalRed").on("click"), function () {
        //         alert("You haven't generated a random number yet!");
        //     }
        //     $(".crystalBlue").on("click"), function () {
        //         alert("You haven't generated a random number yet!");
        //     }
        //     $(".crystalYellow").on("click"), function () {
        //         alert("You haven't generated a random number yet!");
        //     }

        // } else if (magicButtonClicked = true) {

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
            var userScore;
            winsCounter++;
            $("#winsCounter").html("Wins: " + winsCounter);
            console.log("You win!");
            alert("You Win!");
            resetGame();
        }

        function loseGame() {
            var userScore;
            lossesCounter++;
            $("#lossesCounter").html("Losses: " + lossesCounter);
            console.log("You lose!");
            alert("Your final score is " + userScore + ". You lose.");
            resetGame();
        }
    }


});