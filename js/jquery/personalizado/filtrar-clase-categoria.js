$(document).ready(function() {
  
    // Filtrar por categoría
    $('.filter-button').on('click', function() {
      var filterValue = $(this).data('filter');
      if (filterValue === 'all') {
        $('.item').show(300);
      } else {
        $('.item').hide(300).filter('[data-category="' + filterValue + '"]').show(300);
      }
    });

    // Efecto overlay (manteniendo el código anterior)
    $('.item-with-overlay').hover(
      function() {
        $(this).find('.overlay').stop().fadeIn(300);
      },
      function() {
        $(this).find('.overlay').stop().fadeOut(300);
      }
    );
  });