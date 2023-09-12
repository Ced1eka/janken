



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
      let playerTotal = 0;
      let compTotal = 0;
      let roundAmount =Number(prompt("how many rounds? "));

      // get comp choice
      function getComputerChoice (){

      let choice = ['Rock', 'Paper', 'Scissors'];

      let computerChoice = choice[Math.floor(Math.random() * choice.length)];

      return computerChoice;
      }

// initiate DOM elements
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const body = document.querySelector('.container');
const div = document.createElement('div');
const h1Ele = document.createElement('h1');

const results = document.createElement('div');
const compResults = document.createElement('p');
const playerResults = document.createElement('p');
const roundTotals = document.createElement('h2');
body.appendChild(roundTotals);
roundTotals.textContent = `total round is ${roundAmount}`;

rock.addEventListener('click', () => {
      let playerSelec= 'Rock';
      let computerSelec = getComputerChoice();
      rounds(playerSelec, computerSelec);
      roundEnd ();

      console.log(playerSelec, computerSelec)


})

paper.addEventListener('click', () => {
      let playerSelec= 'Paper';
      let computerSelec= getComputerChoice();
      rounds(playerSelec, computerSelec);
      roundEnd ();

      console.log(playerSelec, computerSelec)



})

scissors.addEventListener('click', () => {
      let playerSelec= 'Scissors';
      let computerSelec= getComputerChoice();
      rounds(playerSelec, computerSelec);
      roundEnd ();

      console.log(playerSelec, computerSelec)


})



      function rounds(playerSelection, computerSelection) {
            // your code here!
            if(playerSelection === computerSelection){
                  body.appendChild(div);
                  h1Ele.textContent = 'its a tie';
                  div.appendChild(h1Ele);
                  roundAmount -=1;

            } else if (playerSelection === "Rock" && computerSelection === "Paper"||
                        playerSelection === "Paper" && computerSelection === "Scissors" ||
                        playerSelection === "Scissors" && computerSelection === "Rock"){
                  body.appendChild(div);
                  h1Ele.textContent = 'comp wins';
                  div.appendChild(h1Ele);
                  compTotal+=1;
                  roundAmount -=1;
            } else if (playerSelection === "Paper" && computerSelection === "Rock"||
            playerSelection === "Scissors" && computerSelection === "Paper" ||
            playerSelection === "Rock" && computerSelection === "Scissors"){
                  body.appendChild(div);
                  h1Ele.textContent = 'player wins';
                  div.appendChild(h1Ele);
                  playerTotal+=1;
                  roundAmount -=1;
            }
            compResults.textContent = `Computer current total is:${compTotal}`;
            playerResults.textContent = `Player current total is:${playerTotal}`;
            results.appendChild(compResults);
            results.appendChild(playerResults);
            body.appendChild(results);
            roundTotals.textContent = `total round is ${roundAmount}`;

      }

      const roundEnd = function() {
            if (roundAmount === 0){

                  const body = document.querySelector('.container');

                  body.removeChild(div);
                  body.removeChild(results);
                  const gameResult = document.createElement('h1');
                  if (playerTotal > compTotal){
                        gameResult.textContent = 'PLAYER WINS';
                        body.appendChild(gameResult);
                  } else if (playerTotal < compTotal){
                        gameResult.textContent = 'COMPUTER WINS';
                        body.appendChild(gameResult);
                  } else{
                        gameResult.textContent = "It's a TIE!";
                        body.appendChild(gameResult);
                  }




            }
      }


}



      game();
