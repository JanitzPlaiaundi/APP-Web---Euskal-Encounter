let containerEnlaces = document.getElementById("botonMenuMovil")
let headerContainer = document.querySelector("header")
let imagenMenu = document.getElementById("fotoMenuMoviles")

let defaultMenuMovil = false
let menuMovil = document.getElementById("menuMovil")
headerContainer.appendChild(menuMovil)
menuMovil.style.transform = "translateY(-100vh)"


function menuParaMoviles() {
    containerEnlaces.addEventListener("click", () => {
        if (window.innerWidth < 1024) {
            if (defaultMenuMovil == false) {
                menuMovil.style.transform = "translateY(0vh)"
                defaultMenuMovil = true
                imagenMenu.src = "Recursos/Imagenes/BOTON_X.png"
                document.documentElement.style.overflow = "hidden"
            } else {
                menuMovil.style.transform = "translateY(-100vh)"
                defaultMenuMovil = false
                imagenMenu.src = "Recursos/Imagenes/BOTON_info.png"
                document.documentElement.style.overflow = ""
            }
        } else {
            defaultMenuMovil = false
        }

    })


}
menuParaMoviles()

addEventListener("resize", () => {
    defaultMenuMovil = false
    menuMovil.style.transition = "0s"
    menuMovil.style.width = `${innerWidth}`
    menuMovil.style.transform = "translateY(-100vh)"
    imagenMenu.src = "Recursos/Imagenes/BOTON_info.png"
})