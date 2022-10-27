// Calculator by github.com/maxikaye
// 2022 OCT

// DOM
const display = document.querySelector('.display');
const numeralButtons = document.querySelectorAll('.numeral');
const operatorButtons = document.querySelectorAll('.operator');
// GLOBALS
let currentValue = 0;
let lastValue = 0;
let total = 0;
let currentOp = null;

function add (a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    // if not first input display current total, total is current value
    switch (operator) {
        case 'add':
        case '+':
            return add(a, b);
            break;
        case 'subtract':
        case '-':
            return subtract(a, b);
            break;
        case 'multiply':
        case '*':
        case 'x':
            return multiply(a, b);
            break;
        case 'divide':
        case '/':
        case '÷':
            return divide(a, b);
            break;
        default:
            return "Operator not recognized";
    }
}

function getOperator(op) {
    currentOp = op;
    switch (currentOp) {
        case '«':
            currentValue = Math.floor(currentValue * 0.1);
            break;
        case 'AC':
            console.log('clear')
            // clear memory and current display to 0
            break;
        case '±':
            currentValue *= -1;
            break;
        case '=':
        default:
            console.log('equals')
            //total = (op, lastValue, currentValue));
    }
    displayValues(currentValue);
}

function getNumber(n) {
    if (currentValue === 0 || currentValue === null) currentValue = n;
    else currentValue += n;
    displayValues(currentValue);
}

function displayValues(value) {
    display.innerHTML = value;
}

numeralButtons.forEach( number => {
    number.addEventListener('click', () => getNumber(number.innerHTML));
});

operatorButtons.forEach( op => {
    op.addEventListener('click', () => getOperator(op.innerHTML));
})