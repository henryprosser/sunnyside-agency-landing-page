/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle");

let navClose = false;

/* Menu toggle */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    if (!navClose) {
      console.log("toggle clicked: show menu");
      navMenu.classList.add("show-menu");
      navClose = true;
    } else {
      console.log("toggle clicked: hide menu");
      navMenu.classList.remove("show-menu");
      navClose = false;
    }
  });
}
