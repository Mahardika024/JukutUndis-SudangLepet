document.addEventListener("DOMContentLoaded", () => {
  console.log("Website makanan tradisional dimuat!");
});

if (window.location.hash === "#chatbot") {
  document.getElementById("chatbot").scrollIntoView({ behavior: "smooth" });
}

const cards = document.querySelectorAll(".card");
cards.forEach(card => {
  card.addEventListener("mouseover", () => {
    card.style.boxShadow = "0 0 15px rgba(0, 128, 0, 0.3)";
  });
  card.addEventListener("mouseout", () => {
    card.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
  });
});
