// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("Enter password length (8-128 Characters):");

if (passwordLength === null) {
  return; 
}

passwordLength = parseInt(passwordLength);

if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
  alert("Invalid password length. Please enter a number between 8 and 128.");
  return; 
}

var passwordText = document.querySelector("#password");
var password = generatePassword(passwordLength);
passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Function To Generate Password
function generatePassword(passwordLength) {
  const includeUppercase = confirm("Include uppercase characters? Click 'OK' for yes, or 'Cancel' for no.");
  const includeNumbers = confirm("Include numbers? Click 'OK' for yes, or 'Cancel' for no.");
  const includeSymbols = confirm("Include symbols? Click 'OK' for yes, or 'Cancel' for no.");  

  let charset = "abcdefghijklmnopqrstuvwxyz";
  let password = "";
  if (includeUppercase) {
    charset += "ABCDEFGHIJKLMNOPQRSTUWXYZ";
  }
  if (includeNumbers) {
    charset += "0123456789";
  }
  if (includeSymbols) {
    charset += "!@#$%^&*()_+~`|}{[]\\:;?><,./-=";
  }

  for (let i = 0; i <passwordLength; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  return password;
}
//Load External CSS
var css = document.createElement('link');
css.href = 'style.css'
css.rel = 'stylesheet';
css.type = 'text/css';
document.getElementsByTagName('head')[0].appendChild(css);
