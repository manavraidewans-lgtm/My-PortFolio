
/* =========================
   SPLASH SCREEN
========================= */

window.addEventListener("load", () => {

    const splash = document.getElementById("splash-screen");

    setTimeout(() => {

        splash.style.opacity = "0";
        splash.style.transition = "1s ease";

        setTimeout(() => {
            splash.style.display = "none";
        }, 1000);

    }, 2500);

});


/* =========================
   DARK MODE TOGGLE
========================= */

const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    document.body.classList.toggle("dark");
});


/* =========================
   HAMBURGER MENU
========================= */

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});


/* =========================
   CLOSE MENU ON LINK CLICK
========================= */

document.querySelectorAll(".nav-icons a").forEach(link => {

    link.addEventListener("click", () => {

        hamburger.classList.remove("active");
        navMenu.classList.remove("active");

    });

});