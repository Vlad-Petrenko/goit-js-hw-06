const inputNames = document.querySelector("input#name-input");
const outputNames = document.querySelector("span#name-output");

inputNames.addEventListener("input", (event) => {
  outputNames.textContent = event.currentTarget.value;
});
