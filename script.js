const darkMode = document.getElementById("darkMode");
const lightMode = document.getElementById("lightMode");
const body = document.getElementById("body");
const inputElementName = document.getElementById("name-input");
const inputElementPass = document.getElementById("pass-input");
const inputElementEmail = document.getElementById("email-input");
const nameError = document.querySelector(".name-error");
const emailError = document.querySelector(".email-error");
const passError = document.querySelector(".password-error");
const form = document.querySelector("form");
const emailRegex = /[A-Za-z0-9.]+[.]?[A-Za-z0-9]+@(code.edu.az)/;

darkMode.addEventListener("click", () => {
  darkMode.classList.remove("active");
  lightMode.classList.add("active");
  body.classList.add("dark");
});

lightMode.addEventListener("click", () => {
  lightMode.classList.remove("active");
  darkMode.classList.add("active");
  body.classList.remove("dark");
  body.classList.add("light");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!inputElementName.value.trim()) {
    nameError.innerText = "Name cannot be empty";
    inputElementName.style.border = "2px solid red";
  } else {
    nameError.innerText = "";
    inputElementName.style.border = "";
  }

  if (inputElementEmail.value.trim() == "") {
    emailError.innerText = "Email cannot be empty";
  } else if (!validateEmail(inputElementEmail.value)) {
    emailError.innerText = "Mail is not valid";
  } else {
    emailError.innerText = "";
  }

  if (!inputElementPass.value) {
    passError.innerText = "Password can not be empty";
  } else if (inputElementPass.value.length < 5) {
    passError.innerText = "Password should be more than 5 charachter";
  } else {
    passError.innerText = "";
  }
});

function validateEmail(email) {
  return email.match(emailRegex);
}
