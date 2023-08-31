function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    const random = Math.floor(Math.random() * choices.length);
    const choice = choices[random];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        console.log("It's a draw!");
    }
    else {
        if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
            console.log("You lose! Paper beats rock.");
        } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissor") {
            console.log("You win! Rock beats scissor.");
        } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
            console.log("You win! Paper beats rock.");
        } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissor") {
            console.log("You lose! Scissor beats paper.");
        } else if (playerSelection.toLowerCase() === "scissor" && computerSelection === "rock") {
            console.log("You lose! Rock beats scissor.");
        } else {
            console.log("You win! Scissor beats paper.")
        }
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection));