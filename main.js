// get options //
const options = ["rock", "paper", "scissors"]


// get computer choice //

function getComputerChoice() {
    const choice = options[(Math.floor(Math.random() * options.length))];
    return choice
}

// get winner arguments //

function getWinner(playerSelection, computerSelection) {
    if
        (playerSelection == computerSelection) {
            return "tie"
        } else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper") ){
        return "player"
        } else {
            return "computer"
        }}
// playRound //
function playRound (playerSelection, computerSelection) {
    const result = getWinner(playerSelection, computerSelection);
    if (result == "tie") {
        return `It's a tie`
    } else if (result == "player") {
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    }
 
    
}

// play five rounds//

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (i = 0; i < 5; i++) {

        const playerSelection = playerPrompt();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
// Keep Score //
        if(getWinner(playerSelection, computerSelection) == "player"){
            playerScore++;
        } else if(getWinner(playerSelection,computerSelection) == "computer"){
        computerScore++;   
        } else if(getWinner(playerSelection, computerSelection) == "tie"){
            playerScore
        }
 console.log(`${playerScore}-${computerScore}`)
    }

//printing out a message based on score result //
  if (playerScore > computerScore){
     console.log("congradulations")
  }  else if (playerScore < computerScore){
    console.log("DAMMM YOU LOST TO A COMPUTER")
  } else {
    return console.log("HOW DO YOU TIE IN A BEST OF 5")
  }
 
}

// player Choice Prompt //

function playerPrompt() {
    let question = prompt(`rock, paper, scissors?`)
    if (question.toLowerCase() == "rock"){
        return playerSelection = "rock";
    } else if(question.toLowerCase() == "paper"){
        return playerSelection="paper";
    } else {
        return "scissors"
    } 
} game ()