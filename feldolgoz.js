$(function () {
    kuld();
    if ($("#todoSzoveg").text !== "" && $("#todoDatum").text !== "") {
        $(".btn").on("click", kuld);
    }

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
            //console.log(ujTodo);
            todoAdat = JSON.parse(ujTodo);
            //console.log(todoAdat);
            kiir();
        },
        error: function () {
            alert("Hiba az adatok feltöltésekor!");
        }
    });
}

//adatbázisból érkező adat kiírása 'li' tagek közé
function kiir() {
    var article = $('article');
    article.empty();
    var txt = "<table class=\"table table-borderless\"><tbody>";
    //for (var i = 0; i < todoAdat.length; i++) {
    todoAdat.forEach(function (element) {
        txt += "<tr><td>" + element.todo + "</td><td>" + element.datum + "</td><tr>";
    });
    /* foreach(){
     var todoSzoveg = todoAdat[i].todo;
     var todoDatum = todoAdat[i].datum;
 }*/
    txt += "</tbody></table>";
    article.append(txt);
    /*<table class="table table-borderless">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
    </tbody>
  </table>*/


}