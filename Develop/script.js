// Assignment Code
var passwordLength;
var passwordArray = []; 
var generateBtn = document.querySelector("#generate");

// make variables for password letters and symbols
var upperLetters = "ABCEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerLetters = "abcdefghijklmnopqrstuvwxyz".split("");
var symbols = "!@#$%^&*()-=_+:[\\][|}{/.,?><'`~:\"".split("");
var numbers = "1234567890".split("");





// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// create function for generate pw for forloop
function generatePassword() {
  generatePrompt()
var newPassword = "";
for (var i = 0; i < passwordLength; i++){
  newPassword += passwordArray [Math.floor(Math.random() * passwordArray.length)];
}
return newPassword;

}

// make window prompts
function generatePrompt () {
passwordArray = [];
passwordLength = window.prompt("How many characters would you like to use between 8 - 128");

// make prompts with if statements 
if (confirm("Would you like to use Uppercase Letters?")) {
  passwordArray = passwordArray.concat(upperLetters);
}

if (confirm("Would you like to use Lowercase Letters?")) {
  passwordArray = passwordArray.concat(lowerLetters);
}

if (confirm("Would you like to use symbols?")) {
  passwordArray = passwordArray.concat(symbols);
}
  
if (confirm("Would you like to use numbers?")) {
  passwordArray = passwordArray.concat(numbers);
}

  
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


