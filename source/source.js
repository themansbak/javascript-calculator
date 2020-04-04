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

function evaluate(statement='5+5.5*5/8') {
    console.log(statement);
    statement = statement.split('');
    console.log(statement);
    //concatenate the numbers
    var tmpArr = [];
    var tmpValue = '';

    var index = 0; var endIndex = 0; var strtIndex = 0;
    while (index < statement.length) {
        //if it's an operator, splice the starting index till 
        if (isNaN(statement[index]) && statement[index] !== '.') {
            
        } else {
            index += 1;
            endIndex += 1;
        }
    }
//     for (const c in statement) {
//         console.log(statement[c]);
//         if (isNaN(statement[c]) && statement[c] !== '.') { // check if it's an operator
//             if (tmpValue.includes('.')) tmpValue = parseFloat(tmpValue); // return value as float
//             else tmpValue = parseInt(tmpValue); // return value as integer
//             tmpArr.push(tmpValue); // push value into array
//             tmpArr.push(statement[c]); // push operator into array
//             tmpValue = ''; //reset tmpValue
//         } else {
//             tmpValue += statement[c];
//             console.log('tmpvalue: ' + tmpValue);
//         }
//     }
//     if (tmpValue.includes('.')) tmpValue = parseFloat(tmpValue); // return value as float
//     else tmpValue = parseInt(tmpValue); // return value as integer
//     tmpArr.push(tmpValue); // push up the last value
//     console.log(tmpArr);

//     /*
//     go through the array
//     - clump together the highest-prio operation (get the value before and after the operation)
//     - return the operated indices as... {val},.,0
//     - might need a parse array function to constantly 'clean' the array...
//     */
//    var index = 0;
//    while (tmpArr.length > 1) {
//        if (isNaN(tmpArr[index])) {
//            const value = operate(tmpArr[index], tmpArr[index-1], tmpArr[index+1]);
//            tmpArr.splice(index-1, 3, value);
//            console.log(tmpArr);
//            index = 0; // return to the beginning
//        } else {
//             index += 1;
//        }
//    }
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
