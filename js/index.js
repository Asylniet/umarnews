window.addEventListener('DOMContentLoaded', () => {
  mainWrapperResize();
  window.addEventListener("resize", mainWrapperResize());
  hamburger();
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    }
  });
  const swiperCategory = new Swiper('.swiper.swiper-category', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 10,
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});

function mainWrapperResize() {
  const nav = document.querySelector('nav-component');
  const windowWidth = window.innerWidth;
  const mainWrapper = document.querySelector(".main-box-container");
  if(windowWidth > 767 && mainWrapper) {
    mainWrapper.style.height = `${nav.offsetHeight}px`;
  }
}

function hamburger() {
  const burger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav-component');
  
  
  burger.removeEventListener('click', burgerClick);
  burger.addEventListener('click', burgerClick);
  nav.querySelectorAll('a').forEach((el) => {
    el.addEventListener('click', function() {
      if(nav.classList.contains("open")) {
        burger.classList.remove("open");
        nav.classList.remove("open");
        document.body.classList.remove("locked");
      }
    });
  })
}

function burgerClick() {
  const nav = document.querySelector('nav-component');
  if(nav.classList.contains("open")) {
    this.classList.remove("open");
    nav.classList.remove("open");
    document.body.classList.remove("locked");
  } else {
    this.classList.add("open");
    nav.classList.add("open");
    document.body.classList.add("locked");
  }
}