let eventos = [
    {id:1, nombre: "CSGO", img: "Imagenes/cs2.png", fecha: "2025-10-1" },
    {id:2, nombre: "Modding", img: "Imagenes/modding.png", fecha: "2025-10-3" },
    {id:3, nombre: "Trackmania", img: "Imagenes/trackmania.png", fecha: "2025-10-2" },
    {id:4, nombre: "Setups", img: "Imagenes/setup.png", fecha: "2025-10-4" },
    {id:5, nombre: "Mario Kart", img: "Imagenes/marioKart.png", fecha: "2025-9-2" },
    {id:6, nombre: "Mini PCs", img: "Imagenes/miniPC.png", fecha: "2025-9-20" },
    {id:7, nombre: "Typing speed", img: "Imagenes/typingSpeed.png", fecha: "2025-10-21" },
    {id:8, nombre: "Balatro", img: "Imagenes/balatro.png", fecha: "2025-10-12" },
    {id:9, nombre: "Just Dance", img: "Imagenes/justDance.png", fecha: "2025-10-5" },
    {id:10, nombre: "Tetris", img: "Imagenes/tetris.png", fecha: "2025-9-15" },
    {id:11, nombre: "Gymkana", img: "Imagenes/gymkana.png", fecha: "2025-9-19" },
    {id:12, nombre: "Hack It", img: "Imagenes/hackIt.png", fecha: "2025-10-23" },
    {id:13, nombre: "AI Contest", img: "Imagenes/AIContest.png", fecha: "2025-10-21" },
]



let contenedorpadre = document.getElementById("zonaTarjetas")
let filtro = document.getElementById("filtro")

let arrayFiltrado = eventos
filtro.addEventListener("change", () => {
  if(filtro.value == "1"){
        arrayFiltrado = eventos.sort((a,b) => a.nombre.localeCompare(b.nombre))
        console.log(arrayFiltrado)
    }else if(filtro.value == "2"){
        arrayFiltrado = eventos.sort((a,b) => b.nombre.localeCompare(a.nombre))
    }else if(filtro.value == "3"){
        arrayFiltrado = eventos.sort((a,b) => new Date(a.fecha) - new Date(b.fecha))
    }else if(filtro.value == "4"){
        arrayFiltrado = eventos.sort((a,b) => new Date(b.fecha) - new Date(a.fecha))
    }
    paginaEventos(arrayFiltrado)
});

function paginaEventos(arrayEventos){

    contenedorpadre.innerHTML = ""

    let main = document.createElement("main")
    contenedorpadre.appendChild(main)
    main.className = "mainTarjetas"

    arrayEventos.map((str) => {
        let tarjetas = document.createElement("article")
        tarjetas.className = "tarjeta"
        main.appendChild(tarjetas)


        let divImagen = document.createElement("div")
        divImagen.className = "divImagen"
        tarjetas.appendChild(divImagen)
        divImagen.style.backgroundImage = `url(${str.img})`

        let nombreEvento = document.createElement("h2")
        nombreEvento.className = "nombreEvento"
        divImagen.appendChild(nombreEvento)
        nombreEvento.innerText = str.nombre

        let fechaEvento = document.createElement("h2")
        fechaEvento.className = "fechaEvento"
        divImagen.appendChild(fechaEvento)
        fechaEvento.innerText = str.fecha

        let div = document.createElement("div")
        div.className = "divTarjetas"
        tarjetas.appendChild(div)

        let texto = document.createElement("a")
        texto.className = "textoTarjetas"
        texto.innerText = "Ver mas"
        texto.href = "#"
        div.appendChild(texto)

        let boton = document.createElement("button")
        boton.className = "btnTarjetas"
        boton.innerText = "Inscribete"
        div.appendChild(boton)
    })

}

paginaEventos(arrayFiltrado)