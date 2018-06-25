<?php
require_once '../class/seca.php';
require_once '../class/connect.php';

$NewConnect = new Seca(); //generar conexion con base de datos

$postdata = file_get_contents("php://input"); //recibir por post lo enviado por el servicio
$request = json_decode($postdata); //transformar a json

$sql="UPDATE autoo SET
		au_nombre = '".$request->nombre."', 
		au_marca = '".$request->marca."',
		au_modelo = '".$request->modelo."'
		WHERE au_id = '".$request->id."'" 
		;
$NewConnect->ExecuteSql($sql); //enviar por sql lo recibido a la bd "marca"

?>


