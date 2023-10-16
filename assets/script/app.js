let score1 = 0; // track player1's score
let score2 = 0; // track player2's score
let target = 100; // target score
let die1 = 0;
let die2 = 0;
let currentPlayer = 1;
let hold1 = 0;
let hold2 = 0;

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
  // add round score to total score
  currentPlayer === 1 ? (hold1 = 0) : (hold2 = 0);
  updateUI();
  // make the switch
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

    if (isDoubleSix()) {
      console.log(`Player ${currentPlayer} got a double!`);
      currentPlayer === 1 ? (score1 = 0) : (score2 = 0);
      currentPlayer === 1 ? (hold1 = 0) : (hold2 = 0);
      switchPlayer();
    } else {
      currentPlayer === 1 ? (hold1 += die1 + die2) : (hold2 += die1 + die2);
      console.log(
        `Player ${currentPlayer} held score: `,
        currentPlayer === 1 ? hold1 : hold2
      );

      updateUI();
      if (score1 + hold1 > target || score2 + hold2 > target) {
        score1 += hold1;
        console.log("score1: ", score1);
        score2 += hold2;
        console.log("score2: ", score2);
        updateUI();
        setTimeout(() => {
          alert(`Player ${currentPlayer} Won !`);
        }, 100);
      }
    }
  }
}

const rollBtn = document.querySelector("#roll");
const holdBtn = document.querySelector("#hold");
const score1Text = document.querySelector("#score1");
const score2Text = document.querySelector("#score2");
const current1Text = document.querySelector("#current1");
const current2Text = document.querySelector("#current2");
const newGameBtn = document.querySelector("#newGame");

rollBtn.addEventListener("click", rollDice);

function holdListener() {
  if (score1 < target && score2 < target) {
    currentPlayer === 1 ? (score1 += hold1) : (score2 += hold2);
    console.log("score1: ", score1);
    console.log("score2: ", score2);
    updateUI();
    switchPlayer();
  }
}

holdBtn.addEventListener("click", holdListener);

function isDoubleSix() {
  return die1 === 6 && die2 === 6;
}

function updateUI() {
  current1Text.textContent = hold1;
  current2Text.textContent = hold2;
  score1Text.textContent = score1;
  score2Text.textContent = score2;
}

function resetGame() {
  currentPlayer = 1;
  hold1 = 0;
  hold2 = 0;
  score1 = 0;
  score2 = 0;
  // update UI
  updateUI();
  resetDice();
}
newGameBtn.addEventListener("click", resetGame);
