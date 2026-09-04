document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       LUCIDE ICON
    ========================================= */

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }


    /* =========================================
       PARTICLES
    ========================================= */

    const particlesContainer =
        document.querySelector(".particles");

    if (particlesContainer) {

        for (let i = 0; i < 45; i++) {

            const particle =
                document.createElement("span");

            particle.classList.add("particle");

            particle.style.left =
                Math.random() * 100 + "%";

            particle.style.animationDuration =
                7 + Math.random() * 12 + "s";

            particle.style.animationDelay =
                Math.random() * 10 + "s";

            particlesContainer.appendChild(
                particle
            );

        }

    }


/* =========================================
   NAVBAR + ABOUT SECTION
   MASUK BERSAMA
========================================= */

const navbar =
    document.querySelector(".navbar");

const hero =
    document.querySelector(".about-zigmax");


/* =========================================
   START ANIMATION
========================================= */

requestAnimationFrame(() => {

    requestAnimationFrame(() => {

        navbar?.classList.add("show");

        hero?.classList.add("show");

    });

});

    /* =========================================
       ABOUT ORBS
    ========================================= */

    const orb1 =
        document.querySelector(".orb-1");

    const orb2 =
        document.querySelector(".orb-2");

    const orb3 =
        document.querySelector(".orb-3");


    /* =========================================
       FLOWING LINE
    ========================================= */

    const flowMain =
        document.querySelector(".flow-main");

    const flowGlow =
        document.querySelector(".flow-glow");


    /* =========================================
       CHECK ABOUT ELEMENTS
    ========================================= */

    if (
        !orb1 ||
        !orb2 ||
        !orb3 ||
        !flowMain ||
        !flowGlow
    ) {
        return;
    }


    /* =========================================
       SVG PATH LENGTH
    ========================================= */

    const flowLength =
        flowMain.getTotalLength();


    flowMain.style.strokeDasharray =
        `${flowLength} ${flowLength}`;

    flowGlow.style.strokeDasharray =
        `${flowLength} ${flowLength}`;


    /* =========================================
       ANIMATION
    ========================================= */

    let time = 0;

    let flowPosition = 0;


    function animateAbout() {

        time += 0.004;

        flowPosition += 0.45;


        /* =====================================
           ORB 1
        ===================================== */

        const orb1X =
            Math.sin(time) * 90;

        const orb1Y =
            Math.cos(time * .7) * 70;


        orb1.style.transform = `
            translate3d(
                ${orb1X}px,
                ${orb1Y}px,
                0
            )
            scale(
                ${1 + Math.sin(time) * .08}
            )
        `;


        /* =====================================
           ORB 2
        ===================================== */

        const orb2X =
            Math.cos(time * .8) * 110;

        const orb2Y =
            Math.sin(time) * 80;


        orb2.style.transform = `
            translate3d(
                ${orb2X}px,
                ${orb2Y}px,
                0
            )
            scale(
                ${1 + Math.cos(time) * .07}
            )
        `;


        /* =====================================
           ORB 3
        ===================================== */

        const orb3X =
            Math.sin(time * 1.2) * 70;

        const orb3Y =
            Math.cos(time) * 100;


        orb3.style.transform = `
            translate3d(
                ${orb3X}px,
                ${orb3Y}px,
                0
            )
            scale(
                ${1 + Math.sin(time * .8) * .06}
            )
        `;


        /* =====================================
           FLOWING LIGHT
        ===================================== */

        if (flowPosition >= flowLength) {

            flowPosition = 0;

        }


        flowMain.style.strokeDashoffset =
            -flowPosition;

        flowGlow.style.strokeDashoffset =
            -flowPosition;


        requestAnimationFrame(
            animateAbout
        );

    }


    animateAbout();



    /* =========================================
       SCROLL REVEAL
    ========================================= */

    const revealElements =
        document.querySelectorAll(`
            .about-label,
            .about-intro h2,
            .about-intro p,
            .about-section-label,
            .about-why-text h2,
            .about-why-text p,
            .why-card
        `);


    const revealObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }


                        entry.target.style.opacity =
                            "1";


                        if (
                            entry.target.classList
                                .contains("why-card")
                        ) {

                            entry.target.style.transform =
                                "translateX(0)";

                        } else {

                            entry.target.style.transform =
                                "translateY(0)";

                        }


                        revealObserver.unobserve(
                            entry.target
                        );

                    }
                );

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(
        (element) => {

            revealObserver.observe(
                element
            );

        }
    );

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