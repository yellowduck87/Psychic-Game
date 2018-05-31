var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var win = 0;
var lose = 0;
var lives = 5;
var guessedArray = [];
var computerGuess = letters[Math.floor(Math.random() * letters.length)];

// game code

document.onkeyup = function () {
    var lettersGuessed = String.fromCharCode(event.keyCode).toLowerCase();

    var computerAnswer = computerGuess;
    //player must choose an alphabetic letter
    if (!letters.includes(lettersGuessed)) {
        alert("Please pick a letter from the alphabet.")
        //when player choses a letter, the game code begins
    } else {
        //letters typed are added to the screen
        guessedArray.push(lettersGuessed)
        if (lives > 0) {
            if (lettersGuessed == computerAnswer) {
                alert("Congradulations! You Win!");
                //reset code
                win++;
                lives = 5;
                guessedArray = [];
                computerGuess = letters[Math.floor(Math.random() * letters.length)];

            }

            if (lettersGuessed !== computerAnswer) {
                lives--;
            }

        }
        if (lives == 0) {
            lose++;
            alert("you lose, try again");
            //reset code
            lives = 5;
            guessedArray = [];
            computerGuess = letters[Math.floor(Math.random() * letters.length)];

        }
        //updated variables are printed to the page
        document.querySelector("#wins").innerHTML = "Wins: " + win;
        document.querySelector("#losses").innerHTML = "Losses: " + lose;
        document.querySelector("#lives").innerHTML = "Lives: " + lives;
        document.querySelector("#letters-guessed").innerHTML = "What you have guessed: " + guessedArray;
    }
}