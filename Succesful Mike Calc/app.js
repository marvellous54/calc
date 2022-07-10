let num1 = document.getElementById('num-1');
let num2 = document.getElementById('num-2');
let total = document.getElementById('sum'); 


function add() {
    total.textContent = parseInt(num1.value, 10) + parseInt(num2.value, 10);
}

function subtract() {
    total.textContent = num1.value - num2.value;
}

function divide() {
    total.textContent = num1.value / num2.value;
}

function multiply() {
    total.textContent = num1.value * num2.value;
}