document.addEventListener("DOMContentLoaded", () => {
  const usernameInput = document.getElementById("username");
  const bioInput = document.getElementById("bio");
  const rankSelect = document.getElementById("rankSelect");
  const saveBtn = document.getElementById("saveProfileBtn");

  const avatarUpload = document.getElementById("avatarUpload");
  const profileAvatar = document.getElementById("profile-avatar");
  const editAvatarBtn = document.getElementById("edit-avatar-btn");

  const topAvatar = document.querySelector("header #user-avatar");
  const topRank = document.getElementById("rank-overlay");
  const profileRankOverlay = document.getElementById("profile-rank-overlay");

  // Load from sessionStorage
  usernameInput.value = sessionStorage.getItem("username") || "";
  bioInput.value = sessionStorage.getItem("bio") || "";
  rankSelect.value = sessionStorage.getItem("subscription") || "free";

  const savedAvatar = sessionStorage.getItem("avatar");
  if (savedAvatar) {
    profileAvatar.src = savedAvatar;
    profileAvatar.style.display = "block";
    if (topAvatar) {
      topAvatar.src = savedAvatar;
      topAvatar.style.display = "block";
    }
  } else {
    profileAvatar.style.display = "block";
    if (topAvatar) topAvatar.style.display = "block";
  }

  const updateRankVisual = (rank) => {
    const src = `images/ranks/${rank}.png`;
    if (profileRankOverlay) {
      profileRankOverlay.src = src;
      profileRankOverlay.style.display = "block";
    }
  };

  updateRankVisual(rankSelect.value);

  saveBtn.addEventListener("click", () => {
    const name = usernameInput.value;
    const bio = bioInput.value;
    const rank = rankSelect.value;

    sessionStorage.setItem("username", name);
    sessionStorage.setItem("bio", bio);
    sessionStorage.setItem("subscription", rank);

    const tempAvatar = sessionStorage.getItem("tempAvatar");
    if (tempAvatar) {
      sessionStorage.setItem("avatar", tempAvatar);
      sessionStorage.removeItem("tempAvatar");

      if (topAvatar) {
        topAvatar.src = tempAvatar;
        topAvatar.style.display = "block";
      }
    }

    const rankSrc = `images/ranks/${rank}.png`;
    if (topRank) {
      topRank.src = rankSrc;
      topRank.style.display = "block";
    }

    showTemporaryMessage("Saved!");
  });

  editAvatarBtn.addEventListener("click", () => avatarUpload.click());

  avatarUpload.addEventListener("change", () => {
    const file = avatarUpload.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageData = e.target.result;
        profileAvatar.src = imageData;
        sessionStorage.setItem("tempAvatar", imageData);
        profileAvatar.style.display = "block";
      };
      reader.readAsDataURL(file);
    }
  });

  rankSelect.addEventListener("change", () => {
    updateRankVisual(rankSelect.value);
  });

  function showTemporaryMessage(msg) {
    const message = document.createElement("div");
    message.textContent = msg;
    message.style.position = "fixed";
    message.style.bottom = "20px";
    message.style.right = "20px";
    message.style.backgroundColor = "#28a745";
    message.style.color = "white";
    message.style.padding = "10px 16px";
    message.style.borderRadius = "8px";
    message.style.fontWeight = "bold";
    message.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
    message.style.zIndex = "9999";
    document.body.appendChild(message);
    setTimeout(() => {
      message.remove();
    }, 2000);
  }
});
