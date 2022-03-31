function generatePassword() {
  var passwordlength=prompt("how long would you like the password to be?")
  var haslowercase=confirm("would you like to have lowercase letters?")
  var hasuppercase=confirm("would you like to have uppercase letters?")
  var hasnumbers=confirm("would you like to have numbers?")
  var hasspecial=confirm("would you like to have special characters?")
  var lowercaseletters="qwertyuiopasdfghjklzxcvbnm"
  var uppercaseletters="QWERTYUIOPASDFGHJKLZXCVBNM"
  var numbers="1234567890"
  var special="#$@%&?{}():<>?!/"
  var passwordcharacters=""

  if (haslowercase) {
   passwordcharacters += lowercaseletters
    
  }

  if (hasuppercase) {
    passwordcharacters += uppercaseletters
    
   }

   if (hasnumbers) {
    passwordcharacters += numbers
    
   }

   if (hasspecial) {
    passwordcharacters += special
     
   }

var finishedpassword = "" 
  for (let index = 0; index < passwordlength; index++) {
    var randomIndex = Math.floor(Math.random() * passwordcharacters.length);
    finishedpassword += passwordcharacters[randomIndex]
  } 
  return finishedpassword
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