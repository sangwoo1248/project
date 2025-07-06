document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("slider");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const dots = document.querySelectorAll(".dot");

  let currentIndex = 0;

  // 슬라이드와 dot 업데이트
  function updateSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach((dot) => dot.classList.remove("active"));
    dots[index].classList.add("active");

    currentIndex = index;
  }

  // 이전 버튼 클릭
  prevBtn.addEventListener("click", () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide(newIndex);
  });

  // 다음 버튼 클릭
  nextBtn.addEventListener("click", () => {
    const newIndex = (currentIndex + 1) % slides.length;
    updateSlide(newIndex);
  });

  // dot 클릭 시 이동
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const index = parseInt(dot.dataset.index);
      updateSlide(index);
    });
  });

  // 초기 슬라이드 설정
  updateSlide(currentIndex);
});
