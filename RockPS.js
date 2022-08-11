let computerMove;
let playerMove;
let gameScore;
let gameMessage;
function getComputerChoice() {
	let randomNum = Math.floor(Math.random() * 3);
	if (randomNum === 0) {
		computerMove = "rock";
	} else if (randomNum === 1) {
		computerMove = "paper";
	} else if (randomNum === 2) {
		computerMove = "scissors";
	}
	return computerMove;
}

function playerSelection() {
	let playerMove = window
		.prompt("Enter for Rock, Paper or Scissors")
		.toString()
		.toLowerCase();
	console.log(playerMove);
	if (
		playerMove == "rock" ||
		playerMove == "paper" ||
		playerMove == "scissors"
	) {
		return playerMove;
	} else {
		alert("You didn't type Rock, Paper or Scissors! Please try again!");
		playerSelection();
	}
}

function gameRPS(computerMove, playerMove) {
	computerMove = getComputerChoice();
	playerMove = playerSelection();
	if (playerMove === computerMove) {
		gameMessage =
			"It's a draw! " + playerMove + " and " + computerMove + " are the same! ";
	} else if (computerMove == "rock" && playerMove == "sci")
		return playerMove, computerMove;
}

function game(gameRPS) {
	for (let i = 0; i < 5; i++) {}
}
