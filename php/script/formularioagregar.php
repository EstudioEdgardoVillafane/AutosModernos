<?php
require_once '../class/seca.php';
require_once '../class/connect.php';

$NewConnect = new Seca(); //generar conexion con base de datos

$postdata = file_get_contents("php://input"); //recibir por post lo enviado por el servicio
$request = json_decode($postdata); //transformar a json

$sql = 
        "INSERT INTO   autoo(au_nombre,
                            au_marca,
                            au_modelo,
                            au_status) 
                 VALUES ('".$request->nombre."',
                        '".$request->marca."',
                        '".$request->modelo."',
                        1)";
$NewConnect->ExecuteSql($sql); //enviar por sql lo recibido a la bd "marca"

?>
