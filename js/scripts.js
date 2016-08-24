//bussiness logic
var pigDice = {
  player1: 0,
  player2: 0,
  currentPlayer: 1,
  turnScore: 0,
};

function rollDice() {
  var die6 = Math.floor(Math.random() * 6) + 1;
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
    if (pigDice.currentPlayer === 1) {
      if (pigDice.turnScore + pigDice.player1 >= 100) {
        alertWinner(1);
      }
    } else if (pigDice.turnScore + pigDice.player2 >= 100) {
      alertWinner(2);
    }
  }
  return dieRoll;
}

function holdButton() {
  var playerUp = pigDice.currentPlayer;
  if (playerUp === 1) {
    pigDice.player1 += pigDice.turnScore;
  } else {
    pigDice.player2 += pigDice.turnScore;
  }
  pigDice.turnScore = 0;
  nextPlayer();
}

function nextPlayer() {
  if (pigDice.currentPlayer === 1) {
    pigDice.currentPlayer = 2;
  } else {
    pigDice.currentPlayer = 1;
  }
}

function resetGame() {
  pigDice.player1 = 0;
  pigDice.player2 = 0;
  pigDice.currentPlayer = 1;
  pigDice.turnScore = 0;
}

//UI logic

function alertWinner(pigFace) {
  alert("Player" + pigFace + " Wins!");
  resetGame();
  $(".gameStatusDisplay").text(0);
}

$(document).ready(function() {
$("#roll").click(function() {
  output = playerTurn();
  $("#CurrRollResults").text(output);
  $("#CurrRollScore").text(pigDice.turnScore);
  });

  $("#hold").click(function() {
    holdScore = holdButton();

    $("#totalPlayer1").text(pigDice.player1);

    $("#totalPlayer2").text(pigDice.player2);
  });
});
