function add(param1, param2) {
    return (param1 + param2);
}

function subtract(param1, param2) {
    return (param1 - param2);
}

function multiply(param1, param2) {
    return (param1 * param2);
}

function divide(param1, param2) {
    return (param1 / param2);
}


const displayText = document.querySelector(".display-text");

function addButtonFunctionality(className, textContent) {
    const button = document.querySelector(className);
    button.addEventListener("click", () => changeDisplayText(textContent))
}

function changeDisplayText(text) {
    displayText.textContent += text;
}

addButtonFunctionality(".zero", "0")
addButtonFunctionality(".one", "1");
addButtonFunctionality(".two", "2");
addButtonFunctionality(".three", "3");
addButtonFunctionality(".four", "4");
addButtonFunctionality(".five", "5");
addButtonFunctionality(".six", "6");
addButtonFunctionality(".seven", "7");
addButtonFunctionality(".eight", "8");
addButtonFunctionality(".nine", "9");