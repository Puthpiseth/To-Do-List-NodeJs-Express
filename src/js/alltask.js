
let tasks = Array.from(document.querySelectorAll("li"));
let deleteIcon = Array.from(document.querySelectorAll(".delete"));


// deleteIcon.forEach((icon) => icon.addEventListener("click", (e) =>{
//     e.currentTarget.parentElement.remove(tasks[deleteIcon.indexOf(e.target)]);
    
// }));

tasks.forEach((task) => task.addEventListener("mouseover", (e) =>{
    deleteIcon[tasks.indexOf(e.target)].classList.add("visible");
}));

tasks.forEach((task) => task.addEventListener("mouseleave", (e) =>{
    deleteIcon[tasks.indexOf(e.target)].classList.remove("visible");
}));

