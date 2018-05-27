var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var win = 0;
var lose = 0;
var lives = 9;

// game code

document.onkeyup = function () {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var computerGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log(computerGuess);
    
    if (userGuess == computerGuess) {
        alert("you win!");
        win++;
    
        // set guesses left and subtract 1 for each incorrect guessed
        // record all incorrect guesses in the HTMl 
        // when remaining gueses reaches 0--player loses 
        // reset button 
        
    }else{ 
        (userGuess !== computerGuess);
            lives--;
            if (lives==0);
                alert("you lose");
        }
    }

    document.getElementById("wins")
    document.getElementById("losses")
    document.getElementById("lives")
    document.getElementById("letters-guessed")

