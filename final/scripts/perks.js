document.addEventListener('DOMContentLoaded', () => {
  const tiers = ["free", "bronze", "silver", "gold", "platinum", "emerald", "diamond"];
  const userTier = (sessionStorage.getItem('subscription') || 'free').toLowerCase();
  const container = document.getElementById('perks-container');

  const modal = document.getElementById("perk-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalImage = document.getElementById("modal-image");
  const modalDescription = document.getElementById("modal-description");
  const modalClose = document.getElementById("modal-close");

  const perks = [
    {
      name: "Adblocker",
      image: "images/perks/noads.webp",
      tier: "Bronze",
      description: "Enjoy an ad free experience"
    },
    {
      name: "Support Small Creators",
      image: "images/perks/smolcreator.webp",
      tier: "Bronze",
      description: "Your subscription helps support independent devs and artists contributing to the platform."
    },
    {
      name: "Early Access",
      image: "images/perks/betastuff.webp",
      tier: "Silver",
      description: "Get early access to new features and updates before the general public."
    },
    {
      name: "Monthly Content Drops",
      image: "images/perks/coolstuff.webp",
      tier: "Gold",
      description: "Receive new digital content monthly, such as themes, badges, or enhancements."
    },
    {
      name: "Beta Features",
      image: "images/perks/creature2.gif",
      tier: "Platinum",
      description: "Be the first to test experimental features and give feedback."
    },
    {
      name: "Discounts on Partner Services",
      image: "images/perks/discount.webp",
      tier: "Emerald",
      description: "Get special discounts from small companies we collaborate with."
    },
    {
      name: "Queue priority",
      image: "images/perks/queueskip.webp",
      tier: "Emerald",
      description: "Priority to get into our page if the servers are overflowing"
    },
    {
      name: "Priority Feature Requests",
      image: "images/perks/listen.webp",
      tier: "Diamond",
      description: "Have your feature suggestions considered faster by our dev team."
    }
  ];

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
      ${isUnlocked
        ? `<button class="more-info">More Info</button>`
        : ''
      }
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
