<?php  
require_once '../class/seca.php';
require_once '../class/connect.php';

$NewConnect = new Seca(); // define conexion

$sql = "SELECT * FROM autoo WHERE au_status=1";  
echo  $NewConnect->CreateJson($sql);//leer de la base de datos todos los campos con status "1"

?>