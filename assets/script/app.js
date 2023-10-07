let score1 = 0; // track player1's score
let score2 = 0; // track player1's score
let target = 100; // target score
let die1 = 0;
let die2 = 0;
console.log("hello");

function reloadPage() {
  window.location.reload();
}
function resetDice() {
  die1 = 0;
  die2 = 0;
}
function rollDie(die) {
  die = Math.floor(Math.random() * 6) + 1;
  return die;
}
function isDouble() {
  if (die1 === die2) return true;
  // todo: add fun thing to show player who got a double
  return false;
}

const rollBtn = document.querySelector("#roll");
const holdBtn = document.querySelector("#hold");
const score1Span = document.querySelector("score1");
/**
 * 1 roll dice + check double
 * 2 add to score
 * 3 compare with target
 * 4
 */
function rollDice() {
  if (score1 < target /*|| score2 <target*/) {
    die1 = rollDie(die1);
    console.log("rolled die1: ", die1);
    die2 = rollDie(die2);
    console.log("rolled die2: ", die2);
    if (isDouble()) {
      console.log("isDouble: ", isDouble());
      score1 = 0;
      //! track the correct score
    } else {
      score1 += die1 + die2;
      if (score1 >= target) {
        alert("You won! ");
      }
    }
    console.log("score1: ", score1);
  }
}
rollBtn.addEventListener("click", rollDice);
