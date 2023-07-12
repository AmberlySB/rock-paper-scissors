// Ask player for their choice
function getPlayerChoice (){
    let playerChoice = prompt ("Please choose one: Rock, Paper, or Scissors", "")
    console.log(playerChoice);
    return playerChoice;
}

//get computer choice
function getComputerChoice (){
    let randomNum = Math.floor(Math.random() * 90) + 1;
    let computerChoice;
    if (randomNum < 31) {
        computerChoice = "rock";
    }
    else if (randomNum > 60) {
        computerChoice = "scissors";
    }
    else {
        computerChoice = "paper";
    }
    console.log(computerChoice);
    return computerChoice;
}

//compare user choice to computer choice
//declare winner based on comparison result
function playRound (playerSelection, computerSelection) {
    //console.log(computerChoice);
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "paper") {
            console.log("You lose! Paper beats rock!");
            computerScore = computerScore + 1;
            console.log("Player Score: " + playerScore + " | Computer Score: " + computerScore)
        }
        else if (computerSelection === "scissors") {
            console.log("You win! Rock beats Scissors!");
            playerScore = playerScore + 1;
            console.log("Player Score: " + playerScore + " | Computer Score: " + computerScore)
        }
        else {
            console.log("It's a draw!");
            console.log("Player Score: " + playerScore + " | Computer Score: " + computerScore)
        }
    }
    else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "scissors") {
            console.log("You lose! Scissors beats Paper!");
            computerScore = computerScore + 1;
            console.log("Player Score: " + playerScore + " | Computer Score: " + computerScore)
        }
        else if (computerSelection === "rock") {
            console.log("You win! Paper beats Rock!");
            playerScore = playerScore + 1;
            console.log("Player Score: " + playerScore + " | Computer Score: " + computerScore)
        }
        else {
            console.log("It's a draw!");
            console.log("Player Score: " + playerScore + " | Computer Score: " + computerScore)
        }
    }
    else if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "rock") {
            console.log("You lose! Rock beats Scissors!");
            computerScore = computerScore + 1;
            console.log("Player Score: " + playerScore + " | Computer Score: " + computerScore)
        }
        else if (computerSelection === "paper") {
            console.log("You win! Scissors beats Paper!");
            playerScore = playerScore + 1;
            console.log("Player Score: " + playerScore + " | Computer Score: " + computerScore)
        }
        else {
            console.log("It's a draw!");
            console.log("Player Score: " + playerScore + " | Computer Score: " + computerScore)
        }
    }
}

//console.log(playRound(getPlayerChoice(), getComputerChoice()));


//make variable to store results to keep score
let playerScore = 0;
let computerScore = 0;

//repeat process until five rounds have been played

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(getPlayerChoice(), getComputerChoice());
    }
    if (playerScore > computerScore) {
        console.log("CONGRATULATIONS! You win the game!")
    }
    else if (computerScore > playerScore) {
        console.log("SORRY! Better luck next time!")
    }
    else{
        console.log("Time for a tie-breaker, play again!")
    }
}

console.log(game());