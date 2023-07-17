let message = document.querySelector('.message');
let playerMessage = document.querySelector('.player-message');
let computerMessage = document.querySelector('.computer-message');

//make variable to store results to keep score
let playerScore = 0;
let computerScore = 0;


//get computer choice
function getComputerChoice (){
    let randomNum = Math.floor(Math.random() * 90) + 1;
    let computerChoice;
    if (randomNum < 31) {
        computerChoice = "rock";
        rock.classList.add('computer-clicked');
        paper.classList.remove('computer-clicked');
        scissors.classList.remove('computer-clicked');
    }
    else if (randomNum > 60) {
        computerChoice = "paper";
        rock.classList.remove('computer-clicked');
        paper.classList.add('computer-clicked');
        scissors.classList.remove('computer-clicked');
    }
    else {
        computerChoice = "scissors";
        rock.classList.remove('computer-clicked');
        paper.classList.remove('computer-clicked');
        scissors.classList.add('computer-clicked');
    }
    console.log(computerChoice);
    return computerChoice;
}

//compare player choice to computer choice
//declare winner based on comparison result
function playRound (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "paper") {
            message.textContent = "You lose! Paper beats rock!";
            computerScore = computerScore + 1;
            computerMessage.textContent = "Computer Score: " + computerScore;
        }
        else if (computerSelection === "scissors") {
            message.textContent = "You win! Rock beats Scissors!";
            playerScore = playerScore + 1;
            playerMessage.textContent = "Player Score: " + playerScore;
        }
        else {
            message.textContent = "It's a draw!";
        }
    }
    else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "scissors") {
            message.textContent = "You lose! Scissors beats Paper!";
            computerScore = computerScore + 1;
            computerMessage.textContent = "Computer Score: " + computerScore;
        }
        else if (computerSelection === "rock") {
            message.textContent = "You win! Paper beats Rock!";
            playerScore = playerScore + 1;
            playerMessage.textContent = "Player Score: " + playerScore;
        }
        else {
            message.textContent = "It's a draw!";
        }
    }
    else if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "rock") {
            message.textContent = "You lose! Rock beats Scissors!";
            computerScore = computerScore + 1;
            computerMessage.textContent = "Computer Score: " + computerScore;
        }
        else if (computerSelection === "paper") {
            message.textContent = "You win! Scissors beats Paper!";
            playerScore = playerScore + 1;
            playerMessage.textContent = "Player Score: " + playerScore;
        }
        else {
            message.textContent = "It's a draw!";
        }
    }
    if (playerScore === 5 || computerScore === 5) {
        document.addEventListener('click', gameOver, true);
        function gameOver(e) {
         e.stopPropagation();
        e.preventDefault();
        if (playerScore === 5) {
            message.textContent = "Gameover, You Won!"
        }
        else {
            message.textContent = "Gameover, You Lost!"
        }
        }
    }
}


const rock = document.querySelector('.rock');
rock.onclick = () =>  {
    playRound("rock", getComputerChoice());
    rock.classList.add('player-clicked');
    paper.classList.remove('player-clicked');
    scissors.classList.remove('player-clicked');
}

const paper = document.querySelector('.paper');
paper.onclick = () =>  {
    playRound("paper", getComputerChoice());
    rock.classList.remove('player-clicked');
    paper.classList.add('player-clicked');
    scissors.classList.remove('player-clicked');
}

const scissors = document.querySelector('.scissors');
scissors.onclick = () =>  {
    playRound("scissors", getComputerChoice());
    rock.classList.remove('player-clicked');
    paper.classList.remove('player-clicked');
    scissors.classList.add('player-clicked');
}