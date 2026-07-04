// This is Flash Screen // 
window.addEventListener("load",()=>{

const splash=document.getElementById("splash-screen");

setTimeout(()=>{

    splash.style.opacity="0";

    splash.style.transition="1s";

    setTimeout(()=>{

        splash.style.display="none";

    },1000);

},3000);

});


//  This is nav-bar --- Theme Toggle Menu //
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    document.body.classList.toggle("dark");
});