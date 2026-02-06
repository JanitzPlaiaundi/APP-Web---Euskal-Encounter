<?php

    //Generamos la conexion
    $conexion = new mysqli("db", "root", "1DAW3_BBDD", "EUSKALENCOUNTER");

    if ($conexion->connect_error) {
        die("Error de conexión a la base de datos");
    }

    // 2. CONSULTA: Seleccionamos tus eventos
    $resultado = $conexion->query("SELECT * FROM EVENTO");
    
    // 3. CREAR XML: Estructura base <eventos>
    $xml = new SimpleXMLElement('<eventos/>');

    while ($fila = $resultado->fetch_assoc()) {
        $evento = $xml->addChild('evento');
        
        // Usamos los nombres de columna en mayúsculas como en tu imagen
        $evento->addAttribute('IDEve', $fila['ID']);
        $evento->addChild('Título', $fila['TITULO']);
        $evento->addChild('Ubicación', $fila['UBICACION']);
        $evento->addChild('Descripción', $fila['DESCRIPCION']);
        $evento->addChild('FechaIni', $fila['FECHA_INICIO']);
        $evento->addChild('FechaFin', $fila['FECHA_FIN']);
        $evento->addChild('HoraIni', $fila['HORARIO_INICIO']);
        $evento->addChild('HoraFin', $fila['HORARIO_FIN']);
        $evento->addChild('Imagen', $fila['IMAGEN']);
    }

    // Cargamos el XML que acabamos de crear en un objeto DOM
    $dom = new DOMDocument();
    $dom->loadXML($xml->asXML());

    // Cargamos tu archivo XSLT (asegúrate de que el nombre coincida)
    $xslDoc = new DOMDocument();
    $xslDoc->load("Eventos.xslt");

    // Mezclamos ambos
    $proc = new XSLTProcessor();
    $proc->importStylesheet($xslDoc);

    // Esto imprime el HTML final con tus imágenes y estilos
    echo $proc->transformToXML($dom);
