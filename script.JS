const section = document.querySelector(".section");
const cards = document.querySelectorAll(".card");

function revealElements() {
  const trigger = window.innerHeight * 0.85;

  // Reveal story section
  if (section && section.getBoundingClientRect().top < trigger) {
    section.classList.add("show");
  }

  // Reveal cards with stagger
  cards.forEach((card, index) => {
    if (card.getBoundingClientRect().top < trigger && !card.classList.contains("show")) {
      setTimeout(() => {
        card.classList.add("show");
      }, index * 200); // 200ms stagger
    }
  });
}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);
