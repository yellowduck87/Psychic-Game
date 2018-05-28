var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var win = 0;
var lose = 0;
var lives = 5;

// game code

document.onkeyup = function () {
    var lettersGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    var computerGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log(computerGuess);
    document.querySelector("#letters-guessed").innerHTML = "What you have guessed: " + lettersGuessed;

    while (lives > 0) {
        if (lettersGuessed == computerGuess) {
            alert("you win!");
            win++;
        }
        if (lettersGuessed !== computerGuess) {
            lives--;
        }
        // set guesses left and subtract 1 for each incorrect guessed
        // record all incorrect guesses in the HTMl 
        // when remaining gueses reaches 0--player loses 
        // reset button   

       
    }
    if (lives == 0) {
        lose++;
        alert("you lose");
    }
}
document.querySelector("#wins").innerHTML = "Wins: " + win;
document.querySelector("#losses").innerHTML = "Losses: " + lose;
document.querySelector("#lives").innerHTML = "Lives: " + lives;