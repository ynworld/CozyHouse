const navIcon = document.querySelector(".navigation__icon-block");
const navigation = document.querySelector(".nav");
const header = document.querySelector(".header");
let isMenuOpen = true;

navIcon.addEventListener("click", function () {
  if (menuClosed) {
    navigation.style.display = "flex";
    navIcon.style.transform = "rotate(90deg)";
    header.style.position = "fixed";
    header.style.width = "46rem";
    header.style.height = "100%";
    header.style.background = "var(--color-grey-dark-3)";
    menuClosed = false;
  } else {
    navigation.style.display = "none";
    navIcon.style.transform = "rotate(0deg)";
    header.style.position = "relative";
    header.style.width = "100%";
    header.style.background = "transparent";
    menuClosed = true;
  }
});
