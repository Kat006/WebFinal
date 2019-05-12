$(document).ready(function() {
  var panier = localStorage.getItem("produits") == null ? [] : localStorage.getItem("produits").split("::");
  var prixAvant = 0;
  constructeurPrix();

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
        var tps = prixAvant * 0.05;
        var tvq = (prixAvant + tps) * 0.0975;
        var ship = 500;
        if (prixAvant >= 2800)
          ship = 0;
        var total = prixAvant + tps + tvq + ship;
        localStorage.setItem("total",total);
        var tabPrix = [prixAvant, tps, tvq, ship, total];

        var templateMoney = document.querySelector("tfoot template");
        var cloneMoney = document.importNode(templateMoney.content, true);
        for (var i = 0; i < tabPrix.length; i++) {
          var td = $("td", cloneMoney).eq(i);
          td.text(tabPrix[i].toFixed(2));
        }

        $("tfoot").append(cloneMoney);
      }
      $("tbody").append(tr);

    }
    supplimentsMoney();
  }
});
