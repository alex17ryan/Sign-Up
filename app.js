const main = document.querySelector("main");
const dialog = document.querySelector("dialog");
const subscribtionForm = document.querySelector("form");
const dismissButton = document.getElementById("dismiss-button");

subscribtionForm.addEventListener("submit", (e) => {
  const email = document.getElementById("email");
  const validEmail = document.querySelector("#dialog-content > p > span");
  e.preventDefault();
  if (email.validity.valid) {
    main.style.display = "none";
    validEmail.textContent = email.value;
    dialog.show();
  } else {
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = "Valid email required";
    email.style.backgroundColor = "rgba(255, 99, 71, 0.25)";
    email.style.border = "1px solid tomato";
    email.style.transition = "0.3s";
  }
});

dismissButton.addEventListener("click", () => {
  main.style.display = "flex";
  subscribtionForm.reset();
  dialog.close();
});
