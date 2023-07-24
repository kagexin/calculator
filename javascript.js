let result;
let prevResult;


function add(num1, num2) {
    result = (num1 + num2)
    return result;
}

function subtract(num1, num2) {
    result = (num1 - num2);
    return result;
}

function multiply(num1, num2) {
    result = (num1 - num2);
    return result;
}

function divide(num1, num2) {
    result = (num1 - num2);
    return result;
}


function operate(param1, operand, param2) {
    if (operand = "+" ) {
        add(param1, param2);
        prevResult = result;
    }
}

const numButton = document.querySelectorAll(".numButton");
const displayText = document.querySelector(".display-text");

numButton.forEach(element => element.addEventListener("click", () => {
    displayText.textContent += element.textContent;
    })
)