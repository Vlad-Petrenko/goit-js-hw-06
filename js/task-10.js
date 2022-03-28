function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumber = document.querySelector("#controls input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const divBoxes = document.querySelector("div#boxes");

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = Number(inputNumber.value);
  const array = [];

  for (let i = 1; i <= amount; i += 1) {
    array.push(
      `<div style="background-color: ${getRandomHexColor()}; width: ${
        20 + i * 10
      }px; height: ${20 + i * 10}px"></div>`
    );
  }
  divBoxes.insertAdjacentHTML("afterbegin", array.join(""));
}

function destroyBoxes() {
  divBoxes.innerHTML = "";
  inputNumber.value = "";
}
