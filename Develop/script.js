// Assignment code here

// when the user clicks the button, the prompts appear in a writePassword function

// when the prompts finish, the password generates into the #password field

// need to make a generatePassword function

//The generatePassword function has two parts - one function for getting the number of characters and one function for indicating what variable types are to be included.

function generatePassword() {
  let characterNumber = getValidCharacterNumber();
  console.log(characterNumber)
  let validCharacters = getValidCharacters()
  console.log(validCharacters)

// psuedocode for generating the password given the parameters of characterNumber and validCharacters
function getRandomCharacterIndex(){
let randomCharacterIndex = Math.floor(Math.random() *characterNumber);
return randomCharacterIndex
}


for (i= ""; i.length < characterNumber; i++) {
  i = i + validCharacters.charAt(getRandomCharacterIndex());
    console.log(i)
  }

 
}

function getValidCharacterNumber(){
  let characterNumber = prompt("Choose a password character length between 8 and 128.", "8");
  
  if (characterNumber < 8 || characterNumber > 128) {
      alert(
        "This is an invalid number of characters."
      );
      return getValidCharacterNumber();

  } else if (characterNumber >= 8 && characterNumber <=128){
      alert (`Your password will be ${characterNumber} characters long.  Please answer the next questions to determine the character types in your password.`)
  };

  return characterNumber
}

function getValidCharacters () {
    let lowercaseLetters
    let uppercaseLetters
    let numericCharacters
    let specialCharacters
    if (confirm("Include lowercase letters?") == true) {
        lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    } else {lowercaseLetters = '';
    }
    
    if (confirm ("Include uppercase letters?") == true) {
        uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else {uppercaseLetters = '';
    }

    if (confirm ("Include numeric characters?") == true) {
        numericCharacters = "0123456789";
    } else {numericCharacters = '';
    }

    if (confirm ("Include special characters?") == true) {
        specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    } else {specialCharacters = '';
    }

    return lowercaseLetters + uppercaseLetters + numericCharacters + specialCharacters;
}






  

// idea for validating password
//if (createdPassword.includes("a"|"b"|"c"|"d|"))&& (createdPassword.includes("A","B","C"))

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
