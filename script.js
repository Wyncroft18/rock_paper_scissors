function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    const random = Math.floor(Math.random() * choices.length);
    const choice = choices[random];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        console.log("It's a draw!");
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + computerScore);
    } else {
        if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
            computerScore += 1;
            console.log("You lose! Paper beats rock.");
            console.log("Player Score: " + playerScore);
            console.log("Computer Score: " + computerScore);
        } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissor") {
            playerScore += 1;
            console.log("You win! Rock beats scissor.");
            console.log("Player Score: " + playerScore);
            console.log("Computer Score: " + computerScore);
        } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
            playerScore += 1;
            console.log("You win! Paper beats rock.");
            console.log("Player Score: " + playerScore);
            console.log("Computer Score: " + computerScore);
        } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissor") {
            computerScore += 1;
            console.log("You lose! Scissor beats paper.");
            console.log("Player Score: " + playerScore);
            console.log("Computer Score: " + computerScore);
        } else if (playerSelection.toLowerCase() === "scissor" && computerSelection === "rock") {
            computerScore += 1;
            console.log("You lose! Rock beats scissor.");
            console.log("Player Score: " + playerScore);
            console.log("Computer Score: " + computerScore);    
        } else {
            playerScore += 1;
            console.log("You win! Scissor beats paper.");
            console.log("Player Score: " + playerScore);
            console.log("Computer Score: " + computerScore);
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("rock, paper, scissor?");
        playRound(playerSelection, computerSelection);
        computerSelection = getComputerChoice();
    }
    console.log("Game over!");
    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + computerScore);
}

let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection = getComputerChoice();
game();