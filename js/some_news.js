window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.heart-wrapper').forEach((heart) => {
    heart.addEventListener('click', function() {
      const liked = heart.querySelector('.heart').classList.contains("liked");
      const number = +heart.querySelector('.heart_number').innerText;
      document.querySelectorAll(".heart").forEach((h) => {
        h.classList.toggle("liked");
      });
      document.querySelectorAll(".heart_number").forEach((h) => {
        h.innerText = liked ? number - 1 : number + 1;
      });
    })
  });
});