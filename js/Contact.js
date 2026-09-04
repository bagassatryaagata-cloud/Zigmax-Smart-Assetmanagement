
/* =========================================
   HERO + NAVBAR AUTO ANIMATION
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.querySelector(".navbar");
    const hero = document.querySelector(".hero");

    // Animasi langsung berjalan setelah halaman dibuka
    setTimeout(() => {

        navbar?.classList.add("show");
        hero?.classList.add("show");

    }, 3);

});

/* =========================================
   LUCIDE
========================================= */

lucide.createIcons();


document.addEventListener("DOMContentLoaded", () => {

    const contactSection =
        document.querySelector(".contact-section");

    setTimeout(() => {

        contactSection?.classList.add("show");

    }, 400);

});

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", function () {

    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

});


function toggleMenu() {

    const menu = document.getElementById("navMenu");
    const button = document.getElementById("hamburger");

    menu.classList.toggle("open");
    button.classList.toggle("active");

}
