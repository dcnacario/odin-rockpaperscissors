let computerChoice = "";
let message = "";

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

function playRound (playerChoice,computerChoice){
    let playerChoiceNotSensitive = playerChoice.toLowerCase();
    if (playerChoiceNotSensitive == "rock" && computerChoice == "scissors"){
        return "You Win, Rock beats Scissors";
    }
    else if(playerChoiceNotSensitive == "scissors" && computerChoice == "rock"){
        return  "You Lose, Scissors beats Rock";
    }
    else if(playerChoiceNotSensitive == "paper" && computerChoice == "rock"){
        return "You Won!, Paper beats Rock";
    }
    else if(playerChoiceNotSensitive == "rock" && computerChoice == "paper"){
        return "You Lose!, Paper beats Rock";
    }
    else if(playerChoiceNotSensitive == "scissors" && computerChoice == "paper"){
        return "You Won!, Scissors beats Paper";
    }
    else if(playerChoiceNotSensitive == "paper" && computerChoice == "scissors"){
        return "You Lose!, Paper beats Scissors";
    }
    else if(playerChoice.length == computerChoice.length) {
        return "Draw";
    }
    else {
        return "Invalid Choice!";
    }
}

function game(){
    let playerChoice = prompt("Choices: Rock, Paper, Scissor", "");
    for(i = 0 ; i < 5 ; i++){
        computerChoice = getComputerChoice();
        console.log(computerChoice)
        console.log(playRound(playerChoice,computerChoice));
    }
}
game();


