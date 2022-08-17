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
	const compIcon = document.querySelector(".compIcon");
	let randomNum = Math.floor(Math.random() * 3);
	compIcon.classList.remove("rock", "paper", "scissors");
	if (randomNum === 0) {
		computerMove = "rock";
		compIcon.classList.add("rock");
	} else if (randomNum === 1) {
		computerMove = "paper";
		compIcon.classList.add("paper");
	} else if (randomNum === 2) {
		computerMove = "scissors";
		compIcon.classList.add("scissors");
	}
	return computerMove;
}

function countLives(playerMove, computerMove) {
	const gameOutput = document.querySelector(".game-output");
	const compPlayDiv = document.querySelector(".compPlay");

	switch (true) {
		case playerMove === computerMove:
			combatText.innerText = `Hmm.. Two ${playerMove}s means a draw, so no lives were lost. Let's try again.`;
			gameOutput.style.border = "4px solid #8070ac";
			compPlayDiv.classList.remove(
				"red-border",
				"yellow-border",
				"green-border"
			);
			compPlayDiv.classList.add("grey-border");
			break;
		case playerMove === "rock" && computerMove === "scissors":
		case playerMove === "paper" && computerMove === "rock":
		case playerMove === "scissors" && computerMove === "paper":
			combatText.textContent = `Impressive attack! The enemy lost one life, because the great power of your ${playerMove} crushed his ${computerMove}!`;
			gameOutput.style.border = "4px solid #62b49c";
			compPlayDiv.classList.remove(
				"red-border",
				"yellow-border",
				"grey-border"
			);
			compPlayDiv.classList.add("green-border");
			compLives -= 1;
			break;
		default:
			combatText.textContent = "loser";
			gameOutput.style.border = "4px solid #b96b78";
			compPlayDiv.classList.remove(
				"grey-border",
				"yellow-border",
				"green-border"
			);
			compPlayDiv.classList.add("red-border");
			playerLives -= 1;
			break;
	}
	const lives = document.querySelector(".lives");
	lives.innerText = `Your lives: ${playerLives} | Enemy's Lives: ${compLives}`;
	return [playerLives, compLives];
}
function endGame(playerLives, compLives) {
	if (playerHealth === 0 || compLives === 0) {
		weaponsButtons.forEach(button);
	}
}

function playRound() {
	let playerMove;
	itemButtons.forEach((weapon) => {
		weapon.addEventListener("click", () => {
			if (weapon.classList.contains("rock")) {
				playerMove = "rock";
			} else if (weapon.classList.contains("paper")) {
				playerMove = "paper";
			} else {
				playerMove = "scissors";
			}
			countRounds();
			countLives(playerMove, getComputerChoice());
		});
	});
}
playRound();
