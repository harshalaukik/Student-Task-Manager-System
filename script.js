let loginSection = document.getElementById("login-section");
let regSection = document.getElementById("registration-section");
let loginLink =  document.getElementById("login-link");
let regLink = document.getElementById("registration-link");



loginLink.addEventListener("click" , function(event){
event.preventDefault();
        loginSection.style.display ="flex";
        regSection.style.display = "none";
   
});
regLink.addEventListener("click" , function(event){
event.preventDefault();
        regSection.style.display ="flex";
        loginSection.style.display = "none";
   
});

