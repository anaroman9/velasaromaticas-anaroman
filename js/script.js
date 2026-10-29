// Datos para filtrar//

//Primer filtro: Lavanda//

const dwana =[

//Lavanda//
{id: 1, name:"Lavanda", image: "img/la1.avifg",genero: "Lavanda" ,  description: "Una vela de lavanda tiene un aroma floral y relajante, generalmente de color lila o morado. Su fragancia transmite tranquilidad y crea un ambiente cálido y acogedor." },
{id: 2, name:"Lavanda y vainilla", image: "img/la2.jpeg",genero: "Lavanda" ,  description: "Una vela de lavanda tiene un aroma floral y relajante, generalmente de color lila o morado. Su fragancia transmite tranquilidad y crea un ambiente cálido y acogedor." },
{id: 3, name:" Lavanda y ambar", image: "img/la3.webp",genero: "Lavanda" ,  description: "Una vela de lavanda tiene un aroma floral y relajante, generalmente de color lila o morado. Su fragancia transmite tranquilidad y crea un ambiente cálido y acogedor." },
{id: 4, name:"Lavanda y jazmin", image: "img/la4.jpeg",genero: "Lavanda" ,  description: "Una vela de lavanda tiene un aroma floral y relajante, generalmente de color lila o morado. Su fragancia transmite tranquilidad y crea un ambiente cálido y acogedor." },

//Vainilla//
{id: 5, name:"Vainilla y canela", image: "img/va1.jpeg",genero: "Vainilla" ,  description: "Vela aromática de vainilla con un aroma dulce y cálido que crea un ambiente acogedor, relajante y lleno de tranquilidad." },
{id: 6, name:"Vainilla y coco", image: "img/va2.jpeg",genero: "Vainilla" ,  description: "Vela aromática de vainilla con un aroma dulce y cálido que crea un ambiente acogedor, relajante y lleno de tranquilidad." },
{id: 7, name:"Vainilla y sandalo", image: "img/va3.jpeg",genero: "Vainilla" ,  description: "Vela aromática de vainilla con un aroma dulce y cálido que crea un ambiente acogedor, relajante y lleno de tranquilidad." },
{id: 8, name:"Vainilla y pachuli", image: "img/va4.jp",genero: "Vainilla" ,  description: "Vela aromática de vainilla con un aroma dulce y cálido que crea un ambiente acogedor, relajante y lleno de tranquilidad." },

];

// Obtener los contenedores y botones del DOM
const dwanaContainer = document.getElementById("Lavanda-container");
const filterButtons = document.querySelectorAll(".filter-btn");


// Función para renderizar las tarjetas 
function renderDw(genero) {
    let dwanaToRender = [];
    if (genero === "all") {
        dwanaToRender = dwana;
    } else {
        dwanaToRender = dwana.filter(Dwana => Dwana.genero === genero);
    }




}