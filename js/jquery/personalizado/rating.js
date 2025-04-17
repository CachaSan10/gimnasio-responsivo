$(document).ready(function() {
    // Rating functionality
    $('.rating input').on('mouseover', function() {
        $(this).siblings('label').css('color', 'gold');
        $(this).prevAll('label').css('color', 'gold');
    });

    $('.rating').on('mouseleave', function() {
        $(this).find('label').css('color', '#ccc');
        $(this).find('input:checked ~ label').css('color', 'gold');
    });

    $('.rating input').on('click', function() {
        var ratingValue = $(this).val();
        $(this).closest('.rating-container').find('.rating-value').text('(' + ratingValue + ')');
    });

    $('.rating input:checked').each(function() {
        var ratingValue = $(this).val();
        $(this).closest('.rating-container').find('.rating-value').text('(' + ratingValue + ')');
        $(this).siblings('label').css('color', '#ccc');
        $(this).prevAll('label').css('color', 'gold');
        $(this).css('color', 'gold');
    });
});