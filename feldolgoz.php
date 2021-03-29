<?php
require './MySqlDB.php';

$mySql = new MySqlDB();

//adatbázisba írás
$todoSzoveg = $_POST["todoSzoveg"];
$todoDatum = $_POST["todoDatum"];

$mySql->ujRekord("todo", "(todo, datum)", "'$todoSzoveg', '$todoDatum'");


//beolvasás adatbázisból
$todoAdat = array();
$result = $mySql->lekerdez("todo");

if ($result->num_rows > 0) {
    // output data of each row
    while ($row = $result->fetch_assoc()) {

        $todoAdat[] = $row;
    }
    echo json_encode($todoAdat);
} else {
    echo "0 eredmény";
}