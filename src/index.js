import './main.css'

const inputCard = document.querySelector('#inputCard');
const inputDate = document.querySelector('#inputDate')
const inputCVV = document.querySelector('#inputCVV')

const patterInputCard = inputCard.getAttribute('data-form');
const patterInputDate = inputDate.getAttribute('data-form')
const patterinputCVV = inputCVV.getAttribute('data-form')

const arrImputCard = [];
const arrInputDate = [];
const arrInputCVV = [];


function format(value, patter, arr) {
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    if (value === 'Backspace' && arr.length <= patter.length) {
        arr.pop();
        return;
    }

    if (numbers.includes(value) && arr.length < patter.length) {
        if (patter[arr.length] === '-' || patter[arr.length] === '/') {
            arr.push(patter[arr.length], value)
        } else {
            arr.push(value)
        }
    }
}

inputCard.addEventListener('keydown', (e) => {

    if (e.key === 'Tab') {
        return;
    }

    e.preventDefault();

    let value = e.key;
    format(value, patterInputCard, arrImputCard)
    inputCard.value = arrImputCard.join("");
})

inputDate.addEventListener('keydown', (e) => {

    if (e.key === 'Tab') {
        return;
    }

    e.preventDefault();
    let value = e.key;
    format(value, patterInputDate, arrInputDate);
    inputDate.value = arrInputDate.join("")
})

inputCVV.addEventListener('keydown', (e) => {

    if (e.key === 'Tab') {
        return;
    }

    e.preventDefault();
    let value = e.key;
    format(value, patterinputCVV, arrInputCVV);
    inputCVV.value = arrInputCVV.join("")
})
