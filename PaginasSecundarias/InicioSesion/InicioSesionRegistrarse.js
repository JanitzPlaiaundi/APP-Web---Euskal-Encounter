document.addEventListener("DOMContentLoaded", () => {

    const adminUsers = [
        { nombre: "Aaron", email: "ikdbq@plaiaundi.net", password: "Aaron-070506", role: "admin" },
        { nombre: "Abel", email: "ikear@plaiaundi.net", password: "123456789", role: "admin" },
        { nombre: "Janitz", email: "ikdbs@plaiaundi.net", password: "123456789", role: "admin" }
    ];

    const getUsers = () => JSON.parse(localStorage.getItem("users")) || [];
    const saveUsers = (users) => localStorage.setItem("users", JSON.stringify(users));
    const setSession = (user) => localStorage.setItem("currentUser", JSON.stringify(user));

    const loginForm = document.querySelector("#login form");
    const registerForm = document.querySelector("#register form");

    const loginTabBtn = document.querySelector("#login-tab");
    const registerTabBtn = document.querySelector("#register-tab");

    const alerta = document.getElementById("alerta");
    const alertaTexto = document.querySelector(".alertText");

    function mostrarAlerta(mensaje) {
        alertaTexto.textContent = mensaje;
        alerta.classList.add("activa");
    }

    function ocultarAlerta() {
        alerta.classList.remove("activa");
    }

    function showTab(tabBtn) {
        const tab = new bootstrap.Tab(tabBtn);
        tab.show();
    }

    function activateTab() {
        const hash = window.location.hash;
        const lastTab = localStorage.getItem("activeTab");

        if (hash === "#register") {
            showTab(registerTabBtn);
        } else if (hash === "#login") {
            showTab(loginTabBtn);
        } else if (lastTab === "register") {
            showTab(registerTabBtn);
        } else {
            showTab(loginTabBtn);
        }
    }

    if (window.location.hash === "#login" || window.location.hash === "#register") {
        localStorage.removeItem("activeTab");
    }

    activateTab();

    window.addEventListener("hashchange", activateTab);

    loginTabBtn.addEventListener("click", () => {
        localStorage.setItem("activeTab", "login");
        history.replaceState(null, null, "#login");
    });

    registerTabBtn.addEventListener("click", () => {
        localStorage.setItem("activeTab", "register");
        history.replaceState(null, null, "#register");
    });

    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        ocultarAlerta();

        const nombre = registerForm.querySelector("input[type='text']").value.trim();
        const email = registerForm.querySelector("input[type='email']").value.trim();
        const passwords = registerForm.querySelectorAll("input[type='password']");
        const password = passwords[0].value;
        const password2 = passwords[1].value;

        if (!nombre) {
            mostrarAlerta("El nombre es obligatorio");
            return;
        }

        if (!email) {
            mostrarAlerta("El correo electrónico es obligatorio");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.(com|net|es|org|edu|gov|info)$/i;
        if (!emailRegex.test(email)) {
            mostrarAlerta("El formato del correo no es válido");
            return;
        }

        if (!password) {
            mostrarAlerta("La contraseña es obligatoria");
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/; 
        
        if (!passwordRegex.test(password)) { 
            mostrarAlerta( "La contraseña debe tener: 6 caracteres mínimo, Una mayúscula, Una minúscula, Un número, Un carácter especial" ); 
            return; 
        }

        if (password !== password2) {
            mostrarAlerta("Las contraseñas no coinciden");
            return;
        }

        if (adminUsers.some(a => a.email === email)) {
            mostrarAlerta("Este correo está reservado para administradores");
            return;
        }

        const users = getUsers();

        if (users.some(u => u.email === email)) {
            mostrarAlerta("Ya existe una cuenta con ese correo");
            return;
        }

        if (users.some(u => u.nombre.toLowerCase() === nombre.toLowerCase())) {
            mostrarAlerta("Ese nombre ya existe");
            return;
        }

        const newUser = { nombre, email, password, role: "user" };
        users.push(newUser);
        saveUsers(users);
        setSession(newUser);

        window.location.href = "../../index.html";
    });

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        ocultarAlerta();

        const email = loginForm.querySelector("input[type='email']").value.trim();
        const password = loginForm.querySelector("input[type='password']").value;

        if (!email || !password) {
            mostrarAlerta("Completa todos los campos");
            return;
        }

        const admin = adminUsers.find(a => a.email === email && a.password === password);
        if (admin) {
            setSession(admin);
            window.location.href = "../Administrador/Administrador.html";
            return;
        }

        const users = getUsers();
        const user = users.find(u => u.email === email && u.password === password);

        if (!user) {
            mostrarAlerta("Correo o contraseña incorrectos");
            return;
        }

        setSession(user);
        window.location.href = "../../index.html";
    });

});
