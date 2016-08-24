//bussiness logic
var pigDice = {
player1:0,
player2:0,
currentPlayer:1,
turnScore:0,
};

function rollDice() {
  var die6 = Math.floor(Math.random()*6) + 1;
  return die6;
}

function playerTurn() {
  var dieRoll = rollDice();
  if (dieRoll === 1) {
  pigDice.turnScore = 0;
  alert("You rolled a Pig! It's the next player's turn!")
  nextPlayer();
} else {
  pigDice.turnScore += dieRoll;
}
console.log(pigDice.turnScore);
return dieRoll;
}

function holdButton() {
  pigDice.currentPlayer += pigDice.turnScore;

  nextPlayer();
}

function nextPlayer() {
  if (pigDice.currentPlayer === 1) {
    pigDice.currentPlayer = 2;
  } else {
    pigDice.currentPlayer = 1;
  }
}
//UI logic
