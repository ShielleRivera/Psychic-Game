
// Choices for the computer to pick from
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// Value of wins        
var wins = 0;
// Value of losses
var losses = 0;
// Number of guesses the user gets   
var guessLeft = 10;
       
// Records the users input
document.onkeyup = function(event) {

 var userGuess = event.key.toLowerCase();
       
 var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
 // Changes the values of wins,losses and guesses left
 if (userGuess === computerGuess) {
    wins++;
} 
 else {
    guessLeft--;
}
 if (guessLeft === 0) {
    losses++;
    guessLeft = 10;
}
 // Adds the html text and the variables for the game
 var html =
    "<p> Wins: " + wins + "</p>"+
    "<p> Losses: " + losses + "</p>" +
    "<p> Guesses Left: " + guessLeft + "</p>" +
    "<p> Guesses: " + userGuess + "</p>";

 document.querySelector("#game").innerHTML = html;
    
}