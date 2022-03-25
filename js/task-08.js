const form = document.querySelector("form.login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Все поля должны быть заполнены!");
  }

  () => {
    const email = event.currentTarget.elements["email"].value;
    const passwordName = event.currentTarget.elements["password"].value;

    return (formData = {
      email,
      passwordName,
    });
  };
  console.log(formData);
  //   console.log(`email: ${email.value}, Password: ${password.value}`);
  //   event.currentTarget.reset();
}
