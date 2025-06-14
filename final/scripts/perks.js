// perks.js
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('perks-container');
  if (!container) return; // ← Avoid crash on user.html

  const tiers = ["free", "bronze", "silver", "gold", "platinum", "emerald", "diamond"];
  const userTier = (sessionStorage.getItem('subscription') || 'free').toLowerCase();

  const modal = document.getElementById("perk-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalImage = document.getElementById("modal-image");
  const modalDescription = document.getElementById("modal-description");
  const modalClose = document.getElementById("modal-close");

  const tierIndex = (tier) => tiers.indexOf(tier.toLowerCase());

  perks.forEach(perk => {
    const card = document.createElement('div');
    card.className = 'perk-card';

    const userLevel = tierIndex(userTier);
    const requiredLevel = tierIndex(perk.tier);
    const isUnlocked = userLevel >= requiredLevel;

    card.innerHTML = `
      <div class="perk-image-wrapper">
        <img src="${perk.image}" alt="${perk.name}">
        ${!isUnlocked ? `<div class="locked" title="${perk.tier} subscription needed">🔒</div>` : ''}
      </div>
      <h3>${perk.name}</h3>
      <p>Requires: ${perk.tier}</p>
      ${isUnlocked ? `<button class="more-info">More Info</button>` : ''}
    `;

    if (isUnlocked) {
      const btn = card.querySelector('.more-info');
      btn.addEventListener('click', () => {
        modalTitle.textContent = perk.name;
        modalImage.src = perk.image;
        modalDescription.textContent = perk.description;
        modal.classList.remove('hidden');
      });
    } else {
      card.classList.add('locked-perk');
    }

    container.appendChild(card);
  });

  const comingSoonBanner = document.createElement('div');
  comingSoonBanner.textContent = "✨ More perks incoming!";
  comingSoonBanner.style.marginTop = "30px";
  comingSoonBanner.style.padding = "20px";
  comingSoonBanner.style.textAlign = "center";
  comingSoonBanner.style.backgroundColor = "#f3f3f3";
  comingSoonBanner.style.border = "2px dashed #ccc";
  comingSoonBanner.style.borderRadius = "10px";
  comingSoonBanner.style.fontSize = "1.2em";
  comingSoonBanner.style.fontWeight = "bold";
  container.appendChild(comingSoonBanner);

  modalClose.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });

  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = document.lastModified;
});
