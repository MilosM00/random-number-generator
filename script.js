"use strict";


const inputMin = document.querySelector(`.min`);
const inputMax = document.querySelector(`.max`);
const buttonNewNumber = document.querySelector(`.new-number`);
const displayRandomNumber = document.querySelector(`.display-number`);


const randomNumbers = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomNumberGenerator = () => `${randomNumbers(Number(inputMin.value), Number(inputMax.value))}`;

buttonNewNumber.addEventListener(`click`, () =>{
    if(Number(inputMin.value) <= 0){
        displayRandomNumber.textContent = ``;
        inputMin.value = ``;
        alert(`Insert minimum value. \nValue needs to be greater than zero.`);
    }

    else if(Number(inputMax.value) <= 0){
        displayRandomNumber.textContent = ``;
        inputMax.value = ``;
        alert(`Insert maximum value. \nValue needs to be greater than zero.`);
    }

    else if(Number(inputMin.value) > Number(inputMax.value)){
        displayRandomNumber.textContent = ``;
        inputMin.value = ``;
        inputMax.value = ``;
        alert(`The minimum value is greater than the maximum value. \nPlease insert values correctly.`);
    }

    else{
        displayRandomNumber.textContent = randomNumberGenerator();
    }
});