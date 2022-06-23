function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        
        return getPin();
    }

}

function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

//keypad

document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');

   if(isNaN(number)){
    if(number == 'C'){
        calcInput.value = '';

    }
   }

   else{
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;
   }

})


//submit button varify

function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const notifySuccess = document.getElementById('notify-success');
    const notifyError = document.getElementById('notify-error');

    if(pin == typedNumbers){
        notifySuccess.style.display="block";
        notifyError.style.display="none";
    }
    
    else{
        notifySuccess.style.display="none";
        notifyError.style.display="block";
    }
}

