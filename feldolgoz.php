<?php
require './MySqlDB.php';

$mySql = new MySqlDB();



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
    echo json_encode($todoAdat);
}