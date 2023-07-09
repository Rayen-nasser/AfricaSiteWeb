/*** toggle style switch ***/
const styleSwitcherToggle = document.querySelector(".style-switch-toggler");
styleSwitcherToggle.addEventListener("click" , () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
// hidre style switcher on scroll 
window.addEventListener("scroll", () => {
    if(document.querySelector('.style-switcher').classList.contains('open'))
    {
        document.querySelector(".style-switcher").classList.remove('open')
    }
})

// if(window.localStorage.getItem("color")){
//     titl = window.localStorage.getItem("color");
// }
/*** theme colors ***/
const alternateStyles =document.querySelectorAll(".alternate-style");
function setActivestyle(color)
{
    alternateStyles.forEach((style) =>{
        
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    })
};



/***  theme light and light mode ***/

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () =>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
});