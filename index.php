<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ramos_tarea4</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Formulario dinámico</h1>
        <form id="myForm" action="#" method="POST">
        <div id="inputsContainer"></div>
            <button id="addInputBtn" class="btn btn-primary" type="button">Agregar nuevo input</button>
            <button id="removeInputBtn" class="btn btn-danger" type="button">Eliminar ultimo input</button>
            <button id="submitBtn" class="btn btn-success" type="submit">Enviar Formulario</button>
        </form>
    </div>
    <script src="script.js"></script>
</body>
</html>