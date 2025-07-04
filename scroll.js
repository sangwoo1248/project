let scrollDirection = 1; // 1 = 아래, -1 = 위

function autoScrollLoop() {
  window.scrollBy(0, scrollDirection * 2);

  const scrollTop = window.scrollY;
  const scrollHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;

  // 아래 끝에 도달 → 방향 전환 (위로)
  if (scrollTop + windowHeight >= scrollHeight) {
    scrollDirection = -1;
  }
  // 위 끝에 도달 → 방향 전환 (아래로)
  if (scrollTop <= 0) {
    scrollDirection = 1;
  }

  requestAnimationFrame(autoScrollLoop); // 다음 프레임 요청
}

// 페이지 로드 후 시작
window.addEventListener("load", () => {
  requestAnimationFrame(autoScrollLoop);
});
