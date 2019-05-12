$(document).ready(function(){
  var panier = localStorage.getItem("produits") ==null?[] :localStorage.getItem("produits").split("::");
  classer();
  constructeurPanier();
  poubelle();

function classer(){
  panier.sort(trieur);
  localStorage.setItem("produits", panier.join("::"));

  function trieur(a,b){
    var produitA = a.split(";");
    var produitB = b.split(";");

    if(Number(produitA[1]) > Number(produitB[1])){
      return 1;
    }else if(Number(produitA[1]) < Number(produitB[1])){
      return -1;
    }else
      return 0;
  }
}

  function constructeurPanier(){
    for (var i = 0; i < panier.length; i++) {
      var template = document.querySelector("template");
      var clone = document.importNode(template.content,true);
      var item = panier[i].split(";");
      var tr =$("tr",clone);
      var th =$("th",clone);
      th.text(item[0]);
      $("button", clone).attr("name", panier[i]);

      for (var j = 1; j < item.length; j++) {
        var td =$("td",clone).eq(j-1);
        td.text(item[j]);
      }
      $("tbody").append(tr);
    }
  }

  function poubelle(){
    var buttons = $("table button");
    buttons.each(function(index,value){
      $(value).click(function(){
        var enlevable = $(value).parent().parent();
        // $(tbody).remove(enlevable);
        enlevable.empty();

        var panierTemp = panier.filter(filtreur);
        panier = panierTemp;

        var stringPanier = panier.join("::");
        localStorage.setItem("produits", stringPanier);

        function filtreur(currentValue){
          return currentValue !== value.name;
        }

      });
    });
  }

});
