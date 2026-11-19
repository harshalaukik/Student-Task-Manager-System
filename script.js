let loginSection = document.getElementById("login-section");
let regSection = document.getElementById("registration-section");
let loginLink = document.getElementById("login-link");
let regLink = document.getElementById("registration-link");
let loginForm = document.getElementById("login-form");
let registrationForm = document.getElementById("registration-form");
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let loginEmailError = document.getElementById("login-email-error");
let loginPasswordError = document.getElementById("login-password-error");
let registrationEmailError = document.getElementById("registration-email-error");
let confirmPasswordError = document.getElementById("confirm-password-error");
let registrationPasswordError = document.getElementById("registration-password-error");
let registrationNameError = document.getElementById("name-error");

// Page Navigation Switch Login & Registration

function changeView(view) {
  if (view === "login") {
    loginSection.style.display = "flex";
    regSection.style.display = "none";
  } else {
    regSection.style.display = "flex";
    loginSection.style.display = "none";
  }
}

loginLink.addEventListener("click", function (event) {
  event.preventDefault();
  changeView("login");
});
regLink.addEventListener("click", function (event) {
  event.preventDefault();
  changeView("register");
});

// Form Validation

// Login Form Validation
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const loginEmail = document.getElementById("login-email").value.trim();
  const loginPassword = document.getElementById("login-password").value;

  loginEmailError.textContent = "";
  loginPasswordError.textContent = "";

  let isValid = true;

  if (!emailPattern.test(loginEmail)) {
    loginEmailError.textContent = "Enter a valid email address.";
    isValid = false;
  }

  if (loginPassword.length < 6) {
    loginPasswordError.textContent = "Password must be at least 6 characters.";
    isValid = false;
  }
  if (isValid) {
    alert("Form submitted successfully!");
  }
});

// Registration Form Validations

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const uname = document.getElementById("registration-name").value.trim();
  const registrationEmail = document
    .getElementById("registration-email")
    .value.trim();
  const registrationPassword = document
    .getElementById("registration-password")
    .value;
  const confirmPassword = document.getElementById("confirm-password").value;

  registrationNameError.textContent = "";
  registrationEmailError.textContent = "";
  registrationPasswordError.textContent = "";
  confirmPasswordError.textContent = "";

  let isValid = true;

  if (uname === "") {
    registrationNameError.textContent = "Name is required.";
    isValid = false;
  }
  if (!emailPattern.test(registrationEmail)) {
    registrationEmailError.textContent = "Enter a valid email address.";
    isValid = false;
  }
  if (registrationPassword.length < 6) {
    registrationPasswordError.textContent =
      "Password must be at least 6 characters.";
    isValid = false;
  }
  if(confirmPassword !== registrationPassword){
    confirmPasswordError.textContent = "Password is not same.";
    isValid = false;
  }
  if (isValid) {
    alert("Form submitted successfully!");
  }
});
