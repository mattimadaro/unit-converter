let initialInputValueEl = document.getElementById("value")
const buttonEl = document.getElementById("convert-btn")
let lengthOutputEl = document.getElementById("length-el")
let volumeOutputEl = document.getElementById("volume-el")
let massOutputEl = document.getElementById("mass-el")

const feetToOneMeter = 3.281
const gallonsToOneLiter = 0.264
const poundsToOneKilos = 2.204


function conversion(imperialBaseValue, unitsList) {
    
    let metricToImperial = (initialInputValueEl.value*imperialBaseValue).toFixed(3)
    let imperialToMetric = (initialInputValueEl.value/imperialBaseValue).toFixed(3)
    
    let baseOutputString = `${initialInputValueEl.value} ${unitsList[1]} = ${metricToImperial} ${unitsList[3]} | ${initialInputValueEl.value} ${unitsList[3]} = ${imperialToMetric} ${unitsList[3]}`
    
    if (initialInputValueEl.value == 1) {
        baseOutputString = `${initialInputValueEl.value} ${unitsList[0]} = ${metricToImperial} ${unitsList[3]} | ${initialInputValueEl.value} ${unitsList[2]} = ${imperialToMetric} ${unitsList[1]}`     
                   
    } else if (metricToImperial == 1) {
        baseOutputString = `${initialInputValueEl.value} ${unitsList[1]} = ${Math.floor(metricToImperial)} ${unitsList[2]} | ${initialInputValueEl.value} ${unitsList[3]} = ${imperialToMetric} ${unitsList[1]}`
            
    } else if (imperialToMetric == 1) {
        baseOutputString = `${initialInputValueEl.value} ${unitsList[1]} = ${metricToImperial} ${unitsList[3]} | ${initialInputValueEl.value} ${unitsList[3]} = ${Math.floor(imperialToMetric)} ${unitsList[1]}`
            
    } else {
        baseOutputString
    }
    
    return baseOutputString
}     

buttonEl.addEventListener("click", function(){
    lengthOutputEl.textContent = conversion(feetToOneMeter, ["meter", "meters", "foot", "feet"])
    volumeOutputEl.textContent = conversion(gallonsToOneLiter, ["liter", "liters", "gallon", "gallons"])
    massOutputEl.textContent = conversion(poundsToOneKilos, ["kilo", "kilos", "pound", "pounds"])
})