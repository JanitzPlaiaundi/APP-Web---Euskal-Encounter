document.addEventListener("DOMContentLoaded", () => {
    const session = localStorage.getItem("currentUser");
    if (!session) return; 

    const user = JSON.parse(session);
    const contenedor = document.getElementById("headerUser");
    if (!contenedor) return;

    const btnMovil = document.getElementById("botonMenuMovil");
    contenedor.innerHTML = "";

    const userDiv = document.createElement("div");
    userDiv.style.cssText = "display: flex; align-items: center; gap: 15px; color: white; margin-right: 15px;";
    userDiv.innerHTML = `
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 1.5rem;">👤</span>
            <span style="font-weight: bold; color: black; white-space: nowrap;">${user.nombre} ${user.apellido || ''}</span>
        </div>
        <button id="btnSignOut" style="background:#dc3545; color:white; border:none; padding:6px 12px; border-radius:5px; cursor:pointer; font-weight:bold;">Sign Out</button>
    `;

    contenedor.appendChild(userDiv);
    if (btnMovil) contenedor.appendChild(btnMovil);

    document.getElementById("btnSignOut").onclick = function() {
        localStorage.removeItem("currentUser");
        
        // ESTO ES LO IMPORTANTE:
        // En lugar de reload(), forzamos ir al index real usando una ruta que funcione siempre
        const path = window.location.pathname;
        if (path.includes("PaginasSecundarias")) {
            window.location.href = "../../index.html";
        } else {
            window.location.href = "index.html";
        }
    };
});