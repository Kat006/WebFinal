$(document).ready(function() {
  console.log("test");
  var panier = localStorage.getItem("produits") == null ? [] : localStorage.getItem("produits").split("::");
  var prixAvant = 0;
  constructeurPrix();
  dateIci();

  function dateIci(){
    var laDate = new Date();
    var lesMois = ["Janvier",  "Février","Mars", "Avril",  "Mai", "Juin",   "Juillet", "Août","Septembre","Octobre",   "Novembre",  "Décembre"];
    var lesJours = [ "Dimanche", "Lundi","Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi" ];
    var jourSemaine = lesJours[laDate.getDay()];
    var jour = laDate.getDate();
    var mois= lesMois[laDate.getMonth()];
    var annee = laDate.getFullYear();
    var heure = laDate.getHours().toString().padStart(2,"0");
    var minutes = laDate.getMinutes().toString().padStart(2,"0");
    $("p").text(jourSemaine +" "+jour+" "+mois +" "+annee+" "+heure+":"+minutes);
  }

  function constructeurPrix() {
    for (var i = 0; i < panier.length; i++) {
      var template = document.querySelector("tbody template");
      var clone = document.importNode(template.content, true);
      var item = panier[i].split(";");
      prixAvant = prixAvant + Number(item[2] * item[3]);
      var tr = $("tr", clone);
      var th = $("th", clone);
      th.text(item[0]);
      $("button", clone).attr("name", panier[i]);

      for (var j = 1; j < item.length; j++) {
        var td = $("td", clone).eq(j - 1);
        td.text(item[j]);
      }

      function supplimentsMoney() {
        var total =Number( localStorage.getItem("total"));


        var templateMoney = document.querySelector("tfoot template");
        var cloneMoney = document.importNode(templateMoney.content, true);

          var td = $("td", cloneMoney);
          td.text(total.toFixed(2));


        $("tfoot").append(cloneMoney);
      }
      $("tbody").append(tr);

    }
    supplimentsMoney();
  }
});
