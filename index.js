reset();
const selector = document.querySelector(".gameSection");
const Heading = document.querySelectorAll(".resultHeading");
const resultSection = document.querySelector(".resultSection");
const userEffect = document.querySelectorAll(".user-effect");
const computerEffect = document.querySelectorAll(".computer-effect");
const playAgainButton = document.querySelector(".playAgain");
const rulesButton = document.querySelector(".rules");
const closeButton = document.querySelector(".closeButton");
const rulesDisplay = document.querySelector(".rulesContainer");
const playAgainHurryPage = document.querySelector(".playAgainHurryPage");
let userValue = localStorage.getItem("score-user") || 0;
let computerValue = localStorage.getItem("score-computer") || 0;
const userScoreElement = document.querySelector(".userScore");
const computerScoreElement = document.querySelector(".pcScore");
userScoreElement.innerHTML = userValue;
computerScoreElement.innerHTML = computerValue;

rulesButton.addEventListener("click", () => {
  rulesDisplay.style.display = "block";
});
closeButton.addEventListener("click", () => {
  rulesDisplay.style.display = "none";
});

function selected(choice) {
  reset();
  const userAnswer = choice;
  const pcAnswer = computerGenerated();
  const decideWinner = comparingAnswer(userAnswer, pcAnswer);
  const status = document.querySelector(".resultsStatus" + decideWinner);
  const userChoiceDisplay = document.querySelector(".userChoice" + choice);
  const pcChoiceDisplay = document.querySelector(".computerChoice" + pcAnswer);

  resultSection.style.display = "block";
  selector.style.display = "none";
  playAgainButton.style.display = "block";
  playAgainButton.addEventListener("click", () => playAgain());
  playAgainHurryPage.addEventListener("click", () => playAgain());

  Heading.forEach((i) => (i.style.display = "block"));
  userChoiceDisplay.style.display = "block";
  status.style.display = "block";
  pcChoiceDisplay.style.display = "block";

  if (decideWinner === "Win") {
    userEffect.forEach((i) => (i.style.display = "block"));
    keepScore(1);
    winner();
  } else if (decideWinner === "Lost") {
    computerEffect.forEach((i) => (i.style.display = "block"));
    keepScore(0);
  }
}

function winner() {
  const nextButton = document.querySelector(".nextButton");
  nextButton.style.display = "block";
  nextButton.addEventListener("click", () => {
    const congratulationPage = document.querySelector(".ifWin");
    congratulationPage.style.display = "block";
    playAgainButton.style.display = "block";
    nextButton.style.display = "none";
    let displayNoneValue = [
      ".userChoiceRock",
      ".userChoicePaper",
      ".userChoiceScissors",
      ".resultsStatusLost",
      ".resultsStatusWin",
      ".resultsStatusTie",
      ".computerChoiceScissors",
      ".computerChoicePaper",
      ".computerChoiceRock",
      ".resultHeading",
      ".resultSection",
      ".headerSection",
      ".user-effect",
      ".computer-effect",
    ];
    let findComponent = document.querySelectorAll(displayNoneValue);
    findComponent.forEach((i) => (i.style.display = "none"));
  });
}

function playAgain() {
  const resetedValue = [".headerSection", ".gameSection", ".ruleButton"];
  let map = document.querySelectorAll(resetedValue);
  map.forEach((i) => (i.style.display = "block"));
  const displayNoneValue = [
    ".userChoiceRock",
    ".userChoicePaper",
    ".userChoiceScissors",
    ".resultsStatusLost",
    ".resultsStatusWin",
    ".resultsStatusTie",
    ".computerChoiceScissors",
    ".computerChoicePaper",
    ".computerChoiceRock",
    ".resultHeading",
    ".resultSection",
    ".playAgain",
    ".ifWin",
    ".user-effect",
    ".computer-effect",
    ".nextButton",
  ];
  let findComponent = document.querySelectorAll(displayNoneValue);
  findComponent.forEach((i) => (i.style.display = "none"));
}

function reset() {
  const resetedValue = [
    ".userChoiceRock",
    ".userChoicePaper",
    ".userChoiceScissors",
    ".resultsStatusLost",
    ".resultsStatusWin",
    ".resultsStatusTie",
    ".computerChoiceScissors",
    ".computerChoicePaper",
    ".computerChoiceRock",
    ".nextButton",
    ".resultHeading",
    ".playAgain",
    ".resultSection",
    ".ifWin",
    ".user-effect",
    ".computer-effect",
  ];

  let map = document.querySelectorAll(resetedValue);
  map.forEach((i) => (i.style.display = "none"));
}

function computerGenerated() {
  let answer = Math.floor(Math.random() * 3);
  switch (answer) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
    case 3:
      return "Scissors";
  }
}

function comparingAnswer(userAnswer, pcAnswer) {
  let map = {
    Rock: {
      Paper: "Lost",
      Scissors: "Win",
      Rock: "Tie",
    },
    Paper: {
      Paper: "Tie",
      Scissors: "Lost",
      Rock: "Win",
    },
    Scissors: {
      Paper: "Win",
      Scissors: "Tie",
      Rock: "Lost",
    },
  };

  return map[userAnswer][pcAnswer];
}

let buttons = document.querySelectorAll(".choice-button");
var buttonsCount = buttons.length;

buttons.forEach((i) => {
  i.addEventListener("click", () => {
    selected(i.id);
  });
});

function keepScore(i) {
  if (i === 1) {
    const score = document.querySelector(".userScore");
    userValue++;
    localStorage.setItem("score-user", userValue);
    score.innerHTML = userValue;
  } else if (i === 0) {
    const score = document.querySelector(".pcScore");
    computerValue++;
    localStorage.setItem("score-computer", computerValue);
    score.innerHTML = computerValue;
  }
}
