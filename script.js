function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    const random = Math.floor(Math.random() * choices.length);
    const choice = choices[random];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        document.querySelector(".result").innerHTML = "It's a draw!";
    } else {
        if (playerSelection === "rock" && computerSelection === "paper") {
            computerScore += 1;
            document.querySelector(".result").innerHTML = "You lose! Paper beats rock.";
            document.querySelector(".playerScore").innerHTML = "Player Score: " + playerScore;
            document.querySelector(".computerScore").innerHTML = "Computer Score: " + computerScore;
        } else if (playerSelection === "rock" && computerSelection === "scissor") {
            playerScore += 1;
            document.querySelector(".result").innerHTML = "You win! Rock beats scissor.";
            document.querySelector(".playerScore").innerHTML = "Player Score: " + playerScore;
            document.querySelector(".computerScore").innerHTML = "Computer Score: " + computerScore;
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            playerScore += 1;
            document.querySelector(".result").innerHTML = "You win! Paper beats rock.";
            document.querySelector(".playerScore").innerHTML = "Player Score: " + playerScore;
            document.querySelector(".computerScore").innerHTML = "Computer Score: " + computerScore;
        } else if (playerSelection === "paper" && computerSelection === "scissor") {
            computerScore += 1;
            document.querySelector(".result").innerHTML = "You lose! Scissor beats paper.";
            document.querySelector(".playerScore").innerHTML = "Player Score: " + playerScore;
            document.querySelector(".computerScore").innerHTML = "Computer Score: " + computerScore;
        } else if (playerSelection === "scissor" && computerSelection === "rock") {
            computerScore += 1;
            document.querySelector(".result").innerHTML = "You lose! Rock beats scissor.";
            document.querySelector(".playerScore").innerHTML = "Player Score: " + playerScore;
            document.querySelector(".computerScore").innerHTML = "Computer Score: " + computerScore;   
        } else {
            playerScore += 1;
            document.querySelector(".result").innerHTML = "You win! Scissor beats paper.";
            document.querySelector(".playerScore").innerHTML = "Player Score: " + playerScore;
            document.querySelector(".computerScore").innerHTML = "Computer Score: " + computerScore;
        }
    }  
}
    
function gameOver() {
    if (playerScore === 5) {
        document.querySelector(".result").innerHTML = "Game Over! Humanity wins!";
        document.querySelector(".playerScore").innerHTML = "";
        document.querySelector(".computerScore").innerHTML = "";
    } else {
        document.querySelector(".result").innerHTML = "Game Over! Computer wins!";
        document.querySelector(".playerScore").innerHTML = "";
        document.querySelector(".computerScore").innerHTML = "";
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
        playRound(playerSelection, computerSelection);
        if (playerScore === 5 || computerScore === 5) {
            buttons.forEach((button) => {
                button.disabled = true;
            });
            setTimeout(function() {
                gameOver();
            }, 2000);
            setTimeout(function() {
                location.reload();
            }, 5000);
        };
    });
});
