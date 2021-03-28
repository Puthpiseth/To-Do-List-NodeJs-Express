
let tasks = Array.from(document.querySelectorAll("li"));
let deleteIcon = Array.from(document.querySelectorAll(".delete"));
let menuBugerIcon = document.querySelector('.menu-burger');
//ul du menu burger
let settingsList  = document.querySelector("ul.menu-preferences");
let allBars_in_menuBurger_icon = Array.from(document.querySelectorAll(".menu-burger>*"));
console.log(allBars_in_menuBurger_icon);

menuBugerIcon.addEventListener('click',()=>{
    settingsList.classList.toggle('menu-active');
    allBars_in_menuBurger_icon[0].classList.toggle('first-bar');
    allBars_in_menuBurger_icon[1].classList.toggle('middle-bar');
    allBars_in_menuBurger_icon[2].classList.toggle('last-bar');
})

tasks.forEach((task) => task.addEventListener("mouseover", (e) =>{
    deleteIcon[tasks.indexOf(e.target)].classList.add("visible");
}));

tasks.forEach((task) => task.addEventListener("mouseleave", (e) =>{
    deleteIcon[tasks.indexOf(e.target)].classList.remove("visible");
}));

