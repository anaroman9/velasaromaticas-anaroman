// Datos para filtrar//

const dwana = [
  //Lavanda//
  { id: 1, name: "Lavanda", image: "img/la1.avif", genero: "Lavanda", description: "Una vela de lavanda tiene un aroma floral y relajante, generalmente de color lila o morado. Su fragancia transmite tranquilidad y crea un ambiente cálido y acogedor." },
  { id: 2, name: "Lavanda y vainilla", image: "img/la2.jpeg", genero: "Lavanda", description: "Una vela de lavanda tiene un aroma floral y relajante, generalmente de color lila o morado. Su fragancia transmite tranquilidad y crea un ambiente cálido y acogedor." },
  { id: 3, name: "Lavanda y ambar", image: "img/la3.webp", genero: "Lavanda", description: "Una vela de lavanda tiene un aroma floral y relajante, generalmente de color lila o morado. Su fragancia transmite tranquilidad y crea un ambiente cálido y acogedor." },
  { id: 4, name: "Lavanda y jazmin", image: "img/la4.jpeg", genero: "Lavanda", description: "Una vela de lavanda tiene un aroma floral y relajante, generalmente de color lila o morado. Su fragancia transmite tranquilidad y crea un ambiente cálido y acogedor." },

  //Vainilla//
  { id: 5, name: "Vainilla y canela", image: "img/va1.jpeg", genero: "Vainilla", description: "Vela aromática de vainilla con un aroma dulce y cálido que crea un ambiente acogedor, relajante y lleno de tranquilidad." },
  { id: 6, name: "Vainilla y coco", image: "img/va2.jpeg", genero: "Vainilla", description: "Vela aromática de vainilla con un aroma dulce y cálido que crea un ambiente acogedor, relajante y lleno de tranquilidad." },
  { id: 7, name: "Vainilla y sandalo", image: "img/va3.jpeg", genero: "Vainilla", description: "Vela aromática de vainilla con un aroma dulce y cálido que crea un ambiente acogedor, relajante y lleno de tranquilidad." },
  { id: 8, name: "Vainilla y pachuli", image: "img/va4.jpg", genero: "Vainilla", description: "Vela aromática de vainilla con un aroma dulce y cálido que crea un ambiente acogedor, relajante y lleno de tranquilidad." }
];

// Obtener contenedores y botones del DOM
const dwanaContainer = document.getElementById("Lavanda-container");
const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".Lavanda-card");

function renderDw(category = "all") {
  const selected = String(category || "all").trim().toLowerCase();

  cards.forEach((card) => {
    const gender = (card.dataset.gender || "").trim().toLowerCase();

    const showCard =
      selected === "all" || gender === selected;

    card.style.display = showCard ? "" : "none";
  });
}

// sincroniza botones activos
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = String(button.dataset.category || "all").trim().toLowerCase();

    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    renderDw(selected);
  });
});

// carga inicial: mostrar todas
document.addEventListener("DOMContentLoaded", () => {
  const allBtn = document.querySelector('.filter-btn[data-category="all"]');
  if (allBtn) {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    allBtn.classList.add("active");
  }

  renderDw("all");
});

// Función para volver arriba
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
