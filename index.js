//open close hamubrger
const hamburger = document.querySelector(".burger");

function toggleBurger() {
  hamburger.classList.toggle("burger-active");
}
hamburger.addEventListener("click", toggleBurger);

//open close menu
const menu = document.querySelector(".menu");

function toggleMenu() {
  menu.classList.toggle("menu-active");
}
hamburger.addEventListener("click", toggleMenu);

//close menu
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
