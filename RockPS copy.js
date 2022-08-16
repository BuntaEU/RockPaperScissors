let computerMove;
let computerScore = 0;
let playerMove;
let playerScore = 0;
let gameMessage;

//Buttons for player
const playButtons = document.querySelectorAll(".play");

/* const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors"); */

/* Used to capitalize important words */
/* function (string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
} */

/* Randomizes the computers choice */
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

/* asks for the players selection */
/* function playerSelection() {
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
} */

/* code for the rounds played */
function playRound(computerMove, playerMove) {
	playerMove = this;
	console.log(playerMove);
	computerMove = getComputerChoice();
	console.log(this.classList.contains("rock"));
	if (
		(playerMove == "rock" && computerMove == "scissors") ||
		(playerMove == "scissors" && computerMove == "paper") ||
		(playerMove == "paper" && computerMove == "rock")
	) {
		playerScore += 1;
		gameMessage = "You win! " + playerMove + " beats " + computerMove + " !";
	} else if (playerMove == computerMove) {
		gameMessage =
			playerMove + " and " + computerMove + " are the same! \n It's a draw!";
	} else {
		computerScore += 1;
		gameMessage = computerMove + " beats " + playerMove + "\n You lose!";
	}
	return playerScore, computerScore;
}
/* calls the other functions and plays the rounds with a loop */
/* function game() {
	for (let i = 0; i < 5; i++) {
		playRound();
		console.log(gameMessage);
		console.log(computerScore, playerScore);
		console.log(i);
	} */
computerScore = 0;
playerScore = 0;
playButtons.forEach((weapon) => {
	weapon.addEventListener("click", playRound);
});
