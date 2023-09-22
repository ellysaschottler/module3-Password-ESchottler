// Assignment code here

// when the user clicks the button, the prompts appear in a writePassword function

// when the prompts finish, the password generates into the #password field

// need to make a generatePassword function


//The generatePassword function has two parts - one function for getting the number of characters and one function for indicating what variable types are to be included.

function generatePassword(){
      function getValidCharacterNumber(){
        let characterNumber = prompt("Choose a password character length between 8 and 128.", "");

        for (characterNumber < 8 || characterNumber > 128) {
          alert("characterNumber is invalid, please indicate a number between 8-128");
          getValidCharacterNumber();

      }

  }
      function indicateCharacterTypes(){
        let includeLowercaseCharacter = confirm ("Include a minimum of 1 lowercase character?");
        let includeUppercaseCharacter = confirm ("Include a minimum of 1 uppercase character?");
        let includeNumericCharacter = confirm ("Include a minimum of 1 numeric character?");
        let includeSpecialCharacter = confirm ("Include a minimum of 1 numeric character?");

        if (!includeLowercaseCharacter && !uppercaseCharacter && !numericCharacter && !specialCharacter) {
          alert("Please select at least one character type to generate your password.");
          indicateCharacterTypes();
        }
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
