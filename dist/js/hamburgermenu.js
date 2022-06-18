const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const item = document.querySelectorAll(".item") 
const navList = document.querySelectorAll('.li')

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");    
    for( let i=0; i < item.length; i++){
    item[i].classList.toggle("hide")
    }
})

