// Assignment code here

// when the user clicks the button, the prompts appear in a writePassword function

// when the prompts finish, the password generates into the #password field

// need to make a generatePassword function

//The generatePassword function has two parts - one function for getting the number of characters and one function for indicating what variable types are to be included.

function generatePassword() {
  let characterNumber = getValidCharacterNumber();

  // code that uses that number...
  
}

function getValidCharacterNumber() {
  let characterNumber = prompt(
    "Choose a password character length between 8 and 128.",
    "8"
  );

  if (characterNumber < 8 || characterNumber > 128) {
    alert(
      "characterNumber is an invalid number of characters, please indicate a number between 8-128"
    );
    return getValidCharacterNumber();
  }

  return characterNumber
}

function getValidCharacters() {
  let possibleCharacters = "";
  if  = confirm("Include lowercase characters?");
  //append abcdefghijklmnopqrstuvwxyz
  if  = confirm("Include uppercase characters?");
  //append ABCDEFGHIJKLMNOPQRSTUVWXYZ
  if = confirm("Include numeric characters?");
  //append 0123456789
  if = confirm("Include special characters?");
  //append " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"



  if getValidCharacters is empty
    alert(
      "Please select at least one character type to generate your password."
    );
    getValidCharacters();
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
