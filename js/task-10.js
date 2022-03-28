function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumber = document.querySelector("#controls input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const divBoxes = document.querySelector("div#boxes");


btnCreate.addEventListener("click", getAmount);
btnDestroy.addEventListener("click", destroyBoxes);

function getAmount() {
   let amount = inputNumber.value;
  createBoxes(amount);
};

function createBoxes(amount) {
  const array = [];

  for (let i = 1; i <= amount; i += 1) {
    array.push(
      `<div style="background-color: ${getRandomHexColor()}; width: ${20 + i * 10}px; height: ${20 + i * 10}px"></div>`
    );
  }
  divBoxes.insertAdjacentHTML("afterbegin", array.join(""));
  inputNumber.value = "";
}

function destroyBoxes() {
  divBoxes.innerHTML = "";  
}
