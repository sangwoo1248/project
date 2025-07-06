document.addEventListener("DOMContentLoaded", function () {
  // 메뉴 토글
  const menuIcon = document.querySelector(".menu-icon");
  const menuList = document.getElementById("menuList");

  menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("active");
  });
});
