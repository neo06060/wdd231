document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
document.getElementById("timestamp").value = new Date().toISOString();

function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// Animate cards on load
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".membership-card").forEach((card, i) => {
    setTimeout(() => {
      card.classList.add("visible");
    }, i * 300);
  });
});
