
// 1. get option //

const options = ["rock", "paper", "scissors"]

/*
console.log(options)
*/


// 2. get random computer choice //

function getComputerChoice () {
    const choice = options[Math.floor(Math.random() * options.length)]
    return choice
}


/*
console.log(getComputerChoice())
*/



 //3. get winner //
function getWinner (playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return "tie"
    } else if (
        (playerSelection === "rock" && computerSelection == "scissors") ||
        (playerSelection === "paper" && computerSelection == "rock") ||
        (playerSelection === "scissors" && computerSelection == "paper"))
        {
            return "player"
        } else {
            return "computer"}}
const computerSelection = getComputerChoice();
const playerSelection = "rock";



/*
console.log(getWinner(playerSelection, computerSelection))
*/

// 4. play round //
function playRound(playerSelection, computerSelection) {
    const result = getWinner(playerSelection, computerSelection) 
        if (result == "player")
        {
         return `You won! ${playerSelection} beats ${computerSelection}!`
        } else if (result == "computer") {
             return `You LOST! ${computerSelection} beats ${playerSelection}!`
        } else {
            return `It's a tie`
        }
       
    }
 

// 5. play game() //
/*
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (i = 0; i < 5; i++) {
        const playerSelection = playerPrompt();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    

    if (getWinner(playerSelection, computerSelection) == "player"){
        playerScore++
    } else if (getWinner(playerSelection, computerSelection) == "computer" ) {
            computerScore++
    } else if (getWinner(playerSelection, computerSelection) == "tie") {
        playerScore
     }
//console.log(`${playerScore}-${computerScore}`) //
    }

if (playerScore > computerScore) {
    console.log(`you won best of 5 ${playerScore}-${computerScore}`)
} else if (playerScore < computerScore) {
    console.log(`RLLY LOSING TO A COMPUTER ${playerScore}-${computerScore}`)
} else {
    return console.log(`HOW DO YOU TIE IN A BEST OF 5 ${playerScore}-${computerScore}`)
}

}
*/
/*
// player prompt //
function playerPrompt() {
    let question = prompt(`rock, paper, scissors?`)
    if (question.toLowerCase() == "rock"){
        return "rock";
    } else if(question.toLowerCase() == "paper"){
        return "paper";
    } else {
        return "scissors"
    } 
} //game ()
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerScore = 0;
        let computerScore = 0;

        const computerSelection = getComputerChoice();
        const playerSelection = button.classList.value;
        const getWinner2 = getWinner(playerSelection, computerSelection);
        const playRound2 = playRound(playerSelection, computerSelection);


        if (getWinner(playerSelection, computerSelection) == "player"){
            playerScore++
        } else if (getWinner(playerSelection, computerSelection) == "computer" ) {
                computerScore++
        } else if (getWinner(playerSelection, computerSelection) == "tie") {
            return
         }

  
        console.log(playRound2)
        console.log( `${playerScore}-${computerScore}`)
    })
})
*/
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const displayResult = document.querySelector('.displayResult');
const displayScore = document.querySelector('.displayScore');
const restartButton = document.querySelector('.restartButton')
let playerScore = 0;
let computerScore = 0;
let gameEnded = false





rockButton.addEventListener('click', () => {
    if (gameEnded) return true;
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
 
    displayResult.textContent = playRound(playerSelection, computerSelection);
 
    

    if (getWinner(playerSelection, computerSelection) == "player"){
        playerScore++
    } else if (getWinner(playerSelection, computerSelection) == "computer" ) {
            computerScore++
    } else if (getWinner(playerSelection, computerSelection) == "tie") {
        return playerScore
     }
     displayScore.textContent = `${playerScore} - ${computerScore}`
     if (playerScore == 5) 
     { gameEnded = true;
        displayScore.textContent = `GAME OVER...Congrats you won ${playerScore} - ${computerScore}!`;
        displayResult.textContent = ''
     }
     if (computerScore == 5) 
     { gameEnded = true;
        displayScore.textContent = `GAME OVER...Sorry you lost ${computerScore} - ${playerScore}!`;
        displayResult.textContent = ''
     }
})
paperButton.addEventListener('click', () => {
    if (gameEnded) return true;
    const playerSelection = 'paper';
    const computerSelection = getComputerChoice();
 
    displayResult.textContent = playRound(playerSelection, computerSelection);


    if (getWinner(playerSelection, computerSelection) == "player"){
        playerScore++
    } else if (getWinner(playerSelection, computerSelection) == "computer" ) {
            computerScore++
    } else if (getWinner(playerSelection, computerSelection) == "tie") {
        return playerScore
     }
     displayScore.textContent = `${playerScore} - ${computerScore}`
     if (playerScore == 5) 
     { gameEnded = true;
        displayScore.textContent = `GAME OVER...Congrats you won ${playerScore} - ${computerScore}!`;
        displayResult.textContent = ''
     }
     if (computerScore == 5) 
     { gameEnded = true;
        displayScore.textContent = `GAME OVER...Sorry you lost ${computerScore} - ${playerScore}!`;
        displayResult.textContent = ''
     }


    

})
scissorsButton.addEventListener('click', () => {
    if (gameEnded) return true;
    const playerSelection = 'scissors';
    const computerSelection = getComputerChoice();

    displayResult.textContent = playRound(playerSelection, computerSelection);
 
    if (getWinner(playerSelection, computerSelection) == "player"){
        playerScore++
    } else if (getWinner(playerSelection, computerSelection) == "computer" ) {
            computerScore++
    } else if (getWinner(playerSelection, computerSelection) == "tie") {
        return playerScore
     }
     displayScore.textContent = `${playerScore} - ${computerScore}`
     if (playerScore == 5) 
     { gameEnded = true;
        displayScore.textContent = `GAME OVER...Congrats you won ${playerScore} - ${computerScore}!`;
        displayResult.textContent = ''
     }
     if (computerScore == 5) 
     { gameEnded = true;
        displayScore.textContent = `GAME OVER...Sorry you lost ${computerScore} - ${playerScore}!`;
        displayResult.textContent = ''
     }
    
})

restartButton.addEventListener('click', () =>{
    playerScore = 0;
    computerScore = 0;
    gameEnded = false
    displayScore.textContent = `${playerScore} - ${computerScore}`;
    displayResult.textContent = 'Too hard? Well try again...';

})





