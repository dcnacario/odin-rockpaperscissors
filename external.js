// variables
let computerChoice = "";
let message = "";
let playerScore = 0;
let computerScore = 0;
let draw = 0;

//getting the computerChoice randomly using the math random
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);

    if(choice == 0){
        return "rock";
    }
    else if (choice == 1){
        return "paper";
    }
    else {
        return "scissors";
    }
}

//the algorithm for choosing the winner
function playRound (playerChoice,computerChoice){
    let playerChoiceNotSensitive = playerChoice.toLowerCase();
    if (playerChoiceNotSensitive == "rock" && computerChoice == "scissors"){
        playerScore++;
        return "You Win, Rock beats Scissors";
    }
    else if(playerChoiceNotSensitive == "scissors" && computerChoice == "rock"){
        computerScore++;
        return  "You Lose, Scissors beats Rock";
    }
    else if(playerChoiceNotSensitive == "paper" && computerChoice == "rock"){
        playerScore ++;
        return "You Won!, Paper beats Rock";
    }
    else if(playerChoiceNotSensitive == "rock" && computerChoice == "paper"){
        computerScore++;
        return "You Lose!, Paper beats Rock";
    }
    else if(playerChoiceNotSensitive == "scissors" && computerChoice == "paper"){
        playerScore++;
        return "You Won!, Scissors beats Paper";

    }
    else if(playerChoiceNotSensitive == "paper" && computerChoice == "scissors"){
        computerScore++;
        return "You Lose!, Paper beats Scissors";
    }
    else if(playerChoice.length == computerChoice.length) {
        draw++;
        return "Draw";
    }
    else {
        return "Invalid Choice!";
    }
}

// function for starting the game that will loop for 5 games
function game(){
    let playerChoice = prompt("Choices: Rock, Paper, Scissors", "");
    for(i = 0 ; i < 5 ; i++){
        computerChoice = getComputerChoice();
        console.log(computerChoice)
        console.log(playRound(playerChoice,computerChoice));
        console.log("Player Score: "+playerScore);
        console.log("Computer Score: "+computerScore);
        console.log("Draws: "+draw);
    }
}
game();


