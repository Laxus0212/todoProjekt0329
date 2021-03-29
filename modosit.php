<?php
require './MySqlDB.php';


if (isset($_GET["index"])) {
    $mySql = new MySqlDB();
    $id = $_GET['index'];

    $adat = $mySql->lekerdez("todo", "ID=$id");
    if ($adat->num_rows > 0) {
        $sor = $adat->fetch_assoc();
        if ($sor["allapot"] == 0) {
            $mySql->frissit("todo", "allapot=1", "ID=$id");

        } else {
            $mySql->frissit("todo", "allapot=0", "ID=$id");

        }
    }


}
