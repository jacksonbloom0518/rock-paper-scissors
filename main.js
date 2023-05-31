// get options //
const options = ["rock", "paper", "scissors"]


//get computer selection //

function getComputerSelection() {
    choice = options[(Math.floor(Math.random() * options.length))];
    return choice
}


//pickWinner //

function getWinner (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "tie"
    } else if(
         (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper") ){
        return "player"
    } else {
        return "computer"
    }

}

//playRound //

function playRound (playerSelection, computerSelection) {
    const result =  getWinner(playerSelection, computerSelection);
    if (result == "tie") {
        return `It's a tie`
    } else if
        (result == "player") {
            return `You won! ${playerSelection} beats ${computerSelection}!`
        } else {
            return `You lost! ${computerSelection} beats ${playerSelection}!`
        }
    
}

//test


// play five rounds //

function game() {
for (i = 0; i < 5; i++) {
const playerSelection = playerPrompt();
const computerSelection = getComputerSelection();
console.log(playRound(playerSelection, computerSelection));
}
 }

// make a prompt for player selection //
function playerPrompt() {
    let question = prompt ("rock, paper, or scissors?")
    if (question.toLowerCase() == "rock"){
        return playerSelection = "rock"
    } else if (question.toLowerCase() == "paper"){
        return playerSelection = "paper"
    } else  {
            return "scissors"
    }

}

game()






