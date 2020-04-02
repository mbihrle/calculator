

const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null
};

function updateDisplay() {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;

}

updateDisplay();

function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;

    if (waitingForSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    } else {
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
}

function inputDecimalDot(dot) {
    if (calculator.waitingForSecondOperand === true) return;
    if (!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot;

    }
}

function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator
    const inputValue = parseFloat(displayValue);

    if (operator && calculator.waitingForSecondOperand) {
        calculator.operator = nextOperator;
        return;
    }


    if (firstOperand === null) {
        calculator.firstOperand = inputValue;
    } else if (operator !== "=") {
        callPHP(firstOperand, inputValue, operator);
        // const result = performCalculation[operator](firstOperand, inputValue);
        // calculator.displayValue = String(result);
        // calculator.firstOperand = result;
    } else if (operator === "=") {
        console.log('operator === "="');
        console.log('nextOperator', nextOperator);
        calculator.firstOperand = inputValue;
    }
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;



}

// const performCalculation = {
//     '/': (firstOperand, secondOperand) => firstOperand / secondOperand,

//     '*': (firstOperand, secondOperand) => firstOperand * secondOperand,

//     '+': (firstOperand, secondOperand) => firstOperand + secondOperand,

//     '-': (firstOperand, secondOperand) => firstOperand - secondOperand,

//     '=': (firstOperand, secondOperand) => secondOperand
// };


function resetCalculator() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
}

function resetEntry() {
    calculator.displayValue = '0';
    calculator.waitingForSecondOperand = true;
}

function goBack() {
    displayString = calculator.displayValue;
    console.log( displayString.length-1);
    calculator.displayValue = displayString.substring(0, displayString.length-1);
    if (calculator.displayValue <= 0) {
        calculator.displayValue = '0';
    }

}

function invertSign() {
    calculator.displayValue = calculator.displayValue * (-1);
}

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    // console.log(event);
    const { target } = event;
    // console.log(target);
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        // console.log('operator', target.value);
        handleOperator(target.value);
        updateDisplay();
        console.log(calculator);

        return;
    }

    if (target.classList.contains('decimal')) {
        // console.log('decimal', target.value);
        inputDecimalDot(target.value);
        updateDisplay();
        console.log(calculator);
        return;
    }

    if (target.classList.contains('all-clear')) {
        // console.log('clear', target.value);
        resetCalculator();
        updateDisplay();
        console.log(calculator);
        return;
    }

    if (target.classList.contains('clear-entry')) {
        // console.log('clear', target.value);
        resetEntry();
        updateDisplay();
        console.log(calculator);
        return;
    }

    if (target.classList.contains('back')) {
        // console.log('clear', target.value);
        goBack();
        updateDisplay();
        console.log(calculator);
        return;
    }

    if (target.classList.contains('invert')) {
        // console.log('clear', target.value);
        invertSign();
        updateDisplay();
        console.log(calculator);
        return;
    }

    // console.log('digit', target.value);
    inputDigit(target.value);
    updateDisplay();
    console.log(calculator);

});



function callPHP(firstOperand, secondOperand, operator) {
    let ergebnis = 0;
    let url = "calculate.php?firstOperand=" + firstOperand + "&secondOperand=" + secondOperand + "&operator=" + encodeURIComponent(operator);
    console.log('url:', url);
    let request = new XMLHttpRequest();
    request.open('POST', url, true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send();
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            console.log('Server Antwort:', request.responseText);
            result = request.responseText;
            calculator.displayValue = String(result);
            calculator.firstOperand = result;
            updateDisplay();
            console.log('Calculator-Obj:', calculator);
        }
    }
}


// function callTest() {
//     let ergebnis = 0;

//     $.ajax({
//         type: 'POST', 
//         url: 'test.php',
//         contentType: 'application/json; charset=utf-8',
//         data: JSON.stringify({ jewellerId: filter, locale: 'en-US' }),
//         dataType: 'json',
//         success: AjaxSucceeded,
//         error: AjaxFailed
//     });
    
//     let url = "calculate.php?firstOperand=" + firstOperand + "&secondOperand=" + secondOperand + "&operator=" + encodeURIComponent(operator);
//     console.log('url:', url);
//     let request = new XMLHttpRequest();
    


//     request.onreadystatechange = function () {
//         if (request.readyState == 4 && request.status == 200) {
//             console.log('Server Antwort:', request.responseText);
//             result = request.responseText;
//             calculator.displayValue = String(result);
//             calculator.firstOperand = result;
//             updateDisplay();
//             console.log('Calculator-Obj:', calculator);
//         }
//     }
// }
