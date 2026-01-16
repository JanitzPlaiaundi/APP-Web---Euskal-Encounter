document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));

    if (user) {
        const header = document.getElementById("headerUser");
        const btnLogin = document.getElementById("btnLogin");
        const btnRegister = document.getElementById("btnRegister");

        if (btnLogin) btnLogin.remove();
        if (btnRegister) btnRegister.remove();

        // CONTENEDOR USUARIO
        const userDiv = document.createElement("div");
        userDiv.style.display = "flex";
        userDiv.style.alignItems = "center";
        userDiv.style.gap = "10px";

        userDiv.innerHTML = `
            <span style="font-size:1.4rem;">👤</span>
            <span>${user.nombre}</span>
            <button id="logoutBtn" style="
                background: crimson;
                color: white;
                border: none;
                border-radius: 8px;
                padding: 5px 10px;
                cursor: pointer;
                font-size: 0.8rem;
            ">Salir</button>
        `;

        header.insertBefore(userDiv, header.firstChild);

        // LOGOUT
        document.getElementById("logoutBtn").addEventListener("click", () => {
            localStorage.removeItem("currentUser"); // 🔑 solo cerramos sesión
            window.location.reload();
        });
    }
});
