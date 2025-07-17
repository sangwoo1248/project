document.addEventListener("DOMContentLoaded", function () {
  // 메뉴 토글
  const menuIcon = document.querySelector(".menu-icon");
  const menuList = document.getElementById("menuList");

  menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("active");
  });
});

document.querySelector("form").addEventListener("submit", function (e) {
  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (name === "" || age === "" || phone === "") {
    alert("모든 항목을 입력해주세요.");
    e.preventDefault();
    return;
  }

  if (!/^\d{2,3}\d{3,4}\d{4}$/.test(phone)) {
    alert("전화번호는 - 없이 숫자만 입력해주세요.");
    e.preventDefault();
  }
});
