let display = document.getElementById("display");

let firstNumber = "";
let operator = "";
let waitingForSecondNumber = false;

function appendNumber(number) {

    if (waitingForSecondNumber) {
        display.value = number;
        waitingForSecondNumber = false;
    }
    else {
        if (display.value === "0" && number !== ".") {
            display.value = number;
        }
        else {
            display.value += number;
        }
    }
}

function chooseOperator(selectedOperator) {

    firstNumber = parseFloat(display.value);
    operator = selectedOperator;

    waitingForSecondNumber = true;
}

function calculate() {

    if (operator === "") {
        return;
    }

    let secondNumber = parseFloat(display.value);
    let result;

    switch (operator) {

        case "+":
            result = firstNumber + secondNumber;
            break;

        case "-":
            result = firstNumber - secondNumber;
            break;

        case "*":
            result = firstNumber * secondNumber;
            break;

        case "/":

            if (secondNumber === 0) {
                display.value = "Error";
                return;
            }

            result = firstNumber / secondNumber;
            break;
    }

    display.value = result;

    operator = "";
    firstNumber = "";
}

function clearDisplay() {

    display.value = "0";

    firstNumber = "";
    operator = "";

    waitingForSecondNumber = false;
}

function deleteLast() {

    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    }
    else {
        display.value = "0";
    }
}

function percentage() {

    let number = parseFloat(display.value);

    display.value = number / 100;
}