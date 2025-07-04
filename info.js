document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const menuList = document.getElementById("menuList");

  menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("active");
  });
});
