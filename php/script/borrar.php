<?php

    include '../class/seca.php';
	include '../class/connect.php';

	$NewConnect = new Seca();   
    $sqld = "UPDATE autoo SET au_status = 0 WHERE au_id = '".$_GET["id"]."'";
    $NewConnect->Borrar($sqld);
    // $sql = "SELECT * FROM producto WHERE p_status = 1 ORDER BY p_orden ASC";
    // $varAux = $NewConnect->CreateJson($sql);
    // $NewConnect->SaveJson($varAux);
?>