let menuBtn = document.querySelector('#menu-bars');
let navbar = document.querySelector('.header .navbar');


menuBtn.onclick = () =>{
    navbar.classList.toggle('active');
}

var swiper = new Swiper(".servicos-slide", {
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    breakpoints: {
        540: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
  });
  var swiper = new Swiper(".plans-slide", {
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    breakpoints: {
        540: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
  });