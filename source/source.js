// import { InvalidInputError } from 'utils';
const input = document.querySelector('.input-io');
const numButtons = document.querySelectorAll('.num-btn');
const clearButton = document.querySelector('#clr-btn');
const decButton = document.querySelector('.dec-btn');
const oprButton = document.querySelector('.opr-btn');
var calcInput = '';
const MDAS = ['*','/','+','-'];
evaluate();

// EVENT LISTENER ATTACHMENT
numButtons.forEach(numButton => { // why doens't this work? i was calling the function () and not passing in just the function
    numButton.addEventListener('click', selectNumber);
});
decButton.addEventListener('click', (event) => {
    if (!calcInput.includes('.')) {
        calcInput = input.value + event.target.value;
        input.value = '' + calcInput;
    }
});
clearButton.addEventListener('click', () => {
    calcInput = '';
    input.value = calcInput;
});

/*
user clicks a number
- input gets updated with number
if input already has a complete operation (2 #'s and 1 operator)
- calculate and display the value
*/

// DISPLAY FUNCTIONS
function selectNumber(event) {
    calcInput = input.value + event.target.value;
    input.value = calcInput;
}

// OPERATION FUNCTIONS
/*
- MDAS (no parantheses or exponents)
- go through the array and find each operator in order
- find the current highest-prio operator
    - calculate the value of that number

- split the string into chars
- get the number
- get the operator
- get the number
- calculate the result

parse the operation into an array
- go through the parsedArray

parse the statement into nested arrays
- splice the array
*/
function parseStatement(statement) {
    
}

function evaluate(statement='5.53*6.31/7+5.93+2.372') {
    statement = statement.split('');
    //concatenate the numbers
    var tmpArr = [];
    var tmpValue = '';

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
