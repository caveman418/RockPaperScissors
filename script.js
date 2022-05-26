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
    comp[0] = playerSelection; //put into an array just to shorten the variable calls in the following if statement (pointless to do it this way but I used the variable names given in the assignment and I have work soon so don't want to revise [sorry if anyone is reading this lol])
    comp[1] = computerSelection;

    if (comp[0]===comp[1]) return `The game ends in a tie! You both chose ${playerSelection}`;

    if (comp[0]==="rock" && comp[1]==="paper" || comp[0]==="paper" && comp[1]==="scissors" || comp[0]==="scissors" && comp[1]==="rock") {
        return `You lose! ${comp[1]} beats ${comp[0]}`;
    } else {
        return `You win! ${comp[0]} beats ${comp[1]}`;
    }
}

//function to call "round" function 5 times and display the results (assumes player selection is always rock)
function game() {
    const playerSelection = "rock";
    let wins = 0;
    for (let i=0; i<5; i++) { //for loop to play round() 5 times and uses regex to set a win counter (not most efficient but wanted to use regex because it's fun)
        let result=[];
        result[i] = round(playerSelection);
        console.log(result[i]);
        if (/win/.test(result[i])) {wins++};
    }
    return `You won ${wins} times!`;
}

//tests and returns how many game() function calls it takes to win all 5 games against the computer (just for fun)
function test() {
    let result;
    let count = 0;
    while (result !== `You won 5 times!`) { //again, didn't really need to do this, but I haven't used while loops at all and wanted to try something out (this is making the file size unnecessarily big, if a recruiter is reading this at some point in the future I am so sorry lol
        result = game();
        count++
    }
    return count;
}