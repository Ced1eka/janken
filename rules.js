// runs a function that simulates an opponents choice.
function getComputerChoice (){

let choice = ['Rock', 'Paper', 'Scissors'];

let computerChoice = choice[Math.floor(Math.random() * choice.length)];

return computerChoice;
}



// get player choice

// function playerTurn (){

//       let Player = prompt("your play!");

//       let lowerCased = Player.toLowerCase();
//       let firstUpper = lowerCased.toUpperCase()[0]; //Capitalizes first letter
//       let modded = lowerCased.replace(lowerCased[0], `${firstUpper}`);
//       return modded;

// }



// function playRound(playerSelection, computerSelection) {
//       // your code here!
//       if(playerSelection === computerSelection){
//             alert('draw');
//       } else if (playerSelection === "Rock" && computerSelection === "Paper"||
//                   playerSelection === "Paper" && computerSelection === "Scissors" ||
//                   playerSelection === "Scissors" && computerSelection === "Rock"){
//             alert('computer won');
//       } else if (playerSelection === "Paper" && computerSelection === "Rock"||
//       playerSelection === "Scissors" && computerSelection === "Paper" ||
//       playerSelection === "Rock" && computerSelection === "Scissors"){
//             alert('player won');
//       } else {
//             alert("this isn't an anime");
//       }
// }

function game (){
      let e =Number(prompt("how many rounds? "));
      for(let i = 0; i < e; i++){
      let playerTotal = 0;
      let compTotal = 0;

      let Player = prompt("your play!");
      let lowerCased = Player.toLowerCase();
      let firstUpper = lowerCased.toUpperCase()[0]; //Capitalizes first letter
      let playerSelection = lowerCased.replace(lowerCased[0], `${firstUpper}`);
      let computerSelection = getComputerChoice();

      function rounds(playerSelection, computerSelection) {
            // your code here!
            if(playerSelection === computerSelection){
                  alert('draw');
            } else if (playerSelection === "Rock" && computerSelection === "Paper"||
                        playerSelection === "Paper" && computerSelection === "Scissors" ||
                        playerSelection === "Scissors" && computerSelection === "Rock"){
                  alert('computer won');
                  compTotal+=1;
            } else if (playerSelection === "Paper" && computerSelection === "Rock"||
            playerSelection === "Scissors" && computerSelection === "Paper" ||
            playerSelection === "Rock" && computerSelection === "Scissors"){
                  alert('player won');
                  playerTotal+=1;
            } else {
                  alert("this isn't an anime");
            }
      }
     console.log(rounds(playerSelection, computerSelection));
      // let bil = () =>{
            // console.log(playerSelection, computerSelection);
      // }

      // bil();

}

}
      game();
//     console.log(playerSelection, computerSelection);
//     console.log(playRound(playerSelection, computerSelection));