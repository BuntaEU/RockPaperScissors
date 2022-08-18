const itemButtons = document.querySelectorAll(".play");
const rounds = document.querySelector(".round");
const combatText = document.querySelector(".combat-text");
const playAgainButton = document.querySelector(".play-again");

let playerLives = 5;
let compLives = 5;
let round = 0;

//Counts the Rounds
function countRounds() {
	console.log(round);
	round += 1;
	rounds.innerText = `Round: ${round}`;
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
	const result = document.querySelector(".resu");

	switch (true) {
		case playerMove === computerMove:
			combatText.innerText = `Hmm.. Two ${playerMove}s means a draw, so no lives were lost. Let's try again.`;
			gameOutput.style.border = "4px solid #8070ac";
			gameOutput.classList.add("shadowPurple");
			gameOutput.classList.remove("shadowGreen", "shadowRed");
			compPlayDiv.classList.remove(
				"red-border",
				"yellow-border",
				"green-border"
			);
			compPlayDiv.classList.add("purple-border");
			result.classList.remove("red-color", "green-color");
			result.classList.add("purple-color");
			result.innerText = "Draw";

			break;
		case playerMove === "rock" && computerMove === "scissors":
		case playerMove === "paper" && computerMove === "rock":
		case playerMove === "scissors" && computerMove === "paper":
			combatText.textContent = `Impressive attack! The enemy lost one life, because the great power of your ${playerMove} crushed his ${computerMove}!`;
			gameOutput.style.border = "4px solid #62b49c";
			gameOutput.classList.add("shadowGreen");
			gameOutput.classList.remove("shadowPurple", "shadowRed");
			result.innerText = "WIN";
			result.classList.remove("red-color", "purple-color");
			result.classList.add("green-color");
			compPlayDiv.classList.remove(
				"red-border",
				"yellow-border",
				"purple-border",
				"grey-border"
			);
			compPlayDiv.classList.add("green-border");
			compLives -= 1;
			break;
		default:
			combatText.textContent = "loser";
			gameOutput.style.border = "4px solid #b96b78";
			gameOutput.classList.add("shadowRed");
			gameOutput.classList.remove("shadowGreen", "shadowPurple");
			result.innerText = "Lose";
			result.classList.remove("green-color", "purple-color");
			result.classList.add("red-color");
			compPlayDiv.classList.remove(
				"grey-border",
				"yellow-border",
				"green-border",
				"purple-border"
			);
			compPlayDiv.classList.add("red-border");
			playerLives -= 1;
			break;
	}
	const lives = document.querySelector(".lives");
	lives.innerText = `Your lives: ${playerLives} | Enemy's Lives: ${compLives}`;
}
function endGame(playerLives, compLives) {
	if (playerLives === 0 || compLives === 0) {
		itemButtons.forEach((button) => {
			button.setAttribute("disabled", "");
			button.classList.add("disabled-button", "opacity");
		});
		const compIcon = document.querySelector(".compIcon");
		compIcon.style.opacity = "0.5";

		const gameEndText = document.querySelector(".game-end-text");
		if (playerLives > compLives) {
			combatText.innerText = "poor enemy no lives left";
			gameEndText.textContent = "you won!";
			gameEndText.style.color = "#62b49c";
		} else {
			combatText.innerText = "No lives left for you";
			gameEndText.textContent = "you lost loser!";
			gameEndText.style.color = "#b96b78";
		}
		playAgainButton.style.visibility = "visible";
	}
}
function resetGame() {
	playAgainButton.addEventListener("click", () => {
		window.location.reload();
	});
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
			endGame(playerLives, compLives);
			resetGame();
		});
	});
}
playRound();
