var characterLength = 8;
var choiceArray = [];
var specCharArray = ['!','@','#','$','%','^','&','*','(',')','-','_','+','=','`','~','<','>','/','?'];
var upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCaseArray = ['a','b','c','d','e','f','g','h','h','j','k','i','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numberArray = ['0','1','2','3','4','5','6','7','8','9'];

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword); 


function writePassword() {
    var correctPrompts = Prompts(); 
    var passwordText = document.querySelector("#password");

    if(correctPrompts){
      var freshPassword = genPassword();
      passwordText.value = freshPassword;
    } else {
      passwordTest.value = "";
    }
}

function genPassword() {    
      var password = "";
      for(var i = 0; i < characterLength; i++) {
        var randomLetter = Math.floor(Math.random() * choiceArray.length);
        password = password + choiceArray[randomLetter];
      }
      return password;
}

function Prompts() {   
  choiceArray = [];
  characterLength = parseInt(prompt("How long (in characters) will your Password be? (8 to 128 characters"));
  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character Length has to be a number between 8 and 128.  Please Try again.");
    return false;
  }
  if (confirm("Would you like Lower Case letters in your Password?")){
    choiceArray = choiceArray.concat(lowerCaseArray);
  }
  if (confirm("Would you like Upper Case letters in your Password?")){
    choiceArray = choiceArray.concat(upperCaseArray);
  }
  if (confirm("Would you like Special characters in your Password?")){
    choiceArray = choiceArray.concat(specCharArray);
  }
  if (confirm("Would you like Numbers in your Password?")){
    choiceArray = choiceArray.concat(numberArray);
  }
  return true;
}


