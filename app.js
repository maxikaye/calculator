// Calculator by github.com/maxikaye | 2022 OCTOBER

const display = document.querySelector('.display');
const numeralButtons = document.querySelectorAll('.numeral');
const operatorButtons = document.querySelectorAll('.operator');

let currentValue = 0;
let lastValue = 0;
let currentOp = null;
let operated = false;

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
            return currentValue;
    }
}

function displayValues(value) {
    display.innerHTML = value;
}

function reset() {
    currentOp = null;
    currentValue = 0;
    lastValue = 0;
    operated = false;
    displayValues(currentValue);
}

function getOperator(op) {
    switch (op) {
        case '«':
            currentValue = Math.floor(currentValue * 0.1);
            break;
        case 'AC':
            reset();
            break;
        case '±':
            currentValue *= -1;
            break;
        case '=':
        default:
            operated = true;
            if (currentOp === null) {
                lastValue = currentValue;
                currentValue = 0;
                currentOp = op;
                break;
            } else {
                currentValue = operate(currentOp, lastValue, currentValue);
                currentOp = op;
                operated = true;
                displayValues(currentValue);
                lastValue = currentValue;
            }
    }
    console.log(lastValue, currentValue, currentOp)
}

function getNumber(n) {
    if (currentOp === null || operated) currentValue = n;
    else currentValue += n;
    displayValues(currentValue);
}

numeralButtons.forEach( number => {
    number.addEventListener('click', () => getNumber(number.innerHTML));
});
operatorButtons.forEach( op => {
    op.addEventListener('click', () => getOperator(op.innerHTML));
})
