//Variables
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");

const resultado = document.querySelector("#resultado");

const max = new Date().getFullYear();
const min = max - 10;

// Generar un objeto con la busqueda
const datosBusqueda = {
  marca: "",
  year: "",
  minimo: "",
  maximo: "",
  puertas: "",
  transmision: "",
  color: "",
};

// Eventos
document.addEventListener("DOMContentLoaded", () => {
  mostrarAutos(); // Muestra los automoviles al cargar

  llenarSelect(); // llena las opciones de año
});

// Event listener para los select de busqueda
marca.addEventListener("change", (e) => {
  datosBusqueda.marca = e.target.value;
});

year.addEventListener("change", (e) => {
  datosBusqueda.year = e.target.value;
});

minimo.addEventListener("change", (e) => {
  datosBusqueda.minimo = e.target.value;
});

maximo.addEventListener("change", (e) => {
  datosBusqueda.maximo = e.target.value;
});

puertas.addEventListener("change", (e) => {
  datosBusqueda.puertas = e.target.value;
});

transmision.addEventListener("change", (e) => {
  datosBusqueda.transmision = e.target.value;
});

color.addEventListener("change", (e) => {
  datosBusqueda.color = e.target.value;

  console.log(datosBusqueda);
});
// Funciones
function mostrarAutos() {
  autos.forEach((auto) => {
    // se crea destructuring para mandar a llamar mas facil los objetos.
    const { marca, modelo, year, puertas, transmision, precio, color } = auto;
    // creamos un parrafo para cada automovil
    const autoHTML = document.createElement("p");

    autoHTML.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision}
        - Precio: ${precio} - Color: ${color}
    `;

    //insertar en el HTML
    resultado.appendChild(autoHTML);
  });
}

// Genera los años del Select
function llenarSelect() {
  // const max = new Date().getFullYear();
  // inicia en 2021 o el año en que estas let i = max
  for (let i = max; i >= min; i--) {
    const opcion = document.createElement("option");
    opcion.value = i; // Selecciona el valor de i
    opcion.textContent = i; // representa el valor de i
    year.appendChild(opcion); // Agrega las opciones de año al select
  }
}
