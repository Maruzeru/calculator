let firstNum = "";
let operator = "";
let secondNum = "";
let isMoreOperand = false;
let tempResult;

const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".nums");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.getElementById("clear");
const equalButton = document.getElementById("equals");

clearButton.addEventListener("click", () => {
	clearData();
	clearDisplay();
});
equalButton.addEventListener("click", getResult);

numberButtons.forEach((button) =>
	button.addEventListener("click", () => appendDisplay(button.textContent))
);

operatorButtons.forEach((button) =>
	button.addEventListener("click", () => setOperation(button.textContent))
);

function setOperation(operation) {
	if (display.textContent === "0") {
		return;
	}
	
	if (firstNum === "") {
		firstNum = display.textContent;
		clearDisplay();
		appendDisplay('0');
		return;
	}
	
	secondNum = display.textContent;
	if (secondNum === "") {
		operator = operation;
		return;
	}

	clearDisplay();
	appendDisplay('0');

	if(!isMoreOperand){
		operator = operation;
	}
	console.log([operation, firstNum, secondNum, isMoreOperand]);
	tempResult = operate(operator, parseInt(firstNum), parseInt(secondNum));
	
	clearDisplay();
	if(!isMoreOperand){
		appendDisplay(tempResult);
	}else{
		operator = operation;
	}
	
	isMoreOperand = true;
	clearData();
	firstNum=tempResult;
	tempResult='';
}

function getResult() {
	if (display.textContent === operator) {
		return;
	}
	firstNum = parseInt(firstNum);
	secondNum = parseInt(display.textContent.slice(1));
	display.textContent = operate(operator, firstNum, secondNum);
}

function appendDisplay(num) {
	console.log([isMoreOperand, num]);
	if(isMoreOperand){
		clearDisplay();
		isMoreOperand = false;
	}
	if (display.textContent === "0") {
		clearDisplay();
	}
	console.log([isMoreOperand, num]);
	display.textContent += num;
}

function clearDisplay() {
	display.textContent = "";
}

function clearData() {
	firstNum = "";
	secondNum = "";
	operator = "";
}

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function operate(operator, a, b) {
	switch (operator) {
		case "+":
			return add(a, b);
		case "-":
			return subtract(a, b);
		case "*":
			return multiply(a, b);
		case "/":
			return divide(a, b);
	}
}

display.textContent = 0;
