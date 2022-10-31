// Calculator by github.com/maxikaye | 2022 OCTOBER

const display = document.querySelector('.display');
const numeralButtons = document.querySelectorAll('.numeral');
const operatorButtons = document.querySelectorAll('.operator');

let currentValue = 0;
let lastValue = 0;
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
            debugger;
            currentValue = operate(currentOp, lastValue, +currentValue);
            currentOp = op;
            displayValues(currentValue);
            lastValue = currentValue;
            break;
        default:
            if (currentOp === null) {
                lastValue = +currentValue;
                currentOp = op;
                currentValue = 0;
                break;
            } else {
                currentValue = operate(currentOp, lastValue, +currentValue);
                currentOp = op;
                displayValues(currentValue);
                lastValue = currentValue;
                currentValue = 0;
            }  
    }
}

function getNumber(n) {
    if (currentValue === 0 && n !== '.') currentValue = n;
    else currentValue += n;
    displayValues(currentValue);

    // note: Number.toPrecision(2) for floats
}

numeralButtons.forEach( number => {
    number.addEventListener('click', () => getNumber(number.innerHTML));
});
operatorButtons.forEach( op => {
    op.addEventListener('click', () => getOperator(op.innerHTML));
})
