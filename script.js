let displayPrincipal = document.querySelector("#display-principal");
let displaySecundary = document.querySelector("#display-secundary");
let operator;

// Digits Operatos Event Listener
let digitsOperators = document
  .querySelectorAll("#digits-operators .button")
  .forEach((element) => {
    element.addEventListener("click", buttonActionDigitsOperators);
  });

function buttonActionDigitsOperators(event) {
  let elementId = event.target.id;
  if (elementId === "button-clear") {
    displayPrincipal.textContent = " 0";
    displaySecundary.textContent = " 0";
    document.querySelectorAll("#operators .button").forEach((element) => {
      element.classList.remove("active");
    });
  } else if (elementId === "button-plus-minus") {
    displayPrincipal.textContent = displayPrincipal.textContent * -1;
  } else if (elementId === "button-percent") {
    // Working in progress...
  }
}
// Numbers Event Listener
let numbers = document
  .querySelectorAll(".number .button")
  .forEach((element) => {
    element.addEventListener("click", buttonActionNumbers);
  });

function buttonActionNumbers(event) {
  // First Insert
  if (displayPrincipal.textContent === " 0") {
    if (event.target.textContent === ".") {
      displayPrincipal.textContent += event.target.textContent;
    } else {
      displayPrincipal.textContent = event.target.textContent;
    }
  }
  // If clicked any number other than "."
  else if (event.target.textContent !== ".") {
    if (displayPrincipal.textContent.length < 20) {
      displayPrincipal.textContent += event.target.textContent;
    } else alert("Number Max Size Rechead");
  }
  // If clicked "."
  else {
    let displayText = displayPrincipal.textContent.split("");
    console.log(displayText);
    if (
      !displayText.some((element) => {
        return element === ".";
      })
    ) {
      displayPrincipal.textContent += event.target.textContent;
    } else {
      alert("Already has a dot!");
    }
  }
}

// Operatos Event Listener
let operators = document
  .querySelectorAll("#operators .button")
  .forEach((element) => {
    element.addEventListener("click", buttonActionOperators);
  });

function buttonActionOperators(event) {
  document.querySelectorAll("#operators .button").forEach((element) => {
    element.classList.remove("active");
  });

  let targetId = event.target.id;

  if (targetId === "button-divide") {
    operator = "divide";
  }
  if (targetId === "button-times") {
    operator = "times";
  }
  if (targetId === "button-minus") {
    operator = "minus";
  }
  if (targetId === "button-plus") {
    operator = "plus";
  }

  displaySecundary.textContent = calculate(operator);

  console.log(operator);

  displayPrincipal.textContent = " 0";
}

function calculate(operator) {
  let result = 0;
  if (operator == "plus") {
    result =
      Number(displayPrincipal.textContent) +
      Number(displaySecundary.textContent);
  }
  if (operator == "minus") {
    result =
      Number(displaySecundary.textContent) -
      Number(displayPrincipal.textContent);
  }
  if (operator == "times") {
    result =
      Number(displaySecundary.textContent) *
      Number(displayPrincipal.textContent);
  }
  if (operator == "divide" && displayPrincipal.textContent != 0) {
    result =
      Number(displaySecundary.textContent) /
      Number(displayPrincipal.textContent);
  }

  return result.toString();
}

function changeOperatorStatus(event) {
  event.target.classList.add("active");
}
