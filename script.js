document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const inputsContainer = document.getElementById('inputsContainer');
    const addInputBtn = document.getElementById('addInputBtn');
    const removeInputBtn = document.getElementById('removeInputBtn');

    let inputCount = 0;

    // Función para crear un nuevo input
    function createInput() {
        const input = document.createElement('input');
        input.type = 'text';
        input.name = `input${inputCount}`;
        input.placeholder = 'Ingrese un valor';

        inputsContainer.appendChild(input);

        inputCount++;
    }

    // Evento para agregar un nuevo input
    addInputBtn.addEventListener('click', function() {
        createInput();
    });

    // Evento para eliminar el último input
    removeInputBtn.addEventListener('click', function() {
        if (inputCount > 0) {
            inputsContainer.removeChild(inputsContainer.lastChild);
            inputCount--;
        }
    });

    // Evento para validar y enviar el formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let isValid = true;

        // Verificar que todos los inputs estén llenos
        const inputs = Array.from(inputsContainer.getElementsByTagName('input'));
        inputs.forEach(function(input) {
            if (input.value.trim() === '') {
                isValid = false;
                input.style.border = '1px solid red';
            } else {
                input.style.border = '';
            }
        });

        if (isValid) {
            // Enviar el formulario
            alert('Formulario enviado exitosamente!');
            form.reset();
        } else {
            alert('Por favor, complete todos los campos.');
        }
    });
});