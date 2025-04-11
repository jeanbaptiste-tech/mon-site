let index = 0;
const images = document.querySelectorAll(".slider img");

function showImage() {
  images.forEach((img, i) => {
    img.style.display = i === index ? "block" : "none";
  });
}

function nextImage() {
  index = (index + 1) % images.length;
  showImage();
}

showImage();
setInterval(nextImage, 3000); // Change d'image toutes les 3 secondes

// script.js
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
  burger.classList.toggle("toggle"); // pour animation de l'icône si tu veux
});

// animation du menu burger
document.addEventListener("DOMContentLoaded", function () {
  // Burger Menu
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});
