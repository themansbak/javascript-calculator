// import { InvalidInputError } from 'utils';
const input = document.querySelector('.input-io');
const numButtons = document.querySelectorAll('.num-btn');
const clearButton = document.querySelector('#clr-btn');
const oprButtons = document.querySelectorAll('.opr-btn');

var calcInput = ''; var curValue = '';

/*
buttons first
- user keeps typing in a number
    - append it to calcInput
    - keep track if there is a decimal in it already
- on operator press
    - check if the last index is an operator
    - replace with current key if it is
    - append with current key if not
        - append curValue to calcInput
- on '=' press
    - evaluate with statement
    - place result into display and calcInput;
*/

// EVENT LISTENER ATTACHMENT
numButtons.forEach(numButton => { // why doens't this work? i was calling the function () and not passing in just the function
    numButton.addEventListener('click', selectNumber);
});
clearButton.addEventListener('click', () => {
    calcInput = '';
    input.value = calcInput;
});
oprButtons.forEach(oprButton => {
    oprButton.addEventListener('click', () => {
        if ('+-/*'.includes(calcInput[-1])) { // there is already an operator assigned
            calcInput[-1] = event.target.value;
        } else { // there is no operator assigned
            calcInput += curValue + event.target.value;
            curValue = '';
        }
        console.log(calcInput);
        input.value = '';
    });
});

// DISPLAY FUNCTIONS
function selectNumber(event) {
    if (event.target.value === '.' && !curValue.includes('.')) {
        curValue += event.target.value;        
    } else if (event.target.value !== '.') {
        curValue += event.target.value;
    }
    input.value = curValue;
}

// OPERATION FUNCTIONS
// parse the array into numbers and operators
// compute the numbers based on the order 'MDAS'
function evaluate(statement) {
    statement = statement.split('');
    //concatenate the numbers
    var index = 0; var strtIndex = 0;
    while (index < statement.length) {
        //if it's an operator, splice the starting index till 
        if (isNaN(statement[index]) && statement[index] !== '.') {
            statement.splice(strtIndex, statement.slice(strtIndex, index).length, 
                parseFloat(statement.slice(strtIndex, index).join('')));
            index = index - statement.slice(strtIndex, index).length+1;
            strtIndex = index+1;
        }
        index += 1;
    }
    // get the remaining number
    statement.splice(strtIndex, statement.slice(strtIndex, index).length, 
        parseFloat(statement.slice(strtIndex, index).join('')));

    // reset values
    index = 0;
    // is there a way to reduce the array? there should be.... need to find a way to make it look nicer
    for (var val of '*/+-') {
        while (index < statement.length) {
            if (statement[index] === val) {
                const value = operate(val, statement[index-1], statement[index+1]);
                statement.splice(index-1, 3, value);
                index -= 1;
            } else {
                index += 1;
            }
        }
        index = 0;
    }
    return statement[0];
}

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
