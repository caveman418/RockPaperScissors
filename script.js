//initialize variables and DOM elements
let humanScore = 0;
let robotScore = 0;
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const result = document.querySelector(".resultsText");
const score = document.querySelector(".score");

//function randomly generates computer's play using Math.random object
function computerPlay() {
    let num = Math.random();
    if (num < 1/3) {
        return "rock";
    } else if (num > 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}

//function prompts for player's choice, compares between the computer, then outputs result of the game
function round(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = computerPlay();
    let comp = [0];
    comp[0] = playerSelection; //put into an array to shorten the variable calls in the following if statement
    comp[1] = computerSelection;

    if (comp[0]===comp[1]) return `It's a tie! You both chose ${playerSelection}`;

    if (comp[0]==="rock" && comp[1]==="paper" || comp[0]==="paper" && comp[1]==="scissors" || comp[0]==="scissors" && comp[1]==="rock") {
        robotScore++;
        return `You lose! ${comp[1]} beats ${comp[0]}`;
    } else {
        humanScore++;
        return `You win! ${comp[0]} beats ${comp[1]}`;
    }
}

function scoreKeeper(e) {
    //Check if game has already reached 5 and resets it
    if (humanScore===5 || robotScore===5) {
        robotScore = 0;
        humanScore = 0;
    }
    //Plays round and displays results
    result.textContent = round(e.target.alt);
    score.textContent = `You: ${humanScore}     Robot: ${robotScore}`;
    if (humanScore===5) {
        result.textContent = "You beat the robot!";
    } else if (robotScore===5) {
        result.textContent = "The robot won... Try again!"
    }
}

rockButton.addEventListener('click', scoreKeeper);
paperButton.addEventListener('click', scoreKeeper);
scissorsButton.addEventListener('click', scoreKeeper);