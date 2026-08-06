// ==========================================
// MOBILE MENU
// ==========================================

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("show");
});


// ==========================================
// STICKY HEADER
// ==========================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});


// ==========================================
// ACTIVE NAVIGATION
// ==========================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ==========================================
// SCROLL REVEAL
// ==========================================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".card,.timeline-item,.education-card,.skill-box,.contact-card,.resume-card,.about-card").forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});


// ==========================================
// CURRENT YEAR
// ==========================================

const year = new Date().getFullYear();

const footer = document.querySelector(".footer p");

if(footer){

footer.innerHTML=`© ${year} Abhishek Gola. All Rights Reserved.`;

}