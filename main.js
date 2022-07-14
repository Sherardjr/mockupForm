//Get data
const form = document.querySelector("#create-form");
const nameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const dateInput = document.querySelector("#date");
const femradio = document.querySelector("#radio1");
const maleradio = document.querySelector("#radio2");
const checkboxinput = document.querySelector("#checkbox");
const messageInput = document.querySelector("#message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  validateForm();
});

function validateForm() {
  if (nameInput.value.trim() == "") {
    setError(nameInput, "Name cannot be empty");
  } else if (
    nameInput.value.trim().length < 2 ||
    nameInput.value.trim.length > 15
  ) {
    setError(nameInput, "Name must be greater then 2 characters, max 15");
  } else {
    setSuccess(nameInput);
  }
  if (emailInput.value.trim() == "") {
    setError(emailInput, "Email cannot be empty");
  } else if (isEmailValid(emailInput.value)) {
    setSuccess(emailInput);
  } else {
    setError(email, "Provide valid email");
  }
  if (dateInput.value.trim() == "") {
    setError(dateInput, "Must select a date");
  } else {
    setSuccess(dateInput);
  }
  if (messageInput.value.trim() == "") {
    setError(messageInput, "Message field cannot be empty");
  } else {
    setSuccess(messageInput);
  }
}

function setError(element, errorMessage) {
  const parent = element.parentElement;
  if (parent.classList.contains("success")) {
    parent.classList.remove("success");
  }
  parent.classList.add("error");
  const paragraph = parent.querySelector("p");
  paragraph.textContent = errorMessage;
}

function setSuccess(element) {
  const parent = element.parentElement;
  if (parent.classList.contains("error")) {
    parent.classList.remove("error");
  }
  parent.classList.add("success");
}

function isEmailValid(email) {
  const reg =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return reg.test(email);
}
