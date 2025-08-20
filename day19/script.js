const rendomNumber = Math.floor(Math.random() * 100) + 1
let attempt = 0;
function check(){
    const guess = parseInt(document.getElementById("guessInput").value)
    if(isNaN(guess) || guess < 1 || guess > 100){
        setMessage('please enter the valid Number')
        return
    }
    attempt++;
    if(guess === rendomNumber){
        setMessage("Success")
    }
    else if(guess < rendomNumber){
        setMessage("try higher Number")
    }
    else{
        setMessage("Try lower number")
    }
    function setMessage(msg){
        document.getElementById("msg").textContent = msg
    }
}