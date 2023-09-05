function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    const random = Math.floor(Math.random() * choices.length);
    const choice = choices[random];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a draw!");
    } else {
        if (playerSelection === "rock" && computerSelection === "paper") {
            computerScore += 1;
            console.log("You lose! Paper beats rock.");
            console.log("Player Score: " + playerScore);
            console.log("Computer Score: " + computerScore);
        } else if (playerSelection === "rock" && computerSelection === "scissor") {
            playerScore += 1;
            console.log("You win! Rock beats scissor.");
            console.log("Player Score: " + playerScore);
            console.log("Computer Score: " + computerScore);
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            playerScore += 1;
            console.log("You win! Paper beats rock.");
            console.log("Player Score: " + playerScore);
            console.log("Computer Score: " + computerScore);
        } else if (playerSelection === "paper" && computerSelection === "scissor") {
            computerScore += 1;
            console.log("You lose! Scissor beats paper.");
            console.log("Player Score: " + playerScore);
            console.log("Computer Score: " + computerScore);
        } else if (playerSelection === "scissor" && computerSelection === "rock") {
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
    
    
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
        playerSelection = e.target.id;
        computerSelection = getComputerChoice();
        console.log(playerSelection)
        console.log(computerSelection)
        playRound(playerSelection, computerSelection);
        if (playerScore === 5 || computerScore === 5) {
            alert("Game Over!");
            playerScore = 0;
            computerScore = 0;
        }
    })
});
