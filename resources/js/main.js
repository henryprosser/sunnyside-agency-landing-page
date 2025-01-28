/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle");
navTriangle = document.querySelector(".nav__menu-triangle");

let navClose = false;

/* Menu toggle */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    if (!navClose) {
      console.log("toggle clicked: show menu");
      navMenu.classList.add("show-menu");
      navTriangle.style.opacity = "1"; // Show the triangle
      navClose = true;
    } else {
      console.log("toggle clicked: hide menu");
      navMenu.classList.remove("show-menu");
      navTriangle.style.opacity = "0"; // Hide the triangle
      navClose = false;
    }
  });
}
