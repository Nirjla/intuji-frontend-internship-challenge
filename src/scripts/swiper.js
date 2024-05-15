var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true, // Enable infinite loop
  autoplay: {
    delay: 3000, // Autoplay delay in milliseconds
    disableOnInteraction: false, // Enable autoplay even when user interacts with swiper
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
