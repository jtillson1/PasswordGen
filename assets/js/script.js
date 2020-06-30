var specialChar = ['!', '@', '#', '$', '%', '&'];
var generateButton = document.getElementById('generateBtn');
if(generateButton){
  generateButton.addEventListener('click', writePassword);
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

function generatePassword () {
  var passwordLength = prompt("How many characters would you like? ('choose between 8-128')");
  var lowerCase = confirm("Lowercases included?");
  var upperCase = confirm("Uppercases included?");
  var number = confirm("numbers included?");
  var specialChar = confirm("special Characters included?");

  var minCount = 0;

  var minNumber = "";
  var minLowerCase = "";
  var minUpperCase = "";
  var minSpecialChar = "";

  
  var functionArray = {
    getNumber: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },
    getLowerCase: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);

    },
    getUpperCase: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65); 
    },
    getSpecialChar: function() {
      return String.fromCharCode(Math.floor(Math.random() * specialChar.length));
    }   
  };

  if (lowerCase === true) {
    minLowerCase = functionArray.getLowerCase();
    minCount++;
  }
  if (upperCase === true) {
    minUpperCase = functionArray.getUpperCase();
    minCount++;
  }
  if (number === true) {
    minNumber = functionArray.getNumber();
    minCount++;
  }
  if (specialChar === true) {
    minSpecialChar = functionArray.getSpecialChar();
    minCount++;
  }
  
   var randomPasswordGenerated = "";


   for (let i = 0; i < (parseInt(passwordLength) - minCount); i++) {
     var randomNumberChosen = Math.floor(Math.random() * 10);
 
     randomPasswordGenerated += randomNumberChosen;
 
   }
 
   randomPasswordGenerated += minNumber;
   randomPasswordGenerated += minLowerCase;
   randomPasswordGenerated += minUpperCase;
   randomPasswordGenerated += minSpecialChar;
 
 
   return randomPasswordGenerated;
   
 }

writePassword();

