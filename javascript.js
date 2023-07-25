// Operation functions

function addition(num1, num2) {
    return (num1 + num2)
}

function subtraction(num1, num2) {
    return (num1 - num2);
}

function multiplication(num1, num2) {
    return (num1 * num2);
}

function division(num1, num2) {
    return (num1 / num2);
}


// Function to operate between two numbers

function operate(param1, param2, operand) {
     switch (operand) {
        case "+":
            return addition(param1, param2);
        case "-":
            return subtraction(param1, param2);
        case "÷":
            return division(param1, param2);
        case "×":
            return multiplication(param1, param2);
     }  
}


// Make number button presses show up in calculator display

const numButton = document.querySelectorAll(".numButton");
const displayText = document.querySelector(".display-text");

numButton.forEach(button => button.addEventListener("click", () => {
    displayText.textContent += button.textContent;
    })
)


// Make clear and delete buttons functional

const clear = document.querySelector("#clear");
const del = document.querySelector("#delete");
const prevResultDisplay = document.querySelector(".prev-result");

clear.addEventListener("click", () => {
    displayText.textContent = "";
    prevResultDisplay.textContent = "";
})

del.addEventListener("click", () => {
    displayText.textContent = displayText.textContent.slice(0, -1);
})


// Make operand and equals buttons functional

const equals = document.querySelector("#equals");
const operandBtns = document.querySelectorAll(".operand");
let operand, num1, num2, result;

operandBtns.forEach(button => button.addEventListener("click", (event) => {
    num1 = parseInt(displayText.textContent);
    operand = event.target.textContent;
    prevResultDisplay.textContent = `${num1} ${operand}`;
    displayText.textContent = "";
    })
)

equals.addEventListener("click", () => equate())


function equate() {
    num2 = parseInt(displayText.textContent);
    prevResultDisplay.textContent = `${num1} ${operand} ${num2} =`
    result = operate(num1, num2, operand);

    if (displayText.textContent != "") {
        displayText.textContent = result;
    }
}