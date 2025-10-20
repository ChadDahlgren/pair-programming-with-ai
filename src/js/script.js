// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    // Close menu when clicking on a link
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add scroll effect to navbar
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
    navbar.style.backdropFilter = "blur(10px)";
  } else {
    navbar.style.background = "#fff";
    navbar.style.backdropFilter = "none";
  }
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(
    ".problem-card, .quick-start-card, .solution-text, .solution-visual"
  );

  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});

// Simple form validation (if forms are added later)
function validateForm(form) {
  const inputs = form.querySelectorAll("input[required], textarea[required]");
  let isValid = true;

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      input.style.borderColor = "#e74c3c";
      isValid = false;
    } else {
      input.style.borderColor = "#ddd";
    }
  });

  return isValid;
}

// Utility function for creating interactive elements
function createInteractiveElement(type, content, className = "") {
  const element = document.createElement(type);
  element.innerHTML = content;
  if (className) {
    element.className = className;
  }
  return element;
}

// Demo functionality for AI collaboration examples
function showCollaborationDemo() {
  // This would be expanded to show actual AI collaboration examples
  console.log("AI Collaboration Demo would be implemented here");
}

// Export functions for potential use in other scripts
window.PairProgrammingAI = {
  validateForm,
  createInteractiveElement,
  showCollaborationDemo,
};
