// AOS Initialization
AOS.init();

// Typed.js Initialization
const typed = new Typed('.typed', {
  strings: ['Designer', 'Developer', 'Freelancer'],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true
});

// Smooth Scroll
document.querySelectorAll('a.scrollto').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

var swiper = new Swiper('.speakers-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});