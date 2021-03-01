//Variables
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");

// contenedor para los resultados
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
  mostrarAutos(autos); // Muestra los automoviles al cargar

  llenarSelect(); // llena las opciones de año
});

// Event listener para los select de busqueda
marca.addEventListener("change", (e) => {
  datosBusqueda.marca = e.target.value;

  filtrarAuto();
});

year.addEventListener("change", (e) => {
  datosBusqueda.year = parseInt(e.target.value);

  filtrarAuto();
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
function mostrarAutos(autos) {
  limpiarHTML(); // limpia el html previo

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

// Limpiar HTML
function limpiarHTML() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
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

/**
 * Estamos creando una funcion que manda a llamar a otra funccion
 * En la funcion filtrarMarca
 */
function filtrarAuto() {
  const resultado = autos.filter(filtrarMarca).filter(filtrarYear);

  //console.log(resultado);
  mostrarAutos(resultado);
}

function filtrarMarca(auto) {
  const { marca } = datosBusqueda;
  if (marca) {
    return auto.marca === marca;
  }
  return auto;
}

function filtrarYear(auto) {
  const { year } = datosBusqueda;
  if (year) {
    return auto.year === year;
  }
  return auto;
}
