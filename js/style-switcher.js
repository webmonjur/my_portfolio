
/* ----------------- toggle style switcher -------------------*/
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler"),
    styleSwitcher = document.querySelector(".style-switcher");
styleSwitcherToggler.addEventListener("click", () =>{
    styleSwitcher.classList.toggle("open");
})

/*-------- hide style-switcher on scroll --------*/
window.addEventListener("scroll", () =>{
    if(styleSwitcher.classList.contains("open")){
        styleSwitcher.classList.remove("open");
    }
})


/*-------- theme color switcher --------*/

const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    localStorage.setItem("color",color);
    changeColor();
}
function changeColor() {
    alternateStyle.forEach((style) =>{
        if(localStorage.getItem("color") === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    })
}
// checking if color key exists
if(localStorage.getItem("color") !== null){
    changeColor();
}

/*-------- theme light and dark mode --------*/
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () =>{
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark")
    }
    else{
        localStorage.setItem("theme","light")
    }
    updateIcon();
})

function themeMode(){
    // checking if theme key exists in
    if(localStorage.getItem("theme") !== null){
        if(localStorage.getItem("theme") === "light"){
            document.body.classList.remove("dark");
        }
        else{
            document.body.classList.add("dark");
        }
    }
    
    updateIcon();
}

themeMode();
function updateIcon(){
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.remove("fa-moon");
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else{
        dayNight.querySelector("i").classList.remove("fa-sun");
        dayNight.querySelector("i").classList.add("fa-moon");
    }
}
// window.addEventListener("load", () =>{
//     if(document.body.classList.contains("dark")){
//         dayNight.querySelector("i").classList.add("fa-sun");
//     }
//     else{
//         dayNight.querySelector("i").classList.add("fa-moon");
//     }
// })