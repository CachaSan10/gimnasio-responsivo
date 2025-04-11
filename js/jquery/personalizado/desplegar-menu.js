$(document).ready(function() {
    $('.dropdown').hover(
      function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
      },
      function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
      }
    );
  
    // Opcional: Para cerrar otros submenús al abrir uno nuevo (mejora la experiencia)
    $('.dropdown-submenu').on('mouseenter', function() {
      $(this).siblings('.dropdown-submenu').find('.dropdown-menu').slideUp();
      $(this).find('.dropdown-menu').slideDown();
    });
  
    // Asegúrate de que los dropdown-submenu dentro de un dropdown principal también se desplieguen al hover
    $('.dropdown-menu a.dropdown-toggle').on('mouseenter', function(e) {
      if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
      }
      var $subMenu = $(this).next(".dropdown-menu");
      $subMenu.toggleClass('show');
  
      $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
        $('.dropdown-submenu .show').removeClass("show");
      });
  
      return false;
    });
  });