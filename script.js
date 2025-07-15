document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const waRow = document.querySelector("td:contains('0812-3456-7890')");
  if (waRow) {
    waRow.addEventListener("click", () => {
      alert("Nomor WhatsApp akan disalin atau diklik langsung di versi selanjutnya.");
    });
  }
});

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < window.innerHeight - 100) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});
