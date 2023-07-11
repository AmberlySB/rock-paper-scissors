// Ask user for their choice
let userChoice = prompt ("Please choose one: Rock, Paper, or Scissors", "")
console.log(userChoice);

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
    return computerChoice;
}

console.log(getComputerChoice());

//compare user choice to computer choice

//declare winner based on comparison result

//make variable to store results to keep score

//repeat process until five rounds have been played