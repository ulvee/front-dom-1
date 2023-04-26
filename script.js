const darkMode = document.getElementById("darkMode");
const lightMode = document.getElementById("lightMode");
const body = document.getElementById("body");

darkMode.onclick = () => {
  darkMode.classList.remove("active");
  lightMode.classList.add("active");
  body.classList.add("dark");
};
lightMode.onclick = () => {
  lightMode.classList.remove("active");
  darkMode.classList.add("active");
  body.classList.remove("dark");
  body.classList.add("light")
};


let inputElementName = document.getElementById("name-input");
inputElementName.addEventListener("input", function () {
  if (this.value.length > 10 || this.value.length == 0) {
    this.style.border = "2px solid red";
    this.style.backgroundColor = "white";
    this.style.color = "black";
  }
 else {
    this.style.border = "";
    this.style.backgroundColor = "";
    this.style.color = "";
  }
});


let inputElementPass = document.getElementById("pass-input");
inputElementPass.addEventListener("input", function () {
  if (this.value.length < 5) {
    this.style.border = "2px solid red";
    this.style.backgroundColor = "white";
    this.style.color = "black";
  } else {
    this.style.border = "";
    this.style.backgroundColor = "";
    this.style.color = "";
  }
});


let inputElementEmail = document.getElementById("email-input");
const emailRegex = /[A-Za-z0-9.]+[.]?[A-Za-z0-9]+@(code.edu.az)/;
inputElementEmail.addEventListener("input", function () {
  if (this.value.length == 0) {
    this.style.border = "2px solid red";
    this.style.backgroundColor = "white";
    this.style.color = "black";
  }
  if (!emailRegex.test(this.value)) {
    this.style.border = "2px solid red";
    this.style.backgroundColor = "white";
    this.style.color = "black";
  } else {
    this.style.border = "";
    this.style.backgroundColor = "";
    this.style.color = "";
  }
});


let inputElementLogin = document.getElementById("login-input");
inputElementLogin.addEventListener("input", function () {
  if (this.value.length == 0) {
    this.style.border = "2px solid red";
    this.style.backgroundColor = "white";
    this.style.color = "black";
  } else {
    this.style.border = "";
    this.style.backgroundColor = "";
    this.style.color = "";
  }
});
