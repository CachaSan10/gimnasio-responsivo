$(document).ready(function() {
    $("#precioToggle").on("change", function() {
        const mostrarAnual = $(this).prop("checked");

        $("tbody tr:first-child td").each(function() {
            const precioMensual = $(this).data("precio-mensual");
            const precioAnual = $(this).data("precio-anual");

            if (mostrarAnual) {
                $(this).text("$" + precioAnual);
            } else {
                $(this).text("$" + precioMensual);
            }
        });
    });
});