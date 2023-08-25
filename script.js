function makeComputerChoice (){

    let choice = Math.floor(Math.random() * 3) + 1;

    switch(choice){
        case 1:
            return "rock";

        case 2:
            return "paper";
        
        default:
            return "scissors";
    }
}

function makePlayerChoice(){
    let a = prompt("Write your choice: Rock, Paper or Scissors");
    return a.toLowerCase();
}

function game(computer, player){

    if(computer == player){
        return "It's a tie!";

    }else if(computer == "rock" && player == "paper"){
        return "You win! Paper beats rock";

    }else if(computer == "rock" && player == "scissors"){
        return "You lose! Rock beats paper";

    }else if(computer == "paper" && player == "scissors"){
        return "You win! Scissors beats paper";

    }else if(computer == "paper" && player == "rock"){
        return "You lose! Paper beats rock";

    }else if(computer == "scissors" && player == "rock"){
        return "You win! Rock beats scissors";

    }else if(computer == "scissors" && player == "paper"){
        return "You lose! Scissors beat paper";
    }    
}

let rounds = parseInt(prompt("select how many rounds you wanna play"));

for (let i = 0; i < rounds; i++){

    console.log(game(makeComputerChoice(), makePlayerChoice()));
    
}