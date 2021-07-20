// Assignment Code
var generateBtn = document.querySelector("#generate");

// Data
// Character Sets
var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "1234567890".split("");
var specialCharacters = "!@#$%^&*(){}[]?_-=+".split("");

function generatePassword() {
  var characterAmount = getCharacterAmount();
  var useLowerCase = confirm("Do you want lowercase characters?");
  var useUpperCase = confirm("Do you want uppercase characters?");
  var useNumbers = confirm("Do you want numbers?");
  var useSpecialCharacters = confirm("Do you want to use special characters?");

  if (!useLowerCase && !useUpperCase && !useNumbers && !useSpecialCharacters) {
    alert("You need to select yes for at least one prompt!");
    generatePassword();
  }

  var chosenCharacters = "";
  if (useLowerCase) chosenCharacters += lowerCaseCharacters;
  if (useUpperCase) chosenCharacters += upperCaseCharacters;
  if (useSpecialCharacters) chosenCharacters += specialCharacters;
  if (useNumbers) chosenCharacters += numbers;
  console.log(chosenCharacters);

  var newPassword = "";
  for (var i = 1; i <= characterAmount; i++) {
    var randomCharacter = chosenCharacters.charAt(
      Math.floor(Math.random() * chosenCharacters.length)
    );
    newPassword += randomCharacter;
    console.log(randomCharacter);
  }
  return newPassword;
}

function getCharacterAmount() {
  var characterAmount = prompt(
    "How many characters for the password? Between 8 - 128"
  );
  console.log("Password Length ", characterAmount);
  if (characterAmount < 8 || characterAmount > 128) {
    alert("The password must be from 8 - 128 characters");
    getCharacterAmount();
  }
  return characterAmount;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
