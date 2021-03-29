$(function () {
    beolvas();
    if ($("#todoSzoveg").text !== "" && $("#todoDatum").text !== "") {
        $(".btn").on("click", kuld);
    }
    var article = $("article");
    article.delegate(".kuka", "click", torles);
    article.delegate(".pipa", "click", modosit);

});

//GLOBAL /--
var todoAdat = [];

//       --/

//adatfelvitel adatbázisba
function kuld() {
    var todo = {
        todoSzoveg: $("#todoSzoveg").val(),
        todoDatum: $("#todoDatum").val()
    };
    $.ajax({
        type: "POST",
        url: "adatfeltolt.php",
        data: todo,
        success: function (ujTodo) {
            console.log("Sikeres adatfeltöltés!");
            beolvas();

        },
        error: function () {
            alert("Hiba az adatok feltöltésekor!");
        }
    });
}

function beolvas() {
    $.ajax({
        type: "POST",
        url: "feldolgoz.php",
        success: function (ujTodo) {
            //console.log(ujTodo);
            try {
                todoAdat = JSON.parse(ujTodo);
                //beolvas();
                kiir();
            } catch (e) {
                $("article").empty();
            }
            //console.log("Sikeres adatfeltöltés!");
        },
        error: function () {
            alert("Hiba az adatok lekérésekor!");
        }
    });
}


//adatbázisból érkező adat kiírása 'li' tagek közé
function kiir() {
    var article = $('article');
    article.empty();
    var txt = "<table class=\"table table-borderless\"><tbody>";
    if (Boolean(todoAdat)) {
        todoAdat.forEach(function (element) {
            if (element.allapot == 0) {
                txt += "<tr><td>" + element.todo + "</td><td>" + element.datum + "</td><td><img src=\"../../todoProjekt0329/kuka.png\" id='" + element.ID + "' alt=\"\" class='kuka'/><img src=\"../../todoProjekt0329/pipa.png\" id='" + element.ID + "' alt=\"\" class='pipa'/></td><tr>";
            } else {
                txt += "<tr><td><s>" + element.todo + "</s></td><td><s>" + element.datum + "</s></td><td><img src=\"../../todoProjekt0329/kuka.png\" id='" + element.ID + "' alt=\"\" class='kuka'/><img src=\"../../todoProjekt0329/pipa.png\" id='" + element.ID + "' alt=\"\" class='pipa'/></td><tr>";
            }
            //console.log(todoAdat);
        });
    }

    txt += "</tbody></table>";
    article.append(txt);
}

function torles() {
    var id = $(this).attr("id");

    $.ajax({
        type: "GET",
        url: "torol.php?ID=" + id,
        success: function () {
            console.log("Törlés");
            beolvas();
        },
        error: function () {
            alert("Hiba az adatok törlésekor!");
        }
    });
}

function modosit() {


    var index = $(this).attr("id");

    $.ajax({
        type: "GET",
        url: "modosit.php?index=" + index,
        success: function () {
            console.log("Módosít");
            beolvas();
        },
        error: function () {
            alert("Hiba az adatok módosításakor!");
        }
    });


}