$(document).ready(function(){
  var panier = localStorage.getItem("produits") ==null?[] :localStorage.getItem("produits").split("::");
  constructeurPanier();
  poubelle();

  function constructeurPanier(){
    for (var i = 0; i < panier.length; i++) {
      var template = document.querySelector("template");
      var clone = document.importNode(template.content,true);
      var item = panier[i].split(";");
      var tr =$("tr",clone);
      var th =$("th",clone);
      th.text(item[0]);

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
        console.log("POUBELLE");
      buttons[index].click(function(){
        console.log("CLICK");
        var enlevable = value.parent().parent();
        $(tbody).remove(enlevable);
      });
    });
  }

});
