const alerta = document.getElementById("alerta");
const alertaTexto = document.querySelector(".alertText");

function mostrarAlerta(mensaje) {
    alertaTexto.textContent = mensaje;
    alerta.classList.add("activa");
}

function ocultarAlerta() {
    alerta.classList.remove("activa");
}

const formulario = document.querySelector(".formulario");

formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    ocultarAlerta();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !correo || !mensaje) {
        mostrarAlerta("Completa todos los campos obligatorios");
        return;
    }

    const nombreRegex = /^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/;
    if (!nombreRegex.test(nombre)) {
        mostrarAlerta("El nombre solo puede contener letras");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|net|es|org|edu|gov|info)$/i;
    if (!emailRegex.test(correo)) {
        mostrarAlerta("Correo electrónico inválido");
        return;
    }

    if (mensaje.length < 10) {
        mostrarAlerta("El mensaje debe tener al menos 10 caracteres");
        return;
    }
});
