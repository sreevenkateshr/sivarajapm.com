// Navigation toggle
function toggleMenu() {
  const menu = document.getElementById("myNavMenu");
  menu.classList.toggle("responsive");
}

// Navbar shadow on scroll
window.onscroll = function () {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.1)";
  } else {
    header.style.boxShadow = "none";
  }
};

// Typing effect
window.addEventListener("DOMContentLoaded", function () {
  const typedElement = document.querySelector(".typedText");
  if (typedElement) {
    // Wrap in a span to keep the cursor inline
    typedElement.innerHTML = '<span id="typed"></span>';
    new Typed("#typed", {
      strings: ["Assistant Professor", "Researcher", "Head of the Department"],
      loop: true,
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 2000,
      showCursor: true,
      cursorChar: "|"
    });
  }

  // ScrollReveal animations
  if (typeof ScrollReveal !== "undefined") {
    ScrollReveal().reveal('.hero-content', { delay: 200, distance: '50px' });
    ScrollReveal().reveal('.about-text', { delay: 200, origin: 'right', distance: '60px' });
    ScrollReveal().reveal('.about-img', { delay: 200, origin: 'left', distance: '60px' });
    ScrollReveal().reveal('.research-card', { interval: 200 });
    ScrollReveal().reveal('.contact-info', { delay: 200, origin: 'bottom' });
  }
});

ScrollReveal().reveal('.about-img', {
  origin: 'left',
  distance: '60px',
  duration: 1000,
  delay: 200
});

ScrollReveal().reveal('.about-text', {
  origin: 'right',
  distance: '60px',
  duration: 1000,
  delay: 400
});

document.querySelector('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  function toggleMenu() {
    document.getElementById("sideNav").classList.toggle("active");
  }