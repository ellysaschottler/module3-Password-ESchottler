// Assignment code here

// when the user clicks the button, the prompts appear in a writePassword function

// when the prompts finish, the password generates into the #password field

// need to make a generatePassword function

//The generatePassword function has two parts - one function for getting the number of characters and one function for indicating what variable types are to be included.

function generatePassword() {
  let characterNumber = getValidCharacterNumber();

  // code that uses that number...
  
}
let characterNumber = prompt("Choose a password character length between 8 and 128.", "8");

  if (characterNumber < 8 || characterNumber > 128) {
    alert(
      "This is an invalid number of characters."
    );

  } else if (characterNumber >= 8 && characterNumber <=128){
    alert ("Your password will be $[characterNumber] characters long.  Please answer the next questions to determine the character types in your password.")
  };


function getValidCharacters (lowercaseLetters, uppercaseLetters, numericCharacters, specialCharacters) {
    let characterTypeCount
    if (confirm("Include lowercase letters?") == true) {
        lowercaseLetters = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwx";
        characterTypeCount = +1;
        } else {lowercaseLetters = '';
        }
    
    if (confirm ("Include uppercase letters?") == true) {
          uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWX";
          characterTypeCount = +1;
    } else {uppercaseLetters = '';
    }

    if (confirm ("Include numeric characters?") == true) {
        numericCharacters = "01234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567";
        characterTypeCount = +1
    } else {numericCharacters = '';
    }

    if (confirm ("Include uppercase special characters?") == true) {
        specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~!#$%&'()*+,-./:;<=>?@[\]^_`{|}~!#$%&'()*+,-./:;<=>?@[\]^_`{|}~!#$%&'()*+,-./:;<=>?@[\]^_`{|}~!#$%&'()*";
        characterTypeCount = +1;
    } else {specialCharacters = '';
    }
    return lowercaseLetters + uppercaseLetters + numericCharacters + specialCharacters;
    let characterTypeTotal = 
}



getValidCharacters()
console.log(getValidCharacters)


  if getValidCharacters is empty
    alert(
      "Please select at least one character type to generate your password."
    );
    getValidCharacters();
  

// idea for validating password
if (createdPassword.includes("a"|"b"|"c"|"d|"))&& (createdPassword.includes("A","B","C"))

// idea for generating password - use getValidCharacters / characterTypeTotal = numberEachCharacterType
// use a for loop to keep adding characters to the password while less than the characterNumber. 



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
