const menuButton = document.querySelector(".bars");
const menuClose = document.querySelector(".x");
const menu = document.querySelector(".burger");
const menuLinks = document.querySelectorAll(".menu-link");
const navOverlay = document.querySelector(".overlay");

menuButton.addEventListener("click", ()=>{
    menu.classList.toggle("menu-open");
});

menuClose.addEventListener("click",()=>{
    menu.classList.toggle("menu-open");
});

menuLinks.forEach(event =>{
    event.addEventListener("click",()=>{
        menu.classList.toggle("menu-open");
        
    })
})