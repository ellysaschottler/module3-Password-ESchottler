// Assignment code here
let characterNumber = prompt("Choose a password character length between 8 and 128.", "");

if (characterNumber < 8 || characterNumber > 128) {
  alert("characterNumber is invalid, please indicate a number between 8-128");
}

let lowercaseCharacter = confirm ("Include a minimum of 1 lowercase character?");
let uppercaseCharacter = confirm ("Include a minimum of 1 uppercase character?");
let numericCharacter = confirm ("Include a minimum of 1 numeric character?");
let specialCharacter = confirm ("Include a minimum of 1 numeric character?");


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
