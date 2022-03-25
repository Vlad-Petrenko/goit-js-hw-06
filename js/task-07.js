const controlFontsize = document.querySelector("input#font-size-control");
const textForControl = document.querySelector("span#text");

controlFontsize.addEventListener("input", (event) => {
  textForControl.style.fontSize = event.currentTarget.value + "px";
});
