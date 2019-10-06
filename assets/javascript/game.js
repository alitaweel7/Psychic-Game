//Array of letters that the game is going to choose frome randomly:
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let numMatch = 0;
let numnoMatch = 0;
let guessCount = '';
let guessesLeft = 9;
let losses = 0;

//Guesses that the computer program will be taking
let programPick = letters[Math.floor(Math.random() * letters.length)];
console.log(programPick);

//Player guess onekyeup, random number will generate and display

document.onkeyup = function () {
    let playerGuess = String.fromCharCode(event.keyCode);
    console.log(playerGuess);


    if ((playerGuess == programPick)) {
        numMatch++;
        console.log(numMatch);
        resetGame();


    } else {
        if (guessesLeft > 0) {
            guessesLeft--;
            losses++;
            guessCount += ", " + playerGuess;
            resetGame();

        }
        if (guessesLeft <= 0) {
            resetGame2();
        }

    }


    var html = "<p>Guess what letter I am thinking of </p>" +
        "<p>Wins: " + numMatch + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "</p>" +
        "<p>Guesses: " + guessCount + "</p>"
    document.querySelector('#PsychicGame').innerHTML = html;

}





// resets the game when conditions are matched
function resetGame() {
    /*guessCount = '';
    guessesLeft = 9;*/

    computerGuess = letters[Math.floor(Math.random() * letters.length)];
}

function resetGame2() {
    guessCount = '';
    guessesLeft = 9;
    losses = 0;
    computerGuess = letters[Math.floor(Math.random() * letters.length)];
}
