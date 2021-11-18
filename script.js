"use strict";

// defining global scopes
let userScore = 0;
let computerScore = 0;
let maxRound = 3;
let rounds = 0;
let userChoice = "";
let computerChoice = "";
let choices = ["ROCK", "PAPER", "SCISSORS"];
let matchWinner = null;
//computers random pick
const computerPick = () => {
  computerChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log(computerChoice);
};
computerPick();

// functions for user selection invoked by the press of the img button
const rock = () => {
  userChoice = "ROCK";
  console.log(userChoice);
  imageVisibility.rockDisable();
  imageVisibility.hidePaper();
  imageVisibility.hideScissors();
  whoWon();
};
const paper = () => {
  userChoice = "PAPER";
  console.log(userChoice);
  imageVisibility.paperDisable();
  imageVisibility.hideRock();
  imageVisibility.hideScissors();
  whoWon();
};
const scissors = () => {
  userChoice = "SCISSORS";
  console.log(userChoice);
  imageVisibility.scissorsDisable();
  imageVisibility.hideRock();
  imageVisibility.hidePaper();
  whoWon();
};

const imageVisibility = {
  rockImage: document.getElementById("rock-image"),
  paperImage: document.getElementById("paper-image"),
  scissorsImage: document.getElementById("scissors-image"),

  hideRock: function () {
    this.rockImage.style.visibility = "hidden";
  },
  hidePaper: function () {
    this.paperImage.style.visibility = "hidden";
  },
  hideScissors: function () {
    this.scissorsImage.style.visibility = "hidden";
  },
  visibleRock: function () {
    this.rockImage.style.visibility = "visible";
  },
  visiblePaper: function () {
    this.paperImage.style.visibility = "visible";
  },
  visibleScissors: function () {
    this.scissorsImage.style.visibility = "visible";
  },
  rockDisable: function () {
    this.rockImage.disabled = true;
  },
  paperDisable: function () {
    this.paperImage.disabled = true;
  },
  scissorsDisable: function () {
    this.scissorsImage.disabled = true;
  },
  rockEnable: function () {
    this.rockImage.disabled = false;
  },
  paperEnable: function () {
    this.paperImage.disabled = false;
  },
  scissorsEnable: function () {
    this.scissorsImage.disabled = true;
  },
};

