let computerMove;
let playerMove;
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        computerMove = "Rock";
    }   else if (randomNum === 1) {
        computerMove = "Paper";
    }   else if (randomNum === 2) {
        computerMove = "Scissors";
    }
    return computerMove;
}

function playerSelection() {
    let playerMove = window.prompt("Enter Rock, Paper or Scissors");
    return playerMove;
}

function gameRPS(computerMove, playerMove) {
    computerMove= getComputerChoice();
    playerMove = playerSelection();
    console.log(computerMove);
    console.log(playerMove);
}