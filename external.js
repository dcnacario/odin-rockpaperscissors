// variables
let computerChoice = "";
let message = "";
let playerScore = 0;
let computerScore = 0;
let draw = 0;

const bod = document.querySelector("body");
const div = document.createElement("div");

const pPlayer = document.createElement("p");
const pComputer = document.createElement("p");
div.setAttribute("id","result");

bod.appendChild(div);


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
        return  "You Win, Rock beats Scissors";
    }
    else if(playerChoiceNotSensitive == "scissors" && computerChoice == "rock"){
        computerScore++;
        return   "You Lose, Scissors beats Rock";
    }
    else if(playerChoiceNotSensitive == "paper" && computerChoice == "rock"){
        playerScore ++;
        return "You Won!, Paper beats Rock";
    }
    else if(playerChoiceNotSensitive == "rock" && computerChoice == "paper"){
        computerScore++;
        return  "You Lose!, Paper beats Rock";
    }
    else if(playerChoiceNotSensitive == "scissors" && computerChoice == "paper"){
        playerScore++;
        return  "You Won!, Scissors beats Paper";

    }
    else if(playerChoiceNotSensitive == "paper" && computerChoice == "scissors"){
        computerScore++;
        return  "You Lose!, Paper beats Scissors";
    }
    else if(playerChoice.length == computerChoice.length) {
        draw++;
        return  "Draw";
    }
    else {
        return "Invalid Choice!";
    }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        let playerChoice = button.value;
        let message = playRound(playerChoice,getComputerChoice());
        div.textContent = message;
        pPlayer.textContent = "Player Score: "+playerScore;
        pComputer.textContent = "Computer Score: "+computerScore;
        div.appendChild(pPlayer);
        div.appendChild(pComputer);

        if(playerScore >= 5){
            pPlayer.textContent = "You Win!";
            pComputer.textContent = "";
            const btn = document.createElement("button");
            btn.setAttribute('id','playAgain');
            btn.textContent = "Play again";
            div.appendChild(btn);
            restartGame(btn);
        }
        else if(computerScore >= 5){
            pComputer.textContent = "You Lose, Computer Wins";
            pPlayer.textContent = "";
            const btn = document.createElement("button");
            btn.setAttribute('id','playAgain');
            btn.textContent = "Play again";
            div.appendChild(btn);
            restartGame(btn);
        }
    });
});

// function for starting the game that will loop for 5 games
function restartGame(btn){
    playerScore = 0;
    computerScore = 0;

    btn.addEventListener("click",()=>{
        btn.remove();
        pPlayer.textContent = "Player Score: "+playerScore;
        pComputer.textContent = "Computer Score: "+computerScore;
    })
}


