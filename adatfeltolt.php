<?php
require './MySqlDB.php';

$mySql = new MySqlDB();

//adatbázisba írás

$todoSzoveg = $_POST["todoSzoveg"];
$todoDatum = $_POST["todoDatum"];
if ($todoSzoveg !== "" && $todoDatum !== "") {
    $ujrekord = $mySql->ujRekord("todo", "(todo, datum)", "('$todoSzoveg', '$todoDatum')");

}