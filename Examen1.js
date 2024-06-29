document
  .getElementById("registroForm")
  .addEventListener("submit", function (event) {
    let valid = true;

    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const fechaNacimiento = document.getElementById("fechaNacimiento");
    const pais = document.getElementById("pais");
    const interes = document.getElementById("interes");
    const genero = document.getElementById("genero");
    const ci = document.getElementById("ci");

    // Validación de nombre
    if (nombre.value.trim() === "") {
      document.getElementById("errorNombre").innerText =
        "El nombre es requerido.";
      valid = false;
    } else {
      document.getElementById("errorNombre").innerText = "";
    }

    // Validación de email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email.value)) {
      document.getElementById("errorEmail").innerText =
        "Ingrese un correo electrónico válido.";
      valid = false;
    } else {
      document.getElementById("errorEmail").innerText = "";
    }

    // Validación de fecha de nacimiento
    if (fechaNacimiento.value === "") {
      document.getElementById("errorFechaNacimiento").innerText =
        "La fecha de nacimiento es requerida.";
      valid = false;
    } else {
      document.getElementById("errorFechaNacimiento").innerText = "";
    }

    // Validación de país
    if (pais.value === "") {
      document.getElementById("errorPais").innerText = "Seleccione su país.";
      valid = false;
    } else {
      document.getElementById("errorPais").innerText = "";
    }

    // Validación de interés
    if (interes.value === "") {
      document.getElementById("errorInteres").innerText =
        "Seleccione su interés.";
      valid = false;
    } else {
      document.getElementById("errorInteres").innerText = "";
    }

    // Validación de género
    if (genero.value === "") {
      document.getElementById("errorGenero").innerText =
        "Seleccione su género.";
      valid = false;
    } else {
      document.getElementById("errorGenero").innerText = "";
    }

    // Validación de CI
    if (ci.files.length === 0) {
      document.getElementById("errorCi").innerText =
        "Por favor suba una copia escaneada de su CI.";
      valid = false;
    } else {
      document.getElementById("errorCi").innerText = "";
    }

    if (!valid) {
      event.preventDefault();
    }
  });
