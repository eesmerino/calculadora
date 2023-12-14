let currentDisplay = "0";
let currentOperator = null;
let firstOperand = null;

function updateDisplay() {
  const displayElement = document.getElementById("display");
  displayElement.textContent = currentDisplay;
}

function appendNumber(number) {
  if (currentDisplay === "0" || currentDisplay === "Error") {
    currentDisplay = number.toString();
  } else {
    currentDisplay += number.toString();
  }
  updateDisplay();
}

function appendOperator(operator) {
  if (currentOperator === null) {
    firstOperand = currentDisplay;
    currentOperator = operator;
    currentDisplay = "0";
  } else {
    calculate();
    firstOperand = currentDisplay;
    currentOperator = operator;
    currentDisplay = "0";
  }
  updateDisplay();
}

function calculate() {
  if (currentOperator === null) return;

  const secondOperand = currentDisplay;
  switch (currentOperator) {
    case "+":
      currentDisplay = (parseFloat(firstOperand) + parseFloat(secondOperand)).toString();
      break;
    case "-":
      currentDisplay = (parseFloat(firstOperand) - parseFloat(secondOperand)).toString();
      break;
    case "*":
      currentDisplay = (parseFloat(firstOperand) * parseFloat(secondOperand)).toString();
      break;
    case "/":
      if (parseFloat(secondOperand) === 0) {
        currentDisplay = "Error";
      } else {
        currentDisplay = (parseFloat(firstOperand) / parseFloat(secondOperand)).toString();
      }
      break;
  }
  currentOperator = null;
  updateDisplay();
}

function clearDisplay() {
  currentDisplay = "0";
  currentOperator = null;
  firstOperand = null;
  updateDisplay();
}

updateDisplay();
