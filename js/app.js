//Variables
const resultado = document.querySelector("#resultado");

const year = document.querySelector("#year");

const max = new Date().getFullYear();
const min = max - 10;

// Eventos
document.addEventListener("DOMContentLoaded", () => {
  mostrarAutos(); // Muestra los automoviles al cargar

  llenarSelect(); // llena las opciones de año
});

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
  for (let i = max; i >= min; i--) {
    const opcion = document.createElement("option");
    opcion.value = i;
    opcion.textContent = i;
    year.appendChild(opcion); // Agrega las opciones de año al select
  }
}
