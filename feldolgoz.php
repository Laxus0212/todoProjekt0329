<?php
require './MySqlDB.php';

$mySql = new MySqlDB();

//adatbázisba írás
if ($_POST["todoSzoveg"]) {
    $todoSzoveg = $_POST["todoSzoveg"];
    $todoDatum = $_POST["todoDatum"];
    if ($todoSzoveg !== "" && $todoDatum !== "") {
        $ujrekord = $mySql->ujRekord("todo", "(todo, datum)", "('$todoSzoveg', '$todoDatum')");
    }
}
//beolvasás adatbázisból
$todoAdat = array();
$result = $mySql->lekerdez("todo");


if ($result->num_rows > 0) {
    // output data of each row

    while ($row = $result->fetch_assoc()) {
        //$row = $result->fetch_assoc();
        $todoAdat[] = $row;
    }
    //var_dump($todoAdat);
    echo json_encode($todoAdat);
} else {
    echo "0 eredmény";
}