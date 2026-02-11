<?php
$host = "db";
$user = "root";
$pass = "1DAW3_BBDD";
$db   = "EUSKALENCOUNTER";

$conexion = new mysqli($host, $user, $pass, $db);

if ($conexion->connect_error) {
    die("Error: " . $conexion->connect_error);
}
$conexion->set_charset("utf8");
