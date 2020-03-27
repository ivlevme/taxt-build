var navMain = document.querySelector('.nav');
var navToggle = document.querySelector('.header__toggle');
var anchors = document.querySelectorAll('a[href^="#"]');


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

anchors.forEach(function (anchor) {
  anchor.addEventListener('click', function(evt) {
    evt.preventDefault();
    var blockID = anchor.getAttribute('href')
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
})