document.addEventListener("DOMContentLoaded", () => {
  const avatarImg = document.getElementById("user-avatar");
  const avatarContainer = document.querySelector(".avatar-container");
  const rankImg = document.getElementById("rank-overlay");

  const savedAvatar = sessionStorage.getItem("avatar");
  const savedSub = sessionStorage.getItem("subscription");

  // Burger menu toggle
  const menuBtn = document.getElementById("menu");
  const navList = document.querySelector("nav ul");

  if (menuBtn && navList) {
    menuBtn.addEventListener("click", () => {
      const isOpen = navList.classList.toggle("open");
menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");

    });

    // Close menu when clicking nav links
    document.querySelectorAll(".navigation a").forEach(link => {
      link.addEventListener("click", () => {
        navList.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", false);
      });
    });
  }

  // Avatar loading
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
