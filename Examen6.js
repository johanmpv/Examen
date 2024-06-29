class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  nombreCompleto() {
    return `${this.nombre} ${this.apellido}`;
  }
}

function manejarFormulario(evento) {
  evento.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const edad = parseInt(document.getElementById("edad").value);

  if (edad < 18) {
    alert("El cliente no es mayor de edad.");
    return;
  }

  const persona = new Persona(nombre, apellido, edad);

  alert(`Nombre completo: ${persona.nombreCompleto()}`);
}
