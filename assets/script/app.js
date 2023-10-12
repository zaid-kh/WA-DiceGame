let score1 = 0; // track player1's score
let score2 = 0; // track player2's score
let target = 100; // target score
let die1 = 0;
let die2 = 0;
let currentPlayer = 1;
// todo: add temporary value of HOLD -> sum player's points until next switch

const die1Img = document.querySelector("#die1Img");
die1Img.setAttribute("src", `assets/images/dice-6.png`);
const die2Img = document.querySelector("#die2Img");
die2Img.setAttribute("src", `assets/images/dice-6.png`);

function reloadPage() {
  window.location.reload();
}
function resetDice() {
  die1 = 0;
  die2 = 0;
}

function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}
function switchPlayer() {
  currentPlayer = currentPlayer === 1 ? 2 : 1;
  resetDice();
}

function rollDice() {
  // prevent action if either player hit the target
  if (
    (currentPlayer === 1 && score1 < target) ||
    (currentPlayer === 2 && score2 < target)
  ) {
    die1 = rollDie();
    console.log(`Player ${currentPlayer} rolled die1: `, die1);
    die1Img.setAttribute("src", `assets/images/dice-${die1}.png`);
    die1Img.setAttribute("alt", `image of die-${die1}`);
    die2 = rollDie();
    die2Img.setAttribute("src", `assets/images/dice-${die2}.png`);
    die2Img.setAttribute("alt", `image of die-${die2}`);

    console.log(`Player ${currentPlayer} rolled die2: `, die2);

    if (isDouble()) {
      console.log(`Player ${currentPlayer} got a double!`);
      currentPlayer === 1 ? (score1 = 0) : (score2 = 0);
      switchPlayer();
    } else {
      currentPlayer === 1 ? (score1 += die1 + die2) : (score2 += die1 + die2);
      console.log(
        `Player ${currentPlayer} current score: `,
        currentPlayer === 1 ? score1 : score2
      );

      score1Text.textContent = score1;
      score2Text.textContent = score2;
      if (score1 > target || score2 > target)
        alert(`Player ${currentPlayer} Won !`);
    }
  }
}

const rollBtn = document.querySelector("#roll");
const holdBtn = document.querySelector("#hold");
const score1Text = document.querySelector("#score1");
const score2Text = document.querySelector("#score2");

rollBtn.addEventListener("click", rollDice);

function holdListener() {
  //todo: implement style changes
  // current(1|2).text = 0
  switchPlayer();
}

holdBtn.addEventListener("click", holdListener);

function isDouble() {
  return die1 === die2;
}
