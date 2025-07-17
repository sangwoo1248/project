function initSlider(sliderId, prevId, nextId, dotsId) {
  const slider = document.getElementById(sliderId);
  const slides = slider.querySelectorAll(".slide");
  const prevBtn = document.getElementById(prevId);
  const nextBtn = document.getElementById(nextId);
  const dots = document.querySelectorAll(`#${dotsId} .dot`);

  let currentIndex = 0;

  function updateSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[index].classList.add("active");
    currentIndex = index;
  }

  prevBtn.addEventListener("click", () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide(newIndex);
  });

  nextBtn.addEventListener("click", () => {
    const newIndex = (currentIndex + 1) % slides.length;
    updateSlide(newIndex);
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const index = parseInt(dot.dataset.index);
      updateSlide(index);
    });
  });

  updateSlide(currentIndex);
}

document.addEventListener("DOMContentLoaded", () => {
  initSlider("projectSlider", "projectPrev", "projectNext", "projectDots");
});
