window.addEventListener('DOMContentLoaded', () => {
  mainWrapperResize();
  window.addEventListener("resize", mainWrapperResize());
  hamburger();
  hideSearch();
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

function hideSearch() {
  if(window.innerWidth < 640) {
    /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
    var prevScrollpos = window.scrollY;
    window.onscroll = function() {
      var currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("search").classList.add("top-14");
        document.getElementById("search").classList.remove("-top-16");
      } else {
        document.getElementById("search").classList.add("-top-16");
        document.getElementById("search").classList.remove("top-14");
      }
      prevScrollpos = currentScrollPos;
    }
  }
}