//seleziono l'oggetto da modificare
var hamburger = $(".fa-bars");
var croce = $(".fa-times");

//aggiungo l'evento del click
hamburger.click(
  function(){
    $(".hamburger-menu").addClass("active");
  }
);

croce.click(
  function(){
    $(".hamburger-menu").removeClass("active");
  }
);
