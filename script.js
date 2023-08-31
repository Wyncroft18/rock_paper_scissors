function getComputerChoice () {
    const choices = ["Rock", "Paper", "Scissor"];
    const random = Math.floor(Math.random() * choices.length);
    console.log(choices[random]);
}

getComputerChoice();