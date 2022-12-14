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
            if (b === 0) {
                alert("C'mon man, you can't divide by zero!")
                return 0;
            } else return divide(a, b);
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
            if (currentValue.length > 1) currentValue = currentValue.slice(0, -1);
            else currentValue = 0;
            displayValues(currentValue);
            break;
        case 'AC':
            reset();
            break;
        case '±':
            currentValue *= -1;
            displayValues(currentValue);
            break;
        case '=':
            currentValue = Math.round(operate(currentOp, lastValue, +currentValue) * 100000) / 100000;
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
                currentValue = Math.round(operate(currentOp, lastValue, +currentValue) * 100000) / 100000;
                currentOp = op;
                displayValues(currentValue);
                lastValue = currentValue;
                currentValue = 0;
            }  
    }
}

function getNumber(n) {
    if (currentValue === 0 && n !== '.') currentValue = n;
    else if (currentValue.includes('.')) {
        if (!(currentValue.length > currentValue.indexOf('.') + 2)) currentValue += n;
    } else currentValue += n;
    displayValues(currentValue);
}

numeralButtons.forEach( number => {
    number.addEventListener('click', () => getNumber(number.innerHTML));
});
operatorButtons.forEach( op => {
    op.addEventListener('click', () => {
        if (currentOp) operatorButtons.forEach(div => div.classList.remove('focused'));
        getOperator(op.innerHTML);
        op.classList.toggle('focused');
    });
});
