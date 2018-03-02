//Grab button element
var magicNumberGenerator = $("#magicNumberGenerator");
var crystalRed = $(".crystalRed");
var crystalBlue = $(".crystalBlue");
var crystalYellow = $(".crystalYellow");
var userScore = 0;
magicNumberGenerator.on("click", function (number) {
    var result = Math.floor(Math.random() * (200 - 50) + 50);
    $(".magicScore").html("Score to match:" + " " + result);
    console.log(result);
    return;
});

if ($(".crystalRed").on("click", function () {
    $("#userScore").text("User Score: " + " " + (userScore + 1));
    console.log(userScore);
})); else if ($(".crystalBlue").on("click", function () {
    $("#userScore").text("User Score: " + " " + (userScore + 10));
    console.log(userScore);
})); else if ($(".crystalYellow").on("click", function () {
    $("#userScore").text("User Score: " + " " + (userScore + 3));
    console.log(userScore);
}));