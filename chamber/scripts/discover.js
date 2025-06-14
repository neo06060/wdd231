document.addEventListener('DOMContentLoaded', () => {

  const menuButton = document.getElementById('menu');
  const nav = document.querySelector('nav ul');
  menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  const message = document.getElementById("visitor-message");
  const lastVisit = localStorage.getItem("last-visit");
  const now = Date.now();
  let msg;

  if (!lastVisit) {
    msg = "Welcome! Let us know if you have any questions.";
  } else {
    const diffTime = now - parseInt(lastVisit, 10);
    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    msg = days < 1 ? "Back so soon! Awesome!" : `You last visited ${days} day${days === 1 ? "" : "s"} ago.`;
  }

  message.textContent = msg;
  localStorage.setItem("last-visit", now.toString());

  const grid = document.getElementById("discover-grid");

  fetch("scripts/places.json")
    .then(res => {
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    })
    .then(data => {
      data.forEach((member, index) => {
        const card = document.createElement("div");
        card.className = "card";
        card.style.gridArea = `card${index + 1}`;
        card.innerHTML = `
          <h2>${member.name}</h2>
          <figure>
            <img src="${member.image.replace('.jpg', '.webp')}" alt="${member.name}" loading="lazy" />
          </figure>
          <address>${member.address}</address>
          <p>${member.info}</p>
          <a href="${member.website}" target="_blank"><button>Learn More</button></a>
        `;
        grid.appendChild(card);
      });
    })
    .catch(error => {
      grid.innerHTML = "<p>Sorry, we couldn't load the discover content right now.</p>";
      console.error("Fetch error:", error);
    });
});
