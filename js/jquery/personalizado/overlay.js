$(document).ready(function() {
    $('.item-with-overlay').hover(
      function() {
        $(this).find('.overlay').stop().fadeIn(300);
      },
      function() {
        $(this).find('.overlay').stop().fadeOut(300);
      }
    );
  });