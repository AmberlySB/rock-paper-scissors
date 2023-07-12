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
            return "You lose! Paper beats rock!";
        }
        else if (computerSelection === "scissors") {
            return "You win! Rock beats Scissors!";
        }
        else {
            return "It's a draw!";
        }
    }
    else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "scissors") {
            return "You lose! Scissors beats Paper!";
        }
        else if (computerSelection === "rock") {
            return "You win! Paper beats Rock!";
        }
        else {
            return "It's a draw!";
        }
    }
    else if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "rock") {
            return "You lose! Rock beats Scissors!";
        }
        else if (computerSelection === "paper") {
            return "You win! Scissors beats Paper!";
        }
        else {
            return "It's a draw!";
        }
    }
}

console.log(playRound(getPlayerChoice(), getComputerChoice()));


//make variable to store results to keep score

//repeat process until five rounds have been played