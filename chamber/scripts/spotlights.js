const spotlightContainer = document.querySelector(".spotlight-container");

async function loadSpotlights() {
  try {
    const response = await fetch("scripts/Members.json");
    const members = await response.json();

    const spotlightCandidates = members.filter(m =>
      m.membership === 2 || m.membership === 3
    );

    const selected = spotlightCandidates
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    selected.forEach(member => {
      const div = document.createElement("div");
      div.classList.add("spotlight");

      div.innerHTML = `
        <img src="images/${member.image}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><strong>Address:</strong> ${member.address}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        <p><strong>${["Bronze", "Silver", "Gold", "Diamond"][member.membership - 1]} Member</strong></p>
      `;

      spotlightContainer.appendChild(div);
    });
  } catch (err) {
    console.error("Error loading spotlights:", err);
  }
}

loadSpotlights();
