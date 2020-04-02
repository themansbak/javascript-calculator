// import { InvalidInputError } from 'utils';
const input = document.querySelector('.input-io');
const numButtons = document.querySelectorAll('.num-btn');
numButtons.forEach(numButton => { // why doens't this work? i was calling the function () and not passing in just the function
    numButton.addEventListener('click', selectNumber);
});

/*
user clicks a number
- input gets updated with number
if input already has a complete operation (2 #'s and 1 operator)
- calculate and display the value
*/

// DISPLAY FUNCTIONS
function selectNumber(event) {
    var displayValue = input.value + event.target.value;
    input.value = displayValue;
}

// OPERATION FUNCTIONS
function add(a, b) {
    if (isNaN(a) || isNaN(b)) return 'Please enter in a number';
    return a + b;
}

function subtract(a, b) {
    if (isNaN(a) || isNaN(b)) return 'Please enter in a number';
    return a - b;
}

function multiply(a, b) {
    if (isNaN(a) || isNaN(b)) return 'Please enter in a number';
    return a * b;
}

function divide(a, b) {
    if (isNaN(a) || isNaN(b)) return 'Please enter in a number';
    if (b === 0) return 'Unable to divide by 0';
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
        default:
            return null;
    }
}
