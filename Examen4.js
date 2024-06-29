class Material {
  constructor(nombre, tipo, cantidad, precioPorUnidad) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.cantidad = cantidad;
    this.precioPorUnidad = precioPorUnidad;
  }

  calcularCosto() {
    return this.cantidad * this.precioPorUnidad;
  }

  mostrarInformacion() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Tipo: ${this.tipo}`);
    console.log(`Cantidad: ${this.cantidad}`);
    console.log(`Precio por Unidad: ${this.precioPorUnidad.toFixed(2)}`);
    console.log(`Costo Total: ${this.calcularCosto().toFixed(2)}`);
    console.log("------------------------------");
  }
}

const materiales = [
  new Material("Cemento", "Construcción", 100, 7.5),
  new Material("Arena", "Construcción", 200, 3.25),
  new Material("Grava", "Construcción", 150, 4.75),
  new Material("Ladrillo", "Construcción", 500, 0.55),
];

function cargarMateriales() {
  materiales.forEach((material) => {
    material.mostrarInformacion();
  });
}

document.addEventListener("DOMContentLoaded", cargarMateriales);
