$(document).ready(function() {
    
    $('.card-flip').hover(
      function() {
        var contador = 1;
    
        var $card = $(this).find('.card-inner');
        $card.addClass('flipped');
  
        $card.find('.progress-bar').each(function() {
          var $progressBar = $(this);
          var width = $progressBar.attr('aria-valuenow') + '%';
          $progressBar.animate({
              while (contador < 6) {
                  width: contador
                  contador++
              }
              
          }, 4000); // Duración de la animación en milisegundos
        });
      },
     
    );
  });