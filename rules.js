// runs a function that simulates an opponents choice.
function getComputerChoice (){

let choice = ['Rock', 'Paper', 'Scissors'];

let computerChoice = choice[Math.floor(Math.random() * choice.length)];

return computerChoice;
}
// console.log(getComputerChoice());

// get player choice

function playerTurn (){

      let Player = prompt("your play!");

      const lowerCased = Player.toLowerCase();
      const firstUpper = lowerCased.toUpperCase()[0]; //Capitalizes first letter
      const modded = lowerCased.replace(lowerCased[0], `${firstUpper}`);
      return modded;
}
// letsPlay();

console.log(playerTurn());