// mobile nav
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  navMenu.style.color = "black";
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

