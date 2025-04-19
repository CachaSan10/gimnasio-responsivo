$(document).ready(function() {
    $(".filter-button").click(function() {
      var filterValue = $(this).attr('data-filter');
  
      if (filterValue === 'all') {
        $(".article").show();
      } else {
        $(".article").hide().filter(function() {
          return $(this).data('tags').includes(filterValue);
        }).show();
      }
    });
  });