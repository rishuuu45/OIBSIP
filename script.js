// script.js
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let operator = "";
let firstValue = "";

function updateDisplay() {
    if (firstValue && operator && currentInput) {
        display.textContent = `${firstValue} ${operator} ${currentInput}`;
    } else if (firstValue && operator) {
        display.textContent = `${firstValue} ${operator}`;
    } else if (currentInput) {
        display.textContent = currentInput;
    } else {
        display.textContent = "0";
    }
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "C") {
            currentInput = "";
            firstValue = "";
            operator = "";
            updateDisplay();
        }
        else if (value === "=") {
            if (firstValue !== "" && operator !== "" && currentInput !== "") {
                currentInput = eval(firstValue + operator + currentInput).toString();
                display.textContent = currentInput;
                firstValue = "";
                operator = "";
            }
        }
        else if (value === "+" || value === "-" || value === "*" || value === "/") {
            if (currentInput !== "") {
                firstValue = currentInput;
                operator = value;
                currentInput = "";
                updateDisplay();
            }
        }
        else {
            currentInput += value;
            updateDisplay();
        }
    });
});