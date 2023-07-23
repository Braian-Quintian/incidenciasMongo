// Función para manejar errores internos del servidor (Error 500)
function handleInternalServerError(err, res) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error. Please try again later.' });
}
// Función para manejar errores de entrada duplicada (Error 400)
function handleDuplicateEntryError(res) {
    res.status(400).json({ message: 'Error creating bodega. The bodega name already exists. Please provide a unique name for the bodega.' });
}

// Función para manejar errores de datos inválidos (Error 400)
function handleInvalidDataError(res, message) {
    const errorMessage = 'Error de datos inválidos: ' + message; // Agrega un prefijo al mensaje de error
    res.status(400).json({ message: errorMessage });
}

// Función para manejar errores de bodega no existente (Error 400)
function handleNoExist(res) {
    res.status(400).json({ message: 'Error creating bodega. The user to join does not exist.' });
}

export {
    handleInternalServerError,
    handleDuplicateEntryError,
    handleInvalidDataError,
    handleNoExist
}