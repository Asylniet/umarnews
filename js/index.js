window.addEventListener('DOMContentLoaded', () => {
  mainWrapperResize();
  window.addEventListener("resize", mainWrapperResize());
});

function mainWrapperResize() {
  const nav = document.querySelector('nav');
  const windowWidth = window.innerWidth;
  const mainWrapper = document.querySelector(".main-box-container");
  if(windowWidth > 767) {
    mainWrapper.style.height = `${nav.offsetHeight}px`;
  }
}