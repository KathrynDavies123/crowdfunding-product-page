let menubutton = document.querySelector(".menu-button");
let navlist = document.querySelector(".navigation");

let backgroundcolor = document.querySelector(".background-color");

menubutton.addEventListener("click", function () {
    backgroundcolor.classList.toggle("background-gradient");
    navlist.classList.toggle("nav-open");
    menubutton.classList.toggle("close-menu");
})