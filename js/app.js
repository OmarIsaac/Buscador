//Variables
const resultado = document.querySelector("#resultado");

// Eventos
document.addEventListener("DOMContentLoaded", () => {
  mostrarAutos();
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
