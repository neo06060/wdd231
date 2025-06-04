
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu');
  const navList = document.getElementById('navList');

  menuBtn.addEventListener('click', () => {
    navList.classList.toggle('open');
  });
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = document.lastModified;
});
