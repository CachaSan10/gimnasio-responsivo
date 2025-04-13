$(document).ready(function() {
    $('#newsletterForm').on('submit', function(event) {
        event.preventDefault();

        if (this.checkValidity()) {
            // Mostrar el spinner y ocultar el botón
            $(this).find('button[type="submit"]').prop('disabled', true).hide();
            $('#spinner-container').fadeIn();
            $('#mensaje-suscripcion').hide(); // Asegurarse de que el mensaje anterior esté oculto

            // Simular una llamada AJAX (reemplazar con tu lógica real)
            setTimeout(function() {
                // Ocultar el spinner y mostrar el mensaje de éxito
                $('#spinner-container').fadeOut(function() {
                    $('#mensaje-suscripcion').fadeIn();
                    // Opcional: Reiniciar el formulario después de un tiempo
                    setTimeout(function() {
                        $('#newsletterForm')[0].reset();
                        $('#mensaje-suscripcion').fadeOut();
                        $('#newsletterForm').find('button[type="submit"]').prop('disabled', false).show();
                    }, 3000);
                });
            }, 2000); // Simula un tiempo de espera de 2 segundos
        } else {
            $(this).addClass('was-validated');
        }
    });

    // Limpiar la clase 'was-validated' al escribir
    $('#newsletterForm input[type="email"]').on('input', function() {
        $('#newsletterForm').removeClass('was-validated');
    });
});