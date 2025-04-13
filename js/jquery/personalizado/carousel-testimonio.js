$(document).ready(function() {
    var carousel = $('#carouselExampleIndicators');
    var intervalo;
    var velocidad = 3500; //Velocidad de cambio de imagen en milisegundos

    //Funcion para iniciar el carrusel
    function iniciarCarrusel() {
        intervalo = setInterval(function() {
            carousel.carousel('next');
        }, velocidad);
    }

    // Iniciar el carrusel al cargar la página
    iniciarCarrusel();


    // Pausar el carrusel al pasar el mouse
    carousel.on('mouseenter', function() {
        clearInterval(intervalo);
    });
    // Reanudar el carrusel al quitar el mouse
    carousel.on('mouseleave', function() {
        iniciarCarrusel();
    });
    // Cambiar el intervalo al hacer clic en los botones    
    $('#carouselExampleIndicators .carousel-control-prev').on('click', function() {
        clearInterval(intervalo);
        intervalo = setInterval(function() {
            carousel.carousel('next');
        }, velocidad);
    });

}
    );