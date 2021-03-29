$(function () {
    $(".btn").on("click", kuld);
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
        url: "feldolgoz.php",
        data: todo,
        success: function (ujTodo) {
            console.log(ujTodo);
            //todoAdat = JSON.parse(ujTodo);
            console.log(todoAdat);
            kiir();
        },
        error: function () {
            alert("Hiba az adatok feltöltésekor!");
        }
    });
    $.ajax({
        type: "GET",
        url: "feldolgoz.php",
        success: function (result){
            todoAdat = JSON.parse(result);
            console.log(todoAdat);
            kiir();
        }


    });
}

//adatbázisból érkező adat kiírása 'li' tagek közé
function kiir() {
    var article = $('article');
    article.empty();
    for (var i = 0; i < todoAdat.length; i++) {
        var todoSzoveg = todoAdat[i].todoSzoveg;
        var todoDatum = todoAdat[i].todoDatum;
        var txt = "<li>" + todoSzoveg + "</li><li>" + todoDatum + "</li><br>";
        article.append(txt);
    }
}