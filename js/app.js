function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        console.log('3 pic activate', pin);
        return getPin();
    }

}

function generatePin(){
    const pin = getPin();
    console.log(pin)
}