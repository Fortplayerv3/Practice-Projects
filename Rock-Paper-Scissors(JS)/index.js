function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random()*choices.length)];

}
function getHumanChoice() {
    let game = prompt("Choose Rock, Paper, or Scissors?");
    
    if (game === null) { 
        console.log("Game canceled by user.");
        return null; 
    }

    game = game.toLowerCase().trim();

    if (!["rock", "paper", "scissors"].includes(game)) {
        console.log("Invalid choice. Please choose rock, paper, or scissors.");
        return getHumanChoice(); 
    }

    return game;
}
function playRound(humanChoice,computerChoice){
 if(humanChoice===computerChoice){
    console.log("Both chose"+ " " + humanChoice +" "+ "it's a Tie");
}else if(humanChoice==="rock" && computerChoice==="paper"){
    console.log("You lose!Paper beats rock");
    computerScore++;
}else if(humanChoice==="paper" && computerChoice==="scissors"){
    console.log("You lose!scissors beats paper");
    computerScore++;
}else if(humanChoice==="scissors" && computerChoice==="rock"){
    console.log("You lose!rock beats scissors");
    computerScore++;
}else{
    console.log("You win!"+" "+humanChoice+" "+"beats"+" "+computerChoice);
    humanScore++;
}
}
function playGame(){
   
for(let i=0 ; i<5 ; i++){
    let humanSelection=getHumanChoice();
    if(humanSelection===null) break;
    let computerSelection=getComputerChoice();
playRound(humanSelection,computerSelection);
}
 if(humanScore ===computerScore){
    console.log("It's a tie");
}else if(humanScore >computerScore){
    console.log("You win the game");
}else{
    console.log("Computer wins the game");
}
}
let humanScore=0 , computerScore=0;
    playGame();

