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
let taskButton = document.getElementById("task-button");
let statSection = document.getElementById("stats-section");
let taskSection = document.getElementById("task-section");
let taskLink =document.getElementById("task-link");
let dashboardLink =document.getElementById("dashboard-link");
let modalContainer = document.getElementById("modal-container");
let saveModal = document.getElementById("save-modal");
let cancelModal =document.getElementById("cancel-modal");

// Page Navigation Switch Login & Registration

function changeView(view) {
  if (loginSection) {
    loginSection.style.display = view === "login" ? "flex" : "none";
  }

  if (regSection) {
    regSection.style.display = view === "register" ? "flex" : "none";
  }

  if (statSection) {
    statSection.style.display = view === "dashboard" ? "flex" : "none";
  }

  if (taskSection) {
    taskSection.style.display = view === "task" ? "flex" : "none";
  }
}

if (taskLink) {
  taskLink.addEventListener("click", function (event) {
    event.preventDefault();
    changeView("task");
  });
}

if (dashboardLink) {
  dashboardLink.addEventListener("click", function (event) {
    event.preventDefault();
    changeView("dashboard");
  });
}

if(loginLink){
loginLink.addEventListener("click", function (event) {
  event.preventDefault();
  changeView("login");
});
regLink.addEventListener("click", function (event) {
  event.preventDefault();
  changeView("register");
});
};

// Form Validation

// Login Form Validation
if(loginForm){
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
};

// Registration Form Validations
if(registrationForm){
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
};

if(taskButton){
  taskButton.addEventListener("click",function(){
modalContainer.style.display= "flex";
  });
}
if(cancelModal){
  cancelModal.addEventListener("click",function(){
    modalContainer.style.display= "none";
  });
}
