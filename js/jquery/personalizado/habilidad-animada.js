$(document).ready(function() {
    
    $('.card-flip').hover(
      function() {
        var contador = 1;

        var $card = $(this).find('.card-inner');
        $card.addClass('flipped');
  
        $card.find('.progress-bar').each(function() {
          var $progressBar = $(this);
          var width_real = $progressBar.attr('aria-valuenow') + '%';
          console.log(width_real);
          $progressBar.animate({
              width: width_real

              
        }, 4000); // Duración de la animación en milisegundos


       
        });
      },
     
    );
  });