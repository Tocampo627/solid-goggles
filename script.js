"use strict";
 
// defining global scopes
let userScore = 0;
let computerScore = 0;
let maxRound = 3;
let userChoice = null;
let computerChoice = null;
let choices = ["ROCK", "PAPER", "SCISSORS"];
 
//computers random pick
const computerPick = () => {
 let computerChoice = choices[Math.floor(Math.random() * choices.length)];
 console.log(computerChoice);
};
computerPick();
// functions for user selection
const rock = () => {
 userChoice = "ROCK";
 console.log(userChoice);
};
const paper = () => {
 userChoice = "PAPER";
 console.log(userChoice);
};
const scissors = () => {
 userChoice = "SCISSORS";
 console.log(userChoice);
};
//user and ocmputer comparison
const whoWon = () => {};
 

