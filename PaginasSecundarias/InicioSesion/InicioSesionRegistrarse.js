document.addEventListener("DOMContentLoaded", () => {
    const DIRECTUS_URL = "http://localhost:8055"; 
    const USUARIOS_ENDPOINT = `${DIRECTUS_URL}/items/USUARIO`;

    const adminUsers = [
        { nombre: "Aaron", email: "ikdbq@plaiaundi.net", password: "Aaron-070506", role: "admin" },
        { nombre: "Abel", email: "ikear@plaiaundi.net", password: "123456789", role: "admin" },
        { nombre: "Janitz", email: "ikdbs@plaiaundi.net", password: "123456789", role: "admin" }
    ];

    const loginForm = document.querySelector("#f-login");
    const registerForm = document.querySelector("#f-register");
    const alerta = document.getElementById("alerta");
    const alertaTexto = document.querySelector(".alertText");

    function mostrarAlerta(mensaje) {
        if (alertaTexto && alerta) {
            alertaTexto.textContent = mensaje;
            alerta.classList.add("activa");
        } else {
            alert(mensaje); // Fallback por si el DOM no está listo
        }
    }

    function ocultarAlerta() {
        if (alerta) alerta.classList.remove("activa");
    }

    // --- REGISTRO CORREGIDO ---
    registerForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        ocultarAlerta();

        const nombre = document.getElementById("reg-nom-completo").value.trim();
        const apellido = document.getElementById("reg-apellido").value.trim();
        const dni = document.getElementById("reg-dni").value.trim();
        const email = document.getElementById("reg-email").value.trim();
        const pass1 = document.getElementById("reg-pass1").value;
        const pass2 = document.getElementById("reg-pass2").value;

        if (pass1 !== pass2) {
            mostrarAlerta("Las contraseñas no coinciden");
            return;
        }

        // Construimos el objeto SIN FECHA_DE_CREACION para evitar el Error 400
        const datosUsuario = {
            "NOMBRE": nombre,
            "APELLIDO": apellido,
            "DNI": dni,
            "EMAIL": email,
            "CONTRASEÑA": pass1,
            "FECHA_DE_CREACION": new Date().toISOString().split('T')[0] 
        };

        try {
            const response = await fetch(USUARIOS_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(datosUsuario)
            });

            if (response.ok) {
                localStorage.setItem("currentUser", JSON.stringify({ 
                    nombre: nombre, 
                    apellido: apellido, 
                    role: "user" 
                }));
                window.location.href = "../../index.html";
            } else {
                const result = await response.json();
                console.error("Error de Directus:", result);
                mostrarAlerta("Error: Revisa si el Email o DNI ya existen.");
            }
        } catch (error) {
            mostrarAlerta("No se pudo conectar con el servidor.");
        }
    });

    // --- LOGIN CORREGIDO ---
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        ocultarAlerta();

        const email = document.getElementById("log-email").value.trim();
        const pass = document.getElementById("log-pass").value;

        // 1. Check Admins
        const admin = adminUsers.find(a => a.email === email && a.password === pass);
        if (admin) {
            localStorage.setItem("currentUser", JSON.stringify({ nombre: admin.nombre, role: "admin" }));
            window.location.href = "../Administrador/Administrador.html";
            return;
        }

        // 2. Check DB
        try {
            // Usamos encodeURIComponent para que caracteres raros no rompan la URL
            const query = `${USUARIOS_ENDPOINT}?filter[EMAIL][_eq]=${encodeURIComponent(email)}&filter[CONTRASEÑA][_eq]=${encodeURIComponent(pass)}`;
            const response = await fetch(query);
            const result = await response.json();

            if (result.data && result.data.length > 0) {
                const user = result.data[0];
                localStorage.setItem("currentUser", JSON.stringify({ 
                    nombre: user.NOMBRE, 
                    apellido: user.APELLIDO, 
                    role: "user" 
                }));
                window.location.href = "../../index.html";
            } else {
                mostrarAlerta("Email o contraseña incorrectos");
            }
        } catch (error) {
            mostrarAlerta("Error al conectar con el servidor");
        }
    });
});