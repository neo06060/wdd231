
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu');
  const navList = document.getElementById('navList');

  menuBtn.addEventListener('click', () => {
    navList.classList.toggle('open');
  });
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = document.lastModified;
});
window.addEventListener("DOMContentLoaded", () => {
  const avatarImg = document.getElementById("user-avatar");
  const savedAvatar = sessionStorage.getItem("avatar");

  if (avatarImg && savedAvatar) {
    avatarImg.src = savedAvatar;
  }

  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
});
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
    mobileMenu.classList.toggle("hidden");
  });
});
