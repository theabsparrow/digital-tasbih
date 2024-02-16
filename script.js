// subahanallah veriable
const subahanallahNumber = document.getElementById("subahanallah-number");
const subahanallahIncriment = document.getElementById("subahanallah-incriment");
const subahanallahDecriment = document.getElementById("subahanallah-decriment");


// alhamdulillah veriable
const alhamdulillahNumber = document.getElementById("alhamdulillah-number");
const alhamdulillahIncriment = document.getElementById("alhamdulillah-incriment");
const alhamdulillahDecriment = document.getElementById("alhamdulillah-decriment");


// allahuakber veriable
const allahuakberNumber = document.getElementById("allahuakbar-number");
const allahuakbarIncriment = document.getElementById("allahuakbar-incriment");
const allahuakbarDecriment = document.getElementById("allahuakbar-decriment");

// reset button veriable
const resetButton = document.getElementById("reset-button");
const resetButtonMobile = document.getElementById("reset-button-mobile");

// initial value
let subahanallahBaseValue = 0;
let alhamdulillahBaseValue = 0;
let allahuakbarBaseValue = 0;

// for subahanallah
subahanallahIncriment.addEventListener('click', function(){
    if (subahanallahBaseValue === 33){
        return alert ("uperr 33 number prohibited")
    }
    subahanallahBaseValue++
    subahanallahNumber.innerText = subahanallahBaseValue
    
})
subahanallahDecriment.addEventListener('click', function(){
    if (subahanallahBaseValue === 0){
        return alert ("below 0 is prohibited");
    }
    subahanallahBaseValue--
    subahanallahNumber.innerText = subahanallahBaseValue;
})

// for alhamdulillah
alhamdulillahIncriment.addEventListener('click', function(){
    if (alhamdulillahBaseValue === 33){
        return alert ("uperr 33 number prohibited")
    }
    alhamdulillahBaseValue++
    alhamdulillahNumber.innerText = alhamdulillahBaseValue;
    
})
alhamdulillahDecriment.addEventListener('click', function(){
    if (alhamdulillahBaseValue === 0){
        return alert ("below 0 is prohibited");
    }
    alhamdulillahBaseValue--
    alhamdulillahNumber.innerText = alhamdulillahBaseValue;
})

// for allahuakber
allahuakbarIncriment.addEventListener('click', function(){
    if (allahuakbarBaseValue === 33){
        return alert ("uperr 33 number prohibited")
    }
    allahuakbarBaseValue++
    allahuakberNumber.innerText = allahuakbarBaseValue;
    
})
allahuakbarDecriment.addEventListener('click', function(){
    if (allahuakbarBaseValue === 0){
        return alert ("below 0 is prohibited");
    }
    allahuakbarBaseValue--
    allahuakberNumber.innerText = allahuakbarBaseValue;
})

// for reset button
resetButton.addEventListener('click', function(){
    subahanallahNumber.innerText = 0;
    alhamdulillahNumber.innerText = 0;
    allahuakberNumber.innerText = 0;
    subahanallahBaseValue = 0;
    alhamdulillahBaseValue = 0;
    allahuakbarBaseValue = 0;
})

resetButtonMobile.addEventListener('click', function(){
    subahanallahNumber.innerText = 0;
    alhamdulillahNumber.innerText = 0;
    allahuakberNumber.innerText = 0;
    subahanallahBaseValue = 0;
    alhamdulillahBaseValue = 0;
    allahuakbarBaseValue = 0;
})