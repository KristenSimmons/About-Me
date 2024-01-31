'use strict'

let correctCount = 0;

function getName(){
  //declaring a constant variable called usersName, assigning it the value of what the prompt returns (the users input)
  const usersName = prompt("Hello!! What is your name?");
  while (usersName == null || usersName == ''){
    if (usersName == null){
      usersName = confirm("Would you like to skip this step?");
      usersName = '';
      return usersName;
    } else {
      usersName = prompt("Please provide a name");
    }
  }
  return usersName;
}

let usersName = getName();
console.log(usersName);


alert(`Welcome, ${usersName}! Hit OK for a fun quiz!`);

alert('I am going to ask a series of Yes or No questions.. hit OK when you are ready!');

function getResponse(){
  //declaring a function to get a response from the user
  const metResponse = prompt('Have we ever met in person, yes or no?');
  let lowercaseResponse = metResponse.toLowerCase();{
    if (lowercaseResponse == 'no'){
      alert("That's too bad!");
    } else if (lowercaseResponse == 'yes'){
      alert("That's awesome!");
      correctCount += 1;
    }
  }
}
let metResponse = getResponse();
console.log(metResponse);

function colorAnswer(){
  // running function to ask user about my favorite color
  const faveColor = prompt('Is pink my favorite color?')
  let lowercaseColor = faveColor.toLowerCase();{
    if (lowercaseColor == 'no'){
      alert("Aww..you guessed wrong! Pink is my favorite color!");
    } else if (lowercaseColor == 'yes'){
      alert("That's right! Good job!");
      correctCount += 1;
    }
  }
}
let faveColor = colorAnswer();
console.log(faveColor);

function getTown(){
  const homeTown = prompt('Am I from Moore, OK?')
  let lowercaseTown = homeTown.toLowerCase();{
    if (lowercaseTown == 'no'){
      alert("Darn, that is not correct!");
    } else if (lowercaseTown == 'yes'){
      alert("Nice! You got it right!");
      correctCount += 1;
    }
  }
}
let homeTown = getTown();
console.log(homeTown);

function myKids(){
  const fourKids = prompt('Do I have 4 kids?')
  let lowercaseKids = fourKids.toLowerCase();{
    if (lowercaseKids == 'no'){
      alert("Incorrect! I have 2 boys, 2 girls!");
    } else if (lowercaseKids == 'yes'){
      alert("Correctamundo! You know me so well!");
      correctCount += 1;
    }
  }
}
let fourKids = myKids();
console.log(fourKids);

function myGrad(){
  const collegeGrad = prompt('Did I graduate from OU?')
  let lowercaseGrad = collegeGrad.toLowerCase();{
    if (lowercaseGrad == 'no'){
      alert("You got it right! Yay!");
      correctCount += 1;
    } else if (lowercaseKids == 'yes'){
      alert("I wish you were right! But i didn't!");
    }
  }
}
let collegeGrad = myGrad();
console.log(collegeGrad);

let myNumber = 32;

function findNumber(){
  for (let attempts = 4; attempts > 0; attempts--) {
    let faveNumber = prompt('What is my favorite number? 1-50');
    let replyNumber = parseInt(faveNumber);
    if (replyNumber > myNumber) {
      alert('Too high! Please try again');
    } else if (replyNumber < myNumber) {
      alert('Too low! Please try again');
    } else if (replyNumber === myNumber) {
      alert('You are right!! 32 is my favorite number!');
      correctCount += 1;
      break;
    }
    if (attempts === 1){
      alert('You are out of guesses, my fave number is 32!');
    }
  }
}
let replyNumber = findNumber();
console.log(replyNumber);


function getVaca(){
  let nextVaca = ["colorado", "co", "ski trip", "mountains", "pagosa springs"];
  for (let attempts = 6; attempts > 0; attempts--) {
    let guessVaca = prompt('Where am I going on vacation in February?');
    let lowerVaca = guessVaca.toLowerCase();
    for (let i = 0; i < nextVaca.length; i += 1) {
      if (lowerVaca !== nextVaca[i]) {
        alert('Sorry, guess again!');
      } else if (lowerVaca === nextVaca[i]) {
        alert('You are right!! And I cannot wait!');
        correctCount += 1;
        break;
      }
    }
    if (attempts === 1){
      alert('You are out of guesses! Acceptable answers would have been: Pagosa Springs, Colorado, ski trip, or the mountains!');
    }
  }
}
let nextVaca = getVaca();
console.log(getVaca);


alert(`Thanks for taking my quiz, ${usersName}! You got ${correctCount} out of 7 correct!`);



function getVaca() {
  let nextVaca = ["colorado", "co", "ski trip", "mountains", "pagosa springs"];
  let correctCount = 0; // Initialize correctCount variable

  for (let attempts = 6; attempts > 0; attempts--) {
    let guessVaca = prompt('Where am I going on vacation in February?');
    let lowerVaca = guessVaca.toLowerCase();
    let isCorrect = false; // Flag to check if the guess is correct

    for (let i = 0; i < nextVaca.length; i += 1) {
      if (lowerVaca === nextVaca[i]) {
        alert('You are right!! And I cannot wait!');
        correctCount += 1;
        isCorrect = true; // Set the flag to true when the guess is correct
        break;
      }
    }

    if (isCorrect) {
      // If the guess is correct, exit the loop
      break;
    } else {
      alert('Sorry, guess again!');
    }

    if (attempts === 1) {
      alert('You are out of guesses! Acceptable answers would have been: Pagosa Springs, Colorado, ski trip, or the mountains!');
    }
  }
}
