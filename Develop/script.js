// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var characterAmountRange = prompt(
    "How many characters do you want in the password, between 8 and 128."
  );
  if (characterAmountRange >= 1 && characterAmountRange <= 128) {
  } else {
    alert("Incorrect input!");
    input = generatePassword();
  }

  var specialCharacters = prompt(
    "Do you want to include special characters? Y/N"
  ).toUpperCase();
  if (
    specialCharacters === "Y" ||
    speicalCharacters === "N" ||
    specialCharacters === "Yes" ||
    specialCharacters === "No"
  ) {
  } else {
    alert("Incorrect input!");
    input = generatePassword();
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
