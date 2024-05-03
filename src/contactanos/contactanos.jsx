document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const enviar = document.getElementById('enviar');

    // Agrega un evento de cambio a todos los campos del formulario
    form.addEventListener('change', function () {
        // Verifica si todos los campos requeridos están llenos
        const isValid = [...form.elements].every(element => {
            return element.checkValidity();
        });

        // Habilita o deshabilita el botón según la validez de los campos
        enviar.disabled = !isValid;
    });
});
