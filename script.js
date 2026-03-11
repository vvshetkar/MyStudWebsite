/* PAGE FADE TRANSITION */

document.addEventListener("DOMContentLoaded", function () {

  document.body.classList.add("fade-in");

  /* TYPING EFFECT — must be inside DOMContentLoaded so DOM exists */

  const text = "Software Developer";
  let i = 0;

  function typeEffect() {
    let element = document.getElementById("typing");
    if (!element) return;
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeEffect, 80);
    }
  }

  typeEffect();

  /* SCROLL REVEAL — also run once on load for above-fold elements */

  function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((element) => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const visible = 100;
      if (elementTop < windowHeight - visible) {
        element.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", reveal);
  reveal();

  /* HAMBURGER MENU (RWD) */

  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      hamburger.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        hamburger.classList.remove("open");
      });
    });
  }

});