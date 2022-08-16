let computerMove;
let computerScore = 0;
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
function playRound() {
	let playerMove;
	playButtons.forEach((weapon) => {
		weapon.addEventListener("click", () => {
			if (weapon.classList.contains("rock")) {
				playerMove = "rock";
			} else if (weapon.classList.contains("paper")) {
				playerMove = "paper";
			} else {
				playerMove = "scissors";
			}
		});
	});
}
