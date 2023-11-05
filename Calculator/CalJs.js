document.addEventListener('DOMContentLoaded', function () {
    let display = document.getElementById('display');
    let buttons = document.querySelectorAll('.number, .operator');
    let clearButton = document.getElementById('clear');
    let calculateButton = document.getElementById('calculate');

    let currentInput = '';
    let operator = '';
    let firstOperand = '';

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            if (button.classList.contains('operator')) {
                if (currentInput !== '') {
                    firstOperand = currentInput;
                    operator = button.textContent;
                    currentInput = '';
                    display.textContent = operator;
                }
            } else if (button.classList.contains('number')) {
                currentInput += button.textContent;
                display.textContent = currentInput;
            }
        });
    });

    clearButton.addEventListener('click', function () {
        currentInput = '';
        operator = '';
        firstOperand = '';
        display.textContent = '0';
    });

    calculateButton.addEventListener('click', function () {
        if (operator !== '' && firstOperand !== '' && currentInput !== '') {
            let result;
            let secondOperand = currentInput;
            switch (operator) {
                case '+':
                    result = parseFloat(firstOperand) + parseFloat(secondOperand);
                    break;
                case '-':
                    result = parseFloat(firstOperand) - parseFloat(secondOperand);
                    break;
                case '*':
                    result = parseFloat(firstOperand) * parseFloat(secondOperand);
                    break;
                case '/':
                    result = parseFloat(firstOperand) / parseFloat(secondOperand);
                    break;
                default:
                    result = 'Error';
            }
            display.textContent = result;
            currentInput = result;
            operator = '';
            firstOperand = '';
        }
    });
});
