document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".about-card, .trait");

  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(18px)";
    card.style.transition = "all 0.5s ease";

    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, 120 * index + 150);
  });
});
