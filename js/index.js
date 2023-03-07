const heroSection = document.getElementById("hero-section");

window.addEventListener("resize", () => {
  const width = window.outerWidth;
  if (width <= 992) {
    heroSection.classList.add("container");
  } else {
    heroSection.classList.remove("container");
  }
});

var swiper = new Swiper(".heroSlider", {
  effect: "cards",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper = new Swiper(".feedbackSlider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
