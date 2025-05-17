document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const container = document.getElementById("members-container");
const gridButton = document.getElementById("gridView");
const listButton = document.getElementById("listView");

async function fetchMembers() {
  try {
    const response = await fetch('scripts/Members.json');
    const members = await response.json();
    displayMembers(members);
  } catch (error) {
    console.error('Error loading members:', error);
  }
}

function displayMembers(members) {
  container.innerHTML = '';
  members.forEach(member => {
    const card = document.createElement("section");
    card.classList.add("member-card");
    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}" />
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Site</a>
      <p><strong>${["Bronze", "Silver", "Gold", "Diamond"][member.membership - 1]} Member</strong></p>
      <p>${member.info}</p>
    `;
    container.appendChild(card);
  });
}

gridButton.addEventListener('click', () => container.classList.replace("list", "grid"));
listButton.addEventListener('click', () => container.classList.replace("grid", "list"));

fetchMembers();
