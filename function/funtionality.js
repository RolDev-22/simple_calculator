const btns = document.querySelectorAll("button");
const screen = document.getElementById("screen");
let aux = 0;
let operationControl = 0;
let current = 0;
let resultado = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.value;
    screen.value += value;
  });
});

function handleReset() {
  screen.value = "";
  auxReset();
}

function handleDelete() {
  screen.value = screen.value.slice(0, -1);
}

function handleAddition() {
  aux = getCurrent();
  operationUpdate(1);
  clearScreen();
}

function handleSubstraction() {
  aux = getCurrent();
  operationUpdate(2);
  clearScreen();
}

function handleMultiplication() {
  aux = getCurrent();
  operationUpdate(3);
  clearScreen();
}

function handleDivision() {
  aux = getCurrent();
  operationUpdate(4);
  clearScreen();
}

function handleEqual() {
  current = getCurrent();
  if (operationControl !== 0) {
    resultado = functionResult(operationControl, aux, current);
    updateScreen(resultado); //actualizamos el valor en pantalla
    current = resultado; //agregamos el resultado al valor actual
    auxReset(); //reseteamos la variable auxiliar
  }
}

function auxReset() {
  aux = 0;
}

function operationReset() {
  operationControl = 0;
}

function clearScreen() {
  screen.value = "";
}

function updateScreen(value) {
  screen.value = value;
}

function getCurrent() {
  return screen.value ? parseFloat(screen.value) : 0;
}

function operationUpdate(value) {
  operationControl = value;
}

function functionResult(option, val1, val2) {
  switch (option) {
    case 1:
      return addition(val1, val2);
      break;
    case 2:
      return substraction(val1, val2);
      break;
    case 3:
      return multiplication(val1, val2);
      break;
    case 4:
      return division(val1, val2);
      break;
  }
}

function addition(value1, value2) {
  return value1 + value2;
}

function substraction(value1, value2) {
  return value1 - value2;
}

function multiplication(value1, value2) {
  return value1 * value2;
}

function division(value1, value2) {
  return value1 / value2;
}
