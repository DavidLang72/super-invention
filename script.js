//the arrays are necessary to generate the password from propts later on
var characterLength = 8;
var choiceArray = [];
var specCharArray = ['!','@','#','$','%','^','&','*','(',')','-','_','+','=','`','~','<','>','/','?'];
var upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCaseArray = ['a','b','c','d','e','f','g','h','h','j','k','i','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numberArray = ['0','1','2','3','4','5','6','7','8','9'];

var generateBtn = document.querySelector("#generate");    //refers to the button in HTML with the ID "generate"

generateBtn.addEventListener("click", writePassword);    //when button is clicked, executes the writePassword function


function writePassword() {
    var correctPrompts = Prompts();     //executes the Prompts function below
    var passwordText = document.querySelector("#password");

    if(correctPrompts){
      var freshPassword = genPassword();   
      passwordText.value = freshPassword;
    } else {
      passwordText.value = "";
    }
}

function genPassword() {    //generates password once variables are chosen
      var password = "";
      for(var i = 0; i < characterLength; i++) {
        var randomLetter = Math.floor(Math.random() * choiceArray.length);
        password = password + choiceArray[randomLetter];
      }
      return password;
}

function Prompts() {        //goes through the steps of choosing password variables
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


