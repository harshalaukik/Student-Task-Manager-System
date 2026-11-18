let loginSection = document.getElementById("login-section");
let regSection = document.getElementById("registration-section");
let loginLink =  document.getElementById("login-link");
let regLink = document.getElementById("registration-link");


function changeView(view){

    if(view ==="login"){
loginSection.style.display="flex";
regSection.style.display="none";
    }else{
        regSection.style.display="flex";
        loginSection.style.display="none";
    }
}

loginLink.addEventListener("click" , function(event){
event.preventDefault();
        changeView("login");
   
});
regLink.addEventListener("click" , function(event){
event.preventDefault();
        changeView("register");
});


