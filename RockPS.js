let computerMove;
let computerScore = 0;
let playerMove;
let playerScore = 0;
let gameMessage;

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

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

function playRound(computerMove, playerMove) {
	computerMove = getComputerChoice();
	playerMove = playerSelection();
	if (
		(playerMove == "rock" && computerMove == "scissors") ||
		(playerMove == "scissors" && computerMove == "paper") ||
		(playerMove == "paper" && computerMove == "rock")
	) {
		playerScore += 1;
		gameMessage =
			"You win! " +
			capitalizeFirstLetter(playerMove) +
			" beats " +
			capitalizeFirstLetter(computerMove) +
			" !";
	} else if (playerMove == computerMove) {
		gameMessage =
			capitalizeFirstLetter(playerMove) +
			" and " +
			capitalizeFirstLetter(computerMove) +
			" are the same! \n It's a draw!";
	} else {
		computerScore += 1;
		gameMessage =
			capitalizeFirstLetter(computerMove) +
			" beats " +
			capitalizeFirstLetter(playerMove) +
			"\n You lose!";
	}
	return;
}

function game() {
	for (let i = 0; i < 5; i++) {
		playRound();
		console.log(gameMessage);
		console.log(computerScore, playerScore);
		console.log(i);
	}
	computerScore = 0;
	playerScore = 0;
}
