const form = document.querySelector("form.login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const { elements } = event.currentTarget;

  if (elements.email.value === "" || elements.password.value === "") {
    return alert("Все поля должны быть заполнены!");
  }
  const email = elements["email"].value;
  const password = elements["password"].value;

  const formData = {
    email,
    password,
  };

  console.log(formData);
  event.currentTarget.reset();
}
