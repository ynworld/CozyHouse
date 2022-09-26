const navIcon = document.querySelector('.navigation__icon-block');
const navigation = document.querySelector('.nav');
const header = document.querySelector('.header');
let isMenuOpen = false;

navIcon.addEventListener('click', function () {
  if (!isMenuOpen) {
    navigation.style.display = 'flex';
    navIcon.style.transform = 'rotate(90deg)';
    header.classList.add('nav--open');
    isMenuOpen = true;
  } else {
    navigation.style.display = 'none';
    navIcon.style.transform = 'rotate(0deg)';
    header.classList.remove('nav--open');
    isMenuOpen = false;
  }
});
