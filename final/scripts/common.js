document.addEventListener("DOMContentLoaded", () => {
  const avatarImg = document.getElementById("user-avatar");
  const avatarContainer = document.querySelector(".avatar-container");
  const rankImg = document.getElementById("rank-overlay");

  const savedAvatar = sessionStorage.getItem("avatar");
  const savedSub = sessionStorage.getItem("subscription");

  if (avatarImg) {
    if (savedAvatar) {
      const img = new Image();
      img.onload = () => {
        avatarImg.src = savedAvatar;
        avatarImg.style.display = "block";
        if (avatarContainer) avatarContainer.style.visibility = "visible";
      };
      img.src = savedAvatar;
    } else {
      avatarImg.src = "images/default.jpg";
      avatarImg.style.display = "block";
      if (avatarContainer) avatarContainer.style.visibility = "visible";
    }
  }

  if (rankImg) {
    const rank = savedSub || "free";
    rankImg.src = `images/ranks/${rank}.png`;
    rankImg.style.display = "block";
  }

  const yearSpan = document.getElementById("year");
  const modifiedSpan = document.getElementById("lastModified");

  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
  if (modifiedSpan) modifiedSpan.textContent = document.lastModified;
});
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu");
  const navList = document.getElementById("navList");

  if (menuBtn && navList) {
    menuBtn.addEventListener("click", () => {
      navList.classList.toggle("active");
    });
  }
});
