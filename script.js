// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// Close menu after clicking a link

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

});


// ===============================
// CURRENT YEAR
// ===============================

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        navbar.style.background = "rgba(10, 12, 9, 0.97)";
    } else {
        navbar.style.background = "rgba(17, 19, 15, 0.92)";
    }

});


// ===============================
// IMAGE ERROR CHECK
// ===============================

document.querySelectorAll("img").forEach(img => {

    img.addEventListener("error", () => {

        console.log("Image not found:", img.getAttribute("src"));

    });

});


// ===============================
// SIMPLE SCROLL REVEAL
// ===============================

const revealElements = document.querySelectorAll(
    ".product-card, .review-card, .pack-card, .about-text, .about-image"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    revealObserver.observe(element);

});
