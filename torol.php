<?php
require './MySqlDB.php';


if (isset($_GET["ID"])) {
    $mySql = new MySqlDB();
    $id=$_GET['ID'];
    $mySql->torol("todo","ID=".$id);
}