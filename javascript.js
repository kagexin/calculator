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

function operate(numArr, operandArr) {
    let result = numArr[0];
    
    for (let i = 0; i < operandArr.length; i++) {
        switch (operandArr[i]) {
            case "+":
                result = addition(result, numArr[i + 1]);
                break;
            case "-":
                result = subtraction(result, numArr[i + 1]);
                break;
            case "÷":
                result = division(result, numArr[i + 1]);
                break;
            case "×":
                result = multiplication(result, numArr[i + 1]);
                break;
         }
    }
    return result;
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
    numArray = [];
    operandArray = [];
})

del.addEventListener("click", () => {
    displayText.textContent = displayText.textContent.slice(0, -1);
})


// Make operand and equals buttons functional

const equals = document.querySelector("#equals");
const operandBtns = document.querySelectorAll(".operand");

let numArray = [];
let operandArray = [];

operandBtns.forEach(button => button.addEventListener("click", (event) => {
    numArray.push(parseInt(displayText.textContent));
    operandArray.push(event.target.textContent);
    displayText.textContent = "";
    })
)

equals.addEventListener("click", () => equate())

function equate() {
    numArray.push(parseInt(displayText.textContent));
    result = operate(numArray, operandArray);

    displayText.textContent = result;
    numArray = [];
    operandArray = [];
}