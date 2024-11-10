document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const targetImage = document.getElementById(targetId);

        // Alternar visibilidad de la imagen adicional seleccionada
        if (targetImage) {
            if (targetImage.classList.contains('oculto')) {
                targetImage.classList.remove('oculto');
            } else {
                targetImage.classList.add('oculto');
            }
        }
    });
});








document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 
    alert('Su compra ha sido realizada con éxito');
});














