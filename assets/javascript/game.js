


//Global Variables
var blueGem = 0;
var greenGem = 0;
var pinkGem = 0;
var yellowGem = 0;

var currentNumber = 0;
var goalNumber = 0;

var wins = 0;
var losses = 0;

//make sure document loads before doing anything
$(document).ready(function () {

    //Main Process
    startUp();
    clickGems();
    winner();
    loser();






})

function startUp() {
    //set random numbers for goal, and each crystal
    goalNumber = Math.floor(Math.random() * 102 + 19)
    blueGem = Math.floor(Math.random() * 12 + 1);
    greenGem = Math.floor(Math.random() * 12 + 1);
    pinkGem = Math.floor(Math.random() * 12 + 1);
    yellowGem = Math.floor(Math.random() * 12 + 1);

    console.log(blueGem, greenGem, pinkGem, yellowGem, goalNumber)

    //shows goal number and current number
    $(".randomNumberDiv").text(goalNumber);
    $("#currentScore").text(currentNumber);

    //show wins and losses
    $("#wins").text("wins: "+wins);
    $("#losses").text("losses: "+losses);
}


function clickGems() {
    $("#blue").click(function () {
        currentNumber = currentNumber + blueGem;
        $("#currentScore").text(currentNumber);

    })
    $("#green").click(function () {
        currentNumber = currentNumber + greenGem;
        $("#currentScore").text(currentNumber);
    })
    $("#pink").click(function () {
        currentNumber = currentNumber + pinkGem;
        $("#currentScore").text(currentNumber);
    })
    $("#yellow").click(function () {
        currentNumber = currentNumber + yellowGem;
        $("#currentScore").text(currentNumber);
    })
}
//give win text, add to win number, and reset variables. Set it for each separate crystal
function winner() {
    $("#blue").click(function () {
        if (currentNumber == goalNumber && currentNumber != 0 && goalNumber != 0) {
            $("#text").text("You won!");
            wins++;
            $("#wins").text("wins: " + wins);
            currentNumber = 0;
            $("#currentScore").text(currentNumber);
            goalNumber = Math.floor(Math.random() * 102 + 19)
            $(".randomNumberDiv").text(goalNumber);
            blueGem = Math.floor(Math.random() * 12 + 1);
            greenGem = Math.floor(Math.random() * 12 + 1);
            pinkGem = Math.floor(Math.random() * 12 + 1);
            yellowGem = Math.floor(Math.random() * 12 + 1);

        }
    })
    $("#green").click(function () {
        if (currentNumber == goalNumber && currentNumber != 0 && goalNumber != 0) {
            $("#text").text("You won!");
            wins++;
            $("#wins").text("wins: " + wins);
            currentNumber = 0;
            $("#currentScore").text(currentNumber);
            goalNumber = Math.floor(Math.random() * 102 + 19)
            $(".randomNumberDiv").text(goalNumber);
            blueGem = Math.floor(Math.random() * 12 + 1);
            greenGem = Math.floor(Math.random() * 12 + 1);
            pinkGem = Math.floor(Math.random() * 12 + 1);
            yellowGem = Math.floor(Math.random() * 12 + 1);

        }
    })
    $("#pink").click(function () {
        if (currentNumber == goalNumber && currentNumber != 0 && goalNumber != 0) {
            $("#text").text("You won!");
            wins++;
            $("#wins").text("wins: " + wins);
            currentNumber = 0;
            $("#currentScore").text(currentNumber);
            goalNumber = Math.floor(Math.random() * 102 + 19)
            $(".randomNumberDiv").text(goalNumber);
            blueGem = Math.floor(Math.random() * 12 + 1);
            greenGem = Math.floor(Math.random() * 12 + 1);
            pinkGem = Math.floor(Math.random() * 12 + 1);
            yellowGem = Math.floor(Math.random() * 12 + 1);

        }
    })
    $("#yellow").click(function () {
        if (currentNumber == goalNumber && currentNumber != 0 && goalNumber != 0) {
            $("#text").text("You won!");
            wins++;
            $("#wins").text("wins: " + wins);
            currentNumber = 0;
            $("#currentScore").text(currentNumber);
            goalNumber = Math.floor(Math.random() * 102 + 19)
            $(".randomNumberDiv").text(goalNumber);
            blueGem = Math.floor(Math.random() * 12 + 1);
            greenGem = Math.floor(Math.random() * 12 + 1);
            pinkGem = Math.floor(Math.random() * 12 + 1);
            yellowGem = Math.floor(Math.random() * 12 + 1);

        }
    })
}
function loser(){
    $("#blue").click(function () {
        if (currentNumber>goalNumber && currentNumber != 0 && goalNumber != 0) {
            $("#text").text("You lost!");
            losses++;
            $("#losses").text("losses: " + losses);
            currentNumber = 0;
            $("#currentScore").text(currentNumber);
            goalNumber = Math.floor(Math.random() * 102 + 19)
            $(".randomNumberDiv").text(goalNumber);
            blueGem = Math.floor(Math.random() * 12 + 1);
            greenGem = Math.floor(Math.random() * 12 + 1);
            pinkGem = Math.floor(Math.random() * 12 + 1);
            yellowGem = Math.floor(Math.random() * 12 + 1);
        }
    })
 $("#green").click(function () {
        if (currentNumber>goalNumber && currentNumber != 0 && goalNumber != 0) {
            $("#text").text("You lost!");
            losses++;
            $("#losses").text("losses: " + losses);
            currentNumber = 0;
            $("#currentScore").text(currentNumber);
            goalNumber = Math.floor(Math.random() * 102 + 19)
            $(".randomNumberDiv").text(goalNumber);
            blueGem = Math.floor(Math.random() * 12 + 1);
            greenGem = Math.floor(Math.random() * 12 + 1);
            pinkGem = Math.floor(Math.random() * 12 + 1);
            yellowGem = Math.floor(Math.random() * 12 + 1);     
        }
    })      
    $("#pink").click(function () {
        if (currentNumber>goalNumber && currentNumber != 0 && goalNumber != 0) {
            $("#text").text("You lost!");
            losses++;
            $("#losses").text("losses: " + losses);
            currentNumber = 0;
            $("#currentScore").text(currentNumber);
            goalNumber = Math.floor(Math.random() * 102 + 19)
            $(".randomNumberDiv").text(goalNumber);
            blueGem = Math.floor(Math.random() * 12 + 1);
            greenGem = Math.floor(Math.random() * 12 + 1);
            pinkGem = Math.floor(Math.random() * 12 + 1);
            yellowGem = Math.floor(Math.random() * 12 + 1);     
        }
    })      
    $("#yellow").click(function () {
        if (currentNumber>goalNumber && currentNumber != 0 && goalNumber != 0) {
            $("#text").text("You lost!");
            losses++;
            $("#losses").text("losses: " + losses);
            currentNumber = 0;
            $("#currentScore").text(currentNumber);
            goalNumber = Math.floor(Math.random() * 102 + 19)
            $(".randomNumberDiv").text(goalNumber);
            blueGem = Math.floor(Math.random() * 12 + 1);
            greenGem = Math.floor(Math.random() * 12 + 1);
            pinkGem = Math.floor(Math.random() * 12 + 1);
            yellowGem = Math.floor(Math.random() * 12 + 1);     
        }
    })      

}