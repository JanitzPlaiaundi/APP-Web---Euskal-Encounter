let eventos = [
    {id:1, nombre: "Casa", img: "Imagenes/casa.jpg", fecha: "2025-10-1" },
    {id:2, nombre: "Atun", img: "Imagenes/atun.jpg", fecha: "2025-10-3" },
    {id:3, nombre: "Cine", img: "Imagenes/Cine.jpg", fecha: "2025-10-2" },
    {id:4, nombre: "Clase", img: "Imagenes/clase.jpg", fecha: "2025-10-4" },
    {id:5, nombre: "Clase2", img: "Imagenes/clase2.jpg", fecha: "2025-9-2" },
    {id:6, nombre: "Concierto", img: "Imagenes/concierto.jpg", fecha: "2025-9-20" },
    {id:7, nombre: "Disco", img: "Imagenes/Disco.jpg", fecha: "2025-10-21" },
    {id:8, nombre: "Disco2", img: "Imagenes/Disco2.jpg", fecha: "2025-10-12" },
    {id:9, nombre: "DJ", img: "Imagenes/dj.jpg", fecha: "2025-10-5" },
    {id:10, nombre: "Korrika", img: "Imagenes/korrika.jpg", fecha: "2025-9-15" },
    {id:11, nombre: "Manifestación", img: "Imagenes/mani.jpg", fecha: "2025-9-19" },
    {id:12, nombre: "Orquesta", img: "Imagenes/orquesta.jpg", fecha: "2025-10-23" },
    {id:13, nombre: "evento13", img: "Imagenes/rosa.jpg", fecha: "2025-10-21" },
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