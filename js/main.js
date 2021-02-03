const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
let farenheit;
let celsius;

const swap = () => {
    if(one.innerText === '°C'){
        one.innerText = '°F';
        two.innerText = '°C';
    } else {
        one.innerText = '°C';
        two.innerText = '°F';
    }
}

changeBtn.addEventListener('click', swap);