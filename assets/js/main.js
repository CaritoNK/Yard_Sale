const navbarEmail = document.querySelector(".navbar-email");
const mainBurguer = document.querySelector(".burguer-main");
const mainDesktop = document.querySelector(".desktop-main");
const mainMobile = document.querySelector(".mobile-main");

navbarEmail.addEventListener("click",toggleMainDesktop);
mainBurguer.addEventListener("click",toggleMainMobile);

function toggleMainDesktop(){
    mainDesktop.classList.toggle("inactive");
};

function toggleMainMobile(){
    mainMobile.classList.toggle("inactive");
};