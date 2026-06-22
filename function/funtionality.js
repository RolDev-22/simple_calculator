const btns = document.querySelectorAll("button");
const screen = document.getElementById("screen");
let aux = 0;
let operationControl = 0;

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

function handleEqual() {
  const currentValue = screen.value ? parseFloat(screen.value) : 0;

  if (operationControl) {
    auxUpdate(currentValue, operationControl);
    resetOperationControl();
    screenUpdate();
  } else {
    aux = currentValue;
  }
}

handleSuma = () => {
  updateOperationControl(1);
  screenClean();
};

handleResta = () => {
  updateOperationControl(2);
  screenClean();
};

function auxReset() {
  aux = 0;
}

function auxUpdate(value, operation) {
  switch (operation) {
    case 1:
      aux += value;
      break;

    case 2:
      aux -= value;
      break;
    default:
      aux += value;
  }
}

function screenUpdate() {
  screen.value = aux;
}

function screenClean() {
  screen.value = "";
}

function updateOperationControl(opr) {
  operationControl = opr;
}

function resetOperationControl() {
  operationControl = 0;
}
