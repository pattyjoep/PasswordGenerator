
var Letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
var Numbers = [1,2,3,4,5,6,7,8,9,10];
var SpecChar = ["!","#","$","%","&","*","?"];

var Generate = document.querySelector("#generate");



//Functions
function GeneratePassword() {
    var Length = prompt("Select a number between 15 and 128");
    
  if (Length >= 15 && Length <= 128) {
    var UserSelectCapLetters = confirm("Do you want upper-case letters in your password?");
    var UserSelectLowLetters = confirm("Do you want lower-case letters in your password?");
    var UserSelectNumbers = confirm("Do you want numbers in your password?");
    var UserSelectSpecChar = confirm("Do you want special characters in your password?");
    
    }
}

//Event Listeners
Generate.addEventListener("click", GeneratePassword)



//console.log(Math.floor(Math.random(Numbers) + Math.floor(Math.random(Letters) + Math.floor(Math.random(SpecChar))))