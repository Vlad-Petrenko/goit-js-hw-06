function getRandomHexcolor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangecolor = document.querySelector("button.change-color");
const spancolor = document.querySelector("span.color");
const bodycolor = document.querySelector("body");
btnChangecolor.addEventListener("click", () => {
  bodycolor.style.backgroundColor = getRandomHexcolor();
  spancolor.textContent = bodycolor.style.backgroundColor;
});
