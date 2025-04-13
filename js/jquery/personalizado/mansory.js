$(document).ready(function() {
    $('.masonry-grid').masonry({
        itemSelector: '.col', // Selecciona los elementos hijo directos (Bootstrap columns)
        columnWidth: '.col',  // Usa el ancho de la columna de Bootstrap como ancho de la columna de Masonry
        percentPosition: true,
        gutter: 20 // Igual al grid-gap en CSS
    });

    // Mostrar la galería después de que Masonry la haya posicionado
    $('.masonry-grid').css('opacity', 1);
});