const grayOutComputerPick = () => {
  let computerImage = document.getElementById("computer-guess");
  computerImage.src =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEWAgIB7e3vCwsLIyMjPz8/V1dV4eHjc3Nzj4+PMzMzt7e1zc3O/v7/////39/fx8fHg4ODJbms7AAABaElEQVR4nO3dSWrDABBFQcm2PMkZ7n/aaJFNiCEmZOBJVSf4b9/Qw9Pzy/V8Pp8W0+Lw7rL/YPd9+y9dDo+YHnH65DpM8/Ge8S/dXfAz5tswHYc1G3cK65bCg8I2hX0K+xT2KexT2LcUXsb/HvGrlsK9wjaFfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9h3yYKdwrbFPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2LeJiyGFcQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2baJw/T9K1v9nRmGcwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8K+pXBS2KawT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insG8ThSeFbQr7FPYp7FPYp7BPYZ/Cvm0UzuOazbfhetut2e31DZx9EnazzT4gAAAAAElFTkSuQmCC";
};
const computerImageDisplay = () => {
  let computerImage = document.getElementById("computer-guess");
  if (computerChoice === "ROCK") {
    console.log("ROCK computer image activated");
    computerImage.src =
      "https://lh3.googleusercontent.com/fMNDd7zHDqSTLhVNOQFCqJ3C1T0f9xL1BBJfgnT4MUWlKuzC1pxW3ZOBZWsMwhpmdP-76P0ud6oMoUhcsdVC-fOrPKs7hNQPNgSVcAotIBsjXq_pzU4wx8WeLhhqmoMIOwpPMOrqVQ=w2400";
  } else if (computerChoice === "PAPER") {
    console.log(" paper computer image activated");
    computerImage.src =
      "https://lh3.googleusercontent.com/L0TTaT6G1jJ9DQN-Tj4RKyroxzX3DmV3oxUdaALSdmtUldGzTfD8Gt--yN1j-HwqByAj7vFwXBvtIjKvC4MBAP7cNiPhzWoZCrnHhij9zRJ20m52tDwumtITppscTSj1kPDGNSRnUw=w2400";
  } else if (computerChoice === "SCISSORS") {
    console.log(" scissors computer image activated");
    computerImage.src =
      "https://lh3.googleusercontent.com/Hx1AgXsyhAMYUk-DE61Poacem545PUdXT2VzmX6wkvYgQV2ss759HNjr738TZVDB1OQH1c0oDLKeLOJ2q7xNjTtZizhxyk6TiprOxrMrqI46e6YhH-LigwvbjscELSXIQUu4PwWQ_w=w2400";
  } else {
    null;
  }
};
//user and computer comparison
const whoWon = () => {
  computerImageDisplay();
  let winner = document.getElementById("winner");

  if (userChoice === computerChoice) {
    console.log("its a tie");
    winner.textContent = `${winner.textContent} It's a Tie!😱`;
    rounds++;
    theRounds();
  } else if (userChoice === "ROCK" && computerChoice === "SCISSORS") {
    console.log("userwon");
    winner.textContent = `${winner.textContent} You Win!🥇`;
    userScore++;
    rounds++;
    theUserScore();
    //scoreBoard.updatingUserScore();
    theRounds();
  } else if (userChoice === "PAPER" && computerChoice === "ROCK") {
    console.log("userwon");
    winner.textContent = `${winner.textContent} You Win!🥇`;
    userScore++;
    rounds++;
    theUserScore();
    //scoreBoard.updatingUserScore();
    theRounds();
  } else if (userChoice === "SCISSORS" && computerChoice === "PAPER") {
    console.log("userwon");
    winner.textContent = `${winner.textContent} You Win!🥇`;
    userScore++;
    rounds++;
    theUserScore();
    //scoreBoard.updatingUserScore();
    theRounds();
  } else if (computerChoice === "PAPER" && userChoice === "ROCK") {
    console.log("computerwon");
    winner.textContent = `${winner.textContent} Computer Wins!🥇😏`;
    computerScore++;
    rounds++;
    theComputerChoice();
    //scoreBoard.updatingComputerScore();
    theRounds();
  } else if (computerChoice === "SCOSSORS" && userChoice === "PAPER") {
    console.log("computerwon");
    winner.textContent = `${winner.textContent} Computer Wins!🥇😏`;
    computerScore++;
    rounds++;
    theComputerChoice();
    //scoreBoard.updatingComputerScore();
    theRounds();
  } else if (computerChoice === "ROCK" && userChoice === "SCISSORS") {
    console.log("computerwon");
    winner.textContent = `${winner.textContent} Computer Wins!🥇😏`;
    computerScore++;
    rounds++;
    theComputerChoice();
    //scoreBoard.updatingComputerScore();
    theRounds();
  } else {
    null;
  }
};

//js and html BUG after adding the clear page part, check if the text is getting appeneded to the variale or if it clears

const theUserScore = () => {
  let userScoreText = document.getElementById("user-score-change");
  userScoreText.textContent = `${userScoreText.textContent} ${userScore}`;
};
const theComputerChoice = () => {
  let computerScoreText = document.getElementById("computer-score-change");
  computerScoreText.textContent = `${computerScoreText.textContent} ${computerScore}`;
};
const theMax
const theRounds = () => {
  let roundsText = document.getElementById("round-change");
  let maxText = document.getElementById("max-rounds");
  roundsText.textContent = `${rounds}`;
  maxText.textContent = `${maxRound}`;

  if (rounds === maxRound) {
    if (userChoice === computerChoice) {
      alert("GAME OVER! The Game Ended in a TIE");
    } else if (userScore > computerScore) {
      alert("GAME OVER! YOU WON");
    } else if (computerScore > userScore) {
      alert("GAME OVER! COMPUTER WON");
    } else {
      null;
    }
  } else {
    null;
  }
};

//TODO identify the winner
//TODO clear the game after user submits response
const clearPlay = () => {
  console.log("page clear");
  enableRock();
  // userChoice = "";

  // if (userChoice === "") {
  //   //reopen make pic buttons accessible
  // }
};
const reset = () => {
  imageVisibility.visibleRock();
  imageVisibility.visiblePaper();
  imageVisibility.visibleScissors();
  imageVisibility.rockEnable();
  imageVisibility.paperEnable();
  imageVisibility.scissorsEnable();
  grayOutComputerPick();
  computerPick();
  console.log("reset button pressed");
};
//fix the display after every reset BUG BUG BUG
//BUG BUG BUG an actual page reset
