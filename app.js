// Calculator by github.com/maxikaye
// 2022 OCT
const display = document.querySelector('.display');
const numeralButtons = document.querySelectorAll('.numeral');
let displayValue = 0;

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
            return divide(a, b);
            break;
        default:
            return "Operator not recognized";
    }
}

function displayNumerals(key) {
    console.log(key.innerHTML)
    displayValue = key.innerHTML;
    display.textContent = displayValue;
}

// numeral buttons event listeners
numeralButtons.forEach( number => {
    number.addEventListener('click', () => displayNumerals(number))
});
// function button event listeners