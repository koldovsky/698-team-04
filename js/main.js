/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.querySelector(".nav__list-wrapper"),
  navBurger = document.querySelector(".icon-menu"),
  navClose = document.querySelector(".close-icon-menu");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navBurger) {
  navBurger.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
    navBurger.classList.remove  ("show-menu");
    navClose.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
    navClose.classList.remove("show-menu");
    navBurger.classList.add("show-menu");
  });
}