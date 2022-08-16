const itemButtons = document.querySelectorAll(".play");
const rounds = document.querySelector(".round");
const combatText = document.querySelector(".combat-text");
const playAgainButton = document.querySelector(".play-again");

let playerLives = 5;
let compLives = 5;
let round = 0;

//Counts the Rounds
function countRounds() {
	round += 1;
	round.innerHTML = `Round: ${round}`;
	return round;
}
//Randomizes Computer Choice
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

function countLives(playerMove, computerMove) {}
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
