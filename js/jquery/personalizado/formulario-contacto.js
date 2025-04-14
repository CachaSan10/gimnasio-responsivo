$(document).ready(function() {
    const contactForm = $('#contactForm');
    const loadingSpinner = $('#loadingSpinner');
    const confirmationModal = new bootstrap.Modal($('#confirmationModal')[0]);

    // Función para validar un campo y actualizar la UI
    function validateField(input) {
        const $input = $(input);
        const feedback = $input.next('.invalid-feedback');
        const isValid = input.checkValidity();

        if (isValid) {
            $input.removeClass('is-invalid').addClass('is-valid');
            feedback.hide();
        } else {
            $input.removeClass('is-valid').addClass('is-invalid');
            feedback.show();
        }
    }

    // Validar campos en tiempo real
    contactForm.find('input[type="text"], input[type="email"], input[type="tel"], textarea').on('input', function() {
        validateField(this);
    });
    contactForm.find('select').on('change', function() {
        validateField(this);
    });
    contactForm.find('input[type="radio"]').on('change', function() {
        const name = $(this).attr('name');
        const radioGroup = $(`input[name="${name}"]`);
        const feedback = radioGroup.closest('.mb-3').find('.invalid-feedback');
        if ($(`input[name="${name}"]:checked`).length > 0) {
            radioGroup.removeClass('is-invalid').addClass('is-valid');
            feedback.hide();
        } else {
            radioGroup.removeClass('is-valid').addClass('is-invalid');
            feedback.show();
        }
    });
    contactForm.find('input[type="checkbox"]').on('change', function() {
        const $this = $(this);
        const feedback = $this.closest('.mb-3').find('.invalid-feedback');
        if (this.checked) {
            $this.removeClass('is-invalid').addClass('is-valid');
            feedback.hide();
        } else {
            $this.removeClass('is-valid').addClass('is-invalid');
            feedback.show();
        }
    });

    contactForm.on('submit', function(event) {
        event.preventDefault();
        let isValidForm = true;

        contactForm.find('input[type="text"], input[type="email"], input[type="tel"], textarea, select, input[type="radio"], input[type="checkbox"]').each(function() {
            validateField(this);
            if (!this.checkValidity()) {
                isValidForm = false;
            }
            if ($(this).attr('type') === 'radio') {
                const name = $(this).attr('name');
                const radioGroup = $(`input[name="${name}"]`);
                const feedback = radioGroup.closest('.mb-3').find('.invalid-feedback');
                if ($(`input[name="${name}"]:checked`).length === 0) {
                    radioGroup.addClass('is-invalid');
                    feedback.show();
                    isValidForm = false;
                }
            }
            if ($(this).attr('type') === 'checkbox' && $(this).attr('required') && !this.checked) {
                const $this = $(this);
                const feedback = $this.closest('.mb-3').find('.invalid-feedback');
                $this.addClass('is-invalid');
                feedback.show();
                isValidForm = false;
            }
        });

        if (isValidForm) {
            // Mostrar el spinner con fadeIn
            loadingSpinner.fadeIn();

            // Simulación de envío exitoso
            setTimeout(() => {
                // Ocultar el spinner con fadeOut
                loadingSpinner.fadeOut('fast', function() {
                    contactForm[0].reset();
                    contactForm.find('.is-valid').removeClass('is-valid');
                    confirmationModal.show();
                });
            }, 5000);
        }
    });
});