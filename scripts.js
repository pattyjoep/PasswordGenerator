
//Established Variables
        var Generatebtn = document.querySelector("#generate")
        var Clearbtn = document.querySelector("#clear")
        var Copybtn = document.querySelector("#copy")

//Event Listeners
    Generatebtn.addEventListener("click", GeneratePassword)
    Clearbtn.addEventListener("click", Clear)
    Copybtn.addEventListener("click", CopyPassword)

//Functions
    function GeneratePassword() {

            var PWOutput = document.querySelector("#PWContainer")

        //arrays  
            var PWLowerLetters = "abcdefghijklmnopqrstuvwxyz".split('');
            var PWUpperLetters= "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
            var PWNumbers = "0123456789".split('');
            var PWSpecialChar = "!#$%&*?".split('');
            var MasterArray = [PWLowerLetters, PWUpperLetters, PWNumbers, PWSpecialChar]
            var SelectedArray = []
        

        //Checkboxes
            var LowerBool = document.querySelector("#chkaz").checked
            var UpperBool = document.querySelector("#chkCapAZ").checked
            var NumbBool = document.querySelector("#chkNumb").checked
            var SpecialCharBool = document.querySelector("#chkSpecChar").checked
            
            //All checkboxes
                var chkBoxes = document.querySelectorAll('input[type="checkbox"]')

            //Checkboxes "true" count
                var totalTrue = 0;
        
        //Parse input textbox as integer
        var PWLength = parseInt(document.querySelector("#length").value)
        for (i = 0; i < chkBoxes.length; i++) {
            
            if (chkBoxes[i].checked === true) {

                totalTrue++
                SelectedArray.push(MasterArray[i]) 
            }
        }
        if (totalTrue <= 2 || PWLength < 8 || PWLength > 128) {
            alert("Password criteria not valid. Must contain between 8 - 128 characters and contain AT LEAST 3 of the 4 following:\n\n1) Lowercase (a-z)\n2) Uppercase (A-Z)\n3) Numbers (0-1)\n4) Special Characters (!#$%&*?)")
        }    
            else {  
                    PWOutput.textContent = " "
                    for (var i = 0; i < PWLength; i++) {
                        var RandArray = SelectedArray[Math.floor(Math.random() * SelectedArray.length)];

                        var RandChar = RandArray[Math.floor(Math.random() * RandArray.length)];

                        PWOutput.textContent = PWOutput.textContent + RandChar
                        
                    }
                }
}
function Clear() {
    document.location.reload(true)
}
function CopyPassword() {

        if (document.selection) { 
            var range = document.body.createTextRange();
            range.moveToElementText(document.getElementById("PWContainer"));
            range.select().createTextRange();
            document.execCommand("copy"); 
        
        } else if (window.getSelection) {
            var range = document.createRange();
             range.selectNode(document.getElementById("PWContainer"));
             window.getSelection().addRange(range);
             document.execCommand("copy");
             //alert("text copied") 
            }
}
