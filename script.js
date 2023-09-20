// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  return "Password";
}


// Pseudo code steps:

// create a function to take in all the password criteria
  // Prompt user for the length of password and save it as a variable
  // check to make sure the length is between 8 and 128 characters
  // confirm lowercase, uppercase, numeric, and special charactes
  // If the user hits cancel, prompt them again and check that they selected one of the 4 options
  // create an object to store the user input

// create a separate global array for each of the 4 confirmations

// inside 'generatePassword' function 
  // create a variable to store user input from the password option function
  // create a new array that will take in all the possible characters that can be used for mew password
  // create a conditional statements to push into possible characters array
  // for example: if user selects lowercase, then we need to take the elements from lowercase array and push into possible characters array
  // loop throught the possible character array and return characters based on the length given by user
  // return the result and pass to be generated on the page

  // need to assure that the newly created password has at least one character for each of the criteria selected
  