function LuckySevens() {
  //variables
  var initialBet = document.forms["gameForm"]["startingBet"].value;
  var rolls = 0;
  var rollsHigh = 0;
  var playerMoney = Number(initialBet);
  var winnings = Number(initialBet);

  checkBet(initialBet);

  while (playerMoney > 0) {
    let rollTotal = rollDice();
    rolls += 1;
    if (rollTotal === 7) {
      playerMoney += 4;
      if (playerMoney > winnings) {
        winnings = playerMoney;
        rollsAtHighest = rolls;
      }
    } else {
      playerMoney -= 1;
    }
  }
  if (initialBet > 0) {
    getValues(initialBet, rolls, winnings, rollsAtHighest);
  }
  return false;
};

function rollDice() {
  let first = Math.ceil(Math.random() * (1 + 6 - 1));
  let second = Math.ceil(Math.random() * (1 + 6 - 1));
  let rollSum = first + second;

  return rollSum;
};
function checkBet(valueToCheck) {
  if (valueToCheck <= 0) {
    alert("Bet must be greater than zero. Please enter again.");
  };
};

function getValues(initialBet, rolls, winnings, rollsAtHighest) {
  document.getElementById("starting-bet").innerText = "$" + initialBet;
  document.getElementById("highest-amount-won").innerText = "$" + winnings;
  document.getElementById("total-rolls-before-going-broke").innerText = rolls;
  document.getElementById("rolls-count-at-highest-amount-won").innerText = rollsAtHighest;
  document.getElementById("submitButton").innerText = "Play Again!";

};
