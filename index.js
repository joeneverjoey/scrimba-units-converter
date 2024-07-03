/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.querySelector("#input-el")
const convertBtn = document.querySelector("#convert-btn")
const lengthEl = document.querySelector("#length-el")
const volumeEl = document.querySelector("#volume-el")
const massEl = document.querySelector("#mass-el")

convertBtn.addEventListener("click", calculateConversions)

function calculateConversions() {
    let numToConvert = inputEl.value
    lengthConversion(numToConvert)
    volumeConversion(numToConvert)
    massConversion(numToConvert)
}

function lengthConversion(num) {
    let metersToFeet = (num * 3.281).toFixed(3)
    let feetToMeters = (num / 3.281).toFixed(3)
    lengthEl.textContent = `${num} meters = ${metersToFeet} feet | ${num} feet = ${feetToMeters} meters`
}

function volumeConversion(num) {
    let litersToGallons = (num * 0.264).toFixed(3)
    let gallonsToLiters = (num / 0.264).toFixed(3)
    volumeEl.textContent = `${num} liters = ${litersToGallons} gallons | ${num} gallons = ${gallonsToLiters} liters`
}

function massConversion(num) {
    let kilosToPounds = (num * 2.204).toFixed(3)
    let poundsToKilos = (num / 2.204).toFixed(3)
    massEl.textContent = `${num} kilograms = ${kilosToPounds} pounds | ${num} pounds = ${poundsToKilos} kilos`
}