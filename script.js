// *********************************************************************************************HAMBURGER-MENU
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// *********************************************************************************************HERO-SECTION

const textElement = document.getElementById("typing-text");

const text = "Frontend Developer";
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  textElement.textContent = text.substring(0, charIndex);

  if (!isDeleting && charIndex < text.length) {
    charIndex++;
    setTimeout(typeEffect, 100); 
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 50); 
  } else {
    isDeleting = !isDeleting;
    setTimeout(typeEffect, 1000); 
  }
}

typeEffect();
