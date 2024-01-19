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


prompt(`Welcome, ${usersName}! Hope you're ready for a pop quiz!`)
prompt(Have we ever met in person?)

