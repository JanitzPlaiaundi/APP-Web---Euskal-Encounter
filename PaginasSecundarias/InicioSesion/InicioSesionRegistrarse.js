document.addEventListener("DOMContentLoaded", () => {

    // UTILIDADES
    const getUsers = () => JSON.parse(localStorage.getItem("users")) || [];
    const saveUsers = (users) => localStorage.setItem("users", JSON.stringify(users));
    const setSession = (user) => localStorage.setItem("currentUser", JSON.stringify(user));

    // FORMULARIOS
    const loginForm = document.querySelector("#login form");
    const registerForm = document.querySelector("#register form");

    // REGISTRO
registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = registerForm.querySelector("input[type='text']").value.trim();
    const email = registerForm.querySelector("input[type='email']").value.trim();
    const password = registerForm.querySelectorAll("input[type='password']")[0].value;
    const password2 = registerForm.querySelectorAll("input[type='password']")[1].value;

    if (!nombre || !email || !password || !password2) {
        alert("Completa todos los campos");
        return;
    }

    // VALIDAR EMAIL
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|net|es|org|edu|gov|info)$/i;
    if (!emailRegex.test(email)) {
        alert("Correo inválido. Usa un dominio válido (.com, .net, .es...)");
        return;
    }

    // VALIDAR CONTRASEÑA
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    if (!passwordRegex.test(password)) {
        alert(
            "La contraseña debe tener:\n" +
            "- Al menos 6 caracteres como minimo\n" +
            "- Una mayúscula\n" +
            "- Una minúscula\n" +
            "- Un número\n" +
            "- Un carácter especial"
        );
        return;
    }

    if (password !== password2) {
        alert("Las contraseñas no coinciden");
        return;
    }

    const users = getUsers();

    // VALIDAR NOMBRE ÚNICO
    const nameExists = users.some(
        u => u.nombre.toLowerCase() === nombre.toLowerCase()
    );

    if (nameExists) {
        alert("Ese nombre ya existe, elige otro");
        return;
    }

    // GUARDAR USUARIO
    const newUser = { nombre, email, password };
    users.push(newUser);
    saveUsers(users);
    setSession(newUser);

    alert("Registro exitoso");
    window.location.href = "../../index.html";
});

    // LOGIN
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = loginForm.querySelector("input[type='email']").value.trim();
        const password = loginForm.querySelector("input[type='password']").value;

        const users = getUsers();

        const user = users.find(
            u => u.email === email && u.password === password
        );

        if (!user) {
            alert("Correo o contraseña incorrectos");
            return;
        }

        setSession(user);
        alert("Bienvenido " + user.nombre);
        window.location.href = "../../index.html";
    });

    // ABRIR TAB REGISTER SI VIENE CON HASH
    if (window.location.hash === "#register") {
        const registerTab = new bootstrap.Tab(
            document.querySelector('#register-tab')
        );
        registerTab.show();
    }
});
