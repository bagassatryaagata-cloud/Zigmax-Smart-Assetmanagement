



/* =========================================
   PARTICLES
========================================= */

const particlesContainer =
    document.querySelector(".particles");

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

    particlesContainer.appendChild(particle);
}


/* =========================================
   INTRO → NAVBAR
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const intro = document.querySelector(".intro");
    const navbar = document.querySelector(".navbar");
    const hero = document.querySelector(".hero");

    const introDone =
        sessionStorage.getItem("zigmaxIntroDone");

    /* ==============================
       JIKA INTRO SUDAH PERNAH SELESAI
    ============================== */

    if (introDone === "true") {

        intro.style.display = "none";

        navbar.classList.add("show");
        hero.classList.add("show");

        return;
    }


    /* ==============================
       INTRO PERTAMA KALI
    ============================== */

    setTimeout(() => {

        sessionStorage.setItem(
            "zigmaxIntroDone",
            "true"
        );

        // Hilangkan intro
        intro.classList.add("intro-finished");

        // Langsung munculkan navbar & hero
        navbar.classList.add("show");
        hero.classList.add("show");

    }, 4000);

});



// bagain section pendukung


lucide.createIcons();
/* =========================
   COUNTER ANIMATION
========================= */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = Number(counter.dataset.target);

        let start = 0;
        const duration = 1600;
        const startTime = performance.now();

        function animate(time) {

            const progress = Math.min(
                (time - startTime) / duration,
                1
            );

            const ease =
                1 - Math.pow(1 - progress, 3);

            start = Math.floor(target * ease);

            counter.textContent = start;

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                counter.textContent = target;
            }

        }

        requestAnimationFrame(animate);

        counterObserver.unobserve(counter);

    });

}, {
    threshold: 0.5
});
// section bagain pendukung end


/* =========================================
   WHY ZIGMAX
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        /* ================================
           LUCIDE
        ================================= */

        if (
            typeof lucide !== "undefined"
        ) {

            lucide.createIcons();

        }


        /* ================================
           SECTION ANIMATION
        ================================= */

        const whySection =
            document.querySelector(
                ".why-zigmax"
            );


        if (!whySection) return;


        const observer =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                whySection.classList.add(
                                    "show"
                                );

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.18
                }
            );


        observer.observe(
            whySection
        );


        /* ================================
           NODE FLOAT DELAY
        ================================= */

        const nodes =
            document.querySelectorAll(
                ".system-node"
            );


        nodes.forEach(
            (node, index) => {

                node.style.animation =
                    `nodeFloat
                     ${4 + index * .5}s
                     ease-in-out
                     infinite`;

                node.style.animationDelay =
                    `${index * .3}s`;

            }
        );

    }
);


/* =========================================
   NODE FLOAT
========================================= */

const nodeFloatStyle =
document.createElement("style");

nodeFloatStyle.textContent = `

@keyframes nodeFloat {

    0%, 100% {
        margin-top: 0;
    }

    50% {
        margin-top: -6px;
    }

}

`;

document.head.appendChild(
    nodeFloatStyle
);


/* =========================================
   FROM PHYSICAL TO DIGITAL
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* LUCIDE */

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }


    /* =====================================
       PARALLAX VISUAL
    ===================================== */

    const section =
        document.querySelector(
            ".zig-connect-section"
        );

    const visual =
        document.querySelector(
            ".zig-connect-visual"
        );

    if (!section || !visual) return;


    section.addEventListener(
        "mousemove",
        (e) => {

            const rect =
                section.getBoundingClientRect();

            const x =
                (e.clientX - rect.left)
                / rect.width
                - .5;

            const y =
                (e.clientY - rect.top)
                / rect.height
                - .5;

            visual.style.setProperty(
                "--mouse-x",
                `${x * 8}px`
            );

            visual.style.setProperty(
                "--mouse-y",
                `${y * 8}px`
            );

        }
    );


    section.addEventListener(
        "mouseleave",
        () => {

            visual.style.setProperty(
                "--mouse-x",
                "0px"
            );

            visual.style.setProperty(
                "--mouse-y",
                "0px"
            );

        }
    );


    /* =====================================
       SCROLL REVEAL
    ===================================== */

    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        section.classList.add(
                            "zig-connect-active"
                        );

                        observer.unobserve(section);

                    }

                });

            },
            {
                threshold: .18
            }
        );


    observer.observe(section);

});

/* =========================================
   FINAL CTA REVEAL
========================================= */

const ctaSection = document.querySelector(".zigmax-cta");

if (ctaSection) {

    const ctaObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    ctaSection.classList.add("show");

                    observer.unobserve(ctaSection);

                }

            });

        },
        {
            threshold: 0.25
        }
    );

    ctaObserver.observe(ctaSection);
}

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