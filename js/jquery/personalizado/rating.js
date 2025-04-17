$(document).ready(function() {
    $('.card-flip').each(function() {
      var card = $(this);
      var ratingContainer = card.find('.rating-container');
      var ratingStars = ratingContainer.find('.rating label.star');
      var ratingValueDisplay = ratingContainer.find('.rating-value');
      var ratingInputs = ratingContainer.find('input[type="radio"]');
  
      // Función para actualizar la visualización del valor del rating
      function updateRatingValue(value) {
        ratingValueDisplay.text('(' + value + ')');
      }
  
      // Evento hover para resaltar las estrellas
      ratingStars.on('mouseover', function() {
        var hoveredValue = $(this).prevAll('input[type="radio"]').length + 1;
        ratingStars.removeClass('active');
        $(this).addClass('active').prevAll('.star').addClass('active');
        updateRatingValue(hoveredValue);
      });
  
      // Evento mouseout para resetear el resaltado si no hay selección
      ratingContainer.on('mouseout', function() {
        if (!ratingInputs.is(':checked')) {
          ratingStars.removeClass('active');
          ratingValueDisplay.text('');
        } else {
          // Si hay una estrella seleccionada, mantener su resaltado
          var selectedValue = ratingInputs.filter(':checked').val();
          ratingStars.removeClass('active');
          ratingStars.slice(0, selectedValue).addClass('active');
          updateRatingValue(selectedValue);
        }
      });
  
      // Evento click para seleccionar la estrella y mostrar el valor
      ratingInputs.on('click', function() {
        var clickedValue = $(this).val();
        ratingStars.removeClass('active');
        $(this).nextAll('.star').removeClass('active');
        $(this).prevAll('.star').addClass('active');
        $(this).next('.star').addClass('active');
        updateRatingValue(clickedValue);
      });
  
      // Mostrar el valor inicial si alguna estrella está pre-seleccionada
      ratingInputs.filter(':checked').each(function() {
        var initialValue = $(this).val();
        ratingStars.slice(0, initialValue).addClass('active');
        updateRatingValue(initialValue);
      });
    });
  });