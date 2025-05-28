// Scroll-aware navbar
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Typed.js animation
document.addEventListener("DOMContentLoaded", function () {
  new Typed("#typed-roles", {
    strings: ["Professor", "Researcher", "Innovator"],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1500,
    loop: true,
  });

  // AOS Init
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
  });

  // Mobile nav icon toggle
  const menuToggle = document.getElementById("menu-toggle");
  const icon = menuToggle.querySelector("i");
  const navbarNav = document.getElementById("navbarNav");
  const navLinks = document.querySelectorAll(".nav-link");

  menuToggle.addEventListener("click", () => {
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      icon.classList.add("fa-bars");
      icon.classList.remove("fa-times");
      navbarNav.classList.remove("show");
    });
  });

  document.addEventListener("click", function (e) {
    if (!menuToggle.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove("show");
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });

  // Scroll to top with progress
  const scrollToTopButton = document.getElementById("scrollToTopBtn");
  const progressCircle = document.getElementById("progress");
  const circleLength = 125;
  const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;

  window.addEventListener("scroll", () => {
    const scrollPercent = window.scrollY / totalScrollHeight;
    const strokeOffset = circleLength * (1 - scrollPercent);
    progressCircle.style.strokeDashoffset = strokeOffset;
    scrollToTopButton.style.opacity = window.scrollY > 100 ? 1 : 0;
  });

  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Mobile image animation
  const img = document.querySelector(".animate-on-mobile");
  const isMobile = window.innerWidth <= 767;
  if (isMobile && img) {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) img.classList.add("active");
    }, { threshold: 0.3 });
    observer.observe(img);
  }

  // Disable right-click
  document.addEventListener("contextmenu", e => e.preventDefault());
});

