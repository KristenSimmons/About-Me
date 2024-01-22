'use strict'

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

const metResponse = prompt('Have we ever met in person?');
let lowercaseResponse = metResponse.toLowerCase();{
  if (lowercaseResponse == 'no'){
    alert("That's too bad!");
  } else if (lowercaseResponseResponse == 'yes'){
    alert("That's awesome!");
  }
}
console.log(metResponse);

const faveColor = prompt('Is pink my favorite color?')
let lowercaseColor = faveColor.toLowerCase();{
  if (lowercaseColor == 'no'){
    alert("Aww..you guessed wrong! Pink is my favorite color!");
  } else if (lowercaseColor == 'yes'){
    alert("That's right! Good job!");
  }
}
console.log(faveColor);

const homeTown = prompt('Am I from Moore, OK?')
let lowercaseTown = homeTown.toLowerCase();{
  if (lowercaseTown == 'no'){
    alert("Darn, that is not correct!");
  } else if (lowercaseTown == 'yes'){
    alert("Nice! You got it right!");
  }
}
console.log(homeTown);

const fourKids = prompt('Do I have 4 kids?')
let lowercaseKids = fourKids.toLowerCase();{
  if (lowercaseKids == 'no'){
    alert("Incorrect! I have 2 boys, 2 girls!");
  } else if (lowercaseKids == 'yes'){
    alert("Correctamundo! You know me so well!");
  }
}
console.log(fourKids);

const collegeGrad = prompt('Did I graduate college?')
let lowercaseGrad = collegeGrad.toLowerCase();{
  if (lowercaseGrad == 'no'){
    alert("You got it right! Yay!");
  } else if (lowercaseKids == 'yes'){
    alert("I wish you were right! But i didn't!");
  }
}
console.log(collegeGrad);

alert(`Thanks for taking my quiz, ${usersName}!`);