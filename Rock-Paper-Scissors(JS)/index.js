function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

let humanScore = 0, computerScore = 0, roundsPlayed = 0;
const totalRounds = 5;

const resultDiv = document.createElement("div");
document.body.appendChild(resultDiv);
const scoreDiv = document.createElement("div");
document.body.appendChild(scoreDiv);
const finalResultDiv = document.createElement("div");
document.body.appendChild(finalResultDiv);

function playRound(humanChoice) {
    if (roundsPlayed >= totalRounds) return;
    
    let computerChoice = getComputerChoice();
    let resultMessage = "";
    
    if (humanChoice === computerChoice) {
        resultMessage = `Both chose ${humanChoice}. It's a Tie!`;
    } else if (
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        resultMessage = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    } else {
        resultMessage = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    }
    
    roundsPlayed++;
    resultDiv.textContent = resultMessage;
    scoreDiv.textContent = `Score - You: ${humanScore} | Computer: ${computerScore}`;
    
    if (roundsPlayed === totalRounds) {
        declareWinner();
    }
}

function declareWinner() {
    if (humanScore === computerScore) {
        finalResultDiv.textContent = "It's a tie!";
    } else if (humanScore > computerScore) {
        finalResultDiv.textContent = "You win the game!";
    } else {
        finalResultDiv.textContent = "Computer wins the game!";
    }
}

const choices = ["rock", "paper", "scissors"];
for (const choice of choices) {
    const button = document.createElement("button");
    button.textContent = choice;
    button.addEventListener("click", () => {
        playRound(choice.toLowerCase().trim());
    });
    document.body.appendChild(button);
}



