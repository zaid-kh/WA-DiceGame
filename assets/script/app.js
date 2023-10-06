const score1 = 0; // track player1's score
let target = 50; // target score
let die1 = 0;
let die2 = 0;

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
