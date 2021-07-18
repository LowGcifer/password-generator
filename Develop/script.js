// Assignment Code
var generateBtn = document.querySelector("#generate");

function generateCharacterAmountRange() {
  var characterAmountRange = prompt(
    "How many characters do you want in the password, between 8 and 128."
  );
  if (characterAmountRange >= 8 && characterAmountRange <= 128) {
  } else {
    alert("Incorrect input!");
    input = generateCharacterAmountRange();
  }
}

function generateSpecialCharacters() {
  var specialCharacters = prompt(
    "Do you want to include special characters? Y/N"
  ).toUpperCase();
  if (specialCharacters === "Y" || specialCharacters === "N") {
  } else {
    alert("Incorrect input!");
    input = generateSpecialCharacters();
  }
}

function generateLowerCase() {
  var lowerCase = prompt(
    "Do you want to include lowercase letters? Y/N"
  ).toUpperCase();
  if (lowerCase === "Y" || lowerCase === "N") {
  } else {
    alert("Incorrect input!");
    input = generateLowerCase();
  }
}

function generateUpperCase() {
  var upperCase = prompt(
    "Do you want to include uppercase letters? Y/N"
  ).toUpperCase();
  if (upperCase === "Y" || upperCase === "N") {
  } else {
    alert("Incorrect input!");
    input = generateUpperCase();
  }
}

function generatePassword() {
  generateCharacterAmountRange();
  generateSpecialCharacters();
  generateLowerCase();
  generateUpperCase();
}

var characterAmountRange = generateCharacterAmountRange();
var upperCase = generateUpperCase();
var lowerCase = generateLowerCase();
var specialCharacters = generateSpecialCharacters();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
