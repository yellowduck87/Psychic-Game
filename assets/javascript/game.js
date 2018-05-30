var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var win = 0;
var lose = 0;
var lives = 5;


// game code

document.onkeyup = function () {
    var lettersGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    var computerGuess = letters[Math.floor(Math.random() * letters.length)];
    var computerAnswer = computerGuess;
    // var guessedArray = []; 
    // guessedArray = function() { 
    //     guessedArray.push(lettersGuessed)
    // }
    console.log(computerAnswer);
    console.log(computerGuess);
    console.log(lettersGuessed);


    if (lives > 0) {
        if (lettersGuessed == computerAnswer) {
            alert("Congradulations! You Win!");
            win++;
            lives = 5;
            lettersGuessed = "";
            // var guessedArray = [];
        }
    
    if (lettersGuessed !== computerAnswer) {
        lives--;
    }
  
    //     // };
    //     // document.querySelector("#letters-guessed").innerHTML = "What you have guessed: " + guessedArray;
    // }
    // //     }
    // //     // set guesses left and subtract 1 for each incorrect guessed
    // //     // record all incorrect guesses in the HTMl 
    // //     // when remaining gueses reaches 0--player loses 
    // //     // reset button   


}
if (lives == 0) {
    lose++;
    alert("you lose, try again");
    lives = 5;
    lettersGuessed = "";
    // var guessedArray = [];
}

document.querySelector("#wins").innerHTML = "Wins: " + win;
document.querySelector("#losses").innerHTML = "Losses: " + lose;
document.querySelector("#lives").innerHTML = "Lives: " + lives;
document.querySelector("#letters-guessed").innerHTML = "What you have guessed: " + lettersGuessed;
}