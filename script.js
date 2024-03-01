//I want to create a function that will generate a random password
function writePassword() {
  var passwordText = document.querySelector("#password");
  //I want to create a prompt that will ask the user how many characters they want in their password
  var passwordLength = prompt("choose the length of your password between 8 and 128 characters");
  //I want to create a prompt that will ask the user if they want to include lowercase letters
  var lowerCase = confirm("Would you like to include lowercase letters?");
  //I want to create a prompt that will ask the user if they want to include uppercase letters
  var upperCase = confirm("Would you like to include uppercase letters?");
  //I want to create a prompt that will ask the user if they want to include numbers
  var numbers = confirm("Would you like to include numbers?");
  //I want to create a prompt that will ask the user if they want to include special characters
  var specialCharacters = confirm("Would you like to include special characters?");
  //I want to create a variable that will store the password
  var password = "";
    //I want to create a variable that will store the possible characters for the password
  var possibleCharacters = "";
    //I want to create a variable that will store the possible lowercase characters for the password
  var possibleLowerCase = "abcdefghijklmnopqrstuvwxyz";
  //I want to create a variable that will store the possible uppercase characters for the password
  var possibleUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //I want to create a variable that will store the possible numbers for the password
  var possibleNumbers = "0123456789";
  //I want to create a variable that will store the possible special characters for the password
  var possibleSpecialCharacters = "!@#$%^&*()_+";
  //I want to create a conditional statement that will check if the user wants to include lowercase letters
  if (lowerCase) {
    possibleCharacters += possibleLowerCase;}
  
   
  //I want to create a conditional statement that will check if the user wants to include uppercase letters
   if (upperCase) {
    possibleCharacters += possibleUpperCase;}
      
   //I want to create a conditional statement that will check if the user wants to include numbers
  if (numbers) {
    possibleCharacters += possibleNumbers;}
  
    //I want to create a conditional statement that will check if the user wants to include special characters
  if (specialCharacters) {
    possibleCharacters += possibleSpecialCharacters;}
  
    //I want to create a for loop that will generate the password
  for (var i = 0; i < passwordLength; i++) {
    password += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
  }
  //I want to return the password and display it on the page
  passwordText.value = password;
  return password;
   
   
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


