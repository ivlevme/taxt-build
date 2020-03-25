var navMain = document.querySelector('.nav');
var navToggle = document.querySelector('.header__toggle');

console.log(navMain);


navMain.classList.remove('nav--nojs');
navMain.classList.remove('nav--opened');
navMain.classList.add('nav--closed');

navToggle.addEventListener('click', function() {
    console.log('click');

  if (navMain.classList.contains('nav--closed')) {
    navMain.classList.remove('nav--closed');
    navMain.classList.add('nav--opened');
  } else {
    navMain.classList.add('nav--closed');
    navMain.classList.remove('nav--opened');
  }
});