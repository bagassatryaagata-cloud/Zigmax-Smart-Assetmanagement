

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
   GAMBAR
========================================= */

const gambar = document.querySelectorAll(
    ".bagiangambar .gambar-muter"
);

let posisi = 0;

 const cards = document.querySelectorAll(".bagiangambar .card");
    
    cards.forEach(card => {
        
        card.addEventListener("click", () => {
            if(card.classList.contains("posisi-1")) {
                return;
            }

            if(card.classList.contains("posisi-2")) {
                const Kedepan = document.querySelector(".posisi-1");
                Kedepan.classList.remove("posisi-1");
                Kedepan.classList.add("posisi-2");
                card.classList.remove("posisi-2");
                card.classList.add("posisi-1")
            }

            else if(card.classList.contains("posisi-3")) {
                
                const depan = document.querySelector(".posisi-1");
                depan.classList.remove("posisi-1");
                depan.classList.add("posisi-3");
                card.classList.remove("posisi-3");
                card.classList.add("posisi-1");
            }
        });
    });

/* =========================================
   PINDAH POSISI
========================================= */

function pindahPosisi() {

    posisi++;

    if (posisi > 2) {
        posisi = 0;
    }

    gambar.forEach((img, index) => {

        let posisiBaru =
            (index + posisi) % 3;

        img.classList.remove(
            "posisi-1",
            "posisi-2",
            "posisi-3"
        );

        img.classList.add(
            `posisi-${posisiBaru + 1}`
        );

    });
}


/* =========================================
   AUTO MUTER
========================================= */

let timerGambar = setInterval(
    pindahPosisi,
    4000
);


/* =========================================
   KLIK FOTO
========================================= */

gambar.forEach(img => {

    img.addEventListener("click", () => {

        /*
         * Kalau foto sedang di depan,
         * tidak perlu melakukan apa-apa.
         */

        if (
            img.classList.contains("posisi-1")
        ) {

            return;

        }


        /*
         * Hentikan auto rotation
         */

        clearInterval(timerGambar);


        /*
         * FOTO POSISI 2
         * → tukar dengan foto depan
         */

        if (
            img.classList.contains("posisi-2")
        ) {

            const depan =
                document.querySelector(
                    ".bagiangambar .posisi-1"
                );


            depan.classList.remove(
                "posisi-1"
            );

            depan.classList.add(
                "posisi-2"
            );


            img.classList.remove(
                "posisi-2"
            );

            img.classList.add(
                "posisi-1"
            );

        }


        /*
         * FOTO POSISI 3
         * → tukar dengan foto depan
         */

        else if (
            img.classList.contains("posisi-3")
        ) {

            const depan =
                document.querySelector(
                    ".bagiangambar .posisi-1"
                );


            depan.classList.remove(
                "posisi-1"
            );

            depan.classList.add(
                "posisi-3"
            );


            img.classList.remove(
                "posisi-3"
            );

            img.classList.add(
                "posisi-1"
            );

        }


        /*
         * Tunggu 10 detik
         */

        setTimeout(() => {

            timerGambar = setInterval(
                pindahPosisi,
                4000
            );

        }, 10000);

    });

});


/* =========================================
   TIMELINE
========================================= */

const timelineCards =
    document.querySelectorAll(
        ".timeline-card"
    );


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "show"
                    );

                }

            });

        },
        {
            threshold: 0.2
        }
    );


timelineCards.forEach(card => {

    observer.observe(card);

});

/* =========================================
   WHY ZIGMAX SCROLL ANIMATION
========================================= */

const whySection =
    document.querySelector(".why-section");


const whyObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    whySection.classList.add("show");

                    whyObserver.unobserve(
                        whySection
                    );

                }

            });

        },
        {
            threshold: 0.2
        }
    );


if (whySection) {

    whyObserver.observe(
        whySection
    );

}

/* =========================================
   HOW ZIGMAX SCROLL ANIMATION
========================================= */

const howCards = document.querySelectorAll(
    ".how-section .how-card"
);

const howObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.2
    }
);


howCards.forEach((card) => {

    howObserver.observe(card);

});

/* =========================================
   LUCIDE
========================================= */

lucide.createIcons();


/* =========================================
   CHOOSE CARD SCROLL ANIMATION
========================================= */

const chooseSection =
    document.querySelector(".choose-section");

const chooseCard =
    document.querySelector(".choose-card");

const chooseHeader =
    document.querySelector(".choose-header");


const chooseObserver =
    new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                chooseSection.classList.add("visible");

            }

        });

    }, {

        threshold: 0.2

    });


if (chooseSection) {

    chooseObserver.observe(chooseSection);

}


/* =========================================
   MOUSE PARALLAX CARD
========================================= */

if (chooseCard) {

    chooseCard.addEventListener("mousemove", (e) => {

        const rect =
            chooseCard.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            (y - centerY) / 35;

        const rotateY =
            (centerX - x) / 35;

        chooseCard.style.transform =
            `translateY(-8px)
             scale(1.01)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;

    });


    chooseCard.addEventListener("mouseleave", () => {

        chooseCard.style.transform =
            "translateY(0) scale(1) rotateX(0) rotateY(0)";

    });

}


/* =========================================
   FEATURE HOVER GLOW
========================================= */

const features =
    document.querySelectorAll(".card-feature");


features.forEach(feature => {

    feature.addEventListener("mouseenter", () => {

        feature.style.setProperty(
            "--mouse-x",
            "50%"
        );

    });

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