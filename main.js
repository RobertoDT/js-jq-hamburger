//seleziono l'oggetto da modificare
var hamburger = $(".header-right > a");
var croce = $(".hamburger-menu > .close");

//aggiungo l'evento del click
hamburger.click(
  function(){
    $(".hamburger-menu").fadeIn(400).addClass("active");
  }
);

croce.click(
  function(){
    $(".hamburger-menu").fadeOut(400).removeClass("active");
  }
);
