// Assignment code here


function generatePassword() {
  let characterNumber = getValidCharacterNumber();
  console.log(characterNumber)
  let validCharacters = getValidCharacters()
  
  

  let password = ""

  for (let i= 0; i < characterNumber; i++) {
    password = password + validCharacters.charAt(Math.floor(Math.random() *validCharacters.length));
    console.log(password)
  }
  return password
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
    } else {
      lowercaseLetters = '';
    }
    
    if (confirm ("Include uppercase letters?") == true) {
      uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else {
      uppercaseLetters = '';
    }

    if (confirm ("Include numeric characters?") == true) {
      numericCharacters = "0123456789";
    } else {
      numericCharacters = '';
    }

    if (confirm ("Include special characters?") == true) {
      specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    } else {
      specialCharacters = '';
    }

    if (lowercaseLetters + uppercaseLetters + numericCharacters + specialCharacters == "") {
      alert ("Please choose at least one character type!")
      return getValidCharacters()
    }

    return lowercaseLetters + uppercaseLetters + numericCharacters + specialCharacters;
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
