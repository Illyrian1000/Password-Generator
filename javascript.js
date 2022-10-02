const characters = ["A","B","C","D","E","F","G","H","I","J",
"K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y",
"Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n",
"o","p","q","r","s","t","u","v","w","x","y","z", "0", "1",
 "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
 "$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",
 ",","|",":",";","<",">",".","?",
"/"];


let firstPasswordElement = document.getElementById("firstPassword");
let secondPasswordElement = document.getElementById("secondPassword");


function generatePassword(){
    let pass1 = randomPassword();
    let pass2 = randomPassword();
    firstPasswordElement.textContent = pass1; 
    secondPasswordElement.textContent = pass2; 
}

// do gjeneroj nje password random

function randomPassword(){
    let passwordTest = "";
    let passLenght = document.getElementById("passwrodLength").value;

    for( let i = 0; i < passLenght; i++){
        passwordTest += characters[randomNumber()];
    }

    return passwordTest;

}


// do japi numer nga 0 deri te elementi i fundit te array characters

function randomNumber(){
    return Math.floor(Math.random() * characters.length);
}

function copy(idToCopy) {
    var copyText = document.getElementById(idToCopy);
    navigator.clipboard.writeText(copyText.innerHTML);
  }