var letters = ['a', 'b', 'c'];
// 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
var win = 0;
var lose = 0;
var lives = 5;


// game code

document.onkeyup = function () {
    var lettersGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    var computerGuess = letters[Math.floor(Math.random() * letters.length)];
    // var guessedArray = [];
    // guessedArray.push(lettersGuessed);
    console.log(computerGuess);
    console.log(lettersGuessed);


    while (lives >= 1) {
        if (lettersGuessed == computerGuess) {
            win++;
        }
        // document.querySelector("#letters-guessed").innerHTML = "What you have guessed: " + guessedArray;
        // }
        else if (lettersGuessed !== computerGuess) {
            lives--;
        }
        //     // guessedArray = function() { 
        //     //     guessedArray.push(lettersGuessed)
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
    }

    document.querySelector("#wins").innerHTML = "Wins: " + win;
    document.querySelector("#losses").innerHTML = "Losses: " + lose;
    document.querySelector("#lives").innerHTML = "Lives: " + lives;
}