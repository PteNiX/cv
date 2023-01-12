
const hamburger = document.querySelector(".burger");

function toggleBurger() {
  hamburger.classList.toggle("burger-active");
}
hamburger.addEventListener("click", toggleBurger);


const menu = document.querySelector(".menu");

function toggleMenu() {
  menu.classList.toggle("menu-active");
}
hamburger.addEventListener("click", toggleMenu);

const menu1 = document.querySelectorAll(".menu-link");

const menuLink = document.querySelector(".menu-active");

function closeMenu() {
  menu1.forEach((item) => {
    item.addEventListener("click", () => {
      menu.classList.toggle("menu-active");
      hamburger.classList.toggle("burger-active");
      overlay.classList.remove("overlay-active");
      body.classList.remove("block");
    });
  });
}
closeMenu();
