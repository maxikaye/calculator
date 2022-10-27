// Calculator by github.com/maxikaye
// 2022 OCT
const display = document.querySelector('.display');
const numeralButtons = document.querySelectorAll('.numeral');
const operatorButtons = document.querySelectorAll('.operator');
let currentValue = 0;
let previousValue = 0;
let currentOperator = null;

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
            return "Operator not recognized";
    }
}

function getOperator(buttonPressed) {
    // if (buttonPressed === 'equals') displayValue(operate( , , ))
    currentOperator = buttonPressed;
    console.log(buttonPressed)
    switch (currentOperator) {
        case '=':
            console.log('equals')
            break;
        case '«':
            console.log('backspace')
            break;
        case 'AC':
            console.log('clear')
            break;
        case '±':
            console.log('plus minus')
            break;
        default:
            displayValues(operate(currentOperator, previousValue, currentValue));
    }
    
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