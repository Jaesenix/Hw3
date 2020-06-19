// WHEN prompted for the length of the password THEN I choose a length of at least 8 characters and no more than 128 characters*/
/* WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters*/

var randomArr = [];
var charLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var charSym = ["!", "(", ")", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "{", "|", "}"];

function userPrompts() {
  howManyChar = parseInt(prompt("How long would you like your password to be? Please choose at least 8 characters and no more than 128 characters."));
  if (isNaN(howManyChar) || howManyChar < 8 || howManyChar > 128) {
    alert("Please choose between 8 and 128 characters.")
    return false;
  }
  if (confirm("Would you like your password to include lowercase?")) {
    randomArr = randomArr.concat(charLower);
  }
  if (confirm("Would you like your password to include uppercase?")) {
    randomArr = randomArr.concat(charUpper);
  }
  if (confirm("Would you like your password to include numbers?")) {
    randomArr = randomArr.concat(charNum);
  }
  if (confirm("Would you like your password to include special characters?")) {
    randomArr = randomArr.concat(charSym);
  }
  return true;
}

// THEN a password is generated that matches the selected criteria
function generatePassword() {
  userPrompts();
  var password = "";
  for (let i = 0; i < howManyChar; i++) {
    var genChar = (Math.floor(Math.random() * randomArr.length));
    password += randomArr[genChar];
  }
  return password;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
