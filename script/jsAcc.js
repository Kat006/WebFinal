$(document).ready(function() {
  var cartes = $(".card");
  var produits = [];
  var panier = localStorage.getItem("produits") == null ? [] : localStorage.getItem("produits").split("::");

  function Produits(carte, num) {
    this.nom = $("h4", carte).text();
    this.prix = $("h6", carte).text();
    this.num = num.toString().padStart(4,"0");
    this.quantite = function() {
      return $("input", carte).val();
    };
    this.toString = function() {
      return this.nom + ";" + this.num+ ";" + this.quantite()+ ";" + this.prix;
    };

  }


  for (var i = 0; i < cartes.length; i++) {
    produits[i] = new Produits(cartes[i], i);
  }

  cartes.each(function(index, value) {
    var boutton = $("button", cartes.eq(index));
    $("input", cartes.eq(index)).click(function() {
      if ($("input", cartes.eq(index)).val() != 0) {
        boutton.prop("disabled", false);
      } else {
        boutton.prop("disabled", true);
      }
    });
  });
  dansPanier();

  function dansPanier() {
    cartes.each(function(index, value) {
      var boutton = $("button", cartes[index]);
      boutton.click(function() {
        if (panier.find(siProduitDeDans)) {
          panier[$.inArray(panier.find(siProduitDeDans), panier)] = produits[index].toString();
        } else {
          panier[panier.length] = produits[index].toString();
        }



        var panierStr = panier.join("::");
        localStorage.setItem("produits", panierStr);

        function siProduitDeDans(currentValue) {
          return currentValue.substr(0, currentValue.indexOf(";")).toLowerCase() == boutton.val().toLowerCase();
        }
      });
    });



  }


});
