const validScript = document.querySelector("#validation-input");

validScript.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length == validScript.dataset.length) {
    validScript.classList.remove("invalid");
    validScript.classList.add("valid");
  } else {
    validScript.classList.remove("valid");
    validScript.classList.add("invalid");
  }
});
