var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  speed:3000,
  loop:true,
  centeredSlides: true,
  effect: 'cube',
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Menu events
   let mobileMenuIcon = document.querySelector('header .fa-bars');
   let menu = document.querySelector('header .menu');

   mobileMenuIcon.addEventListener('click',function(){
    menu.classList.toggle('open');
   })

