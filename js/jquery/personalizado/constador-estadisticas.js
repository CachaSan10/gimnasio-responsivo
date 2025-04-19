$(document).ready(function() {
    // Datos de ejemplo (simula datos obtenidos de una API)
    const targetMembers = 550;
    const targetActiveMembers = 480;
    const targetAverageVisits = 350;
    const targetAverageObjetives = 94;
    const animationDuration = 2000; // Duración total de la animación en milisegundos
    const updateInterval = 50; // Intervalo de actualización para la animación en milisegundos

    function animateCounter(elementId, targetValue) {
        const element = $('#' + elementId);
        let currentValue = 0;
        const increment = Math.ceil(targetValue / (animationDuration / updateInterval));

        const intervalId = setInterval(() => {
            currentValue += increment;
            if (currentValue >= targetValue) {
                clearInterval(intervalId);
                currentValue = targetValue;
            }
            element.text(currentValue);
        }, updateInterval);
    }

    // Iniciar las animaciones
    animateCounter('total-members', targetMembers);
    animateCounter('active-members', targetActiveMembers);
    animateCounter('average-visits', targetAverageVisits);
    animateCounter('average-objetives', targetAverageObjetives);
});