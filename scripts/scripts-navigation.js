const menuBtn = document.getElementById("menu");
const navList = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  navList.classList.toggle("open");
});

document.querySelectorAll(".navigation a").forEach(link => {
  link.addEventListener("click", () => {
    navList.classList.remove("open");
  });
});
